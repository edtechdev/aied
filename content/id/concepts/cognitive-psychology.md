---
title: "Psikologi Kognitif"
created: "2026-08-27T10:52:12-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/cognitive-psychology"
source_updated: "2026-11-01T09:12:21-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Psikologi kognitif / kognitivisme** — keluarga teori yang menjelaskan pembelajaran melalui proses mental internal — atensi, persepsi, memori, penalaran, dan metakognisi — alih-alih melalui perilaku yang dapat diamati semata. Dalam [[ai-education|AI dalam pendidikan]], asumsi kognitivis menopang kontribusi paling khas bidang ini: sistem [[intelligent-tutoring|tutor cerdas]] yang memodelkan pengetahuan pembelajar, [[knowledge-tracing|pelacakan pengetahuan]] dan [[cognitive-diagnosis|diagnosis kognitif]] yang melacak apa yang diketahui pembelajar, desain [[feedback|umpan balik]] yang berpijak pada diagnosis kesalahan, dan seluruh keluarga [[student-modeling|pemodelan pembelajar dan instruksi adaptif]]. Kognitivisme adalah jalan tengah antara [[behaviorism|behaviorisme]] (belajar sebagai perubahan perilaku) dan [[constructivist|konstruktivisme]] (belajar sebagai pemaknaan aktif), dan ia adalah lensa teoretis yang paling erat terkait dengan metafora komputer tentang pikiran yang menggerakkan AIED awal.

## Pertanyaan yang perlu dipertimbangkan

- Ketika Anda memikirkan 'belajar,' apakah Anda membayangkan perubahan dalam apa yang dilakukan seseorang, atau perubahan dalam apa yang mereka ketahui dan dapat panggil kembali? Bagaimana perbedaan itu dapat mengubah cara Anda menilai apakah alat tutor AI benar-benar bekerja?
- Tutor AI dibangun di atas 'metafora komputer' — memperlakukan pikiran sebagai sistem pemrosesan informasi dengan batas memori. Di mana metafora itu terasa kuat, dan di mana ia mungkin melewatkan sesuatu yang penting tentang cara manusia belajar?
- Sebuah alat AI membuat tugas terasa tanpa usaha: ia menjelaskan langkah berikutnya, mengurangi gesekan, dan pembelajar tampil gemilang saat menggunakannya. Apakah itu dihitung sebagai [[teacher-role|pengajaran]] yang berhasil? Bagaimana Anda tahu apakah pembelajar kini dapat melakukannya tanpa alat itu?
- Cognitive Load Theory membedakan beban intrinsik, ekstraneus, dan germane. Jika Anda merancang asisten AI, jenis beban mana yang sengaja akan Anda coba kurangi, dan mana yang akan Anda hati-hati agar TIDAK dihilangkan?
- Jika seorang pembelajar tahu mereka dapat melimpahkan memori dan penalaran ke AI, kapan itu strategi cerdas dan kapan itu jalan pintas yang diam-diam menghambat pembelajaran? Apa yang menentukan perbedaannya?
- Kognitivisme mengasumsikan pengetahuan dapat dipecah menjadi komponen dan dilacak sepanjang waktu. Apa yang mungkin hilang ketika kita mereduksi pemahaman pembelajar menjadi sekumpulan komponen pengetahuan yang dapat dilacak?

## Pendahuluan

Psikologi kognitif adalah tradisi teori belajar yang memperlakukan pembelajaran sebagai perubahan representasi mental internal — konsep, skema, dan prosedur yang tersimpan dalam memori — alih-alih sebagai perubahan perilaku yang dapat diamati. Kosakata pemrosesan informasinya (atensi, pengodean, pengambilan, memori kerja terbatas) menyediakan baik bahasa diagnostik untuk kesulitan belajar maupun arsitektur di balik [[intelligent-tutoring|tutor cerdas]] dan [[knowledge-tracing|pelacakan pengetahuan]]: sistem yang menyimpulkan keadaan internal pembelajar dan beradaptasi dengannya. Ia tetap menjadi kerangka acuan bagi [[metacognition|metakognisi]], [[desirable-difficulties|kesulitan yang diinginkan]], dan [[self-regulated-learning|pembelajaran yang diatur sendiri]] di seluruh basis pengetahuan ini.

[[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]] merekonstruksi gambar dari EEG pembelajar selama video sains dan menemukan kesetiaan representasi mengikuti kinerja tes (koefisien regresi 0.8481, R² = 0.79) — bukti langsung bahwa ukuran representasi internal dapat mengindeks pengodean

## Ide inti

