---
title: "Analitik Pembelajaran"
created: "2026-08-09T10:44:35-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/learning-analytics"
source_updated: "2026-11-08T09:30:45-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Analitik pembelajaran** — pengukuran, pengumpulan, analisis, dan pelaporan data tentang siswa dan konteksnya untuk tujuan memahami dan mengoptimalkan pembelajaran. AI telah mentransformasi analitik pembelajaran dari dasbor deskriptif menjadi sistem prediktif dan preskriptif.

## Pertanyaan untuk Dipertimbangkan

- Sebagian besar orang menganggap mengumpulkan lebih banyak data pembelajaran otomatis memperbaiki pendidikan. Halaman ini berargumen analitik menjadi bermakna hanya ketika ia mengalir balik ke dalam intervensi — jika tidak, ia hanya mendeskripsikan atau menandai tanpa mengubah pembelajaran. Di mana Anda pernah melihat data dikumpulkan yang tidak pernah mengarah ke tindakan apa pun?
- Bayangkan sebuah dasbor memberi tahu Anda bahwa seorang siswa 'berisiko' — sebuah prediksi. Apa yang memisahkan itu dari panduan yang benar-benar dapat ditindaklanjuti yang dapat dijalankan guru atau institusi? Halaman ini menyarankan prediksi saja tidak cukup.
- Halaman ini mencatat AI telah memindahkan analitik pembelajaran dari mendeskripsikan apa yang terjadi ke memprediksi apa yang akan terjadi dan meresepkan apa yang harus dilakukan berikutnya. Generasi mana dari ketiganya yang pernah Anda alami, dan apa yang hilang pada yang lain?
- Dalam satu studi, tiga model AI berbeda menghasilkan rencana dukungan yang sangat berbeda untuk data siswa yang sama, dan kaitan antara indikator analitik dan bantuan yang direkomendasikan sebagian besar lemah. Apa yang disarankan hal ini tentang mempercayai saran AI secara harfiah?
- Analitik pembelajaran berada dalam ketegangan privasi: makin rinci datanya, makin banyak yang terungkap — dan makin kuat intervensinya. Di mana Anda akan menarik garis tentang apa yang dikumpulkan tentang Anda atau siswa Anda, dan siapa yang harus memutuskan?

## Pendahuluan

### Analitik yang diperkaya AI

- **Analitik prediktif:** [[machine-learning|Pembelajaran mesin]] atas data interaksi siswa memprediksi luaran — dari [[at-risk-students-ml-prediction|identifikasi siswa berisiko]] hingga [[knowledge-tracing|estimasi keadaan pengetahuan]].
- **Validasi sama pentingnya dengan prediksi.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, dan Carvalho (2025)]] menunjukkan bahwa model keadaan pengetahuan prediktif (BKT, BKT-with-Forgetting, AFM) tampak akurat ketika dicocokkan secara retrospektif pada riwayat sesi penuh, namun di bawah **validasi silang berbasis waktu** — memprediksi sesi berikutnya dari sesi sebelumnya, sebagaimana analitik sesungguhnya diterapkan — model itu melebih-lebihkan kinerja siswa, melewatkan dinamika spasi/lupa, dan dapat salah mengurutkan kondisi latihan. Peringatannya bagi analitik: kesesuaian retrospektif dapat menutupi validitas prediktif maju yang buruk pada data longitudinal, sehingga model indikator dan dasbor harus divalidasi secara walk-forward.

- **Validasi pemetaan butir-atribut di balik estimasi.** Matriks Q yang menghubungkan butir ke atribut adalah asumsi, bukan data: entri yang ditolak untuk 14 dari 918 butir berpikir analitis, setelah dikoreksi, memangkas pola keadaan pengetahuan semu dari 14.2% menjadi 3.8% — jadi analitik penguasaan harus mengaudit matriks Q-nya, bukan hanya kesesuaian prediktifnya ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **Analitik prediktif berjangkar [[curriculum-design|kurikulum]]:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh dkk. (2026)]] mengestimasi keadaan pengetahuan dalam Pendidikan Berbasis Luaran dengan melacak luaran mata kuliah langsung dari data interaksi dan capaian LMS, memakai pemetaan afinitas OBE (relasi luaran mata kuliah–program) untuk menyusun kaitan konsep dan jaringan bertambah memori untuk memodelkan dampak lintas luaran — mencapai AUC 89.81% dan mengalahkan DKT, DKVMN, EKT, dan SimpleKT pada data teknik universitas yang hidup, sementara hanya kompetitif (tidak superior) pada data ASSISTments serbaguna.
- **Prediksi kemajuan yang dapat diinterpretasi dengan jendela tindakan:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] memprediksi kemajuan siswa tingkat modul dalam mata kuliah [[cs-education|pemrograman]] daring berskala besar dari fitur log interaksi konten, memakai pohon keputusan kotak-kaca yang menyamai akurasi kotak-hitam (85–91%) sambil menandai luaran putus "No submission" hingga 7–8 hari sebelum tenggat modul — jendela eksplisit dan waktu nyata untuk [[teacher-role|intervensi]] alih-alih bendera risiko telanjang, dan tipologi eksploratif profil tak-terlibat-berisiko, tak-terlibat-namun-berhasil, dan berkinerja tinggi yang terlibat.
- **Persetujuan tidak memprediksi pola keterlibatan.** Data jejak dari alat analitik yang dihadapkan ke siswa dalam mata kuliah pemrograman berbantuan GAI membagi 27 siswa menjadi Deep, Self-Oriented, dan Peer-Oriented Explorer plus profil Limited Explorer tahap akhir, namun persepsi yang menyenangkan terhadap asisten tidak berbeda signifikan lintas profil itu ([[sun-gai-learning-analytics-behaviors-2026|Sun dkk. (2026)]]).
- **Pemodelan risiko terfederasi dan terjelaskan lintas institusi (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch dkk. (2026)]] memperluas pemodelan risiko melampaui prediksi institusi tunggal dengan melatih model multitugas (kinerja + putus kuliah) lintas institusi tersimulasi via pembelajaran terfederasi, sehingga data siswa mentah tidak pernah meninggalkan masing-masing institusi. Di bawah heterogenitas terkendali (kemiringan label, ketidakseimbangan kelas, pergeseran temporal, ketiadaan struktural) model mempertahankan akurasi peringkat (AUC OULAD 0.918) dan peringkat kepentingan fitur yang stabil secara struktural, namun kalibrasi probabilistiknya bergeser — memisahkan kinerja peringkat dari keandalan probabilitas. Bagi sistem peringatan dini ini adalah peringatan bahwa intervensi berbasis ambang mungkin perlu kalibrasi per institusi, dan argumen untuk mengevaluasi analitik pada diskriminasi, kalibrasi, ketangguhan, dan keterjelasan sekaligus.

