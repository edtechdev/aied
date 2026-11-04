---
title: "Proctoring Jarak Jauh"
created: "2026-08-20T04:50:00-04:00"
type: concept
foundations: [academic-integrity]
pedagogy: [online-teaching-and-learning]
assessment: [process-oriented-assessment, remote-proctoring, summative-assessment]
ethics: [equity-in-ai-education, privacy]
level: [higher ed]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/remote-proctoring"
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Proctoring jarak jauh** — pemantauan ujian ketika siswa mengerjakannya jauh dari lokasi fisik yang diawasi, mulai dari pengawas manusia yang memantau melalui webcam atau pusat kendali hingga sistem proctoring berbasis AI (AIPS) yang sepenuhnya otomatis dan menggunakan pembelajaran mesin/dalam untuk memverifikasi identitas dan menandai perilaku mencurigakan. Ini adalah sarana utama untuk mempertahankan validitas [[summative-assessment]] dan [[academic-integrity|integritas akademik]] dalam [[online-teaching-and-learning|pembelajaran daring dan jarak jauh]], di mana pengawasan langsung sering tidak mungkin dilakukan — tetapi ia menimbulkan kekhawatiran serius tentang [[privacy]], pengawasan akademik, keadilan, kewajaran, dan erosi [[trust]], biaya yang justru dapat merusak lingkungan pembelajaran yang ingin dilindunginya.

## Pertanyaan untuk Dipertimbangkan

- Sebelum membaca, ketika Anda membayangkan 'integritas akademik dalam ujian daring,' apa naluri pertama Anda tentang cara mempertahankannya — dan apakah naluri itu tentang mendeteksi kecurangan atau tentang membangun kepercayaan? Halaman ini berargumen bahwa keduanya mencerminkan dua filosofi yang sangat berbeda.
- Proctoring jarak jauh berkisar dari manusia yang memantau melalui webcam hingga sistem AI yang menganalisis gerakan mata, postur kepala, dan ekspresi wajah. Apa yang *sebenarnya* diamati sistem AI ketika menandai 'perilaku mencurigakan,' dan seberapa yakin Anda bahwa memalingkan pandangan dari layar berarti curang?
- Halaman ini memperingatkan bahwa pemantauan dapat kontraproduktif: dipantau menaikkan [[anxiety-and-stress|kecemasan ujian]], dan siswa yang stres mungkin *lebih* cenderung curang. Dapatkah Anda mengingat saat tekanan atau pengawasan memengaruhi performa Anda sendiri? Apakah pengalaman itu melemahkan alasan untuk proctoring?
- Proctoring otomatis menangkap ruang hidup, wajah, dan suara siswa, sering kali dengan sedikit pilihan nyata selain menyetujuinya. Di mana batas antara pengawasan ujian yang wajar dan pengawasan yang menganggap siswa bersalah sampai terbukti jujur — dan siapa yang harus menariknya?
- Penelitian menunjukkan proctoring dapat menandai perilaku jinak sebagai mencurigakan, sehingga menghasilkan tuduhan palsu, dan bahwa akurasi model berbeda-beda lintas demografi dan lingkungan. Jika Anda seorang [[administrator]], bagaimana Anda menimbang integritas yang dipulihkannya terhadap keadilan dan kepercayaan yang dapat dirusaknya?
- Halaman ini membingkai proctoring sebagai satu alat, bukan solusi — alternatif seperti ujian lisan dan [[process-oriented-assessment|penilaian berbasis proses]] tersedia. Sebelum membaca, pendekatan mana yang akan Anda bela untuk penilaian berisiko tinggi dalam konteks jarak jauh, dan bukti apa yang akan mengubah pikiran Anda?

## Pendahuluan

Proctoring jarak jauh berada pada suatu spektrum. **Proctoring daring** biasanya melibatkan pengawas manusia yang memantau siswa melalui webcam atau dari pusat kendali. **Proctoring otomatis/berbasis AI (AIPS)** menggantikan atau memperkuat manusia dengan sistem [[machine-learning]] dan pembelajaran mendalam (CNN, RNN, LSTM) yang menganalisis isyarat visual — gerakan mata, postur kepala, ekspresi wajah, dan bahasa tubuh — untuk mendeteksi perilaku mencurigakan secara waktu nyata. Platform yang umum termasuk ProctorU dan Kryterion. AIPS biasanya menggabungkan empat fungsi: (1) autentikasi identitas (misalnya verifikasi wajah dengan kamera), (2) pembatasan penjelajahan, (3) otorisasi/kendali ujian secara jarak jauh, dan (4) pembangkitan laporan dari sesi yang direkam.
- **Estimasi pose menggantikan aturan ambang, dan klaim akurasinya lebih sempit daripada yang terbaca.** Arif et al. (2026) melacak tujuh belas penanda tubuh per bingkai dengan YOLOv11, menurunkan fitur deviasi postur, tren kepala, dan gerakan tubuh bagian atas, serta menerapkan KNN single-nearest-neighbor atas 30 fitur terpilih mutual-information, melaporkan akurasi 99.56% dan AUC 0.9957 dari satu webcam ([[arif-automated-online-proctoring-yolov11-2026|Arif et al., 2026]]). Angka-angka itu menggambarkan reproduksi label pada kumpulan skenario yang dibuat khusus, bukan deteksi pelanggaran.