- **Belajar adalah perubahan representasi mental internal.** Kognitivisme berpendapat bahwa belajar melibatkan perolehan, penyimpanan, dan reorganisasi pengetahuan dalam memori — konsep, skema, dan prosedur — bukan sekadar perubahan respons yang dapat diamati. Apa yang pembelajar *ketahui dan dapat panggil kembali* itu penting, bukan hanya apa yang mereka lakukan.
- **Metafora pemrosesan informasi (komputer).** Pikiran diperlakukan sebagai sistem pemrosesan informasi dengan kapasitas dan kemacetan — [[item-response-theory|pengukuran]] kemampuan laten, batas memori kerja, pengodean dan pengambilan — yang justru merupakan model yang membuat tutor AI (program komputer yang memodelkan dan beradaptasi dengan kognisi pembelajar) sangat cocok.
- **Atensi dan memori bersifat terbatas.** Memori kerja memiliki kapasitas terbatas; pembelajaran yang tahan lama menuntut pengodean ke memori jangka panjang melalui pengulangan, elaborasi, dan [[retrieval-spacing-interleaving|latihan pengambilan]]. Ini menghubungkan kognitivisme dengan [[research-methods-aied|penelitian]] tentang [[cognitive-offloading|offloading kognitif]] (melimpahkan memori/pemrosesan ke alat eksternal) dan dengan "kesenjangan kinerja–pembelajaran" ketika AI melewati pengambilan dan latihan.
- **Metakognisi mengatur kognisi.** [[metacognition|Metakognisi]] — memantau dan mengendalikan pemikiran sendiri — adalah konstruk khas kognitivis, dan ia menjelaskan mengapa kalibrasi pembelajar tentang kapan bersandar pada AI penting bagi pembelajaran (lihat [[cognitive-offloading]] dan [[self-regulated-learning]]).
- **Pengetahuan dapat didekomposisi dan dilacak.** AIED kognitivis mengasumsikan pengetahuan pembelajar dapat direpresentasikan sebagai komponen dan dilacak sepanjang waktu — fondasi [[knowledge-tracing|pelacakan pengetahuan]], [[cognitive-diagnosis|diagnosis kognitif]], dan [[item-response-theory|teori respons butir]]. Ketertelusuran juga merupakan aturan penilaian. Empat aturan pembaruan [[knowledge-tracing]] dijalankan pada urutan peristiwa ASSISTments yang sama: mengkreditkan penyelesaian berbantuan apa pun menyatakan 93.9% pasangan siswa-keterampilan telah dikuasai, dibandingkan 72.8% ketika baris berbantuan dibaca sebagai upaya pertama yang gagal. Pasangan yang dinyatakan lebih awal oleh aturan longgar berlanjut ke akurasi tanpa bantuan 0.709, dibandingkan 0.857 di tempat aturan-aturan itu sepakat ([[crediting-assisted-work-inflates-mastery-2026|Srivastava, 2026]]). Model hanya melacak apa yang diizinkan aturan bukti untuk dihitung.

## Kognitivisme dan AI dalam pendidikan

### Garis keturunan kognitivis AIED

Kognitivisme boleh dibilang teori yang paling bertanggung jawab atas keberadaan AI dalam pendidikan. Tutor kognitif awal (misalnya, tutor berbasis ACT-R Anderson) [[embodied-learning|mewujudkan]] asumsi bahwa pembelajaran dapat dimodelkan sebagai aturan produksi dan bahwa sistem dapat melacak aturan mana yang telah dikuasai pembelajar. Ini menghasilkan arsitektur kanonis yang masih mendefinisikan bidang ini: model domain, [[student-modeling|model siswa]] yang melacak keadaan pengetahuan pembelajar, dan model [[pedagogy|pedagogis]] yang menyesuaikan instruksi — semuanya berasal dari kognitivisme. [[knowledge-tracing|Pelacakan pengetahuan]] modern (Bayesian, deep learning, dan berbasis IRT) serta [[cognitive-diagnosis|diagnosis kognitif]] melanjutkan tradisi ini. Asumsi yang sama menopang [[intelligent-tutoring|tutor cerdas]], [[adaptive-learning|pembelajaran adaptif]], dan [[personalized-learning|pembelajaran terpersonalisasi]], yang dikelompokkan dalam basis pengetahuan di bawah payung [[student-modeling|Pemodelan Pembelajar dan Instruksi Adaptif]].

### Beban kognitif dan desain instruksi

