---
title: "Bias Otomasi"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [cognitive-offloading, human-ai-collaboration, ai-literacy]
pedagogy: [metacognition]
ethics: [trust-calibration, automation-bias]
audience: [instructors, learners, administrators, software developers]
confidence: high
connected_faqs: [reducing-over-reliance, verify-ai-output]
translation_of: "concepts/automation-bias"
source_updated: "2026-11-04T18:49:36-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis:** Bias otomasi adalah mode kegagalan manusia yang membuat keputusan berbantuan AI menjadi salah bahkan ketika sistemnya benar. Orang menerima rekomendasi otomatis yang akan mereka pertanyakan seandainya mereka sendiri mencapai kesimpulan yang sama, lalu berhenti mencari bukti yang seharusnya membantahnya. Dalam pendidikan, penilaian yang menentukan sudah diotomasi di beberapa titik — skor, penanda kesiapan, putusan pengawasan, label data acuan, petunjuk — sehingga bias itu melekat pada siapa pun yang menyetujui keluaran tersebut. Korpus memperlakukannya bukan sebagai sifat kepribadian melainkan sebagai properti sebuah alur kerja: ia muncul ketika verifikasi bersifat opsional, ketika keluarannya lancar, dan ketika pemeriksa menanggung biaya karena meragukan.

## Pertanyaan yang Perlu Dipertimbangkan

- Ketika seorang guru membatalkan keputusan algoritma, pembatalan itu biasanya merupakan pemeriksaannya. Apa yang terjadi pada pemeriksaan tersebut ketika guru percaya bahwa algoritma lebih tahu daripada dirinya?
- Dua kegagalan mungkin terjadi: menerima rekomendasi yang salah, dan menolak rekomendasi yang benar. Yang mana yang ditangkap oleh proses di institusi Anda, dan yang mana yang diberi imbalan?
- Jika sebuah dasbor menandai seorang siswa berisiko, apa yang harus Anda ketahui untuk menyanggahnya — dan dari mana pengetahuan itu datang?
- [[trust-calibration|Penelitian tentang kepercayaan]] memprediksi bahwa orang yang meragukan dirinya sendiri paling bergantung pada mesin. Apa maknanya bahwa korpus menemukan hal sebaliknya di antara para siswa?
- Pertimbangan siapa yang tergeser ketika AI menulis [[feedback]], menetapkan nilai, atau menyusun draf intervensi — dan apakah [[human-in-the-loop-ai|manusia dalam lingkar]] benar-benar memiliki kesempatan untuk campur tangan, atau hanya kesempatan formal?

## Pendahuluan

Para siswa dan [[teacher-role|guru]] sudah bekerja di samping sistem yang menghasilkan pertimbangan: penilai esai, [[visualization|dasbor]] keterlibatan, detektor pengawasan, model anotasi yang memproduksi label, petunjuk tutor. Setiap keluaran itu sampai kepada seseorang yang harus memutuskan apakah akan menerimanya, dan bias otomasi menamai kegagalan yang dapat diprediksi dari orang tersebut untuk memeriksa. Halaman ini membahas sisi manusia dari masalah itu. Bias di dalam model — data pelatihan yang miring, laju kesalahan yang tidak merata antar kelompok — didokumentasikan di [[bias-mitigation]]. Pertanyaannya di sini adalah apa yang terjadi setelah model berbicara.

Konsep ini penting bagi pendidikan karena manusia dalam lingkar jarang merupakan spesialis. Seorang guru yang memutuskan apakah akan mempercayai rekomendasi algoritmik tentang seorang siswa adalah pakar domain dengan tiga puluh siswa lain di ruangan dan tanpa jejak audit. Seorang penilai yang diperlihatkan skor mesin sebelum menilai esai diminta menyanggah sebuah angka yang tidak memiliki riwayat yang terlihat. Bias otomasi adalah yang membuat posisi-posisi itu sulit, dan itulah sebabnya "manusia meninjau keluarannya" lebih lemah sebagai pengaman daripada kedengarannya.

## Apa bias ini, dan apa yang bukan

Literatur memisahkan dua kesalahan. **Omisi** adalah kegagalan menyadari bahwa sistem otomatis tidak melakukan apa pun padahal seharusnya bertindak, atau bahwa sistem itu melewatkan kasus yang seharusnya ditangkapnya.

