---
title: "Dukungan dan Keberhasilan Siswa"
created: "2026-10-01T20:31:35-04:00"
type: concept
foundations: [ai-education, human-ai-collaboration]
pedagogy: [help-seeking, student-experience, student-engagement]
technology: [learning-analytics, conversational-ai, machine-learning, student-modeling, recommender-systems-and-learning-paths, generative-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
institutions: [change-management, educational-policy-ai, governance]
ethics: [equity-in-ai-education, privacy]
audience: [administrators, institutions, researchers, instructors]
level: [higher ed, undergraduate]
confidence: high
connected_faqs: [ai-agents-support-students-instructors, institutional-ai-policy]
updated: "2026-11-08T14:09:36-05:00"
translation_of: "concepts/student-support-and-success"
source_updated: "2026-11-07T14:45:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Dukungan dan Keberhasilan Siswa** — kerja sisi institusi untuk membantu siswa bertahan, maju, dan menyelesaikan studi: **bimbingan akademik, bantuan administratif, penjangkauan, rujukan, dan alokasi dukungan yang langka**. Ini adalah halaman untuk apa yang *dilakukan* institusi kepada siswa alih-alih apa yang terjadi *di dalam* suatu mata kuliah. [[higher-ed|Pendidikan Tinggi]] adalah payung yang lebih luas bagi sektornya dan [[student-experience]] mencakup bagaimana AI mendarat pada pengalaman siswa sendiri; [[learning-gains]] mengukur apakah pembelajaran terjadi. Temuan khas dalam basis pengetahuan ini adalah bahwa dukungan AI secara andal menggerakkan **penyelesaian tugas** — tindakan biner bertanggal yang dikendalikan siswa dan dapat diamati institusi — sementara membiarkan **persistensi, kredit, dan kelulusan** sebagian besar tidak tersentuh. Memisahkan hasil-hasil itu adalah inti halaman ini.

## Pertanyaan yang Perlu Dipertimbangkan

- Hasil mana yang ingin Anda gerakkan? Pengingat pendaftaran dan program retensi adalah intervensi berbeda dengan bukti berbeda, dan penelitian di sini menunjukkan yang satu tidak membeli yang lain.
- Jika sebuah model menandai siswa berisiko, apa yang terjadi selanjutnya? Siapa yang bertindak, dengan kapasitas apa, dan apa yang akan membuat rekomendasi itu layak dijalankan alih-alih sekadar akurat?
- Kapasitas dukungan terbatas. Ketika AI memeringkat atau mengalokasikannya, apa dampaknya bagi siswa yang tetap akan diperhatikan oleh penasihat manusia?
- Siapa yang bertanggung jawab ketika pesan otomatis, rujukan, atau skor risiko salah? Siswa melihat konsekuensinya; institusi memiliki sistemnya.
- Apakah data dukungan Anda berpindah? Berbagi lintas kantor adalah yang memungkinkan penargetan dan juga alasan paling umum penargetan diam-diam berhenti.

## Pendahuluan

Dukungan siswa berada di sisi institusional dari hubungan itu. Pekerjaannya adalah bimbingan, penjangkauan, rujukan, dan alokasi kapasitas manusia serta keuangan yang terbatas; basis buktinya adalah catatan administratif, peristiwa pendaftaran, kredit yang diperoleh, dan apakah seorang siswa kembali. [[generative-ai|AI generatif]] memasuki wilayah ini lebih lambat daripada ia memasuki pengajaran, dan sebagian besar literatur di sini menyangkut sistem **non-generatif** — [[conversational-ai|chatbot]] pesan teks, model peringatan dini, prediksi risiko terfederasi — dengan alat generatif datang sebagai penasihat, asisten, dan penjawab basis pengetahuan.

Pembeda yang mengorganisasi halaman ini adalah antara **apa yang dapat dilakukan dorongan singkat** dan **apa yang dituntut oleh suatu lintasan**. Teknologi dukungan unggul dalam keputusan biner bertanggal: mendaftar sebelum tanggal ini, lengkapi formulir ini, mulai Early Start. Mereka jauh lebih sulit menangani hasil kumulatif — persistensi, kredit, kelulusan — yang dibentuk oleh pengajaran, keuangan, pekerjaan, keadaan keluarga, dan persiapan sebelumnya. Bukti terkuat basis pengetahuan tentang ini berasal dari evaluasi acak empat tahun yang menggerakkan pendaftaran dengan tajam dan kelulusan tidak sama sekali.

## Fungsi-fungsi dukungan

Penelitiannya mengelompok ke dalam lima fungsi, dan batas klaster itu penting karena masing-masing membawa bukti yang berbeda.

Sebuah tinjauan atas 61 studi tentang dukungan pembelajar berbasis AI menemukan bidang ini terkonsentrasi pada sistem adaptif dan personalisasi (41 penggunaan) serta pembuatan profil dan prediksi (30), dengan chatbot dan sistem rekomendasi menangani penerimaan dan kueri rutin. Tinjauan itu juga menemukan celahnya: tidak ada intervensi yang menyasar fase transisi pembelajar, dan hanya dua studi yang menyebut subkelompok siswa, sehingga pembelajar generik dalam sebagian besar sistem adalah rata-rata statistik ([[cefa-ai-learner-support-review-2026|Cefa et al., 2026]]).


**Penjangkauan dan komunikasi.** Institusi mengirim pesan kepada siswa dalam skala besar, dan evaluasi terkuat menguji apakah itu mengubah apa pun. Studi acak empat tahun atas CSUNny, chatbot pesan teks non-generatif di California State University, Northridge, mengikuti dua kohort sarjana (N = 8,708) melalui delapan semester ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page, 2026]]). Pengingat pendaftaran yang dikirim 31 Juli 2018 membuat siswa yang diperlakukan 34 poin persentase lebih mungkin mendaftar pada 16 Agustus dan hanya 2 poin lebih mungkin pada 15 September; pengingat Early Start menghasilkan 11 poin lebih banyak pendaftaran pada 7 Juni dan 20 poin pada 22 Juni. Reseptivitas bertahan: tingkat opt-out tahunan tidak pernah melampaui 4%. Uji pra-registrasi multi-semester di Georgia State University mendorong siswa di dua mata kuliah asinkron besar (N = 1,568 dan N = 915) dengan dua hingga tiga pesan yang disesuaikan per minggu, menaikkan peluang memperoleh A atau B sebesar empat poin persentase terhadap 61% kelompok kontrol dan menggeser tingkat DFW sekitar tiga poin di setiap mata kuliah ([[chatbot-outreach-course-performance-2026|Meyer et al., 2026]]).

