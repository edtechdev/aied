---
title: "Isu dan Risiko Hukum"
created: "2026-09-18T05:40:00-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
updated: "2026-11-04T02:37:02-05:00"
translation_of: "concepts/legal-issues-and-risks"
source_updated: "2026-10-28T18:24:42-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Isu dan Risiko Hukum** — paparan yang ditanggung institusi, staf, dan siswa ketika [[generative-ai|AI generatif]] diatur dengan buruk dalam pendidikan: seorang siswa yang dituduh curang secara keliru berdasarkan skor detektor, sistem proktoring yang mengawasi dan merekam lebih dari yang dibutuhkan penilaian, aturan yang terlalu luas yang menghukum alat bantu, atau kebijakan yang terlalu kabur untuk ditegakkan secara konsisten. Risikonya bukan satu pertanyaan hukum melainkan beberapa, yang datang bersamaan — evidensial (apakah tuduhan itu dapat dibuktikan sama sekali), kontraktual dan prosedural (apakah institusi mengikuti aturannya sendiri dan memberi siswa sidang yang adil), berbasis kesetaraan (apakah aturan itu membebani siswa penyandang disabilitas atau penutur non-asli), dan berbasis perlindungan data (apa yang dikumpulkan pengawasan dan di mana disimpan). Ini berbeda dari [[academic-integrity]], yaitu kerangka perilaku yang sedang ditegakkan: halaman ini tentang apa yang terjadi ketika penegakan itu digugat.

## Pertanyaan yang Perlu Dipertimbangkan

- Alat deteksi tidak dapat mengidentifikasi kepengarangan secara andal. Jika instrumen tidak dapat menetapkan fakta yang dipersoalkan, apa sebenarnya yang menjadi landasan kasus pelanggaran?
- Data proktoring dan deteksi AI dihasilkan dalam skala besar dan disimpan tanpa batas. Siapa yang menanggung paparan hukum atas data itu, institusi atau vendornya?
- Ketika kebijakan melarang "penggunaan AI" tanpa membedakan [[wright-transcription-not-generation-2026|transkripsi dari pembangkitan]], apakah aturan itu melindungi integritas atau menghukum akomodasi disabilitas?

## Pendahuluan

Bukti basis pengetahuan tentang topik ini bersifat prosedural alih-alih yuridis. Ia mendokumentasikan apa yang diperlakukan institusi sebagai bukti, bagaimana prosedur tuduhan bekerja, seberapa tidak andal instrumen-instrumennya, dan apa yang dikumpulkan pengawasan; ia belum mendokumentasikan hasil litigasi. Kesenjangan itu sebaiknya dinyatakan terus terang alih-alih diisi dengan klaim yang percaya diri: kasus-kasus yang akan menyelesaikan pertanyaan-pertanyaan ini sebagian besar tidak dilaporkan, diselesaikan di luar pengadilan, atau masih dalam proses internal institusi.

Yang didukung literatur adalah deskripsi mode kegagalan yang menciptakan paparan hukum. Pola yang berulang adalah bahwa instrumen dan prosedur institusi sendiri, bukan penuduh yang berniat jahat, yang menempatkannya pada risiko: skor probabilistik yang diperlakukan sebagai temuan, aturan yang lebih jelas dalam niat daripada dalam cakupan, sistem yang mengumpulkan data yang tidak diminta siapa pun, dan sidang yang menganggap bukti teknis tidak perlu ditelaah.

## Di mana risiko terkonsentrasi

### Tuduhan yang salah dan bukti yang cacat

[[munoz-misconduct-allegation-evidence-2026|Munoz dkk. (2026)]] menganalisis berkas tuduhan pelanggaran AI generatif yang sebenarnya dan mengelompokkan bukti yang digunakan institusi ke dalam kategori: jejak perilaku yang direkam sistem yang hanya tersedia dalam penilaian berpengawas atau tersupervisi, bukti proses seperti draf, pertemuan supervisi dan presentasi di mana praktik itu ada, serta bukti yang dihasilkan investigasi itu sendiri. Dua hal menyusul bagi paparan hukum. Pertama, dalam kiriman tanpa pengawasan kategori yang direkam sistem kosong, yang mendorong kasus ke kategori yang lebih lemah. Kedua, mereka mencatat bahwa prinsip keadilan alamiah menuntut siswa diberi tahu tentang tuduhan dan diberi kesempatan menjawab sebelum keputusan apa pun, kewajiban yang dikodifikasikan dalam standar regulasi Australia (Department of Education, 2021; TEQSA, 2025) maupun dalam kebijakan integritas akademik yang bereputasi baik. Kesempatan menjawab biasanya berupa pertemuan investigatif atau wawancara panel, dan apa pun yang dikatakan siswa menjadi bagian dari rekaman bukti — yang berarti kegagalan prosedural, bukan hanya kegagalan evidensial, adalah tempat sebuah kasus menjadi rentan.