- **Validasi data sintetis adalah prasyarat bagi analitik yang menjaga privasi.** Pemeriksaan struktural atas versi sintetis empat kohort kebiasaan belajar tahunan (117-120 siswa selama delapan belas pekan) menemukan deskriptor partisi yang berdekatan pada dua dari empat kohort sementara variasi antarpekan 2.6 hingga 4.9 kali lebih rendah tanpa kecuali (koefisien variasi 0.086-0.152 berbanding 0.399-0.539 untuk kohort nyata), dan hanya 36% temuan yang dicapai pada data pilot sintetis terkonfirmasi pada data nyata di antara dua puluh lima permintaan validasi ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).
- **Analitik keterlibatan:** [[student-engagement|Pengukuran keterlibatan]] dan [[engagement-intensity-learner-modeling|pemodelan intensitas]] mengukur bagaimana siswa berinteraksi dengan sistem AI.
- **Tingkat penyelesaian dapat menyembunyikan keruntuhan keterlibatan.** Dalam uji [[higher-ed|universitas]] teracak kelompok, [[intelligent-tutoring|tutor AI]] terintegrasi mata kuliah tidak mengubah pengumpulan pekerjaan rumah sementara partisipasi platform turun tajam — kunjungan halaman sebesar 0.37 simpangan baku, hari aktif sebesar 0.51 — sehingga sinyal analitik yang penting adalah aktivitas yang digantikan alat itu, bukan metrik penyelesaian yang tetap datar ([[liu-course-integrated-ai-tutoring-rct-2026|Liu dkk. (2026)]]).
- **Analitik umpan balik:** [[teaching-feedback-classification-benchmark|Klasifikasi umpan balik]] dan [[ai-feedback-quality|penilaian kualitas]] menganalisis umpan balik yang diterima siswa.
- **Analisis jaringan:** [[misiejuk-cognitive-offloading-prompting-2026|Analisis Jaringan Ko-Okurensi]] dan [[epistemic-emotions-collaborative-problem-solving|analisis jaringan epistemik]] mengungkap pola interaksi.
- **Ketegangan privasi:** kekhawatiran [[privacy]] tumbuh seiring analitik menjadi lebih rinci dan digerakkan AI.
- **Kerangka tinjauan tata kelola untuk data siswa.** LEAGUE mengusulkan enam pilar — Lawfulness, [[equity-in-ai-education|Equity]], Agency, Governance, Utility, dan Ethics by Design — memperlakukan kepatuhan FERPA dan GDPR sebagai lantai dan merekomendasikan penilaian ulang terjadwal seiring model bergeser ([[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar (2026)]]).

Sensor dan analitik tatapan adalah keluarga instrumen kedua yang memasok model pembelajar yang sama, dengan menarik pelacakan mata, EEG, aktivitas elektrodermal, dan detak jantung untuk mengestimasi perhatian, keterlibatan, dan beban kognitif ([[sensor-and-gaze-analytics]]). Masalah validitas dan persetujuannya lebih curam daripada data jejak, karena pengukurannya biometrik dan langkah dari tubuh ke keadaan mental merupakan sebuah interpretasi.


**Modelkan konkurensi mata kuliah, bukan hanya urutan.** TRACE memberi setiap mata kuliah dalam satu semester pengodean posisional yang sama, dan memprediksi mata kuliah dan nilai secara bersama memangkas galat prediksi nilai menjadi MAE 0.1339 — pengurangan 46.4% dibandingkan transformer nilai-saja — pada sepuluh tahun data institusional ([[trace-course-grade-prediction-2026|Savala (2026)]]).


