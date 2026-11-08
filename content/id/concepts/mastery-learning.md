---
title: "Pembelajaran Penguasaan"
type: concept
pedagogy: [mastery-learning]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/mastery-learning"
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

> **Pembelajaran penguasaan** — kerangka [[pedagogy|pedagogis]], yang diformalkan oleh Benjamin Bloom, di mana [[learners|siswa]] hanya maju setelah menunjukkan ambang kompetensi yang ditetapkan pada setiap unit, alih-alih bergerak menurut jadwal kelas yang tetap. Kerangka ini bertumpu pada premis bahwa sebagian besar siswa dapat mencapai penguasaan jika diberi waktu, umpan balik, dan instruksi yang cukup serta disesuaikan dengan keadaan mereka saat ini. Tutor AI dan sistem adaptif makin mengoperasionalkan model ini dengan memodelkan pengetahuan siswa secara berkelanjutan, memilih tugas, dan mempertahankan latihan sampai kompetensi ditunjukkan.

## Pertanyaan yang Perlu Dipertimbangkan

- Sebagian besar persekolahan menetapkan waktu dan membiarkan capaian bervariasi — semua orang maju setelah sejumlah minggu tertentu. Pembelajaran penguasaan membalik ini: capaian ditahan konstan sementara waktu, umpan balik, dan latihan bervariasi. Model mana yang lebih cocok dengan cara Anda benar-benar mempelajari sesuatu yang sulit?
- Satu peringatan penting di halaman ini: 'kebenaran bukan penguasaan.' Siswa dapat menghasilkan jawaban yang benar sambil melewatkan satu kendala kunci, menipu sistem agar menyatakan penguasaan terlalu dini. Dapatkah Anda memikirkan keterampilan yang, meski dapat dilakukan dengan benar, tetap tidak berarti Anda benar-benar paham kapan *tidak* melakukannya?
- AI berbasis penguasaan memberi siswa agensi untuk memilih tugasnya sendiri, tetapi simulasi menunjukkan bahwa pemilihan mandiri yang naif dapat menghasilkan latihan berlebih yang masif. Di mana keseimbangan yang tepat antara membiarkan siswa memilih dan memberlakukan kendala yang menjaga kemajuan tetap efisien?
- Halaman ini menekankan retensi yang tahan lama, bukan hanya satu kinerja benar — itulah sebabnya penguasaan harus diikuti latihan berjarak. Bagaimana mungkin seorang siswa tampak 'menguasai' sesuatu hari ini hanya untuk kehilangannya dalam hitungan jam?
- Jika AI menyatakan Anda telah 'menguasai' suatu topik, apa yang ingin Anda minta ia periksa sebelum Anda percaya — di luar beberapa jawaban yang benar?

## Pendahuluan

Pembelajaran penguasaan berpendapat bahwa capaian harus ditahan konstan sementara waktu dan dukungan bervariasi: siswa menempuh unit-unit kecil yang tersusun baik dan menerima umpan balik korektif sampai memenuhi kriteria penguasaan, alih-alih dipindahkan tanpa memedulikan apa yang telah mereka pelajari. Pembingkaian ulang Bloom menjadikan [[formative-assessment|penilaian formatif]] yang sering dan definisi kompetensi yang eksplisit sebagai pusat instruksi, dan justru kombinasi itulah — diagnosis, umpan balik, pendakian yang adaptif — yang diotomatiskan [[adaptive-learning]] dan [[intelligent-tutoring]]. AI karena itu memperluas kelayakan pendekatan penguasaan dan mempertajam pertanyaan apakah umpan balik yang dihasilkan terkalibrasi cukup baik untuk mensertifikasinya.

## Asal Usul dan Gagasan Inti

Pembelajaran penguasaan Bloom membingkai ulang tujuan instruksi dari "menyortir siswa menurut bakat" menjadi "memastikan kompetensi sebelum kemajuan." Jika instruksi konvensional memperlakukan waktu sebagai tetap dan capaian sebagai variabel, pembelajaran penguasaan membaliknya: capaian ditahan konstan dan waktu, umpan balik, serta latihan dibiarkan bervariasi. Siswa menempuh unit-unit kecil yang tersusun baik dan, yang krusial, menerima umpan balik korektif ketika mereka belum mencapai kriteria penguasaan alih-alih dibiarkan terus maju. Ini menempatkan [[formative-assessment|penilaian formatif]] di jantung model — pemeriksaan sering dan berisiko rendah yang mendiagnosis apakah siswa siap maju — dan mengandaikan gagasan [[assessment|penilaian]] yang jelas dan terikat pada kinerja yang dapat diamati, bukan pada waktu duduk di kelas.

