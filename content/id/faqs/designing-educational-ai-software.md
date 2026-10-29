---
title: "Apa Praktik Terbaik dan Kiat untuk Merancang Perangkat Lunak AI Pendidikan yang Efektif?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
audience: [educational technology developers, software developers, instructional designers]
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Tim Anda memiliki prototipe tutor yang berfungsi dan demo distrik dalam tiga pekan. Atau sekolah mitra meminta Anda memasang antarmuka percakapan di atas pembaca kursusnya, dan seseorang mengatakan itu pekerjaan dua pekan. Atau peninjau pengadaan mengembalikan bagian keamanan dengan satu baris: apa tepatnya yang Anda uji?

Jawabannya lebih sempit daripada yang diasumsikan sebagian besar spesifikasi produk. AI pendidikan bekerja sebagai pakar terbatas di bawah pengawasan manusia: kemampuan yang dibatasi pada domain tertentu, berpijak pada konten yang disetujui pengajar alih-alih ingatan model, dirancang bersama guru dan pembelajar yang menggunakannya, dievaluasi pada interaksi multi-putaran yang berkelanjutan. Klausa terakhir itulah yang dilewati sebagian besar tim. Kerugian pedagogis muncul pada setiap model yang diuji dalam tolok ukur di bawah ini, dan tingkat kegagalannya naik dari 17,7% pada interaksi satu putaran menjadi 77,8% pada percakapan multi-putaran.

## Versi singkat

**1.** Tuliskan apa yang diputuskan sistem dan apa yang diputuskan guru. Batas itu menjadi arsitekturnya.

**2.** Evaluasi interaksi multi-putaran yang sadar disiplin terhadap kurikulum nyata, bukan prompt tunggal terhadap rubrik keamanan umum.

**3.** Pijakkan respons pada konten yang disetujui, dan pisahkan komponen pemverifikasi dari komponen percakapan.

**4.** Perlakukan setiap kiriman mahasiswa sebagai masukan yang tidak tepercaya, termasuk ketika sistem sedang menilainya.

**5.** Bangun gerbang percobaan, jalur eskalasi, dan pengesampingan oleh guru sebelum pilot.

**6.** Letakkan aksesibilitas dan pengujian ekuitas terpilah di dalam spesifikasi, bukan di backlog.

## Putuskan sistem itu boleh menjadi apa

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Studi desain partisipatif Reichert dan rekan-rekan]] dengan enam guru sekolah menengah mengoreksi asumsi bahwa AI pendidikan seharusnya menjadi agen otonom. Ketika diminta membuat prototipe [[conversational-ai|chatbot]] kelas di atas kertas, setiap guru menggambarkan pakar terbatas pada dua dimensi. Batas kewenangan menjaga guru tetap memegang kendali, karena tanggung jawab atas pembelajaran dan keselamatan mahasiswa tidak dapat didelegasikan. Batas keahlian mencerminkan kurangnya pengetahuan kontekstual AI tentang mahasiswa individual, dinamika kelas, dan norma institusi.

Arsitektur yang mereka sketsakan memiliki empat komponen (pembatasan cakupan konten, penyajian konten, adaptasi mahasiswa, pengawasan [[teacher-role|guru]]) di atas tiga lapisan pelindung: batas domain yang membatasi cakupan, penyaringan konten yang memungkinkan [[personalized-learning|personalisasi]] yang aman, dan pengesampingan oleh guru untuk kasus ambigu. Delegasinya selektif. Dipetakan ke sembilan peristiwa pengajaran Gagné, guru menyambut AI untuk menyajikan konten, menyediakan soal latihan, dan menawarkan [[formative-assessment|penilaian formatif]] dan [[feedback|umpan balik]], dan menolaknya untuk menetapkan tujuan atau menyelenggarakan [[summative-assessment|asesmen]] [[assessment|sumatif]].

Dua bawaan harus masuk ke dalam spesifikasi yang sama: selaraskan sistem dengan tujuan belajar yang eksplisit, dan setel ke arah respons yang ramah tetapi benar alih-alih menyetujui siapa pun yang sedang mengetik. Tutor yang menyanjung jawaban salah telah mengajari mahasiswa bahwa jawaban itu benar.

