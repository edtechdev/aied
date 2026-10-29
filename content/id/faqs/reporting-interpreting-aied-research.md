---
title: "Bagaimana Praktik Terbaik Melaporkan dan Menafsirkan Penelitian AI dalam Pendidikan?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T14:48:09-04:00"
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Naskah Anda memiliki angka utama di abstrak, dan seorang peninjau baru saja bertanya apa yang sebenarnya dilakukan kelompok kontrol. Atau Anda adalah peninjau itu, memegang sebuah meta-analisis yang efek gabungannya 0,67 dan bagian metodenya mencapai satu setengah halaman. Atau departemen Anda sedang menyusun panduan tentang bagaimana staf harus melaporkan studi AI dan menginginkan sesuatu yang lebih spesifik daripada “ikuti standar”.

Enam kelalaian menentukan sebagian besar kasus ini: sistem AI mana yang digunakan, untuk apa sistem itu dikonfigurasi, peran pedagogis apa yang dimainkannya, apakah manusia merancang atau meninjau keluarannya, apa yang sebenarnya ditangkap oleh ukuran hasil, dan apa yang dilakukan penulis terhadap bias, biaya, dan keterbatasan. “Tidak dapat dinilai” adalah putusan yang jujur ketika hal-hal itu tidak ada, dan itu putusan yang berbeda dari “terbantahkan”.

## Versi singkat

**1.** Gambarkan AI sebagai perlakuan, bukan sebagai vendor. Model, versi, konfigurasi, prompt, peran, dan siapa yang merancang atau meninjau keluarannya.

**2.** Sebutkan dasar pedagogisnya dan pembanding aktifnya. Nama produk bukan metode, dan pengajaran seperti biasa bukan kontrol yang adil.

**3.** Sesuaikan ukuran dengan klaim, termasuk apakah hasilnya diukur secara tertunda dan tanpa bantuan.

**4.** Laporkan ketidakpastian yang sesungguhnya dimiliki analisis itu: efek yang saling bergantung, varians antastudi, interval prediksi, ukuran subkelompok, bias publikasi.

**5.** Validasi setiap penilaian otomatis, dengan standar acuan yang disebutkan dan penengah yang disebutkan.

**6.** Laporkan penyeimbangnya: tata kelola, biaya komputasi, penggunaan AI Anda sendiri, hasil nol, dan hanya sitasi yang sudah Anda periksa.

## Gambarkan AI sebagai perlakuan yang dapat dibangun ulang orang lain

Inilah pemeriksaan yang paling sering gagal dilewati kiriman. Kerangka RAISE (*Reporting AI Studies in Education*, Allison 2026) adalah daftar periksa 30 butir di sepuluh domain tematik, dan klaim diagnostiknya spesifik: kiriman rutin menghilangkan model mana yang digunakan, bagaimana model itu dikonfigurasi, peran apa yang dimainkannya, dan apakah aktor manusia merancang atau meninjau keluarannya. Peninjau lalu ditinggalkan dengan empat pertanyaan yang tidak dapat dijawab. Apa sebenarnya yang dilakukan AI? Apakah AI itu diperlukan? Apakah ini dapat direplikasi? Apakah klaim pembelajarannya kredibel?

RAISE bergerak dari justifikasi pendidikan melalui spesifikasi tingkat API, interaksi pembelajar dengan AI, aksesibilitas dan kesesuaian budaya, peserta dan latar, keterlibatan manusia, desain, etika, transparansi dan reproduktibilitas, hingga keterbatasan. Matriks Etika dan Risiko yang menyertainya mencakup risiko terhadap [[agency|agensi]] pembelajar, [[equity-in-ai-education|ekuitas]], [[governance|tata kelola]] data, dan transparansi algoritmik. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah, dan Gašević (2026)]] menawarkan alternatif yang lebih ringkas. TEP-AIED melipat Transparansi, Etika, dan Pedagogi ke dalam satu struktur yang saling bergantung, menyediakan tabel pedoman yang dipetakan ke tujuh bagian makalah, dan meminta penulis menambahkan subbagian Metode berjudul “Pertimbangan Transparansi, Etika, dan Pedagogi”. Alasan mereka praktis: RAISE menyeluruh dan terlalu rinci untuk penggunaan empiris rutin. Pengungkapan itu berada di bawah [[ai-use-disclosure|pengungkapan penggunaan AI]] dan itulah yang membuat klaim [[privacy|privasi]] dan [[ethics|etika]] dapat diperiksa.

