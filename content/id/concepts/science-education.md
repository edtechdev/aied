---
title: "Pendidikan Sains"
type: concept
pedagogy: [inquiry-based-learning]
technology: [generative-ai]
discipline: [science education, stem education]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
connected_resources: [teacher-dev]
updated: "2026-11-08T14:01:53-05:00"
translation_of: "concepts/science-education"
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

> **[[science-education|Pendidikan sains]]** — studi dan praktik tentang cara siswa belajar sains dan cara mengajarkannya, yang kini dibentuk ulang AI generatif (LLM, simulasi, laboratorium virtual, dan penilaian berbasis AI) di [[physics-education|fisika]], kimia, dan [[biology-education|biologi]]. Artikel pendidikan sains di sini memperlihatkan bidang yang menegosiasikan ketegangan inti: AI nyata mendukung inkuiri, koreksi miskonsepsi, dan asesmen berskala besar, namun nilainya bergantung pada desain pembelajaran, dan ia berisiko [[cognitive-offloading|ketergantungan berlebih]], halusinasi, serta pembelajaran tak manusiawi yang digerakkan laba.

## Pertanyaan yang Perlu Dipertimbangkan

- Halaman ini dibuka dengan ketegangan: AI nyata mendukung inkuiri dan koreksi miskonsepsi dalam skala besar, namun nilainya sepenuhnya bergantung pada desain pembelajaran. Sebelum membaca, kapan alat yang Anda pakai dalam pengajaran sains tampak ampuh tetapi kosong secara pedagogis — dan apa yang membuat perbedaannya?
- Inkuiri fisika berbantuan AI 'menciptakan' nilai massa yang tak seorang pun ukur ketika siswa menekannya. Apa yang diungkap insiden ini tentang memperlakukan keluaran AI sebagai otoritatif dalam sains, dan bagaimana siswa semestinya dilatih memperlakukan jawaban yang terdengar meyakinkan?
- Penelitian menunjukkan AI kini mungkin lebih bernilai sebagai penghasil konten berskala daripada sebagai tutor interaktif — dalam satu studi, teks perubahan konseptual yang dirancang baik (pakar atau AI) mengalahkan dialog AI yang dipandu prompt. Apakah itu mengejutkan Anda, dan apa implikasinya bagi letak hasil pedagogis nyata AI dalam sains kini?
- AI menilai 10,364 asesmen fisika tulisan tangan dengan kesepakatan tinggi dengan penilai manusia, namun model multimodal masih bercelah pada penalaran kompleks dan pembuatan diagram. Apa pada karya sains 'autentik dan padat representasi' yang mungkin menolak asesmen otomatis?
- Mahasiswa fisika menunjukkan jurang kepercayaan–kegunaan yang mencolok — penggunaan tinggi, kepercayaan rendah — dan terbelah menjadi pengguna pragmatis dan bukan-pengguna skeptis. Jika siswa sendiri skeptis yang terkalibrasi domain, apa implikasinya bagi kebijakan seragam tentang AI di kelas sains?
- Suara kritis memperingatkan 'kolonisasi AI' atas pendidikan sains — ekstraksi tanpa persetujuan, monokultur algoritmik, reformasi tak manusiawi. Sebelum membaca, di mana manfaat AI dalam pendidikan sains menurut Anda dijual berlebihan, dan seperti apa alternatif berpusat manusia berorientasi keadilan?

## Pendahuluan

Pendidikan sains adalah tempat janji dan batas AI bertabrakan paling kasat mata: disiplin-disiplinnya menuntut penalaran [[multimodal]] yang ketat — pemikiran visual-spasial dalam fisika, keterampilan laboratorium dalam kimia, sistem tingkat organisme dalam biologi — di samping konten terstruktur dan terverifikasi yang ditangani LLM dengan baik. Tiga belas artikel di sini merentang ketiga disiplin dan jenjang, dari ruang kelas menengah [[k-12]] hingga mata kuliah universitas [[higher-ed]] dan program [[teacher-education|guru prajabatan]]. Dari semuanya muncul gambaran konsisten: AI berfungsi paling baik bukan sebagai penghasil jawaban melainkan mitra tertanam — rekan inkuiri, penghasil konten, asisten laboratorium virtual — yang kontribusinya ditentukan [[learning-design|desain pembelajaran]] dan struktur pedagogis di sekitarnya.