## Bagaimana AI Mengoperasionalkan Penguasaan

Kemacetan pembelajaran penguasaan klasik adalah biaya di sisi guru untuk mendiagnosis keadaan setiap siswa dan mempersonalisasi instruksi berikutnya. Sistem AI modern menyerangnya melalui [[student-modeling|pemodelan siswa]] dan [[knowledge-tracing|pelacakan pengetahuan]]: alih-alih satu skor agregat, sistem memelihara representasi dinamis tentang komponen pengetahuan mana yang telah (atau belum) dikuasai siswa. Karya Responsible-DKT tentang [[neural-symbolic-knowledge-tracing|pelacakan pengetahuan neural-simbolik]] menyuntikkan aturan penguasaan eksplisit ke dalam model siswa yang dalam — respons benar berulang menaikkan prediksi penguasaan, sementara respons salah berulang menjadi sinyal non-penguasaan yang lebih kuat — menghasilkan estimasi keadaan yang interpretabel dan andal secara temporal yang dapat ditindaklanjuti [[intelligent-tutoring|tutor cerdas]].

Dengan model penguasaan yang berjalan, tugas sistem menjadi memutuskan *apa yang disajikan berikutnya*. [[simulation|Simulasi]] strategi pemilihan tugas siswa menunjukkan bahwa otonomi naif (misalnya tugas yang dipilih sendiri, penargetan kelemahan yang menghindari risiko) dapat menghasilkan latihan berlebih substansial pada soal multi-langkah yang kompleks, sementara kendala sistem yang tertarget dapat memperbaiki strategi maladaptif dengan sedikit penalti bagi siswa yang sudah efisien. Inilah tepatnya pertukaran yang harus diseimbangkan sistem [[adaptive-learning]] dan [[personalized-learning]]: memberikan [[agency|agensi siswa]] di tempat ia membantu sambil memberlakukan kendala yang menjaga kemajuan menuju penguasaan tetap efisien. Keputusan semacam itu juga bersinggungan dengan kapasitas siswa sendiri untuk mengatur usahanya, mengikat pembelajaran penguasaan pada [[self-regulated-learning]].

**Peringatan penting untuk inferensi penguasaan: kebenaran bukan penguasaan.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, dan Stamper (2026)]] menunjukkan bahwa siswa yang menggeneralisasi berlebihan suatu keterampilan — menghasilkan tindakan yang benar sambil melewatkan kendala penerapan yang krusial — dapat tampak menguasai, sehingga aturan penghentian penguasaan berbasis [[knowledge-tracing|pelacakan pengetahuan]] mengakhiri latihan sebelum mereka menemui kasus di mana tindakan itu semestinya *ditahan*. Obatnya adalah menilai *kapan menahan* tindakan, bukan hanya cara melakukannya: sertakan tugas detektor "jangan-bertindak" sebelum ambang penguasaan terpicu, dipasangkan dengan [[feedback|umpan balik]] yang menyebut kendala yang hilang. Penguasaan lebih baik dipahami sebagai diskriminasi kendala penerapan ditambah eksekusi tindakan, bukan kebenaran semata.

**Peringatan kedua menyangkut aturan bukti di balik ambang.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] menjalankan empat aturan pembaruan pada urutan peristiwa yang identik dari log matematika ASSISTments 2012–13 — separuh konfirmatori berisi 12,716 siswa dan 985,813 peristiwa ternilai — dan menemukan jumlah penguasaan yang dinyatakan bergerak mengikuti aturan, bukan mengikuti siswa: mengkreditkan penyelesaian apa pun menempatkan 93.9% dari 113,428 pasangan siswa–keterampilan melewati posterior 0.95, dibanding 72.8% ketika baris berbantuan atau diulang dibaca sebagai percobaan pertama yang gagal. Pasangan yang dinyatakan lulus oleh aturan longgar lebih dahulu daripada aturan ketat kemudian mencapai akurasi tanpa bantuan 70.9% dibandingkan 85.7% di tempat kedua aturan sepakat, di bawah laju dasar 0.744. Gerbang kemajuan yang menghitung penyelesaian berbantuan karena itu mensertifikasi siswa yang pekerjaan mandirinya kemudian berada di bawah rata-rata, yang menjadikan perlakuan atas [[help-seeking|bantuan]] di dalam aturan pembaruan — bukan ambang numeriknya sendiri — sebagai keputusan yang menetapkan apa yang disertifikasi sebuah lencana penguasaan.

