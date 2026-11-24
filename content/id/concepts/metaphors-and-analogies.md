---
title: "Metafora dan Analogi"
created: "2026-11-07T08:43:02-05:00"
type: concept
foundations: [ai-literacy, critical-thinking, misconceptions]
pedagogy: [student-engagement]
technology: [generative-ai]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
connected_concepts: [ai-literacy, critical-thinking, misconceptions, student-ai-interaction, pedagogical-agent, learning-design, educational-development, engineering-education, cs-education, cognitive-offloading, trust-calibration, equity-in-ai-education, teacher-role, explainable-ai, student-engagement, higher-ed]
connected_articles: [roe-perkins-furze-metaphors-critical-ai-literacy-2025, student-reception-genai-analogies-computing-2026, fear-awe-genai-metaphor-workshops-2025, engineering-faculty-metaphors-ai-understanding-2026, genai-professionalization-metaphors-2026, thermomix-genai-education-analogy-2026, anvil-ai-educational-animations, ai-engineering-education-balancing-act, code-anchor-multi-view-visualization, stillman-dear-gemini-pairr-critical-ai-literacies-2026, daoism-ai-education-philosophy-2026, rodak-hire-ai-future-focused-literacy-2026]
updated: "2026-11-24T15:51:30-05:00"
translation_of: "concepts/metaphors-and-analogies"
source_updated: "2026-11-17T11:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis:** Metafora dan analogi melakukan dua pekerjaan dalam pendidikan AI. Keduanya adalah perangkat pemaknaan yang dengannya pendidik dan siswa memutuskan apa AI *itu* (alat, asisten, kotak hitam, oracle), dan perangkat instruksional yang memetakan domain sumber yang familiar ke konsep target yang belum familiar. Penelitian menunjukkan bahwa kedua pekerjaan itu saling terhubung: metafora yang dipegang orang membentuk apa yang mereka harapkan dari AI, fitur mana yang mereka perhatikan, dan apakah mereka memercayai atau menakutinya. Logika pemetaan struktural yang sama menjelaskan mengapa sebuah analogi dapat membuat gagasan teknis mudah diingat sambil secara diam-diam salah merepresentasikannya. Analogi cacat yang dihasilkan GenAI dapat lebih berguna daripada analogi yang rapi ketika siswa mengenal domain sumber cukup baik untuk mengaudit pemetaan dan memperbaikinya. Pelajaran praktisnya adalah memilih metafora untuk fitur yang diajarkan, memeriksa kesesuaian struktural dan keterjangkauan kultural, dan memperlakukan perbandingan itu sebagai objek kritik alih-alih penjelasan yang sudah jadi. Buktinya sebagian besar [[qualitative-research|kualitatif]], konseptual, dan berskala kecil; bidang ini memiliki sedikit bukti kausal bahwa pengajaran berbasis metafora meningkatkan pembelajaran.

## Pertanyaan yang Perlu Dipertimbangkan

- Metafora apa yang Anda gunakan untuk [[generative-ai|AI generatif]] ketika Anda tidak sedang berhati-hati, dan apa yang dibuat mudah dilihat atau mudah diabaikan oleh metafora itu?
- Kapan analogi yang familiar membantu siswa memahami konsep teknis, dan kapan ia menanamkan [[misconceptions|miskonsepsi]] yang harus dibongkar oleh instruksi berikutnya?
- Domain sumber siapa yang dianggap familiar? Jika sebuah analogi bergantung pada olahraga, permainan video, atau peralatan dapur, siapa yang tercakup dan siapa yang tertinggal?
- Haruskah [[intelligent-tutoring|tutor AI]] menghasilkan analogi untuk siswa, atau haruskah ia memberi siswa analogi untuk dikritik? Apa yang berubah ketika analogi itu dipersonalisasi sesuai minat yang dinyatakan siswa?
- Analogi yang mudah diingat belum tentu akurat. Apa yang akan Anda minta dilakukan siswa untuk menunjukkan bahwa mereka dapat membedakan keduanya?
- Bukti apa yang akan meyakinkan Anda bahwa pelajaran berbasis metafora meningkatkan literasi AI, bukan sekadar membuat pelajaran lebih menarik?

