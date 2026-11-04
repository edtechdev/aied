---
title: "Penelitian Pendidikan Berbantuan AI"
created: "2026-10-05T10:45:00-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
connected_resources: [learning-design-wiki]
updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/ai-assisted-educational-research"
source_updated: "2026-10-26T11:15:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis:** Penelitian pendidikan berbantuan AI adalah penggunaan AI sebagai instrumen kerja keilmuan bidang ini sendiri — mencari dan mengambil literatur, menyaring catatan untuk tinjauan, mengode data kualitatif, menganalisis data, menyusun dan menyunting manuskrip, serta refleksi yang menanyakan apa yang dilakukan alat-alat itu terhadap pengetahuan yang dihasilkan. Ini berbeda dari penelitian *tentang* AI dalam pendidikan: rancangan yang dipakai untuk mempelajari apakah AI membantu pembelajar termasuk dalam [[research-methods-aied]], penilaian atas sistem AI termasuk dalam [[ai-ed-evaluation]], dan pembacaan satu studi AIED termasuk dalam [[interpreting-and-applying-aied-research]]. Halaman ini membahas alur kerja peneliti itu sendiri dan penyelidikan peneliti-praktisi — beasiswa pengajaran dan pembelajaran serta penelitian kelas — dan taruhan epistemik ketika otomatisasi memasuki salah satunya. Buktinya tipis dan baru: sebuah usulan kerangka, catatan reflektif satu tim tinjauan, studi kelompok fokus berskala kecil, dua studi bibliometrik, laporan lokakarya, dan studi kasus satu peneliti. Halaman ini menggambarkan arah perjalanan, bukan praktik yang sudah mapan, dan alur penelitian praktisi adalah yang paling tipis dari semuanya.

## Pertanyaan yang Perlu Dipertimbangkan

- Siapa yang dihitung sebagai peneliti di sini: akademisi yang didanai, mahasiswa pascasarjana, dosen yang meneliti kelasnya sendiri? Manakah di antaranya yang benar-benar dideskripsikan oleh bukti?
- Sebuah penyaring AI mengeluarkan satu studi dari tinjauan Anda. Siapa yang bertanggung jawab atas keputusan itu — vendor, alat, protokol, atau Anda?
- Ketika sebuah model merangkum sumber yang belum Anda baca, bagian mana dari kerja keilmuan yang berhenti Anda lakukan?
- Pembelajar simulasi dapat menguji sebuah tutor pada banyak profil. Apa yang akan Anda periksa sebelum mempercayai putusannya tentang siswa nyata?
- Penyelidikan praktisi biasanya lokal dan kecil. Apakah buktinya harus memenuhi standar uji coba yang didanai, atau ditimbang secara berbeda karena konteksnya justru menjadi intinya?
- Jika AI membantu menyusun sebuah makalah, apa yang harus diberitahukan kepada pembaca, dan di mana pengungkapan itu sebaiknya berada?

## Pendahuluan

Penelitian pendidikan berbantuan AI adalah bidang ini mengarahkan alat AI ke pekerjaannya sendiri. Objek kajiannya bukan pembelajar yang memakai tutor AI, melainkan peneliti yang memakai model untuk mencari, menyaring, mengekstrak, mengode, menganalisis, atau menulis. Yang berubah adalah alur kerja peneliti dan, lebih diam-diam, kriteria yang membuat keluarannya dihitung sebagai bukti.

Halaman ini sengaja tidak membahas penelitian *tentang* AI dalam pendidikan. Pertanyaan apakah tutor AI meningkatkan pembelajaran dibahas oleh [[research-methods-aied]], penilaian atas sistem AI oleh [[ai-ed-evaluation]], dan pembacaan hati-hati atas satu studi oleh [[interpreting-and-applying-aied-research]] dan [[limitations-in-aied-research]]. Kedua literatur ini sering dicampuradukkan, dan klaim tentang perkakas dari yang kedua kerap dipinjam untuk menopang yang pertama.

Cakupannya membentang dari pencarian literatur melalui penyaringan, pengodean, analisis, dan penulisan, serta mencakup refleksi epistemologis yang menanyakan apa yang dilakukan otomatisasi terhadap pengetahuan yang dihasilkan suatu bidang. Cakupan itu juga mencakup penelitian praktisi: beasiswa pengajaran dan pembelajaran serta penyelidikan kelas, ketika seorang guru meneliti praktiknya sendiri. Alur itu adalah bagian terlemah halaman ini, dan bagian-bagian di bawah mengatakannya alih-alih menghaluskannya.

