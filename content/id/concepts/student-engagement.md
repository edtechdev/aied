---
title: "Keterlibatan Siswa"
created: "2026-08-13T05:32:35-04:00"
type: concept
foundations: [ai-education]
pedagogy: [motivation, self-regulated-learning, student-engagement]
technology: [generative-ai, learning-analytics]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
updated: "2026-11-04T02:04:21-05:00"
translation_of: "concepts/student-engagement"
source_updated: "2026-11-01T09:06:35-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Keterlibatan siswa** — derajat dan mutu keterlibatan aktif pembelajar dalam proses belajar, yang paling sering diuraikan menjadi dimensi perilaku, kognitif, dan [[affective-computing|afektif]]. Dalam penelitian [[ai-education]], keterlibatan siswa adalah luaran kunci (apakah alat AI membuat siswa tetap terlibat?) sekaligus mekanisme (apakah keterlibatan memediasi antara desain AI dan pembelajaran?). Secara konseptual ia berbeda dari pembelajaran itu sendiri — keterlibatan adalah partisipasi dalam belajar, bukan bukti perolehan kognitif — dan berbeda dari metrik spesifik yang dipakai untuk mengukurnya.

## Pertanyaan untuk Dipertimbangkan

- Halaman ini menegaskan bahwa keterlibatan tidak sama dengan pembelajaran — seorang siswa dapat aktif secara perilaku (mengklik, menghabiskan waktu) sementara secara kognitif dangkal. Di mana Anda pernah melihat 'keterlibatan' tinggi yang menghasilkan sedikit pembelajaran, dan bagaimana Anda menyadarinya?
- Pikirkan momen ketika Anda terlibat secara kognitif secara mendalam dalam sesuatu — benar-benar bergulat dengan sebuah gagasan. Apa yang berbeda dari momen-momen ketika Anda hanya sibuk atau terhibur, dan dapatkah alat AI menciptakan keadaan itu secara andal?
- Keterlibatan diuraikan menjadi dimensi perilaku, kognitif, dan afektif yang dapat menyimpang satu dari yang lain. Menurut Anda mengapa para peneliti bersikeras memperlakukan ketiganya secara terpisah alih-alih sebagai satu hal, dan apa yang akan Anda ukur untuk membedakannya?
- Penelitian menunjukkan keterlibatan kognitif yang mendalam dengan AI memprediksi pembelajaran, sementara keterlibatan yang dangkal memprediksi ketergantungan berlebih. Jika sebuah alat 'menarik' tetapi dangkal, siapa yang bersalah — desainnya, tugasnya, atau pembelajarnya?
- Bagaimana sebuah alat AI dapat memenuhi [[agency|otonomi]], kompetensi, dan keterhubungan (kebutuhan-kebutuhan di balik keterlibatan) tanpa fitur-fitur itu berubah menjadi hiburan dangkal yang menggeser pembelajaran yang sesungguhnya?

## Pendahuluan

Keterlibatan adalah konstruk multidimensi yang berakar pada psikologi pendidikan. **Keterlibatan perilaku** merujuk pada partisipasi, usaha, ketekunan, dan aktivitas yang sesuai tugas. **Keterlibatan kognitif** merujuk pada kedalaman pemrosesan mental — elaborasi, [[critical-thinking|analisis kritis]], [[regulation]] diri, dan investasi usaha mental. **Keterlibatan afektif** merujuk pada reaksi emosional seperti minat, kenikmatan, [[anxiety-and-stress|kecemasan]], dan identifikasi dengan belajar. Dimensi-dimensi ini dapat menyimpang: seorang siswa dapat aktif secara perilaku (mengklik, menghabiskan waktu) sementara secara kognitif dangkal (secara pasif menerima keluaran), atau tertarik secara afektif sementara teralihkan secara perilaku. Kemultidimensian inilah sebabnya keterlibatan tidak boleh disamakan dengan satu perilaku teramati mana pun.

### Bagaimana keterlibatan siswa muncul dalam penelitian

- **Keterlibatan sebagai luaran desain AI:** [[genai-motivation-engagement-2026|Penelitian motivasi GenAI]] menunjukkan bahwa keterlibatan dalam pembelajaran yang didukung [[generative-ai]] mengikuti terpenuhinya kebutuhan psikologis dasar ([[self-determination-theory|otonomi, kompetensi, keterhubungan]]) — keterlibatan adalah hasil hilir dari dukungan motivasional, bukan dari ketersediaan teknologi semata. Keterlibatan sering diukur melalui [[self-report-measures|laporan diri]] sementara keterlibatan perilaku berasal dari log interaksi, dan keduanya tidak dapat saling menggantikan.