**Komisi** adalah menerima tindakan atau pertimbangan yang dihasilkan sistem secara keliru. Versi pendidikan adalah yang akrab: esai yang dinilai baik dan tidak dibaca ulang, siswa yang ditandai dan tidak diwawancarai, petunjuk yang diikuti tanpa pemeriksaan.

Tiga konsep tetangga mudah dikacaukan dengannya, dan korpus memisahkannya:

- [[trust-calibration|Kalibrasi kepercayaan]] adalah keadaan ketergantungan seseorang relatif terhadap keandalan sistem yang sebenarnya. Bias otomasi adalah kesalahan spesifik yang diizinkan oleh kalibrasi yang keliru, dan keduanya diukur dengan cara berbeda.
- [[cognitive-offloading|Pengalihan kognitif]] adalah mendelegasikan kerja mental kepada sebuah alat. Pengalihan bisa sehat; bias otomasi adalah apa yang terjadi ketika delegasi itu luput dari tinjauan.
- Bias di sisi model adalah properti sistem. Bias otomasi adalah properti interaksi, dan ia tetap tersedia bahkan ketika modelnya sepenuhnya akurat.

Ketidaksesuaian yang membuat hal ini jelas adalah bahwa bias otomasi tidak memerlukan kesalahan pada mesin. [[geoscience-field-learning-genai-2026|Tinjauan AI generatif dalam pembelajaran lapangan geosains]] membangun tiga mekanisme pada anchoring, bias konfirmasi, dan bias otomasi — penstrukturan perhatian, penjangkaran interpretatif, dan pemindahan otoritas — dan menyatakan terang-terangan bahwa tidak satu pun dari ketiganya memerlukan keluarannya salah.

## Mengapa keputusan pendidikan rentan

Lima titik menanggung sebagian besar risiko, dan masing-masing memiliki orang yang berbeda yang menyetujuinya:

1. **Penilaian dan umpan balik.** [[automated-assessment|Penilai otomatis]] dan penganalisis tulisan menghasilkan angka atau komentar yang dapat diterima manusia tanpa membaca ulang karyanya.
2. **Analitik dan peringatan dini.** [[learning-analytics|Dasbor analitik]] menyimpulkan partisipasi dan risiko dari data klik dan pengumpulan tugas, lalu menyajikan simpulan itu sebagai tanda. [[recommender-systems-and-learning-paths|Pemberi rekomendasi]] melangkah lebih jauh dan memberi peringkat apa yang harus dilakukan siswa berikutnya.
3. **Pengawasan dan deteksi kecurangan.** [[remote-proctoring|Sistem pengawasan]] dan [[ai-detection|alat deteksi]] memunculkan kecurigaan yang diputuskan manusia, sering kali di bawah tekanan waktu.
4. **Data acuan itu sendiri.** Ketika model menganotasi label yang kemudian diperlakukan penelitian sebagai kebenaran, biasnya masuk ke aparatus [[educational-measurement|pengukuran]].
5. **Bantuan yang menghadap pembelajar.** [[intelligent-tutoring|Petunjuk]], penjelasan, dan draf mengundang siswa menerima uraian tentang materi alih-alih membangunnya sendiri.

## Apa yang ditunjukkan korpus

### Guru yang tunduk pada skor dan rekomendasi

Pernyataan mekanisme yang paling jelas ada dalam karya yang menghadap guru. [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe dkk. (2026)]] mendeskripsikan sistem diagnostik yang melihat kinerja dan waktu penyelesaian sementara [[motivation]], riwayat belajar, dan dinamika kelas tetap tak terlihat bagi sistem itu, dan memperingatkan bahwa bias otomasi dapat mendorong guru tunduk pada rekomendasi yang dibangun di atas irisan tipis tersebut. Obat mereka bukan skor yang lebih baik melainkan sikap yang berbeda: ketika penjelasan lemah, guru harus lebih bersandar pada pengamatan mereka sendiri tentang bagaimana siswa berperilaku saat menggunakan AI.

