---
title: "Pembelajaran Sosiokultural"
created: "2026-07-28T10:44:35-04:00"
type: concept
foundations: [agency, human-ai-collaboration]
pedagogy: [constructivist, learning-theories, scaffolding, sociocultural-learning]
technology: [generative-ai]
confidence: high
updated: "2026-11-08T14:09:36-05:00"
translation_of: "concepts/sociocultural-learning"
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

> **Pembelajaran sosiokultural** — keluarga teori yang berakar pada Vygotsky, yang berpendapat bahwa belajar dan perkembangan muncul melalui partisipasi sosial dan dimediasi oleh alat kultural, bahasa, serta interaksi dengan orang yang lebih tahu. Kognisi terdistribusi di antara orang, artefak, dan lingkungan alih-alih hanya berada pada individu. Dalam [[ai-education|AI dalam pendidikan]], teori sosiokultural membingkai bagaimana [[generative-ai|AI generatif]] berfungsi sebagai jenis baru *agen mediasi* — alat yang sekaligus memediasi aktivitas dan menghasilkan kontribusi kontingen pada interaksi — serta membingkai desain [[scaffolding]], Zone of Proximal Development (ZPD), magang, dan komunitas praktik. Lihat [[generative-ai-mediational-agent-sociocultural-2026]].

## Pertanyaan yang Perlu Dipertimbangkan

- Zone of Proximal Development Vygotsky adalah celah antara apa yang dapat Anda lakukan sendiri dan apa yang dapat Anda lakukan dengan bantuan. Ingat kembali saat petunjuk yang tepat waktu memungkinkan Anda mencapai sesuatu yang tidak dapat Anda lakukan sendiri — apa yang membuat bantuan itu efektif, dan kapan ia mungkin terlalu banyak membocorkan jawaban?
- Halaman ini mengklaim bahwa pemikiran manusia 'dimediasi' oleh alat kultural seperti bahasa dan tulisan yang menata ulang cara kita bernalar. Jika itu benar, bagaimana kita harus memikirkan [[conversational-ai|chatbot]] AI sebagai jenis baru alat berpikir — dan bagaimana ia mungkin mengubah makna 'mengetahui'?
- Teori sosiokultural menyatakan kognisi terdistribusi di antara orang, artefak, dan lingkungan alih-alih di dalam kepala individu. Apakah itu cocok dengan pengalaman Anda tentang bagaimana Anda benar-benar menyelesaikan pekerjaan, dan apa artinya bagi perancangan pembelajaran jika itu benar?
- Jika belajar terjadi lebih dulu di antara orang dan baru kemudian di dalam individu, apa risikonya tutor AI yang membiarkan siswa berinteraksi terutama dengan mesin alih-alih dengan rekan atau manusia yang lebih tahu?
- Bagaimana Anda memutuskan seberapa besar dukungan yang harus diberikan tutor AI agar siswa maju tanpa jawabannya sekadar diserahkan?

## Pendahuluan

### Konsep

Teori sosiokultural (Vygotsky, 1978; Luria; Leontiev) berpendapat bahwa fungsi mental yang lebih tinggi berkembang melalui partisipasi dalam aktivitas yang terorganisasi secara kultural. Berbeda dari penjelasan yang menempatkan belajar semata pada pemrosesan informasi individu, pandangan sosiokultural menekankan bahwa:

- **Mediasi bersifat fundamental.** Manusia berpikir dengan dan melalui alat kultural — bahasa, tulisan, diagram, [[ai-technologies|teknologi]] — yang menata ulang cara mereka bernalar, mengingat, dan memecahkan masalah (Wertsch, 1991). Alat-alat ini tidak sekadar mentransmisikan informasi; ia membentuk ulang kognisi dan partisipasi.
- **Belajar bersifat sosial.** Fungsi mental yang lebih tinggi muncul lebih dulu di antara orang (intersubjektif, dalam interaksi) dan baru kemudian di dalam individu. Belajar muncul melalui partisipasi dengan [[teacher-role|guru]], rekan, dan komunitas — dalam proses seperti [[scaffolding]], magang, dan pergerakan melalui ZPD.
- **[[distributed-cognition|Kognisi terdistribusi]].** Kerja kognitif tersebar di antara orang, artefak, dan lingkungan (Hutchins; Clark & Chalmers; Pea), alih-alih terkandung dalam pikiran individu. [[distributed-cognition|Kognisi terdistribusi]], [[situated-learning|pembelajaran tersituasi]], dan komunitas praktik memperluas untaian sosiokultural.

