---
connected_resources: [lesson-md, liascript, onmicro-ai, teacher-dev]
title: "Platform Edtech"
created: "2026-08-09T07:47:05-04:00"
connected_faqs: [designing-educational-ai-software]
type: concept
foundations: [ai-education]
pedagogy: [online-teaching-and-learning]
technology: [adaptive-learning, generative-ai, llm, personalized-learning, edtech-platform]
ethics: [equity-in-ai-education]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/edtech-platform"
source_updated: "2026-11-04T16:51:25-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Platform edtech** — sistem digital, sistem manajemen pembelajaran (LMS), sistem tutor, dan [[online-teaching-and-learning|lingkungan pembelajaran daring]] yang melaluinya AI disampaikan kepada siswa dan pendidik. Dalam [[ai-education|AI dalam pendidikan]], platform adalah *lapisan infrastruktur* yang menentukan apakah suatu kapabilitas AI menjangkau siswa, bagaimana ia diterapkan (terbuka vs. berpemilik, terintegrasi vs. mandiri), dan siapa yang dapat mengakses, mengadaptasi, serta mengevaluasinya. Penelitian dalam basis pengetahuan ini mengkaji platform dari berbagai sudut: desainnya, kendala adopsi dan keterlibatannya, tata kelola institusionalnya, dan implikasi keadilannya.([[access-not-enough-ai-tutoring-2026]]) ([[oatutor-open-source-adaptive-tutor-2023]])

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan alat tutor atau umpan balik AI terakhir yang Anda temui. Sekarang pikirkan di mana alat itu sebenarnya 'tinggal' — LMS, platform, atau aplikasi yang mengemasnya. Apakah wadah itu terasa seperti kendaraan penyampaian yang netral, atau mungkinkah pilihan desainnya (terbuka vs. berpemilik, terintegrasi vs. mandiri, cloud vs. lokal) mengubah apa yang dapat Anda lakukan dengannya?
- Satu studi menemukan bahwa hampir separuh siswa tidak pernah menggunakan platform tutor AI yang dirancang dengan baik, dan pengguna beratnya condong ke siswa berprestasi tinggi. Jika suatu alat efektif 'secara prinsip' tetapi siswa tidak menggunakannya, apakah kapabilitas atau platform yang menjadi masalah sebenarnya? Apa artinya itu bagi cara Anda mengevaluasi edtech?
- Platform AI berpemilik dapat mengurung peneliti pada segelintir sistem tertutup, sementara platform terbuka seperti OATutor memungkinkan siapa pun melakukan fork, bereksperimen, dan menerbitkan. Apa yang mungkin hilang — bagi penelitian, keadilan, dan otonomi institusi — ketika pendidikan AI disampaikan melalui platform tertutup yang buram?
- Seberapa besar model bisnis sebuah platform — siapa yang membayar, siapa yang memiliki data, apa yang dioptimalkan — membentuk pembelajaran yang benar-benar terjadi di dalamnya? Di mana Anda akan mencari untuk melihat pengaruh itu?
- Sejumlah platform 'AI-native' baru menggantikan model MOOC satu-video-untuk-banyak-siswa dengan ruang kelas [[agentic-ai|multiagen]] yang dibangun di sekitar setiap siswa. Sebelum membaca lebih lanjut, apa yang akan Anda khawatirkan hilang ketika pengajaran menjadi satu-ke-satu dengan agen alih-alih satu-ke-banyak dengan instruktur?

## Pendahuluan