**Bimbingan dan perencanaan akademik.** Prediksi mata kuliah dan nilai memasok masukan perencanaan — satu model bersama-sama memprediksi mata kuliah yang akan diambil siswa dan nilai yang akan mereka terima ([[trace-course-grade-prediction-2026|Savala, 2026]]), dan model lain memprediksi kemajuan tingkat modul dalam mata kuliah pemrograman daring besar dengan pohon keputusan yang dapat diinterpretasikan secara intrinsik ([[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska, 2026]]). Kredit transfer adalah masalah bimbingan tersendiri: CourseGraph memodelkan konten mata kuliah sebagai graf pengetahuan untuk mengevaluasi kesetaraan mata kuliah eksternal bagi siswa yang berpindah ([[coursegraph-cs-course-comparison-2026|Nijdam et al., 2026]]). Pada tingkat institusional, tinjauan atas 155 studi tentang AI dan penyampaian layanan di pendidikan tinggi menemukan analitik pembelajaran sebagai aplikasi paling umum dengan 46 studi (29.7%), di atas chatbot dan asisten virtual dengan 31 (20.0%) dan analitik prediktif dengan 29 (18.7%) ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga, 2026]]).

**Rujukan dan alokasi dukungan.** Prediksi bukanlah rencana, dan kesenjangan di antaranya adalah tempat kritik paling tajam di bidang ini berada. SC2R memformalkannya sebagai **kesenjangan kelayakan tindak**: skor risiko menjadi pendukung keputusan hanya ketika rekomendasinya layak secara semantik dan dapat diperiksa mesin — dibatasi oleh waktu, anggaran, ketakterubahan, dan ketersediaan alih-alih sekadar valid secara model ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge, 2026]]). Apakah model dapat mengalokasikan dukungan dengan baik masih diperdebatkan secara empiris: ketika diminta merekomendasikan rencana dukungan untuk 4,500 vinyet siswa sintetis, tiga LLM menunjukkan kepekaan terbatas terhadap kebutuhan siswa dan inkonsistensi tajam antar model ([[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al., 2026]]).