Celah paling tajam ada pada titik pertimbangan. [[human-in-the-loop-ai-scoring-national-assessment-2026|Studi penilaian asesmen nasional (2026)]] meminta penilai meninjau skor mesin, dan penulisnya menamai mekanisme yang belum diuji itu secara langsung: apakah penilai yang diperlihatkan skor AI sebelum menilai akan terjangkar olehnya atau tunduk padanya belum diukur, dan mereka mengusulkan eksperimen penilai tersamar versus tak tersamar sebagai langkah berikutnya. Klaim manusia-dalam-lingkar dalam rancangan itu karenanya merupakan asumsi, bukan temuan — dan itu adalah versi rancangan yang baik.

### Dasbor analitik dan klaim manusia-dalam-lingkar

[[in-the-loop-educational-ai-learning-sciences-2026|Tinjauan ilmu pembelajaran tentang AI pendidikan dalam lingkar (2026)]] memberi pola itu bentuk umumnya: dasbor menyimpulkan partisipasi dari klik, [[writing-education|umpan balik menulis]] otomatis mengutamakan ciri permukaan alih-alih argumen, dan lampu lalu lintas peringatan dini menafsirkan lintasan lebih dahulu. Bias otomasi memperkuat masing-masingnya, dan tinjauan itu memperlakukan [[trust]] sebagai hasil sosioteksnis yang dibentuk oleh transparansi, kompetensi yang dipersepsikan, dan hak yang bermakna untuk membatalkan, bukan sebagai sikap yang stabil.

Dua rancangan dalam korpus menanggapi hal itu dengan serius. [[factria-responsible-institutional-analytics-2026|FACTRIA (2026)]] menjaga manusia dalam lingkar dengan menolak memberi rekomendasi: dalam studi think-aloud terhadap sebelas [[stakeholders]] yang membaca empat kasus analitik nyata, dikodekan dengan k Cohen 0.76, [[conversational-ai|chatbot]] itu mendukung interpretasi dan secara eksplisit menolak mengambil keputusan, dan penulisnya menandai bias otomasi serta penerimaan tanpa kritik sebagai risiko yang tersisa. [[ludia-udl-ai-thought-partner-2026|LUDIA (2026)]] mengarahkan setiap keluaran melalui seorang pendidik, lalu mengakui bahwa pengaman itu lebih lemah daripada penampakannya, karena pendidik yang paling mungkin menerima saran buruk adalah pendidik yang percaya bahwa LUDIA memahami [[universal-design-for-learning|desain universal untuk pembelajaran]].

Poin konseptual yang mengikat semuanya berasal dari [[extended-minds-coupling-flexibility-2026|uraian kopling-keluvesan tentang pikiran yang diperluas (2026)]]: kesempatan yang semata-mata formal untuk menerima atau menolak tidak menempatkan manusia di dalam produksi pertimbangan jika bias otomasi mengalahkannya. Pengawasan menuntut kesempatan substantif untuk campur tangan, dan tombol tolak yang tidak pernah ditekan bukanlah pengawasan.

### Data acuan dan anotasi LLM

Konsep itu mencapai pipeline penelitian melalui anotasi. [[ground-truth-reliability-aied|Analisis keandalan data acuan (2026)]] mendaftar risiko penggunaan LLM sebagai anotator: terlalu mempercayai keluaran tanpa verifikasi, validasi sirkular ketika model mengevaluasi keluarannya sendiri, dan degradasi diam-diam yang membuat label tetap tampak konsisten sementara melenceng menjadi salah. Bias otomasi di sini mencemari standar rujukan yang menjadi dasar penilaian setiap pengukuran berikutnya.

### Pembelajar dan otoritas epistemik

Bagi siswa, mekanismenya berkaitan dengan siapa yang dikreditkan atas pemikirannya. [[polished-artifacts-fragile-engagement-2026|Analisis CSCL atas artefak yang mengilap (2026)]] mendasarkan untaian sosio-kognitifnya pada bias otomasi — mengatribusikan kompetensi epistemik yang lebih besar kepada AI daripada yang wajar bagi situasinya — dan memasangkannya dengan untaian kedua di mana produk eksternal yang mengilap memicu penutupan. [[page-cognitive-partnership-cycle-human-ai-2026|Siklus kemitraan kognitif (2026)]] mendaftar bias otomasi di antara empat mode kegagalan yang membuat iterasi menggantikan pemikiran, bersama [[cognitive-offloading|pengalihan]], ilusi pemahaman, dan amplifikasi kesalahan rekursif. [[eight-mode-ai-engagement-typology-2026|Tipologi keterlibatan (2026)]] memperlakukannya sebagai satu mode dari delapan: menanyakan kepada model apa kata literatur adalah gerakan Oracle yang risiko khasnya adalah menerima jawabannya.