Satu detail murah sekarang dan mahal nanti: guru-guru ini menginginkan transparansi perilaku, batas yang terlihat, dan isyarat ketidakpastian, lebih daripada penjelasan penalaran model. Keenamnya meminta pencatatan percakapan lengkap, peringatan waktu nyata, dan kemampuan mengesampingkan, yang dibingkai sebagai tanggung jawab profesional alih-alih ketidakpercayaan. Rancang itu pada sprint pertama, karena menambahkan pencatatan belakangan ke tutor yang dibangun agar terasa tidak terlihat adalah penulisan ulang.

## Uji dalam percakapan, bukan dalam satu putaran

Sintesis [[pedagogical-safety|Keamanan Pedagogis]] berargumen bahwa pengujian keamanan konvensional tidak memadai untuk pendidikan. Sistem dapat menghindari konten beracun dan tetap menyebabkan kerugian dengan terlalu banyak mengungkap jawaban, memperkuat [[misconceptions|miskonsepsi]], menekan refleksi, mendorong ketergantungan, atau menyimpang dari tujuan instruksional.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark|tolok ukur]] memberi angka pada hal itu. Pada setiap model yang diuji, dari model berbobot terbuka 3,8B hingga GPT-5-mini, kerugian [[pedagogy|pedagogis]] bersifat universal, skala tidak andal meningkatkan keamanan, dan tingkat kegagalannya meningkat dari 17,7% pada interaksi satu putaran menjadi 77,8% pada percakapan multi-putaran. Pola pelanggarannya berbeda menurut mata pelajaran. Taksonomi 11 dimensi dan 48 sub-risikonya mencakup kategori kognitif, epistemik, [[metacognition|metakognitif]], [[motivation|motivasional]]-afektif, perkembangan, ekuitas, dan keselarasan instruksional, dan ia bekerja sebagai daftar periksa desain sekaligus sebagai rangkaian uji.

Bacalah angka eskalasi itu sebagai pernyataan tentang rencana pengujian Anda. Tutor yang lolos seribu uji satu putaran dapat gagal pada empat dari lima percakapan begitu mahasiswa membantah atau bertanya untuk ketiga kalinya. Bangun perangkat uji multi-putaran sebelum demo.

## Pijakkan konten dan pisahkan pemverifikasi

Pemijakan konten adalah keputusan arsitektural. [[eduguard-safe-rag-llm-tutor|EduGuard]], tutor [[rag|penambahan retrieval]] yang aman untuk [[cs-education|pemrograman pengantar]], memasangkan retrieval kursus yang disetujui pengajar dengan pemverifikasi klaim yang terpisah secara arsitektural, kendali [[cognitive-offloading|ketergantungan berlebih]] yang eksplisit, dan tolok ukur 600 kueri yang ditulis pengajar yang mencakup miskonsepsi, penelusuran kesalahan, kueri campur kode, dan prompt jawaban langsung yang bersifat menyerang. Ia lebih baik daripada garis dasar tutor [[socratic-method|Sokratis]] GPT-4o-mini dan Llama.

Bagian yang dapat ditransfer adalah pemisahannya: komponen yang memverifikasi tidak bercakap, dan tolok ukurnya memuat prompt yang ditulis untuk mengekstraksi jawaban, bukan untuk memeriksa kesopanan. [[hallucination-risk|Risiko halusinasi]] membahas mode kegagalan yang seharusnya dibatasi oleh retrieval yang disetujui.

## Perlakukan karya mahasiswa sebagai masukan yang tidak tepercaya

Model ancaman yang dilewatkan sebagian besar saran desain berada di dalam artefak yang sedang dinilai. [[humble-prompt-injection-ai-grading-red-team-2026|Evaluasi tim merah ofensif Humble (2026)]] menguji apakah mahasiswa dapat memanipulasi penilai berbasis LLM melalui injeksi prompt dalam kiriman mereka, dan manipulasi itu berhasil: injeksi yang memerintah, membingkai ulang, atau memainkan peran pada penilai menggeser skor tanpa mengubah pekerjaannya.

Jauhkan rubrik dan instruksi dari jendela konteks yang dikendalikan mahasiswa, buang atau tandai konten yang mirip instruksi, jangan pernah membiarkan kiriman menetapkan kriterianya sendiri, dan pertahankan keputusan manusia pada nilai yang berkonsekuensi. Penilai yang membaca instruksinya dari teks yang ia nilai telah menyerahkan rubriknya kepada kandidat.