- **Perolehan keterlibatan tanpa perolehan belajar, dalam uji kelas teracak klaster:** [[domain-specific-chatbot-stem-enthusiasm-2025|Rücker dan Becker-Genschow (2025)]] mengacak 195 kelas kelas sembilan (kelompok eksperimen 102 siswa) ke chatbot matematika khas domain atau materi diferensiasi konvensional untuk satu pelajaran tentang metode Heron dalam menaksir akar kuadrat. Minat situasional naik secara substansial pada kondisi chatbot (M = 2,63 vs 2,43, p = 0,00005, Cohen's d = 0,63) dan penerimaan pada keempat dimensi [[technology-acceptance-model|Technology Acceptance Model]] tinggi, namun perbandingan kinerja pra-pascauji tidak menemukan interaksi kelompok-kali-waktu yang signifikan (F(1194) = 2,84, p = 0,094) dan beban kognitif ekstrinsik sedikit lebih tinggi. Studi ini salah satu dari sedikit uji teracak klaster atas chatbot yang dikustomisasi dalam [[k-12|sekolah menengah]] [[math-education|matematika]], dan hasilnya yang terbelah justru intinya: minat dan [[learning-gains|capaian]] bergerak pada jadwal yang berbeda, sehingga temuan keterlibatan bukan bukti pembelajaran.

- **Mutu di atas kuantitas:** [[critical-engagement-code-completion|Keterlibatan kritis dalam pelengkapan kode AI]], [[icap-cognitive-engagement-llm-agents|analisis wacana keterlibatan kognitif]], dan [[scaffolding-critical-engagement-genai-minority-students|perancah keterlibatan kritis]] menunjukkan bahwa keterlibatan *mendalam* (kognitif) dengan AI memprediksi pembelajaran, sementara keterlibatan *dangkal* (perilaku) memprediksi [[cognitive-offloading|ketergantungan berlebih]] dan penggeseran pembelajaran yang mendominasi literatur risiko dalam basis pengetahuan ini.
- **Keterlibatan agensik dan literasi umpan balik AI berkembang bersama.** Tiga gelombang berjarak enam minggu pada 399 mahasiswa menunjukkan jalur dalam-diri ke dua arah (β = 0,222 dan β = 0,263), sehingga keterlibatan bukan hanya luaran desain tetapi juga bagian dari apa yang membangun kapasitas memakai umpan balik ([[ai-feedback-literacy-agentic-engagement-panel-2026|Xu (2026)]]).

- **Rapuh dan bergantung konteks:** [[polished-artifacts-fragile-engagement-2026|Artefak yang mengilap, keterlibatan yang rapuh]] dan [[genai-tutor-engagement-patterns|pola keterlibatan multiinstitusi]] menemukan keterlibatan bervariasi menurut tugas, konteks, dan pembelajar — alat AI yang melibatkan seorang siswa secara mendalam dapat menghasilkan perilaku dangkal yang mengejar keluaran pada siswa lain.

- **Anteseden motivasional:** [[ai-availability-student-motivation|Ketersediaan AI dan motivasi]] menunjukkan bahwa mengetahui AI tersedia dapat menurunkan nilai yang dipersepsikan dari keterlibatan yang menuntut usaha, terutama bagi pembelajar pemula — keterlibatan dibentuk oleh ekspektasi, nilai, dan kompetensi yang dipersepsikan sebesar oleh fitur alatnya. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** memperluasnya dengan penjelasan teori penetapan tujuan atas **758 [[multilingual-learning|pembelajar bahasa Inggris]] universitas** dalam pembelajaran berbantuan AI, menunjukkan bahwa **dukungan guru** secara langsung meningkatkan keterlibatan dan beroperasi melalui **tujuan pendekatan penguasaan dan pendekatan kinerja** siswa (bukan tujuan penghindaran). Keterlibatan dalam konteks AI karena itu bukan hanya luaran individual atau luaran desain — ia juga **diperancah secara sosial** oleh guru dan oleh orientasi tujuan yang didorong untuk diadopsi pembelajar.

[[scaffolding]] itu memiliki padanan institusional dengan jalur ganda. [[gai-advocacy-practice-art-education-2026|Desain dua studi Chen (2026)]] (160 mahasiswa seni dalam eksperimen skenario, 425 disurvei) menemukan bahwa ketidakkonsistenan yang dipersepsikan antara advokasi GAI sebuah universitas dan praktik pengajaran serta penilaiannya yang sebenarnya memprediksi keterlibatan proses kreatif melalui dua penilaian yang berlawanan — negatif melalui hambatan (β = −0,060, p = 0,004) dan positif melalui tantangan (β = 0,217, p < 0,001) — dengan pemikiran jalur hanya memperkuat rute positif, sehingga kondisi institusional yang sama melibatkan sebagian siswa dan melepaskan keterlibatan siswa lain.

- **Kompetensi dan emosi sebagai pendorong keterlibatan:** [[chatbot-engagement-genai-competency-emotion-2026|Zhao et al. (2026)]] memodelkan **871 mahasiswa** yang berinteraksi dengan chatbot [[llm]], menemukan bahwa **kompetensi GenAI** memprediksi keterlibatan chatbot baik secara langsung maupun tidak langsung melalui **emosi positif** (jalur afek), dan bahwa kompetensi maupun emosi positif memprediksi keterlibatan serta emosi belajar yang positif. Keterlibatan karena itu sekaligus luaran *keterampilan* dan *afektif* — pembelajar yang kurang [[teacher-ai-competency|kompetensi AI]] dan mengalami kecemasan atau frustrasi akan melepaskan diri, yang berimplikasi pada pelatihan [[ai-literacy]] sebagai intervensi keterlibatan, bukan sekadar tujuan keterampilan.

- **Keterlibatan kognitif terkait disiplin dalam percakapan siswa-AI.** [[student-ai-conversations-cognitive-engagement-2026|Chang dan Li (2026)]] menunjukkan bahwa prompt siswa ke AI menyandikan tuntutan kognitif tingkat lebih tinggi rata-rata sekitar 62%, tetapi profil keterlibatan tingkat Bloom berbeda tajam menurut disiplin ([[stem-education|STEM]] didominasi Apply 20,8%, bahasa didominasi Understand 31,7%, ilmu sosial didominasi Create 33,8%). Dengan desain dalam-diri, mereka menemukan siswa yang sama menghasilkan prompt tingkat lebih tinggi secara signifikan lebih banyak pada mata kuliah ilmu sosial daripada STEM (p < 0,001), dengan variasi tingkat mata kuliah melebihi variasi tingkat siswa — bukti bahwa keterlibatan kognitif dengan AI dibentuk oleh konteks disipliner, bukan hanya gaya individual.

- **[[ai-feedback-quality|Umpan balik AI]] menopang aktivasi perilaku.** [[gpt4-feedback-student-activation-2026|Eksperimen lab-in-the-field sepanjang semester oleh Geschwind et al. (2026)]] menemukan bahwa siswa yang menerima umpan balik GPT-4 individual atas tugas terbuka mempertahankan partisipasi tertinggi di delapan tugas mingguan (~50% pada tugas terakhir, vs ~30% untuk kelompok umpan balik dosen atau sebaya) dan menulis ~29 karakter lebih banyak per jawaban — umpan balik AI individual mengaktifkan keterlibatan pada margin ekstensif (partisipasi) sekaligus margin intensif (usaha per respons), meskipun siswa menilai [[peer-assessment|umpan balik sebaya]] sedikit lebih tinggi.

- **Memprediksi penggunaan AI akademik dari konstruk belajar.** Kerangka [[machine-learning|pembelajaran mesin]] eksploratif menganalisis data survei dari 166 mahasiswa untuk mengidentifikasi konstruk terkait belajar yang berasosiasi dengan niat menggunakan ChatGPT secara akademik, memakai analisis SHAP untuk menjaga [[explainable-ai|keterjelasan]]. Temuannya memberi tahu bagaimana keterlibatan, dukungan belajar, dan konstruk lain membentuk cara siswa memasukkan alat AI ke dalam kerja akademik.

- **Akses ke alat AI dapat *menurunkan* keterlibatan terukur, dan tingkat penyelesaian tidak akan menunjukkannya.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] mengacak akses tutor di 13 blok pada sebuah universitas publik besar di AS dan menemukan partisipasi platform yang tercatat turun 0,90 SD, tampilan halaman 0,37–0,38 SD, dan hari aktif 0,51–0,61 SD — sementara pengiriman tugas dan pengiriman tepat waktu tidak terpengaruh. Disosiasi itu adalah pelajaran pengukurannya: mata kuliah yang hanya memantau penyelesaian tugas tidak akan melihat apa pun, karena penurunannya berada pada aktivitas diskusi, kuis, dan interaksi dengan pengajar yang dicatat platform. Siswa di kelas perlakuan juga melaporkan lebih sedikit bertanya kepada pengajar tentang isi (sekitar 57% versus 44%), sehingga penurunan itu bertepatan dengan substitusi menjauh dari kontak manusia, bukan dengan pelepasan diri dari mata kuliah.