## Bagaimana AI masuk ke alur kerja penelitian

Catatan tentang penggunaan lebih konsisten daripada bukti tentang efeknya. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai dan Chan (2026)]] mewawancarai 28 mahasiswa peneliti pascasarjana dalam tujuh kelompok fokus di satu institusi dan menemukan bahwa 27 dari 28 menggunakan AI generatif di suatu titik dalam penelitian mereka: ideasi, tinjauan literatur, penjelasan, pemrosesan data, pemrograman, penulisan akademik, penyuntingan, dan penerjemahan.

Partisipan mereka terkalibrasi, bukan mudah percaya. Mereka mencocokkan alat dengan tugas berdasarkan taruhan yang dipersepsikan dan tuntutan intelektual, memakai AI lebih intens pada pekerjaan prosedural berisiko rendah, dan tetap berhati-hati ketika kontribusi keilmuan menjadi pusatnya. Mereka juga mempertahankan pengawasan manusia sepanjang proses, memperlakukan model sebagai asisten yang bisa "menyesatkan" atau "sepenuhnya salah."

Temuan kebijakannya adalah yang praktis. Panduan institusional yang ada membahas pengajaran, pembelajaran, dan penilaian, dan para partisipan mengalaminya sebagai abstrak dan tidak selaras dengan praktik penelitian. Para penulis mengusulkan pedoman berorientasi peneliti, dibangun di atas kerangka literasi AI empat dimensi, sebagai perancah perkembangan alih-alih buku aturan.

Studi ini mencakup satu institusi, kelompok 28 orang yang memilih sendiri, dan catatan yang dilaporkan sendiri; mahasiswa mungkin melaporkan penggunaan lebih rendah karena alasan integritas. Studi ini menggambarkan bagaimana kelompok yang kapabel memakai alat-alat ini, bukan apa yang dihasilkan penggunaannya.

## Pencarian dan pengambilan literatur

Sebuah laporan lokakarya memetakan agenda, bukan mengukurnya. Workshop CHIIR 2026 tentang AI Generatif dan Pencarian Akademik mempertemukan para peneliti dalam interaksi informasi manusia dan pengambilan informasi, dan laporannya menggambarkan sistem yang dibangun untuk pengambilan dokumen kini merangkum, merekomendasikan, menyintesis, dan bercakap-cakap — mengganggu asumsi bahwa sistem menemukan sumber sementara interpretasi tetap pada pengguna.

Satu lightning talk menguji bagaimana model merekonstruksi akademisi. Terhadap data acuan OpenAlex dan Google Scholar untuk 1,596 penulis benih di 10 disiplin dan 8 kawasan global, peneliti dengan sitasi tinggi direkonstruksi sekitar dua kali lipat laju rekan mereka yang lebih rendah sitasinya, dengan menguji DeepSeek R1, Llama 4 Scout, dan Mixtral 8×7B.

Seorang pustakawan melaporkan "kesenjangan kepercayaan": mahasiswa sering terlalu mempercayai pencarian generatif sementara dosen tidak mempercayainya, dan lokakarya satu sesi dinilai tidak memadai untuk literasi yang bertahan lama. Benang desain yang paling sering dikembalikan para partisipan adalah "gesekan" — menjaga pengguna tetap terlibat dengan kerja kritis, yang kadang tidak nyaman, tempat pembelajaran berasal.

Laporan ini mencakup satu acara tunggal yang memilih sendiri dan sebagian besar mencatat opini, prinsip desain, dan pertanyaan penelitian. Angka-angkanya milik pembicaraan individual, bukan milik lokakarya, dan tidak ada di dalamnya yang menunjukkan bahwa pencarian akademik AI memperbaiki atau merugikan pembelajaran.

## Penyaringan dan otomatisasi tinjauan sistematis