Justifikasi pendidikan didahulukan dalam RAISE karena AI bukan alat yang netral. Nilainya bergantung pada keselarasan antara masalah pembelajaran, dasar teoretis, dan pemetaan dari tujuan ke ukuran hasil. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] menemukan bahwa semua kecuali dua dari 14 meta-analisis yang diaudit mendefinisikan perlakuan sebagai sebuah alat, ChatGPT atau GenAI atau “AI” secara umum. Nama produk bukan [[pedagogy|pedagogi]]. Memperlakukan paparan ChatGPT sebagai satu intervensi umum sebanding dengan melakukan meta-analisis atas efek “kertas”.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich dkk. (2025)]] mengajukan argumen yang sama untuk studi primer. Saat mengaudit sebagian perbandingan di balik sebuah meta-analisis terkemuka, mereka menemukan hanya 21% yang memiliki perlakuan yang terdefinisi baik, kelompok kontrol, dan ukuran pembelajaran yang valid. Ukuran efek yang dilaporkan (g = 0,7) juga melebihi ukuran efek [[intelligent-tutoring|sistem tutor cerdas]] yang dirancang khusus (0,66), dan selisih itu merupakan tanda peringatan: perlakuan yang mengalahkan tutor yang dirancang khusus mungkin merupakan kumpulan hal berbeda yang memakai satu label.

Ujiannya satu pertanyaan: dapatkah pembaca yang kompeten membangun ulang intervensi Anda hanya dari bagian metode dan memperoleh hal yang sama?

## Putuskan apa yang diizinkan oleh ukuran Anda untuk Anda klaim

Dalam audit evidentiary O'Neill atas 46 studi primer yang dipilih secara acak, 28 (61%) menunjukkan masalah validitas. Ketidaksesuaian variabel terikat adalah yang paling umum (n = 15), diikuti ketidaksesuaian variabel bebas (n = 11), masalah desain eksperimen (n = 7), masalah ekstraksi data (n = 6), tidak adanya kelompok kontrol (n = 6), dan penugasan kelompok yang tidak acak (n = 6). Hasil multidimensi rutin digabungkan seolah-olah dapat dipertukarkan, dengan nilai ujian, kualitas pekerjaan rumah, [[motivation|motivasi]], [[self-efficacy|efikasi diri]], sikap, dan [[student-engagement|keterlibatan]] dilebur menjadi satu angka “prestasi akademik”.

Dua kebiasaan pelaporan mencegah hal itu. Nyatakan konstruk apa yang diukur oleh instrumen itu dan bahwa instrumen tersebut divalidasi untuk populasi tersebut; [[self-report-measures|ukuran laporan diri]] menunjukkan di mana ukuran berbasis persepsi menyimpang dari perilaku, dan [[assessment-validity|validitas penilaian]] mencakup validitas konstruk. Lalu laporkan hasil yang tidak bergantung pada keyakinan pembelajar tentang bantuan itu. Kinerja tugas langsung di bawah bantuan bukan [[learning-gains|keuntungan pembelajaran]], dan [[cognitive-offloading|offloading kognitif]] adalah mekanisme yang paling masuk akal memisahkan keduanya. [[verification-quality-reliance-calibration-genai-2026|Tinjauan mini 2026 atas 493 rekaman dan 14 studi prioritas]] menemukan tidak ada yang mengukur keberhasilan verifikasi dan keputusan ketergantungan berikutnya secara bersama terhadap standar kualitas keluaran yang ditetapkan secara independen, dan sedikit yang melihat melewati kinerja langsung ke retensi tertunda atau [[transfer-of-learning|transfer]].

Nyatakan batas atasnya secara eksplisit dalam pembahasan. Studi yang mengukur kuis yang dikerjakan dengan alat terbuka dapat mendukung klaim tentang kinerja berbantuan. Studi itu tidak dapat mendukung klaim tentang apa yang dipelajari siswa, dan kalimat itu hanya memakan satu baris.

## Laporkan ketidakpastian yang sesungguhnya dimiliki analisis Anda