## Beri perancah pada pekerjaannya alih-alih menyelesaikannya

Sistem yang menjawab mengakhiri pemikiran yang menjadi alasan ia dibeli. Dua hal harus masuk ke tiket: gerbang percobaan, agar tidak ada keluaran muncul sebelum mahasiswa berkomitmen pada sesuatu, dan [[human-in-the-loop-ai|jalur eskalasi manusia]] dengan tujuan yang bernama, yang bagi produk kelas berarti guru, dalam bentuk yang dapat ditindaklanjuti guru. [[scaffolding|Perancah]] dan pola [[socratic-method|Sokratis]] adalah versi produk dari apa yang dilakukan rencana pelajaran dengan tangan; [[developing-ai-tutor|mengembangkan tutor AI]] membahas diagnosis, tangga petunjuk, dan umpan balik secara terperinci.

## Letakkan aksesibilitas dan ekuitas di dalam spesifikasi

Persyaratan aksesibilitas cukup konkret untuk satu sprint: dapat dioperasikan dengan papan tombol, kompatibel dengan pembaca layar, teks dan transkrip, kontras yang memadai, alternatif teks yang dapat digunakan, dan kompatibilitas dengan [[ai-technologies|teknologi]] bantu. Fitur aksesibilitas buatan AI tetap memerlukan pemeriksaan kualitas. Lihat [[accessibility|aksesibilitas]].

Pengujian ekuitas harus memeriksa seluruh alur dan memilah perilakunya menurut bahasa, disabilitas, budaya, dan karakteristik pembelajar lain yang relevan alih-alih mengandalkan akurasi agregat. Sistem yang mendapat skor baik secara rata-rata dan buruk bagi satu kelompok telah mengirimkan kegagalannya kepada kelompok itu. Lihat [[bias-mitigation|mitigasi bias]] dan [[equity-in-ai-education|ekuitas]].

## Rancang bersama orang-orang yang akan menggunakannya

[[ko-hughes-vsd-student-centered-its-2026|Ko dan Hughes]] menerapkan desain peka nilai pada [[intelligent-tutoring|sistem tutoring cerdas]] bersama mahasiswa dan pengajar community college, kelompok yang secara historis ditinggalkan dalam desain platform pembelajaran. Mereka menemukan ketegangan nilai yang harus dikelola, bukan diselesaikan: transparansi versus keterjelasan, [[privacy|privasi]] versus wawasan instruksional, dan [[agency|agensi mahasiswa]] versus [[scaffolding|perancah]] yang dipandu sistem. Mahasiswa lebih menyukai penjelasan kolaboratif dan manusiawi daripada transparansi model mentah, dan prototipenya mengodekan 16 fitur yang selaras nilai di seluruh [[explainable-ai|AI yang dapat dijelaskan]], human-in-the-loop, dan kendali privasi.

[[wang-teacher-ai-co-design-review-2026|Tinjauan Wang, Liu dan Islam]] atas 28 studi empiris menambahkan kosakata untuk memilih alat. [[generative-ai|AI generatif]] terutama digunakan untuk perencanaan pelajaran, pembuatan prompt, dan ideasi kreatif, dengan AI bertindak sebagai asisten atau penghasil konten jauh lebih sering daripada sebagai perancang bersama, dan empat kemampuan, yaitu efisiensi, daya tanggap, [[creativity|kreativitas]], dan [[equity-in-ai-education|ekuitas]], yang dapat digunakan guru untuk menilai alat mana yang cocok untuk masalah desain mana.

Kedua studi memperlakukan desain sebagai [[human-in-the-loop-ai|kerja]] manusia-dalam-lingkar dan [[human-ai-collaboration|kolaborasi]] manusia-AI, serta sebagai [[usability-research|riset kegunaan]] alih-alih penjangkauan. Keduanya menemukan bahwa pemangku kepentingan memunculkan persyaratan yang tidak akan ditangkap tolok ukur akurasi mana pun, yang merupakan argumen praktis untuk membayar sesi-sesinya: persyaratan yang jika tidak, akan Anda temui di pilot.

## Apa yang salah dipahami tim desain

Keamanan berarti moderasi konten. Kerugian dalam produk pendidikan sering datang sebagai jawaban yang membantu pada saat yang salah. SafeTutors menemukan kerugian pedagogis pada setiap model yang diuji dan kegagalan yang naik menjadi 77,8% sepanjang percakapan, yang bukan kategori yang dirancang untuk dilihat filter konten.