## Kelebihan dan peluang

- **Memulihkan validitas dan integritas dalam penilaian daring.** Proctoring jarak jauh menjawab masalah validitas yang nyata. Dalam [[online-teaching-and-learning|penilaian daring]], [[generative-ai|AI generatif]] membuat pekerjaan tanpa pengawasan tidak andal sebagai ukuran pembelajaran: ukuran tanpa bantuan, dengan pengawasan, dan tanpa buku adalah sinyal terkuat tentang apa yang sebenarnya diketahui siswa (lihat [[summative-assessment]], [[generative-ai-reduced-study-time-math|bukti retensi dengan pengawasan]]). Tanpa suatu bentuk pengawasan, ujian daring dapat mengembungkan nilai dengan menangkap performa berbantuan AI alih-alih performa mandiri.
- **Skalabilitas dan biaya.** Proctoring otomatis mengurangi kebutuhan lokasi fisik khusus dan pengawas manusia, membuat pemantauan layak dalam skala besar — keunggulan bagi MOOC dan program daring besar di mana proctoring tradisional tidak praktis secara logistik dan finansial.
- **aksesibilitas dan jangkauan.** Proctoring memungkinkan siswa di lokasi terpencil mengerjakan ujian dari mana saja, menghilangkan hambatan geografis dan penjadwalan untuk kredensial.
- **Kemampuan deteksi.** Sistem ML/DL canggih dapat mendeteksi kecurangan (gerakan mata, postur kepala, ekspresi wajah) lebih andal daripada pengamatan manual, dan dapat memantau secara terus-menerus alih-alih berkala.

## Kerugian, risiko, dan bahaya