Masalah evidensialnya berada di bawahnya. Keluaran detektor adalah bukti yang paling sering diambil dan paling tidak mampu menanggung bebannya. [[hadra-ai-detector-accuracy-efl-2026|Hadra dkk. (2026)]] menguji Turnitin dan Originality pada korpus berimbang berisi 192 teks dan menemukan akurasi keseluruhan 0.69 dan 0.61, dengan keduanya berkinerja buruk pada tulisan hibrida manusia-AI — bentuk yang paling mungkin muncul dalam tuduhan nyata — dan akurasi menurun lebih jauh seiring panjang teks, pada tulisan ilmiah, serta dengan kecenderungan ambang yang salah mengklasifikasikan karya tulisan manusia sebagai AI ketika penulisnya adalah siswa EFL. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer dkk. (2026)]] mencapai kesimpulan yang sama dari korpus dan perangkat alat yang berbeda, dan [[bassett-ai-detectors-education-2026|Bassett dkk.]] menyampaikan poin struktural bahwa tidak ada ambang yang menyelesaikan masalah: detektor yang disetel untuk menangkap penggunaan AI akan menandai karya manusia, dan yang disetel untuk menyelamatkan karya manusia akan melewatkan penggunaan AI, sehingga skor tunggal apa pun adalah pilihan tentang kesalahan mana yang dibuat. [[karr-ai-detection-humanization-2026|Tinjauan Karr]] tentang mengapa deteksi gagal mencapai tempat yang sama dari sisi humanisasi tulisan, dan [[teichmann-detecting-undetectable-misconduct-2026|Teichmann dkk. (2026)]] berargumen bahwa kerangka prosedural itu sendiri kini perlu ditinjau ulang, karena era pelanggaran yang tidak terdeteksi mematahkan asumsi bahwa pelanggaran dapat dibuktikan dari artefak yang diserahkan.

### Privasi dan pengawasan

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana dkk. (2026)]] memetakan [[remote-proctoring|proktoring jarak jauh]] di seluruh penilaian keperawatan dan menampilkan privasi serta pengawasan di antara kekhawatiran utamanya, bersama dampak emosional pada siswa dan efek [[equity-in-ai-education|keadilan]]. [[automated-online-exam-proctoring-decade-review-2026]] dan [[academic-dishonesty-automated-proctoring-ai-2026]] mendokumentasikan [[ai-technologies|teknologi]] yang sama dalam jendela waktu yang lebih panjang, dan pertanyaan perlindungan data yang mereka ajukan adalah pertanyaan biasa dengan konsekuensi hukum: apa yang ditangkap (video, audio, penekanan tombol, pandangan mata, pemindaian ruangan), berapa lama disimpan, di mana disimpan, siapa yang dapat mengaksesnya, apakah vendor memprosesnya lebih lanjut, dan apakah siswa menyetujuinya sebagai syarat penilaian. Institusi yang beroperasi di lingkungan data teregulasi menanggung kewajiban statutori jauh sebelum gugatan apa pun muncul, dan karya basis pengetahuan yang sadar FERPA dan GDPR tentang sistem AI lokal dan yang dihosting vendor menunjukkan bagaimana pertanyaan yang sama berlaku bagi alat pengajaran, bukan hanya proktoring.

### Aksesibilitas dan disabilitas