- **Latensi balasan adalah tuas keterlibatan.** Dalam 1.137 sesi tutor AI kuantitatif, balasan lebih cepat terkait dengan lebih banyak pesan siswa dan lebih banyak latihan benar (median waktu balasan 1,9 dtk sampai 31,0 dtk antarmodel; latensi lebih rendah berkorelasi dengan keterlibatan pada Spearman ρ=-0,81, p=0,0056), rantai yang oleh penulisnya dibaca sebagai penjelasan bagaimana model yang skornya biasa saja pada mutu pengajaran tetap mencapai perolehan setara manusia ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al. (2026)]]).

- **Penggunaan AI dapat berjalan bersama ketidakhadiran kelas yang lebih besar sementara kepercayaan diri tidak memprediksinya.** Survei PLS-SEM atas 291 mahasiswa Portugis menemukan penggunaan AI secara umum berasosiasi positif dengan ketidakhadiran (β = 0,148, f² = 0,029) dan dengan efikasi diri untuk belajar mandiri, namun efikasi diri itu sendiri tidak memprediksi ketidakhadiran (β = −0,068, p = 0,276) — pola "percaya diri tetapi absen" dalam makalah tersebut. Asosiasi kehadiran itu sederhana dan sekunder terhadap pengaruh sebaya (β = 0,510, f² = 0,326) dan manajemen waktu (β = −0,163), dan karena konstruk penggunaan AI bersifat unidimensi serta mencampur butir berorientasi dukungan dengan butir berorientasi substitusi, studi itu tidak dapat memisahkan penggunaan komplementer dari penggunaan substitutif atau menetapkan arah ([[confident-but-absent-ai-use-absenteeism-2026|Franco et al. (2026)]]).

### Mengukur keterlibatan: masalah pilihan metrik

Keterlibatan dioperasionalkan melalui berbagai sinyal teramati. **Metrik perilaku** mengukur apa yang *dilakukan* pembelajar (waktu pada tugas, jumlah aktivitas, frekuensi interaksi, ketekunan); **metrik kognitif** mengukur bagaimana pembelajar *berpikir* (kedalaman pemrosesan, keterlibatan kritis, analisis wacana); **metrik afektif** mengukur bagaimana pembelajar *merasa* (emosi, motivasi, minat); dan **metrik kontekstual** menangkap multitugas serta atensi. Penelitian pendidikan AI semakin banyak menggabungkan semuanya dan memperlakukan keterlibatan sebagai mekanisme mediasi antara desain alat AI dan [[learning-gains|luaran belajar]], alih-alih sebagai luaran itu sendiri.