Cognitive Load Theory (CLT) adalah kerangka kognitivis yang paling luas diterapkan dalam [[learning-design|desain instruksional]]: ia membedakan beban intrinsik (kompleksitas tugas), beban ekstraneus (gesekan penyajian), dan beban germane (upaya pembentukan skema). AI yang dirancang baik harus mengurangi beban ekstraneus sekaligus mempertahankan pemrosesan germane; AI yang terintegrasi dengan buruk mengurangi ketiganya, meninggalkan tugas yang selesai dengan pembelajaran kosong. Pembingkaian memori kerja CLT juga sentral dalam perdebatan tentang [[cognitive-offloading|offloading kognitif]] — apakah AI mengurangi beban ekstraneus yang merugikan atau memutus pemrosesan germane yang menghasilkan pembelajaran.

Beban melacak bagaimana upaya diorganisasikan, bukan berapa banyak yang dikeluarkan: di antara 67 guru prajabatan yang merancang rencana pelajaran dengan GenAI, kelompok bermutu lebih tinggi tidak berbeda pada upaya yang dilaporkan (2.85 vs 3.26) namun melaporkan permintaan mental yang lebih rendah (3.09 vs 4.03) dan frustrasi (2.12 vs 3.82) ([[fang-human-ai-collaboration-patterns-instructional-design-2026|Fang et al. (2026)]]).

Cognitive Theory of Multimedia Learning (CTML) Mayer menerapkan asumsi memori kerja yang sama pada materinya sendiri, dan resepnya luar biasa konkret: pembelajar lebih baik dengan kata dan gambar bersama daripada kata saja, ketika materi ekstraneus dikecualikan, ketika pelajaran disegmentasi dan diatur oleh pengguna alih-alih disajikan sebagai satu unit berkelanjutan, ketika kata dan gambar yang bersesuaian muncul berdekatan dan pada waktu yang sama, dan ketika narasi bersifat percakapan dan dalam suara manusia yang ramah alih-alih formal atau dihasilkan mesin.

### Kognitivisme vs. behaviorisme dan konstruktivisme

- **vs. [[behaviorism|behaviorisme]]:** Behaviorisme menjelaskan pembelajaran sebagai perubahan perilaku yang dapat diamati melalui penguatan dan latihan berulang; kognitivisme bersikeras pada representasi internal dan melacak keadaan mental. Praktik AI sering menunjukkan kesenjangan "konstruktivisme dalam nama, behaviorisme dalam praktik," tetapi desain kognitivis (pemodelan siswa, pelacakan pengetahuan) berbeda dari latihan-dan-umpan-balik behavioris murni karena mereka *merepresentasikan dan beradaptasi dengan pengetahuan yang disimpulkan pembelajar* alih-alih sekadar memperkuat respons.
- **vs. [[constructivist|konstruktivisme]]:** Konstruktivisme berpendapat bahwa [[learners|pembelajar]] secara aktif membangun makna melalui pengalaman; kognitivisme menekankan pengodean akurat atas pengetahuan dan keterampilan (yang sering sudah terstruktur). Garis keturunan kognitivis AIED (domain terstruktur, komponen pengetahuan eksplisit) kadang dikritik sebagai terlalu behavioris atau terlalu berorientasi transmisi oleh kaum konstruktivis, sementara kognitivisme membalas bahwa merepresentasikan dan melacak pengetahuanlah yang memungkinkan instruksi yang benar-benar adaptif.
- **vs. [[learning-sciences|ilmu pembelajaran]]:** Kognitivisme menyediakan mekanisme yang dirancang oleh bidang itu — memori kerja, pengodean, pengambilan, komponen pengetahuan yang dapat didekomposisi — tetapi tidak sendiri berorientasi desain. Ia menjelaskan bagaimana pembelajaran terjadi; ilmu pembelajaran bertanya bagaimana membangun lingkungan tempat pembelajaran terjadi dan menguji desain itu secara empiris.

### Ketegangan era AI: batas kognitivisme sedang tertekan

[[generative-ai|AI generatif]] memperluas sekaligus menantang kognitivisme. Ia memperluasnya dengan membuat representasi pengetahuan lebih kuat (LLM sebagai mesin pengetahuan yang dapat dilacak melalui [[knowledge-tracing|pelacakan pengetahuan]] dan diadaptasi melalui [[student-modeling|pemodelan siswa]]). Ia menantangnya dengan merumitkan di mana kognisi "berada": ketika AI melakukan penalaran, memori, dan bahkan fungsi mirip metakognitif, asumsi kognitivis bahwa pembelajaran adalah pemrosesan internal dalam pikiran individu menjadi terguncang — sebagaimana [[distributed-cognition|kognisi terdistribusi]], [[ai-cognitive-partner-co-regulation-learning|ko-regulasi]], dan pembingkaian post-human berargumen bahwa kognisi dapat terdistribusi di antara sistem manusia dan artifisial. Namun pertanyaan kognitivis tetap menjadi pertanyaan sentral bidang ini: *apakah pembelajar menginternalisasi pengetahuan, atau alat itu yang menyimpannya?* Inilah pertanyaan offloading kognitif dan kesenjangan kinerja–pembelajaran dalam bentuknya yang paling murni.

