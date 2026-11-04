---
title: "Pustakawan"
created: "2026-09-20T12:40:00-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, academic-integrity, human-ai-collaboration]
pedagogy: [scaffolding, inquiry-based-learning, collaborative-learning, metacognition]
technology: [generative-ai, llm, knowledge-graph, recommender-systems-and-learning-paths, human-in-the-loop-ai, educational-nlp]
ethics: [trust, trust-calibration, ethics]
institutions: [governance, educational-policy-ai]
audience: [librarians, learners]
level: [higher ed, k 12]
confidence: medium
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/librarians"
source_updated: "2026-10-25T20:50:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pustakawan** — profesional perpustakaan dan informasi yang mengajarkan literasi informasi, menjalankan konsultasi riset, membangun koleksi dan sistem penemuan, dan makin sering menjadi mitra manusia bagi alat pencarian dan rekomendasi AI. Dalam penelitian basis pengetahuan ini mereka muncul sebagai orang-orang yang menangani pertanyaan kredibilitas yang tidak dapat diselesaikan model — apakah sebuah paten, standar teknis, atau laporan industri layak diandalkan — dan sebagai mitra dalam ko-desain mata kuliah dan kebijakan. Tempat mereka dalam [[ai-education|AI dalam pendidikan]] karena itu ganda: sebagai pendidik yang mengajarkan evaluasi sumber dan strategi pencarian, dan sebagai [[human-in-the-loop-ai|lapisan manusia]] di dalam sistem yang dibangun di sekitar pengambilan berbasis AI.

## Pertanyaan yang Perlu Dipertimbangkan

- AI kini dapat menjawab dalam hitungan detik pertanyaan referensi faktual yang dahulu ditangani pustakawan. Bagian mana dari pekerjaan itu yang pernah menjadi *jawabannya* — dan bagian mana yang merupakan pertimbangan tentang apakah sebuah sumber layak dipercaya?
- Dalam studi pustakawan tertanam, pertanyaan evaluasi sumber mendominasi konsultasi (38.5%) justru pada kasus-kasus di mana AI paling tidak yakin. Apakah itu kegagalan desain yang perlu diperbaiki, atau bukti bahwa pertimbangan kredibilitas menolak otomatisasi?
- [[genai-academic-search-workshop|Lokakarya CHIIR 2026]] melaporkan kesenjangan kepercayaan — siswa [[trust-calibration|terlalu mempercayai]] GenAI sementara fakultas tidak mempercayainya. Siapa yang menutup kesenjangan seperti itu: pustakawan, instruktur, atau antarmuka yang menunjukkan sumber dan keyakinannya?
- [[ithaka-sr-ai-skills-college-graduates-2026|Ithaka S+R]] menemukan bahwa institusi tidak memiliki konsensus tentang apa itu keterampilan AI maupun kerangka untuk menilainya. Apakah pengajaran literasi informasi adalah rumah alami bagi pekerjaan itu — dan apakah mengatakan demikian berarti meminta perpustakaan memikul beban yang tidak sepadan dengan stafnya?

## Pendahuluan

Pustakawan adalah profesional yang berada di antara pertanyaan pembelajar dan rekam ilmiah: pustakawan referensi dan liaison, spesialis subjek, pustakawan pengajar yang menyampaikan instruksi literasi informasi, serta staf yang mengelola koleksi dan repositori. Dalam [[ai-education|AI dalam pendidikan]] mereka disebut jauh lebih jarang daripada [[teacher-role|guru]] dan [[administrator|administrator]], namun korpus memberi mereka peran yang spesifik dan dapat diuji. Mereka adalah jawaban manusia atas masalah kredibilitas yang diciptakan [[generative-ai]], instruktur yang mengajarkan [[evaluative-judgment]] dan strategi pencarian alih-alih sekadar menyediakan sumber, dan — dalam kasus terkuat di basis pengetahuan ini — komponen yang dirancang dari sebuah sistem AI alih-alih layanan di sampingnya.

Halaman ini memperlakukan peran itu sebagai berbeda dari tetangganya. [[educational-technology-developers]] membangun sistem pengambilan dan rekomendasi; pustakawan memutuskan apa yang tidak boleh dipercaya untuk disimpulkan sistem tersebut. [[academic-integrity]] membingkai penggunaan AI sebagai kepengarangan dan pengungkapan; pembingkaian pustakawan — atribusi, provenans, akses — berdekatan tetapi lebih konkret.