- **Enam keluarga aplikasi AI + pengukuran multimethod:** [[ai-student-engagement-online-learning-review-2025|Tinjauan sistematis Zhou (2025)]] atas 24 studi WoS memetakan enam aplikasi AI untuk keterlibatan — [[conversational-ai|chatbot]] dalam desain mata kuliah, pengenalan emosi/wajah/suara dan pelacakan mata, ML untuk analisis data, dukungan interaksi guru–siswa, umpan balik/rekomendasi yang dipersonalisasi, serta bot berbasis AI dalam lingkungan belajar pintar. Tinjauan itu menemukan bahwa mengintegrasikan berbagai modalitas AI dan sumber data menghasilkan wawasan yang lebih akurat dan real-time tentang keterlibatan kognitif, emosional, dan perilaku daripada pendekatan satu sumber — memperkuat masalah pilihan metrik di atas.

Pilihan metrik bersifat definisional: studi yang mengukur keterlibatan sebagai *waktu pada tugas* dapat menyimpulkan alat AI meningkatkan keterlibatan ketika siswa menghabiskan lebih banyak waktu berinteraksi dengannya, sementara studi yang mengukur keterlibatan sebagai *pemrosesan kritis* dapat mencapai kesimpulan sebaliknya untuk alat yang sama. Inilah sebabnya penelitian dalam basis pengetahuan ini membedakan keterlibatan (partisipasi) dari pembelajaran (perolehan kognitif yang sebenarnya) — lihat [[genai-performance-vs-learning|kinerja vs. pembelajaran]] — dan sebabnya metrik keterlibatan harus divalidasi terhadap apa yang diklaimnya ukur.

**Laporan diri dan catatan perilaku atas penggunaan yang sama dapat menyimpang hampir sepenuhnya.** Keith, Wood dan Posey (2026) mengukur mode keterlibatan AI dua kali pada 171 siswa yang sama: sekali dengan instrumen laporan diri 29 butir, dan sekali dengan mengklasifikasikan 1.353 giliran transkrip. Tidak ada korelasi profil berpasangan yang bertahan setelah koreksi pada |r| ≥ 0,30, jarak variasi total rata-rata 0,701 dan hanya 0,002 lebih dekat daripada pemasangan ulang acak, dan komposisi perilaku menaikkan varians terjelaskan sebesar 0,166 berbanding 0,031 untuk laporan diri; hanya profil teramati yang mengikuti skor kuis, ketika giliran yang mencari penjelasan menyertai skor lebih tinggi (r = 0,33, p < 0,001) ([[eight-mode-ai-engagement-typology-2026]]). Laporan diri tentang bagaimana seorang siswa terlibat nyaris tidak membawa informasi tentang bagaimana siswa itu sebenarnya terlibat, yang menjadikan peringatan pilihan metrik di atas hasil terukur alih-alih sekadar kehati-hatian.

- **Keterlibatan sebagai sinyal rapuh yang bergantung situasi:** [[polished-artifacts-fragile-engagement-2026|Artefak yang mengilap, keterlibatan yang rapuh]] dan [[genai-tutor-engagement-patterns|pola keterlibatan multiinstitusi]] menemukan bahwa keterlibatan bervariasi menurut konteks, tugas, dan pembelajar — alat yang sama menghasilkan keterlibatan kuat bagi sebagian siswa dan perilaku dangkal yang mengejar keluaran bagi siswa lain.

- **Telemetri perilaku dari [[edtech-platform|platform]] pembelajaran:** [[engagement-forecasting-its|Peramalan usaha dan kemajuan]], [[learning-engagement-assistant-lea|Learning Engagement Assistant]], [[engagement-assessment-video|penilaian keterlibatan video]], dan [[interactive-learning-dashboards-engagement|dasbor pembelajaran]] menerjemahkan sinyal perilaku dan fisiologis (atensi, aktivitas, ketekunan) menjadi metrik keterlibatan yang dipakai untuk umpan balik adaptif dan intervensi pengajar.

- **Penginderaan fisiologis menambah satu modalitas — dan masalah baseline.** [[e3sense-multimodal-learner-engagement-sensing-2026|E3Sense]] menempatkan EEG elektroda kering, kacamata pelacak mata, dan elektroda elektrodermal dahi secara bersamaan di kepala dan memprediksi 450 penilaian keterlibatan tingkat segmen dari 30 partisipan universitas pada skala ordinal lima tingkat: AdaBoost atas representasi [[multimodal]] yang dipadukan mencapai akurasi seimbang dalam-satu-tingkat 75,0% berbanding 63,0% untuk selalu memprediksi penilaian paling umum. Sempitnya celah itu justru intinya — kredit dalam-satu-tingkat memberikan sebagian besar skornya kepada baseline tanpa sensor pada penilaian yang miring — dan menanyakan kepada pembelajar apa arti keterlibatan bagi mereka menggeser ukuran yang sama dari 64,6% ke 71,5%, bukti bahwa label [[self-report-measures|laporan diri]], bukan hanya sensornya, menentukan apa yang dapat diklaim analitik semacam itu.

