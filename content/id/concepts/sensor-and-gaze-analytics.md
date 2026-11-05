---
title: "Analitik Sensor dan Tatapan"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: "concepts/sensor-and-gaze-analytics"
source_updated: "2026-11-04T16:09:41-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Analitik Sensor dan Tatapan** — penggunaan pelacakan mata, elektroensefalografi, aktivitas elektrodermal, variabilitas detak jantung, dan postur yang diturunkan dari kamera untuk menyimpulkan keadaan pembelajar seperti perhatian, keterlibatan, beban kognitif, dan afek. Dalam [[ai-education|AI dalam pendidikan]], sinyal-sinyal ini menjanjikan pandangan nonverbal yang berkelanjutan tentang pembelajaran yang tidak dapat dipasok kuis dan laporan diri. Sinyal-sinyal ini juga berada di pusat masalah inferensi tersulit di bidang ini: sensor merekam tubuh, bukan pikiran, dan setiap klaim tentang apa yang dipikirkan atau dirasakan pembelajar adalah interpretasi yang dilapiskan pada rekaman itu ([[kim-ai-embodied-learning-review-2026|Kim dan Han, 2026]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Kamera web dapat menunjukkan bahwa mata Anda tetap berada di dalam pemutar video sepanjang kuliah. Apakah itu berarti Anda memperhatikan?
- Jika sebuah tutor dapat memperkirakan beban kognitif Anda secara real time, haruskah ia bertindak atas perkiraan itu tanpa menanyakan Anda lebih dahulu?
- Tatapan seorang siswa mungkin meninggalkan layar karena tik, gangguan penglihatan, atau norma budaya. Apa arti tanda "perhatian rendah" bagi siswa itu?
- Haruskah universitas diizinkan mengumpulkan data otak dan jantung untuk perbaikan mata kuliah, dan apa yang akan dituntut oleh persetujuan yang sebenarnya?
- Angka "akurasi keterlibatan 75%" terdengar presisi. Lapisan keterlibatan mana yang sebenarnya dijangkau sensor, dan mana yang terlewat?
- Pengawasan kini membaca postur dan gerakan kepala. Di mana garis antara mendeteksi kecurangan dan menilai tubuh?

## Pendahuluan

Analitik sensor dan tatapan mendeskripsikan sekelompok metode yang mengubah pengukuran fisik seorang pembelajar menjadi inferensi pendidikan. Pengukurannya mencakup di mana mata berhenti dan berapa lama, aktivitas listrik kulit kepala, respons kelenjar keringat, variasi detak jantung dari detak ke detak, serta posisi dan gerakan kepala dan torso. Inferensinya mencakup perhatian, keterlibatan, beban kognitif, kebingungan, stres, dan, dalam situasi asesmen, kecurigaan.

Daya tariknya lugas. [[self-report-measures|Laporan diri]] bersifat retrospektif dan kasar, dan kuis hanya mengambil sampel pembelajaran pada beberapa momen. Sensor berjalan terus-menerus dan menuntut sedikit usaha sadar dari pembelajar. Kombinasi itu menjadikan penginderaan sentral bagi [[learning-analytics]] dan [[student-modeling]], dan telah menghasilkan literatur besar di mana penginderaannya mengesankan secara teknis dan interpretasinya tipis.

Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] atas 23 studi yang memasangkan AI dengan [[embodied-learning]] membuat ketidakseimbangan itu konkret. Analisis dan evaluasi mencakup 40.0% peran AI yang dikodekan, dan pengenalan serta deteksi 22.5%, sementara umpan balik dan pembinaan mengambil 15.0%. Peran penginderaan mencakup 62.5% tag peran berbanding 35.0% untuk peran partisipatif ([[kim-ai-embodied-learning-review-2026|Kim dan Han, 2026]]). Bidang ini lebih baik dalam mengamati pembelajar daripada dalam mengubah apa yang terjadi berikutnya.

## Apa yang sebenarnya diukur setiap sinyal

**Tatapan dan fiksasi.** Pelacak mata melaporkan ke mana mata mengarah, berapa lama ia berhenti, kapan ia bergerak cepat, dan seberapa luas ia menyebar. Sistem berbasis layar seperti WebGazer memperkirakan tatapan dari kamera web, sedangkan kacamata melacak mata secara langsung. TutorLoop mengubah tatapan menjadi dua kuantitas: perhatian sebagai persentase titik tatapan di dalam area konten, dan beban kerja sebagai entropi tatapan, dengan penalaran bahwa tatapan yang menyebar mengikuti beban kognitif ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Ollie, asisten berbasis tatapan untuk anak-anak, sebaliknya mendefinisikan area minat dalam sebuah gambar dan memicu narasi ketika seorang anak melihat salah satunya ([[gaze-informed-ai-children|Wu dkk., 2026]]).

