---
title: "Sumber Terbuka"
created: "2026-07-28T10:44:35-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/open-source"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sumber Terbuka** — penggunaan *model, kode, data, dan konten* berlisensi terbuka dalam [[ai-education|AI dalam pendidikan]]. Keterbukaan adalah penyeimbang utama basis pengetahuan terhadap penguncian vendor dan [[privacy|paparan data]]: model berbobot terbuka dapat dijalankan pada perangkat keras kampus untuk memenuhi kewajiban FERPA, GDPR, dan EU AI Act, korpus berlisensi terbuka dapat diindeks dan disetel halus tanpa izin penerbit, dan rilis tolok ukur serta kumpulan data terbuka membuat [[research-methods-aied|penelitian]] dapat direplikasi. Bebannya sama nyatanya: infrastruktur dan jaminan [[pedagogical-safety|keselamatan]], pemeliharaan yang melampaui masa hibah, dan kualitas yang tidak dijamin oleh keterbukaan itu sendiri.

## Pertanyaan untuk Dipertimbangkan

- "Sumber terbuka" sering terdengar sebagai "gratis dan mudah." Mana dari empat lapisan di bawah ini — model, kode, data, atau konten — yang sebenarnya paling mahal untuk diadopsi institusi Anda, dan mengapa?
- Bobot terbuka memungkinkan penerapan lokal, tetapi tetap ada pihak yang harus menghosting, menambal, dan mengevaluasi sistem. Siapa yang harus memiliki pekerjaan itu setelah proyek awal berakhir, dan siapa yang membayarnya?
- Satu studi di sini menemukan model terbuka 32B mengungguli sistem proprietary yang jauh lebih besar pada pengetahuan pedagogis, sementara studi lain menemukan setiap model terbuka yang diuji berada di bawah baseline manusia pada literasi visualisasi ilmiah. Bagaimana Anda memutuskan tolok ukur mana yang tepat untuk keputusan Anda?
- Satu korpus berlisensi terbuka adalah yang memungkinkan sekolah menjalankan asisten on-premise atas materi kursusnya sendiri. Kewajiban apa yang menyertai hal itu — kepada penulis asli, kepada siswa yang datanya diindeks, dan kepada lisensi itu sendiri?
- Jika [[generative-ai|AI generatif]] dapat menghasilkan sebuah kursus dalam waktu kurang dari setengah jam dengan biaya beberapa dolar, apa alasan yang tersisa bagi sumber daya pendidikan terbuka — biaya, kebebasan lisensi, jaminan kualitas, atau hal lain?
- Haruskah institusi memperlakukan adopsi sumber terbuka sebagai keputusan pengadaan, keputusan infrastruktur, atau keputusan pedagogis? Apa yang rusak jika diperlakukan sebagai hanya salah satunya?

## Pendahuluan

Secara longgar, "terbuka" dalam pendidikan AI berarti empat jenis artefak tersedia untuk diperiksa, digunakan kembali, dan dimodifikasi: **bobot model**, **kode sumber**, **data dan instrumen evaluasi**, serta **konten pendidikan**. Artikel-artikel basis pengetahuan ini mengelompok secara tidak merata di seluruh lapisan tersebut, dan gambaran yang dihasilkan lebih berguna daripada slogan itu: keterbukaan membeli hal-hal yang spesifik — kendali lokal, keterauditan, replikabilitas, dan kejelasan hukum — dan ia memakan hal-hal yang spesifik — infrastruktur, keahlian, pemeliharaan, dan beban jaminan kualitas yang berpindah dari vendor ke institusi.

### Model terbuka dan bobot terbuka

Bobot terbuka paling penting ketika data siswa tidak boleh meninggalkan kampus. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] adalah pengoreksi otomatis [[llm]] lokal yang patuh FERPA dan dapat langsung dipakai untuk tugas kuliah [[stem-education|STEM]] tingkat lanjut, dibangun di atas rubrik dan solusi referensi yang ditulis instruktur, dengan biaya marginal nol per pengumpulan. [[programming-its|SCRIPT]], sebuah [[intelligent-tutoring|sistem tutoring]] Python di Universitas Bielefeld, dengan sengaja **menghindari API LLM komersial** dan menghosting sendiri model Llama-70B berbobot terbuka untuk memenuhi GDPR dan EU AI Act (yang mengklasifikasikan sebagian penggunaan AI dalam pendidikan sebagai berisiko tinggi), memisahkan log IP dari sistem tutoring, menggunakan nama pengguna pseudonim, dan merekam ketukan tombol hanya dengan persetujuan eksplisit — pilihan yang juga dinilai penulisnya menurunkan dampak lingkungan dan meningkatkan reproduktibilitas.