**Akses ke dukungan akademik.** Sistem pengambilan khusus mata kuliah menyasar siswa yang paling kecil kemungkinannya bertanya kepada manusia. Beacon, dibangun dari materi yang disetujui satu modul pemrograman, meraih peringkat relevansi tinggi (89%) dan dinilai oleh sebagian besar siswa mendukung alih-alih menggantikan pembelajaran mereka (66.7%), dalam evaluasi kecil terhadap 15 siswa dan 4 akademisi ([[course-specific-rag-help-seeking-higher-ed-2026|Zhou et al., 2026]]). Pengambilan tutoring adalah masalah tersendiri: [[rct|uji acak]] dua tahun atas lapisan tutoring virtual bagi siswa yang kesulitan harus menguji pengambilan secara terpisah dari pembelajaran, karena menjangkau siswa yang membutuhkan dukungan tidak sama dengan menyediakannya ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer et al., 2026]]).

**Bantuan administratif.** Kepemimpinan dan administrasi dipelajari sebagai domain aplikasi tersendiri, dengan taksonomi sepuluh domain yang memetakan di mana AI mendarat dalam kepemimpinan pendidikan ([[sposato-ai-educational-leadership-taxonomy-2025|Sposato, 2025]]). Layanan yang dijalankan institusi menjangkau melewati bimbingan hingga ke kesehatan: kerangka kesejahteraan kampus terpadu memasangkan pencegahan — memperbaiki cara umpan balik dikumpulkan — dengan intervensi melalui deteksi kesehatan mental ([[ai-campus-wellbeing-tools|Tang, 2026]]). Kredensial berada di sebelahnya: ketika sebuah agen dapat menyelesaikan mata kuliah atas nama siswa, kredensial yang menyatakan "diperoleh" kehilangan maknanya, yang mengubah catatan penyelesaian menjadi masalah desain ([[credentials-carry-evidence-ai-agents-2026|Srivastava, 2026]]).

**Asisten internal bersaing dengan chatbot publik pada ketersediaan, bukan kemampuan.** Dalam lima studi ko-desain di Open University (315 siswa, 20 staf), nilai jual terkuat i-AIDA yang diusulkan adalah akses sepanjang waktu, disetujui 73% dari survei 96 siswa, dan penggunaan langsung memindahkan permintaan dari 9 dari 18 siswa menjadi 16 dari 18 (d = .81) ([[rienties-institutional-ai-assistant-co-design-2026|Rienties et al., 2026]]). Siswa menilainya 7,58 dari 10 dibandingkan alat generatif lain, sementara sekitar 10–15% keberatan atas dasar nilai alih-alih kegunaan, menyebut belajar berbantuan AI sebagai pelemahan pembelajaran yang sah.


Apa yang digantikan oleh saluran dukungan AI layak mendapat pembukuan yang sama. Di empat studi (N = 249, 494, 743 dan 737), keyakinan pada kapasitas AI untuk memberikan dukungan emosional menaikkan kesediaan mengalihkan dukungan itu kepadanya, dan efeknya seluruhnya berjalan melalui kapasitas yang dipersepsikan (efek total c = 0.83; efek tak langsung ab = 0.73) ([[shastry-gray-empathy-offloading-2026|Shastry & Gray, 2026]]). Pada ukuran perilaku, peserta yang mengatakan tidak akan mengalihkan justru memilih lebih sedikit kata empati, sehingga mengarahkan siswa ke saluran kesejahteraan AI dapat mengurangi dukungan manusia dengan cara yang tidak ditunjukkan oleh [[self-report-measures|laporan diri]].

## Dari prediksi ke dukungan