## Praktik, Retensi, dan Batas Dukungan AI

Penguasaan juga bergantung pada retensi yang tahan lama, bukan sekadar satu kinerja benar. Ilmu kognitif tentang [[retrieval-spacing-interleaving|latihan pengambilan]] dan kurva lupa memotivasi latihan berjarak setelah ambang penguasaan tercapai. Sistem pengulangan berjarak berbasis AI seperti Memdora menghasilkan materi latihan pada titik pembacaan dan menawarkan taksonomi interaksi pengambilan yang berlandaskan kognitif, dijadwalkan oleh algoritma mutakhir, sehingga penguasaan yang telah dicapai diperkuat seiring waktu alih-alih hilang dalam hitungan jam. Desain ini bersandar pada [[cognitive-psychology]] dan prinsip [[desirable-difficulties|kesulitan yang diinginkan]] untuk menjadikan usaha pengambilan itu sendiri bagian dari proses belajar.
**Klaim retensi kini punya pengukurannya, dan model penguasaan gagal di situ.** Dilatih pada Sesi 1 untuk memprediksi kinerja seminggu kemudian, Additive Factors Model dan BKT melebih-lebihkan kinerja sesi berikutnya sekitar 58% dan 51%, BKT-Forgetting sebesar 47%, dan tidak satu pun mereproduksi efek jarak yang teramati pada 88 partisipan yang mempelajari 48 pasangan kata dalam enam sesi. Pencocokan retrospektif pada seluruh kumpulan data membuat model yang sama tampak dapat diterima (AUC 0.79, 0.77, dan 0.74), sehingga klaim retensi sebuah sistem penguasaan hanya sebaik metode validasinya ([[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan & Carvalho, 2025]]).

Akhirnya, bukti memperingatkan agar tidak mengasumsikan dukungan yang dihasilkan AI bermanfaat secara seragam. Dalam studi multi-[[governance|institusi]] tentang jejak animasi yang dihasilkan AI bagi pemrogram pemula, manfaatnya bergantung pada konteks dan berjangka pendek, dan siswa di tengah [[student-engagement|keterlibatan]] mengalami penurunan kinerja yang diatribusikan pada biaya koordinasi — efek bergaya pembalikan keahlian yang menegaskan perlunya mempersonalisasi dukungan pada keadaan siswa saat ini alih-alih menerapkan alat secara menyeluruh. Demikian pula, kontinum perkembangan [[ai-literacy|literasi AI]] di [[higher-ed|pendidikan tinggi]] memosisikan penguasaan bukan sekadar mengadopsi alat AI dengan lancar, melainkan bergerak melalui tahap penggunaan yang terinformasi dan kritis, masing-masing dengan strategi [[formative-assessment|penilaian formatif]] sendiri. Bersama-sama temuan ini membingkai pembelajaran penguasaan berbantuan AI sebagai sistem yang harus dikalibrasi pada siswa individual, diberi jarak secara berkelanjutan, dan dinilai untuk kompetensi yang benar-benar ada alih-alih keluaran yang lancar.