Kualitas bukan lagi harga otomatis dari keterbukaan. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] menerapkan [[reinforcement-learning|pembelajaran penguatan]] (DAPO) dan penyetelan halus tersupervisi pada keluarga model terbuka, menambang 440 negatif sulit, menghasilkan 40,000 respons sintetis yang disaring menjadi 1,050 contoh terurut berdasarkan kesulitan, dan mencapai **96.52%** pada tolok ukur pedagogi — di atas 90.55% milik Gemini-3 Pro — dengan 32B parameter dense. [[aiawe-automated-writing-evaluation|AiAWE]] mencapai kesimpulan serupa untuk [[automated-essay-scoring|evaluasi tulisan otomatis]]: Gemma-3-27B-it berbobot terbuka yang diadaptasi LoRA mengungguli LLaMA-3.3-70B dan baseline GPT-3.5 yang disetel halus pada 480 esai TOEFL serta berjalan pada server kelas konsumen, dengan temuan tambahan yang mencolok bahwa jumlah parameter *bukan* prediktor andal bagi performa hilir di bawah adaptasi LoRA. Bukti yang berlawanan patut mendapat porsi yang setara: [[mllm-scientific-visualization-literacy|sebuah tolok ukur enam MLLM]] (tiga tertutup, tiga terbuka) menemukan setiap model sumber terbuka berada di bawah baseline manusia pada literasi [[visualization|visualisasi]] ilmiah sementara Gemini melebihi rata-rata manusia pada beberapa subset. Keterbukaan menaikkan batas atas kendali, bukan kemampuan.

OmniEdu merilis seluruh pipeline, bukan hanya bobot: supervisi seimbang kemampuan atas campuran 69,999 contoh menaikkan setiap skala keluarga K–12 terbuka 4B/9B/27B — model 4B yang disetel memperoleh 55 poin tingkat kemenangan perancah MathTutorBench di atas basisnya — sementara diagnosis keadaan pengetahuan tetap menjadi kemampuan terlemahnya pada 54.04% ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Alat, tutor, dan infrastruktur penelitian terbuka

Kasus paling jelas bagi kode terbuka adalah replikasi. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — sistem tutoring adaptif pertama yang sepenuhnya terbuka yang dibangun di atas prinsip ITS — memasangkan **basis kode berlisensi MIT** dengan **pustaka konten Creative Commons (CC BY)** dari buku teks aljabar OpenStax, ditambah [[knowledge-tracing|knowledge tracing]], pengujian A/B, dan dukungan LTI; tujuan desain eksplisitnya adalah agar seorang peneliti dapat menjalankan eksperimen lalu menerbitkan seluruh kerangka, konten, dan platform ujung-ke-ujung sebagai tautan repositori. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] mengajukan argumen yang sama pada lapisan metode, menggantikan estimasi titik expectation-maximization dengan inferensi Bayesian penuh (HMC, inferensi variasional, Pathfinder, optimasi) dalam paket Python terbuka yang menyingkap ketidakpastian yang menjadi landasan perbandingan A/B intervensi adaptif. [[deeptutor]] merilis kerangka tutoring [[agentic-ai|agentic]] lengkap dengan memori siswa trace-forest — Apache 2.0, dan pada akhir 2026 berupa ruang kerja pembelajaran penuh alih-alih hanya pipeline yang diuji tolok ukur oleh makalahnya — dan generator kelas OpenMAIC milik [[mooc-to-maic|MAIC]] dirilis di bawah MIT bersama studi yang mengevaluasinya, sehingga sebuah kursus dapat dihasilkan, dihosting sendiri, dan diperiksa alih-alih hanya dibaca; [[vismatic-secure-sandbox-cs-education|VISMATIC]] menerbitkan sandbox terkontainerisasinya untuk pemantauan berorientasi proses, sehingga institusi lain dapat mengadopsi model integritas itu alih-alih versi milik vendor. Kode terbuka juga membawa beban transparansi: skrip untuk prompt tutoring sadar-afek [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] diterbitkan untuk diperiksa dan untuk kerja [[llm-training-and-fine-tuning|pelatihan pedagogis]] lebih lanjut. Infrastruktur terbuka menetapkan titik rujukan bagi apa yang seharusnya dilakukan agen pendidikan: [[agentic-ai-education-scoping-review|tinjauan pelingkupan 474 studi AI agentic]] dalam basis pengetahuan ini menggunakan proyek agen sumber terbuka yang tumbuh cepat sebagai tolok ukur "paradigma agen terdepan" dan menemukan sistem pendidikan masih kurang dalam orkestrasi alat yang teregulasi, memori persisten, perencanaan horizon panjang, dan tindakan yang dapat diaudit.