Prediksi risiko — sistem peringatan dini, model putus studi, pengklasifikasi berisiko — adalah wilayah **[[learning-analytics]]** dalam basis pengetahuan ini, dan halaman ini memperlakukan *analitik prediktif* sebagai hal yang sama. Kerja pemodelannya substansial: pengklasifikasi terbimbing mengidentifikasi siswa sebelum menarik diri berdasarkan kinerja akademik, data demografis, dan catatan pendaftaran ([[at-risk-students-ml-prediction|Gheisari & Salarian, 2026]]); kerangka dua lapis menggabungkan log perilaku Codeforces (n = 1,816) dengan data survei psikografis dari sepuluh universitas untuk memprediksi atrisi dalam pemrograman kompetitif ([[predicting-attrition-competitive-programming|Alam et al., 2026]]); dan arsitektur terfederasi memprediksi kinerja dan putus studi lintas institusi tanpa berbagi data siswa mentah, mencapai AUC = 0.918 pada OULAD berbanding 0.925 terpusat ([[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al., 2026]]). Visi pendidikan presisi memperluas logikanya ke kembaran digital siswa dan "keberhasilan siswa preventif" ([[precision-education-student-digital-twins-2026|Han et al., 2026]]).

Yang menjadi bagian *di sini* adalah langkah setelah skor: **alokasi dukungan**. Dua temuan menetapkan batasnya. Pertama, perpecahan peringkat-versus-kalibrasi — model risiko terfederasi mempertahankan AUC mereka di bawah pergeseran distribusi sementara kalibrasinya menurun tajam, sehingga model yang masih memeringkat siswa dengan benar dapat salah tentang seberapa mungkin masing-masing membutuhkan bantuan. Kedua, studi pemungkin: analisis Delphi internasional dan AHP/SNAP atas analitik-pembelajaran-ke-intervensi mengidentifikasi tujuh pemungkin dan memberi peringkat **orientasi strategis institusional** tertinggi (prioritas 0.2072) dan paling berpengaruh terhadap yang lain (PageRank 0.2430), menempatkan hambatan pada perencanaan institusional alih-alih pada modelnya ([[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić, 2026]]). Pengelompokan perilaku atas 14,003 catatan siswa ke dalam enam profil, yang dipetakan ke objek pembelajaran yang direkomendasikan, adalah lapisan rekomendasi yang dituju oleh hal ini ([[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem et al., 2026]]).

Sebuah hasil integritas bergabung ke saluran yang sama. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]] memprediksi risiko mencontek berbantuan AI dari jejak LMS awal semester (AUC 0.763) dan merekomendasikan untuk bertindak atasnya hanya melalui penjangkauan berisiko rendah, dengan ambang keputusan dipilih untuk jangkauan alih-alih tuduhan: menurunkannya ke 0.30 mengidentifikasi 21 dari 23 siswa berisiko tinggi, pada presisi 60%.

## Tangga hasil: apa arti sebenarnya setiap ukuran

Kata "keberhasilan" menyembunyikan setidaknya lima pengukuran berbeda, dan dukungan AI tidak menggerakkannya secara setara. Membedakannya adalah hal paling berguna yang dapat dilakukan halaman ini.

- **Penyelesaian tugas** adalah tindakan tunggal, bertanggal, dan biner yang dikendalikan siswa dan diamati institusi dalam hitungan hari — mendaftar sebelum tenggat, mengajukan formulir, mendaftar Early Start. Di sinilah dorongan singkat bekerja, dan efeknya bisa besar dan segera (34 poin persentase, lalu 2, pada pengingat pendaftaran CSUN).
- **Kredit (unit yang didaftarkan dan diperoleh)** bersifat kumulatif dan bergantung pada ketersediaan mata kuliah, pengurutan, dan berapa semester yang mampu dibiayai siswa. Dalam evaluasi CSUN tidak muncul efek perlakuan yang signifikan pada unit yang didaftarkan, diperoleh, atau diperoleh secara kumulatif.
- **Persistensi** adalah kelanjutan lintas semester — pendaftaran menurut urutan semester — dan itu pun tidak bergerak, pada N = 8,708 dengan daya untuk mendeteksi efek 0.05 simpangan baku atau lebih besar.
- **Retensi** adalah tingkat institusional yang dihasilkan persistensi, dan biasanya dilaporkan pada tingkat program atau kohort. Tingkat DFW pada tingkat mata kuliah adalah hal terdekat dengan indikator pendahulu dalam literatur ini, dan itu bergerak secara moderat (−3 poin persentase di setiap mata kuliah dalam uji Georgia State).
- **Kelulusan** adalah hasil terminal multi-tahun. Rata-rata kelulusan kelompok kontrol pada tahun keempat adalah 0.190 dalam studi CSUN, dan efek perlakuan atasnya tidak signifikan secara statistik.