Platform berada di antara model atau kapabilitas AI dan siswa. Ia adalah wadah yang mengemas tutor, penilaian, umpan balik, dan administrasi menjadi sesuatu yang dapat digunakan — dan, yang paling penting, ia membentuk hasil belajar melalui pilihan desainnya, aksesibilitasnya, dan model bisnis yang mendasarinya. Konsep ini mencakup sistem manajemen pembelajaran seperti Moodle, platform daring berskala besar seperti MOOC, sistem [[intelligent-tutoring|tutor cerdas]] khusus, serta platform mata kuliah agensik atau AI-native yang sedang muncul. Menamai wadahnya tidak sama dengan menamai pembuatnya: platform adalah sistem yang diterapkan, sedangkan pemangku kepentingan yang memutuskan apa yang dilakukannya adalah [[educational-technology-developers]] — yang penting di sini karena temuan adopsi, kemiringan keadilan, dan pengadaan di bawah ini biasanya merupakan konsekuensi dari pilihan desain yang dibuat sebelum sebuah platform pernah mencapai ruang kelas.

## Apa yang dilakukan platform dalam AI dalam pendidikan

Platform dalam AI dalam pendidikan menjalankan beberapa fungsi yang berbeda:

- **Menyampaikan pengajaran dan tutor** — wadah bagi [[intelligent-tutoring|Tutor AI]] dan sistem [[intelligent-tutoring]], mulai dari tutor yang tertanam dalam LMS hingga platform tutor adaptif mandiri.
- **Mengelola lingkungan pembelajaran** — pengorganisasian mata kuliah, pendaftaran, pelacakan kemajuan, dan administrasi yang disediakan platform LMS tradisional.
- **Menyelenggarakan penilaian dan umpan balik** — tempat [[automated-assessment]], [[formative-assessment]], dan [[feedback|lingkar umpan balik]] berjalan.
- **Mengumpulkan dan menganalisis data pembelajaran** — substrat bagi [[learning-analytics]] dan [[student-modeling]].
- **Mengatur akses dan penerapan** — keputusan tentang [[open-source|sumber terbuka]] vs. berpemilik, lokal vs. cloud, dan institusi serta siswa mana yang dapat menggunakannya.

## Temuan utama dari artikel-artikel basis pengetahuan

### Adopsi, bukan kapabilitas, sering menjadi kendala pengikat

Sebuah platform dapat efektif secara prinsip namun gagal dalam praktik jika siswa tidak menggunakannya. Dua [[rct|RCT]] atas platform tutor [[ai-literacy|literasi AI]] (membaca) menemukan bahwa **hampir separuh siswa kelompok kontrol tidak pernah menggunakan platform** dan pengguna rata-rata hanya 2–5 menit per minggu — jauh di bawah dosis yang diperlukan untuk peningkatan membaca. Seorang tutor keterlibatan tatap muka meningkatkan penggunaan dan keterlibatan secara substansial tetapi tetap tidak menghasilkan peningkatan capaian, dan pengguna platform condong ke siswa berprestasi lebih tinggi, sehingga menimbulkan kekhawatiran keadilan.([[access-not-enough-ai-tutoring-2026]])

Urutan sama pentingnya dengan kapabilitas: sebuah tinjauan atas 100+ studi AI dalam pendidikan (2020–2025) menempatkan platform ujung-ke-ujung di puncak tumpukan adopsi, dengan argumen bahwa institusi sebaiknya menuntaskan penilaian formatif, kapasitas kepemimpinan, dan norma bersama sebelum membeli platform yang menskalakannya ([[raza-farooq-aied-review-2020-2025|Raza & Farooq (2025)]]).

Kesenjangannya berada pada tingkat pesan, bukan login: dalam RCT klaster dua tahun, 96% siswa mencoba Khanmigo tetapi siswa median hanya mengirim pesan kepadanya pada 17% sesi ketika mereka melakukan kesalahan, dan ~14.5% pesan membawa pertanyaan matematis atau langkah penalaran yang sungguh-sungguh — dengan biaya \$15 per siswa per tahun ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos and Low, 2026]]).

Kendala pengikatnya adalah di mana AI berada di dalam platform: dalam uji coba sekolah menengah pertama dengan 6,000 siswa, efek yang terukur berasal dari titik sentuh terstruktur di dalam lingkungan latihan — 2.0 penggunaan "bantu saya memulai", 2.3 penelusuran pasca-kesalahan, dan 3.2 penjelasan langkah per siswa yang menguasai materi — sementara akses AI semata menambah sedikit ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos et al. (2026)]]).

