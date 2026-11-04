---
title: "Uji Coba Terkendali Acak (RCT)"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/rct"
source_updated: "2026-10-26T09:10:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Uji coba terkendali acak (RCT)** — desain riset di mana partisipan ditugaskan secara acak ke kondisi perlakuan atau kontrol untuk mengestimasi efek kausal suatu intervensi terhadap sebuah luaran. Dalam [[ai-education|AI dalam pendidikan]], RCT adalah standar emas untuk menetapkan apakah sebuah alat AI atau pendekatan [[pedagogy|pedagogis]] *menyebabkan* [[learning-gains|perolehan belajar]], perubahan keterlibatan, atau luaran lain, alih-alih sekadar berkorelasi dengannya.

## Pertanyaan yang Perlu Dipertimbangkan

- Jika sebuah sekolah memberi tahu Anda bahwa "siswa yang menggunakan alat AI memperoleh skor lebih tinggi", mengapa itu masih mungkin gagal membuktikan bahwa alatnya menyebabkan perolehan tersebut — bahkan jika perbedaannya besar?
- Pengacakan menyeimbangkan perancu yang diketahui *dan yang tidak diketahui* di antara kelompok. Sebelum membaca, apa yang dicapai penugasan acak yang tidak dapat dicapai oleh sekadar membandingkan dua kelas utuh, seberapa pun cocoknya keduanya tampak?
- Halaman ini menyebut RCT sebagai standar emas tetapi mendaftar biaya nyatanya: latar artifisial, AI yang cepat berubah sehingga uji coba cepat kedaluwarsa, sampel kecil yang kurang berdaya, dan kendala [[ethics|etis]] dalam menahan alat yang bermanfaat. Mana di antara pertukaran ini yang menurut Anda paling sering diabaikan dalam judul berita riset pendidikan?
- Sebuah RCT dengan 1,174 partisipan menemukan bahwa [[generative-ai|GenAI]] menutup sekitar tiga perempat kesenjangan produktivitas berbasis pendidikan. Namun RCT yang dikelola baik tetap dapat dijalankan pada tugas sempit dalam latar yang dibuat-buat. Apa yang harus Anda periksa tentang *ukuran luaran* sebelum mempercayai klaim kausalnya?
- Pertimbangkan masalah etikanya secara langsung: jika Anda punya alasan sungguh-sungguh untuk percaya bahwa [[intelligent-tutoring|tutor AI]] membantu siswa belajar, apakah dapat dibenarkan menolaknya secara acak kepada separuh kelas selama satu semester? Bagaimana Anda merancang studi yang etis namun tetap mengisolasi penyebabnya?

## Pendahuluan

Pengacakan adalah yang membedakan RCT dari desain lain: dengan menugaskan pembelajar secara acak ke kondisi, RCT menyeimbangkan perancu yang diketahui dan tidak diketahui di antara kelompok, sehingga perbedaan luaran yang teramati dapat diatribusikan pada intervensi dengan validitas internal yang tinggi.

### Bagaimana RCT muncul dalam riset

- **Micro-RCT sebagai respons terhadap teknologi yang bergerak cepat:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] berargumen bahwa uji coba berskala besar konvensional tidak dapat mengikuti [[edtech-platform|platform]] tutoring yang berubah secara material selama studi, dan menggunakan uji coba terkendali acak-mikro yang dipimpin [[teacher-role|guru]] di sekolah menengah Inggris (644 dari 929 siswa menyelesaikan posttest, g = 0.33) untuk menjaga estimasi kausal tetap dapat diulang. Pertukarannya dinyatakan dalam desain mereka sendiri: atrisi 30.7%, luaran selaras [[curriculum-design|kurikulum]] alih-alih terstandar secara independen, dan hanya empat minggu tindak lanjut.
- **Klaim khasiat kausal:** RCT dalam AIED menguji apakah tutor AI, alat, atau perlakuan pedagogis meningkatkan luaran. [[generative-ai-education-productivity-gaps|Sebuah eksperimen acak tentang AI generatif]] dengan 1,174 partisipan menemukan GenAI secara substansial mempersempit kesenjangan produktivitas berbasis pendidikan, menutup sekitar tiga perempat perbedaan kinerja awal — estimasi kausal yang jelas atas efek AI.
- **Luaran yang diukur setelah jeda, bukan di akhir sesi.** Dengan mengacak 120 [[higher-ed|mahasiswa sarjana]] ke pembelajaran berbantuan AI atau pembelajaran tradisional atas topik yang sama dan menguji retensi 45 hari kemudian, kelompok berbantuan AI memperoleh 57.5% berbanding 68.5%, selisih sekitar 11 poin persentase ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]]).
- **Perbandingan dengan standar emas:** Halaman [[research-methods-aied|metode riset]] memosisikan RCT sebagai desain terkuat untuk validitas internal sekaligus mencatat pertukarannya — biaya, kondisi artifisial, AI yang cepat berubah, sampel kecil yang kurang berdaya, dan batas etis dalam menahan alat yang berpotensi bermanfaat.