**Data interaksi adalah masalah representasi sebelum menjadi masalah pemodelan.** [[taufer-human-ai-interaction-haidl-2026|Taufer dkk. (2026)]] memperlakukan setiap pertukaran manusia-AI sebagai satu rekaman terstruktur yang membawa komputasi yang memotivasi permintaan, permintaan, respons, umpan balik pengguna, dan eksekusi berikutnya, alih-alih sebagai prompt terisolasi. Di antara 140 pasangan siswa-tugas dalam penerapan 35 siswa, jumlah interaksi saja berkorelasi dengan sel yang berhasil dieksekusi pada r = 0.12, dan panggilan yang sama bisa berupa pemulihan galat, langkah berikutnya, pemeriksaan konsep, atau validasi tergantung keadaan di sekitarnya. Tiga puluh tujuh pasangan yang memiliki akses tidak menghasilkan interaksi sama sekali, sehingga ketiadaan penggunaan AI dalam log tidak dapat dibaca sebagai ketiadaan kebutuhan.

### Siklus analitik pembelajaran

Analitik pembelajaran secara kanonis dibingkai sebagai siklus yang dimulai dari aktivitas siswa yang menghasilkan data, yang diproses menjadi ukuran dan indikator yang lalu diterjemahkan menjadi **intervensi** — dan intervensi itu mengalir balik ke aktivitas siswa untuk menutup loop. Langkah intervensi inilah yang membedakan analitik dari pemantauan atau prediksi semata: tanpanya, analitik mendeskripsikan dan menandai tetapi tidak pernah mengubah pembelajaran. Siklus ini adalah kerangka pengorganisasi untuk memahami di mana alat AI (dasbor, pembangkit umpan balik, perekomendasi preskriptif) berada dalam pipeline dan langkah mana yang mereka otomasi.

Dasbor yang dihadapkan ke siswa hanya sebaik jangkauannya: dalam studi menulis kelas 9 di Hong Kong, pengklasifikasi prompt mencapai F1 makro 0.757, sekitar sepertiga dari 46 siswa membuka ketiga dasbor penggunaan GenAI dan perbedaan kelompok dalam penyalinan serta [[prompt-engineering|pemberian prompt]] berorientasi belajar tidak reliabel ([[learning-analytics-genai-secondary-writing-2026|Fong dkk. (2026)]]).

Pengodean frekuensi atas data [[qualitative-research|kualitatif]] adalah titik masuk, bukan vonis: dalam studi sepuluh partisipan, sebagian instruktur membaca pengodean frekuensi sebagai jalan masuk yang produktif sementara yang lain memperingatkan bahwa itu mengaburkan respons yang jarang namun kritis, sehingga desainnya menjaga setiap pandangan agregat terhubung kembali ke teks siswa verbatim ([[wordstream-glass-learning-analytics|Nguyen dkk. (2026)]]).

### Dari deskripsi ke intervensi
- **Basis bukti belum merupakan bukti intervensi.** Dengan menyintesis empat studi lintas tingkat siswa, disiplin, pendidik, dan institusi, [[learning-analytics-genai-learning-design|Rienties, Divjak dan Law (2026)]] menemukan bidang ini didominasi desain lintas-seksi, [[self-report-measures|laporan diri]], berbasis wacana, dan pertimbangan ahli, dan menyerukan penelitian intervensi yang menguji mekanisme kausal serta luaran jangka panjang yang distribusional.

**Desain dorongan acak menyediakan jangkar kausal.** Dalam eksperimen dorongan acak pada ASSISTments, [[lim-assignment-report-intelligent-tutoring-randomized-encouragement-2025|Lim, Heffernan & Sales (2025)]] secara acak mendorong guru yang baru mengenal platform untuk melihat laporan tugas setelah membuat tugas. Di antara sampel analitik 330 guru (156 kontrol, 174 dorongan; 281 untuk value-added), melihat laporan tugas pertama secara signifikan meningkatkan penyelesaian tugas berikutnya (Anderson-Rubin F = 4.092, p = 0.044) — setidaknya 2 poin persentase secara keseluruhan. Di kelas dengan kurang dari 44 siswa, keuntungannya setidaknya 24.5 poin persentase (AR F = 7.475, p = 0.007), sementara hanya 54.0% dari 121,890 tugas yang laporannya dilihat dan luaran mulai serta value-added tidak bergerak. Data platform yang sama membawa kasus penilaian loop-tertutup terbesar di bidang ini: [[johnson-student-ratings-automatically-generated-questions-2025|Johnson et al. (2025)]] menganalisis 5,214,211 sesi pertanyaan-siswa di mana jempol ke bawah (2.00 per 1,000) mengikuti fitur yang dikendalikan generator dan varians tingkat siswa mendominasi varians tingkat pertanyaan (BIC 101,572.9 vs 123,342.0).


Analitik pembelajaran telah berevolusi melalui tiga generasi di basis pengetahuan: deskriptif (apa yang terjadi?), prediktif (apa yang akan terjadi?), dan preskriptif (apa yang harus kita lakukan?). AI memungkinkan lapisan preskriptif — analitik yang langsung memicu [[feedback|intervensi instruksional]]. Frontir kunci adalah **kesenjangan keterlaksanaan**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]] menunjukkan prediksi saja tidak cukup untuk dukungan keputusan, dan bahwa recourse kontrafaktual menjadi bermakna secara operasional hanya ketika rekomendasi layak secara semantik dan dapat diperiksa mesin — dibatasi oleh waktu, anggaran, ketakberubahan, dan ketersediaan via validasi SHACL, alih-alih semata valid secara model. Ini memindahkan bidang melampaui skor risiko menuju rekomendasi yang benar-benar dapat dijalankan institusi, dengan [[human-in-the-loop-ai|pengawasan manusia]] tetap terjaga.

