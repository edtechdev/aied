---
title: "Penilaian Lisan"
created: "2026-09-23T08:35:38-04:00"
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale]
type: concept
connected_resources: [code-viva]
foundations: [academic-integrity, critical-thinking]
pedagogy: [scaffolding, metacognition]
technology: [generative-ai, llm, speech-and-voice-technologies]
assessment: [assessment, assessment-validity, authentic-assessment, automated-assessment, ai-detection]
ethics: [trust]
audience: [instructors, administrators]
level: [higher ed]
confidence: medium
updated: "2026-11-08T13:51:25-05:00"
translation_of: "concepts/oral-assessment"
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

> **Penilaian lisan** — penilaian di mana pembelajar harus menjelaskan, mempertahankan, atau menunjukkan pemahaman secara lisan, langsung maupun direkam: viva voce, ujian lisan, sidang lisan, wawancara tinjauan kode, konsultasi klinis. Karena pertukarannya berlangsung secara waktu nyata dan pertanyaannya tidak perlu diketahui sebelumnya, format ini menolak penggantian teks yang dihasilkan untuk pemahaman dengan cara yang tidak dapat dilakukan oleh [[authentic-assessment|tugas autentik]] yang dikerjakan di rumah. Format ini juga membawa masalah validitas yang khas: penilaian lisan mengukur kelancaran dan kepercayaan diri bersama pengetahuan, sehingga apa yang disertifikasinya sangat bergantung pada bagaimana penilaian itu dirancang, siapa yang bertanya, dan bagaimana tuturan pembelajar diperlakukan sebagai bukti.

## Pertanyaan yang Perlu Dipertimbangkan

- Penilaian lisan dipromosikan di era AI karena mesin tidak dapat duduk di ruangan dan menjawab untuk Anda. Namun korpus yang mengargumentasikan hal ini tidak memuat [[rct|uji acak]] atas penilaian lisan dibandingkan penilaian tertulis. Apa yang perlu Anda lihat sebelum menganggap argumen itu tuntas?
- Kumpulan karya yang sama melaporkan dua mekanisme berbeda untuk berkurangnya [[anxiety-and-stress|kecemasan]]: menghilangkan pengamatan langsung [[teacher-role|guru]], dan menjadi terbiasa dengan format melalui latihan. Keduanya menyiratkan desain yang berbeda. Mana yang cocok untuk konteks Anda, dan mana yang akan Anda percayai untuk digeneralisasi?
- Penilaian yang hanya berdasarkan tuturan dapat menyalahartikan kelancaran verbal sebagai pemahaman konseptual. Jika pembelajar memberi gestur dengan benar tetapi mengucapkan kata yang salah, atau mengucapkan kata yang benar tanpa memahaminya, apa tepatnya yang diukur oleh penilaian Anda?
- Setiap desain lisan dalam korpus ini menabrak dinding yang sama: waktu staf dan ruang. Jika kendalanya adalah dua puluh delapan jam kontak per semester untuk lima belas siswa, apakah jawaban yang jujur adalah jumlah tugas yang dipertahankan lebih sedikit, tim pengajar yang lebih besar, atau format yang berbeda?

## Pendahuluan

Penilaian lisan adalah salah satu format penilaian tertua dan, selama sebagian besar abad terakhir, salah satu yang paling tidak populer: sulit diskalakan, sulit distandardisasi, sulit dipertahankan dalam proses banding. [[generative-ai|AI generatif]] telah membalik nasibnya. Ketika penyerahan tertulis dapat dihasilkan sesuai permintaan oleh sebuah model, nilai penilaian dari artefak itu runtuh, dan perhatian berpindah ke penilaian atas orangnya. Pembelajar yang harus menjawab pertanyaan yang tidak dikenal dengan lantang, secara waktu nyata, setidaknya terbukti hadir dan berpikir.

Pembalikan itu kini terlihat di seluruh korpus penelitian, tetapi tidak merata. Sebagian karya memperlakukan ujian lisan sebagai jawaban kebijakan atas [[academic-integrity|integritas akademik]], sebagian merancang sistem otomatis untuk menyampaikan atau menilai kinerja lisan dalam skala besar, dan sebagian lagi menanyakan apa yang dapat dan tidak dapat ditunjukkan oleh tuturan itu sendiri tentang pemahaman. Halaman-halaman yang tertaut di bawah ini berbeda pendapat tentang seberapa banyak yang sebenarnya dibuktikan penilaian lisan. Dibaca bersama, semuanya mendukung klaim yang lebih sempit dan lebih dapat dipertahankan daripada klaim yang biasanya diajukan untuknya.