## Pendahuluan

Metafora mengatakan bahwa satu hal adalah hal lain: AI adalah kotak hitam, pembantu, cermin, peta. Analogi biasanya membuat perbandingan lebih eksplisit: senarai berantai bekerja seperti rantai, rekursi bekerja seperti sekumpulan kotak bersarang, atau menggunakan AI seperti memasak dengan Thermomix. Keduanya tumpang tindih dalam praktik. Keduanya meminta pembelajar membawa relasi dari domain sumber yang familiar ke domain target yang kurang familiar, dan keduanya menjadi menyesatkan ketika pemetaan diperluas melewati relasi yang sebenarnya dipertahankannya.

Itu membuat keduanya lebih dari hiasan retoris. Penelitian metafora konseptual memperlakukan metafora sebagai struktur pemikiran, bukan sekadar bahasa: perbandingan yang tersedia bagi orang membentuk aspek sistem mana yang terasa menonjol dan penjelasan mana yang terasa wajar. Dalam pendidikan AI, taruhannya praktis. Siswa yang membingkai [[llm|LLM]] sebagai mesin pencari mungkin mengharapkannya mengambil fakta yang tersimpan dan mungkin tidak mencari fakta yang dikarang. Dosen yang membingkainya sebagai mahasiswa tingkat lanjut mungkin mengharapkan pertimbangan dan keahlian subjek yang tidak dimiliki model. Diskusi kebijakan yang dibingkai di sekitar "bencana alam" atau "pesaing" mendukung respons yang berbeda daripada yang dibingkai di sekitar "kalkulator untuk kata-kata."

Kedua sisi peran ganda itu penting: metafora sebagai jendela ke dalam cara pendidik dan siswa memahami AI, dan analogi sebagai teknik pengajaran dalam literasi AI dan penjelasan yang dihasilkan AI. Pekerjaan yang relevan mencakup konseptualisasi dosen dan siswa, lokakarya metafora di kelas, analogi yang dihasilkan GenAI, [[learning-design|desain instruksional]] berbasis analogi, dan literasi AI kritis. "Metafora" dan "analogi" bukan sinonim persis, tetapi keduanya tetap bersama karena masalah desainnya sama: pemilihan sumber, kesesuaian struktural, akses kultural, dan kritik.

## Mengapa metafora dan analogi penting

Titik awal teoretisnya adalah Teori Metafora Konseptual, yang dikaitkan dengan Lakoff dan Johnson. Klaim sentralnya adalah bahwa orang memahami domain abstrak melalui pemetaan dari domain yang lebih konkret, dan bahwa pemetaan itu dapat menjadi begitu familiar sehingga berhenti terlihat seperti perbandingan. "Perjalanan hidup" bukan hanya cara berbicara; ia membawa asumsi tentang arah, kemajuan, hambatan, dan tujuan. Hal yang sama berlaku untuk "asisten AI" atau "kotak hitam AI."

Bagi pendidikan, konsekuensi yang berguna adalah bahwa metafora dapat melakukan kerja konseptual sebelum [[teacher-role|guru]] menawarkan definisi. Ia memberi pembelajar tempat berpijak. Ia juga dapat membawa seluruh teori agensi: "asisten" menyiratkan pengguna yang memegang kendali, sementara "agen" menyiratkan inisiatif, dan "kotak hitam" menyiratkan bahwa penjelasan tidak mungkin atau tidak perlu. Ini bukan deskripsi netral. Ini mendistribusikan tanggung jawab dan menetapkan harapan tentang kepercayaan.

Analogi menambahkan lapisan kedua: korespondensi struktural. Analogi instruksional yang baik mempertahankan relasi yang penting bagi konsep target, bukan sekadar kemiripan permukaan. Rantai dapat mengilustrasikan senarai berantai karena keduanya melibatkan simpul yang terhubung secara berurutan. Sekumpulan kotak bersarang dapat mengilustrasikan rekursi karena setiap tingkat berisi versi lebih kecil dari struktur yang sama. Perbandingannya selalu parsial. Pertanyaan [[pedagogy|pedagogis]] adalah apakah relasi yang dipertahankan adalah relasi yang dibutuhkan pembelajar, dan apakah pembelajar dapat melihat di mana pemetaan berhenti.