- **Uji coba yang dirancang untuk kesetaraan, bukan perbedaan.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]] mengacak 2,383 orang dewasa ke tutoring AI, tutoring manusia langsung, atau kontrol video, menulis butir GRE baru bersama mantan pengembang tes ETS dan Kaplan agar kontaminasi tes terbit tetap di luar, menyeimbangkan urutan kedua bentuk, dan menguji kesetaraan dengan dua uji satu sisi terhadap ±0.25 SD alih-alih terhadap perbedaan - pilihan desain yang membuat "tidak ada perbedaan signifikan" menjadi hasil yang dapat ditafsirkan.

- **Pengacakan kelompok, serapan rendah, dan apa arti estimasi intent-to-treat kemudian.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] mengacak 2,379 mahasiswa sarjana di 13 blok dengan menugaskan *instruktur* alih-alih siswa, sehingga setiap siswa dalam satu kelas mewarisi kondisi instrukturnya — desain yang membuat uji coba penerapan multi-kelas dapat dijalankan, dan yang menciptakan masalah inferensi yang kemudian didokumentasikan studi itu. Hanya sekitar 15% siswa di kelas perlakuan yang pernah menggunakan alat, sehingga efek yang dilaporkan mengestimasi *penawaran* akses alih-alih penggunaannya; para penulis membaca intervensinya sebagai penggunaan AI yang lebih luas yang dipicu oleh pengenalan itu, dan memperlakukan sesi individual sebagai pertanyaan terpisah. Karena perlakuan ditugaskan pada tingkat instruktur, inferensi bersandar pada 34 kluster — latar di mana galat baku yang kokoh terhadap kluster melebih-lebihkan presisi — sehingga makalah melaporkan inferensi acak di sampingnya dan menemukan kesimpulannya kokoh. Dua efek utama, penurunan 0.37 SD pada nilai akhir dalam sampel padanan persis dan penurunan 0.90 SD pada partisipasi platform tercatat di kedua sampel, adalah konsekuensi tingkat kelas yang tidak dapat diisolasi oleh pengacakan per siswa atas alat yang sama tanpa kontaminasi antara teman sekelas perlakuan dan kontrol.
- **Alat sekolah sukarela tetap dapat menggeser beban kerja pada dosis 7%.** [[roy-aila-lesson-planning-teacher-choices-2026|Roy et al. (2026)]] mengacak 464 guru di 108 sekolah dasar Inggris pada tingkat sekolah. Waktu persiapan keluar pada 0.76 dari kelompok pembanding (95% CI 0.64 hingga 0.89) meskipun alat itu mencakup 7% pelajaran dan penggunaannya menurun sepanjang sepuluh minggu, sehingga estimasinya membatasi apa yang dicapai penawarannya bagi beban kerja, bukan apa yang akan dicapai adopsi penuh.
- **Serapan membatasi apa yang dapat diuji uji coba, dan dukungan keterlibatan bukanlah dosis.** [[access-not-enough-ai-tutoring-2026|Robinson et al. (2026)]] menjalankan dua RCT platform membaca di mana hanya 60.7% dan 53.3% siswa kontrol yang pernah menggunakan platform; tutor keterlibatan menaikkan cerita yang dibaca sebesar 71–80% namun tidak menghasilkan perolehan capaian, konsisten dengan 2–5 menit per minggu yang terjangkau.
- **Skala yang mengubah hasil nol menjadi bukti.** [[mata-sustaining-ai-enabled-student-support-2026|Mata et al. (2026)]] mengikuti 8,708 siswa di delapan semester dengan daya untuk mendeteksi efek 0.05 SD dan menemukan pergerakan besar dan segera pada tugas biner bertenggat — 34 poin persentase lebih banyak pendaftaran pada 16 Agustus setelah satu pengingat — sementara kinerja akademik, persistensi, dan kelulusan tidak menunjukkan efek yang terdeteksi. Skalanya adalah pelajaran desainnya: pada N sebesar ini, hasil nol akademik adalah hasil yang presisi alih-alih kegagalan mendeteksi, dan itulah yang memberi izin pada kesimpulan bahwa alat komunikasi menggerakkan apa yang dapat ia tangani dan bukan luaran belajar kumulatif.
- **Rata-rata nol dapat menutupi heterogenitas yang saling meniadakan.** Sebuah RCT terdaftar lebih dulu yang mengacak 538 guru di 24 sekolah Turki pada tingkat departemen-sekolah menemukan capaian turun 0.129 SD di antara guru di bawah median sementara naik 0.054 di antara guru di atas median, dan motivasi turun 0.111 SD, dengan ujian yang termampatkan plafon (rata-rata kontrol 89.2/100) membatasi daya.([[genai-can-harm-teaching-rct-2026|Sungu, Lira & Duckworth (2026)]])
- **Pendaftaran lebih dulu yang menetapkan pertanyaan dan efek yang dapat dideteksi.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] mendaftarkan kedua uji coba mata kuliah ke Registry of Efficacy and Effectiveness Studies, berkomitmen lebih dulu pada estimasi intent-to-treat dan ukuran efek minimum yang dapat dideteksi sekitar 0.157, serta mengacak siswa yang memberi persetujuan setiap semester dengan gelombang kedua pada masa tambah/lepas agar pendaftar terlambat masuk ke desain alih-alih ke sampel analisis bawaan. Dengan menggabungkan 2,483 siswa di dua mata kuliah, efeknya berada pada ambang A/B (empat poin persentase) sementara perubahan nilai numerik gabungan tidak bertahan setelah koreksi perbandingan berganda — pengingat bahwa luaran primer yang terdaftar mendisiplinkan hasil mana di antara beberapa hasil berkorelasi yang dipercaya.
- **Mengacak di dalam kelas utuh, dengan garis dasar pra-perlakuan.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]] mengacak 454 mahasiswa sarjana di dalam tiga kelas pemasaran utuh setelah masa tambah/lepas dan mengukur keempat luaran pada T1, sebelum ada siswa yang memiliki akses chatbot, sehingga perbandingan sepanjang semester bersandar pada garis dasar yang terukur alih-alih yang diasumsikan. Hasilnya yang datar (tidak ada interaksi kelompok × waktu yang mencapai signifikansi; efek terbesar yang dilaporkan adalah d = 0.050, pada minat) dilaporkan bersama adopsi — 0.89 login per minggu berbanding penugasan sekali seminggu — yang menjaga hasil nol tentang perlakuan yang jarang digunakan agar tidak dibaca sebagai hasil nol tentang alatnya.
- **Crossover dalam-subjek, dan kontrol yang ditetapkan pada praktik terbaik.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] meminta masing-masing dari 194 mahasiswa ilmu hayati Harvard mengerjakan dua pelajaran fisika — sekali dalam sesi [[active-learning]] di kelas dan sekali dengan tutor AI milik mata kuliah itu, dalam urutan yang diseimbangkan dengan pra- dan pasca-tes di sekitar masing-masingnya — sehingga setiap siswa menjadi kontrol bagi dirinya sendiri dan perbandingan *mode penyampaian* tidak terancu oleh siapa yang ditugaskan ke mana. Pilihan kedua desainnya sama pentingnya: pembandingnya adalah pembelajaran aktif berbasis riset alih-alih ceramah, sehingga keunggulannya (median posttest 4.5 vs. 3.5) diukur terhadap praktik terbaik saat ini dan tidak dapat dibaca sebagai "AI mengalahkan pengajaran."