Penjelasan penulisnya untuk pola itu adalah klaim sentral halaman ini: pengingat bertindak atas keputusan yang diskret dan jangka pendek, sementara persistensi dan IPK bersifat kumulatif dan dibentuk oleh pengajaran, keuangan, pekerjaan, keadaan keluarga, dan persiapan sebelumnya. Mereka menyimpulkan bahwa komunikasi melalui alat semacam ini, **dengan sendirinya**, mungkin tidak cukup untuk mengubahnya — dan bahwa hasil nol itu presisi alih-alih kurang berdaya. Pendaftaran dini tetap memiliki nilai institusional untuk perencanaan staf dan ruang bahkan ketika hasil belajar tidak bergerak.

## Keadilan dan risiko bertindak atas dasar skor

Sistem dukungan bertindak atas siswa, yang membuat mode kegagalannya berbeda dari tutor. Uji tekanan atas enam intervensi keadilan pasca-hoc pada sistem peringatan dini yang dikendalikan vendor dan direplikasi dari 168,550 catatan siswa menemukan intervensi itu gagal memberikan keadilan yang dijanjikannya ([[fairness-theatre-early-warning-systems-2026|McConvey et al., 2026]]). Tinjauan advokasi siswa mengorganisasi permukaan risiko seputar penerimaan, perekrutan dan bantuan keuangan, serta **layanan keberhasilan siswa** — area di mana AI institusional paling langsung berdampak pada siswa ([[students-at-stake-ai-deployment-risks-2026|Student Defense, 2026]]). Privasi dan keadilan bersifat struktural di sini alih-alih insidental: pembelajaran terfederasi ada karena berbagi catatan siswa lintas institusi tidak dapat diterima, dan komponen [[human-in-the-loop-ai|manusia-dalam-lintasan]] dalam program CSUN adalah yang menurut penulisnya menjangkau siswa yang mengabaikan surel dan telepon. Administrator menjawab apa yang tidak dapat dijawab chatbot, lalu melipat jawabannya kembali ke basis pengetahuannya.

## Kondisi institusional

Ketahanan dalam literatur ini adalah properti organisasi, bukan properti teknis. Program CSUN bertahan empat tahun karena salurannya dimiliki secara terpusat, diawasi bersama oleh Office of Undergraduate Studies dan Office of the Registrar, dan ditulis oleh satu spesialis komunikasi untuk suara yang konsisten. Penargetannya terkikis karena alasan yang sama-sama organisasional: karena data siswa tidak tersentralisasi, pengingat bantuan keuangan menuntut satu kantor mengidentifikasi yang belum mengajukan dan kantor lain meneruskan subsetnya, dan gesekan itu cukup memberatkan sehingga kampanye bertarget turun dari 36% dari seluruh kampanye pada AY2018-19 menjadi 6% pada AY2022-23. Di mana pekerjaan itu berada, siapa yang memiliki datanya, dan apakah koordinasi lintas unit berkelanjutan menentukan apa yang sebenarnya dapat dilakukan sistem dukungan — itulah sebabnya halaman ini memuat [[change-management]], [[governance]], dan [[educational-policy-ai]] sebagai faset alih-alih memperlakukan penerapan sebagai keputusan TI.

## Koneksi ke konsep terkait