Evaluasi acak empat minggu atas platform revisi AI dalam sains GCSE memberi estimasi kausal — Hedges' g = 0.33, tanpa bukti efeknya berbeda menurut mata pelajaran atau status kurang beruntung — terhadap kontrafaktual yang sudah kaya teknologi, sehingga angkanya nilai tambah, bukan AI versus ketiadaan ([[ai-tutoring-micro-rct-gcse-science-2026|Harrison dkk. (2026)]]).

Akses terstruktur, bukan akses itu sendiri, yang menggerakkan perolehan: pertumbuhan yang dilaporkan tim rata-rata 17% pada akses individu tanpa batas tetapi 34% dan 31% ketika aksesnya terstruktur, yang juga mempertahankan lebih banyak diskusi sejawat ([[ai-university-physics-education-review-2026|Malikova dkk., 2026]]).

Temuan tingkat kelas ini berada dalam pertanyaan metodologis lebih besar. [[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen dan Graulich (2026)]] berargumen bahwa penelitian pendidikan sains mungkin kini berada di tengah iterasi epistemik, bersandar pada uraian Hasok Chang (2004) tentang tahap pengetahuan berurutan yang terbangun iteratif menuju tujuan epistemik tertentu. Dalam pembacaan mereka, metodologi AI dapat mentransformasi bukan hanya cara bidang ini menganalisis pembelajaran siswa, tetapi juga tujuan, kriteria, dan praktik epistemik yang diprioritaskannya. Mereka mengusulkan kerangka reflektif tujuh fase (perumusan masalah; instrumentasi dan pengukuran; eksperimentasi dan inferensi berbasis bukti; perbandingan dan replikasi; pembangunan norma dan konsensus; implementasi dan konsekuensinya; penyempurnaan berkelanjutan), diilustrasikan perkembangan termometri selama sekitar 150 tahun, dan menyajikannya sebagai instrumen reflektif, bukan metode tervalidasi atau temuan empiris.

### Laboratorium virtual dan simulasi

AI menurunkan secara dramatis hambatan menciptakan instrumentasi sains terkustomisasi dan berwujud. [[genai-ar-physics-simulation-prompt-2026|Levy dkk.]] menunjukkan prompt bahasa alami empat elemen dapat menghasilkan simulasi fisika realitas tertambah yang dikendalikan tangan (gerakan cubit-dan-renggang menyetel panjang gelombang lampu virtual), dengan 86% siswa percontohan melaporkan [[student-engagement|keterlibatan]] lebih besar. Serupa, [[ai-generated-smartphone-circular-motion-lab-2026|Suñer dkk.]] menghasilkan laboratorium rotasi berbasis peramban sepenuhnya lewat prompting, divalidasi terhadap analisis video hingga di bawah 1%. Karya ini membingkai ulang [[generative-ai|AI generatif]] sebagai alat [[prompt-engineering|pemrograman]] yang memungkinkan guru merancang perangkat lunak di sekitar [[pedagogy|niat pedagogis]] alih-alih menyesuaikan aktivitas dengan aplikasi tetap — memajukan pembelajaran [[embodied-learning|berwujud]] dan berbasis [[simulation|simulasi]]. Dalam [[chemistry-education]], [[context-based-ai-secondary-chemistry-2026|Abdikayumova & Madybekova]] menanamkan simulasi PhET dan tutoring ChatGPT dalam siklus inkuiri 7E berbasis konteks bagi siswa kelas 10, mencapai capaian dan keterlibatan jauh lebih tinggi daripada salah satu komponen saja — bukti bahwa kontekstualisasi, inkuiri terstruktur, dan AI adaptif bekerja sinergis. Analisis perilaku cara pembelajar bekerja di lingkungan pemodelan itu memperkuat pelajaran desain ini: menelusuri 315 pembelajar daring yang membangun model ekologis di VERA, [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] menemukan pembelajar yang terlibat eksplorasi siklus penuh berbasis hipotesis membangun model paling kompleks dan beragam, sedangkan pembelajar yang didominasi observasi sebagian besar menyalin model yang ada — menyarankan alat pemodelan ilmiah mendorong secara aktif eksplorasi siklus penuh alih-alih membiarkan pembelajar pasif dan didominasi observasi.

### Tutor AI dan pembelajaran berbasis inkuiri