Uji empiris langsung atas lapisan preskriptif datang dari [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas dkk. (2026)]], yang meminta tiga LLM merekomendasikan rencana dukungan untuk 4,500 vinyet [[simulating-students|siswa sintetis]].

Uji pelengkap yang berpusat pada guru tentang bagaimana analitik mencapai ruang kelas datang dari [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain dkk. (2026)]], yang merancang dasbor analitik pembelajaran (DashED) untuk mengomunikasikan profil [[self-regulated-learning]] turunan ML kepada guru di dua konteks campuran. Studi mereka dengan 100 guru menunjukkan bahwa *penyajian* analitik sendiri merupakan hambatan bagi tindakan: guru secara sistematis lebih menyukai bagan yang lebih sederhana dan lebih tradisional (plot batang, bagan pai) bahkan ketika desain yang lebih kompleks (misalnya heatmap) menghasilkan wawasan yang lebih kaya, dan [[visualization|literasi visualisasi]] yang lebih tinggi memprediksi interpretasi yang lebih dalam dan lebih rinci (misalnya lebih banyak guru mengidentifikasi tren pada data deret waktu). Untuk perbandingan kelompok, guru lebih menyukai superposisi daripada jukstaposisi dan plot informasi penuh daripada pengodean perbedaan eksplisit. Tindakan yang diusulkan guru dibentuk oleh konten yang direpresentasikan dan tingkat [[teacher-role]] mereka alih-alih oleh jenis plot — guru universitas lebih menyukai ujian mingguan dan adaptasi tingkat mata kuliah, sementara guru vokasi mengusulkan pembimbingan individual yang langsung — sehingga langkah preskriptif bergantung sama besar pada bagaimana analitik divisualisasikan dan pada modelnya. Temuan mereka bersifat memperingatkan: korelasi antara indikator LA dan dukungan yang direkomendasikan sebagian besar lemah, rekomendasi lintas model menyimpang tajam untuk siswa yang sama, dan dukungan sering dialokasikan tanpa memandang siapa yang paling membutuhkannya. Para penulis menyimpulkan bahwa LLM saat ini **belum andal sebagai model preskriptif untuk dukungan siswa dalam skala besar**, memperkuat bahwa langkah preskriptif masih menuntut validasi, [[llm-training-and-fine-tuning|penyetelan halus]], dan pengawasan manusia alih-alih otomasi siap pakai.

Langkah setelah skor — siapa yang mendapat dukungan, dan apakah dukungan itu dialokasikan di tempat yang membutuhkannya — menjadi milik [[student-support-and-success|dukungan dan keberhasilan siswa]], yang membawa bukti penjangkauan, rujukan, dan alokasi yang menjadi masukan lapisan preskriptif halaman ini.

Luaran integritas masuk ke lapisan prediktif yang sama. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] memprediksi risiko kecurangan berbantuan AI dari delapan pekan pertama jejak [[video-education|Moodle dan pemutar video]], mencapai AUC 0.763 dengan regresi logistik, dan berargumen sinyalnya dapat dipakai justru karena tiba sebelum ujian alih-alih selama ujian.
Garis pelengkap menyasar *interpretasi* analitik itu sendiri. Kerangka FACTRIA dari [[factria-responsible-institutional-analytics-2026|Marques dkk. (2026)]] mengorganisasi faktor-faktor pembias di balik suatu indikator - pipeline, institusional, mata kuliah, dan demografis - dan chatbot yang mendorong refleksi menaikkan subfaktor yang ditimbang 11 pemangku kepentingan per kasus dari 1.41 menjadi 3.45 (d = 2.15), menggeser mereka dari pembacaan langsung ke pembacaan bersyarat.

### Metode dan analisis jaringan

Metode jaringan adalah inti analitik pembelajaran: [[network-analysis|analisis jaringan transisi (TNA)]] memodelkan urutan temporal tindakan siswa (misalnya loop revisi dan obrolan dalam penulisan berperancah [[conversational-ai|chatbot]]), dan [[network-analysis|analisis jaringan epistemik (ENA)]] memetakan bagaimana kode/konstruk berko-okurensi lintas aktivitas — bersama-sama mengungkap *proses* belajar dan [[student-ai-interaction|interaksi siswa-AI]] alih-alih hanya produknya.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Pengelompokan clickstream dalam pembangunan model mandiri.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] menggabungkan [[pedagogical-patterns|analisis urutan aktivitas]], pengelompokan hierarkis, dan model rantai Markov pada clickstream 315 siswa daring yang membangun 822 model ekologis di VERA, menyaring sembilan klaster perilaku berbasis transisi yang halus menjadi tiga pola lebih luas (Observation, Construction, Exploration). Karya mereka menunjukkan bahwa menggabungkan analisis urutan dengan pemodelan rantai Markov dapat mengungkap perilaku bermakna dalam tugas tak terstruktur dan [[self-directed-learning|mandiri]] bahkan tanpa data demografis atau kontekstual sama sekali.