### Tolok ukur, kumpulan data, dan transparansi metode terbuka

Beberapa kontribusi di sini merupakan *infrastruktur evaluasi* terbuka alih-alih sistem. [[cdpk-pedagogy-benchmark-llms|The Pedagogy Benchmark]] (CDPK + SEND, dibangun dari butir ujian [[teacher-role|guru]] Chile yang asli) mencakup 97 model: DeepSeek R1 berbobot terbuka mencapai 86.65% melawan 10 teratas yang sebagian besar merupakan model penalaran tertutup, dan batas biaya–akurasi bergerak dari ~50% ke ~82% pada \$0.10/M token masukan antara April 2024 dan Juni 2025 — dengan Qwen-3 8B terbuka pada 3.5¢ hampir menyamai model tertutup terbaik April 2024 dengan biaya lebih dari 400× lebih rendah. Performa turun tajam di bawah kira-kira 8B parameter, yang merupakan kendala penentuan ukuran praktis bagi penerapan di kampus. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] merilis kumpulan data, skema, dan prototipe untuk evaluasi berbasis jejak atas tutoring multi-agen yang cerdas secara sosial (540 peserta, 360 sesi, 1,440 episode tugas). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] menunjukkan argumen kultural bagi data terbuka: 24,795 pasangan instruksi–respons dalam tujuh bahasa dan 41 teknik pedagogis yang diambil dari sumber Veda dan klasik, selaras dengan [[curriculum-design|kurikulum]] CBSE, yang memungkinkan model ringkas 7B mendekati model referensi serbaguna yang jauh lebih besar (skor juri median 6.39 vs 6.54) dengan sebagian kecil dari biaya penerapan. [[benchmark|Tolok ukur]] yang ditulis siswa adalah jalur lain menuju keterbukaan: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] mengurasi 80 tugas akademik berhorizon panjang dari 230 kandidat yang diajukan siswa (mencakup 25+ domain profesional, 16 memerlukan GPU CUDA, dijalankan dalam sandbox Docker terisolasi) dan memperluas ekosistem agen terbuka ke evaluasi tingkat akademik. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] berargumen bahwa keterbukaan juga merupakan kewajiban [[sustainability|lingkungan]]: dengan meninjau seluruh makalah AIED 2025, mereka menemukan pola "adopsi LLM tanpa pengungkapan" dan merespons dengan metodologi pengukuran sumber terbuka — perangkat lunak plus formula yang memperkirakan beban komputasi bahkan ketika jumlah parameter tidak diketahui.

### Di mana konten terbuka bertemu kode terbuka

Sumber daya pendidikan terbuka memiliki halamannya sendiri, [[open-education]], karena argumen di sana bersifat pedagogis dan dipimpin lisensi alih-alih infrastruktural. Yang termasuk di halaman ini adalah jahitan tempat kedua keterbukaan itu bertemu, dan jahitan itu lebih sempit daripada kelihatannya.