Dukungan siswa terhubung ke [[student-experience]] sebagai padanan yang menghadap siswa — teknologi yang sama dilihat dari sisi siswa alih-alih dari sisi institusi — dan ke [[help-seeking]] untuk mekanisme yang dengannya siswa yang membutuhkan dukungan benar-benar memperolehnya; penjangkauan dan asisten khusus mata kuliah keduanya adalah upaya menurunkan biaya bertanya. [[learning-analytics]] memiliki prediksi yang memasok alokasi, [[student-modeling]] dan [[knowledge-tracing]] memiliki model di bawahnya, dan [[recommender-systems-and-learning-paths]] memiliki lapisan rekomendasinya. Ia terhubung ke [[well-being]] melalui sistem kesehatan mental dan pencegahan kampus, ke [[career-development-and-readiness]] sebagai hasil yang mengikuti penyelesaian, ke [[equity-in-ai-education]] dan [[privacy]] melalui risiko bertindak atas skor, dan ke [[administrator]], [[stakeholders]], serta [[change-management]] sebagai peran dan proses yang menentukan apakah semua itu bertahan. [[learning-gains]] adalah simpul pengukuran yang berdekatan: hasil halaman ini bersifat administratif alih-alih instruksional, dan keduanya tidak bergerak bersama.

## Miskonsepsi Umum

**"Memprediksi siswa mana yang akan kesulitan adalah intervensinya."** Prediksi adalah masukan bagi dukungan dan bukan dukungan itu sendiri. Korpus memisahkan keduanya dengan sengaja: pengingat pendaftaran dan program retensi adalah intervensi berbeda dengan bukti berbeda, dan penelitian menunjukkan yang satu tidak membeli yang lain. Dasbor peringatan dini yang berakhir pada skor telah menambah pengukuran tanpa menambah bantuan.

**"Program retensi yang menaikkan persistensi membuktikan AI-nya berhasil."** Itu membuktikan programnya berhasil, dan lapisan AI harus dievaluasi terpisah dari penjangkauan yang dipicunya. Studi acak empat tahun atas CSUNny, chatbot pesan teks non-generatif di California State University, Northridge, mengikuti **dua kohort sarjana (N = 8,708)** melalui **delapan semester** dengan **tingkat opt-out tahunan yang tidak pernah melampaui 4%** — hasil reseptivitas yang kuat tentang *perpesanan*, dan bukan bukti bahwa sistem generatif atau prediktif akan mencapai hal yang sama.

**"Tangga hasil itu runtuh: keterlibatan adalah retensi."** Setiap anak tangga mengukur sesuatu yang berbeda — ikut serta, merespons, bertahan, menyelesaikan — dan sebuah program dapat menggerakkan anak tangga bawah sambil membiarkan yang atas datar. Melaporkan proporsi yang responsif sebagai keberhasilan melakukan tepat substitusi itu.

**"Kekhawatiran keadilan adalah alasan untuk berhenti menggunakan data."** Itu adalah alasan untuk bertindak atas skor dengan hati-hati. Bertindak atas prediktor dapat mendistribusikan dukungan dan dapat mendistribusikan kecurigaan, dan risikonya terkonsentrasi pada siswa yang paling tidak menguntungkan menurut klasifikasi model — yang membuat obatnya adalah tata kelola penggunaannya, bukan pengabaian pengukurannya.

## Konsep terkait

- [[higher-ed]] — payung sektor tempat halaman ini berada
- [[student-experience]] — bagaimana AI mendarat pada pengalaman siswa sendiri
- [[learning-gains]] — apakah pembelajaran terjadi, hasil instruksional yang tidak diukur halaman ini
- [[learning-analytics]] — prediksi, peringatan dini, dan analitik prediktif
- [[student-modeling]] — lapisan pemodelan di bawah prediksi risiko
- [[knowledge-tracing]] — estimasi keterampilan dan penguasaan berbutir halus
- [[recommender-systems-and-learning-paths]] — merekomendasikan mata kuliah, sumber daya, dan jalur
- [[help-seeking]] — bagaimana siswa sampai pada meminta dukungan
- [[well-being]] — kesehatan mental kampus, pencegahan, dan intervensi
- [[career-development-and-readiness]] — hasil setelah penyelesaian
- [[administrator]] — peran yang memiliki dan menjalankan sistem dukungan
- [[stakeholders]] — siapa yang memiliki klaim atas keputusan AI institusional
- [[change-management]] — mempertahankan program setelah uji coba
- [[governance]] — kebijakan dan pengawasan untuk AI institusional
- [[educational-policy-ai]] — konteks kebijakan untuk penerapan institusional
- [[equity-in-ai-education]] — siapa yang dijangkau sistem dan siapa yang terlewat
- [[privacy]] — catatan siswa, berbagi data, dan pendekatan terfederasi
- [[human-in-the-loop-ai]] — pertimbangan manusia di dalam alur dukungan otomatis
- [[rct]] — desain di balik bukti terkuat di sini