## Literasi informasi sebagai pengajaran, bukan sekadar bantuan

Bukti paling rinci basis pengetahuan ini tentang peran tersebut berasal dari [[ai-assisted-seminar-learning-information-literacy-2026|platform seminar pustakawan tertanam Huang]], yang dibangun untuk tim riset teknik dalam kuasi-eksperimen dengan 60 siswa di tiga program selama delapan minggu (30 pada platform terintegrasi, 30 pada instruksi perpustakaan konvensional). Kelompok terintegrasi memperoleh 0.78 poin pada instrumen literasi informasi berbasis ACRL berskala lima poin dibandingkan 0.25 untuk kontrol, dengan keuntungan dalam kelompok terbesar pada keterampilan pencarian (+0.87) dan evaluasi sumber (+0.83), diikuti sintesis informasi (+0.73) dan kesadaran penggunaan etis (+0.70). Yang perlu dicatat, item berbasis kinerja saja tetap menghasilkan efek besar, sehingga keuntungan itu bukan semata keyakinan. Apa yang diajarkan bersesuaian dengan kerja perpustakaan: pembentukan strategi pencarian, penaksiran sumber, sitasi, dan navigasi repositori — empat kategori yang kemudian mendominasi log konsultasi.

Korpus yang lebih luas menambahkan pertanyaan kepegawaian dan penyampaian. [[genai-academic-search-workshop|Laporan lokakarya CHIIR 2026]] mendeskripsikan [[curriculum-design|kurikulum]] literasi digital 15 minggu seorang pustakawan yang dibangun di atas survei terhadap 2,076 siswa dan 101 pustakawan, dan mencatat penilaian para pemapar bahwa lokakarya sesi tunggal meninggalkan siswa dengan fondasi yang salah dipahami; laporan yang sama menghitung jangkauan pengajaran seorang pustakawan pada sekitar 1,700 mahasiswa tahun pertama.

## Di mana AI paling lemah, pustakawan memikul bebannya

Platform seminar itu membagi kerja secara sengaja: algoritma menangani pengambilan dalam skala besar, manusia menangani evaluasi dalam ketidakpastian — dan log menunjukkan pembagian itu bekerja. Di seluruh 312 konsultasi (10.4 per peserta), evaluasi dan kualitas sumber mencakup 38.5%, pembentukan strategi pencarian 29.2%, manajemen sitasi 18.6%, dan navigasi repositori 13.7%, dan 73.4% dijawab dalam waktu enam jam. Penulis menghubungkannya langsung dengan kinerja model: [[recommender-systems-and-learning-paths|mesin rekomendasi]] mencapai presisi 0.68 dan recall 0.61, naik dari basis kata kunci Boolean (0.52 dan 0.48) tetapi masih tidak memadai untuk penilaian kredibilitas atas paten dan standar, dan penanganan kueri bahasa alami menjawab 72.8% kueri khusus teknik dengan benar. Kepuasan mengikuti urutan yang sama — bantuan pustakawan tertinggi pada 4.3 dari 5.0, di depan rekomendasi (4.1), kueri (3.9), seminar (3.8), jalur pembelajaran (3.6), dan [[knowledge-graph|graf pengetahuan]] (3.4) — dan wawancara mencatat 21 dari 30 siswa menyebut kepercayaan pada kehadiran pustakawan. Penggunaannya heterogen — 11 dari 30 bersandar pada AI, 8 pada pustakawan, dan 11 menggunakan keduanya.

Ketegangan itu memotong dua arah. Kasus yang paling buruk ditangani AI adalah pertanyaan kredibilitas, dan penulis platform itu sendiri menyimpulkan bahwa mempertahankan pakar manusia di titik keputusan kredibilitas adalah pelajaran praktisnya. Tetapi studi itu bersifat satu lokasi dan tidak teracak, tiga komponennya tidak pernah diisolasi, dan penulisnya menyebut hasilnya "sekadar pendahuluan," mencatat bahwa persistensi setelah dukungan pustakawan ditarik tidak pernah diuji. Apakah lapisan manusia adalah penyebab keuntungan atau jaring pengaman di sekitar mesin rekomendasi berpresisi 0.68 masih terbuka.