- **LA dan GenAI membentuk desain pembelajaran secara berbeda (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen dkk. (2026)]] memakai ENA pada 11 grup fokus instruktur untuk membandingkan bagaimana analitik pembelajaran versus [[generative-ai]] menginformasikan pengambilan keputusan [[learning-design]]. Diskusi LA berpusat pada informasi kontekstual, desain tingkat mata kuliah, dan [[problem-solving]] kreatif (LA untuk mendiagnosis keterlibatan dan menargetkan dukungan), sementara diskusi GenAI berpusat pada [[assessment|desain penilaian]] dan desain untuk [[self-determination-theory|determinasi diri]] siswa (GenAI untuk ideasi dan pengembangan penilaian). Konteks dan [[creativity]] menjadi sentral pada keduanya — pengingat bahwa analitik menginformasikan desain hanya dalam konteks [[pedagogy|pedagogis]] dan otonomi instruktur.
- **Obrolan mengalahkan fusi ketika konstruknya sosial, dan sumber terbaik bersifat per konstruk.** Alih-alih memaksimalkan modalitas, perbandingan LAK26 atas lima konfigurasi fitur pada segmen pemodelan kolaboratif menemukan embedding teks-saja paling kuat secara keseluruhan (ROC AUC rata-rata 0.650, 95% CI 0.615 hingga 0.685) berbanding teks plus log (0.613) dan teks plus log dengan jendela konteks (0.623). Log sendiri bernilai 0.526, mendekati kebetulan untuk konstruk sosial, namun hanya sumber itu yang memperbaiki deteksi refleksi (0.5862), sementara perencanaan bergantung pada obrolan di sekitarnya alih-alih pada jejak lingkungan. Pilihan fitur adalah klaim tentang konstruk, bukan keputusan anggaran ([[zhang-llm-detection-ssrl-collaborative-modeling-2026|Zhang dkk., 2026]]).
- **Jejak perilaku bukan ukuran keadaan kognitif — terutama bagi siswa berkebutuhan khusus.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou dkk. (2026)]] memperingatkan bahwa jejak interaksi (waktu mengerjakan tugas, galat berulang, [[help-seeking]], kemajuan tak teratur) dapat membantu guru menemukan di mana siswa membutuhkan dukungan, tetapi bukan ukuran transparan atas keadaan internal: respons lambat dapat mencerminkan pemikiran hati-hati, pemrosesan bahasa, distraksi, desain yang tak aksesibel, atau kesulitan teknis. "Algoritma tidak boleh menyimpulkan defisit eksekutif atau status diagnostik dari data perilaku semata" — analitik dapat dipertahankan sebagai salah satu sumber informasi dalam penilaian profesional dan dialog dengan siswa.

- **Analitik desain: menambang urutan aktivitas terencana alih-alih jejak (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec dan Horvat (2026)]] menerapkan rantai Markov dan penambangan pola sekuensial pada urutan *terancang* 29,064 aktivitas pengajaran dan pembelajaran di 554 mata kuliah yang direncanakan dalam alat desain pembelajaran terbuka. Matriks transisi memuncak pada Assessment ke Discussion (0.332), transisi diri mendominasi Practice (0.317) dan Acquisition (0.292), dan aturan berurutan terkuat adalah Acquisition ke Assessment ke Practice ke Practice (keyakinan 0.743, lift 1.449), sementara jalur empat langkah tersering adalah Acquisition, Practice, Practice, Assessment (120 kemunculan). Discussion dan Assessment adalah jenis paling terjangkau dan Production paling jauh dan sporadis. Studi ini adalah pengingat bahwa analitik pembelajaran tidak harus dimulai dari jejak LMS: data waktu-desain dapat memaparkan tata bahasa pedagogis suatu mata kuliah sebelum siswa mana pun datang, meski penulis menekankan bahwa kemiripan dengan desain flipped, berbasis inkuiri, atau [[project-based-learning|berbasis proyek]] bukan bukti adanya niat.

- **LLM terdistilasi yang menjelaskan diri (2026):** Pipeline dua tahap mendistilasi estimator analitik pembelajaran kotak-hitam dan interpretasi pasca-hoc-nya ke dalam [[llm]] kecil berbobot terbuka yang mengembalikan estimasi tingkat individu sekaligus penjelasan bahasa alami. Audit yang mengutamakan kesetiaan mengevaluasi apakah narasi cocok dengan atribusi yang dideskripsikannya; [[simulation]] menunjukkan pemulihan nyaris tanpa rugi (r > .90) dengan mentor oracle, menawarkan jalur yang lebih transparan dan dapat diterapkan bagi analitik ([[distilling-self-explaining-lm-learning-analytics-2026]]).