Jahitan itu adalah kendala kompatibilitas lisensi. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] memasangkan basis kode berlisensi MIT dengan pustaka konten CC BY dari buku teks aljabar OpenStax, yang berarti ketentuan kode dan ketentuan konten harus dijaga tetap kompatibel secara desain, dan lisensi permisif pada salah satunya tidak menyediakan yang lain. Jahitan itu juga muncul ketika korpus berlisensi terbuka adalah yang membuat sistem on-premise sah dijalankan: [[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] mengindeks 82 dokumen OER ke dalam asisten basis pengetahuan pada GPU konsumen 12 GB, dan seluruh kisahnya adalah kisah sumber terbuka tentang kuantisasi, [[hallucination-risk|halusinasi]], dan provenans alih-alih argumen tentang buku teks.

Yang tidak dilakukan halaman ini adalah berargumen untuk sumber dayanya. Apakah buku teks yang ditulis mesin terbuka secara default, apakah lisensi bertahan melalui remix yang dihasilkan, dan apakah pedagogi terbuka mengajarkan sesuatu yang terukur adalah pertanyaan bagi [[open-education]], dan itulah pertanyaan yang sebenarnya menjadi pokok literatur bidang ini saat ini.

### Manfaat dan beban

- **Manfaat.** Kedaulatan data dan kepatuhan regulasi ([[privacy]], [[regulation]]) melalui hosting lokal; kendali biaya, karena inferensi lokal tidak memiliki biaya per kueri dan model terbuka mendekati kualitas proprietary dengan sebagian kecil harganya ([[singh-eduqwen-pedagogical-rl-2026]]); replikabilitas, karena kerangka, prompt, konten, dan data dapat dirilis bersama makalah ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); keterauditan dan tinjauan keselamatan di bawah [[governance|tata kelola institusional]]; serta kemampuan menyetel halus untuk [[pedagogy|pedagogi]] tertentu atau basis pengetahuan komunitas tertentu ([[iks-instruct-dataset-indian-knowledge]]).
- **Beban.** Hosting lokal memerlukan perangkat keras dan keahlian yang tidak dimiliki banyak institusi; kualitas dan [[pedagogical-safety|keselamatan]] tidak dijamin sejak awal — model terbuka dapat tertinggal dari baseline manusia pada literasi tertentu ([[mllm-scientific-visualization-literacy]]) dan kuantisasi menaikkan tingkat halusinasi kecuali dimitigasi ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); seseorang harus memelihara sistem setelah publikasi ([[programming-its]] mendokumentasikan tim kecil mahasiswa doktoral, paparan keamanan yang masih dalam pengerjaan, dan beban kepatuhan yang besar); dan lisensi terbuka adalah izin, bukan produk yang berfungsi — pemeliharaan yang menjaga sistem yang dirilis tetap dapat digunakan menjadi tanggung jawab pihak [[educational-technology-developers]] yang membangunnya, dan pendanaan serta insentif mereka menentukan apakah yang diwarisi institusi ketika hibah berakhir adalah repositori yang dapat difork, produk yang terpelihara, atau bukan keduanya.

### Menerapkan keterbukaan dalam praktik

- **Bagi instruktur dan institusi:** periksa lisensi *konten* sekaligus kode sebelum mengadopsi sistem — kode MIT di atas buku teks CC BY dapat digunakan kembali, tetapi lisensi permisif tidak menjamin jalur tutoring, bank butir, atau terjemahan tersedia. Utamakan model terbuka ketika data siswa secara hukum tidak boleh meninggalkan kampus ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), tetapi uji tolok ukur model pada tugas *Anda* alih-alih mempercayai papan peringkat umum ([[cdpk-pedagogy-benchmark-llms]]). Anggarkan biaya untuk seseorang yang menjalankan dan mengevaluasi sistem setelah uji coba.
- **Bagi pengembang dan peneliti:** rilis seluruhnya — rilis ujung-ke-ujung OATutor (kode, konten, harness eksperimen) adalah standar replikabilitas yang terus dihargai literatur ini. Rilis prompt dan skema ekstraksi bersama bobot ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Laporkan komputasi dan karbon ([[aied-carbon-footprint-reporting]]). Landaskan asisten pada korpus berlisensi terbuka agar provenans dapat diperiksa dan adaptasi sah secara hukum ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Gunakan penyetelan halus yang sadar kuantisasi alih-alih kuantisasi biasa jika akurasi dan energi keduanya penting, dan jaga lisensi kode serta konten tetap kompatibel.

## Miskonsepsi umum

**"Bobot terbuka, sumber terbuka, konten terbuka, dan pedagogi terbuka adalah keterbukaan yang sama."** Itu empat hal berbeda dan gagal secara mandiri. Argumen sumber daya dan praktik berada di [[open-education]]; halaman ini mencakup artefak yang dirilis dan dilisensikan seorang pembangun. *Bobot* terbuka memungkinkan penerapan lokal; *sumber* terbuka memungkinkan modifikasi; *konten* terbuka memungkinkan penggunaan kembali dan adaptasi; *pedagogi* terbuka menyangkut siapa yang memutuskan apa yang diajarkan. Model dengan bobot terbuka dan pipeline pelatihan proprietary, yang dibungkus dalam alat dengan antarmuka tertutup dan pustaka konten dengan hak cipta penuh, "terbuka" dalam satu dari empat pengertian dan tertutup dalam tiga.

Kata itu sendiri diperdebatkan di hulu. [[deimann-rethinking-openness-ai-2026|Deimann dan Lukács (2026)]] mengamati bahwa debat keterbukaan mencapai AI melalui komunitas sumber terbuka, dengan Definisi AI Sumber Terbuka pertama diterbitkan pada 2024, dan mereka berargumen bahwa keterbukaan berfungsi di sana sebagai imajiner alih-alih properti: aspirasi yang diadopsi institusi dalam bahasa sementara rezim di sekitarnya tetap utuh. Itu adalah pemeriksaan yang berguna bagi halaman ini, karena lisensi adalah properti dan gerakan bukanlah properti.