## Artikel terkait

- [[cefa-ai-learner-support-review-2026]] — tinjauan 61 studi tentang dukungan pembelajar berbasis AI: sistem adaptif dan prediksi mendominasi; fase transisi dan pembelajar yang beragam absen
- [[mata-sustaining-ai-enabled-student-support-2026]] — evaluasi acak empat tahun atas chatbot dukungan universitas: penyelesaian tugas bergerak, kelulusan dan IPK tidak
- [[chatbot-outreach-course-performance-2026]] — uji penjangkauan multi-semester pra-registrasi: tingkat A/B lebih tinggi, pergeseran DFW moderat, satu pengecualian demografis
- [[lopez-pernas-llm-appropriate-student-support-2026]] — 4,500 vinyet sintetis: kepekaan terbatas terhadap kebutuhan siswa dan inkonsistensi antar model dalam rekomendasi dukungan
- [[sc2r-counterfactual-recourse-educational-2026]] — kesenjangan kelayakan tindak: upaya perbaikan harus layak dan dapat diperiksa, bukan sekadar valid secara model
- [[fairness-theatre-early-warning-systems-2026]] — enam intervensi keadilan pasca-hoc pada sistem peringatan dini vendor yang dibangun dari 168,550 catatan
- [[at-risk-students-ml-prediction]] — pengklasifikasi terbimbing yang mengidentifikasi siswa sebelum menarik diri
- [[predicting-attrition-competitive-programming]] — log perilaku plus survei psikografis untuk memprediksi atrisi
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — pemodelan risiko terfederasi lintas institusi tanpa berbagi data siswa mentah
- [[precision-education-student-digital-twins-2026]] — kembaran digital dan "keberhasilan siswa preventif" sebagai visi
- [[learning-analytics-to-educational-interventions-2026]] — tujuh pemungkin untuk menutup lingkar dari analitik ke intervensi
- [[course-specific-rag-help-seeking-higher-ed-2026]] — asisten khusus mata kuliah yang ditujukan untuk menurunkan biaya meminta bantuan
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — pengambilan tutoring yang diuji terpisah dari pembelajaran
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — enam profil perilaku yang dipetakan ke objek pembelajaran yang direkomendasikan
- [[trace-course-grade-prediction-2026]] — prediksi bersama atas mata kuliah dan nilai untuk perencanaan
- [[zhang-ml-student-progress-programming-2026]] — prediksi kemajuan tingkat modul yang dapat diinterpretasikan
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — 155 studi tentang AI, kepemimpinan, dan penyampaian layanan di pendidikan tinggi
- [[sposato-ai-educational-leadership-taxonomy-2025]] — taksonomi sepuluh domain AI dalam kepemimpinan pendidikan
- [[students-at-stake-ai-deployment-risks-2026]] — permukaan risiko sisi siswa: penerimaan dan bantuan, layanan keberhasilan siswa, dan pengajaran
- [[ai-campus-wellbeing-tools]] — dukungan kesejahteraan kampus yang mencakup pencegahan dan intervensi
- [[shastry-gray-empathy-offloading-2026]] — Empat studi tentang pengalihan empati: keyakinan bahwa AI dapat memasok dukungan emosional menurunkan apa yang dipasok orang sendiri (Shastry & Gray 2026)
- [[coursegraph-cs-course-comparison-2026]] — kesetaraan mata kuliah untuk kredit transfer dan mobilitas
- [[credentials-carry-evidence-ai-agents-2026]] — apa arti catatan penyelesaian ketika agen dapat melakukan pekerjaannya
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Memprediksi risiko mencontek berbantuan AI lebih awal, dan kompromi ambang untuk penjangkauan berisiko rendah
- [[rienties-institutional-ai-assistant-co-design-2026]] — lima studi ko-desain asisten belajar AI institusional: ketersediaan lebih dahulu, resistensi berbasis nilai terakhir