- **Pemungkin intervensi pendidikan berbasis LA (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]] mengidentifikasi dan memprioritaskan tujuh pemungkin intervensi pendidikan berbasis LA yang dapat dipercaya via Delphi + AHP + SNAP: orientasi strategis [[governance|institusional]], landasan pedagogis & [[research-methods-aied|penelitian]] lainnya, sumber daya tersedia, dukungan pedagogis, etika & tata kelola data, keterlibatan pemangku kepentingan, dan penjaminan mutu. Orientasi strategis institusional menempati peringkat tertinggi (dan paling berpengaruh terhadap pemungkin lain), dengan sumber daya tersedia kedua. [[trust|Keterpercayaan]] (kepatuhan etis, algoritma transparan/tak bias, validitas pedagogis) dibingkai sebagai prasyarat yang tanpanya intervensi berbasis LA tidak bermakna.
- **Kedalaman interaksi LLM memprediksi kualitas tugas tetapi bukan ingatan (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] menghubungkan telemetri percakapan LLM tingkat giliran (Depth/Volume/Pacing) dengan [[learning-gains|luaran belajar]]: "kedalaman" pencarian penjelasan memprediksi kualitas tugas yang dinilai secara independen (β = 6.27) tetapi bukan ingatan segera — disosiasi antara pemahaman yang digerakkan elaborasi dan konsolidasi yang digerakkan pengambilan, yang berimplikasi bagi cara interaksi [[llm]] diukur dan dievaluasi dalam LA.


- **Satuan interaksi bersama masih hilang.** Di antara 46 kategorisasi dari 33 studi tidak ada metakarakteristik bersama — label yang serupa menamai fenomena berbeda — sehingga tinjauan itu mengusulkan *episode interaksi*, pertukaran terbatas yang berorientasi tujuan, sebagai satuan untuk mengorelasikan dialog dengan perolehan keterampilan ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).
- **Mensimulasikan wacana kolaboratif untuk analitik pembelajaran.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]] memakai agen LLM spesifik-partisipan yang disetel halus untuk mereproduksi dialog pemecahan masalah kolaboratif, divalidasi dengan Analisis Jaringan Epistemik (jarak ENA 0.17, p permutasi = 0.65). Pendekatan ini menawarkan peneliti analitik pembelajaran cara berskala untuk menghasilkan wacana kolaboratif autentik guna mempelajari dinamika interaksi, pergantian giliran, dan lintasan kode tematik tanpa mengumpulkan data manusia baru.
- **Data terbuka dan terproduksi ulang, serta analitik siap-jejak.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] merilis [[benchmark]] sintetis dengan skema siap-jejak (N=540; 360 sesi; 1.440 episode) untuk menganalisis interaksi dan keseimbangan partisipasi dalam pemrograman kolaboratif. Data log dan jejak adalah penyeimbang alami bagi [[self-report-measures|laporan diri]] dalam literatur ini: konstruk yang sama sering diukur dua kali, sekali dengan bertanya dan sekali dengan mengamati, dan keduanya tidak selalu sepakat. Secara terpisah, kerangka ML eksploratif dengan analisis SHAP mengidentifikasi konstruk terkait belajar yang paling terkait dengan niat penggunaan ChatGPT akademis di kalangan mahasiswa, mengutamakan [[explainable-ai|keterjelasan]] ([[determinants-chatgpt-use-higher-education-2026]]).
- **Infrastruktur analitik yang dapat dipakai ulang, tervalidasi hanya secara internal (2026).** [[a4l-analytics-pipeline|Bai dkk. (2026)]] mereproduksi temuan terbitan dari tiga asisten AI Georgia Tech dengan mengubah nilai konfigurasi alih-alih kode, meski klaimnya bersandar pada analisis ulang kumpulan data institusi tunggal yang ada dan satu perluasan kemampuan dilakukan oleh orang dalam.

### Koneksi

Analitik pembelajaran terhubung ke [[knowledge-tracing]] (analitik intinya), [[formative-assessment]] (penilaian yang digerakkan analitik), [[student-modeling]] (representasi siswa yang diisi analitik), [[privacy]] (kendala [[ethics|etis]]), dan [[edtech-platform]] (tempat analitik diterapkan). Karena analitik preskriptif makin dievaluasi pada [[simulating-students|siswa tersimulasi]] — ketika kohort siswa sintetis menggantikan kohort nyata dalam uji terkendali — analitik pembelajaran juga terhubung ke simulasi siswa.

- **Apa yang dibuat terlihat dasbor menentukan apa yang ditindaklanjuti guru.** [[ai-supported-lecturer-decision-making-2026|Köroğlu dkk. (2026)]] meninjau 27 studi empiris (2016–2025) dan membangun taksonomi sosioteknis pengambilan keputusan dosen berbantuan AI lintas delapan jenis keputusan: instruksional, kurikulum, penilaian, umpan balik, lingkungan belajar, emosional, administratif, dan etis. Dasbor Analitik Pembelajaran adalah sistem yang paling sering dilaporkan, dan pengodean menunjukkan dukungan terkonsentrasi pada keputusan instruksional, umpan balik, dan penilaian yang dapat diinformasikan data teks perilaku dan log, sementara keputusan emosional, etis, kurikulum, dan lingkungan belajar jarang didukung. Para penulis membacanya sebagai efek perhatian alih-alih batas kemampuan: karena sistem menampilkan data perilaku siswa secara terlihat dan dapat ditindaklanjuti, persoalan motivasi, [[metacognition]], emosi, dan lingkungan jatuh di luar apa yang data ajak untuk dipertimbangkan dosen.