Dua makalah berargumen bahwa penyeimbangnya adalah disposisi, bukan aturan. [[assessing-student-drive-framework-2025|Kerangka Drive (2025)]] mengusulkan [[agency|agensi manusia]] yang aktif sebagai pengaman kognitif terhadap bias otomasi dan atrofi keterampilan yang menyusul pengalihan. [[sun-llm-nursing-education-professional-identity-2026|Tinjauan keperawatan (2026)]], yang membaca 489 studi di 47 negara melalui akuisisi keterampilan Benner, teori beban kognitif, bias otomasi, dan pembentukan identitas Wenger, menyimpulkan bahwa alat yang sama membantu atau merugikan tergantung pada apakah ia menggantikan kerja yang asing bagi kompetensi atau kerja yang konstitutif bagi kompetensi itu.

### Ketika bias disebut sebagai risiko alih-alih diukur

Sebagian besar korpus mendaftar bias otomasi dalam model ancaman tanpa mengujinya, dan perbedaan itu penting bagi seberapa besar bobot yang dapat ditanggung konsep ini. [[ahmadfard-interactive-oer-review-2026|Tinjauan OER interaktif (2026)]] memasukkannya di antara risiko berulang yang menggerus agensi pembelajar dan guru, didaftar alih-alih diukur. [[alshahrani-health-sciences-ai-use-2026|Survei ilmu kesehatan (2026)]] membaca kekhawatiran [[ethics|etis]] 310 mahasiswa sebagai alasan untuk [[professional-training|pelatihan profesional]] yang mencakup bias otomasi secara eksplisit. [[ai-literacy-legal-translation-2026|Studi penerjemahan hukum (2026)]] menuntut pasca-sunting dan verifikasi diajarkan sebagai keterampilan yang dinilai, sambil menamai tekanan bias otomasi dan ilusi kualitas yang membuat kesalahan terjemahan mudah terlewat. [[morales-cevallos-ai-forensic-science-education-2026|Tinjauan ilmu forensik (2026)]] menemukan bias otomasi terdokumentasi dalam studi-studi yang disertakannya dan mengusulkan latihan berbasis kasus yang dibangun dari kegagalan yang dilaporkan. [[rana-genai-design-thinking-2025|Studi design thinking (2025)]] mengubahnya menjadi persyaratan desain: [[scaffolding|perancah]] yang menjaga pertimbangan manusia di pusat, menangkal pengalihan sekaligus bias otomasi.

## Ketika buktinya tipis, campur aduk, atau terbalik

**Prediksi yang gagal.** Literatur bias otomasi memprediksi bahwa orang yang meragukan pertimbangan mereka sendiri paling bergantung pada mesin, sehingga [[self-efficacy]] yang rendah seharusnya menghasilkan kepercayaan berlebih yang tinggi. [[kim-overtrust-ai-literacy-2026|Studi kepercayaan berlebih (2026)]] menemukan tanda sebaliknya: siswa yang percaya diri mengadopsi [[generative-ai|AI generatif]] lebih awal, mengumpulkan pengalaman positif, dan lebih mempercayai alat itu. Rancangannya lintas-seksi dan tidak dapat menetapkan urutan apa pun, yang penulisnya katakan lebih dari sekali, sehingga temuan itu tidak membalik mekanismenya — tetapi ia menunjukkan bahwa versi ruang kelas mungkin tidak berjalan ke arah yang diprediksi versi laboratorium.

**Eksperimen yang menentukan tidak ada.** Tidak ada seorang pun dalam korpus yang menjalankan perbandingan penilaian tersamar versus tak tersamar yang akan mengisolasi penjangkaran oleh skor mesin, sehingga pengaman manusia-dalam-lingkar dalam penilaian bersandar pada kelayakan. Hal yang sama berlaku bagi dasbor: studi-studi itu mendeskripsikan apa yang diperlihatkan kepada guru, jarang apa yang mereka lakukan secara berbeda karenanya.