Pembelajaran berbasis inkuiri adalah tema sentral. [[jiang-chatgpt-inquiry-steam-review-2026|Jiang dkk.]], dalam [[meta-analysis-systematic-review|tinjauan sistematis]] atas 24 studi, memosisikan ChatGPT sebagai "rekan inkuiri bertenaga AI" yang terutama dipakai pada fase konseptualisasi, investigasi, dan diskusi [[inquiry-based-learning|inkuiri STEAM]], meningkatkan kinerja, [[critical-thinking|berpikir kritis]], dan keterlibatan — namun berisiko ketergantungan berlebih, halusinasi, dan kesimpulan superfisial ketika keluarannya diperlakukan otoritatif. [[ai-supported-inquiry-photosynthesis-respiration-2026|Aydın]] menemukan delapan minggu inkuiri terbimbing berbantuan AI menghasilkan perolehan besar dalam pemahaman konseptual guru prajabatan tentang fotosintesis dan respirasi, sementara [[ai-literacy|literasi AI]] dan [[computational-thinking|berpikir komputasional]] tidak berubah signifikan — menyarankan pembelajaran disipliner dapat meningkat meski kompetensi lebih luas butuh pengajaran lebih lama atau lebih eksplisit. [[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani]] menunjukkan AI dapat menopang inti epistemik inkuiri ISLE namun tetap terbatas pada saluran verbal, tetapi menemukan fasilitasinya rapuh: di bawah tekanan siswa, AI "menciptakan" nilai massa yang tak seorang pun ukur, menggarisbawahi [[hallucination-risk]] dan perlunya verifikasi alih-alih mengasumsikan kesetiaan AI. [[airis-cognitively-activated-ai-physics-2026|Kuhn dkk.]] mengusulkan kerangka AIRIS (Activate–Inquire–Reflect) untuk menjaga prediksi, interpretasi, dan evaluasi sebagai tugas manusia yang tak dapat didelegasikan, dan menyerukan eksperimen "kondisi penarikan" yang menguji apakah pembelajaran bertahan saat AI dihilangkan — respons langsung terhadap "masalah katak direbus" tentang erosi praktik epistemik. Penilaian pakar atas rencana pembelajaran hasil AI memperluas pelajaran desain ini ke sains yang selaras [[curriculum-design|kurikulum]]: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli dan Yildirim (2026)]] meminta sebelas spesialis pendidikan sains Turki menilai ChatGPT-4 dan alat berfokus pendidikan (Teacher's Buddy) atas rencana kelas enam untuk unit "Kehidupan Berkelanjutan dan Keanekaragaman Hayati" yang selaras model Engineering [[design-based-research|Design-Based]] Learning (EDBL). Kedua platform mendapat skor tertinggi pada "Menyajikan solusi" namun terendah pada Keterampilan Teknik (tujuan umum x̄ = 37.45; berfokus pendidikan x̄ = 41.45) — kelemahan bersama saat menyimulasikan tahap iteratif berorientasi proses (pembuatan prototipe, analisis kegagalan, revisi, pengujian ulang reflektif) yang mendefinisikan pembelajaran berbasis desain — dan hanya 3 dari 11 pakar menilai salah satu rencana langsung "Dapat diterapkan", dengan 7 menilainya "Dapat diterapkan dengan koreksi".

Mengisolasi kontribusi AI dalam studi sosio-ilmiah iklim tiga kelompok, siswa yang inkuiri terstrukturnya menyertakan mitra AI memperoleh lebih banyak daripada rekan yang hanya berinkuiri pada pengambilan keputusan (d = 0.69), dengan perolehan terbesar pada pemantauan dan pengelolaan adaptif sementara pengumpulan data meningkat sama besar di semua kondisi ([[ai-assisted-inquiry-ssi-climate|Gousopoulos (2026)]]).

Tinjauan konseptual mendasari saluran material secara teoretis: sains adalah sistem terbuka yang merevisi klaim terhadap bukti fisik, sementara model bahasa secara operasional tertutup terhadap bukti saat inferensi ([[nature-of-science-generative-ai-2026|Muminova & Mamatkulov, 2026]]).

### Miskonsepsi dan perubahan konseptual

Bukti tentang perubahan konseptual bernuansa dan sebagian berlawanan intuisi. [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan]] menemukan dalam desain Solomon Empat Kelompok dengan 413 siswa bahwa [[refutation-text|teks perubahan konseptual]] yang ditulis pakar maupun dihasilkan AI sama-sama secara signifikan lebih efektif mengurangi [[misconceptions|miskonsepsi]] kalor dan suhu daripada dialog AI interaktif, yang tak menawarkan keunggulan atas kontrol — memosisikan nilai pedagogis AI saat ini sebagai [[generative-ai|penghasil konten]] yang dapat diskalakan alih-alih tutor interaktif, dengan perolehan terkonsentrasi pada siswa berprestasi tinggi (masalah [[equity-in-ai-education|keadilan]]). Hal ini diperkuat [[probing-ai-generated-physics-solutions-2026|Borse dkk.]], yang menunjukkan kekhususan prompt membentuk kualitas solusi fisika dan kritik terpandu MAPS lebih menyiapkan siswa mengevaluasi keluaran AI daripada [[problem-solving|pemecahan masalah]] mandiri, memperlakukan ketidaksempurnaan AI sebagai sumber belajar [[critical-thinking|berpikir kritis]].