- **Kendala keadilan membutuhkan subjek yang disisihkan agar bertahan.** Regulator yang menyasar gender pada estimator atensi multimodal memangkas celah MAE validasi dari 0,02 ke 0,005 tetapi menaikkan celah maupun galat kelompok terburuk pada subjek yang disisihkan, sehingga validasi tingkat-subjek yang sadar subkelompok dan diulang harus ada dalam setiap klaim penginderaan keterlibatan ([[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]]).

- **Keterlibatan sebagai sinyal pemodelan pembelajar:** [[engagement-intensity-learner-modeling|Intensitas keterlibatan sebagai sinyal pemodelan pembelajar]] memakai kekuatan keterlibatan untuk menginformasikan sistem AI adaptif, menempatkan metrik keterlibatan sebagai masukan bagi [[student-modeling]] dan [[adaptive-learning]] alih-alih semata luaran evaluasi.

### Keterlibatan vs. pembelajaran

Tema sentral dalam penelitian basis pengetahuan ini adalah bahwa keterlibatan dan pembelajaran harus dibedakan. Alat AI yang menghasilkan keterlibatan tinggi (waktu pada tugas, volume interaksi) mungkin tidak menghasilkan pembelajaran jika keterlibatan itu pasif atau menggantikan [[cognitive-offloading|kerja kognitif]] pemahaman — lihat [[genai-performance-vs-learning|kinerja vs. pembelajaran]]. Sebaliknya, perjuangan produktif dan [[desirable-difficulties|kesulitan yang diinginkan]] dapat menghasilkan pembelajaran bahkan ketika keterlibatan permukaan terasa lebih rendah. Keterlibatan karena itu paling baik diperlakukan sebagai *mekanisme* — bernilai sejauh ia mencerminkan atau memungkinkan [[cognitive-psychology|pemrosesan kognitif]] yang bermakna — alih-alih sebagai luaran terminal.

Pembedaan itu bukan soal akademis. [[pramod-agentic-ai-motivational-pathways-2026|Pramod dan Patil (2026)]] menempatkan keterlibatan di pusat model PLS-SEM mereka, di antara motivasi dan [[community-of-inquiry|kehadiran sosial]] di satu sisi dan kinerja yang *dipersepsikan* di sisi lain — koefisien terbesar dalam model mereka, dan tetap merupakan persepsi alih-alih ukuran pembelajaran.

### Pedagogi memediasi efek AI terhadap keterlibatan

Sintesis sistematis atas [[higher-ed|AI di pendidikan tinggi]] ([[long-ai-higher-ed-engagement-teaching-methods-2026|Long et al., 2026]]) menekankan bahwa **metode [[teacher-role|pengajaran]] tempat alat AI ditanamkan adalah mediator yang menentukan** apakah alat itu melibatkan siswa. Chatbot, sistem adaptif, dan analitik prediktif paling meningkatkan keterlibatan ketika diterapkan di dalam pedagogi interaktif — kelas terbalik, [[project-based-learning|pembelajaran berbasis proyek]], dan [[feedback|lingkar umpan balik]] yang diperancah — alih-alih sebagai alat berdiri sendiri. Tinjauan itu memformalkannya sebagai **model PMAISE** ([[pedagogy|Mediasi Pedagogis]] AI untuk Keterlibatan Siswa), yang memetakan keselarasan antara [[ai-technologies|teknologi]] AI, strategi pedagogis, dan dimensi afektif, perilaku, serta kognitif dari keterlibatan. Implikasinya adalah bahwa luaran keterlibatan diproduksi bersama oleh alat *dan* [[learning-design|desain pembelajaran]] di sekitarnya: AI yang sama dapat memperkuat keterlibatan dalam satu pedagogi dan menghambatnya dalam pedagogi lain.

### Kaitan dengan konsep terkait

Keterlibatan siswa terhubung ke [[motivation]] dan [[self-determination-theory]] sebagai pendorong psikologisnya, dan ke [[student-experience]] sebagai konteks yang dihayati. Pengukurannya bergantung pada [[learning-analytics]] dan [[educational-measurement]], yang menyediakan alat [[quantitative-research|kuantitatif]] untuk mengoperasionalkan dimensi-dimensi di atas. Pembedaan antara keterlibatan mendalam dan dangkal terikat langsung pada [[self-regulated-learning]] (pembelajar terarah mandiri terlibat secara strategis), [[cognitive-offloading]] dan [[cognitive-offloading|Ketergantungan Berlebih]] (ketergantungan dangkal sebagai mode kegagalan), serta [[metacognition]]. Dalam desain sistem, sinyal keterlibatan mengalir ke [[student-modeling]] dan [[adaptive-learning]], dan luaran keterlibatan muncul dalam evaluasi [[research-methods-aied]] atas intervensi pendidikan AI.

- **Karakteristik pembelajar memoderasi pelajaran dialogis TTS (2026):** Dalam pelajaran dialogis guru–siswa, siswa–siswa, dan guru–guru yang dihasilkan LLM+TTS, [[experiential-learning]] dan disposisi berpikir kritis berinteraksi secara signifikan dengan format dialog untuk motivasi berbasis ARCS, menunjukkan bahwa konten dialog yang dihasilkan AI memotivasi secara diferensial bergantung pada profil pembelajar ([[tts-dialogue-lessons-learner-characteristics-2026]]).