**Klaim konseptual melebihi pengukuran.** [[haiml-human-centered-ai-metacognitive-model-2026|Model HAIML (2026)]] membangun kerangkanya di atas penelitian bias otomasi dan menawarkan kerangka pengajaran alih-alih ujian atasnya. Siklus kemitraan kognitif menawarkan enam proposisi dan agenda penelitian. Keduanya berguna untuk desain dan keduanya bukan bukti tentang besarnya fenomena ini dalam pendidikan.

**Argumen taruhannya adalah bagian terkuat.** Esai-esai itu mengaitkan mekanisme ini dengan konsekuensi institusional: [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026|Muñiz dan Castro Samayoa (2026)]] menamai bias otomasi sebagai salah satu dari tiga mekanisme yang menggerus praktik kewargaan kritis, dan [[academic-erasure-complexity-ai-writing-2026|analisis atas pengawasan institusional penggunaan AI (2026)]] menghubungkannya dengan kerja afektif dalam menegakkan [[educational-policy-ai|kebijakan AI]]. [[llm-fallacy-misattribution|Analisis atas kekeliruan LLM]] menyediakan pembedaan terdekat yang paling bersih: bias otomasi adalah tentang ketergantungan berlebih pada sebuah sistem selama pengambilan keputusan, sedangkan pokok bahasannya adalah persepsi pengguna bahwa sebuah keluaran merupakan kompetensi mereka sendiri.

## Implikasi bagi Praktik

- **Buat pemeriksaan menjadi murah dan tersamar.** Catat pertimbangan manusia sebelum memperlihatkan milik mesin, atau tahan skornya sampai penilaian masuk. Penyamaran adalah intervensi yang terus diusulkan korpus dan belum diuji.
- **Umumkan apa yang dapat dilihat sistem.** Rekomendasi yang dibangun hanya dari waktu penyelesaian harus menyatakan demikian; guru dapat mendiskon masukan yang tipis jika mereka tahu bahwa itu tipis.
- **Jangan menghitung tombol tolak sebagai pengawasan.** Tanyakan apa yang harus benar agar seseorang menekannya, dan apa yang diberi imbalan oleh prosesnya.
- **Ajarkan verifikasi sebagai keterampilan yang dinilai.** Pasca-sunting, penghitungan ulang, dan pemeriksaan sumber termasuk dalam [[curriculum-design|kurikulum]], bukan dalam satu paragraf kebijakan.
- **Lindungi kerja yang konstitutif.** Bukti keperawatan menyarankan bahwa batas yang layak dipertahankan bukanlah "tugas bebas AI" melainkan tugas-tugas yang melaluinya keahlian terbentuk.

## Miskonsepsi Umum

- **"Ini hanya penting ketika AI salah."** Bias ini bekerja paling bersih ketika AI benar dan manusia berhenti memeriksa; mekanisme dalam kerja lapangan tidak memerlukan keluaran yang salah.
- **"Ini sama dengan kepercayaan rendah atau kepercayaan tinggi."** Kalibrasi adalah keadaan; bias otomasi adalah kesalahan yang diizinkan oleh alur kerja yang salah kalibrasi. Kepercayaan yang kurang menghasilkan kegagalannya sendiri — menolak rekomendasi yang baik.
- **"Manusia dalam lingkar memperbaikinya."** Lingkar itu hanya sebaik kesempatan untuk campur tangan, dan studi-studi penilaian belum mengukur penjangkaran.
- **"Ini masalah siswa."** Guru, penilai, anotator, dan administrator adalah pihak yang menyetujui dalam setiap rancangan yang dideskripsikan korpus.
- **"Ini cacat karakter yang hilang dengan pelatihan yang lebih baik."** Pelatihan membantu, tetapi orang yang sama berperilaku berbeda tergantung pada apakah verifikasi murah, apakah keluarannya lancar, dan apakah ketidaksetujuan menanggung biaya.

## Konsep terkait