**Elektroensefalografi.** EEG merekam fluktuasi voltase di kulit kepala pada resolusi temporal tinggi. Ia adalah satu-satunya sinyal dalam keluarga ini yang menjangkau aktivitas kortikal secara langsung, dan itulah sebabnya ia menarik penelitian asesmen. Sistem pendidikan praktis memakai elektroda kering dan sedikit kanal: E3Sense mengambil empat kanal EEG kering pada 125 Hz dan menganalisis dua kanal frontal ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]). Perangkat kelas penelitian mengambil pendekatan sebaliknya: Kosmyna dkk. (2025) memakai EEG 32 kanal untuk membandingkan siswa yang menulis dengan [[llm|LLM]], mesin pencari, atau tanpa alat, dan menemukan konektivitas neural paling lemah pada kelompok LLM ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna dkk., 2025]]). Studi itu juga merupakan peringatan paling jelas tentang bukti satu kanal, karena klaim sentralnya bersandar pada sesi persilangan opsional yang hanya dihadiri 18 dari 54 peserta.

**Aktivitas elektrodermal.** EDA mengukur konduktansi kelenjar keringat, sebuah indeks gairah simpatik. Ia merespons stres, usaha, dan intensitas emosional, dan tidak dapat membedakan ketiganya. Konstruk yang sama muncul di gelang dan di elektroda dahi yang dipasang beberapa sentimeter terpisah oleh rangka pelacak mata ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]).

**Detak jantung dan variabilitas detak jantung.** Detak jantung mengikuti gairah, dan variabilitas antar detak mengindeks pemulihan otonom. Dalam studi setahun terhadap 458 siswa yang memakai cincin Oura, bahasa kelelahan emosional mengikuti efisiensi tidur yang lebih rendah dan variabilitas detak jantung yang lebih rendah ([[affective-text-wearable-student-health|Teks Afektif dan Penginderaan Wearable, 2026]]). Tidak satu pun ukuran itu mengidentifikasi sebab.

**Postur dan gerakan berbasis kamera.** Sistem pengawasan dapat mengekstrak tujuh belas penanda tubuh per bingkai dan menurunkan simpangan postur, tren gerakan kepala, dan gerakan tubuh bagian atas ([[arif-automated-online-proctoring-yolov11-2026|Arif dkk., 2026]]). Ini mengukur gerakan. Menyebutnya perilaku mencurigakan adalah langkah terpisah yang tidak didukung.

Sinyal-sinyal ini berbeda dalam laju pencuplikan, derau, dan beban instrumentasi. E3Sense menyelaraskan dua belas jendela EEG, enam jendela mata, dan tiga jendela EDA ke dalam representasi bersama 120 detik dengan 166 dimensi ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]). EduGage menjalankan tujuh jenis perangkat sekaligus dan menyimpulkan bahwa kombinasi ringan membawa sebagian besar sinyal yang dapat digunakan ([[engagement-assessment-video|Leng dkk., 2026]]).

## Untuk apa sinyal-sinyal itu digunakan

**Deteksi keterlibatan dalam [[video-education|pembelajaran video]].** E3Sense meminta 30 mahasiswa menilai lima segmen per video, menghasilkan 450 penilaian. Model gabungan mencapai akurasi seimbang 75.0% dalam satu tingkat terhadap garis dasar modus 63.0% pada peserta yang ditahan ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]). EduGage melaporkan MAE 0.81 dan akurasi dalam satu tingkat 83.75% pada 16 peserta dan 715 jendela probe ([[engagement-assessment-video|Leng dkk., 2026]]). Keduanya memperlakukan perkiraan itu sebagai perkiraan kasar.

**Estimasi perhatian di ruang kelas.** Sebuah [[multimodal|transformer multimodal]] menggabungkan citra wajah dengan sinyal wearable pada DIPSER, sebuah himpunan data naturalistik 57 subjek, dan mencapai MAE 0.283. Keunggulannya atas garis dasar visual saja sederhana, dan para penulis menyimpulkan bahwa fitur wajah adalah sumber informasi utama ([[student-attention-estimation-fairness-2026|Fragkiadakis dkk., 2026]]).