[[wright-transcription-not-generation-2026|Wright (2026)]] berargumen bahwa larangan "penggunaan AI" yang menyeluruh terlalu inklusif karena tidak membedakan transkripsi ucapan-ke-teks dan OCR dari penyusunan generatif, dan bahwa siswa dengan kondisi yang memengaruhi kontrol motorik halus, keterbacaan tulisan tangan, atau akurasi mengetik secara historis bergantung tepat pada alat-alat itu — termasuk produk ucapan-ke-teks mandiri seperti Dragon NaturallySpeaking, beberapa di antaranya telah dihentikan atau mengalami penurunan kualitas, dengan transkripsi bertenaga AI mengisi celah fungsionalnya. Wright mencatat bahwa persinggungan disabilitas, teknologi bantu, dan kebijakan pelanggaran AI masih kurang dieksplorasi dan bahwa skala pergeseran ini belum diukur secara empiris. Paparannya lugas bentuknya: aturan yang menghilangkan sarana utama seorang siswa untuk menghasilkan karya yang terbaca adalah aturan yang mungkin memerlukan proses akomodasi agar dapat bertahan. [[shin-ai-policies-sld-2026]] mendokumentasikan kekosongan yang sama dari sisi kebijakan bagi siswa dengan disabilitas belajar spesifik, dan karya basis pengetahuan tentang [[assistive-technology]] dan [[neurodiversity]] memasok istilah-istilah di sekitarnya.

### Keadilan bahasa dan batas dukungan–substitusi

[[li-genai-assessment-language-equity-2026|Li (2026)]] memasok versi berbasis kesetaraan dari argumen tersebut bagi siswa yang menggunakan bahasa Inggris sebagai bahasa tambahan. Karena satu antarmuka kini menjalankan penyuntingan yang diizinkan sekaligus penyusunan yang dilarang, aturan yang memperlakukan [[generative-ai|AI generatif]] sebagai satu kategori bantuan tidak sah membebankan tuntutan kepatuhan yang lebih tinggi pada siswa yang paling mungkin membutuhkan dukungan bahasa yang sah, memusatkan kecurigaan pada penulis yang kelancaran permukaannya telah bergeser, dan memungkinkan penegakan selektif atas bukti yang lemah — dengan tuduhan yang membawa konsekuensi reputasi, akademik, dan kadang visa atau keuangan. Obatnya adalah batas yang ditetapkan oleh fungsi dan konstruk penilaian alih-alih oleh nama alat, memisahkan intervensi permukaan yang tidak menambahkan gagasan, sumber, atau struktur analitis dari substitusi yang menciptakan atau membentuk ulang secara material kerja intelektual, dengan [[ai-use-disclosure|pengungkapan]] terkalibrasi agar penerjemahan dan penyuntingan rutin tidak menimbulkan biaya kepatuhan yang melebihi biaya yang ditanggung rekan monolingual. Struktur hukumnya adalah penalaran diskriminasi tidak langsung — identifikasi beban yang condong ke satu kohort yang dihasilkan aturan yang tampak netral, lalu tanyakan apakah tujuan yang sah dikejar dengan cara yang proporsional dan dapat dikerjakan secara praktis — diperkuat oleh harapan hukum administrasi bahwa pengambil keputusan dapat menyatakan aturan yang diterapkan, bukti yang diandalkan, dan mengapa hasilnya proporsional, yang membuat suatu keputusan dapat ditinjau dan prosesnya sah. [[ai-detection|Deteksi]] diturunkan menjadi sinyal triase, dengan riwayat draf, kiriman bertahap, dan percakapan singkat yang selaras konstruk lebih disukai sebagai bukti, sehingga paparannya berjalan dua arah: terhadap tantangan diskriminasi atau peninjauan, dan terhadap kerapuhan temuan yang bersandar pada proksi seperti bahasa yang rapi atau frasa non-asli.