Tinjauan sistematis adalah tempat otomatisasi paling maju, dan tempat batasnya terlihat. [[scaffolding-systematic-reviews-2026|Wang dkk. (2026)]] merefleksikan tinjauan satu tim interdisipliner dan melaporkan bahwa otomatisasi mengurangi beban prosedural terutama pada penyaringan abstrak — alat seperti ASReview, SWIFT-Review, Covidence, AIScreenR, dan MetaMate — sementara ekstraksi data, rekonsiliasi, dan sintesis tetap pada peninjau manusia. Pendampingan dan diskusi sejawat berfungsi sebagai infrastruktur metodologis, bukan sebagai kesopanan.

Kesimpulan mereka adalah pembagian kerja, bukan penyerahan: tugaskan otomatisasi pada beban prosedural, verifikasi setiap keluaran, dan pertahankan keputusan interpretatif pada manusia. Catatan itu adalah refleksi satu tim tanpa kondisi pembanding, jadi strateginya diuraikan, bukan diuji.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta dan Lin (2026)]] mengukur masalah pelaporan itu pada 888 makalah otomatisasi tinjauan yang membawa 14,726 butir anotasi. Sejak 2023, 38.0% makalah perangkat lunak dan produk tidak melaporkan evaluasi sama sekali, dibandingkan 9.3% makalah LLM. Kesenjangan itu bertahan setelah stratifikasi: dalam penyaringan dan seleksi, makalah perangkat lunak rata-rata memiliki 3.2 butir evaluasi substantif dengan 39.3% melaporkan tidak ada, sementara makalah LLM rata-rata 7.3 butir dengan laju tanpa evaluasi 3.8%.

Penilaian yang menguntungkan tidak berarti kelayakan untuk didelegasikan. Di antara 118 makalah LLM dengan evaluasi positif semata, 52% tetap melaporkan setidaknya satu kekhawatiran bahwa alur kerjanya berada di bawah standar yang dibutuhkan untuk perannya. Akses model sangat didominasi proprietary: 84.1% penggunaan LLM bergantung pada sistem proprietary atau terhosting, 11.0% campuran, dan hanya 4.9% berbobot terbuka.

Dari pola-pola ini para penulis menurunkan PRISMA-LLM, kerangka tiga lapis yang lima tingkat implementasinya merupakan tingkatan pengungkapan, bukan tingkatan risiko. Ini adalah usulan yang ditawarkan untuk diuji, bukan ekstensi resmi yang didukung oleh PRISMA Executive. Diamnya sebuah makalah, mereka memperingatkan, bukan bukti bahwa validasi tidak ada — validasi itu bisa berada di laporan produk, protokol, atau repositori.

## Pengodean dan analisis kualitatif

Analisis kualitatif adalah tahap ketika interpretasi adalah produknya, yang membuat delegasi lebih sulit dipertahankan. Halaman [[qualitative-research|Penelitian Kualitatif]] mengumpulkan bukti korpus tentang pengodean berbantuan AI, termasuk studi yang menunjukkan bahwa kesepakatan manusia–model tidak sama dengan kualitas pengodean dan bahwa kesalahan dapat merambat melalui analisis temporal. Literatur itu memperlakukan model sebagai alat penskalaan yang keluarannya menuntut verifikasi terhadap pertimbangan manusia.

[[ai-methodologies-science-education-research-2026|Martin dkk. (2026)]] menggambarkan pergeseran peran itu secara langsung. Ketika model pengodean otomatis diterapkan, peneliti bergerak dari mengode data mahasiswa ke memvalidasi keluaran model; ketika model tanpa pengawasan mengelompokkan penalaran, algoritmalah yang melakukan analisis eksploratif awal. Para peneliti, argumen mereka, semakin membutuhkan keterampilan sains data di samping keahlian kualitatif, kuantitatif, dan teoretis.

Kerangka mereka juga menyediakan pemeriksaan yang penting di sini: AI yang dapat dijelaskan dapat mengungkap apakah pengodean otomatis melacak pemahaman semantik atau hanya kata kunci. Pipeline pengodean yang sepakat dengan label manusia bisa jadi tetap membaca hal yang salah.

## Analisis data dan taruhan epistemik

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen dan Graulich (2026)]] menekan produksi pengetahuan bidang ini sendiri, dan artikel mereka adalah tulang punggung halaman ini. Berpijak pada uraian Hasok Chang (2004) tentang iterasi epistemik — tahap-tahap pengetahuan yang berurutan yang saling membangun menuju tujuan epistemik — mereka menarik paralel dengan perkembangan termometer selama sekitar 150 tahun dan berargumen bahwa bidang ini kini mungkin berada di dalam iterasi yang sebanding.