### Kekuatan dan keterbatasan

- **Kekuatan:** inferensi kausal terkuat; pengukuran luaran yang bersih; mendukung estimasi ukuran efek; menyeimbangkan perancu melalui pengacakan.
- **Keterbatasan:** mahal dan lambat; latar artifisial dapat menurunkan validitas ekologis; alat AI berubah lebih cepat daripada uji coba dapat berjalan; sampel kecil sering kurang berdaya mendeteksi efek yang berarti; kendala etis dalam menahan AI yang berpotensi bermanfaat dari kelompok kontrol. Dua dari batas itu berubah bentuk ketika penugasan berkluster: sampel efektifnya menjadi jumlah *kluster* alih-alih jumlah siswa, sehingga uji coba dapat besar menurut jumlah kepala dan tipis menurut ukuran itu — 2,379 siswa Liu et al. bersandar pada 34 kluster tingkat instruktur — dan ketika serapan bersifat sukarela dan rendah, estimasi intent-to-treat menjawab apakah menawarkan alat itu mengubah luaran, bukan apakah menggunakannya mengubahnya.

Untuk pembahasan yang lebih lengkap tentang desain eksperimental dalam AI di pendidikan — termasuk kapan RCT sesuai dibandingkan desain kuasi-eksperimental, survei, atau komputasional — lihat [[research-methods-aied]].