### Aturan yang tidak jelas, penegakan yang tidak konsisten

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski dan Hurley (2025)]] memperlakukan kejelasan sebagai prasyarat penegakan yang dapat dipertahankan alih-alih sebagai kesopanan, dan melaporkan bahwa kebijakan sekolah hukum berkisar dari [[governance|tata kelola]] yang komprehensif hingga tanpa kebijakan yang dinyatakan, dengan sebagian besar menyerahkan kepada instruktur individu untuk menafsirkan dan menerapkan aturannya. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] menemukan variasi yang sama di universitas-universitas AS bersama ekosistem dukungan yang sama berbedanya, dan [[crompton-governing-genai-higher-ed-delphi-2026]] melaporkan konsensus ahli bahwa tata kelola terfragmentasi. Seorang siswa yang dikenai sanksi di bawah aturan yang tidak dapat dinyatakan secara tepat oleh siapa pun adalah sengketa tentang prosedur dan keadilan sebelum menjadi sengketa tentang AI, dan [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] berargumen bahwa obatnya adalah [[assessment|desain penilaian]] yang menjadikan pertimbangan dan tanggung jawab terlihat alih-alih pengawasan yang menyimpulkannya. Survei [[watson-rainie-ai-challenge-faculty-survey-2026|Watson dan Rainie (2026)]] terhadap 1,057 fakultas AS menunjukkan inkonsistensi yang sama dari arah lain: 87% responden menulis aturan tingkat tugas mereka sendiri sementara hanya 48% menyatakan institusinya memiliki panduan tertulis dan 35% menyatakan departemennya memiliki, sehingga siswa di dalam satu institusi menghadapi tambal sulam kebijakan yang ditulis secara individual. Respons struktural di bawah dokumen-dokumen itu tipis — gugus tugas atau kelompok pengawas pada 55% kasus, tetapi [[ai-literacy|literasi AI]] diadopsi sebagai capaian pendidikan umum hanya pada 13% — dan itu penting secara hukum karena menegakkan aturan yang tidak pernah diadopsi institusi sulit dipertahankan.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher dan Calderon (2025)]] menempatkan kelemahannya lebih ke hulu, pada tata kelola alih-alih pada perilaku siswa atau kualitas instrumen. Kerangka indikator integritas akademik mereka — 130 butir di bawah delapan dimensi yang bergerak dari desain dan pengembangan melalui analisis, pelaporan, evaluasi, dan perbaikan — ditulis sebagai pertanyaan tata kelola bagi dewan dan komite: apakah dewan tertinggi institusi menerima pembaruan tentang proses dan hasil penilaian, apakah indikator kinerja utama mencakup kualitas penilaian, apakah induksi dan orientasi mencakup integritas akademik, dan apakah ada jalur sederhana untuk merujuk kasus kecurangan kontrak. Program reformasi mereka menyasar arsitektur tata kelola, orang-orang yang memegang peran tata kelola, dan teknologi serta sumber daya yang mendukung penilaian, dan mereka berargumen bahwa pengembangan semacam itu tidak mungkin membuahkan hasil tanpa daya dukung eksternal dari [[regulation|regulasi]], [[benchmark|tolok ukur]], dan kompetisi antar institusi. Bagi paparan hukum, implikasinya adalah bahwa posisi yang dapat dipertahankan bersandar pada mengetahui dan mendokumentasikan praktik sendiri — informasi yang sama yang dibutuhkan institusi ketika suatu keputusan digugat.

### Menyerang penilai otomatis

Paparan yang berbeda berada di dalam instrumen itu sendiri. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] menyembunyikan lima injeksi prompt tidak langsung di dalam berkas esai sintetis yang telah dinilai gagal oleh [[automated-assessment|alat penilaian AI]] institusional (Microsoft Copilot, GPT-5.2) pada enam dari enam percobaan dasar. Dua strategi menaikkan nilai tanpa peringatan yang terlihat bagi pengguna, dengan tingkat keberhasilan serangan yang dilaporkan 100% (9 dari 9 iterasi) dan 94% (17 dari 18), dengan menggabungkan manipulasi instruksi, permainan peran, dan obfuskasi; alat itu diam-diam menonaktifkan obrolan setelah memblokir serangan paling sederhana, dan pada satu iterasi mengumumkan bahwa ia tidak akan pernah mengikuti instruksi yang tertanam lalu menaikkan nilai pada masing-masing dari enam percobaan berikutnya. Nilai yang diperoleh melalui instruksi tersembunyi tidak membawa klaim [[assessment-validity|validitas]] apa pun, dan teknik yang sama dapat digunakan untuk merendahkan kiriman tanpa meninggalkan jejak yang tahan lama pada keluarannya — yang berarti rekaman banding untuk keputusan otomatis yang digugat mungkin kosong, dan temuan pelanggaran (atau temuan kelayakan) tidak dapat dibuktikan dari artefaknya sama sekali. Permintaan Humble di tingkat sektor jelas: [[educational-policy-ai|kebijakan AI]], [[educational-development|pengembangan profesional]], dan pengujian ketahanan yang terstandardisasi dan agnostik domain agar permukaan serangan diukur alih-alih diasumsikan, dengan pembatasan penggunaan AI dan [[human-in-the-loop-ai|tinjauan manusia]] disediakan untuk pekerjaan berisiko tinggi.

### Kepemilikan dan pertanyaan domain publik