### Zone of Proximal Development (ZPD)

ZPD (Vygotsky) adalah konsep sosiokultural yang paling luas diterapkan dalam [[intelligent-tutoring|tutor AI]]: ruang antara apa yang dapat dilakukan siswa sendiri dan apa yang dapat mereka lakukan dengan bantuan. Belajar terjadi paling efektif ketika instruksi menyasar zona ini — cukup menantang untuk mendorong perkembangan, cukup didukung untuk memungkinkan kemajuan. Ia adalah landasan teoretis [[scaffolding]]: dukungan sementara yang dapat disesuaikan dan ditarik kembali seiring kompetensi tumbuh. Dalam AI dalam pendidikan, ZPD membingkai pertanyaan desain sentral tentang seberapa besar dukungan yang harus diberikan [[intelligent-tutoring|tutor AI]] agar pembelajaran maju tanpa jawabannya diserahkan — lihat [[stanford-evidence-base-ai-k12-2026]].

Bantuan buatan mesin dapat mendarat di dalam zona itu. Dalam studi acak terhadap 274 [[adult-learning|siswa dewasa]] pada empat mata pelajaran matematika, petunjuk solusi-terperinci yang dihasilkan ChatGPT menghasilkan keuntungan pra-ke-pasca 17.00% dibandingkan 1.85% tanpa petunjuk, sementara petunjuk yang ditulis tutor manusia menghasilkan 11.62%; kedua kondisi bantuan itu tidak dapat dipisahkan secara statistik ([[chatgpt-hints-human-tutor-learning-gains-2024|Pardos dan Bhandari, 2024]]). Tingkat kesalahan membatasi kesetaraan itu: 32% petunjuk yang dihasilkan gagal dalam pemeriksaan kualitas sampai [[prompt-engineering|prompting]] self-consistency memangkasnya nyaris nol pada tiga mata pelajaran aljabar dan 13% pada statistika. Orang yang lebih tahu tetapi salah satu dari tiga kali tetap agen mediasi, itulah sebabnya kontribusi mesin harus diperiksa sebelum siswa membangun di atasnya.

### Pembelajaran sosiokultural dalam pendidikan AI

Teori sosiokultural membentuk [[research-methods-aied|penelitian]] AIED dalam beberapa cara yang berbeda:

- **AI sebagai agen mediasi.** AI generatif merumitkan pembedaan sosiokultural antara sarana mediasi dan interaksi sosial: ia sekaligus memediasi aktivitas *dan* menghasilkan kontribusi peka konteks dan kontingen yang membentuk interaksi, tanpa memiliki intensionalitas, keanggotaan sosial, atau akuntabilitas. Warschauer, Tate, dan Ritchie (2026) mengusulkan *agen mediasi* sebagai kategori hibrida, dan menurunkan kebiasaan partisipasi yang mengutamakan manusia (keutamaan kognisi manusia, [[student-engagement|keterlibatan]] yang bertujuan, agensi pengawasan, kewaspadaan epistemik, [[self-regulated-learning|regulasi diri]] reflektif) untuk memelihara [[agency|agensi siswa]].([[generative-ai-mediational-agent-sociocultural-2026]])