## Implikasi bagi desain dan penelitian

1. **Rancang untuk internalisasi, bukan sekadar kinerja.** AIED kognitivis harus dievaluasi berdasarkan apakah pembelajar dapat mengambil dan menerapkan pengetahuan *tanpa* alat itu — bukan berdasarkan kinerja berbantuan. Inilah [[ai-misuse-learning-harm|kesenjangan kinerja–pembelajaran]] dan alasan untuk mengukur [[transfer-of-learning|transfer]] tanpa bantuan.
2. **Representasikan pembelajar, jangan sekadar merespons.** Lampirkan [[student-modeling|pemodelan siswa]] dan [[knowledge-tracing|pelacakan pengetahuan]] terstruktur pada dialog AI agar sistem beradaptasi dengan pengetahuan yang disimpulkan alih-alih merespons dengan lancar tetapi buta.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Hormati batas memori kerja.** Terapkan Cognitive Load Theory pada UX AI: kurangi beban ekstraneus (gesekan, antarmuka yang kelebihan beban) sekaligus mempertahankan pemrosesan germane ([[desirable-difficulties|perjuangan produktif]], latihan pengambilan) alih-alih meminimalkan semua tuntutan kognitif.
4. **Kalibrasi metakognisi.** Karena [[metacognition|metakognisi]] mengatur kapan pembelajar memilih untuk melimpahkan, mengajarkan kalibrasi (mengetahui apa yang benar-benar dapat dilakukan tanpa bantuan) adalah jawaban kognitivis atas ketergantungan berlebih (lihat [[cognitive-offloading]]).

## Miskonsepsi umum

- **"Representasi mental tidak dapat diamati, jadi klaim kognitif tentang pembelajaran hanyalah asumsi."** Merekonstruksi gambar dari **EEG** pembelajar selama video sains menemukan **kesetiaan representasi mengikuti kinerja tes** (koefisien regresi **0.8481, R² = 0.79**). Premis kognitivis tentang representasi internal dapat diukur, dan pengukurannya memprediksi hasilnya.
- **"R² yang tinggi berarti representasi menjelaskan pembelajaran."** R² = 0.79 adalah asosiasi kuat antara kesetiaan dan kinerja pada materi yang sama. Ia tidak menetapkan bahwa menaikkan kesetiaan akan menaikkan kinerja, yang merupakan klaim intervensi.
- **"Komponen pengetahuan adalah fiksi pemodelan yang memudahkan."** Keterdekomposisianlah yang memungkinkan [[knowledge-tracing|pelacakan pengetahuan]] dan [[cognitive-diagnosis|diagnosis kognitif]], dan metode-metode itu bekerja sejauh asumsi tersebut berlaku. Memperlakukannya sebagai fiksi membuang alasan mengapa metode itu menghasilkan estimasi yang dapat digunakan — sementara memperlakukannya sebagai fakta melebih-lebihkan apa yang dikatakan model terpasang tentang sebuah pikiran.

## Konsep terkait

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — temuan retensi yang menjadi landasan keluarga praktik ini

## Artikel terkait

- [[cognitive-shift-ai-education]] — Pergeseran kognitif dalam pendidikan AI
- [[cogtax-cognitive-taxonomy]] — Taksonomi kognitif untuk penggunaan AI
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Agen LLM pedagogis yang berpijak pada pelacakan pengetahuan
- [[nie-personavlm-long-term-personalization-2026]] — Pemodelan siswa dan memori berbasis LLM
- [[ai-cognitive-partner-co-regulation-learning]] — AI sebagai mitra kognitif dalam pembelajaran yang diatur bersama
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: berpikir sebagai interaksi manusia–AI
- [[fang-human-ai-collaboration-patterns-instructional-design-2026]] — Organisasi upaya, bukan jumlah upaya, yang melacak beban dan frustrasi
- [[crediting-assisted-work-inflates-mastery-2026]] — Klaim penguasaan dari pelacakan pengetahuan bergantung pada bagaimana kerja berbantuan dikreditkan (Srivastava 2026)