- **Mengubah analisis AI menjadi percakapan kelas itu sendiri merupakan keterampilan guru.** Dalam empat pelajaran matematika menengah, 47 orkestrasi seluruh kelas oleh seorang guru mengubah keluaran dasbor menjadi argumentasi kolektif dengan memilih dan mengurutkan jaminan siswa, dan studi itu menamai empat jenis berulang ([[ai-integrated-math-argumentation-teacher-noticing-2026|Lee, Park dan Lee (2026)]]).

- **Analitik yang meringankan beban guru bukan analitik yang meringankan beban siswa.** Dalam tinjauan 23 studi AI dalam [[embodied-learning|pembelajaran terwujud]], 62.5% dari 40 tag peran adalah peran pengindraan yang menilai gerakan, lintasan, atau artefak — pekerjaan yang biasanya jatuh ke guru — dan penulis memperingatkan bahwa berkurangnya beban kerja guru tidak boleh dibaca sebagai berkurangnya beban siswa. Alasan mereka adalah batas atas apa yang dapat ditunjukkan pengodean semacam ini: merekam fungsi yang dijalankan sistem tidak mengatakan apa pun tentang efeknya pada siswa, sehingga frekuensi peran tidak dapat memutuskan apakah sistem membebaskan kognisi atau memperdalamnya ([[kim-ai-embodied-learning-review-2026|Kim dan Han (2026)]]).

Instrumentasi tingkat proses adalah langkah turun berikutnya dari lapisan deskriptif. [[pulla-parsons-problem-tool-2026|Prol dkk. (2026)]] memperluas platform soal Parsons [[open-source]] untuk merekam setiap penempatan, penghapusan, dan pengumpulan blok sebagai jejak kronologis, memasangkan setiap pengumpulan dengan pewarnaan kebenaran per blok dan riwayat percobaan, serta secara opsional melewatkan jejak itu melalui pipeline [[llm]] yang melabeli pola kesulitan berulang untuk ditinjau instruktur. Di antara 68 siswa dalam mata kuliah desain perangkat lunak Java tingkat atas dan 36 siswa dalam mata kuliah Python pengantar, analisis itu memunculkan tiga kesulitan yang sama — memilih jenis eksepsi yang salah, mengganti `return` dengan `throw`, dan urutan aliran kendali yang salah — yang tidak dapat dipaparkan oleh hitungan kebenaran-dan-percobaan, karena keduanya menjawab *apakah* susunannya benar alih-alih *apa prosesnya*. AI bertindak sebagai penafsir bagi [[teacher-role|instruktur]] alih-alih penilai siswa, dan keluarannya dibingkai sebagai hipotesis yang dapat ditinjau tentang kesulitan suatu kelas alih-alih sebagai nilai.

- **Dinding sistem pembelajaran: data log tidak digeneralisasi lintas platform.** MATHia, i-Ready, dan IXL masing-masing mendefinisikan bahkan konstruk dasar — "percobaan", "petunjuk" — secara berbeda, sehingga model tidak dapat bertransfer di antaranya. Respons yang masih dalam pengerjaan menyerang masalah dari sisi video: pipeline Gemini mendistilasi rekaman layar pembimbingan menjadi satu transkrip skenario yang diselaraskan dengan log MATHia asli sebagai kebenaran acuan. Apa yang dipulihkan video yang tidak dilakukan satu aliran pun: [[scaffolding]] papan tulis, kerja kalkulator senyap di alat eksternal, dan konteks di luar layar yang oleh log asli direduksi menjadi "kemalasan". Tantangan terbuka tetap ada pada penjangkaran temporal, pergeseran jam, dan pemisahan peristiwa platform dari proses belajar lain. ([[thomas-breaking-learning-system-wall-2026]])
- **Log interaksi dapat kalah dari garis dasar konstan.** Fitur tingkat semester dari 16,851 pertukaran tutor LLM mengalahkan prediktor median skor tugas sebesar 0.114 poin, interval yang melewati nol, dengan 62.1% galat di kuartil terendah ([[llm-tutoring-interaction-predictive-value-2026|Dong dkk. (2026)]]).

Dasbor dan sistem peringatan dini memusatkan risiko [[automation-bias]]: sebuah tanda menegaskan penilaian yang mungkin diterima orang karena ia ada, bukan karena ia diperiksa.

Menahan indikator multimodal tetap konstan dan hanya menambahkan penjelasan naratif meningkatkan interpretasi calon guru (η² = 0.166) dan konstruksi makna (η² = 0.220), sementara transformasi yang dapat ditindaklanjuti tidak bergerak — lapisan interpretasi, bukan datanya, adalah hambatannya ([[liu-teaching-analytics-dashboard-2026|Liu et al., 2026]]).


## Miskonsepsi Umum