- **Penjelasan peran regulasi AI yang peka tahap.** [[ai-cognitive-partner-co-regulation-learning|Kerangka perkembangan ko-regulasi manusia–AI]] memberi AI empat peran — perancah, dukungan metakognitif, memori eksternal, dan mitra keputusan — dan menempatkannya menurut tahap: regulasi eksternal terstruktur pada [[early-childhood-elementary-ai-education|anak usia dini]], mitra [[metacognition|metakognitif]] pada masa kanak-kanak tengah dan remaja, serta kolaborator pada kognisi kompleks pada usia dewasa.
- **Perancah terkalibrasi ZPD.** [[intelligent-tutoring|Tutor AI]] harus mengalibrasi bantuan secara dinamis agar berada di dalam zona setiap siswa. [[stanford-evidence-base-ai-k12-2026]] menunjukkan bagaimana tutor yang disetel pada tingkat siswa mengalahkan bantuan generik; [[adaptive-learning]] dan [[golrang-propact-pair-programming-2026]] mengoperasionalkan ZPD dengan menyesuaikan kesulitan dan petunjuk; dan kerangka berprinsip seperti [[finkelstein-principled-ai-education-2025]] berargumen dukungan harus ditarik seiring kompetensi tumbuh.
- **Sinyal untuk meninggalkan zona adalah sasaran, bukan kedalaman.** Tutor yang meningkatkan dan menarik bantuan per titik keputusan mengalah 65.0% dari waktu setelah giliran tentang keputusan yang *berbeda*, dua kali lipat laju giliran yang disasarkan pada keputusan yang sedang didukung, dan kedalaman balasan tidak mengurutkan hasilnya ([[adaptive-scaffolding-contingency-comet-tutor-2026|Hou et al. (2026)]]). Penarikan mengandaikan siswa yang menjawab: pengambilan menurun dari 37.0% setelah permintaan pertama menjadi 21.8% setelah permintaan ketiga, sehingga diam bukan bukti kesiapan.
- **Zona keempat: apa yang diketahui model.** [[scan-framework-task-assignment-generative-ai-2025|Tsim dan Gutoreva (2025)]] memperluas diagram Vygotsky alih-alih lingkar tutor, menambahkan zona *diketahui [[generative-ai|GenAI]]* pada ZPD dan menurunkan empat subzona yang mengklasifikasikan kepada apa sebuah tugas harus ditugaskan: Substitute (tidak ada pengetahuan spesifik tugas, sehingga kompetensi umum model yang membawanya), Aid (pengetahuan sebagian, diperkaya), Complement (cukup pengetahuan untuk mengawasi keluaran model), dan Non-negotiable (cukup untuk melakukannya tanpa bantuan, sehingga delegasi menambah sedikit). [[scaffolding|Perancah]] diekspresikan sebagai penugasan tugas alih-alih pemberian petunjuk, dan lingkar [[metacognition|metakognitif]] berupa evaluasi waktu-nyata, refleksi, dan pembelajaran itulah yang memindahkan tugas antar subzona seiring waktu.
- **Magang dan komunitas.** Gagasan sosiokultural mendasari magang kognitif, pemodelan, pembimbingan, dan penarikan bantuan; komunitas praktik membingkai belajar sebagai pergerakan menuju partisipasi yang lebih penuh dalam praktik komunitas.
- **Konteks kultural dan [[governance|institusional]].** Untaian sosiokultural yang berdekatan dengan [[constructivist|konstruktivisme]] menekankan bahwa dimensi kultural membentuk apa yang dianggap sebagai mengetahui, siapa yang berotoritas, dan apa makna usaha — lihat pembingkaian siswa–konteks–budaya dalam [[young-people-learning-generative-ai-rapid-review-2026|tinjauan cepat Sydney PreK-12]].

- **Memvalidasi ukuran tutur menuntut keterlibatan anak muda yang tuturnya diukur.** Mengontekstualisasi ulang definisi langkah tutur bersama empat siswa fokus menaikkan F1 klasifikasi [[llm|LLM]] sebesar +0.104 untuk Claim dan +0.23 untuk Question, dan interpretasi siswa sendiri menyimpang dari pembingkaian orang dewasa dan model — batas struktural klasifikasi berbasis teks, bukan masalah ukuran data ([[youth-enter-chat-llm-student-talk-2026|Santos-Deonizio et al. (2026)]]).

### Koneksi ke beban kognitif dan metakognisi

Untaian sosiokultural terkait erat dengan Teori [[cognitive-offloading|Beban Kognitif]] (dukungan harus mengelola beban tanpa menghilangkan usaha produktif) dan dengan [[metacognition|metakognisi]] (siswa di dalam zona secara aktif memantau dan meregulasi pemahaman mereka). [[stanford-evidence-base-ai-k12-2026]] menyintesis bukti [[k-12|K-12]] bahwa alat AI bekerja paling baik ketika menjaga siswa di dalam ZPD alih-alih menjawab untuk mereka, dan penelitian [[human-in-the-loop-ai]] membahas bagaimana dukungan manusia dan AI bersama-sama mendefinisikan zona siswa.