Kekhawatiran utama mereka bersifat epistemik, bukan teknis. Masalah pengukuran nomik Chang menyatakan bahwa mengukur suatu kuantitas menuntut hukum yang menghubungkannya dengan sesuatu yang teramati, namun hukum itu tidak dapat diuji secara empiris tanpa sudah mengetahui kuantitas tersebut. Fungsi pengukuran yang diturunkan dari AI, yang muncul dari data pelatihan dan optimasi alih-alih dari peneliti, mungkin memperkuat alih-alih menyelesaikan hal ini, karena fungsi itu bisa tampak presisi dan prediktif sementara tetap opak.

Kerangka itu memiliki tujuh fase: pembingkaian masalah; instrumentasi dan pengukuran; eksperimentasi dan inferensi berbasis bukti; perbandingan dan replikasi; pembangunan norma dan konsensus; implementasi dan konsekuensinya; serta penyempurnaan berkelanjutan. Para penulis menyajikannya sebagai dimensi analitis yang dapat berulang, tumpang tindih, atau tidak ada, bukan sebagai urutan yang tervalidasi.

Keterbandingan adalah fase dengan ujung keadilan yang paling tajam. Prinsip Regnault menuntut agar sebuah instrumen memberi bacaan yang sama pada kondisi yang sama dan agar instrumen sejenis sepakat — tetapi keterbandingan harus meluas melintasi populasi mahasiswa, dan pembelajaran mesin cenderung mengode gagasan kanonis lebih baik daripada cara beragam mahasiswa mengungkapkan gagasan yang lebih lemah.

Mereka juga menyebut masalah akuntabilitas. Peneliti memakai model terlatih yang data pelatihan, penyetelan halus, dan tujuannya mungkin tidak mereka ketahui, menambah lapisan ketergantungan epistemik; karena sistem ini muncul dari jaringan sosio-teknis, tanggung jawab menjadi sulit dialokasikan — sebuah "masalah banyak tangan."

Kejujuran yang diperlukan adalah bahwa artikel itu tidak melaporkan data dan tidak menetapkan efek pembelajaran apa pun. Artikel itu tidak menunjukkan bahwa metodologi AI memperbaiki penelitian atau menghasilkan kesimpulan yang lebih valid; perbandingan itu diajukan sebagai kerja masa depan, dan para penulis mengakui bahwa hipotesis mereka "bisa jadi terbukti keliru."

## Penulisan penelitian, sitasi, dan integritas

Penulisan adalah tempat bantuan AI paling terlihat dan tempat kegagalannya paling berkonsekuensi, karena sebuah referensi adalah klaim akuntabilitas. [[citation-errors-hallucinations-computing-education-2026|Denny dkk. (2026)]] mengaudit seluruh ACM Digital Library — 723,930 publikasi dan 15,872,533 referensi — dan melacak 113,588 referensi dari 5,225 makalah pendidikan komputasi yang terbit sejak 2021.

Mereka memverifikasi secara manual 828 catatan mencurigakan dan menemukan 30 referensi yang memuat informasi bibliografis yang terbukti difabrikasi pada 14 makalah, semuanya dari 2025 dan 2026. Di SIGCSE Technical Symposium jumlahnya naik dari 3 pada prosiding 2025 menjadi 17 pada 2026, muncul di 2.3% makalah prosiding 2026. Tujuh belas dari 30 itu adalah hibrida yang memasangkan judul nyata dengan penulis yang difabrikasi atau salah.

Hitungan mereka sengaja merupakan batas bawah, dan mereka menyajikan masalahnya sebagai tanggung jawab bersama alih-alih sesuatu yang diselesaikan perangkat lunak. Penulis harus memverifikasi setiap karya yang dikutip, terutama ketika AI generatif dipakai dalam penulisan; peninjau tidak dapat mengaudit setiap referensi, sehingga venue mengadopsi pemeriksaan bertarget; penerbit harus memperbaiki metadata. Deteksi otomatis mewarisi cacat metadata yang diperlakukannya sebagai data acuan.