### Alat apa yang dilaporkan digunakan pendidik, dan apa yang membatasi akses

Sensus langka atas pilihan platform yang dilaporkan pendidik berasal dari tipologi 2026 yang dibangun dari 211 pendidik di sembilan negara: alat yang mencapai ruang kelas secara tidak proporsional adalah alat yang memiliki tingkat gratis, karena versi gratis yang tersedia untuk publik merupakan kriteria inklusi, dan entri yang paling banyak dinominasikan adalah asisten serbaguna dan generator media alih-alih platform yang dirancang khusus. Sekitar separuh dari lima puluh alat yang terdaftar menghasilkan gambar, audio, video, atau dek slide, sementara asisten berbasis dokumen (NotebookLM, Elicit, SciSpace, Humata, Research Rabbit) membentuk klaster paling koheren dalam kategori riset. Sistem [[intelligent-tutoring|tutor]] khusus muncul sebagai kelompok kecil yang [[discipline-specific-aied|spesifik per mata pelajaran]] alih-alih menjadi pusat penggunaan yang dilaporkan — yang membingkai masalah adopsi di atas dalam latar yang lebih luas, di mana sebuah platform bersaing memperebutkan perhatian dengan alat serbaguna yang sudah terbuka di hadapan siswa dan instruktur.([[typology-generative-ai-tools-education-2026]])

### Model platform itu penting: terbuka vs. berpemilik

- **Platform berpemilik** menciptakan hambatan bagi penelitian: peneliti yang ingin mereplikasi atau memperluas eksperimen [[adaptive-learning]] sering kali terkurung pada sejumlah kecil platform tertutup.
- **Platform terbuka** menurunkan hambatan ini. **OATutor** adalah sistem tutor adaptif sumber terbuka pertama yang dibangun di atas prinsip ITS — basis kode berlisensi MIT dengan pustaka konten aljabar Creative Commons, estimasi penguasaan [[knowledge-tracing]], dan pengujian A/B bawaan — yang memungkinkan peneliti melakukan fork, bereksperimen, dan menerbitkan sistem ujung-ke-ujung secara penuh.([[oatutor-open-source-adaptive-tutor-2023]])
- **Transparansi terkonsentrasi di depan.** Dalam audit yang sama atas 48 kebijakan platform, pengumpulan data dan pembagian kepada pihak ketiga diungkapkan relatif baik sementara pengungkapan khusus AI dan akuntabilitasnya tertinggal, dan 16 dari 48 platform (33%) tidak membuat pengungkapan AI yang bermakna meskipun fitur AI-nya terlihat ([[edtech-privacy-deferral-2026|Nair & Greenstadt, 2026]]).

- **API LMS membatasi apa yang dapat dinilai platform terintegrasi game.** Sebuah pilot hipergamifikasi yang menghasilkan dunia yang dapat dimainkan dari konten Blackboard tidak dapat merender pertanyaan pilihan ganda atau pertanyaan terbuka, karena token berlingkup siswa tidak mengembalikan konten pertanyaan dan tidak ada endpoint untuk memposting jawaban saat runtime ([[hypergamification-game-engine-lms|Yusubov et al., 2026]]).

- **Isolasi dan biaya adalah variabel desain platform.** VISMATIC memasangkan kontainer tanpa root — yang, tidak seperti JupyterHub, mencegah pergerakan lateral dan kompromi host — dengan telemetri proses tingkat API, menjalankan 19 siswa dan 1,880 peristiwa tercatat pada satu node Raspberry Pi 5 yang dinilai untuk 10 hingga 20 ([[vismatic-secure-sandbox-cs-education|Arroyo et al. (2026)]]).

### Platform AI-native sedang membentuk ulang pendidikan daring