Untuk sintesis, laporkan penanganan efek yang saling bergantung, varians antastudi, interval prediksi, dan penilaian bias publikasi. I² saja tidak akan cukup. O'Neill menemukan heterogenitas yang dilaporkan parah di mana pun angka itu diberikan, dari 77,2% hingga 94,4% di 13 meta-analisis dengan 12 di atas 80%, dan tidak pernah terselesaikan: tidak ada analisis moderator yang memenuhi ukuran subkelompok minimum sepuluh studi. Dua belas meta-analisis memperlakukan ukuran efek yang saling bergantung dari studi yang sama sebagai independen, yang menggelembungkan bukti yang tampak. Hanya empat yang melaporkan varians antastudi (τ²) dan hanya dua yang melaporkan interval prediksi, dan kedua interval itu mencakup nol. Bias publikasi tidak dinilai secara valid di mana pun dalam kumpulan itu.

Angka heterogenitas perlu disertai modelnya, karena I² bergantung pada presisi. [[limitations-in-aied-research|Keterbatasan dalam Penelitian AIEd]] mendokumentasikan satu sintesis pada I² = 82,98% di bawah model efek tetap dan 15,75% di bawah efek acak. Pembaca yang hanya diberi angka pertama tidak dapat menilai seberapa tidak konsisten korpus itu. Laporkan τ² dan interval prediksi bersamanya, yang juga merupakan konvensi yang diminta oleh [[meta-analysis-systematic-review|literatur tinjauan]].

Kemudian diskonlah angka utama Anda sendiri. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš dkk. (2026)]] menggabungkan 1.840 ukuran efek dari 67 meta-analisis dan menemukan bahwa setelah bias publikasi dimodelkan, efek rata-rata turun menjadi kira-kira sepertiga dari median yang diterbitkan (SMD = 0,196 dibandingkan 0,67), dengan interval prediksi dari -1,521 hingga +1,908. Interval itu merentang dari kerugian besar hingga manfaat besar bagi studi baru yang hipotetis. Itu angka paling berguna dalam makalah tersebut dan angka yang paling mungkin dihilangkan dari abstrak.

## Katakan sejauh mana klaim itu berlaku

Keadilan dan cakupan gagal dengan cara yang sama: efek besar yang maknanya lebih kecil daripada penampaknya. Sebelas dari 14 meta-analisis yang diaudit tidak menetapkan batas populasi, sehingga “siswa” merentang dari anak-anak hingga peserta pelatihan medis. Satu mata kuliah, institusi, disiplin, atau negara tidak membenarkan klaim umum, dan hasil untuk satu alat jarang bertransfer ke alat lain.

Tiga penjelasan mencakup sebagian besar efek besar, dan masing-masing dapat dilaporkan. Kebaruan adalah satu. Tambahan waktu pengerjaan tugas adalah yang lain. Yang ketiga adalah kondisi pembanding yang menerima pengajaran seperti biasa dan bukan kontrol aktif. Laporkan apa yang sebenarnya dilakukan kontrol, berapa banyak waktu yang dihabiskan setiap lengan, dan seberapa baru alat itu. Nyatakan juga batas populasinya, karena efek berbeda di antara kelompok pembelajar dan batas yang tidak dinyatakan itulah yang memungkinkan satu angka gabungan mewakili semuanya; [[differential-effects-across-learner-groups|Efek Diferensial di Antara Kelompok Pembelajar]] menguraikan variasinya.

Perlakukan alat itu sebagai sasaran yang bergerak. Sistem berpemilik berubah tanpa pemberitahuan, sehingga suatu temuan terikat pada versi model, dan [[benchmark|tolok ukur]] yang memukau pada satu rilis mungkin tidak bertahan pada rilis berikutnya. Versi dan tanggal akses termasuk dalam bagian metode karena alasan itu, bukan hanya untuk reproduktibilitas.

## Validasi penilaian otomatis