**Beban kognitif dan waktu umpan balik.** TutorLoop memakai perhatian dan beban kerja yang diturunkan dari tatapan untuk memilih di antara empat [[feedback|jenis umpan balik]] dengan agen pembelajaran penguatan. Pada 187 peserta, sistem lengkapnya lebih jarang campur tangan daripada garis dasar namun meningkatkan perhatian dan menurunkan beban kerja ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**Pengawasan dan integritas.** Pengawasan berbasis pose melaporkan kinerja mendekati plafon pada himpunan skenario berlabel miliknya sendiri: akurasi 99.56% dan AUC 0.9957 ([[arif-automated-online-proctoring-yolov11-2026|Arif dkk., 2026]]). AI wearable mengubah masalah yang sama dari sisi lain. Kacamata pintar menghapus jeda tatapan dan pergeseran postur yang menjadi sandaran pengawasan, sebuah kondisi yang oleh Corbin dan rekan disebut transparansi ganda ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin dkk., 2026]]).

**Afek dan [[well-being|kesejahteraan]].** Sinyal fisiologis yang dikumpulkan selama ujian memprediksi kategori nilai, dengan hutan acak mencapai rata-rata 0.96 pada 30 replikasi ([[physiological-signals-exam-outcomes-ml|Yamazaki dan Rimal, 2026]]). Prediktor teratasnya adalah aktivitas elektrodermal, gerakan akselerometer, dan suhu kulit. Itu gairah dan gerakan, bukan pemahaman.

**Penelitian asesmen.** EEG telah diuji sebagai ukuran langsung keakraban dan representasi mental. Kedua lini menjanjikan dan keduanya masih eksploratif, yang akan dibahas bagian berikutnya.

## Celah inferensial

Setiap penggunaan di atas bergantung pada sebuah rantai: peristiwa fisiologis atau perilaku, fitur yang dihitung darinya, model yang dilatih pada label, dan klaim tentang keadaan mental. Setiap mata rantai bocor.

Labelnya sering menjadi mata rantai terlemah. E3Sense memprediksi penilaian segmen oleh pembelajar sendiri, dan 63% penilaian itu berada pada dua tingkat yang terlibat. Sebuah model dapat memperoleh skor baik dengan mempelajari distribusinya alih-alih keadaannya. Ketika para peneliti menambahkan definisi keterlibatan versi pembelajar sendiri, akurasinya naik dari 64.6% menjadi 71.5%, yang menyarankan label dan sinyalnya mengukur hal yang sebagian berbeda ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]).

[[assessment-validity|Validasi]] dapat menggelembungkan model. Sebuah tolok ukur lima belas model untuk prediksi keakraban berbasis EEG mencapai F1 0.9853 di bawah validasi silang berstrata. Group K-Fold yang independen dari percobaan, yang menghormati struktur temporal, menurunkan puncaknya menjadi F1 0.6038 terhadap tingkat kebetulan 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara dan Halloluwa, 2026]]). Angka pertama mendeskripsikan kebocoran; angka kedua mendeskripsikan pembelajaran.

Korelat neural bukanlah skor. Gambar yang direkonstruksi dari EEG berkorelasi dengan kinerja tes pada R² = 0.79 pada 55 pengamatan peserta-video. Butir yang dijawab benar juga menunjukkan kemiripan semantik yang lebih tinggi daripada yang salah. Namun satu peserta menghasilkan rekonstruksi berkualitas tinggi dan menjawab salah, sehingga kualitas rekonstruksi tidak dapat dibaca sebagai kebenaran ([[seeing-cognitive-representations-eeg-reconstruction|Su dkk., 2026]]).

Perhatian bukanlah pembelajaran. Dalam TutorLoop, perhatian berkorelasi dengan pembelajaran pada r = 0.017, sementara beban kerja berkorelasi negatif pada r = -0.168 ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Sistem yang memaksimalkan sinyal perhatian akan mengoptimalkan sesuatu yang mendekati derau.

Profil fisiologis bukanlah diagnosis. Model stres ujian memprediksi kategori nilai dari gairah dan gerakan, dan para penulis menegaskan bahwa keluarannya berada di samping keadaan pribadi dan konteks kesehatan mental, bukan di dalam keputusan bertaruh tinggi ([[physiological-signals-exam-outcomes-ml|Yamazaki dan Rimal, 2026]]).

Akhirnya, pengumpulan bukanlah integrasi. Kim dan Han menemukan bahwa sebagian besar studi multimodal mengumpulkan aliran secara paralel, satu di antaranya menyelaraskan afek wajah, tatapan, dan deteksi wajah secara belakangan, dan tidak ada yang menggabungkan masukannya secara langsung saat pembelajar menggunakan sistem ([[kim-ai-embodied-learning-review-2026|Kim dan Han, 2026]]). Satu halaman kanal yang tersinkronisasi dapat tampak seperti model pembelajar padahal hanya merupakan rekaman.