Paradigma platform itu sendiri sedang berkembang. **MAIC** (Massive AI-empowered Course) menggantikan model MOOC "satu video untuk N siswa" dengan ruang kelas multiagen yang digerakkan [[llm|LLM]] — "N agen untuk 1 siswa" — menggunakan agen [[teacher-role|Guru]], Asisten, Teman Sekelas, dan Penganalisis yang terspesialisasi untuk menyampaikan pembelajaran personal dan adaptif dalam skala besar. Ia menurunkan produksi mata kuliah dari ~\$25K/60 jam menjadi di bawah \$2/30 menit.([[mooc-to-maic]]) Serupa dengan itu, desain LMS terintegrasi AI mengusulkan melampaui platform yang hanya berfungsi untuk alur kerja menuju dukungan instruksional waktu nyata dengan AI berpelindung kebijakan (terbatas), petunjuk formatif, tinjauan berjarak, dan [[visualization|dasbor]] guru.([[ai-lms-middle-school-longitudinal]]) Di ujung lain spektrum penerapan, AI yang tertanam di ruang kelas harus terbukti layak dalam lingkungan fisik yang hidup. Community Builder ([[breideband-community-builder-cobi-2026|CoBi]]) — platform seluas ruang kelas yang menggunakan [[speech-and-voice-technologies|pengenalan suara]] dan pemahaman bahasa untuk memvisualisasikan wacana kolaboratif kelompok kecil — berhasil diterapkan di ruang kelas sekolah menengah pertama yang bising menggunakan mikrofon komersial dan pipeline cloud yang dapat diskalakan, menunjukkan bahwa infrastruktur AI suara waktu nyata dapat berfungsi dalam latar [[k-12|K-12]] yang otentik meskipun ketidakcocokan antarmuka (pandangan guru vs. siswa tentang apakah umpan balik bersifat tingkat kelompok atau tingkat kelas) menciptakan gesekan penerapan.

### Fitur platform berbasis minat dan sadar konteks

Platform dapat mempersonalisasi melampaui data kinerja. **Taklif.AI** adalah platform bertenaga LLM yang menghasilkan tugas kuliah berdasarkan **minat ekstrakurikuler dan konteks budaya** siswa, selaras dengan [[culturally-relevant-pedagogy]] dan bergeser dari tugas seragam menuju keterlibatan yang digerakkan minat.([[taklif-ai-interest-based-personalized-assignments]])


### Lapisan yang dirancang khusus di atas model umum

Kontribusi platform sering kali adalah struktur yang tidak dimiliki model umum. [[learnmate2-llm-adaptive-learning|LearnMate^2]] membungkus LLM dalam perencanaan belajar, bantuan dalam konteks, dan aktivitas yang responsif terhadap kinerja, dan dalam perbandingan 16 peserta ia mengalahkan Khan Academy yang dipasangkan dengan Gemini 2.5 Pro pada kedua kuis (M = 13.375 vs 10.875, p = .0126; 7.875 vs 5.875, p = .0012). [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] menerjemahkan instruksi bahasa alami menjadi perilaku robot CoppeliaSim bagi pemula, berhasil pada 100% tugas sederhana tetapi 88,9% tugas kompleks di 108 kasus.

## Implikasi bagi desain dan penelitian