Model yang lebih besar akan memperbaiki pedagoginya. Skala tidak andal meningkatkan keamanan pada rentang dari model berbobot terbuka 3,8B hingga GPT-5-mini.

Indeks retrieval yang baik berarti kontennya sudah tertangani. EduGuard memasangkan retrieval dengan pemverifikasi terpisah dan menguji prompt jawaban langsung yang bersifat menyerang, karena retrieval yang terpijak masih menyisakan jalur menuju pengungkapan berlebih.

Guru adalah cadangan terakhir. Keenam guru dalam studi desain meminta pencatatan, peringatan, dan pengesampingan sebagai syarat tanggung jawab profesional. Tiket dukungan bukan pengesampingan.

Aksesibilitas adalah tiket nanti. Ia berada di spesifikasi atau ia menjadi penulisan ulang, dan teks alternatif serta takarir yang dihasilkan tetap memerlukan pemeriksaan manusia.

## Apa yang akan kembali kepada Anda

**'Kami tidak dapat membangun perangkat evaluasi sebelum peluncuran.'** Bangun yang kecil. Klaim pertama yang Anda butuhkan adalah apa yang terjadi sepanjang lima putaran. Ambil 40 pertanyaan kurikulum nyata, jalankan masing-masing sebagai percakapan lima putaran dengan mahasiswa yang menolak petunjuknya, dan nilai terhadap 11 dimensi. Itu bagian keamanan yang dapat dipertahankan dan muat dalam satu sprint.

**'Guru ingin menyunting prompt, dan kami tidak dapat menjamin apa yang mereka tulis.'** Kalau begitu sempitkan permukaan yang mereka sunting. Prompt sistem tetap milik Anda; tujuan, konten yang disetujui, tangga petunjuk, dan kontak eskalasi milik mereka. Arsitektur pakar terbatas ada agar konfigurasi tetap berada dalam cakupan yang dapat Anda uji.

**'Skor tolok ukur kami tinggi.'** Akurasi pada jawaban satu putaran tidak memprediksi perilaku sepanjang percakapan, dan tolok ukur yang mengukur hal kedua menemukan kegagalan 77,8% pada pengaturan multi-putaran di setiap model yang diujinya. Laporkan kedua angkanya, atau yang pertama akan dibaca sebagai yang kedua.

**'Pencatatan penuh adalah masalah privasi.'** Memang, yang menuntut pembatasan tujuan alih-alih ketiadaan. Catat apa yang dibutuhkan guru untuk bertindak, minimalkan sisanya, batasi akses, dan nyatakan dalam produk apa yang disimpan dan untuk berapa lama.

## Yang perlu dilakukan pekan ini

**1.** Tulis batas kewenangan pada satu halaman: apa yang diputuskan sistem, apa yang diputuskan guru, dan mana yang akan Anda pertahankan dalam tinjauan pengadaan.

**2.** Ubah taksonomi 11 dimensi menjadi rencana pengujian dan jalankan secara multi-putaran pada 40 pertanyaan nyata dari satu kursus.

**3.** Pisahkan pemverifikasi dari penghasil di dokumen desain, meskipun bangunan pertama menjalankannya dalam satu proses.

**4.** Tambahkan gerbang percobaan, tujuan eskalasi, dan pengesampingan oleh guru ke antrean, dengan nama terlampir.

**5.** Masukkan daftar aksesibilitas dan satu persyaratan pemilahan ke dalam kriteria penerimaan rilis ini.

## Ke mana selanjutnya

[[developing-ai-tutor|Mengembangkan tutor AI]] membahas pembangunannya, dan [[designing-ai-into-learning|merancang AI ke dalam pembelajaran]] membahas bawaan pedagogis di sekitarnya. Untuk mengetahui apakah produknya bekerja setelah diterapkan, lihat [[checking-whether-educational-ai-works|memeriksa apakah AI pendidikan bekerja]]; untuk konsep keamanan di balik rencana pengujian, [[pedagogical-safety|keamanan pedagogis]] dan [[hallucination-risk|risiko halusinasi]]; untuk konteks pengadaannya, [[legal-issues-and-risks|isu dan risiko hukum]].