### Penilaian jawaban oleh AI dan asesmen

Penilaian jawaban oleh AI maju cepat pada pekerjaan berisiko tinggi. [[ai-grading-handwritten-physics-2026|Pathak dkk.]] menilai 10,364 halaman pindaian asesmen fisika tulisan tangan (termasuk olimpiade nasional dan kamp seleksi tim), mencapai korelasi skor tinggi (0.91–0.97) dan memulihkan tim lima siswa yang sama dengan penilaian manusia — berargumen AI berfungsi sebagai [[assessment-validity|pembaca kedua]] yang sah dan alat audit di bawah kendali pemeriksa bila diberi rubrik rinci khas fisika. Penandaan otomatis jawaban pendek punya garis keturunan transformer lebih panjang: [[auto-marking-short-answer-science-2026|tinjauan pelingkupan Morley dkk.]] atas 21 studi (2017–awal 2024) menemukan model keluarga BERT mendominasi penandaan otomatis soal sains jawaban pendek hingga 2021 sebelum pendekatan berbasis GPT diadopsi lewat prompting sejak 2022, bahwa model yang diperkaya data domain (buku teks, rubrik, pra-pelatihan lanjutan) konsisten mengungguli garis dasar, dan bahwa ancaman yang belum terselesaikan pada [[educational-measurement|keandalan]], [[explainable-ai|keterjelasan]], dan [[bias-mitigation|keadilan]] berargumen agar penanda otomatis itu menjadi penopang, bukan pengganti, [[teacher-role|pemeriksa manusia]]. Namun [[omniphys-multimodal-physics-benchmark-2026|Chen dkk.]] lewat OmniPhys [[benchmark]] mengungkap LLM multimodal masih bercelah signifikan pada penalaran kompleks dan *pembuatan* diagram, memperingatkan agar tidak terlalu mempercayai asesmen fisika [[automated-assessment|otomatis]] pada tugas autentik yang padat representasi yang mendefinisikan kompetensi disipliner mendalam. Padanan kimianya mempertajam ketergantungan pada format: [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]] menilai final kimia umum tulisan tangan dari 296 siswa dengan [[llm]] multimodal, menemukan kesepakatan tinggi dengan asisten pengajar untuk jawaban tekstual dan reaksi kimia tetapi kinerja *lebih buruk daripada acak* pada menggambar dan membuat grafik (kisi latar mengganggu penglihatan AI) — bukti bahwa penilaian AI andal dalam sains bersifat selektif menurut format respons dan menuntut penyerahan berbasis keyakinan kepada [[human-in-the-loop-ai|pemeriksa manusia]] untuk butir grafis, alih-alih pendekatan seragam "nilai semuanya".

### Persepsi guru dan pandangan kritis