1. **Rancang untuk adopsi, bukan hanya kapabilitas.** Efektivitas sebuah platform bergantung pada apakah siswa benar-benar terlibat dengannya; struktur pendukung, orientasi awal, dan penjadwalan sama pentingnya dengan AI itu sendiri.([[access-not-enough-ai-tutoring-2026]])
2. **Perlakukan struktur platform sebagai tuas keadilan.** Siapa yang memperoleh manfaat dari sebuah platform bergantung pada akses, infrastruktur, dan kendala keterlibatan — desain platform harus diperiksa melalui lensa [[equity-in-ai-education]].([[access-not-enough-ai-tutoring-2026]])
3. **Utamakan platform terbuka yang dapat direplikasi untuk penelitian.** Platform sumber terbuka seperti OATutor memungkinkan penelitian pembelajaran adaptif yang reprodusibel dan basis bukti bersama.([[oatutor-open-source-adaptive-tutor-2023]])
4. **Rancang platform AI-native dengan tata kelola dan batasan.** Arsitektur yang mengutamakan privasi, minimalisasi data, log yang dapat diaudit, dan akses berbasis peran sangat penting ketika platform menjadi terintegrasi AI — terhubung ke persoalan [[privacy]] dan [[governance]].([[ai-lms-middle-school-longitudinal]])
Privasi dapat dibangun ke dalam pipeline alih-alih ke dalam kebijakan: detektor insiden ruang kelas yang dilatih pada lintasan pose teranonimkan menjaga isyarat wajah dan penampilan anak di bawah umur tetap di luar sistem, meskipun setiap metode kehilangan akurasi dalam transfer zero-shot ke ruang kelas nyata, di mana akurasi terbaik model yang diusulkan adalah 63.41% ([[privacy-aware-classroom-incident-recognition-2026|Parmar et al. (2026)]]).
5. **Jelaskan rekomendasi dalam bahasa domain guru.** Fitur AI sebuah platform memperoleh kepercayaan dan adopsi ketika penjelasannya dapat dipahami dan bermakna secara pedagogis: dalam eksperimen intra-subjek dengan alat rekomendasi pengelompokan AI (GrouPer), [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] menemukan bahwa penjelasan berbasis domain yang dirumuskan dalam bahasa kurikulum meningkatkan keterpahaman, kepercayaan, dan penerimaan guru secara signifikan lebih besar daripada penjelasan kepentingan-fitur mentah — dan bahwa penggunaan di ruang kelas nyata tetap diperlukan untuk penerimaan penuh.([[xai-teachers-trust-edtech-recommendations-2026]])
6. **Pisahkan sistem yang menghasilkan bukti dari sistem yang menilainya.** Ketika agen dapat menyelesaikan sebuah mata kuliah atas nama siswa, [[credentials-carry-evidence-ai-agents-2026|Srivastava (2026)]] berargumen bahwa sebuah platform harus mengeluarkan bukti yang sezaman dan dapat diperiksa atas penalaran siswa dan tidak boleh menjadi satu-satunya penilai — lingkungan, penerbit, dan verifikator seharusnya independen.([[credentials-carry-evidence-ai-agents-2026]])
7. **Hasilkan representasi pada waktu desain, bukan pada waktu runtime.** [[edtech-design-time-generative-ui|Neshaei et al. (2026)]] berargumen bahwa adaptasi runtime tidak dapat diverifikasi dalam skala besar dan mengusulkan pengodean konten sebagai kartu semantik yang agnostik modalitas, dari mana varian interaktif, audio, teks yang disederhanakan, dan pita lebar rendah dihasilkan serta disetujui instruktur sebelum rilis — menghilangkan biaya inferensi per siswa, meskipun tidak ada prototipe yang dilaporkan.

## Miskonsepsi Umum

**"Jika sebuah platform efektif secara prinsip, siswa akan menggunakannya."** Kapabilitas dan adopsi adalah masalah yang terpisah, dan adopsi sering menjadi yang mengikat. Dalam RCT klaster dua tahun, **96% siswa mencoba Khanmigo** — adopsi hampir universal — namun siswa median hanya mengirim pesan kepadanya pada **17% sesi ketika mereka melakukan kesalahan**, tepat pada momen alat itu dirancang. Platform yang mencatat kehadiran kelas belum mengubahnya.

**"Adopsi diukur dengan login."** Kesenjangan yang informatif berada pada tingkat pesan, bukan tingkat akun. Dalam uji coba yang sama hanya **~14.5% pesan membawa pertanyaan matematis yang sungguh-sungguh**. Sembilan puluh enam persen siswa menciptakan peristiwa akses; kira-kira satu dari tujuh interaksi mereka mengerjakan kerja intelektualnya. Melaporkan angka login di sini akan menggambarkan keberhasilan yang tidak ada.