Efek skala dari penulisan AI muncul dalam studi bibliometrik kedua. [[ai-assisted-writing-research-teams|Wang dkk. (2026)]] menganalisis 147,074 publikasi dari jurnal portofolio PLoS dan Nature sejak 2020 dan mengaitkan penulisan berbantuan AI dengan tim yang lebih kecil dan lebih condong junior. Pada pergeseran ekstrem dari tanpa bantuan ke bantuan AI penuh, ukuran tim 22.1% lebih kecil di PLoS dan 45.5% lebih kecil di Nature (Poisson β = −0.250 dan −0.607, keduanya p < 0.01).

Dampaknya tidak jelas merosot. Sekitar 7.34% makalah PLoS berbantuan AI dan 7.40% makalah Nature mencapai 5% teratas FWCI, di atas kedua kelompok pembanding yang ditulis manusia, dan perbandingan yang dipasangkan menunjukkan probabilitas 3.0% dan 2.7% lebih tinggi untuk FWCI 5% teratas (keduanya p < 0.01). Datanya observasional, sehingga para penulis menolak klaim kausal yang kuat.

## Agen persisten dalam lingkungan penelitian

Di luar prompt tunggal, agen persisten sedang ditanamkan di ruang kerja penelitian itu sendiri. [[persistent-ai-agents-academic-research|Alzahrani (2026)]] melaporkan studi kasus 115 hari oleh satu peneliti atas sebuah agen dengan memori yang bertahan lama, berkas lokal, alat eksternal, rutinitas terjadwal, dan peran yang didelegasikan, yang berjalan di ruang kerja satu ilmuwan-dokter.

Hasil deskriptifnya besar. Telemetri agen utama yang dapat dipulihkan memuat 75,671 catatan terdeduplikasi di 96 hari aktif, fraksi hari aktif 0.835; ruang kerja itu memuat 502 berkas terkait memori, 17 direktori agen terkonfigurasi, dan 57 berkas keterampilan. Subset ketat 25 hari pada Mei memuat 627 peristiwa yang diselesaikan model dan 73,950,305 token tercatat, yang 82.9% di antaranya adalah pembacaan cache, dengan pengeluaran sistem teramati sekitar US\$1,961.

Kontribusi utama studi ini adalah kerangka pengukuran — PARE-M — yang dibangun karena hasil yang hendak ditopang agen persisten, seperti tata kelola dan biaya per artefak, tidak terlihat oleh tolok ukur episodik. Temuan negatif sentralnya adalah bahwa volume interaksi agregat tidak menunjukkan berkurangnya masukan manusia: seiring memori dan prosedur menumpuk, cakupan pekerjaan yang didelegasikan meluas, sehingga pola terkuatnya adalah perluasan kapasitas alih-alih substitusi tenaga kerja yang terbukti.

Keterbatasannya adalah keterbatasan yang diundang oleh satu kasus yang mengamati diri sendiri. Satu peneliti adalah pengguna, perancang, sumber data, analis, dan penerima manfaat, tanpa kelompok kontrol, tanpa periode dasar, dan tanpa pengode independen untuk peristiwa tata kelola.

## Pembelajar simulasi sebagai instrumen penelitian dan evaluasi

[[simulating-students|Mensimulasikan siswa]] adalah halaman basis pengetahuan tentang teknik dan fenomena itu: bagaimana membangun pembelajar sintetis yang keadaan pengetahuan dan kesalahannya cukup setia untuk menggantikan seseorang. Halaman ini memperlakukan aparatus yang sama sebagai instrumen penelitian dan evaluasi — untuk apa pembelajar sintetis dipakai ketika sebuah intervensi, instrumen, tolok ukur, atau tutor harus diuji pada skala atau dalam kondisi yang tidak dapat disediakan pembelajar nyata.

Penggunaan yang paling jelas adalah mengevaluasi tutor sepanjang waktu. [[educlaw-bench-pedagogical-llm-agents-2026|Lee dkk. (2026)]] menempatkan agen tutor dalam hubungan 30 hari dengan pembelajar simulasi yang penguasaannya, dari model pelacakan pengetahuan yang dilatih pada data siswa nyata, menggerakkan jawabannya. Saat mengevaluasi 10 adaptor agen, setiap adaptor mendatar dalam 5–10 hari jauh di bawah rujukan pembelajaran ideal, hasil yang tidak dapat dicapai evaluasi satu sesi. Pemeriksaan kalibrasi terhadap akurasi probe teramati menempel pada diagonal (ECE 0.049, Brier 0.033 pada 1.19 juta percobaan).