- [[trust-calibration]] — keadaan ketergantungan yang kegagalannya dinamai bias otomasi
- [[bias-mitigation]] — pasangan di sisi sistem: bias di dalam model
- [[cognitive-offloading]] — delegasi kerja mental, yang penerimaan tanpa pemeriksaan merupakan salah satu hasilnya
- [[human-in-the-loop-ai]] — pengaman yang kekuatannya ditentukan oleh kegagalan ini
- [[explainable-ai]] — intervensi transparansi yang diusulkan korpus dan jarang diuji
- [[learning-analytics]] — dasbor dan peringatan dini, tempat kesalahan omisi terkonsentrasi
- [[recommender-systems-and-learning-paths]] — memberi peringkat apa yang harus dilakukan berikutnya, yang dapat sekadar diikuti siswa
- [[automated-assessment]] — skor yang mungkin diterima manusia tanpa membaca ulang
- [[scaffolding]] — pemeriksaan yang tetap lebih murah daripada penerimaan
- [[self-efficacy]] — sifat yang menjadi dasar prediksi standar
- [[ai-detection]] — deteksi yang diputuskan manusia di bawah tekanan waktu
- [[remote-proctoring]] — kecurigaan yang dimunculkan model dan diputuskan orang
- [[ai-literacy]] — tempat verifikasi sebagai keterampilan yang dinilai akan berada

## Artikel terkait

- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — guru diperingatkan agar tidak tunduk pada rekomendasi yang dibangun dari data tipis
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — menamai penjangkaran penilai oleh skor AI sebagai risiko yang belum diuji dan mengusulkan penyamaran
- [[in-the-loop-educational-ai-learning-sciences-2026]] — dasbor, umpan balik berbasis ciri permukaan, dan lampu lalu lintas sebagai pola umum
- [[factria-responsible-institutional-analytics-2026]] — sebelas pemangku kepentingan, empat kasus, chatbot yang menolak memberi rekomendasi
- [[ludia-udl-ai-thought-partner-2026]] — pengaman pendidik yang melemah karena mempercayai pengetahuan domain alat
- [[extended-minds-coupling-flexibility-2026]] — hak formal untuk menolak bukanlah pengawasan jika bias otomasi mengalahkannya
- [[ground-truth-reliability-aied]] — anotasi LLM, validasi sirkular, dan pergeseran label diam-diam
- [[polished-artifacts-fragile-engagement-2026]] — bias otomasi sebagai untaian sosio-kognitif dari usaha epistemik yang berkurang
- [[page-cognitive-partnership-cycle-human-ai-2026]] — salah satu dari empat mode kegagalan dalam kerja rekursif manusia-AI
- [[eight-mode-ai-engagement-typology-2026]] — mode Oracle dan risiko khasnya
- [[assessing-student-drive-framework-2025]] — agensi manusia yang aktif sebagai pengaman terhadap bias otomasi
- [[sun-llm-nursing-education-professional-identity-2026]] — 489 studi tentang apakah AI menggantikan kerja yang asing atau yang konstitutif
- [[geoscience-field-learning-genai-2026]] — anchoring, konfirmasi, dan bias otomasi dalam kerja lapangan yang terikat bukti
- [[ahmadfard-interactive-oer-review-2026]] — bias otomasi didaftar di antara risiko yang menggerus agensi pembelajar dan guru
- [[alshahrani-health-sciences-ai-use-2026]] — kekhawatiran etis 310 mahasiswa dibaca sebagai alasan untuk pelatihan eksplisit
- [[ai-literacy-legal-translation-2026]] — pasca-sunting diajarkan sebagai keterampilan yang dinilai terhadap tekanan ilusi kualitas
- [[morales-cevallos-ai-forensic-science-education-2026]] — bias otomasi terdokumentasi dalam studi AI forensik yang ditinjau
- [[rana-genai-design-thinking-2025]] — perancah yang menjaga pertimbangan manusia di pusat
- [[kim-overtrust-ai-literacy-2026]] — prediksi yang terbalik: siswa yang percaya diri lebih mempercayai alat
- [[haiml-human-centered-ai-metacognitive-model-2026]] — kerangka yang dibangun di atas penelitian bias otomasi, bukan ujian atasnya
- [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026]] — salah satu dari tiga mekanisme yang menggerus kewargaan kritis
- [[academic-erasure-complexity-ai-writing-2026]] — bias otomasi di dalam kerja afektif penegakan penggunaan AI
- [[llm-fallacy-misattribution]] — pembedaan terdekat: ketergantungan berlebih pada sistem versus persepsi kompetensi pribadi