## Ko-desain, kemitraan, dan siapa yang membayar verifikasi

Pustakawan juga muncul sebagai ko-perancang alih-alih penyedia layanan. [[maybee-disruptive-partnerships-sap-2025|Maybee, LeGrand, dan Fundator]] mendokumentasikan Partners for Algorithmic Literacy di Purdue — komunitas belajar siswa–fakultas enam minggu yang difasilitasi pustakawan akademik, di mana mahasiswa sarjana dan fakultas bersama-sama menghasilkan [[educational-policy-ai|kebijakan]] mata kuliah AI dan [[group-work|proyek kelompok]] terintegrasi AI. Penulis membingkainya sebagai alternatif bagi narasi defisit tentang [[ai-misuse-learning-harm|penyalahgunaan AI]] oleh siswa, dan refleksi siswa program SPIRaL menunjukkan literasi informasi yang dipelajari ulang: peserta awalnya menyamakannya dengan evaluasi sumber, lalu bergerak menuju pembacaan sebagai praktik ilmiah berlapis yang terkait dengan [[agency]]. Pergeseran itu — dari memeriksa sumber ke menilai produksi pengetahuan — adalah pergeseran yang berada dalam posisi dihasilkan pustakawan.

Dua alur lain menetapkan batas peran itu. [[pearls-epistemic-verification-2026|Kerangka PEARLS]] menyebut Access, Legitimacy, dan Source di antara enam dimensi verifikasinya dan mencatat bahwa verifikasi mengonsumsi akses basis data, bahasa disiplin, dan kadang alat berbayar — sehingga pembelajar dengan sumber daya lebih sedikit memikul beban lebih besar untuk membuktikan penggunaan yang bertanggung jawab, dan pustakawan disebut di antara pihak yang dibutuhkan ko-desain. [[aarc-ai-research-competency-2026|Kerangka AARC]] membuat tujuan instruksionalnya eksplisit: memverifikasi, menyitasi, dan merefleksi sebagai komitmen berulang, dinilai melalui proses penelitian — termasuk mendeteksi fabrikasi dan bias — alih-alih melalui produknya. Tinjauan [[hingle-collaborative-ai-literacy-2025|Hingle dan Johri]] menunjukkan bahwa desain yang sudah digunakan perpustakaan dapat dialihkan: manfaat kerja kelompok bagi literasi informasi dapat digeneralisasi ke pembelajaran [[ai-literacy]], termasuk dengan [[agentic-ai|agen AI]] sebagai mitra.

## Implikasi bagi AI dalam pendidikan

- **Pertahankan manusia di titik keputusan kredibilitas.** Presisi sekitar 0.68 meninggalkan kira-kira sepertiga materi yang disajikan tidak cocok, dan evaluasi sumber adalah jenis konsultasi yang paling banyak diminta — isyarat desain bagi lapisan pencarian atau rekomendasi AI mana pun.
- **Perlakukan literasi informasi sebagai pengajaran.** Keuntungan yang bertahan pada item berbasis kinerja adalah strategi pencarian dan penaksiran sumber, yang sudah diajarkan pustakawan pengajar dan juga dibutuhkan untuk mengatribusikan dan memverifikasi keluaran AI ([[academic-integrity]], [[critical-thinking]]).
- **Rancang untuk jalur yang heterogen.** Dengan kelompok yang kira-kira berimbang lebih memilih AI, pustakawan, atau keduanya, perutean konsultasi berdasarkan subjek dan beban kerja menyerap 312 konsultasi pada 10.4 per peserta; satu jalur wajib tunggal akan kurang melayani sebagian pembelajar.
- **Buat keyakinan dan sumber terlihat.** Alur pencarian-sebagai-pembelajaran dalam lokakarya itu menanyakan proses kognitif mana yang tidak boleh diserahkan dan menyerukan antarmuka yang mempertahankan titik keputusan — sebuah [[scaffolding|perancah]] yang dapat ditentukan pustakawan dari standar kerja biasa mereka tentang visibilitas sumber.
- **Anggarkan lapisan manusia, bukan hanya modelnya.** Konsultasi dijawab dalam hitungan jam, dalam skala besar, karena staf dirutekan secara sengaja; mengasumsikan pembelajar akan menangani pertimbangan kredibilitas sendiri memindahkan biaya itu kepada orang-orang yang paling tidak siap membayarnya.