## Apa yang dapat disertifikasi oleh kinerja langsung

[[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] menyajikan bentuk terkuat dari argumen itu. Dengan bersandar pada literatur tentang [[authentic-assessment|penilaian autentik]], dasar argumen makalah itu untuk ujian lisan bertumpu pada interaktivitasnya: pertanyaan dapat ditahan sampai saat ujian, pertanyaan pemeriksaan lanjutan dapat diimprovisasi, dan pembelajar tidak dapat melatih respons atas pertanyaan yang belum pernah mereka lihat. Format ini juga menghalangi hafalan mentah, karena ingatan diperiksa melalui penjelasan alih-alih reproduksi. Makalah itu adalah tinjauan dan tulisan posisi di *Educational Researcher*, bukan studi empiris, dan berakhir dengan tiga belas rekomendasi implementasi bernomor alih-alih bukti hasil yang membaik.

Versi jujur dari klaim integritas itu lebih sempit daripada yang sering dinyatakan. Penilaian lisan membuat penggantian lebih sulit disembunyikan; korpusnya tidak menunjukkan bahwa penilaian itu mengurangi penggunaan AI. Dalam [[code-review-genai-cs1|studi tinjauan kode lisan CS1]], wawancara lima belas menit setiap minggu membawa tujuh puluh persen dari nilai setiap tugas, dan rasio karakter hasil tempel terhadap total tetap naik dari 61.0 persen menjadi 68.1 persen (p < 0.0001) selama tiga semester, sementara skor ujian bergerak sebesar dua persen yang tidak signifikan secara statistik. Sembilan puluh persen siswa menyatakan tinjauan itu memotivasi mereka untuk lebih memahami kode mereka dan enam puluh lima persen menyatakan tinjauan itu membantu menghindari ketergantungan berlebih pada AI, tetapi perilaku yang terukur tidak mengikutinya. Penilaian lisan mengubah apa yang bisa disembunyikan, bukan apa yang dilakukan siswa.

## Ruang desain yang sebenarnya dicakup korpus

Format-format dalam korpus mencakup rentang otomasi dan sinkronisitas yang luas, dan masing-masing memecahkan bagian masalah yang berbeda.

**Langsung, manusia, sinkron.** Viva voce yang diteliti oleh [[aivaluate-anxiety-assessment-2026|sebuah studi viva voce atas tiga puluh lima siswa prauniversitas]] adalah garis dasarnya: guru yang sama, pertanyaan yang sama, satu penyampaian tatap muka dan satu dimediasi sistem AI. Viva doktoral muncul dalam [[pgr-students-genai-uses-qualitative-2026|studi kualitatif atas lima belas peneliti pascasarjana]], tempat para partisipan berargumen agar bobot penilaian digeser ke arahnya dengan penalaran bahwa disertasi lebih mudah dipalsukan dan bahwa viva harus diberikan secara langsung. Para penulis hanya menerima sebagian penalaran itu, karena viva tidak secara inheren merupakan bukti terhadap bantuan AI.

**Direkam dan asinkron.** [[asynchronous-oral-assessment-2026|Penilaian lisan asinkron]] menggantikan ruang dengan respons kamera web yang dibatasi waktu dan tidak dapat direvisi, sekitar tiga puluh detik persiapan dan dua sampai tiga menit tuturan. Dalam uji coba yang dilaporkan, skornya melebihi skor tes pilihan ganda tatap muka: median tengah semester 92.5 berbanding 70 (p < .001) dan median akhir 94.2 berbanding 86.4 (p = .002), dengan korelasi lintas format yang hanya moderat. Para penulis secara eksplisit mengaitkan perbedaannya dengan format alih-alih dengan pembelajaran, dan desain itu membawa 7.5 persen dari nilai kursus.

**Penyampaian dan penilaian otomatis.** [[ai-supported-oral-assessment-tvet-2026|Sistem berbasis suara yang diuji dalam kelas otomotif dan teknik kejuruan]] menilai tiga puluh tiga pembelajar, dua puluh satu di antaranya setuju bahwa tugas suara langsung terasa realistis dan tidak ada yang tidak setuju bahwa berbicara secara waktu nyata lebih cocok untuk tugas itu daripada [[eportfolio|portofolio]] tertulis. Jumlah kata untuk pertanyaan yang identik bervariasi lima hingga delapan kali lipat antar pembelajar, kelancaran tidak memberikan keunggulan akurasi pada item tertutup, dan nilai agen pendahuluan cocok dengan nilai tutor manusia pada sembilan puluh lima persen uji coba hortikultura dan peternakan susu yang berdekatan. [[socratic-tests-conversational-assessment|Tes Sokratik percakapan]] mengambil jalur desain yang berlawanan, menargetkan pertanyaan konseptual; buktinya adalah survei lapor diri atas sembilan puluh delapan siswa, di mana 80.6 persen setuju bahwa AI memberikan perancah secara efektif dan lima puluh dua persen melaporkan stres yang lebih rendah daripada ujian tradisional. Kedua makalah mengukur penerimaan, bukan pembelajaran.

**Bukti lisan sebagai pertahanan, bukan ujian.** [[tool-invariant-framework-agentic-ai|Kerangka penilaian invarian-alat]] memasangkan kuis di kelas tanpa AI dengan pertahanan lisan sepuluh menit atas karya berbantuan AI yang komentarnya dihapus, dinilai berdasarkan pemahaman kode, pemahaman metode, terminologi, interpretasi, dan verifikasi, dengan verifikasi wajib lulus terlepas dari totalnya. Desainnya diargumentasikan, bukan divalidasi; aritmetika makalah itu sendiri untuk lima belas siswa adalah dua setengah jam kontak per tugas dan sekitar dua puluh delapan jam kontak per semester melintasi sebelas tugas yang dipertahankan.

Format interaksi menentukan apa yang dapat disertifikasi oleh tugas berbicara yang dimediasi AI. Tugas dialog Tes Bahasa Inggris Duolingo, 713 di antaranya dalam uji coba, menuntut pemilihan jawaban alih-alih tuturan reaktif, yang menurut para peninjau membuat tuntutan kognitif tugas tidak selaras dengan konstruk yang diklaim diukur oleh tes tersebut ([[ai-second-language-listening-speaking-assessment-2025|Goh & Aryadoust (2025)]]).

## Kecemasan, bias, dan siapa yang dirugikan oleh format

Penilaian lisan diargumentasikan atas dasar inklusi, karena jawaban lisan lebih sulit dibeli daripada jawaban tertulis, dan ditentang atas dasar yang sama. [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton]] mengatalogkan tantangannya secara langsung: beban penjadwalan, kecemasan, dan bias menurut gender, etnisitas, bahasa, dan kecepatan menjawab, ditambah efek penilaian non-anonim. Sebaliknya, bukti yang dikutip makalah itu menunjukkan penilaian lisan dapat sama inklusifnya dengan ujian tertulis, termasuk bagi siswa dengan disleksia, dan bahwa ketidakbiasaan, bukan format itu sendiri, yang menggerakkan sebagian besar kecemasan yang dilaporkan; siswa dalam satu studi yang dikutip lebih sedikit cemas pada ujian lisan mereka yang lebih akhir.