- **Kerugian bagi kepercayaan dan hubungan siswa–instruktur.** Biaya paling konsekuensial dari proctoring jarak jauh sering kali bersifat relasional. Pengawasan terus-menerus mengomunikasikan bahwa siswa dianggap tidak jujur, yang dapat merusak [[trust]], menggerus hubungan siswa–instruktur, dan melemahkan rasa tujuan bersama yang menopang integritas akademik. Pemantauan-sebagai-penegakan dapat menyingkirkan pendekatan integritas yang berbasis kepercayaan dan mendidik yang membangun penggunaan yang bertanggung jawab.
- **Pengawasan akademik.** Proctoring jarak jauh adalah bentuk pengawasan akademik yang memperluas pemantauan institusional ke lingkungan rumah pribadi siswa. Melampaui ujian itu sendiri, sistem ini menangkap ruang hidup, wajah, suara, dan perilaku siswa secara terus-menerus — tingkat pemeriksaan yang nyaris tanpa preseden di [[higher-ed|pendidikan tinggi]]. Kritikus berargumen ini menormalkan budaya pengawasan di mana siswa dianggap bersalah sampai terbukti jujur, membentuk ulang hubungan antara institusi dan siswa serta memunculkan pertanyaan tentang proporsionalitas: apakah keuntungan integritas membenarkan menundukkan setiap siswa pada pemantauan menyeluruh demi kesalahan sebagian kecil.([[privacy]]), [[trust]]
- **Privasi dan persetujuan.** AIPS secara terus-menerus mengakses citra wajah, pola suara, tatapan, dan dinamika ketukan tombol, sering melalui pengawasan audiovisual yang persisten. Penanganan data harus mematuhi kerangka seperti GDPR dan RUU PDP India, dan memerlukan persetujuan yang jelas serta penanganan data biometrik yang aman. Siswa sering kali memiliki sedikit pilihan selain menerima pemantauan jika ingin mengerjakan ujian, sehingga memunculkan pertanyaan apakah persetujuan itu benar-benar sukarela.([[privacy]])
- **Positif palsu, tuduhan palsu, dan kecemasan.** Sistem dapat menandai perilaku jinak (memalingkan pandangan, menyesuaikan postur) sebagai mencurigakan, menggerus kepercayaan siswa dan menghasilkan tuduhan pelanggaran palsu — terutama ketika pengawas atau peserta ujian kurang terampil.
- **Stres dan kecemasan ujian.** Mengerjakan ujian dengan pengawasan itu sendiri merupakan sumber stres dan kecemasan yang signifikan. Pengawasan terus-menerus, ketakutan ditandai secara palsu, dan tekanan dipantau dapat menaikkan kecemasan ujian dan mengganggu performa — dan, menurut bukti, siswa yang stres mungkin *lebih* cenderung melakukan perilaku tidak jujur, yang berarti pemantauan dapat kontraproduktif. Dipantau itu menegangkan dan dapat dengan sendirinya memicu perilaku tidak etis yang ingin dicegahnya.
- **Rasional integritas tidak bertahan pada uji terbesar.** Di empat gelombang dan 1,760 siswa dalam 105 kursus, proctoring menaikkan kecemasan ujian (β = 0.60, p < 0.001) tetapi tidak berdampak pada dorongan untuk curang, persepsi kesulitan, atau nilai, sehingga biaya pengawasan tidak diimbangi oleh efek jera ([[conijn-fear-big-brother-proctored-exams-2022|Conijn et al. (2022)]]).
- **Keadilan dan kesenjangan digital.** Ketergantungan perangkat, internet tidak stabil, pencahayaan, dan variabilitas perangkat keras secara tidak proporsional merugikan siswa pedesaan dan berbandwidth rendah; akurasi model dapat berbeda-beda lintas demografi dan lingkungan, sehingga berisiko menandai secara tidak adil.([[digital-divide]]), [[equity-in-ai-education]] Tinjauan pelingkupan proctoring dalam penilaian [[nursing-education|keperawatan]] menunjukkan ini bukan kasus tepi: empat dari enam studi yang disertakan melaporkan masalah konektivitas internet, satu melaporkan pemadaman bergilir bersamaan dengan paket data terbatas, dan ketidakcocokan perangkat, kesalahan ekstensi peramban, serta pemindaian lingkungan yang gagal merupakan hal rutin — sehingga ketidakadilan infrastruktural, bukan hanya bias model, menentukan siapa yang dapat dinilai sama sekali.([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Celah deteksi dan perlombaan senjata.** Pemalsuan identitas (penyamaran foto/video), penggunaan peramban, dan salin-tempel tetap sulit ditangkap secara andal; akurasi deteksi dibatasi oleh keterbatasan kumpulan data, evaluasi model tunggal, dan celah reproduktibilitas. Proctoring tidak sepenuhnya menyelesaikan integritas, dan dapat menciptakan rasa aman yang palsu.
- AI yang dapat dikenakan menghilangkan sinyal perilaku yang menjadi sandaran proctoring: [[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin et al. (2026)]] berargumen bahwa kacamata AI, earbud, dan alat bantu dengar berteknologi AI memberikan bantuan tersembunyi tanpa pergeseran tatapan, pergeseran atensi, atau isyarat postur, sehingga pengawasan dan penyerahan perangkat kehilangan isyarat yang mereka andalkan.
- **Pertanyaan tata kelola.** Apakah pengawasan adalah respons yang tepat versus [[authentic-assessment|perancangan ulang penilaian]] (lisan, berbasis proses, [[eportfolio|portofolio]]) merupakan keputusan institusional yang terbuka; proctoring jarak jauh adalah satu alat, bukan solusi lengkap.([[governance]]) Paparan yang menyusul ketika penegakan berjalan salah — tuduhan yang bersandar pada skor dan log peristiwa, retensi dan pemrosesan lanjutan atas data yang ditangkap, serta aturan yang jatuh tidak merata pada siswa penyandang disabilitas atau penutur non-asli — dipetakan pada [[legal-issues-and-risks]].

## Basis bukti

- Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] selama satu dekade atas 80 studi yang ditelaah sejawat (2014–2024) menemukan proctoring ML/DL canggih mendeteksi kecurangan lebih andal daripada metode tradisional, tetapi dibatasi oleh kesenjangan kumpulan data (35% tidak mengungkapkan data secara penuh), evaluasi model tunggal (40%), masalah reproduktibilitas (30%), pelaporan etis yang jarang (hanya 25%), dan metrik yang tidak konsisten (20%). Positif/negatif palsu — menandai perilaku normal sebagai mencurigakan atau melewatkan kecurangan halus — melemahkan keandalan dan kepercayaan.([[automated-online-exam-proctoring-decade-review-2026]])
- Tinjauan pendamping mendokumentasikan metode kecurangan yang harus dilawan AI (pemalsuan identitas melalui foto/video, penggunaan peramban/perangkat, salin-tempel) dan hambatan praktisnya: kecemasan peserta ujian, kesenjangan keterampilan yang menyebabkan tuduhan palsu, serta infrastruktur (webcam, mikrofon, internet) yang tidak terjangkau atau tersedia secara universal. Tinjauan itu melaporkan ~37.8% mahasiswa dan ~41.8% siswa sekolah menengah mengaku curang — motivasi bagi pemantauan.([[academic-dishonesty-automated-proctoring-ai-2026]])
- **Instruktur tidak melihat manfaat dari proctoring ujian yang dikerjakan di luar kelas.** [[biology-degree-integrity-genai-cheating-2026|Chan et al. (2026)]] mensurvei 56 instruktur (tingkat respons 47%) di satu departemen [[biology-education|biologi]] setelah mengodekan seluruh 38 silabus mata kuliah inti wajibnya, dan meminta mereka menilai setiap kategori bernilai yang mereka gunakan menurut kerentanannya terhadap ketidakjujuran akademik (0 = minimal sampai 4 = sangat rentan). Ujian di luar kelas dengan dan tanpa pengawasan dinilai *identik* pada median 3 (cukup rentan), sementara ujian dengan pengawasan langsung adalah satu-satunya kategori yang dinilai minimal rentan (median 0) dan secara signifikan kurang rentan daripada setiap kategori lain (p_adj < .01). Karena peramban pengunci tersedia untuk ujian di luar kelas, hasilnya adalah persepsi bahwa alat-alat itu tidak mengurangi paparan — konsisten dengan bukti tinjauan di atas bahwa proctoring daring hanya efektif secara tidak merata, dan dengan biaya kecemasan, privasi, serta tuduhan palsu yang terdokumentasi yang membuat trade-off ini diperdebatkan. Taruhannya terlihat dalam penghitungan poin pada studi yang sama: ujian di luar kelas mencakup rata-rata 54.2% nilai dalam kursus tatap muka yang menggunakannya dan 59.2% dalam kursus daring, di mana setiap penawaran bergantung padanya.
- Tinjauan pelingkupan proctoring jarak jauh dalam [[nursing-education|keperawatan]] [[assessment|penilaian siswa]] memetakan spektrum modalitas alih-alih satu praktik — pengawasan manusia langsung (ProctorU), proctoring ekstensi peramban AI dengan webcam, mikrofon, dan penandaan perilaku (Honorlock), pemantauan webcam-plus-peramban pengunci (Respondus Monitor), aplikasi pengawasan seluler yang diterapkan institusi, dan desktop pusat ujian tetap di bawah pengawasan terpusat — dan berargumen bahwa keragamannya mencerminkan disparitas infrastruktur dan kapasitas institusional alih-alih standar bersama. Hanya enam studi yang memenuhi kriteria inklusinya (1,567 mahasiswa keperawatan di Amerika Serikat, Inggris, Afrika Selatan, dan Mesir), dan tidak ada yang terbit sebelum 2021. Yang ditetapkan tinjauan itu adalah bahwa pengawasan menghasilkan *persepsi* efek jera dan beban tinjauan fakultas yang berat: kesepakatan 98–100% bahwa pemantauan webcam dan peramban pengunci mencegah kecurangan merupakan [[self-report-measures|laporan diri]] dari satu program pascasarjana praktisi perawat, peringatan AI berisiko tinggi jarang terjadi tidak lebih dari 5%, namun peringatan kecil yang sering menghasilkan positif palsu yang menuntut tinjauan intensif waktu, dan dosen Afrika Selatan melaporkan ketidakjujuran yang berlanjut di bawah pemantauan aktif. Satu-satunya studi performa komparatif menunjukkan arah sebaliknya — kohort dengan pengawasan langsung memperoleh skor jauh lebih tinggi pada HESI Exit Exam dan kesiapan NCLEX daripada kohort ProctorU — dan tinjauan itu memperlakukan kaitan antara pengawasan dan pembelajaran yang lebih jujur sebagai pertanyaan terbuka alih-alih manfaat yang sudah pasti.([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Ujian tatap muka dengan pengawasan tetap menghasilkan 44.2% siswa berisiko tinggi.** Dalam kursus [[cs-education|Pengantar Pemrograman]] di sebuah universitas negeri Turki, 23 dari 52 mahasiswa tahun pertama dilabeli berisiko tinggi dari log ujian yang mencatat peristiwa salin, kehilangan fokus, dan klik kanan, meskipun ujian itu diawasi dan dikerjakan di laboratorium komputer; studi yang sama memprediksi risiko tersebut dari jejak LMS awal semester alih-alih dari perilaku saat ujian.([[akcapinar-ai-cheating-risk-lms-prediction-2026]])

## Arah yang direkomendasikan

- **Pengawasan hibrida manusia–AI.** Pasangkan penandaan otomatis dengan [[human-in-the-loop-ai|tinjauan manusia]] untuk mengurangi positif palsu dan menjaga pertimbangan tetap kontekstual.
- **Arsitektur yang menjaga privasi.** Pemrosesan edge, anonimisasi, dan penanganan di perangkat mengurangi sifat mengganggu dari penangkapan data terus-menerus.
- **Penerapan yang sadar keadilan.** Kumpulan data yang beragam dan inklusif secara geografis serta model ringan untuk lingkungan bersumber daya rendah; alternatif yang aksesibel bagi siswa tanpa perangkat/konektivitas yang andal.
- **Edukasi sebelum mengawasi.** Utamakan menumbuhkan [[ai-literacy]] dan [[reducing-ai-misuse|penggunaan yang bertanggung jawab]] melalui budaya dan pembangunan kepercayaan, dengan menyisakan proctoring untuk kasus berisiko tinggi yang benar-benar memerlukannya.

## Miskonsepsi umum

- **"Proctoring melindungi integritas akademik."** **Rasional integritas tidak bertahan pada uji terbesar.** Di **empat gelombang dan 1,760 siswa dalam 105 kursus**, proctoring **menaikkan kecemasan ujian (β = 0.60, p < 0.001) tetapi tidak memiliki** manfaat integritas yang terdeteksi. Efek yang terukur ada pada siswa, bukan pada kecurangan.
- **"Kemampuan deteksi yang lebih baik berarti proctoring yang lebih baik."** Tinjauan sistematis selama satu dekade atas **80 studi yang ditelaah sejawat (2014-2024)** menemukan proctoring ML/DL canggih **mendeteksi kecurangan lebih** akurat dan tidak mengatakan apa pun tentang apakah penerapannya mengubah perilaku. Performa deteksi adalah properti pengklasifikasi, bukan properti rezim penilaian.
- **"Sinyal perilaku adalah indikator pelanggaran yang andal."** Sistem **melacak tujuh belas penanda tubuh per bingkai** dengan YOLOv11 untuk menurunkan fitur **deviasi postur, tren kepala, dan gerakan tubuh bagian atas**. Konstruk itu adalah proksi, dan postur yang ditandai adalah klasifikasi tentang tubuh alih-alih pengamatan atas suatu pelanggaran.

## Konsep terkait
- [[anxiety-and-stress]]
- [[academic-integrity]]
- [[summative-assessment]]
- [[assessment]]
- [[automated-assessment]]
- [[online-teaching-and-learning]]
- [[ai-misuse-learning-harm]]
- [[privacy]]
- [[equity-in-ai-education]]
- [[digital-divide]]
- [[student-experience]]
- [[trust]]
- [[governance]]
- [[legal-issues-and-risks]]
- [[higher-ed]]

## Artikel terkait
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — AI yang dapat dikenakan menghilangkan sinyal perilaku yang menjadi sandaran proctoring (Corbin, Sharpe & Dawson 2026)

- [[automated-online-exam-proctoring-decade-review-2026]] — Tinjauan sistematis selama satu dekade atas proctoring ujian daring otomatis
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Tinjauan komprehensif ketidakjujuran akademik dalam proctoring otomatis
- [[ssaho-ai-academic-integrity-review-2025]] — AI dan integritas akademik: tinjauan sistematis
- [[conijn-fear-big-brother-proctored-exams-2022]] — Ketakutan akan Big Brother: efek samping negatif proctoring terhadap kecemasan ujian
- [[biology-degree-integrity-genai-cheating-2026]] — Bisakah siswa curang sampai meraih gelar biologi? Studi kasus kerentanan nilai mata kuliah biologi terhadap ketidakjujuran akademik di era AI generatif
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Di bawah pengawasan: memetakan praktik proctoring jarak jauh dalam penilaian mahasiswa keperawatan
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — 44.2% siswa dilabeli berisiko tinggi dalam ujian tatap muka dengan pengawasan, dengan risiko diprediksi dari jejak LMS awal semester