**"Terbuka berarti lebih murah."** Bobot terbuka memungkinkan penerapan lokal, tetapi **seseorang tetap harus menghosting, menambal, dan mengevaluasi sistem** — dan seseorang itu harus bertahan lebih lama daripada hibah yang membiayai pekerjaan tersebut. Beban yang disebut dalam literatur ini bersifat konkret: infrastruktur, jaminan [[pedagogical-safety|keselamatan]], dan pemeliharaan. Biaya total dapat melebihi biaya lisensi, dan institusi yang memperlakukan keterbukaan sebagai penghematan sering kali menemukan kewajiban pemeliharaan setelah staf proyek bubar.

**"Model frontier tertutup memang lebih baik, jadi alternatif terbuka hanyalah cadangan."** Kesenjangannya lebih sempit daripada yang disiratkan asumsi itu. Dalam [[cdpk-pedagogy-benchmark-llms|the Pedagogy Benchmark]] (CDPK + SEND, dibangun dari butir ujian guru Chile yang asli) yang mencakup 97 model, **DeepSeek R1 berbobot terbuka mencapai 86.65%**, melawan 10 teratas yang sebagian besar terdiri dari model penalaran tertutup — dan perbandingan biaya–akurasi bergerak lebih jauh ke arah terbuka. Argumen yang tersisa bagi keterbukaan karena itu menyangkut kendali dan keterauditan, bukan pengorbanan kemampuan.

**"Merilis bobot berarti merilis pekerjaannya."** Kontribusi terbuka yang lebih kuat merilis pipeline. OmniEdu menerbitkan supervisi seimbang kemampuan atas campuran 69,999 contoh alih-alih hanya bobot akhir, menaikkan setiap skala keluarga K–12 terbuka 4B/9B/27B, dengan model 4B yang disetel memperoleh **55 poin** performa [[scaffolding|perancah]] MathTutorBench; [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] juga mendokumentasikan prosedur RL dan penyetelan halusnya, termasuk 440 negatif sulit yang ditambang dan 40,000 respons yang dihasilkan. Bobot tanpa resep mereproduksi hasil tanpa mereproduksi metodenya.

## Konsep terkait

- [[open-education]]
- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## Artikel terkait
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asisten basis pengetahuan AI OER on-premise pada perangkat keras konsumen (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — Tutor adaptif berlisensi MIT dengan pustaka konten CC BY OpenStax (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Model pedagogis terbuka 32B yang mengungguli sistem proprietary jauh lebih besar (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Pengoreksi otomatis LLM lokal patuh FERPA yang dapat langsung dipakai
- [[programming-its]] — LLM berbobot terbuka yang dihosting sendiri untuk kepatuhan GDPR/EU AI Act dalam ITS Python
- [[aiawe-automated-writing-evaluation]] — Model berbobot terbuka yang diadaptasi LoRA untuk evaluasi tulisan otomatis
- [[stanbkt-bayesian-knowledge-tracing]] — Paket Python terbuka untuk knowledge tracing Bayesian penuh
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Kerangka tutoring agentic sepenuhnya sumber terbuka dengan memori siswa
- [[vismatic-secure-sandbox-cs-education]] — Sandbox terkontainerisasi terbuka untuk penilaian berorientasi proses
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tutor matematika afektif dengan basis kode terbuka
- [[cdpk-pedagogy-benchmark-llms]] — Tolok ukur pedagogi terbuka lintas 97 model dan batas biaya–akurasi
- [[astra-multi-agent-tutoring-benchmark-2026]] — Kumpulan data dan prototipe terbuka untuk evaluasi tutoring multi-agen berbasis jejak
- [[mllm-scientific-visualization-literacy]] — Model terbuka di bawah baseline manusia pada literasi visualisasi
- [[iks-instruct-dataset-indian-knowledge]] — Kumpulan data multibahasa terbuka untuk instruksi berlandaskan budaya
- [[aied-carbon-footprint-reporting]] — Metode sumber terbuka untuk melaporkan biaya lingkungan LLM
- [[egai-power-systems-education]] — Pustaka modul eksekutabel terbuka untuk AI teknik
- [[mooc-to-maic]] — Pembangkitan kursus yang digerakkan LLM dan ekonomi produksi kursus yang berubah
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Model Fondasi Terbuka untuk Pembelajaran dan Pengajaran