- **AI generatif sebagai agen mediasi (2026):** Dengan bersandar pada mediasi Vygotskian, sebuah makalah teori mengusulkan pembingkaian ulang AI generatif bukan sekadar sebagai alat/sarana mediasi melainkan sebagai *agen mediasi* yang aktif berpartisipasi dalam aktivitas belajar, mengaburkan batas alat-versus-interaksi-sosial yang sentral dalam teori sosiokultural ([[generative-ai-mediational-agent-sociocultural-2026]]). Ini memosisikan model generatif sebagai ko-partisipan alih-alih instrumen pasif, dengan implikasi bagi bagaimana mediasi, [[agency|agensi]], dan relasi siswa–AI diteorikan dalam [[learning-sciences|ilmu pembelajaran]].

## Miskonsepsi Umum

**"Teori sosiokultural adalah tentang faktor sosial dalam belajar sebagai pelengkap kognisi individu."** Klaim yang lebih kuat adalah bahwa kognisi **terdistribusi di antara orang, artefak, dan lingkungan** alih-alih berada di dalam kepala individu. Dalam pandangan itu AI bukan pembantu eksternal yang ditambahkan pada kognisi siswa; ia adalah komponen sistem tempat kognisi berjalan, yang mengubah apa yang seharusnya diukur.

**"Jika kognisi terdistribusi, penilaian individual mengukur hal yang salah."** Itu mengubah penafsirannya alih-alih menghapus pengukurannya. Apa yang ditangkap penilaian bergantung pada apa yang hadir dalam sistem saat itu, itulah sebabnya kinerja berbantuan dan tanpa bantuan menyimpang — keduanya pengukuran konfigurasi yang berbeda.

**"Menambahkan alat pada sebuah kelompok hanya mengubah efisiensi kelompok itu."** Itu mengubah pembagian kerja, yang merupakan unit analisis teori ini. Kelompok yang mengarahkan sebagian besar pertanyaannya ke agen telah mendistribusikan ulang kerja kognitif bahkan ketika keluarannya tidak berubah.

**"Kognisi terdistribusi menyiratkan individu tidak penting."** Itu menyiratkan kontribusi individu tidak dapat dibaca dari kinerja individual semata; unit analisisnya adalah sistem aktivitas, bukan orang yang terisolasi.

## Konsep terkait

- [[scaffolding]]
- [[constructivist]]
- [[learning-theories]]
- [[activity-theory-aied]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[human-ai-collaboration]]
- [[desirable-difficulties]]
- [[adaptive-learning]]
- [[human-in-the-loop-ai]]
- [[k-12]]
- [[intelligent-tutoring]]

## Artikel terkait
- [[youth-enter-chat-llm-student-talk-2026]] — Ketika Anak Muda Masuk ke Percakapan: validasi ukuran tutur siswa berbasis LLM
- [[generative-ai-mediational-agent-sociocultural-2026]] — AI generatif sebagai agen mediasi
- [[golrang-propact-pair-programming-2026]] — Tutor AI kolaboratif
- [[finkelstein-principled-ai-education-2025]] — Kerangka pendidikan AI berprinsip
- [[stanford-evidence-base-ai-k12-2026]] — Basis bukti Stanford untuk AI di K-12
- [[young-people-learning-generative-ai-rapid-review-2026]] — Tinjauan cepat Sydney tentang GenAI di PreK-12
- [[ai-cognitive-partner-co-regulation-learning]] — AI sebagai mitra kognitif dan ko-regulasi
- [[chatgpt-hints-human-tutor-learning-gains-2024]] — Petunjuk yang ditulis LLM menyamai petunjuk tutor manusia pada keuntungan belajar matematika (Pardos & Bhandari 2024)
- [[adaptive-scaffolding-contingency-comet-tutor-2026]] — Menarik bantuan berdasarkan sasaran giliran siswa, bukan berdasarkan kedalaman balasan