- **Perolehan khas dimensi di tingkat sekolah dasar (2026):** Program [[writing-education|penulisan]] L2 berbantuan GenAI selama sembilan minggu bersama 301 siswa kelas 5 dan 6 menaikkan keterlibatan perilaku dan emosional tetapi membiarkan keterlibatan kognitif dan metakognitif tak berubah, dan penulisnya menyebut berkurangnya pemantauan diri selama menulis sebagai risiko yang tetap ada ([[genai-writing-program-primary-l2-motivation-engagement|Lu et al., 2026]]). Polanya adalah contoh konkret dari pembedaan keterlibatan-versus-pembelajaran di atas: lebih banyak aktivitas dan lebih banyak kenikmatan tidak berterjemah menjadi pemrosesan yang lebih mendalam.

- **Disosiasi dapat berjalan ke arah sebaliknya (2026):** Dalam mata kuliah desain interior vokasi selama 12 minggu, studio VR imersif dengan asisten pengajar LLM tertanam menaikkan keterlibatan kognitif (d = 0,90) dan perilaku (d = 0,75) dibandingkan [[project-based-learning|pembelajaran berbasis proyek]] tradisional sementara keterlibatan afektif tidak berbeda secara signifikan (d = 0,38) — kebalikan dari kasus penulisan L2 di atas ([[ai-ive-pbl-vocational-design-creativity-2026|Jin et al., 2026]]). Perolehan kognitif dan perilaku di sini datang bersama beban kognitif yang *lebih rendah* menurut laporan, yang oleh penulisnya diatribusikan pada asisten yang menyerap usaha pencarian dan integrasi lintas disiplin. Dibaca terhadap kasus penulisan, kedua studi itu menunjukkan bahwa dimensi keterlibatan mana yang digerakkan oleh intervensi berbantuan AI adalah properti desainnya — [[collaborative-learning|kolaborasi]] imersif yang padat wacana versus dukungan penulisan soliter — alih-alih properti bantuan AI secara umum, dan bahwa keunggulan afektif tidak dapat diasumsikan dari kesetiaan tinggi atau umpan balik yang cerdas.


- **Literasi AI bekerja pada keterlibatan melalui sumber daya psikologis (2026):** Studi mediasi termoderasi atas 1.198 mahasiswa di Zhengzhou, Tiongkok ([[ai-literacy-learning-engagement-psych-capital-2026|Wang, 2026]]) memodelkan keterlibatan sebagai luaran [[ai-literacy]] alih-alih produk samping penggunaan alat. Literasi AI memprediksi keterlibatan belajar secara langsung dan juga tidak langsung dengan membangun modal psikologis, dengan rute tidak langsung membawa sekitar separuh dari efek total — mediasi parsial, sehingga kompetensi teknologis berubah menjadi keterlibatan hanya sebagian melalui sumber daya psikologis yang dihasilkannya. Komitmen profesional, variabel berbasis identitas, memoderasi kaitan modal-psikologis-ke-keterlibatan tanpa efek langsungnya sendiri, dan penerjemahan modal psikologis menjadi keterlibatan jauh lebih kuat bagi siswa yang memandang dirinya menuju profesi tersebut. Polanya adalah contoh paling jelas yang tersedia atas poin di atas bahwa karakteristik pembelajar mengondisikan bagaimana AI memengaruhi keterlibatan.

- **Latihan AI prakelas dapat menaikkan partisipasi langsung (2026):** Eksperimen lapangan terdaftar lebih dulu bersama 759 mahasiswa MBA menemukan bahwa persiapan dengan mitra diskusi AI berbasis suara menaikkan kontribusi sukarela sekitar 31% pada sesi-sesi berikutnya, tetapi hanya setelah penggunaan kedua; penggunaan pertama mendahului partisipasi yang lebih rendah ([[assigned-ai-preclass-student-engagement-2026|Wang et al., 2026]]).


- **Pelepasan diri sebagai gerakan tingkat giliran, bukan keadaan stabil:** [[rho-disengaged-conversational-behaviors-2026|Rho et al. (2026)]] mengodekan 5.522 ujaran siswa kepada agen ajar AI di Math Nation ke dalam enam kategori pelepasan diri percakapan (False Answering, Mocking, Ghosting, Mirroring, Withholding, Random/Noisy) dan menemukan tingkat keterlibatan mendominasi pada 75,7% ujaran. Asosiasi berbasis prevalensi antara False Answering dan Mocking dengan skor pascauji tidak bertahan pada pemeriksaan sensitivitas yang dianotasi manusia. Analisis sekuensial adalah hasil yang relevan bagi keterlibatan: klaster berkinerja tertinggi menggabungkan pelepasan diri moderat dengan transisi pemulihan-ke-keterlibatan yang kuat (Withholding → Engagement p = 0,83), sementara klaster terendah menunjukkan swa-lingkar yang persisten tanpa pemulihan (Engagement self-loop p = 0,96). Withholding adalah satu-satunya jenis pelepasan diri yang cenderung bertahan alih-alih terselesaikan — persistensi versus perbaikan, bukan kehadiran versus ketiadaan, adalah pembedaan yang memisahkan lintasan keterlibatan.

## Miskonsepsi umum