Kesiapan guru menentukan. [[pre-service-science-teachers-ai-perceptions-2026|Amponsah dkk.]] menemukan guru sains prajabatan Ghana bersikap positif dan berniat kuat terhadap AI tetapi hanya moderat dalam pemakaian kelas aktual — jurang niat–penggunaan yang menunjuk [[teacher-ai-competency]] dan dukungan [[governance|kelembagaan]] sebagai tuas sesungguhnya. [[becker-chatgpt-typology-physics-2026|Becker dkk.]] dan [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]] mendokumentasikan mahasiswa fisika sebagai skeptis yang terkalibrasi domain, bukan pengadopsi tanpa kritik: jurang kepercayaan–kegunaan 50 poin (91% menggunakan, 41% mempercayai) dan dua profil pengguna berbeda (Pengguna Pragmatis vs. Bukan-Pengguna Skeptis) yang menantang kebijakan seragam. Mengimbangi teknosentrisme, [[avraamidou-ai-colonization-science-education|Avraamidou]] memperingatkan "kolonisasi AI" atas pendidikan sains — ekstraksi tanpa persetujuan, monokultur algoritmik, dan reformasi tak manusiawi yang berpusat laba — dan menyerukan AI feminis berpusat manusia yang memprioritaskan keadilan di atas laba, sementara tinjauan sistematis [[ai-science-chemistry-education-systematic-review-2025|Erümit & Özdemir Sarıalioğlu]] atas 18 studi menekankan risiko [[ethics|etis]] (bias, halusinasi, [[academic-integrity|plagiarisme]], erosi pemikiran mandiri) dan perlunya [[teacher-education|pelatihan guru]] serta penggunaan sadar. Pelajaran kolektif ketiga belas artikel: AI dalam pendidikan sains memberi perolehan bila tertanam dalam inkuiri sehat, [[scaffolding]], dan desain [[assessment|asesmen]] — dan melemahkan pembelajaran ketika menggantikan kerja epistemik yang harus dikerjakan siswa sendiri.


**Kenyamanan AI yang umum tidak berpindah ke alat disiplin itu sendiri.** Di antara 100 mahasiswa geografi di satu universitas Kazakhstan, kesiapan mengajar dengan AI dan GIS mengikuti keakraban GIS (ρ = 0.508) dan pengetahuan GeoAI (ρ = 0.425) tetapi bukan keakraban AI umum (ρ = 0.071, p = 0.485) — pelajaran bagi [[teacher-education|persiapan guru]] di disiplin apa pun yang berbentuk alat ([[laiskhanov-ai-gis-geography-education-2026|Laiskhanov dkk. (2026)]]). Enam puluh tujuh persen menyebut diri mereka siap dalam beberapa bentuk, namun hanya 6% yang pernah menggunakan kombinasi itu dalam praktik dan 43% menilai instruksi yang tersedia memadai. Evaluasinya bersifat [[self-report-measures|laporan diri]] dan belum tervalidasi, sehingga ia menggambarkan apa yang dikatakan para mahasiswa tentang diri mereka sendiri.


[[llm-benchmark-secondary-science-topics-2026|Schroeder dkk. (2026)]] bertanya seberapa baik model umum menangani konten sains itu sendiri: pada set butir selaras NGSS untuk sekolah menengah pertama (1,078 butir) dan menengah atas (1,150 butir), sembilan model berbobot terbuka sebagian besar melampaui 90%, dengan ukuran model tak terkait akurasi. Seorang guru sains menilai 236 dari 240 butir sampel (98.3%) selaras sambil menandai ketiadaan diagram, interpretasi data, dan representasi matematis — butir hanya-teks tak dapat melatih semua ekspektasi kinerja NGSS. [[item-response-theory|Kesulitan butir]] yang tinggi dan daya beda rendah menyisakan pertanyaan apakah butirnya perlu diperbaiki atau sains menengah sudah terkelola bagi kelas model ini, dan para penulis menyebut umpan balik multitahap berbasis bukti sebagai standar yang hilang.

Dalam meta-analisis 42 studi tentang GenAI dan motivasi, efek domain mata pelajaran terkecil ada pada sains (g = 0.109, 95% CI [−0.107, 0.325], k = 3), satu-satunya domain yang intervalnya melintasi nol, sehingga bukti terkumpul tak mendukung argumen [[motivation|motivasional]] bagi GenAI khususnya dalam sains ([[genai-learning-motivation-meta-analysis-2026|Fang dkk. (2026)]]).