Ketika kecemasan benar-benar turun, alasannya penting. Dalam viva yang dimediasi AI, [[self-report-measures|ketenangan yang dilaporkan sendiri]] secara signifikan lebih tinggi daripada versi tatap muka (rata-rata 6.50 berbanding 5.86, t(34) = −1.97, p = .028), dan [[usability-research|kegunaannya]] dinilai baik dinilai baik. Tetapi kondisi tatap muka memperoleh skor yang secara signifikan lebih tinggi dalam membantu siswa memahami karya mereka sendiri (p = .004). Menghilangkan pengamatan langsung guru membuat siswa lebih tenang dan, menurut laporan mereka sendiri, kurang memberi pencerahan bagi diri mereka.

Apa yang dianggap sebagai bukti lisan juga lebih sempit daripada tampaknya. [[multimodal-embodied-cognition-oral-explanations-2026|Sebuah studi tentang bukti terwujud dalam penjelasan lisan]] berargumen bahwa menilai tuturan saja menyalahartikan kelancaran verbal sebagai pengetahuan konseptual dan merugikan pembelajar dengan kesulitan terkait bahasa, karena gestur membawa pemahaman yang hilang dari transkrip. Demonstrasinya kecil: dua mahasiswa teknik yang menjelaskan konsep statistik, dengan gestur berkepastian tinggi mengelompok pada gagasan tertentu, bentuk persegi dan kotak pada sekitar lima puluh empat hingga enam puluh satu persen, dan koordinasi gestur–tuturan yang lebih ketat menyertai penjelasan yang lebih koheren.