Kesetiaan adalah prasyaratnya, dan itu terukur. [[beagle-grounded-learner-emulation-2026|Wang dkk. (2026)]] melaporkan divergensi perilaku dari jejak siswa nyata sebesar DKL = 0.31 dibandingkan 0.53 untuk baseline terbaik, dan dalam uji Turing dengan 71 penilai jejaknya secara statistik tidak dapat dibedakan dari data siswa nyata (akurasi 52.8%, d′ = 0.15). Kegagalan yang harus dihindari adalah bias kompetensi: model yang diprompt menyelesaikan tugas terlalu baik untuk menggantikan pemula.

Keadaan keyakinan adalah bagian yang mudah dipalsukan. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar dan Sachan (2026)]] menunjukkan bahwa pada tujuh model dari 4B hingga 120B parameter, simulator meninggalkan miskonsepsi yang ditugaskan dan menyelesaikan ulang dari pengetahuan internalnya pada laju yang hampir seragam di bawah umpan balik bertarget, tidak selaras, dan generik. Mereka mengkuantifikasinya dengan Selective Flip Score dan menaikkan kesetiaan hingga +0.56 melalui pelatihan, yang justru intinya: memprompt sebuah persona tidak membangun seorang pembelajar.

Pembelajar simulasi juga berfungsi sebagai tempat uji terkontrol bagi instrumen evaluasi itu sendiri. [[llm-judged-helpfulness-pedagogy-signal|Fan dkk. (2026)]] memasangkan masing-masing dari tiga basis tutor dengan satu pembelajar simulasi lemah yang tetap di bawah protokol yang telah diregistrasi sebelumnya dan menemukan bahwa rubrik kebermanfaatan serbaguna membawa sedikit sinyal pedagogis, dengan tujuh kebijakan yang membentang 2.3 poin pedagogi yang dinilai di dalam pita 0.25 poin kebermanfaatan yang dinilai. Giliran yang mengungkap jawaban diikuti oleh kerja mandiri siswa yang lebih sedikit pada setiap basis.

Kewaspadaannya harus ada di halaman ini. Putusan simulator hanya sebaik simulatornya, dan cakupannya cenderung ke pembelajar yang paling mudah.

## Penelitian praktisi: SoTL dan penyelidikan kelas

Ini adalah alur yang paling sedikit didokumentasikan korpus. Beasiswa pengajaran dan pembelajaran serta penelitian kelas adalah penyelidikan praktisi — seorang guru meneliti mata kuliahnya sendiri, sering dalam skala kecil, sering sebagai studi diri — dan halaman-halaman yang dikumpulkan di sini tidak menyediakan uraian yang diteliti tentang penggunaan AI dalam mode itu.

Bukti terdekat bersebelahan, bukan tepat sasaran. Mahasiswa pascasarjana dalam [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai dan Chan (2026)]] sedang belajar menjadi peneliti, bukan meneliti pengajaran mereka sendiri. Tim dalam [[scaffolding-systematic-reviews-2026|Wang dkk. (2026)]] melakukan tinjauan interdisipliner formal, bukan proyek lokal. Studi bibliometrik menggambarkan disiplin dan penerbit, bukan kelas.

Pernyataan jujurnya karena itu adalah sebuah celah, bukan temuan. Penyelidikan praktisi berbantuan AI plausibel tersebar luas dan hampir tidak terdokumentasi dalam korpus ini; halaman yang menyajikan bukti otomatisasi tinjauan dan bibliometrik seolah-olah itu menetapkan bagaimana seorang dosen harus memakai AI untuk meneliti pengajarannya sendiri akan melampaui batas.

Yang dapat dibawa melintasi adalah disposisi, bukan hasil: sebutkan peran AI dalam metode, pertahankan keputusan interpretatif pada manusia, dan laporkan apa yang diverifikasi dan tidak.

## Apa yang belum ditetapkan oleh bukti