Pertanyaan itu memisahkan kerja metafora dari [[explainable-ai|AI yang dapat dijelaskan]]. AI yang dapat dijelaskan menanyakan bagaimana keputusan sebuah sistem dapat dibuat terbaca bagi pemangku kepentingan. Analogi pedagogis menanyakan bagaimana pembelajar dapat membangun model mental yang dapat digunakan tentang sebuah proses. Penjelasan tentang mengapa sebuah model menandai seorang siswa tidak sama dengan analogi tentang bagaimana sebuah model menghasilkan teks, dan tidak ada yang menggantikan yang lain.

## Bagaimana pendidik dan siswa menggambarkan AI

Beberapa studi kini menawarkan jendela ke dalam metafora yang benar-benar digunakan orang. Mereka tidak bertemu pada satu citra, dan itulah sebagian intinya.

[[fear-awe-genai-metaphor-workshops-2025|Vallis, Wilson dan Casey (2025)]] menjalankan lokakarya analisis metafora dengan siswa, akademisi, dan staf pendukung pendidikan. Metafora peserta mengelompok ke dalam empat kategori luas: *Fungsi* (perbandingan mirip alat seperti pisau lipat Swiss), *Peran* (hubungan mirip manusia seperti pembantu, teman belajar, atau *frenemy*), *Kualitas* (perbandingan yang tidak dapat diandalkan atau tidak dapat diketahui seperti kotak hitam atau lereng yang licin), dan *Agensi* (perbandingan otonom atau mengancam seperti pesaing atau robot yang menyeramkan). Dua ketegangan berjalan melalui keseluruhan set: agensi manusia versus mesin, dan yang diketahui versus yang tidak dapat diketahui. Lokakarya itu tidak menyelesaikan ketegangan tersebut. Ia membuatnya tersedia untuk diskusi, yang merupakan hal yang secara realistis dapat dilakukan intervensi berbasis metafora.

[[engineering-faculty-metaphors-ai-understanding-2026|Gerhardt dan rekan (2026)]] mewawancarai 57 instruktur teknik lintas disiplin dan universitas dan menganalisis analogi yang mereka ajukan secara sukarela. Para instruktur sebagian besar membingkai AI generatif sebagai makhluk sosial atau agen yang mirip manusia (asisten, mahasiswa doktoral) atau sebagai objek teknis (mesin pencari, alat). Hanya sedikit yang membingkainya sebagai kekuatan lingkungan atau sistemik. Para penulis mengorganisasi respons di sepanjang lima dimensi: ontologi, epistemologi, operasi, hubungan, dan kekuasaan atau kapabilitas. Kekhawatiran mereka bukan bahwa instruktur menggunakan metafora, melainkan bahwa kolega di departemen yang sama dapat memegang metafora yang tidak kompatibel sambil mengasumsikan mereka berbagi bahasa. Itu menjadikan elisitasi metafora sebagai diagnostik pengembangan dosen, bukan sekadar teknik kelas.

Siswa menunjukkan rentang yang serupa. [[genai-professionalization-metaphors-2026|Bohmer dan rekan (2026)]] menemukan siswa mengonseptualisasikan GenAI sebagai aktor sosial, teknik, materi belajar, atau struktur, dengan bingkai sosio-emosional dan teknis sama-sama menonjol. [[ai-engineering-education-balancing-act|Kudina (2026)]] menggambarkan bingkai dominan mahasiswa teknik sebagai LLM "oracle" dan "tutor", yang keduanya mengatribusikan otoritas dan [[personalized-learning|personalisasi]] melebihi apa yang secara andal disediakan alat itu. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman dan rekan (2026)]] memperlakukan "mesin penjual umpan balik" seorang siswa sebagai artefak literasi yang lebih berguna daripada kosakata tutor yang rapi, karena frasa itu membuat transaksinya terlihat: masukkan pekerjaan, terima keluaran, tanpa hubungan dan tanpa agensi.

