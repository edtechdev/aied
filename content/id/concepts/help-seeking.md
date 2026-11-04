---
title: "Pencarian Bantuan"
created: "2026-08-06T10:20:04-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [help-seeking, metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring, llm]
connected_faqs: [reducing-over-reliance, study-with-ai]
audience: [learners]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/help-seeking"
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

> **Pencarian bantuan** — proses pembelajar mengenali kebutuhan akan bantuan dan secara strategis memintanya, serta bagaimana proses itu berlangsung dalam lingkungan belajar yang didukung AI. Dalam [[ai-education|AI dalam pendidikan]], pencarian bantuan menjadi sentral bagi apakah alat AI mendukung atau melemahkan pembelajaran: *kualitas* pencarian bantuan (kapan, bagaimana, dan apa yang diminta pembelajar) sangat membentuk hasil, dan tutor AI, petunjuk, serta agen [[pedagogy|pedagogis]] dirancang justru untuk memunculkan pencarian bantuan yang produktif alih-alih pencarian jawaban.([[lak2026-hint-button-unproductive-use]])([[ai-fallibility-warning-help-seeking]])


Penjangkauan proaktif dapat meningkatkan pencarian bantuan tanpa perubahan apa pun pada materi pembelajaran. Eksperimen pra-registrasi di mata kuliah sarjana berpendaftaran besar mengirim pesan kepada siswa melalui chatbot akademik dan menemukan pengambilan tutoring serta instruksi tambahan yang lebih besar; analisis mediasi mengaitkan 17.8% dari efek nilai dengan peningkatan pencarian bantuan tersebut (p = 0.041) ([[chatbot-outreach-course-performance-2026]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Saat Anda macet, apakah Anda cenderung meminta jawaban langsung atau meminta panduan yang membantu Anda menemukannya sendiri? Menurut Anda, apa efek masing-masing pilihan terhadap apa yang benar-benar Anda ingat?
- Penelitian menunjukkan siswa sering berniat belajar dengan AI tetapi akhirnya meminta jawaban — sebuah 'kesenjangan niat-perilaku' yang terkait dengan kinerja lebih buruk. Mengapa niat baik begitu mudah runtuh menjadi pencarian jawaban?
- Tombol 'petunjuk' yang menetap dapat mengubah tugas belajar menjadi latihan menyalin dengan menandakan bahwa bantuan selalu tersedia. Dapatkah Anda mengingat saat bantuan yang terlalu mudah diakses membuat Anda melewati pemikiran yang seharusnya Anda lakukan?
- Satu studi menemukan bahwa sekadar memperingatkan siswa bahwa AI bisa membuat kesalahan justru meningkatkan pencarian bantuan mereka. Bagaimana skeptisisme yang sehat dapat mengubah cara siswa berinteraksi dengan tutor dibandingkan kepercayaan buta?
- Siswa yang kesulitan sering kali paling kecil kemungkinannya mencari bantuan tanpa dorongan. Jika siswa yang paling membutuhkan dukungan tidak menjangkau, bagaimana seharusnya alat AI dan instruktur merespons?
- Halaman ini mengusulkan penundaan petunjuk dan memindahkan pertanyaan desain dari 'apakah' ke 'bagaimana' menyediakan bantuan. Seperti apa pengalaman bantuan yang dirancang baik bagi pembelajar Anda — dan apa yang membuat mereka benar-benar mengambilnya?

## Pendahuluan

Pencarian bantuan adalah konstruk yang mapan dalam penelitian pembelajaran, erat terkait dengan [[self-regulated-learning]] dan [[metacognition]]: ia menuntut pembelajar memantau pemahaman mereka sendiri, mengenali kesenjangan, memutuskan bahwa bantuan diperlukan, dan merumuskan permintaan yang efektif. Dengan munculnya tutor [[generative-ai|AI generatif]], pencarian bantuan memperoleh kepentingan baru — dan mode kegagalan baru. Pembelajar sering *berniat* menggunakan AI untuk belajar tetapi akhirnya meminta jawaban langsung, sebuah kesenjangan yang didokumentasikan penelitian dalam basis pengetahuan ini lintas domain dan kelompok usia. Model klasik mengasumsikan bahwa sebuah permintaan adalah untuk pengetahuan yang tidak dimiliki peminta. Permintaan dukungan operasional mempersulit asumsi itu: di antara 4,093 kueri, setidaknya 20.4% menanyakan status pengajuan yang tertunda alih-alih pengetahuan, sebuah kelas yang dilayani asisten terikat-pengambilan hanya 1.3% dari waktu [[student-query-demand-hybrid-ai-support-2026|Gupta et al. (2026)]].([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

## Pencarian bantuan yang produktif vs. tidak produktif

Perbedaan sentral dalam literatur adalah antara pencarian bantuan yang mendukung pembelajaran dan pencarian bantuan yang melewatinya.

### Perilaku pencarian bantuan yang tidak produktif

Penelitian dalam basis pengetahuan ini mengidentifikasi pola pencarian bantuan yang tidak produktif yang konkret dan dapat diamati, terutama dalam [[intelligent-tutoring|sistem tutor cerdas]]:

- **Permintaan petunjuk dini** — meminta bantuan sebelum melakukan upaya penyelesaian apa pun. Bahkan siswa yang tidak yakin belajar lebih banyak dengan mencoba lebih dahulu.([[lak2026-hint-button-unproductive-use]])
- **Membaca petunjuk secara dangkal** — berpindah melalui petunjuk terlalu cepat untuk membacanya (ditandai pada tolok ukur ~4 kata/detik), sering melompat langsung ke petunjuk dasar yang mengungkap jawaban.([[lak2026-hint-button-unproductive-use]])
- **Mencari jawaban alih-alih mencari pembelajaran** — meminta AI menghasilkan jawaban alih-alih menjelaskan atau membimbing. Dalam studi terhadap 98 siswa Kelas 9 yang menggunakan tutor GenAI, interaksi didominasi permintaan instrumental dengan hampir tidak ada pemantauan atau evaluasi atas pembelajaran mereka sendiri — meskipun siswa telah memilih dukungan terancah sebelumnya. **Kesenjangan niat-perilaku** ini terkait dengan kinerja pascates yang *lebih rendah* dan beban kognitif ekstraneus yang lebih tinggi.([[regulating-ai-tutor-adolescent-srl]])
- **Berkonsultasi dengan AI sebelum upaya mandiri atau sumber manusia apa pun.** [[uneven-impact-generative-ai-student-learning-2026|Manikonda et al. (2026)]] mengukur urutan ini secara langsung sebagai **ketergantungan dini** — berkonsultasi dengan GenAI sebelum berpikir mandiri, pencarian tradisional, atau menghubungi instruktur — dan menemukan kaitannya dengan dampak negatif yang lebih besar (β = .402, p = .004) serta manfaat akademik (β = .301, p < .001) di antara 118 siswa pada mata kuliah terkait AI. Asosiasi dengan kerugian tidak ada pada [[ai-literacy|literasi evaluasi]] yang rendah dan paling kuat pada literasi evaluasi yang tinggi (b = .688 pada +1 SD, p < .001), sehingga siswa yang paling mampu menilai keluaran AI melaporkan biaya terbesar dari berkonsultasi lebih dahulu: pilihan *kepada siapa bertanya lebih dulu* membawa kerugian yang tidak dapat diimbangi oleh kecakapan dalam mengevaluasi jawaban. Ini juga menunjukkan bahwa penggunaan AI untuk mengorganisasi, mengevaluasi, dan menguraikan masalah — **kognitif** alih-alih ketergantungan dini — adalah pola yang terkait dengan dampak positif, sehingga mode kegagalan pencarian bantuan adalah soal urutan, bukan soal bertanya sama sekali.
- **Bertanya terus-menerus tanpa pemulihan** — Bertanya produktif pada awalnya tetapi tidak tanpa batas: permintaan bantuan adalah jenis kebuntuan yang paling dapat dipulihkan pada permulaan (47.0%) tetapi turun paling jauh setelah bantuan gagal (12.5% pada kedalaman enam atau lebih), sehingga kegigihan, bukan permintaan itu sendiri, adalah sinyal yang layak dilacak [[guided-ai-tutor-impasse-resolution-2026|Ahtisham et al. (2026)]].
- **Siswa yang kesulitan paling kecil kemungkinannya mencari bantuan tanpa dorongan** — sisi keterlibatan dari pencarian bantuan. Dalam [[one-click-away-khanmigo-two-year-school-experiment-2026|RCT Khanmigo selama dua tahun (Oreopoulos & Low 2026)]], bahkan dengan akses gratis dan waktu latihan wajib, siswa yang kesulitan pada median hanya mengirim pesan ke tutor AI dalam ~17% sesi kesalahan, sebagian besar dengan jawaban telanjang atau klik — konsisten dengan temuan ekonomi pendidikan bahwa intervensi yang bergantung pada inisiatif menjangkau paling sedikit siswa yang paling akan memperoleh manfaat. [[virtual-tutoring-computer-assisted-learning-takeup-2026|TWiK (Oreopoulos et al. 2026)]] menunjukkan bahwa pengambilan sangat responsif terhadap pengurangan hambatan (pengambilan sesi pertama naik 45%→83% setelah penyederhanaan pendaftaran), tetapi masuk ≠ partisipasi berkelanjutan (kehadiran tetap berselang).

### Mengapa pencarian bantuan yang tidak produktif merugikan pembelajaran

**Perspektif afordansi** menjelaskan mekanisme kuncinya: ketika sebuah antarmuka membuat bantuan tersedia terus-menerus dan menonjol (misalnya, "tombol petunjuk" yang menetap), ia menandakan kepada pembelajar bahwa bantuan selalu ada, menciptakan afordansi tak disengaja yang dapat meruntuhkan tugas menjadi latihan menyalin. Mengakses petunjuk dasar dengan cepat menghindari konstruksi skema aktif yang dibutuhkan pembelajaran.([[lak2026-hint-button-unproductive-use]])

### Kualitas pencarian bantuan dapat diukur

Dua indikator sederhana dan dapat ditafsirkan — permintaan petunjuk dini dan pembacaan petunjuk yang dangkal — dapat dihitung dari log tutoring standar dan secara konsisten terkait dengan [[learning-gains|keuntungan belajar]] yang berkurang lintas semester, bahkan setelah mengendalikan [[prior-knowledge|pengetahuan awal]]. Hal ini membuatnya praktis untuk [[learning-analytics]] [[visualization|dasbor]] dan intervensi waktu nyata, tidak seperti detektor "mengakali sistem" berbasis pembelajaran mesin yang kompleks.([[lak2026-hint-button-unproductive-use]])

## Merancang sistem AI untuk mendorong pencarian bantuan yang produktif

### Menyediakan perancah tentang bagaimana siswa bertanya

Pelatihan eksplisit dalam **pencarian bantuan yang berfokus pada penalaran** — meminta petunjuk bertahap dan verifikasi alih-alih jawaban akhir — menghasilkan hasil yang lebih baik daripada ketergantungan tanpa kritis. Dalam studi statistik sarjana kuasi-eksperimental, akses LLM terbimbing (dengan pelatihan pencarian bantuan berorientasi penalaran) menghasilkan kinerja mandiri yang lebih kuat dan kalibrasi penilaian diri yang lebih baik daripada akses LLM tanpa batas. Pelajarannya: **akses LLM semata adalah intervensi yang tidak lengkap**; tantangan desainnya adalah menyediakan perancah bagi *bagaimana* siswa menggunakan AI agar ia berfungsi sebagai mitra penalaran alih-alih alat pencari jawaban.([[guided-llm-scaffolding-independent-learning]])

Biaya interaksi adalah bagian dari pertanyaan yang sama. [[penquiry-pen-based-llm-qa-2026|Rhee et al. (2026)]] mengidentifikasi **Hambatan Referensial** dan **Hambatan Ekspresif** yang menghalangi pembelajar berbasis pena menanyakan apa pun kepada [[llm|LLM]]: menunjuk pada wilayah diagram atau suku persamaan tidak dapat diungkapkan dalam prosa yang diketik, dan upaya perumusan jatuh tepat ketika sebuah pertanyaan paling rapuh. Sistem Penquiry mereka menyelesaikan referensi dengan menempelkan tanda tinta ke elemen dokumen dan memperluas kata kunci tinta yang jarang menjadi kueri lengkap melalui pelengkapan otomatis; dua studi iteratif masing-masing dengan 16 peserta menemukan beban kognitif dan fisik dari bertanya turun secara signifikan. Apakah biaya bertanya yang lebih rendah menghasilkan pencarian bantuan yang *lebih baik* atau hanya lebih banyak, dibiarkan terbuka, dan penulis mengusulkan pelengkapan otomatis yang adaptif secara temporal — verifikasi fondasional di awal sesi, prompt tingkat lebih tinggi kemudian — sebagai jalur dari pengurangan hambatan menuju [[scaffolding|dukungan yang memudar]] alih-alih kruk permanen.

Perancah juga dapat diberikan di dalam tugas alih-alih sebelumnya. [[helpcoach-ai-help-seeking-scaffolding-2026|Jin et al. (2026)]] membangun HelpCoach, sebuah tambahan pada antarmuka obrolan yang menilai seberapa spesifik seorang siswa meminta bantuan dan mendorong revisi ketika sebuah pertanyaan terlalu kabur, membuat komponen pengetahuan dan jenis perancah menjadi eksplisit. Dalam studi antar-subjek dengan 40 mahasiswa yang belajar pemrograman web, peserta HelpCoach menulis proporsi pertanyaan spesifik yang jauh lebih tinggi dalam draf pertama mereka daripada garis dasar pelatihan pra-tugas (57.3% berbanding 40.5%) dan mempertahankan pengetahuan yang jauh lebih banyak seminggu kemudian (d = 1.100), sementara perbedaan spesifisitas pada tugas ketiga tidak lagi signifikan (43.7% berbanding 32.1%). Penulis memperingatkan bahwa keuntungan retensi belum dapat dikaitkan dengan balasan chatbot yang lebih tertarget.

Tuas ketiga pada biaya bertanya adalah *dari mana* bantuan berasal. [[course-specific-rag-help-seeking-higher-ed-2026|Gray dan Hobbs (2026)]] membangun Beacon, asisten [[rag|teraugmentasi pengambilan]] yang spesifik mata kuliah dan berbasis pada materi yang disetujui satu modul pemrograman, lalu mengevaluasinya dengan 15 mahasiswa komputasi dan empat akademisi. 89% peserta menilai jawabannya sangat selaras dengan materi kuliah dan 66.7% mengatakan ia mendukung alih-alih menggantikan pembelajaran mereka, meskipun hanya sekitar separuh hingga 60% melaporkan peningkatan pemahaman atau keyakinan. Motivasinya adalah hambatan yang didokumentasikan bagian ini: 62.5% dari mahasiswa tersebut mengatakan mereka kadang menghindari meminta bantuan saat membutuhkannya dan 75% melaporkan kecemasan ketika suatu topik tidak masuk akal, sehingga kanal privat yang berbasis modul ditawarkan sebagai pijakan pertama sebelum menghubungi dosen. Para akademisi yang diwawancarai menjaga argumen tandingan tetap hidup — mereka menghargai bahwa Beacon menahan solusi lengkap dan khawatir alat tanpa batas membuat siswa melewati tahap pengembangan — itulah sebabnya desain ini memperoleh tempatnya dengan menolak menyelesaikan pekerjaan.

### Mengkalibrasi kepercayaan melalui transparansi

Eksperimen kelas dengan 252 siswa menemukan bahwa **memperingatkan siswa tentang keterbatasan AI meningkatkan pencarian bantuan** dalam sistem tutoring matematika. Transparansi tentang potensi kesalahan sistem meningkatkan keterlibatan pembelajar dengan sistem — menghubungkan pencarian bantuan dengan [[trust-calibration]] dan [[hallucination-risk]].([[ai-fallibility-warning-help-seeking]])

### Memikirkan ulang penyampaian petunjuk dan perancah

Alih-alih menghapus bantuan, penelitian merekomendasikan rekayasa ulang cara penyampaiannya:

- **Ketersediaan petunjuk yang tertunda** — mewajibkan waktu keterlibatan minimum atau upaya penyelesaian sebelum petunjuk (terutama petunjuk dasar) dapat diakses.([[lak2026-hint-button-unproductive-use]])
- **Tangga yang memudar lebih jarang dinaiki semakin tinggi ia naik.** Dalam CoMeT, tutor yang menaikkan satu anak tangga per keputusan yang tidak terjawab dan turun kembali ketika pembelajar mengambilnya, hanya 282 dari 515 episode pemudaran yang dikodekan mengikuti sebuah jawaban: pengambilan adalah 37.0% setelah ajakan pertama dan 21.8% setelah ajakan ketiga ([[adaptive-scaffolding-contingency-comet-tutor-2026|Hou et al. (2026)]]). Menunda bantuan karenanya bergantung pada pembelajar yang terus menjawab ajakan, dan kemunduran yang terukur berarti anak tangga perancah yang lebih akhir menjangkau sedikit dari siswa yang masih macet.
- **Bergerak dari *apakah* ke *bagaimana*** — pertanyaan desain kuncinya adalah bagaimana menyusun penyampaian petunjuk selaras dengan prinsip perjuangan produktif, bukan apakah akan menyediakan petunjuk sama sekali.([[lak2026-hint-button-unproductive-use]])
- **Panjang pesan adalah tuas yang benar-benar diukur penelitian penyampaian.** Dalam mata kuliah pemrograman langsung, petunjuk LLM yang lebih panjang memprediksi ketepatan pengajuan berikutnya yang lebih buruk, lebih banyak sisa percobaan, dan pengajuan ulang yang lebih lambat, per simpangan baku 204.9 karakter di antara 14,809 pasangan siswa-latihan ([[mihaylova-llm-feedback-live-programming-course-2026|Mihaylova et al., 2026]]). Keterbacaan hampir tidak menggerakkan hasil apa pun, sehingga volume lebih penting daripada tingkat kesulitan.
- **Petunjuk sebelumnya pada bagian kursus yang sama terkait dengan keberhasilan yang lebih rendah pada langkah integratif.** Siswa yang diberi umpan balik pada langkah-langkah awal sebuah proyek menyelesaikan langkah akhir mereka 95.6% dari waktu berbanding 98.1% bagi mereka yang tidak menerimanya, dengan koefisien log-odds −1.096 ([[mihaylova-llm-feedback-live-programming-course-2026|Mihaylova et al., 2026]]). Penulis tidak membacanya sebagai kerugian, karena siswa yang mencari petunjuk masuk akal adalah mereka yang memang akan kesulitan di sana, yang merupakan pertanyaan [[self-regulated-learning|pemantauan]] yang diangkat halaman ini.

### Masalah pengambilan pada tutor LLM

Siswa di dunia nyata sering **melewati [[conversational-ai|chatbot]] tanpa memakai [[scaffolding]] yang disediakannya** — tidak selalu berbahaya, tetapi sering karena ada ketidakcocokan antara pembingkaian pedagogis chatbot dan tujuan belajar siswa itu sendiri. Pipeline evaluasi karena itu harus mengukur bukan hanya apakah tutor menyediakan perancah, tetapi apakah siswa *mengambil* perancah itu, alih-alih mengasumsikan mereka akan mengambilnya.([[rethinking-scaffolding-llm-tutors]])

- **Tombol bantuan opsional tidak pernah diklik.** Di tiga ruang kelas kelas lima, siswa jarang memanggil agen pembantu yang sengaja dibiarkan opsional oleh desain untuk melindungi agensi, dan memanggil guru sebagai gantinya sementara kebingungan yang menjadi alasan keberadaannya tetap berlangsung ([[humburg-scistory-ai-supported-inquiry-science-learning-games-2025|Humburg et al., 2025]]).

## Pencarian bantuan dan pembelajaran yang diatur sendiri

Pencarian bantuan adalah bagian tak terpisahkan dari [[self-regulated-learning]]: pencarian bantuan yang produktif menuntut pembelajar memantau pemahaman, menilai kapan bantuan dibutuhkan, dan memilih sumber yang tepat. Dalam konteks GenAI, hal ini menjadi lebih menuntut, karena siswa juga harus menjalankan [[agency|agensi]] atas AI dan mempertahankan kewaspadaan epistemik alih-alih tunduk kepadanya. Penelitian dalam basis pengetahuan ini mendukung kebutuhan akan [[scaffolding|perancah]] yang mendorong penggunaan AI yang lebih [[agentic-ai|agensik]] dan proaktif secara epistemik, serta menyoroti risiko [[cognitive-offloading|Ketergantungan Berlebih]] dan [[cognitive-offloading]] ketika pencarian bantuan merosot menjadi pencarian jawaban tanpa syarat.([[regulating-ai-tutor-adolescent-srl]])([[guided-llm-scaffolding-independent-learning]])

### Pencarian bantuan termediasi LLM sebagai proses empat tahap

[[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026|Viberg et al. (2026)]] menunjukkan bahwa, dalam belajar STEM sehari-hari, pencarian bantuan LLM bukan satu tindakan tunggal melainkan proses berlapis yang bergantung konteks dengan empat tahap: (1) *memutuskan apakah bantuan diperlukan* — siswa mencoba tugas secara mandiri lebih dahulu untuk menjaga nilai pembelajaran; (2) *memilih kepada siapa bertanya* — ChatGPT sebagai langkah pertama berhambatan rendah, lalu teman sebaya untuk negosiasi konseptual, lalu instruktur untuk masalah kompleks atau berisiko tinggi; (3) *menentukan jenis bantuan* — dari petunjuk dan penjelasan hingga perancah [[problem-solving|pemecahan masalah]], merampingkan pekerjaan rutin, dan memperluas pembelajaran; dan (4) *menilai bantuan yang diterima* — menjalankan kepercayaan selektif dan memverifikasi keluaran AI terhadap materi kuliah atau dengan manusia. Yang krusial, siswa lebih menyukai **pencarian bantuan instrumental** (memperkuat pemahaman) daripada **pencarian bantuan eksekutif** (memperoleh solusi), sebuah perbedaan yang penulis usulkan untuk diadaptasi menjadi butir pengukuran SRL-untuk-LLM yang baru.

Dalam [[english-education|komposisi]] yang sepenuhnya daring, ketersediaan alat bukanlah hambatan. [[reed-resource-literacy-genai-composition-2026|Reed (2026)]] mengamati bahwa siswa yang kesulitan bukanlah mereka yang tanpa dukungan melainkan mereka yang tidak mengenali kapan bantuan dibutuhkan, sumber daya mana yang cocok dengan tugas, atau bagaimana menilai umpan balik begitu tiba — dan keluaran [[generative-ai]] yang lancar mudah disalahartikan sebagai dukungan otoritatif. Responsnya adalah membuat pencarian bantuan *terstruktur* alih-alih sekadar tersedia: titik sentuh wajib yang menguraikan tuntutan tugas, memetakan sumber daya dengan justifikasi, membandingkan sumber umpan balik, dan menutup lingkar dengan refleksi.

### Membuat konteks perilaku terlihat: TutorTrace

[[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] menangani prekursor perilaku pencarian bantuan dalam [[cs-education|pendidikan pemrograman berbantuan AI]]: tutor manusia beradaptasi dengan perilaku pembelajar yang dapat diamati, bukan hanya permintaan eksplisit mereka, tetapi tutor AI tidak memiliki konteks itu. **TutorTrace** adalah kumpulan data dan pipeline yang membuat konteks perilaku pembelajar dapat dihitung secara waktu nyata dari telemetri IDE tingkat rendah (empat penerapan, N=480; ~180K peristiwa, 13,633 segmen perilaku, 27 metrik), menurunkan taksonomi aktivitas pembelajar *sebelum* kueri AI pertama, *di antara* kueri berturut-turut, dan *sepanjang* sesi. Ini memungkinkan sistem mengklasifikasikan apakah sebuah kueri mencerminkan pencarian bantuan **terbimbing** (didahului kerja mandiri) atau **tergantung** (tanpa kerja mandiri) — AUROC=.717 pada prediksi hold-out — dan memprediksi kueri yang akan segera terjadi (AUROC=.726). Evaluasi kelas pendahuluan menemukan bahwa prompt yang sadar perilaku menurunkan interval antar kueri tanpa kerja mandiri dari 50.0% menjadi 20.7%. Ini menghubungkan telemetri [[learning-analytics]] dengan [[intelligent-tutoring|tutoring adaptif]], menunjukkan bahwa konteks perilaku dapat dioperasionalkan dalam skala besar untuk menyediakan perancah bagi *bagaimana* siswa mencari bantuan alih-alih hanya merespons pertanyaan eksplisit mereka.

**Trajektori pencarian bantuan memprediksi transfer, bukan hanya levelnya.** [[abdelghani-student-llm-epistemic-proactivity-math-2026|Abdelghani et al. (2026)]] mengodekan 880 giliran dari 112 siswa menengah yang memodelkan masalah matematika dengan LLM dan menemukan campuran statisnya tidak informatif: 81.5% giliran adalah permintaan, hanya 2.2% evaluasi eksplisit, dan 54% permintaan berorientasi pemahaman berbanding 46% pencarian jawaban. Kinerja pada pascates yang diambil tanpa AI diprediksi oleh kemiringan dalam-sesi alih-alih oleh levelnya. Pencarian bantuan berorientasi pemahaman menurun (M = −0.20) sepanjang obrolan, dan trajektori itu menambahkan ΔR2 = .110 pada model yang sudah memuat skor prades (β = .34, p < .001). Fitur interaksi statis hanya menambahkan ΔR2 = .023 (p = .684). Kualitas pencarian bantuan karenanya harus dibaca sebagai kurva: sesi yang dibuka dengan pertanyaan konseptual dan berakhir pada permintaan jawaban menandakan kinerja tanpa bantuan yang lebih lemah, dan kenaikan kecil dalam regulasi diri eksplisit (M = +0.103) tidak mengimbanginya.


**Pipeline kedua mengajukan pertanyaan yang sama dari sisi infrastruktur.** [[taufer-human-ai-interaction-haidl-2026|Taufer et al. (2026)]] berargumen bahwa pertukaran manusia-AI adalah kelas data tersendiri: representasi mereka mencatat keadaan komputasi yang memicu permintaan, permintaan itu, responsnya, penilaian pengguna atasnya, dan eksekusi yang menyusul, sebagai satu objek. Kueri kemudian diklasifikasikan sebagai pemulihan kesalahan, langkah berikutnya yang macet, bantuan konseptual, atau validasi dari konteks itu. Dalam penerapan JupyterLab dengan 35 siswa yang mencakup 140 pasangan siswa-tugas, jumlah interaksi biasa berkorelasi dengan sel yang berhasil dieksekusi hanya pada r = 0.12, sementara 37 pasangan memiliki akses dan tidak pernah menggunakannya dan 26 menggunakannya di luar kondisi yang ditetapkan bagi mereka.

## Implikasi bagi desain dan penelitian

1. **Rancang afordansi pencarian bantuan secara sengaja.** Tombol bantuan yang menetap dan menonjol dapat memungkinkan strategi pintas; tunda akses dan strukturkan penyampaian untuk mendukung [[desirable-difficulties|perjuangan produktif]].([[lak2026-hint-button-unproductive-use]])
2. **Sediakan perancah bagi pencarian bantuan itu sendiri.** Latih pembelajar dalam permintaan yang berfokus pada penalaran (petunjuk bertahap, verifikasi) alih-alih mengasumsikan akses sama dengan penggunaan yang baik.([[guided-llm-scaffolding-independent-learning]])
3. **Gunakan transparansi untuk mengkalibrasi kepercayaan.** Peringatan tentang keterbatasan AI dapat meningkatkan pencarian bantuan dan keterlibatan yang tepat.([[ai-fallibility-warning-help-seeking]])
4. **Ukur pengambilan, bukan hanya perancah.** Evaluasi apakah siswa benar-benar terlibat dengan pembingkaian pedagogis, bukan hanya apakah tutor menyediakannya.([[rethinking-scaffolding-llm-tutors]])
5. **Dukung pemantauan dan agensi.** Perancah pencarian bantuan harus memperkuat [[metacognition]] dan [[self-regulated-learning]], menjaga terhadap [[cognitive-offloading|Ketergantungan Berlebih]].

## Miskonsepsi Umum

- **"Siswa yang membutuhkan bantuan tidak memintanya."** Sebuah **eksperimen pra-registrasi** di mata kuliah sarjana berpendaftaran besar mengirim pesan kepada siswa melalui chatbot akademik dan menemukan **pengambilan tutoring dan dukungan tambahan yang lebih besar**. Dorongan mengubah perilaku, sehingga hambatannya adalah ajakan, bukan kemauan.
- **"Permintaan pencarian bantuan adalah tentang pembelajaran."** **Permintaan dukungan operasional** mempersulit asumsi itu: di antara **4,093 kueri**, setidaknya **20.4% menanyakan status pengajuan yang tertunda alih-alih pengetahuan**. Seperlima dari permintaan bantuan bersifat administratif.
- **"Menggunakan tutor AI berarti memantau pembelajaran Anda sendiri."** Dalam studi terhadap **98 siswa Kelas 9** yang menggunakan tutor GenAI, interaksi **didominasi permintaan instrumental dengan hampir tidak ada pemantauan atau evaluasi atas pembelajaran mereka sendiri**. Meminta jawaban bukanlah pencarian bantuan dalam pengertian yang dimaksud konstruk ini.

## Konsep terkait

- [[learners]] — Pembelajar: payung bagi konsep-konsep di sisi pembelajar
- [[self-regulated-learning]]
- [[metacognition]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[student-experience]]
- [[cognitive-offloading]]
- [[learning-analytics]]
- [[k-12]]
- [[higher-ed]]
- [[socratic-method]]
- [[pedagogical-agent]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[affective-tutoring]]
- [[feedback]]
- [[active-learning]]
- [[agentic-ai]]
- [[student-support-and-success]] — penjangkauan institusional dan alokasi dukungan, di luar pencarian bantuan dalam mata kuliah

## Artikel terkait

- [[taufer-human-ai-interaction-haidl-2026]] — Interaksi sebagai data kelas satu: mengklasifikasikan kueri berdasarkan keadaan eksekusi di sekitarnya
- [[abdelghani-student-llm-epistemic-proactivity-math-2026]] — Trajektori pencarian bantuan, bukan levelnya, memprediksi kinerja matematika tanpa bantuan
- [[mihaylova-llm-feedback-live-programming-course-2026]] — Panjang petunjuk diukur terhadap ketepatan pengajuan berikutnya, percobaan, dan waktu, dalam mata kuliah pemrograman langsung
- [[humburg-scistory-ai-supported-inquiry-science-learning-games-2025]] — Agen pembantu yang tidak diminta siapa pun (Humburg et al. 2025)

- [[penquiry-pen-based-llm-qa-2026]] — Penquiry: Sistem tanya jawab in-situ interaktif berbasis pena yang memanfaatkan LLM
- [[tutortrace-learner-behavioral-states-2026]]
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — Pencarian bantuan termediasi LLM dalam STEM: berlapis, instrumental, dan terverifikasi
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — Satu klik jauhnya: Khanmigo dalam eksperimen sekolah dua tahun
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — Tutoring virtual dengan CAL: eksperimen tentang pengambilan dan pembelajaran
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — Kumpulan data StudyChat tentang dialog siswa–LLM dalam mata kuliah AI
- [[lak2026-hint-button-unproductive-use]] — Permintaan petunjuk dini dan pembacaan petunjuk yang dangkal memprediksi keuntungan belajar yang lebih rendah di sebuah ITS
- [[ai-fallibility-warning-help-seeking]] — Peringatan tentang keterbatasan AI meningkatkan pencarian bantuan dalam sistem tutoring matematika
- [[regulating-ai-tutor-adolescent-srl]] — Kesenjangan niat-perilaku dalam pencarian bantuan GenAI remaja dan pembelajaran yang diatur sendiri
- [[guided-llm-scaffolding-independent-learning]] — Perancah LLM terbimbing meningkatkan pencarian bantuan berfokus penalaran dan pembelajaran mandiri
- [[rethinking-scaffolding-llm-tutors]] — Ketidakcocokan antara perancah dan pengambilan siswa dalam penerapan tutor LLM di dunia nyata
- [[uneven-impact-generative-ai-student-learning-2026]] — Ketergantungan dini: berkonsultasi dengan GenAI sebelum pemikiran mandiri, pencarian, atau instruktur memprediksi baik manfaat maupun kerugian (Manikonda et al. 2026)
- [[reed-resource-literacy-genai-composition-2026]] — Literasi sumber daya dalam komposisi daring: hambatannya adalah mengenali kapan bantuan dibutuhkan (Reed 2026)
- [[course-specific-rag-help-seeking-higher-ed-2026]] — Mengurangi Hambatan bagi Dukungan Akademik: Mengevaluasi Sistem RAG Spesifik Mata Kuliah untuk Menangani Disparitas Pencarian Bantuan di Pendidikan Tinggi
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Perancah adaptif membutuhkan kontingensi: Tutor AI yang meningkat dan memudar berdasarkan apa yang dilakukan pembelajar
- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Menyediakan perancah bagi pencarian bantuan AI yang tertarget selama pemecahan masalah
- [[guided-ai-tutor-impasse-resolution-2026]] — Menelaah variasi dalam cara tutor AI terbimbing menyelesaikan kebuntuan siswa
- [[student-query-demand-hybrid-ai-support-2026]] — Apa yang sebenarnya ditanyakan siswa: Struktur permintaan dan potensi otomasi dalam sistem dukungan hibrida