## Etika mengindera pembelajar

**Persetujuan dilemahkan oleh kekuasaan institusional.** Siswa yang wajib menghadiri kelas atau mengikuti ujian tidak dapat dengan bebas menolak kamera atau perangkat wearable. Atribut demografis bahkan mungkin tidak diserahkan secara sukarela: label gender, usia, dan etnis DIPSER disimpulkan dari citra oleh model visi komputer alih-alih dipasok peserta ([[student-attention-estimation-fairness-2026|Fragkiadakis dkk., 2026]]). Menyimpulkan siapa seseorang, untuk menguji apakah sebuah model memperlakukannya secara adil, dengan sendirinya merupakan tindakan pembuatan profil.

**Data biometrik bukanlah data analitik biasa.** EEG, EDA, dan variabilitas detak jantung berdekatan dengan kesehatan dan, di banyak yurisdiksi, merupakan data kategori khusus. Semuanya dapat mengungkap tidur, stres, dan kondisi medis melebihi apa pun yang dibutuhkan sebuah mata kuliah. Sistem berbasis tatapan untuk anak-anak memicu keberatan [[privacy|privasi]] dari seorang orang tua bahkan dalam uji coba kecil ([[gaze-informed-ai-children|Wu dkk., 2026]]).

**Perluasan fungsi adalah jalur normalnya.** Pemantauan kesejahteraan menjadi penandaan risiko, dan penandaan risiko menjadi bukti penilaian. Corbin dan rekan menunjukkan versi asesmen dari pergeseran ini: begitu pengecualian fisik gagal, inspeksi berpindah dari artefak ke tubuh, dan siswa harus membuktikan bahwa kacamatanya korektif dan perangkatnya terapeutik ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin dkk., 2026]]).

**Kegagalan keadilan mengelompok pada tubuh yang berbeda.** Estimasi perhatian berbasis wajah bergantung pada warna kulit, kacamata, dan pencahayaan. Perhatian berbasis tatapan menghukum pembelajar yang menghindari kontak mata, termasuk sebagian siswa autistik dan [[neurodiversity|neurodivergen]]. Pengawasan berbasis pose menandai tik, stimming, dan norma gerakan budaya. Studi pengawasan tidak menguji apakah postur yang ditandai berkaitan dengan kecurangan, atau apakah detektornya memperlakukan [[special-education|siswa dengan disabilitas]] atau perbedaan budaya dalam tatapan secara adil ([[arif-automated-online-proctoring-yolov11-2026|Arif dkk., 2026]]). Regulasi bukan obat di sini; ia adalah cara mencuci kesalahan menjadi aturan.

**Klaim keadilan memerlukan bukti pada tingkat subjek.** Sebuah regularizer bertarget gender memangkas celah MAE validasi dari 0.02 menjadi 0.005, lalu meningkatkan celah itu dan kesalahan kelompok terburuk pada subjek yang ditahan ([[student-attention-estimation-fairness-2026|Fragkiadakis dkk., 2026]]). Melaporkan satu pemisahan sebagai bukti keadilan adalah kegagalan desain dengan biaya kesetaraan.

**Privasi dapat dirancang sejak awal.** TutorLoop menjalankan WebGazer di sisi klien sehingga tatapan mentah tidak pernah meninggalkan peramban ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Pilihan itu menunjukkan bahwa sebagian biayanya bersifat arsitektural, bukan melekat. Pertanyaan yang lebih sulit adalah apakah inferensinya seharusnya ada sama sekali.

## Miskonsepsi Umum

**"Pelacakan mata memberi tahu Anda di mana perhatian berada."** Ia memberi tahu Anda ke mana mata mengarah. Tatapan dapat berhenti pada sebuah slide sementara pembelajar memikirkan hal lain, dan ia dapat meninggalkan layar karena alasan yang tidak berkaitan dengan perhatian. Ukuran perhatian TutorLoop berkorelasi dengan pembelajaran pada r = 0.017, yang hampir tidak ada hubungan sama sekali ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**"Sinyal fisiologis adalah pembacaan langsung keadaan mental."** EDA mengindeks gairah simpatik, dan variabilitas detak jantung mengindeks pemulihan otonom. Tidak satu pun membedakan stres dari usaha dari kegembiraan. Model yang memprediksi nilai ujian dari EDA, gerakan, dan suhu kulit telah mempelajari tanda gairah tubuh, bukan pemahaman siswa ([[physiological-signals-exam-outcomes-ml|Yamazaki dan Rimal, 2026]]).