Temuan lintas-sektornya adalah bahwa metafora bersifat diagnostik bagi harapan. Seorang siswa yang menyebut LLM sebagai oracle tidak sekadar menggunakan kata yang berwarna. Label itu memprediksi apa yang akan dilakukan siswa ketika modelnya salah, dan apa yang akan diyakini siswa tentang verifikasi. Dosen yang menyebutnya mesin pencari tidak sekadar tidak tepat. Label itu memprediksi apa yang akan mereka minta siswa lakukan dengannya. Itulah sebabnya program [[educational-development|pengembangan pendidikan]] dapat menggunakan elisitasi metafora sebelum kebijakan atau desain ulang penilaian, dan mengapa [[engineering-education|pendidikan teknik]] dan [[cs-education|pendidikan ilmu komputer]] membutuhkan percakapan [[discipline-specific-aied|spesifik disiplin]] alih-alih satu definisi institusi.

[[rodak-hire-ai-future-focused-literacy-2026|Rodak (2026)]] mendorong metafora asisten ke dalam silabus: 72 mahasiswa sarjana mempekerjakan asisten bernama, menulis deskripsi pekerjaan dan ruang lingkup pekerjaannya. Pembingkaian itu mengubah pertanyaan yang diajukan siswa, dari apakah penggunaan AI diizinkan menjadi apakah sebuah tugas berada di dalam pekerjaan yang telah mereka definisikan. Daftar ruang lingkup setiap siswa mengecualikan salin-tempel tanpa pengungkapan dan tugas yang sudah selesai, sementara 81% mempekerjakan asisten untuk soal latihan dan koreksi.

Sebuah alur [[philosophy-of-ai-in-education|filosofis]] mendorong metafora ke arah yang berbeda: [[daoism-ai-education-philosophy-2026|Xie (2026)]] mengusulkan "Zhenren" sebagai kontra-ideal bagi pembelajar yang dikelola algoritma, memperlakukan citra itu sebagai cara untuk berargumen tentang tujuan pendidikan alih-alih untuk menjelaskan proses teknis.

## Analogi sebagai teknik pengajaran

Bukti kelas terkuat berasal dari penggunaan analogi dalam pendidikan komputasi. [[student-reception-genai-analogies-computing-2026|Bernstein dan Sibia (2026)]] memberikan analogi yang dihasilkan GenAI kepada mahasiswa sarjana untuk senarai berantai dan rekursi, lalu meminta mereka menganotasi dan mendiskusikan keluarannya. Siswa tidak menilai analogi itu sebagai baik atau buruk secara keseluruhan. Mereka memisahkan akurasi struktural, kejelasan, kelayakan, dan kepercayaan, dan menyebut kerusakan yang spesifik: rute yang berputar menggambarkan senarai sirkular, bukan senarai berantai tunggal; reli bulu tangkis tidak memiliki masukan yang dijamin menyusut untuk rekursi; rujukan berbasis minat dapat mengasumsikan pengetahuan yang tidak dimiliki siswa.

Kontribusi makalah itu adalah gagasan **audit analogi dua sisi**. Pengetahuan tentang konsep target memberi tahu siswa relasi mana yang harus dipertahankan sebuah analogi. Pengetahuan tentang domain sumber memberi tahu mereka apakah sumber itu benar-benar memiliki relasi tersebut. Auditor yang paling tajam tidak selalu siswa yang minatnya cocok dengan analogi itu. Mereka adalah siswa yang mengenal domain sumber cukup baik untuk memeriksanya. Itu memiliki implikasi desain: sumber yang familiar dapat mengubah siswa dari penerima menjadi auditor ahli. Para penulis merekomendasikan menugaskan analogi yang cacat sebagai objek untuk diperiksa dan diperbaiki, alih-alih menyaringnya keluar. Analogi yang cacat itu menjadi [[desirable-difficulties|kesulitan yang produktif]].