**"Jika keterlibatan naik, pembelajaran naik."** Ini adalah inferensi paling mahal dalam literatur keterlibatan-AI, dan basis pengetahuan ini memuat contoh penyangkal yang bersih. [[domain-specific-chatbot-stem-enthusiasm-2025|Rücker dan Becker-Genschow (2025)]] mengacak 195 kelas kelas sembilan ke chatbot matematika khas domain atau materi diferensiasi konvensional untuk satu pelajaran tentang metode Heron. Minat situasional naik secara substansial pada kondisi chatbot (M = 2,63 vs 2,43, p = 0,00005, Cohen's d = 0,63) dan penerimaan tinggi pada keempat dimensi [[technology-acceptance-model|Technology Acceptance Model]] — namun perbandingan kinerja pra-pascauji tidak menemukan **interaksi kelompok-kali-waktu yang signifikan** (F(1194) = 2,84, p = 0,094), dan beban kognitif ekstrinsik sedikit lebih tinggi. Minat dan capaian bergerak pada jadwal yang berbeda. Temuan keterlibatan bukan bukti [[learning-gains|pembelajaran]].

**"Keterlibatan itu satu hal, dan waktu pada tugas mengukurnya."** Konstruknya multidimensi dan dimensi-dimensinya menyimpang secara bawaan: seorang siswa dapat aktif secara perilaku — mengklik, mengakumulasi waktu — sementara secara kognitif dangkal, menerima keluaran secara pasif. Ukuran [[self-report-measures|laporan diri]] dan log interaksi atas konstruk ini tidak dapat saling menggantikan, itulah sebabnya klaim tentang "keterlibatan" tidak dapat ditafsirkan sampai dimensi dan instrumennya disebutkan.

**"Aktivitas perilaku yang lebih banyak berarti keterlibatan yang lebih mendalam."** Sering kali sebaliknya. Keterlibatan kognitif yang mendalam dengan AI memprediksi pembelajaran, sementara keterlibatan perilaku yang dangkal memprediksi [[cognitive-offloading|ketergantungan berlebih]] dan penggeseran pembelajaran yang mendominasi literatur risiko; [[polished-artifacts-fragile-engagement-2026|artefak yang mengilap]] adalah kasus kanonisnya, ketika keluaran yang bersih menandakan aktivitas sementara pemikirannya tidak terjadi. Log interaksi yang sibuk tetap kompatibel dengan pelepasan diri.

**"AI membuat pembelajaran lebih menarik secara bawaan."** [[ai-availability-student-motivation|Ketersediaan AI dan motivasi]] menunjukkan bahwa sekadar mengetahui AI tersedia dapat menurunkan nilai yang dipersepsikan dari keterlibatan yang menuntut usaha, terutama bagi pembelajar pemula. Keterlibatan dibentuk oleh ekspektasi, nilai, dan kompetensi yang dipersepsikan sebesar oleh fitur alatnya, dan ia bervariasi menurut tugas, konteks, dan pembelajar — keterlibatan mendalam seseorang adalah pengejaran keluaran bagi orang lain.

## Implikasi bagi praktik

**Bagi pengajar**

- Pilih ukuran luaran Anda sebelum intervensinya. Jika tujuannya pembelajaran yang bertahan, ukurlah kinerja tanpa bantuan; survei minat dan kepuasan tidak akan memberi tahu apakah alat itu berhasil.
- Perlakukan kenaikan kenikmatan dengan kecurigaan ketika beban kognitif juga naik. Dalam contoh teracak klaster, minat yang lebih tinggi datang bersama beban ekstrinsik yang sedikit lebih tinggi dan tanpa efek capaian — menyenangkan tetapi tidak jelas produktif.
- Bedakan siswa yang sedang bekerja dari siswa yang menonton artefak mengilap muncul. Mintalah penalarannya, bukan keluarannya.

**Bagi pengembang**

- Instrumentasikan dimensi yang Anda klaim. Mengirim metrik waktu-pada-tugas atau klik lalu menyebutnya keterlibatan mencampuradukkan aktivitas perilaku dengan investasi kognitif, persis kesalahan yang diperingatkan bukti.
- Jangan mengharapkan transfer antartipe keterlibatan. Menaikkan minat situasional tidak berarti menaikkan keterlibatan kognitif, sehingga mengoptimalkan minat saja dapat menaikkan penggunaan sementara pembelajaran tetap datar.
- Waspadai devaluasi usaha khususnya pada pemula, karena ketersediaan semata dapat menurunkan nilai usaha yang dipersepsikan.

**Bagi peneliti**

- Laporkan dimensi dan instrumennya, dan hindari kata benda telanjang. Mengingat laporan diri dan log menyimpang, "keterlibatan meningkat" membutuhkan operasionalisasinya dalam kalimat yang sama.
- Hindari menyimpulkan capaian dari afek. Hasil terbelah dari uji teracak klaster adalah model untuk melaporkan keduanya, termasuk hasil nol.

## Konsep terkait
- [[learners]] — Pembelajar: payung bagi konsep-konsep sisi pembelajar
- [[pedagogical-partnerships]] — Kemitraan Pedagogis
- [[community-of-inquiry]] — Community of Inquiry (keterlibatan agensik sebagai dimensi CoI)
- [[eportfolio]]
- [[online-teaching-and-learning]] — Pengajaran dan Pembelajaran Daring
- [[motivation]]
- [[self-determination-theory]]
- [[student-experience]]
- [[learning-analytics]]
- [[educational-measurement]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[student-modeling]]
- [[adaptive-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[framing-ai-use-for-students]]
- [[stakeholders]] — Payung: orang dan audiens dalam pendidikan AI (pembelajar, guru, perancang, administrator, pembuat kebijakan)
- [[self-report-measures]]
- [[productive-failure]]

## Artikel terkait
- [[ai-feedback-literacy-agentic-engagement-panel-2026]] — Literasi umpan balik AI dan keterlibatan agensik: panel intersep-acak tiga gelombang (Xu 2026)

- [[rho-disengaged-conversational-behaviors-2026]] — Perilaku percakapan yang melepaskan diri dan pembelajaran dalam dialog siswa-AI (Rho et al. 2026)

- [[assigned-ai-preclass-student-engagement-2026]] — Latihan prakelas berbasis suara AI menaikkan kontribusi sukarela di kelas ~31%, tetapi hanya setelah penggunaan kedua (Wang et al. 2026)
- [[confident-but-absent-ai-use-absenteeism-2026]] — Penggunaan AI terkait dengan ketidakhadiran kelas yang lebih besar sementara efikasi diri tidak memprediksinya, dengan pengaruh sebaya sebagai korelat dominan (Franco et al. 2026)
- [[gai-advocacy-practice-art-education-2026]] — Ketika universitas mengadvokasi GAI tetapi praktiknya tertinggal: penilaian siswa dan keterlibatan proses kreatif dalam pendidikan seni

- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG terbatas di kepala, pelacakan mata, dan EDA memprediksi penilaian keterlibatan lima tingkat, sementara definisi pembelajar sendiri menggeser pemetaannya (Anupkrishnan et al. 2026)
- [[student-attention-estimation-fairness-2026]] — Pemodelan Transformer Multimodal yang Sadar Keadilan untuk Estimasi Atensi Siswa secara Real-Time
- [[ai-student-engagement-online-learning-review-2025]]
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI di pendidikan tinggi: tinjauan sistematis keterlibatan + peran mediasi metode pengajaran
- [[genai-motivation-engagement-2026]] — Dampak AI Generatif terhadap Motivasi dan Keterlibatan Siswa
- [[critical-engagement-code-completion]] — To Tab or Not to Tab: Mengukur Keterlibatan Kritis dalam Pelengkapan Kode AI
- [[icap-cognitive-engagement-llm-agents]] — Mengukur Keterlibatan Kognitif dalam Wacana Kolaboratif
- [[genai-tutor-engagement-patterns]] — Tidak Semua Siswa Terlibat Sama: Pola Multiinstitusi
- [[polished-artifacts-fragile-engagement-2026]] — Artefak Mengilap, Keterlibatan Rapuh
- [[ai-availability-student-motivation]] — "Mengapa Harus Berusaha Sebegitu?" : Bagaimana Ketersediaan AI Membentuk Motivasi
- [[genai-performance-vs-learning]] — Membedakan Perolehan Kinerja dari Pembelajaran
- [[scaffolding-critical-engagement-genai-minority-students]] — Memperancah Keterlibatan Kritis dengan GenAI
- [[engagement-intensity-learner-modeling]] — Intensitas Keterlibatan sebagai Sinyal Pemodelan Pembelajar
- [[learning-engagement-assistant-lea]] — Learning Engagement Assistant
- [[engagement-assessment-video]] — Penilaian Keterlibatan dalam Pembelajaran Video
- [[engagement-forecasting-its]] — Dari Heuristik ke Analitik: Meramalkan Usaha dan Kemajuan
- [[interactive-learning-dashboards-engagement]] — Dasbor Pembelajaran Interaktif dan Keterlibatan
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Interaksi karakteristik pembelajar × format dialog TTS
- [[wang-goal-setting-ai-engagement-2026]] — Teori penetapan tujuan: dukungan guru, tujuan capaian, dan keterlibatan dalam pembelajaran bahasa Inggris berbantuan AI (758 siswa Tiongkok)
- [[chatbot-engagement-genai-competency-emotion-2026]] — Kompetensi dan emosi GenAI sebagai pendorong keterlibatan chatbot (Zhao et al. 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Keterlibatan kognitif tingkat Bloom terkait disiplin dalam percakapan siswa-AI (Chang & Li 2026)
- [[gpt4-feedback-student-activation-2026]]
- [[genai-writing-program-primary-l2-motivation-engagement]] — Perolehan keterlibatan khas dimensi di tingkat sekolah dasar (Lu et al. 2026)
- [[ai-ive-pbl-vocational-design-creativity-2026]] — Keterlibatan kognitif dan perilaku naik, keterlibatan afektif datar, dalam studio PBL VR imersif (Jin et al. 2026)
- [[domain-specific-chatbot-stem-enthusiasm-2025]] — Uji teracak klaster matematika sekolah menengah: minat situasional naik bersama chatbot yang dikustomisasi sementara kinerja uji tidak (Rücker & Becker-Genschow 2025)
- [[ai-literacy-learning-engagement-psych-capital-2026]] — Literasi AI menggerakkan keterlibatan secara langsung dan melalui modal psikologis, diperkuat komitmen profesional (Wang 2026)
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutor AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Akses ke tutor AI menurunkan partisipasi platform tercatat 0,90 SD sementara pengiriman tugas tetap stabil (Liu et al. 2026)
- [[eight-mode-ai-engagement-typology-2026]] — Profil keterlibatan AI yang dilaporkan sendiri dan yang teramati gagal bersesuaian, dan hanya perilaku yang mengikuti skor kuis (Keith, Wood & Posey 2026)