**"Akurasi klasifikasi yang tinggi berarti sistem mendeteksi keadaannya."** Akurasi bergantung pada label, pemisahan, dan laju dasar. Prediksi keakraban EEG turun dari 0.9853 menjadi 0.6038 F1 ketika validasi menghormati batas percobaan ([[eeg-familiarity-automated-assessment-2026|Nanayakkara dan Halloluwa, 2026]]). Angka 99.56% pengawasan mendeskripsikan himpunan skenario berlabel yang dibuat khusus, bukan ujian langsung ([[arif-automated-online-proctoring-yolov11-2026|Arif dkk., 2026]]).

**"Keterlibatan adalah satu hal, jadi satu skor dapat mewakilinya."** Konstruknya memiliki tiga untaian, dan sensor sebagian besar menjangkau yang pertama. E3Sense menemukan bahwa pembelajar mendefinisikannya melalui indikator kognitif, perilaku, dan emosional dalam proporsi berbeda, dan definisi-definisi itu mengubah prediksi ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan dkk., 2026]]). Satu angka menyembunyikan lapisan mana yang diukur.

**"Jika model adil pada pemisahan validasi, ia adil di ruang kelas."** Regularizer yang menyamakan kesalahan validasi antar kelompok gender membuat celah pada subjek yang ditahan lebih buruk ([[student-attention-estimation-fairness-2026|Fragkiadakis dkk., 2026]]). Keadilan adalah properti penerapan, bukan properti checkpoint.

## Konsep terkait
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Artikel terkait
- [[gaze-informed-ai-children]] — Narasi LLM yang dipicu tatapan menahan anak-anak pada wilayah bernarasi 6.48 s berbanding 1.67 s, tetapi studi itu mengukur perhatian alih-alih pemahaman (Wu dkk., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — EEG yang dipasang di kepala, pelacakan mata, dan EDA dahi memprediksi keterlibatan yang dinilai sendiri pada akurasi dalam satu tingkat 75.0% terhadap garis dasar 63.0% (Anupkrishnan dkk., 2026)
- [[engagement-assessment-video]] — EduGage menggabungkan tujuh aliran wearable dan kamera menjadi perkiraan keterlibatan tingkat segmen (MAE 0.81) dan berargumen untuk instrumentasi yang lebih ringan (Leng dkk., 2026)
- [[student-attention-estimation-fairness-2026]] — Model perhatian multimodal mencapai MAE 0.283, dan keuntungan keadilan validasinya berbalik pada subjek yang ditahan (Fragkiadakis dkk., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — AI wearable bersifat transparan ganda, sehingga pengecualian fisik gagal dan penegakan bergeser ke arah mengadili tubuh siswa (Corbin dkk., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — Lima belas model prediksi keakraban EEG turun dari 0.9853 menjadi 0.6038 F1 di bawah validasi independen dari percobaan (Nanayakkara dan Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — Gambar yang direkonstruksi EEG mengikuti kinerja tes pada R² = 0.79, dengan satu peserta berekonstruksi tinggi menjawab salah (Su dkk., 2026)
- [[physiological-signals-exam-outcomes-ml]] — Hutan acak memprediksi kategori nilai ujian dari EDA, gerakan, dan suhu kulit, sinyal yang mengindeks gairah alih-alih pemahaman (Yamazaki dan Rimal, 2026)
- [[affective-text-wearable-student-health]] — Pada 458 siswa pemakai Oura, register emosional alih-alih topik kekhawatiran mengikuti tidur dan variabilitas detak jantung (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — Tatapan kamera web menggerakkan umpan balik pembelajaran penguatan bagi 187 pembelajar; perhatian berkorelasi dengan pembelajaran pada r = 0.017 sementara beban kerja berkorelasi negatif (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — Fitur pose YOLOv11 menandai perilaku mencurigakan pada 99.56% di himpunan berlabel khusus, tanpa menguji kecurangan atau keadilan (Arif dkk., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — Konektivitas EEG menurun seiring dukungan menulis eksternal pada 54 peserta, membingkai ketergantungan sebagai utang kognitif yang terakumulasi (Kosmyna dkk., 2025)
- [[kim-ai-embodied-learning-review-2026]] — Pada 23 studi, peran penginderaan mendominasi pada 62.5% tag dan tidak ada sistem yang ditinjau menggabungkan aliran multimodal secara langsung (Kim dan Han, 2026)