**"Terbuka versus berpemilik hanyalah detail lisensi yang tidak memengaruhi hasil."** Model platform membentuk apa yang dapat dilakukan institusi dengan sistem tersebut: platform [[open-source|terbuka]] seperti OATutor — tutor adaptif berlisensi MIT dengan pustaka konten aljabar Creative Commons, estimasi penguasaan [[knowledge-tracing]], dan pengujian A/B bawaan — memungkinkan sebuah departemen menginstrumentasi dan memodifikasi [[pedagogy|pedagoginya]] sendiri, yang tidak dapat dilakukan platform tertutup. Lisensi menentukan siapa yang boleh menjalankan eksperimen.

**"Platform yang berfungsi di satu institusi akan berfungsi sebagaimana diadopsi."** Efek platform berjalan melalui tata kelola lokal: arsitektur yang mengutamakan privasi, minimalisasi data, log yang dapat diaudit, dan akses berbasis peran adalah yang membuat platform terintegrasi AI dapat diterapkan sama sekali, dan itu adalah keputusan institusional alih-alih fitur yang dapat Anda simpulkan dari demonstrasi vendor.

## Konsep terkait

- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[ai-literacy]]
- [[student-experience]]
- [[teacher-role]]
- [[k-12]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[culturally-relevant-pedagogy]]
- [[stem-education]]
- [[educational-technology-developers]]

## Artikel terkait
- [[typology-generative-ai-tools-education-2026]] — Apa yang dilaporkan 211 pendidik: 50 alat dalam sembilan kategori
- [[making-ai-tutoring-productive-mastery-math-2026]] — Membuat tutor AI produktif: latihan matematika berbasis penguasaan
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — Satu Klik Jauhnya: Khanmigo dalam eksperimen sekolah dua tahun
- [[access-not-enough-ai-tutoring-2026]] — Adopsi dan keterlibatan adalah kendala pengikat bagi platform tutor AI
- [[oatutor-open-source-adaptive-tutor-2023]] — Platform tutor adaptif sumber terbuka untuk penelitian yang dapat direplikasi
- [[mooc-to-maic]] — Bergerak dari MOOC ke ruang kelas AI multiagen yang digerakkan LLM
- [[ai-lms-middle-school-longitudinal]] — LMS terintegrasi AI untuk sekolah menengah pertama dengan dukungan terbatas yang mengutamakan privasi
- [[taklif-ai-interest-based-personalized-assignments]] — Platform tugas personal berbasis minat
- [[edusim-llm-robotic-simulation-education-2026]] — Platform simulasi robotik LLM untuk pendidikan
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Platform pengajaran robot sosial generatif di pendidikan tinggi
- [[hypergamification-game-engine-lms]] — LMS berbasis mesin game yang mengintegrasikan gamifikasi
- [[edtech-design-time-generative-ui]] — Merancang edtech untuk UI generatif
- [[lata-ferpa-compliant-local-llm-autograder]] — Platform penilai otomatis LLM lokal yang patuh FERPA
- [[vismatic-secure-sandbox-cs-education]] — Platform sandbox aman untuk pendidikan ilmu komputer
- [[learnmate2-llm-adaptive-learning]] — Platform pembelajaran adaptif personal bertenaga LLM
- [[privacy-aware-classroom-incident-recognition-2026]] — Visi komputer yang sadar privasi dalam platform ruang kelas
- [[raza-farooq-aied-review-2020-2025]] — Tinjauan komprehensif atas penelitian dan sistem AIED
- [[credentials-carry-evidence-ai-agents-2026]] — Kredensial yang membawa buktinya untuk kerja agen AI
- [[breideband-community-builder-cobi-2026]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[edtech-privacy-deferral-2026]] — "Kami Akan Memperbaikinya Nanti": Pendidikan, AI, dan Penundaan Privasi Siswa di EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Terlewat oleh Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