Hak cipta adalah pertanyaan hukum lain di wilayah ini, dan arahnya berlawanan dengan pelanggaran. [[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley dan Downes (2026)]] membaca posisi Kantor Hak Cipta Amerika Serikat sebagai memperlakukan prompt semata sebagai tidak memadai untuk kepengarangan. Jika bacaan itu bertahan, karya yang murni dihasilkan mesin tidak dimiliki oleh orang yang menyusun promptnya, yang penting dalam dua hal: kasus pelanggaran tidak memiliki teks yang dikarang untuk diatribusikan kepada siswa, dan institusi yang menerbitkan karya itu tidak dapat menuntut hak atasnya. Lisensi kemudian melakukan pekerjaan yang seharusnya dilakukan kepemilikan, itulah sebabnya lisensi terbuka dan integritas akademik adalah satu masalah yang dilihat dari dua sisi.

### Melampaui gerbang kampus

Bagi program profesional, paparan tidak berakhir saat kelulusan. Gutowski dan Hurley mencatat bahwa aturan perilaku profesional yang mengikat pengacara praktik — kewajiban kompetensi teknologis, kerahasiaan, supervisi orang lain yang menggunakan alat, keterusterangan kepada tribunal — sudah melekat pada penggunaan AI, dan bahwa otoritas yang [[hallucination-risk|dihalusinasi]] telah menghasilkan sanksi bagi praktisi yang mengajukan kasus yang difabrikasi. Logika pemindahan yang sama berlaku di mana pun lisensi, registrasi, atau kewajiban statutori mengikuti lulusan, itulah sebabnya halaman disiplin untuk [[legal-education|Pendidikan Hukum]] dan [[medical-education|profesi kesehatan]] berada di sebelah halaman ini.

## Pertanyaan Terbuka

- Manakah dari risiko ini yang benar-benar telah menghasilkan litigasi atau temuan regulasi? Basis pengetahuan memiliki prosedur, kebijakan, dan evaluasi teknis, tetapi tidak memiliki hasil kasus, dan tidak boleh dibaca seolah-olah memilikinya.
- Apakah keluaran detektor bertahan sebagai bukti apa pun setelah institusi mengakui tingkat kesalahannya dalam sidang, atau apakah pengakuan itu mengubah kasus menjadi sengketa keadilan prosedural?
- Apakah vendor atau institusi yang menjadi pengendali data ketika proktoring dan deteksi berjalan melalui platform pihak ketiga, dan apakah itu mengubah nasihat bagi institusi?
- Haruskah institusi menerbitkan standar bukti yang mereka terapkan pada pelanggaran AI, seperti ambang evidensial diterbitkan di tempat lain, sebagai cara mengurangi tuduhan yang salah dan paparan hukum sekaligus?

## Miskonsepsi Umum

**"Pelanggaran AI adalah satu pertanyaan hukum."** Ia adalah beberapa yang datang bersamaan — **evidensial** (apakah tuduhan itu dapat dibuktikan sama sekali), **kontraktual dan prosedural** (apakah institusi mengikuti aturannya sendiri dan memberi sidang yang adil), dan yang berkaitan dengan **kesetaraan**. Respons yang menangani bukti sementara mengabaikan prosedur terpapar secara hukum pada dimensi yang tidak pernah dipertimbangkannya, dan institusi cenderung bersiap untuk dimensi mana pun yang pernah mereka digugat.

**"Institusi memiliki kebijakan yang konsisten, jadi risikonya ada pada siswa."** Inkonsistensinya juga berjalan ke arah lain. Survei [[watson-rainie-ai-challenge-faculty-survey-2026|Watson dan Rainie (2026)]] terhadap **1,057 fakultas AS** menemukan bahwa **87% responden menulis panduan tingkat tugas mereka sendiri** — sehingga aturan yang operatif bervariasi di dalam satu institusi, dan seorang siswa dapat mematuhi aturan satu instruktur dan melanggar aturan instruktur lain pada minggu yang sama. Siswa yang dituduh di bawah standar yang tidak dinyatakan memiliki masalah prosedural yang diciptakan institusi.

**"Deteksi menyediakan bukti yang dibutuhkan suatu prosedur."** Deteksi menyediakan skor. Pertanyaan evidensialnya adalah apakah tuduhan dapat dibuktikan sama sekali, dan [[ai-detection|literatur deteksi]] menunjukkan alat-alat itu tidak menghasilkan reliabilitas maupun kategori yang dapat ditafsirkan yang dibutuhkan proses disipliner. Membangun prosedur di atas detektor berarti membangunnya di atas mata rantai terlemah.