Temuan itu memperumit asumsi lazim bahwa penjelasan yang dihasilkan AI harus rapi sebelum siswa melihatnya. Analogi yang bersih tetap dapat menyandikan pemetaan yang salah, dan analogi yang cacat dapat lebih instruktif jika tugasnya adalah kritik. Syarat pentingnya adalah siswa memiliki pengetahuan target yang cukup untuk mengetahui apa yang harus dipertahankan analogi, dan pengetahuan sumber yang cukup untuk memeriksa apakah ia melakukannya. Tanpa salah satunya, analogi itu mungkin dikenang karena alasan yang salah.

Intervensi EAP tiga minggu menempatkan sikap audit itu ke dalam rangkaian revisi. Siswa menulis metafora untuk rekursi yang ditujukan kepada non-spesialis, merevisinya terhadap tiga sudut pandang (pengujian batas, kesesuaian struktural, kesesuaian audiens), lalu menulis metafora pasca-uji yang baru; satu kelompok melakukan revisi di platform dialog AI dengan [[peer-assessment|umpan balik sebaya]], kelompok lain secara mandiri ([[xing-ai-recursion-explanatory-competence-2026|Xing et al., 2026]]). Kelompok AI melaporkan kejelasan, akurasi, dan adaptasi audiens yang sedikit lebih tinggi (4,15 berbanding 3,93 pada satu butir), tetapi perbedaannya tidak signifikan dan hasilnya [[self-report-measures|dilaporkan sendiri]]. Bukti yang lebih berguna ada di log dialog: model menyebut komponen rekursif yang harus diusung metafora, dan siswa mempertahankan citranya sambil membuat strukturnya eksplisit. Pelajaran desainnya adalah memperlakukan giliran AI sebagai dorongan untuk merevisi pemetaan, bukan untuk menghasilkan metafora yang lebih baik.

[[anvil-ai-educational-animations|ANVIL]] menunjukkan sisi generasinya. Ia mengambil definisi konsep, menghasilkan analogi tekstual, mengompilasinya menjadi skenario, menghasilkan kode animasi, dan memperbaiki kegagalan dalam satu putaran yang berbatas. Sistem itu dievaluasi dengan pendidik ilmu komputer, yang menilai sebagian besar analogi memadai dan menghargai alat itu sebagai kolaborator kreatif untuk perencanaan pelajaran awal. Para penulis juga menemukan bahwa kendali instruktur, kemampuan menyunting, dan kesesuaian pedagogis lebih penting daripada kualitas generasi mentah. ANVIL adalah pengingat bahwa analogi yang dihasilkan AI adalah artefak kandidat, bukan penjelasan yang sudah jadi: guru tetap harus memutuskan apakah pemetaannya kokoh secara struktural dan sesuai untuk kelas itu.

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall dan Panadero]] menggunakan analogi sebagai argumen itu sendiri. Thermomix, peralatan memasak terpandu, memancing antusiasme dan kritik yang serupa dengan [[ai-education|AI generatif dalam pendidikan]]. Dengan memetakan skenario memasak ke skenario belajar, mereka memindahkan diskusi dari "apakah AI baik atau buruk" menuju "berapa banyak pekerjaan yang didelegasikan, dan apa dampaknya bagi pembelajar?" Analogi itu bukan bukti; ia adalah perangkat untuk membuat sebuah kontinum desain terlihat. Itu adalah penggunaan analogi yang sah dalam makalah konseptual, tetapi tidak boleh disalahartikan sebagai intervensi yang telah diuji.

[[code-anchor-multi-view-visualization|Code as Anchor]] menambahkan peringatan desain. Siswa menggunakan beberapa representasi, termasuk tampilan metafora, tetapi menghabiskan sebagian besar waktu pandangan mereka pada kode dan hanya sebagian kecil pada tampilan metafora. Sebagian melihat [[scaffolding|perancah]] metaforis itu sebagai kekanak-kanakan atau remedial. Metafora yang menurut instruktur mencerahkan dapat terbaca sebagai penanda kemampuan rendah bagi siswa. Legitimasi adalah bagian dari kegunaan pedagogis, bukan kekhawatiran terpisah.