- **Pembelajaran penguasaan dengan kendali bersama hanya seefisien strategi pemilihan tugas siswa.** Studi simulasi (1,000 [[simulating-students|siswa tersimulasi]] per jalannya, parameter AFM dan BKT dicocokkan pada log MathTutor dan DataShop nyata) membandingkan sembilan strategi pemilihan tugas. Efisiensinya bervariasi satu orde besaran: strategi penghindar risiko "Minimize Worst Case Loss" — memilih keterampilan yang kehilangan penguasaan kasus terburuknya paling kecil — menghasilkan latihan berlebih 30.28x dalam penyelesaian persamaan (28.93x dalam interpretasi grafik), dibandingkan 1.73 +/- 0.38 rata-rata untuk strategi lain. Kendala sistem yang tertarget menyelamatkannya secara bedah: kendala pemilihan tugas memangkas latihan berlebih menjadi 12.88/14.46x, dan bias "Prefer Harder" pada pemilihan soal memangkasnya menjadi 1.98x (Cohen's d = 1.86) — sementara strategi yang sudah efisien tidak terpengaruh. Implikasi desainnya: kendala harus sadar strategi, melindungi pengatur diri yang patologis tanpa membebani yang baik, dan desain ulang berbasis simulasi lebih dulu menghindari mengekspos siswa pada latihan berlebih 30x untuk menemukan perbaikannya. ([[noh-simulating-task-selection-2026]])

Penilaian berbasis standar adalah padanan penilaian dari pembelajaran penguasaan, dan [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] mengidentifikasinya di antara lima praktik inovatif yang selaras dengan "penilaian untuk pembelajaran" yang dapat diadopsi pendidik pendidikan tinggi — tetapi mereka menemukannya nyaris absen dari wacana pendidikan manajemen. Mereka mengatributkannya pada hambatan normatif: "penilaian pada kurva" yang berujuk norma, pensinyalan eksternal (peringkat, magang, akreditasi), dan pola pikir instrumental siswa semuanya menolak pendekatan berorientasi penguasaan tanpa nilai. Rekomendasi mereka adalah eksperimentasi bertahap — misalnya memperkenalkan rubrik berbasis standar untuk satu tugas sebelum diskalakan — didukung koordinasi tingkat program dan bukti Scholarship of [[teacher-role|Teaching]] and Learning yang terdokumentasi.

## Miskonsepsi Umum

**"Ambang penguasaan adalah sifat objektif siswa."** Ambang itu adalah sifat dari *aturan* yang dipakai memperbaruinya. [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] menjalankan **empat aturan pembaruan pada urutan peristiwa yang identik** dari kumpulan data ASSISTments, dan aturan-aturan itu tidak sepakat tentang siapa yang siap. Penguasaan karena itu adalah keputusan yang dicatat dalam sebuah angka, bukan fakta yang ditemukan tentang seorang siswa, dan aturan itu harus diperlakukan sebagai kebijakan yang dinyatakan alih-alih detail implementasi.

**"Jika sistem menyatakan menguasai, siswa siap maju."** Hanya relatif terhadap aturan pembaruan yang berlaku. Di tempat aturan mengkreditkan pekerjaan berbantuan, "menguasai" dapat menggambarkan siswa yang berhasil dengan dukungan dan bukan secara mandiri — divergensi yang sama antara kinerja berbantuan dan kapabilitas tanpa bantuan yang didokumentasikan literatur [[learning-gains|keuntungan belajar]].

**"Pembelajaran penguasaan adalah pedagogi yang akhirnya dimungkinkan AI."** Mekanismenya jauh mendahului AI — Bloom memformalkan kerangka ini beberapa dekade lalu — dan AI mengoperasionalkannya dengan mengotomatiskan keputusan penilaian dan pendakian, bukan dengan mewujudkan desain yang sebelumnya mustahil. Pembingkaian ulang itu penting karena otomasi mewarisi pilihan aturan, dan aturan itulah tempat pertimbangannya berada.

**"Penilaian yang lebih sering di bawah penguasaan membuat ambang lebih andal."** Frekuensi memperbaiki estimasi dan tidak memperbaiki aturan yang salah spesifikasi. Menghitung ulang penguasaan lebih sering dari peristiwa yang mencakup pekerjaan berbantuan justru lebih cepat konvergen pada jawaban salah yang sama.

## Konsep terkait

- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[self-regulated-learning]]
- [[formative-assessment]]
- [[desirable-difficulties]]
- [[retrieval-spacing-interleaving]] — pengambilan dan penjarakan sebagai mesin latihan di dalam siklus penguasaan

## Artikel terkait
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Generalisasi berlebihan yang menipu: penguasaan adaptif dapat menghentikan latihan sebelum siswa tahu kapan harus menahan tindakan (An, McLaren & Stamper 2026)
- [[neural-symbolic-knowledge-tracing]] — Menyuntikkan aturan penguasaan/non-penguasaan ke dalam pembelajaran mendalam untuk pemodelan siswa yang bertanggung jawab dan interpretabel
- [[mesny-innovative-assessment-grading-management-2026]]
- [[crediting-assisted-work-inflates-mastery-2026]] — Mengkreditkan pekerjaan berbantuan menggelembungkan penguasaan: aturan bukti mana yang menetapkan siapa dinyatakan menguasai (Srivastava 2026)
- [[noh-simulating-task-selection-2026]] — Menyimulasikan strategi pemilihan tugas siswa dan kendala sistem dalam pembelajaran penguasaan (Noh et al. 2026)
- [[schuetze-knowledge-tracing-forgetting-2026]] — Pelacakan pengetahuan melebih-lebihkan kinerja sesi berikutnya dan melewatkan efek penjarakan (Schuetze, Yan & Carvalho 2025)