[[ai-ed-evaluation|Evaluasi AIED]] semakin banyak mendelegasikan pemberian skor kepada model, yang menjadikan prosedur validasi bagian dari hasil dan bukan lampiran. Uraian Khan Academy tentang metrik [[intelligent-tutoring|tutor AI]] mereka melaporkan bahwa keterlibatan kognitif dinilai oleh penilai [[llm|LLM]] yang dikalibrasi terhadap pakar pedagogis manusia pada F1 0,83, dan bahwa pergerakan metrik berasal dari lebih dari 40 eksperimen langsung dalam lima bulan dan bukan dari evaluasi luring ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi dkk. 2026]]). [[machines-misread-pedagogical-quality|Tseng dkk. (2026)]] menunjukkan bahwa ketidaksepakatan manusia dan mesin tentang kualitas [[formative-assessment|soal pratanggapan]] bersifat sistematis dan bukan acak, serta bahwa operasionalisasi rubrik lebih penting daripada prompting yang mendahulukan rasional.

Kesepakatan dengan pengode manusia adalah hal yang terpisah dari kualitas, dan melaporkannya seolah-olah itu kualitas adalah sasaran peninjau. [[agreement-not-quality-llm-coding-verification|Liu dkk. (2026)]] meminta seorang pakar independen menilai 855 pasangan kumpulan kode tanpa mengetahui sumbernya. Kesepakatan manusia dengan LLM berada pada Jaccard rata-rata 0,30 dibandingkan 0,52 untuk kesepakatan antarmanusia, sementara verifikator buta lebih memilih pengodean manusia dan mesin pada tingkat yang tidak dapat dibedakan (51,5% berbanding 48,5%, p = 0,537). Laporkan target kalibrasi, standar acuan, dan siapa yang menengahi ketidaksepakatan. Ketiga butir itulah yang memungkinkan pembaca memutuskan seberapa besar bobot yang dapat dibawa oleh skor otomatis.

## Ungkapkan biayanya dan penggunaan Anda sendiri

Tinjauan atas seluruh makalah konferensi AIED 2025 menemukan pola adopsi LLM tanpa pengungkapan: sebagian besar proyek menggunakan LLM, dan hanya segelintir yang melaporkan konsumsi sumber daya atau jejak karbon. Makalah itu menyediakan metode sumber terbuka dengan alat pengukuran untuk perangkat keras lokal dan awan, ditambah rumus untuk memperkirakan biaya komputasi model mutakhir yang jumlah parameternya tidak diungkapkan. Argumennya adalah bahwa tidak melaporkan biaya-biaya ini sendiri merupakan persoalan etis. Tata kelola data, persetujuan, aksesibilitas, dan kesesuaian budaya termasuk dalam paragraf yang sama (butir RAISE; [[universal-design-for-learning|desain universal untuk pembelajaran]], [[accessibility|aksesibilitas]]). [[equity-ethics-pedagogical-safety-research|Ekuitas, etika, dan keselamatan pedagogis]] memuat pembahasan yang lebih lengkap.

Penggunaan AI Anda sendiri dalam proses penelitian memerlukan pengungkapan yang sama. [[prisma-llm-ai-assisted-systematic-reviews-2026|Analisis PRISMA-LLM oleh Zabaleta dan Lin]] atas 888 makalah otomasi tinjauan menunjukkan betapa tidak meratanya pelaporan ini. Sejak 2023, 38,0% makalah perangkat lunak dan produk tidak melaporkan evaluasi sama sekali, dibandingkan 9,3% makalah LLM. Rata-rata kekayaan pelaporan adalah 6,3 untuk makalah LLM dan 3,3 untuk makalah perangkat lunak dan produk. 84,1% penggunaan LLM bergantung pada sistem berpemilik atau terhosting, dengan hanya 4,9% berbobot terbuka. Kerangka mereka memisahkan pengungkapan implementasi dari evaluasi yang peka konsekuensi di lima tingkat pengungkapan, yang merupakan templat yang dapat dipakai untuk menggambarkan apa yang dilakukan suatu alat di dalam sebuah tinjauan.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai dan Chan (2026)]] menambahkan gambaran dari sisi penulis. Dari 28 peneliti pascasarjana, 27 menggunakan GenAI di sepanjang penggalian gagasan, tinjauan pustaka, penjelasan, pemrosesan data, pemrograman, [[writing-education|penulisan akademik]], penyuntingan, dan penerjemahan. Mereka mengkalibrasi penggunaan sesuai taruhan dan norma disipliner. Kebijakan institusi mereka membahas pengajaran dan penilaian dan bukan praktik penelitian, yang menyerahkan keputusan pelaporan kepada penulis.