## Metafora sebagai literasi AI kritis

Kerangka paling langsung untuk mengajar dengan metafora berasal dari [[roe-perkins-furze-metaphors-critical-ai-literacy-2025|Roe, Perkins dan Furze (2025)]]. Mereka mendefinisikan literasi AI kritis sebagai pemahaman tentang bagaimana sistem AI bekerja sekaligus pemeriksaan atas konsekuensi sosial, lingkungan, dan kulturalnya. Berangkat dari daftar 13 metafora AI yang umum, mereka memilih empat untuk digunakan di kelas dan menilai masing-masing terhadap empat kriteria: keterjangkauan, daya penjelas, potensi literasi AI kritis, dan kegunaan pedagogis.

Keempatnya adalah:

- **AI sebagai cermin distorsi**, untuk distorsi dan bias dalam keluaran yang dihasilkan.
- **AI sebagai peta**, untuk representasi, seleksi, dan pengetahuan siapa yang disertakan.
- **AI sebagai ruang gema**, untuk [[feedback|putaran umpan balik]], gelembung filter, dan penguatan pola yang sudah ada.
- **AI sebagai kotak hitam**, untuk opasitas dan batas-batas penjelasan.

Masing-masing dipasangkan dengan aktivitas singkat dan diskusi yang difasilitasi guru. Pelajaran cermin distorsi meminta siswa menguji prompt untuk bias; pelajaran ruang gema meminta mereka mengamati bagaimana prompt yang diulang dan data yang terbatas memperkuat pola; pelajaran peta menanyakan apa yang disertakan dan dihilangkan oleh representasi sebuah AI; pelajaran kotak hitam menggunakan generasi probabilistik untuk membuat proses tersembunyi terlihat. Para penulis memetakan aktivitas-aktivitas itu ke kerangka kompetensi AI UNESCO untuk siswa, yang memberi kerangka itu kait [[curriculum-design|kurikulum]] alih-alih membiarkannya sebagai imbauan umum untuk mendiskusikan metafora.

Langkah terpenting kerangka itu adalah memperlakukan metafora sebagai objek kritik. Metafora berguna karena ia parsial, dan ia menjadi berbahaya ketika disajikan sebagai lengkap. Cermin distorsi menunjukkan distorsi tetapi bukan algoritma yang menghasilkannya. Peta menunjukkan representasi tetapi dapat menyiratkan niat yang koheren yang tidak dimiliki sistem itu. Kotak hitam menunjukkan opasitas tetapi dapat mendorong kesimpulan bahwa tidak ada yang dapat diketahui. Pelajaran harus berakhir dengan pertanyaan tentang di mana perbandingannya rusak.

Itu juga yang menghubungkan kerja metafora dengan [[ai-literacy|literasi AI]] secara lebih luas. Lokakarya metafora adalah cara berteknologi rendah untuk memunculkan asumsi sebelum pelajaran teknis. Kritik atas analogi yang dihasilkan AI adalah cara untuk menilai apakah siswa memahami konsep target. Metafora siswa sendiri, seperti mesin penjual, dapat lebih mengungkap daripada butir survei yang terstandar. Semua ini adalah bentuk [[critical-thinking|berpikir kritis]] tentang AI, bukan sekadar latihan menulis kreatif.

## Merancang instruksi berbasis metafora