## Miskonsepsi Umum

**"Pustakawan bersifat periferal bagi AI dalam pendidikan."** Mereka memegang peran yang spesifik dan dapat diuji, dan korpus mengukurnya. Di seluruh **312 konsultasi (10.4 per peserta)**, evaluasi dan kualitas sumber mencakup **38.5%**, pembentukan strategi pencarian **29.2%**, manajemen sitasi **18.6%**, dan navigasi repositori **13.7%** — dan **73.4% dijawab dalam waktu enam jam**. Itu bukan layanan periferal; itu fungsi literasi informasi yang memikul beban yang tidak dapat dipikul AI.

**"Pencarian AI menjawab pertanyaan yang dahulu dibawa siswa ke pustakawan."** Dalam studi pustakawan tertanam, **pertanyaan evaluasi sumber mendominasi konsultasi (38.5%) justru pada kasus-kasus di mana AI paling tidak yakin**. Ketidakpastian alat itu merutekan pekerjaan ke kapasitas manusia yang dapat menyelesaikannya, yang menjadikan pola yang teramati sebagai pembagian kerja alih-alih ketinggalan zaman.

**"Literasi informasi adalah sesi induksi sekali jalan."** Itu pengajaran, bukan bantuan: pertanyaan yang dibawa siswa adalah masalah evaluasi dan strategi — apakah sumber ini kredibel, bagaimana saya menelusuri ini — yang merupakan keterampilan yang dapat diajarkan alih-alih transaksi yang perlu diselesaikan. Memperlakukan layanan sebagai bantuan mengubah kurikulum menjadi meja bantuan dan kehilangan kapabilitas yang tahan lama.

**"Siapa yang membayar verifikasi adalah masalah orang lain."** Beban konsultasi jatuh pada kepegawaian perpustakaan, dan pertanyaan kertas itu sendiri adalah apakah meminta perpustakaan memikulnya melampaui jumlah staf mereka. Ko-desain dan kemitraan adalah jawaban yang direkomendasikan literatur justru karena biaya verifikasi itu nyata dan jatuh pada unit yang tidak menganggarkannya.

## Konsep terkait

- [[ai-literacy]]
- [[evaluative-judgment]]
- [[critical-thinking]]
- [[academic-integrity]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[scaffolding]]
- [[inquiry-based-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[learners]]

## Artikel terkait

- [[ai-assisted-seminar-learning-information-literacy-2026]] — Platform seminar pustakawan tertanam; 312 konsultasi yang dipimpin evaluasi sumber
- [[genai-academic-search-workshop]] — Lokakarya CHIIR 2026 tentang GenAI dan pencarian akademik; kesenjangan kepercayaan pustakawan
- [[maybee-disruptive-partnerships-sap-2025]] — Pustakawan akademik yang merancang bersama literasi AI dengan siswa sebagai mitra
- [[aarc-ai-research-competency-2026]] — Verifikasi, sitasi, refleksi sebagai komitmen riset yang dapat diajarkan
- [[pearls-epistemic-verification-2026]] — Protokol verifikasi enam dimensi; akses dan legitimasi sebagai gerbang
- [[hingle-collaborative-ai-literacy-2025]] — Pembelajaran kolaboratif untuk literasi AI; manfaat literasi informasi ikut terbawa
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Instruktur menempatkan atribusi dan penggunaan bertanggung jawab tertinggi, tetapi hanya mengajarkan sedikit dari 26 keterampilan
- [[bird-multimodal-educational-literature-2026]] — Alat kompleksitas teks yang dibangun untuk pengguna nonteknis seperti guru bahasa Inggris dan pustakawan
- [[cognitive-offloading-llm-synthesis-writing]] — Apa yang diserahkan pembelajar ketika AI menyintesis sumber bagi mereka
- [[citation-errors-hallucinations-computing-education-2026]] — Sitasi yang difabrikasi dan keliru sebagai masalah verifikasi