## Terbitkan hasil nol, dan periksa setiap sitasi

[[citation-errors-hallucinations-computing-education-2026|Denny dkk. (2026)]] memverifikasi 30 rujukan yang dibuat-buat di 14 makalah, dengan jumlah di satu simposium teknik naik dari 3 pada 2025 menjadi 17 pada 2026, atau 2,3% dari makalah prosiding tahun itu. Penyusunan draf berbantuan LLM membuat sitasi karangan yang tampak masuk akal murah dihasilkan, itulah sebabnya pemeriksaan harus terjadi sebelum pengumpulan dan bukan setelah penerimaan.

Penyeimbang dalam audit itu penting ketika Anda mengutipnya. Sebagian besar rujukan yang ditandai tidak berbahaya: 229 merupakan ketidaksesuaian metadata ACM di mana PDF-nya benar, dan 188 merupakan varian bibliografis yang sah. Jumlah yang dibuat-buat itu sengaja merupakan batas bawah, dan mayoritas yang tidak berbahaya bukan kesalahan pembulatan. Verifikasi setiap entri yang tidak dapat Anda periksa sendiri.

Melaporkan temuan nol dan temuan negatif adalah separuh lain dari basis bukti yang jujur. Bartoš dkk. menemukan bukti kuat adanya hasil nol yang ditekan (setiap uji Egger p < 0,0001) dan heterogenitas ekstrem (τ = 0,869), tanpa ada subkelompok hasil, bidang, jenjang, atau peran AI yang menunjukkan keuntungan konsisten. Mereka juga tidak menemukan perbedaan antara studi yang diterbitkan sebelum dan sesudah Januari 2023, yang melemahkan klaim bahwa alat generatif modern secara khusus menghasilkan keuntungan.

## Apa yang salah dipahami peneliti tentang hal ini

**“Ukuran efek adalah sifat dari modalitas.”** Tidak ada efek AI dalam pendidikan yang dapat dilaporkan. Semua kecuali dua dari meta-analisis yang diaudit mendefinisikan perlakuan sebagai nama alat, hanya 21% perbandingan yang diaudit memiliki perlakuan yang terdefinisi, kontrol, dan ukuran yang valid, dan g gabungan = 0,7 berada di atas tutor cerdas yang dirancang khusus pada 0,66. Ukuran efek adalah milik suatu desain, suatu populasi, dan satu kesempatan pengukuran.

**“Rata-rata gabungan adalah yang akan terjadi pada siswa saya.”** Rata-rata itu menggambarkan kumpulan studi, dan tidak ada di dalamnya yang menetapkan satu ruang kelas mana pun. Rata-rata yang disesuaikan bias adalah SMD = 0,196 dan interval prediksinya merentang dari -1,521 hingga +1,908. Heterogenitas yang dilaporkan berada di atas 80% pada 12 dari 13 meta-analisis, dan tidak ada subkelompok dalam kumpulan yang lebih besar yang menunjukkan keuntungan konsisten. Perubahan pada tingkat siswa tidak dapat diidentifikasi dari kedua angka itu.

**“Hasil nol berarti alat itu tidak berfungsi.”** Nol adalah pernyataan tentang suatu desain pada presisi tertentu, dan tidak adanya efek yang dapat dideteksi dalam satu studi adalah fakta tentang studi itu. SMD yang disesuaikan bias = 0,196 berasal dari literatur di mana setiap uji Egger signifikan, sehingga pembacaan korpus yang dapat dipertahankan adalah rata-rata yang kecil dan tidak pasti. Tidak ada subkelompok hasil, bidang, jenjang, atau peran AI dalam kumpulan yang lebih besar yang menunjukkan keuntungan konsisten. Masalah yang terdokumentasi dalam literatur ini adalah penekanan.

**“Satu studi sudah menyelesaikannya.”** Angka dasarnya menyatakan sebaliknya. 61% studi primer yang diperiksa memiliki masalah validitas, satu mata kuliah atau institusi tidak membenarkan klaim umum, dan sistem berpemilik adalah sasaran bergerak yang terikat pada versi model. Satu studi hanyalah satu titik data dengan desain yang melekat padanya.