- **Mulailah dari fiturnya, bukan dari citranya.** Putuskan apa yang perlu dipahami siswa, lalu tanyakan domain sumber mana yang mempertahankan relasi yang penting. Perbandingan mudah diingat yang menunjuk pada fitur salah lebih buruk daripada penjelasan biasa.
- **Periksa kesesuaian struktural sebelum personalisasi.** Pencocokan minat dapat meningkatkan keterlibatan, tetapi tidak menjamin bahwa domain sumber memiliki struktur yang tepat. Verifikasi pemetaannya dulu, baru personalisasikan.
- **Audit domain sumber untuk akses kultural.** Cermin distorsi, peta, olahraga, dan peralatan dapur tidak sama familiarnya bagi semua pembelajar. Tanyakan apa yang diasumsikan perbandingan itu dan tawarkan alternatif.
- **Buat batasnya eksplisit.** Mintalah siswa menyebutkan apa yang dipertahankan metafora, apa yang didistorsinya, dan apa yang tidak dapat dijelaskannya. Kritiknya adalah pembelajaran yang dinilai, bukan diskusi opsional.
- **Gunakan beberapa metafora parsial.** Cermin distorsi, peta, dan ruang gema dapat hidup berdampingan karena masing-masing menerangi dimensi yang berbeda. Satu metafora total yang tunggal lebih mungkin menjadi miskonsepsi.
- **Pertahankan penjelasan teknis di dekatnya.** Analogi dapat membuka sebuah topik, tetapi ia tidak boleh menggantikan instruksi tentang data pelatihan, generasi probabilistik, atau perbedaan antara keluaran yang lancar dan pengetahuan yang terverifikasi.
- **Evaluasi aktivitasnya, bukan hanya keterlibatannya.** Bukti belum menunjukkan bahwa pelajaran berbasis metafora meningkatkan literasi AI atau hasil belajar. Perlakukan aktivitas itu sebagai rancangan untuk diuji, dan ukur apa yang dapat dilakukan siswa sesudahnya.

## Di Mana Buktinya Tipis

Literaturnya tidak merata. Studi metafora dosen dan siswa bersifat kualitatif dan sering berskala kecil. Studi dosen teknik menganalisis respons terhadap satu pertanyaan wawancara. Studi profesionalisasi memperlakukan hitungan metafora sebagai eksploratif. Studi analogi di kelas memiliki sepuluh mahasiswa sarjana dan perancu antara personalisasi dan format penjelasan. Kerangka Roe et al. bersifat konseptual dan aktivitasnya belum diuji dengan siswa. ANVIL adalah evaluasi sistem dengan pendidik, bukan studi pembelajaran.

Itu tidak membuat pekerjaannya tidak berguna. Itu membuat klaimnya tetap pantas sederhana. Elisitasi metafora dapat mengungkap asumsi yang terlewat oleh survei. Kritik analogi dapat membuat pemahaman struktural terlihat. Metafora yang dipilih dengan baik dapat memberi kelas sebuah objek bersama untuk diperdebatkan. Tetapi bidang ini masih membutuhkan studi yang membandingkan pengajaran berbasis metafora dengan pengajaran biasa, mengukur transfer alih-alih ingatan tentang metafora, dan menguji apakah pendekatan itu berjalan lintas budaya dan disiplin.

Risiko klaim berlebihan itu nyata di kedua arah. Guru yang memperlakukan metafora sebagai penjelasan lengkap dapat menanamkan miskonsepsi. Peneliti yang memperlakukan metafora sebagai sekadar hiasan dapat melewatkan mekanisme yang dengannya siswa membangun atau gagal membangun model mental. Posisi yang produktif adalah memperlakukan metafora sebagai representasi yang dirancang, parsial, dan dapat dikritik, dan mempelajari apa yang dilakukan pembelajar dengannya.

## Miskonsepsi Umum

- **"Metafora yang mudah diingat adalah metafora yang baik."** Mudah diingat bukan daya penjelas. Siswa dapat mengingat analogi yang hidup dan tetap salah memahami konsep yang dimaksudkan untuk dijelaskannya.
- **"Metafora adalah ilustrasi yang netral."** Setiap metafora memilih beberapa fitur dan menyembunyikan yang lain. Pilihan itu membawa asumsi tentang agensi, kepercayaan, dan tanggung jawab.
- **"Analogi yang dihasilkan AI siap pakai."** Analogi yang dihasilkan dapat salah secara struktural, sempit secara kultural, atau tidak cocok secara pedagogis. Analogi itu perlu tinjauan guru atau tugas kritik siswa.
- **"Jika siswa menikmati analoginya, mereka mempelajari konsepnya."** Keterlibatan dan pembelajaran adalah hasil yang terpisah. Basis bukti di sini sebagian besar kualitatif dan tidak menetapkan keuntungan belajar.