**"Risikonya hipotetis, dan kebijakan akan mengejarnya."** Risiko itu sedang terdistribusi secara tidak merata sekarang, dan siswa yang menyerapnya adalah mereka yang paling tidak mampu membantah suatu prosedur. Asimetri antara kapasitas institusi untuk menyelidiki dan kapasitas siswa untuk menjawab adalah kerugian saat ini alih-alih kerugian masa depan.

## Konsep terkait

- [[academic-integrity]] — kerangka perilaku yang penegakannya membawa risiko
- [[ai-detection]] — instrumen di pusat kasus tuduhan yang salah
- [[remote-proctoring]] — pengawasan dalam penilaian dan pertanyaan perlindungan datanya
- [[assessment-validity]] — apakah bukti dapat menetapkan klaim yang dibuat darinya
- [[privacy]] — pengumpulan, penyimpanan, dan pemrosesan lanjutan data siswa
- [[regulation]] — kewajiban statutori dan regulasi yang harus dipenuhi institusi
- [[governance]] — desain kebijakan internal dan konsistensi penegakan
- [[educational-policy-ai]] — kebijakan AI institusional sebagai sumber paparan yang tidak diinginkan
- [[ai-use-disclosure]] — ekspektasi pengungkapan dan tepi yang tidak dapat ditegakkan
- [[accessibility]] — penyesuaian yang wajar ketika suatu aturan menghilangkan alat bantu
- [[assistive-technology]] — alat-alat di pusat masalah inklusi berlebih
- [[neurodiversity]] — siswa yang paling terpapar larangan yang terlalu luas
- [[equity-in-ai-education]] — beban diferensial deteksi dan pengawasan
- [[student-experience]] — biaya manusia yang mendahului biaya hukum
- [[hallucination-risk]] — otoritas yang difabrikasi sebagai liabilitas profesional dan institusional
- [[reducing-ai-misuse]] — alternatif pencegahan alih-alih tuduhan

## Artikel terkait

- [[munoz-misconduct-allegation-evidence-2026]] — Apa yang sebenarnya terkandung dalam berkas tuduhan pelanggaran, dan persyaratan keadilan alamiah
- [[hadra-ai-detector-accuracy-efl-2026]] — Akurasi detektor, kegagalan pada teks hibrida, dan risiko salah klasifikasi EFL
- [[van-vlasselaer-ai-detector-reliability-2026]] — Reliabilitas alat deteksi pada korpus kedua
- [[bassett-ai-detectors-education-2026]] — Mengapa tidak ada ambang deteksi yang bisa benar: argumen pertukaran galat
- [[teichmann-detecting-undetectable-misconduct-2026]] — Prosedur pelanggaran ditinjau ulang ketika bukti menjadi tidak terdeteksi
- [[wright-transcription-not-generation-2026]] — Aturan AI yang terlalu inklusif, akomodasi disabilitas, dan penyesuaian yang wajar
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Proktoring jarak jauh dipetakan, dengan kekhawatiran privasi dan pengawasan
- [[automated-online-exam-proctoring-decade-review-2026]] — Satu dekade penelitian proktoring otomatis
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Ketidakjujuran akademik dan proktoring di era AI
- [[gutowski-hurley-genai-policy-legal-education-2025]] — Kejelasan kebijakan sebagai prasyarat penegakan yang dapat dipertahankan
- [[qian-governing-genai-higher-ed-policy-2026]] — Kebijakan dan ekosistem dukungan di universitas-universitas AS yang inovatif
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Konsensus ahli tentang tata kelola yang terfragmentasi
- [[sharma-judgment-visible-genai-assessment-2026]] — Integritas melalui pertimbangan yang terlihat alih-alih pengawasan
- [[shin-ai-policies-sld-2026]] — Kekosongan kebijakan bagi siswa dengan disabilitas belajar spesifik
- [[li-genai-assessment-language-equity-2026]] — Keadilan bahasa sebagai masalah desain aturan: batas dukungan–substitusi, diskriminasi tidak langsung, dan ketertinjauan (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Siswa menyerang penilai AI melalui injeksi prompt tidak langsung, dengan nilai berubah tanpa terdeteksi (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Indikator tata kelola dan program reformasi untuk mengautentikasi penilaian (Coates, Croucher & Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1,057 fakultas AS: kebijakan individual jauh melampaui kebijakan institusional, respons struktural tipis (Watson & Rainie 2026)