**“Kesepakatan tinggi dengan pengode manusia berarti model menilai hal yang benar.”** Kesepakatan manusia dengan LLM adalah 0,30 dibandingkan 0,52 untuk antarmanusia, dan verifikator buta tidak dapat membedakan kedua kumpulan pengodean itu pada 51,5% berbanding 48,5%. Kesepakatan mengukur konsistensi dengan seorang pengode, dan kualitas adalah pertanyaan terpisah yang membutuhkan standar acuan dan penengah.

## Keberatan yang akan Anda dengar

**“Peninjau menginginkan kebaruan, bukan rincian metode.”** Jurnal bergerak ke arah sebaliknya. RAISE dan TEP-AIED memberi editor konstruk yang dapat disyaratkan, dan subbagian Metode TEP-AIED adalah titik masuk dengan hambatan rendah. Rincian metode itulah yang mengubah makalah yang tidak dapat dinilai menjadi makalah yang dapat dikutip.

**“Kami tidak punya ruang.”** Lima tingkat pengungkapan adalah tingkat pelaporan dan bukan tingkat risiko, sehingga kedalaman evaluasinya dapat berupa satu atau dua kalimat. Versi, prompt, dan peran muat dalam satu paragraf pendek. Biaya dan tata kelola muat dalam satu kalimat keterbatasan.

**“Semua orang melaporkannya seperti ini.”** Angka-angka mengatakan bahwa norma itulah masalahnya: 61% studi primer yang diperiksa memiliki masalah validitas, 12 dari 13 meta-analisis di atas heterogenitas 80%, 38,0% makalah perangkat lunak dan produk tanpa evaluasi.

**“Alat kami berpemilik, jadi kami tidak dapat melaporkan modelnya.”** Laporkan versi, tanggal akses, konfigurasi, prompt yang Anda berikan, peran, dan pagar pengaman. Jika vendor tidak mau menyebutkannya, kendala itu termasuk dalam keterbatasan sebagai batas atas klaim.

**“Melaporkan hasil nol akan merugikan kami.”** Hasil nol yang ditekan adalah mekanisme terdokumentasi di balik rata-rata yang disesuaikan bias SMD = 0,196. Menerbitkannya itulah yang menjaga hasil positif Anda tetap terbaca.

## Yang perlu dilakukan pekan ini

**1.** Bacalah abstrak Anda berdampingan dengan bagian metode dan hapus setiap klaim yang tidak dapat didukung oleh metode. Satu kalimat tentang batas atas ukuran biasanya cukup.

**2.** Tambahkan paragraf spesifikasi: model, versi, tanggal akses, konfigurasi, prompt, peran, dan siapa yang merancang atau meninjau keluarannya.

**3.** Tarik τ², interval prediksi, dan penilaian bias publikasi keluar dari lampiran ke dalam hasil, atau nyatakan terus terang bahwa Anda tidak menghitungnya.

**4.** Tuliskan batas populasi dan kondisi kontrol ke dalam pernyataan desain, termasuk berapa banyak waktu yang dihabiskan setiap lengan.

**5.** Verifikasi setiap rujukan yang tidak Anda baca sendiri, dan periksa bidang penulis lebih dahulu.

## Ke mana selanjutnya

[[research-methods-aied|Metode Penelitian dalam AI untuk Pendidikan]] mencakup pilihan desain di balik keputusan pelaporan ini, dan [[limitations-in-aied-research|Keterbatasan dalam Penelitian AIEd]] adalah katalog mode kegagalan dengan angka yang menyertainya. [[interpreting-and-applying-aied-research|Menafsirkan dan Menerapkan Penelitian AIEd]] adalah sisi pembaca dari masalah yang sama, [[does-ai-help-students-learn|bukti tentang pembelajaran yang tahan lama]] adalah hal yang ingin dicapai oleh sebagian besar ukuran ini, [[evaluating-ai-interventions-methods|mengevaluasi intervensi AI]] mencakup ukuran dan desain pembanding, dan [[checking-whether-educational-ai-works|memeriksa apakah AI pendidikan berfungsi]] adalah versi lebih singkat dari pertanyaan itu. Untuk celah yang belum diisi literatur ini, lihat [[research-gaps-aied|celah penelitian AIEd]].