- **"Estimasi keadaan pengetahuan mewarisi validitasnya dari data."** **Matriks Q yang menghubungkan butir ke atribut adalah asumsi, bukan data**: entri yang ditolak untuk **14 dari 918 butir yang dianalisis** berarti pemetaannya sendiri menuntut adjudikasi. Memvalidasi pemetaan adalah langkah, bukan formalitas.
- **LLM membaca clickstream terhadap strategi belajar bernama.** [[radmehr-clicksight-clickstream-learning-strategies-2026|Radmehr dkk. (2026)]] menyiapkan pipeline [[llm|LLM]] yang menemukan bukti suatu strategi dalam jejak siswa, menilai kepatuhannya, dan mengutip tindakan di balik penilaian itu, mencapai kualitas keseluruhan 0.735 dalam simulasi yang lebih sulit berbanding 0.704 untuk garis dasar datar.
- **"Analitik membutuhkan jejak clickstream."** Keadaan pengetahuan dapat diestimasi dalam Pendidikan Berbasis Luaran dengan **melacak luaran mata kuliah langsung dari data interaksi dan capaian LMS**, memakai pemetaan afinitas OBE — rekaman institusional menyediakan sinyalnya.
- **"Prediksi tanpa jendela tindakan itu berguna."** Prediksi kemajuan paling bisa dipakai ketika **dapat diinterpretasi dan dipasangkan dengan jendela tindakan**: [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries dan Koprinska (2025)]] memprediksi luaran tingkat modul, yaitu bentuk yang dapat ditindaklanjuti penasihat, berbeda dari skor mentah.

## Konsep terkait

- [[explainable-ai]]

- [[automation-bias]] — Mengapa tanda yang ada ditindaklanjuti tanpa diperiksa

- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — sisi dukungan yang menjadi sasaran prediksi: rujukan, alokasi, dan luaran yang mereka gerakkan atau tidak gerakkan

- [[sensor-and-gaze-analytics]]


## Artikel terkait
- [[radmehr-clicksight-clickstream-learning-strategies-2026]] — ClickSight: menafsirkan clickstream melalui strategi belajar yang didefinisikan literatur (Radmehr dkk. 2026)

- [[taufer-human-ai-interaction-haidl-2026]] — Pertukaran manusia-AI sebagai rekaman terstruktur: jumlah prompt nyaris tidak membawa sinyal tentang kemajuan
- [[ai-integrated-math-argumentation-teacher-noticing-2026]] — Menyadari dan mengorkestrasi analisis AI menjadi argumentasi kolektif (Lee, Park & Lee 2026)
- [[factria-responsible-institutional-analytics-2026]] — Analitik Institusional yang Bertanggung Jawab: Menafsirkan Bias dengan Dukungan AI

- [[ai-supported-lecturer-decision-making-2026]] — Pengambilan Keputusan Dosen Berbantuan AI di Pendidikan Tinggi
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analitik pembelajaran terfederasi dan terjelaskan untuk pemodelan risiko akademik yang menjaga privasi (Villegas-Ch dkk. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Apa yang ditanyakan siswa itu penting: kedalaman interaksi LLM, kualitas tugas, dan ingatan segera (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — Dari analitik pembelajaran ke intervensi pendidikan: pemungkin intervensi berbasis LA yang dapat dipercaya (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA dan GenAI dalam pengambilan keputusan desain pembelajaran
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — Dari Prediksi Risiko Siswa ke SC2R: Recourse Kontrafaktual
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnosis kognitif Bayesian untuk jalur pembelajaran personal
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Mendistilasi LM yang menjelaskan diri untuk analitik pembelajaran
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Dapatkah AI memberikan dukungan yang tepat bagi profil siswa yang beragam? Evaluasi berskala besar
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Agen LLM spesifik-partisipan yang disetel halus mereproduksi dialog pemecahan masalah kolaboratif (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Tolok ukur sintetis ASTRA untuk pembimbingan multiagen dan kolaborasi dengan partisipasi seimbang
- [[determinants-chatgpt-use-higher-education-2026]] — Determinan ML/SHAP penggunaan ChatGPT di masa depan dalam pendidikan tinggi
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Membuat temuan ML dapat diakses guru di ruang kelas campuran
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Pelacakan pengetahuan berbasis luaran dengan pemetaan afinitas
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Rantai Markov dan penambangan pola atas 29,064 aktivitas terencana di 554 mata kuliah, mengungkap tata bahasa desain yang dipimpin Acquisition dan mengonsolidasikan Practice
- [[pulla-parsons-problem-tool-2026]] — Pulla: pelacakan perilaku tingkat proses dan analisis kesulitan untuk instruktur pada soal Parsons (Prol dkk. 2026)
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Menggunakan Analitik Pembelajaran untuk Mendukung Penulisan Siswa Sekolah Menengah dengan AI Generatif
- [[edtech-privacy-deferral-2026]] — "Kita Perbaiki Nanti": Pendidikan, AI, dan Penundaan Privasi Siswa di EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Dilewatkan Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Memprediksi risiko kecurangan berbantuan AI dari jejak LMS awal semester (AUC 0.763)
- [[thomas-breaking-learning-system-wall-2026]] — Menuju pematahan dinding sistem pembelajaran menggunakan transkripsi pembimbingan multimodal (Thomas dkk. 2026)
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Tingkat penyelesaian dapat menyembunyikan keruntuhan keterlibatan
- [[kim-ai-embodied-learning-review-2026]] — AI dalam pembelajaran terwujud sebagian besar mengamati: peran pengindraan 62.5% dari tag peran terkode, dan tak satu pun sistem yang ditinjau memadukan aliran multimodal saat siswa memakainya (Kim & Han 2026)

- [[liu-teaching-analytics-dashboard-2026]] — Studi mikroteaching kontrol aktif yang mengisolasi lapisan penjelasan: interpretasi bergerak, tindakan tidak (Liu dkk. 2026)