## Miskonsepsi umum

- **"Pengacakan menjamin estimasi yang sah atas apa yang dilakukan alat."** Pengacakan menyeimbangkan perancu; ia tidak memastikan ada orang yang menggunakan perlakuannya. Uji coba berkluster dengan serapan rendah mengestimasi **efek menawarkan** alat, dan intent-to-treat serta treatment-on-treated menjawab pertanyaan yang berbeda.
- **"Uji coba besar selalu desain yang lebih baik."** Sebagian berargumen bahwa uji coba berskala besar konvensional **tidak dapat mengikuti platform tutoring yang berubah secara material selama studi**, dan sebagai gantinya menggunakan desain yang dipimpin guru yang tetap sah seiring sistemnya berkembang. Uji coba atas sasaran yang bergerak dapat berdaya baik dan tetap mengukur sistem yang sudah tidak ada.
- **"RCT dan bukti observasional dapat saling menggantikan."** Sebuah RCT dengan **1,174 partisipan** menemukan GenAI **menutup sekitar tiga perempat kesenjangan produktivitas berbasis pendidikan** — klaim kausal yang presisi atas periode tertentu. Observasi menjelaskan mekanisme dan adopsi; ia tidak dapat membawa estimasi itu, dan RCT tidak dapat menjelaskan mengapa.

## Konsep terkait

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — desain di balik bukti dukungan siswa terkuat

## Artikel terkait

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Waktu perencanaan pelajaran turun menjadi 0.76 dari kelompok pembanding di 108 sekolah dasar, pada dosis penggunaan alat 7%

- [[generative-ai-education-productivity-gaps]] — Apakah AI generatif mempersempit kesenjangan produktivitas berbasis pendidikan? Bukti dari eksperimen acak
- [[genai-can-harm-teaching-rct-2026]] — AI generatif dapat merugikan pengajaran: sebuah RCT
- [[access-not-enough-ai-tutoring-2026]] — Akses tidak cukup: dukungan manusia meningkatkan keterlibatan dengan tutoring AI
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Mengevaluasi Tutoring AI dengan Kecepatan Inovasi: Uji Coba Acak-Mikro yang Dipimpin Praktisi atas Platform Tutoring AI dalam Sains GCSE
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoring AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Pengacakan kelompok menurut instruktur: penurunan 0.37 SD pada nilai akhir dan 0.90 SD pada partisipasi platform, dengan serapan 15% dan inferensi pada 34 kluster (Liu et al. 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — Luaran yang diukur setelah jeda, bukan di akhir sesi