Sebagai kerangka alih-alih studi, [[zhai-science-literacy-generative-ai-coherence-2026|Zhai dkk. (2026)]] membingkai ulang sasarannya: literasi sains Visi I untuk kompetensi dalam karier sains, Visi II untuk sains dalam kehidupan sehari-hari dan kewargaan, Visi III untuk pengetahuan dan tindakan pada skala komunitas dan masyarakat. Mereka berargumen [[generative-ai|AI generatif]] memperoleh tempatnya di kelas sains hanya ketika ia membuat kurikulum, pengajaran, dan asesmen koheren dengan salah satu visi itu, dan bahwa masalah gigih bidang ini adalah ujian yang menghargai ingatan terminologi sementara standar menuntut penjelasan dan investigasi.

## Miskonsepsi Umum

- **"AI dalam pendidikan sains tidak punya bukti kausal."** Sebuah **evaluasi acak empat minggu** atas platform revisi berbasis AI dalam sains GCSE memberi estimasi kausal **Hedges' g = 0.33**, dengan **tanpa bukti efeknya berbeda menurut mata pelajaran**. Efeknya moderat dan bersifat kausal.
- **"Beri siswa akses dan perolehannya menyusul."** **Akses terstruktur, bukan akses itu sendiri, yang menggerakkan perolehan**: pertumbuhan yang dilaporkan tim rata-rata **17% pada akses individu tanpa batas tetapi 34% dan 31% ketika aksesnya terstruktur**. Strukturnya adalah intervensinya.
- **"Simulasi ilmiah butuh perangkat lunak khusus."** **Prompt bahasa alami empat elemen** dapat menghasilkan **simulasi fisika realitas tertambah yang dikendalikan tangan**. Hambatan menyusun simulasi turun ke desain prompt, yang menggeser keterampilan yang dibutuhkan dari pemrograman ke penspesifikasian fenomena.

## Konsep terkait

- [[stem-education]]
- [[physics-education]]
- [[chemistry-education]]
- [[biology-education]]
- [[inquiry-based-learning]]
- [[misconceptions]]
- [[simulation]]
- [[generative-ai]]

## Artikel terkait
- [[zhai-science-literacy-generative-ai-coherence-2026]] — Bab kerangka tentang literasi sains sebagai koherensi lintas kurikulum, pengajaran, dan asesmen (Zhai dkk. 2026)

- [[ai-methodologies-science-education-research-2026]] — Kerangka iterasi epistemik tujuh fase untuk merefleksikan bagaimana metodologi AI dapat mentransformasi penelitian pendidikan sains (Martin dkk., 2026)
- [[ai-science-chemistry-education-systematic-review-2025]] — Tinjauan sistematis AI dalam pendidikan sains dan kimia
- [[jiang-chatgpt-inquiry-steam-review-2026]] — ChatGPT untuk pembelajaran berbasis inkuiri dalam STEAM
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — Inkuiri terbimbing berbantuan AI dalam fotosintesis dan respirasi
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Teks perubahan konseptual vs. dialog AI untuk kalor dan suhu
- [[ai-grading-handwritten-physics-2026]] — Penilaian AI berskala besar atas asesmen fisika tulisan tangan
- [[avraamidou-ai-colonization-science-education]] — Komentar kritis atas kolonisasi AI dalam pendidikan sains
- [[pre-service-science-teachers-ai-perceptions-2026]] — Persepsi dan penerimaan AI di kalangan guru sains prajabatan
- [[ai-assisted-inquiry-ssi-climate]] — Inkuiri berbantuan AI dalam isu sosio-ilmiah tentang perubahan iklim
- [[auto-marking-short-answer-science-2026]]
- [[an-goel-self-directed-modeling-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Mengevaluasi tutoring AI dengan kecepatan inovasi: uji acak mikro yang dipimpin praktisi atas platform tutoring AI dalam sains GCSE
- [[llm-benchmark-secondary-science-topics-2026]] — Tolok ukur pemahaman LLM atas topik sains sekolah menengah pertama dan atas
- [[nature-of-science-generative-ai-2026]] — Hakikat sains di era kecerdasan buatan generatif: otoritas epistemik, materialitas, dan respons sinergis
- [[ai-university-physics-education-review-2026]] — Akses tim yang terstruktur mengungguli akses individu tanpa batas dalam tinjauan AI fisika universitas
- [[genai-learning-motivation-meta-analysis-2026]] — Satu-satunya domain yang interval motivasionalnya melintasi nol (g = 0.109, k = 3)

- [[laiskhanov-ai-gis-geography-education-2026]] — Kenyamanan AI umum tidak berpindah ke kesiapan GeoAI