## Penilaian, validitas, dan masalah skala

Tiga temuan menentang pembacaan skor lisan sebagai [[learning-gains|perolehan belajar]]. [[asynchronous-oral-assessment-2026|Studi format asinkron]] menyangkal adanya perolehan belajar bagi keunggulan skornya sendiri, dan melaporkan kesepakatan penilaian ulang instruktur-versus-model sebesar ICC 0.73 pada tengah semester dan 0.60 pada akhir, yang membatasi seberapa jauh penilaian mesin dapat dipercaya. Dalam [[ai-standardized-patient-scaffolding-medical-2026|sebuah RCT dengan seratus mahasiswa kedokteran tahun ketiga]] yang membandingkan sistem pasien simulasi dengan materi kasus pengungkapan progresif, kinerja ujian akhir naik (71.8 berbanding 55.6 persen, Hedges' g = −0.81). Peringkat komunikasi OSCE juga naik (3.53 berbanding 2.64 pada skala lima poin), sementara akurasi diagnostik biner secara statistik identik (84 berbanding 86 persen, P = 1.000). Pembacaan yang hanya berbasis akurasi akan menyebut intervensi itu nol; pembacaan yang hanya berbasis komunikasi akan menyebutnya transformatif.

Kendala pengikatnya adalah kepegawaian dan perangkat keras, bukan [[pedagogy|pedagogi]], dan korpusnya, dan korpusnya luar biasa terbuka tentang aritmetikanya: dua puluh delapan jam kontak per semester untuk lima belas siswa, sebelas asisten pengajar untuk kelas berisi lebih dari seratus orang dalam desain CS1, dan satu laptop yang melayani dua belas pembelajar serentak dalam penerapan kejuruan luring. Tidak ada uji acak atas penilaian lisan dibandingkan penilaian tertulis di mana pun dalam kumpulan karya ini, dan setiap studi yang mengukur perbedaannya adalah desain satu institusi tanpa kelompok kontrol. Penilaian lisan didukung dengan baik sebagai respons terhadap penggantian berbantuan AI, dan didukung secara tipis sebagai perbaikan pembelajaran.

Tidak ada format yang memegang posisi tetap dalam pertukaran ini: keteramatan penilaian lisan adalah pilihan desain, dan biaya kelayakannya adalah sesuatu yang didistribusikan oleh program alih-alih diterima — kelayakan adalah prioritas pendidikan, bukan kendala yang menggerus praktik baik ([[assessment-feedback-trilemma-model-2026|Pedlow dkk. (2026)]]).

Dasar integritas penilaian lisan juga terbatas waktu: [[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin dkk. (2026)]] berargumen bahwa kacamata AI dan penyumbat telinga dapat menyampaikan prompt waktu nyata secara tersembunyi di dalam viva langsung, karena AI yang dapat dikenakan tidak menghasilkan pergeseran pandangan mata atau sinyal yang dapat dideteksi, sehingga penilaian lisan interaktif tidak lagi kebal.


- **Batas atas skala adalah kendala desain.** Dalam lokakarya dengan 73 pendidik [[cs-education|komputasi]], penilaian lisan dan interaktif dilaporkan sebagai bukti terkuat yang tersedia tentang pemahaman individual dan remedi yang paling sulit diskalakan. Mitigasi yang dijelaskan para partisipan adalah distribusi dan pengambilan sampel: kumpulan asisten pengajar bersama, [[peer-assessment|penilaian sejawat]] dengan bobot di bawah [[summative-assessment|ujian akhir]],, dan memanggil sebagian siswa secara bergilir ([[computing-assessment-genai-workshop-report-2026|Akbar dkk., 2026]]).

## Miskonsepsi Umum

- **"Penilaian lisan tidak dapat diskalakan."** Dalam [[code-review-genai-cs1|studi tinjauan kode lisan CS1]], **wawancara lima belas menit setiap minggu membawa tujuh puluh persen dari nilai setiap tugas**, dan rasio karakter hasil tempel terhadap total tetap informatif. Biayanya nyata dan desainnya dapat diimplementasikan pada skala kursus.
- **"Ujian lisan lebih lunak daripada ujian tertulis."** Dalam uji coba yang dilaporkan, skornya **melebihi skor tes pilihan ganda tatap muka: median tengah semester 92.5 berbanding 70 (p < .001) dan median akhir 94.2 berbanding 86.4 (p = .002)**. Penilaian lisan bukan pilihan yang lunak.
- **"Pertemuan simulasi setara dengan kasus pengungkapan progresif."** Dalam [[ai-standardized-patient-scaffolding-medical-2026|sebuah RCT dengan seratus mahasiswa kedokteran tahun ketiga]] sistem pasien simulasi dibandingkan **dengan materi kasus pengungkapan progresif** — uji kesetaraan secara langsung, bukan asumsi tentangnya.

## Konsep terkait

- [[pedagogical-patterns]] — Urutan verifikasi lisan dan viva, serta apa yang ditunjukkan dan tidak ditunjukkannya
- [[assessment]] — bidang yang lebih luas tempat format ini berada
- [[authentic-assessment]] — tradisi desain yang membangun dasar integritas
- [[assessment-validity]] — apa yang dapat dan tidak dapat diklaim untuk diukur oleh suatu format
- [[academic-integrity]] — tekanan yang mengembalikan penilaian lisan ke panggung
- [[automated-assessment]] — penyampaian dan penilaian kinerja lisan oleh mesin
- [[ai-detection]] — respons alternatifnya, dan mengapa ia lebih lemah
- [[speech-and-voice-technologies]] — pipa tuturan tempat sistem lisan berjalan
- [[multimodal]] — gestur dan tuturan sebagai bukti gabungan
- [[anxiety-and-stress]] — biaya afektif dari kinerja langsung
- [[feedback]] — apa yang dikatakan viva kepada pembelajar tentang pemahamannya sendiri
- [[higher-ed]] — latar tempat hampir semua bukti ini berasal

## Artikel terkait

- [[ai-second-language-listening-speaking-assessment-2025]] — Tugas dialog AI tanpa percabangan membuat tuntutan tugas tidak selaras dengan konstruk berbicara
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — Viva langsung tidak lagi kebal: kacamata AI dan penyumbat telinga menyampaikan prompt waktu nyata secara tersembunyi (Corbin, Sharpe & Dawson 2026)

- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Meninjau ulang penggunaan ujian dan penilaian lisan (Fenton 2025)
- [[asynchronous-oral-assessment-2026]] — Penilaian lisan asinkron: integritas, keterlibatan, dan komunikasi profesional
- [[ai-supported-oral-assessment-tvet-2026]] — Merancang penilaian lisan berbantuan AI dalam pendidikan kejuruan
- [[aivaluate-anxiety-assessment-2026]] — Kecemasan dan pengalaman dalam penilaian berbasis kinerja yang dimediasi AI
- [[code-review-genai-cs1]] — Wawancara tinjauan kode lisan dalam kursus pemrograman pengantar
- [[multimodal-embodied-cognition-oral-explanations-2026]] — Gestur sebagai bukti dalam menilai penjelasan lisan
- [[socratic-tests-conversational-assessment]] — Pengujian percakapan otomatis sebagai penilaian lisan
- [[tool-invariant-framework-agentic-ai]] — Pertahanan lisan atas karya berbantuan AI
- [[ai-standardized-patient-scaffolding-medical-2026]] — Wawancara klinis lisan di bawah sistem pasien simulasi
- [[pgr-students-genai-uses-qualitative-2026]] — Viva doktoral di bawah AI generatif
- [[computing-assessment-genai-workshop-report-2026]] — AI Bisa Mengerjakan PR Anda. Lalu Apa? Laporan dari lokakarya daring tentang penilaian komputasi di era AI generatif
- [[assessment-feedback-trilemma-model-2026]] — Menyangkal adanya posisi tetap bagi format apa pun dan membingkai ulang kelayakan sebagai prioritas pendidikan