- **Tidak ada perbandingan langsung.** Martin dkk. mengajukan perbandingan antara metode berbantuan AI dan metode tradisional sebagai kerja masa depan. Tidak ada artikel jangkar yang menunjukkan bahwa metodologi AI menghasilkan kesimpulan yang lebih valid.
- **Rancangan yang tipis di seluruh halaman.** Jangkar-jangkarnya adalah usulan kerangka, catatan reflektif satu tim, laporan lokakarya, studi kelompok fokus, dan bibliometrik observasional. Tidak satu pun merupakan uji coba terkontrol atas metode berbantuan AI.
- **Celah pelaporan, bukan audit praktik.** PRISMA-LLM membaca diamnya tingkat makalah; alur kerja tanpa evaluasi dalam makalahnya bisa tetap tervalidasi di tempat lain.
- **Penelitian praktisi kurang terwakili.** Hanya segelintir halaman di sini yang menyebut SoTL atau penelitian kelas, sehingga korpus tidak dapat mendasari klaim tentang guru yang meneliti praktiknya sendiri.
- **Sasaran yang bergerak.** Alat membaik lebih cepat daripada publikasi, sehingga temuan tentang alur kerja 2025 menggambarkan generasi sistem yang mungkin tidak lagi ada dalam bentuk itu.

## Miskonsepsi Umum

- **"Makalah LLM dan makalah perangkat lunak dievaluasi sama baiknya."** Sejak 2023, **38.0% makalah perangkat lunak dan produk tidak melaporkan evaluasi sama sekali, dibandingkan 9.3% makalah LLM**. Kesenjangannya besar dan berlawanan dengan asumsi bahwa perkakas yang lebih baru diuji kurang ketat.
- **"Stratifikasi berdasarkan tugas memperbaiki kesenjangan itu."** **Kesenjangan itu bertahan setelah stratifikasi**: dalam penyaringan dan seleksi, makalah perangkat lunak rata-rata **3.2 butir evaluasi substantif dengan 39.3% melaporkan tidak ada**, sementara makalah LLM rata-rata lebih banyak. Perbedaannya adalah sifat sistematis dari kelas makalah, bukan dari tugasnya.
- **"Evaluasi yang positif berarti alur kerja itu memenuhi standar yang dimaksudkan."** Di antara **118 makalah LLM dengan evaluasi positif semata, 52% tetap melaporkan setidaknya satu kekhawatiran bahwa alur kerjanya berada di bawah standar yang dibutuhkan untuk perannya**. Separuh dari evaluasi positif itu memuat penyangkalan atas dirinya sendiri.

## Konsep terkait

- [[research-methods-aied]] — payung bagi rancangan yang dipakai untuk mempelajari AI dalam pendidikan
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Artikel terkait

- [[ai-methodologies-science-education-research-2026]] — kerangka reflektif tujuh fase tentang bagaimana metodologi AI dapat mengubah penelitian pendidikan sains (Martin dkk., 2026)
- [[scaffolding-systematic-reviews-2026]] — catatan satu tim tinjauan interdisipliner tentang pendampingan dan integrasi AI yang selektif (Wang dkk., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — bagaimana 28 mahasiswa pascasarjana memakai GenAI di sepanjang alur kerja penelitian, dan pedoman yang mereka sarankan (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — audit berskala bidang atas referensi yang difabrikasi dalam literatur pendidikan komputasi (Denny dkk., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — kerangka pelaporan untuk tinjauan sistematis berbantuan AI, dan celah akuntabilitas yang didokumentasikannya (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — laporan lokakarya CHIIR 2026 tentang AI generatif dan pencarian akademik (Liu, Arguello, Hoeber dkk., 2026)
- [[persistent-ai-agents-academic-research]] — studi kasus satu peneliti tentang agen persisten di ruang kerja penelitian (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — bukti bibliometrik bahwa penulisan berbantuan AI menyertai tim peneliti yang lebih kecil dan lebih muda (Wang dkk., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — tolok ukur 30 hari yang mengevaluasi agen tutor terhadap pembelajar simulasi (Lee dkk., 2026)
- [[beagle-grounded-learner-emulation-2026]] — simulator neuro-simbolik yang mereproduksi pergulatan pemula yang sungguh-sungguh (Wang dkk., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — mengapa simulator meninggalkan miskonsepsi di bawah umpan balik apa pun, dan bagaimana pelatihan memperbaikinya (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — audit teregistrasi yang memakai pembelajar simulasi tetap untuk menguji apakah kebermanfaatan mengukur pedagogi (Fan dkk., 2026)

## Kutipan

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.
