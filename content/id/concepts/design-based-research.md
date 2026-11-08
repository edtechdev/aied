---
title: "Riset Berbasis Desain"
created: "2026-08-24T02:30:00-04:00"
type: concept
research_method: [literature review]
confidence: high
methods: [design-based-research, research-methods-aied]
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/design-based-research"
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

> **Riset berbasis desain (DBR)** — pendekatan metodologis yang merancang, mengimplementasikan, dan menyempurnakan intervensi pendidikan secara iteratif dalam konteks autentik, bersiklus antara teori, desain, dan praktik dunia nyata untuk menghasilkan artefak yang dapat digunakan sekaligus prinsip desain yang tervalidasi. Dalam [[ai-education|AI dalam pendidikan]], DBR adalah metode pilihan untuk mengembangkan lingkungan belajar AI, model [[pedagogy|pedagogis]], dan program pelatihan [[teacher-role|guru]] yang harus bekerja dalam kenyataan kelas yang berantakan — menukar kendali kausal [[rct|eksperimen]] dengan keautentikan ekologis dan penyempurnaan iteratif.

## Pertanyaan yang Perlu Dipertimbangkan

- Riset berbasis desain merancang, mengimplementasikan, dan menyempurnakan intervensi secara iteratif di kelas nyata, bersiklus antara teori dan praktik. Apa bedanya secara fundamental dengan eksperimen terkontrol — dan mengapa seorang peneliti kelas mungkin memilihnya?
- DBR sengaja menukar kendali kausal dengan keautentikan ekologis. Jika Anda tidak dapat memastikan APA yang menyebabkan suatu perolehan belajar, seberapa berharga pengetahuan itu?
- DBR menghasilkan dua hal sekaligus: artefak yang dapat digunakan dan prinsip desain yang tervalidasi. Mana di antara keduanya yang lebih penting bagi Anda — alat yang bekerja, atau prinsip yang dapat Anda terapkan di tempat lain?
- Kekuatan DBR adalah relevansi praktisnya yang tinggi; keterbatasannya adalah temuannya terikat konteks dan sulit digeneralisasi. Kapan Anda akan cukup mempercayai temuan DBR untuk menerapkannya dalam latar yang sangat berbeda?
- Tanpa ukuran hasil yang terkontrol dan tanpa bantuan, perolehan belajar dalam DBR dapat mencerminkan masalah "kinerja yang digelembungkan AI" yang justru ditelitinya. Bagaimana Anda merancang studi DBR agar perolehan yang dilaporkan benar-benar berarti belajar, bukan kinerja berbantuan?

## Pendahuluan

DBR adalah tradisi *desain*, bukan tradisi data: ia tidak pas dengan kontras [[quantitative-research|kuantitatif]]/[[qualitative-research|kualitatif]]/eksperimental. Ia sengaja memadukan unsur ketiganya — mengumpulkan data hasil sekaligus data proses di seluruh siklus iteratif — untuk menjawab *"bagaimana kita merancang lingkungan belajar AI ini agar bekerja dalam praktik?"* alih-alih *"apakah X menyebabkan Y?"*. Ia berkerabat dekat dengan [[learning-design]] (yang menetapkan [[design-thinking|proses desain]]nya) dan dengan [[usability-research|evaluasi kegunaan]] (yang menyuplai penyempurnaan), tetapi dibedakan oleh sifatnya yang berkelanjutan, digerakkan teori, dan multi-siklus, serta oleh tujuan gandanya: memperbaiki praktik *dan* menghasilkan teori.

## Siklus DBR

DBR bukan desain tunggal melainkan loop iteratif, yang biasanya mencakup:

1. **Analisis kebutuhan** — memahami masalah, konteks, dan pembelajar dalam latar autentik.
2. **Desain** — merumuskan intervensi dan rasional teoretis yang mendasarinya.
3. **Implementasi** — menerapkan intervensi di kelas atau program nyata.
4. **Penyempurnaan** — menganalisis data, merevisi desain, dan mengiterasi (sering melalui beberapa siklus).
5. **Luaran teori dan artefak** — menghasilkan intervensi yang dapat digunakan sekaligus prinsip desain yang dapat digeneralisasi atau model yang tervalidasi.

Contoh AIEd kanonisnya adalah [[ai-assisted-collaborative-learning-model-dbr|studi Model Pembelajaran Kolaboratif Berbantuan AI (AACL)]], yang menjalankan siklus DBR empat fase — analisis kebutuhan, desain model, implementasi kelas selama delapan minggu bersama mahasiswa sarjana Indonesia, dan penyempurnaan model — dengan iterasi pada siklus belajar empat tahap (identifikasi masalah → inkuiri [[collaborative-learning|kolaboratif]] berbantuan AI → [[problem-solving|pemecahan masalah]] kolaboratif → refleksi dan presentasi).

## Bagaimana DBR muncul dalam basis pengetahuan

- **Mengembangkan model pembelajaran.** [[ai-assisted-collaborative-learning-model-dbr|Studi Model AACL]] menggunakan DBR untuk mengembangkan dan mengevaluasi model pembelajaran kolaboratif berbantuan AI yang menyasar [[critical-thinking|berpikir kritis]] dan pemecahan masalah di [[higher-ed|pendidikan tinggi]].
- **Membangun pelatihan guru literasi AI.** [[genai-literacy-training-teacher-education-dbr-2026|Le et al.]] mengembangkan dan mengevaluasi intervensi pelatihan literasi [[generative-ai|GenAI]] berbasis DBR untuk mahasiswa [[teacher-education]]; [[human-centered-ai-teacher-educators-2026|Baran et al.]] menggunakan DBR sepanjang 2023–2025 untuk merancang pembelajaran profesional bagi [[ai-literacy|literasi AI]] kritis yang berlandaskan prinsip AI berpusat manusia.
- **Merancang standar [[governance|institusional]].** [[crompton-faculty-technology-integration-standards-2026|Crompton et al.]] menggunakan DBR lintas dua siklus makro iteratif dan 114 partisipan untuk mengembangkan enam standar integrasi teknologi fakultas.
- **Implementasi sistem secara iteratif.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Rienties et al.]] mendeskripsikan enam studi DBR iteratif (18 bulan, 498 partisipan) yang mengimplementasikan asisten AI AIDA milik Open University dengan pendekatan sistem tertanam.
- **[[scaffolding]] dan desain intervensi.** [[critical-thinking-genai-scaffolding|Perancah berpikir kritis GenAI]] dan studi-studi pengembangan intervensi lain menggunakan DBR untuk merancang dan menyempurnakan perancah berbasis AI.
- **[[curriculum-design|Desain kurikulum]] yang dipandu pemuda dan pakar.** [[science-integrated-ai-literacy-curriculum-dbr-2026|Moore et al. (2026)]] menggunakan proses DBR dua tahun bersama dewan penasihat pemuda dan pakar AI untuk merancang kurikulum [[ai-literacy|literasi AI]] / ML terpadu sains bagi sekolah menengah, menyempurnakan desainnya lintas kohort dan mengukur perolehan pengetahuan ML — sebuah contoh DBR sebagai ko-desain partisipatif yang mengintegrasikan suara pemuda ke dalam siklus desain.
- **Ko-penyempurnaan rubrik secara iteratif sebagai DBR.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mencontohkan sifat penyempurnaan iteratif DBR yang diterapkan pada instrumen penilaian itu sendiri: mereka memperlakukan rubrik sebagai artefak desain yang dapat direvisi dan bersiklus melalui ko-penyempurnaan dengan [[llm|LLM]] — memperjelas deskriptor kinerja dan secara eksplisit menerima indikator belajar yang implisit — yang menaikkan kesepakatan LLM–manusia pada 80 poster desain siswa dari 54.75% menjadi 81.25% (Cronbach's Alpha 0.393 → 0.798). Studi ini memosisikan rubrik sebagai antarmuka mediasi antara niat pedagogis manusia dan inferensi mesin, dan [[prompt-engineering|pempromptan]]-nya yang sadar peran (instruktur, peninjau sejawat, peninjau hibah) menunjukkan bagaimana pilihan desain membentuk keluaran evaluatif — sebuah demonstrasi bergaya DBR bahwa instrumen penilaian, bukan hanya intervensinya, adalah objek desain.
- **Ko-desain literasi AI usia dini.** [[play-ai-pre-k-kindergarten-ai-literacy-2026|Lee (2026)]] menggunakan DBR untuk mengodesain, mengujicobakan, dan menyempurnakan kurikulum Play With AI (PL-AI) lintas siklus iteratif bersama dua guru pre-K dan dua guru [[early-childhood-elementary-ai-education|taman kanak-kanak]], dengan bersandar pada survei guru, 32 jam video kelas, catatan lapangan, dan transkrip rapat desain. Studi ini mendokumentasikan bagaimana DBR mendukung penyempurnaan iteratif aktivitas literasi AI yang sesuai perkembangan dan menghasilkan prinsip desain yang dapat dialihkan (permainan [[embodied-learning|berwujud]], koding tangible, dialog terbimbing, ko-desain guru).
- **Tinjauan pakar sebagai bukti penyempurnaan — dan pernyataan cakupan yang jujur.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong et al. (2026)]] menyerahkan kurikulum robotika empat jalur awal mereka kepada lima pakar yang menilainya pada delapan dimensi, lalu merevisi sebagai respons: implementasi PPO mandiri dipindahkan menjadi pengayaan dan prasyarat Python ditambahkan setelah empat dari lima pakar menandai beban kognitif. Sebaran nilai mendorong revisi sama kuatnya dengan nilai rata-ratanya — konteks motivasional rata-rata 4.00 dengan SD = 1.73 dan satu nilai tunggal 1/5 — dan para penulis menyatakan dengan jelas bahwa kerangka yang direvisi masih belum dievaluasi karena menunggu data siswa.
- **Triangulasi, dan batas yang tidak dapat dilewatinya.** [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al. (2026)]] menjalankan model rotasi peran melalui lima fase DBR — analisis masalah, desain pedagogis, implementasi, evaluasi, penyempurnaan — selama delapan minggu dengan 62 partisipan, mentriangulasi [[reflection|jurnal reflektif]], wawancara, catatan observasi, dan produk buatan siswa dengan pemeriksaan anggota. Pelajaran desainnya terletak pada apa yang diklaim para penulis: tanpa ukuran kompetensi pra-pasca dan tanpa kelompok pembanding, mereka menyajikan bukti sebagai keterlibatan selama intervensi alih-alih perolehan kompetensi yang terbukti, dan justru itulah batas yang dapat dan tidak dapat dilewati desain DBR multi-sumber.

## Kekuatan dan keterbatasan

- **Kekuatan:** validitas ekologis dan relevansi praktis yang tinggi; menghasilkan artefak yang dapat digunakan sekaligus teori; responsif terhadap kompleksitas kelas nyata dan alat AI yang terus berkembang; cocok untuk mengembangkan model dan menyempurnakannya berdasarkan bukti implementasi autentik; menangkap bagaimana sebuah intervensi benar-benar bekerja (atau gagal) dalam praktik.
- **Keterbatasan:** validitas internal lemah (sedikit/tanpa kelompok kontrol); temuan terikat konteks dan sulit digeneralisasi; lini masa panjang; sulit mengisolasi elemen desain mana yang menyebabkan suatu hasil — DBR menunjukkan kelayakan dan perbaikan tetapi tidak dapat mengatribusikan perolehan belajar pada mekanisme tertentu.

DBR menukar kendali kausal [[rct|eksperimen]] dengan keautentikan ekologis dan penyempurnaan iteratif: buktinya paling kuat sebagai bukti konsep dan panduan desain, bukan sebagai bukti khasiat kausal. Membaca perolehan belajar DBR menuntut [[limitations-in-aied-research|kehati-hatian]] yang sama seperti desain lain — tanpa ukuran hasil yang terkontrol dan tanpa bantuan, perolehan dapat mencerminkan confound kinerja-yang-digelembungkan-AI yang sama yang didokumentasikan pada [[learning-gains|perolehan belajar]].

## Hubungan dengan metode lain

DBR adalah metode khas [[learning-sciences|ilmu pembelajaran]] — bidang interdisipliner yang mempelajari belajar dan desain lingkungan belajar, serta memperlakukan membangun intervensi dan mempelajarinya sebagai satu aktivitas alih-alih dua. Ia pelengkap, bukan pesaing, bagi metode riset lain (lihat [[research-methods-aied]] untuk lanskap lengkapnya). Jika [[rct|eksperimen]] menetapkan kausalitas dan [[quantitative-research|survei]] menetapkan keluasan, DBR menetapkan *kelayakan dan pengetahuan desain* — apakah sebuah intervensi dapat dibangun agar bekerja dalam praktik autentik dan prinsip desain apa yang mendukungnya. Ia sering berpasangan dengan [[usability-research|evaluasi kegunaan]] (untuk menyempurnakan antarmuka) dan [[qualitative-research|metode kualitatif]] (untuk memahami bagaimana pembelajar mengalami intervensi). Sebuah program DBR yang matang biasanya berujung pada [[rct|uji khasiat]] atau studi [[educational-measurement|pengukuran]] yang menguji efek kausal intervensi yang telah dikembangkan dalam skala besar.

## Miskonsepsi umum

**"Riset berbasis desain adalah metode kualitatif."** DBR adalah tradisi *desain*, bukan tradisi data: ia sama sekali tidak pas dengan kontras kuantitatif/kualitatif/eksperimental, karena satuan kerjanya adalah artefak yang diiterasi alih-alih satu rencana pengukuran. Studi dalam DBR dapat bersifat kuantitatif, kualitatif, atau eksperimental; yang membuatnya DBR adalah bahwa desainnya direvisi sementara temuannya dihasilkan.

**"Penyempurnaan iteratif membuat desain kebal terhadap confound yang dialami metode lain."** Iterasi menukar satu ancaman dengan ancaman lain. Menyempurnakan desain di tengah studi berarti versi akhirnya berbeda dari versi yang menghasilkan bukti awal, sehingga klaim tentang "intervensi" itu mencakup beberapa intervensi. Melaporkan revisi mana yang menghasilkan hasil mana adalah tanggung jawab disiplin ini, dan hal itu sering dibiarkan implisit.

**"Karena DBR menghasilkan artefak yang bekerja, ia telah menunjukkan efektivitas."** Desain yang bekerja di tempat yang ikut menghasilkannya telah menunjukkan kelayakan lokal, dan itu klaim yang berbeda dari efektivitas. Artefak itu membawa adaptasi yang dibuat untuk konteks tersebut, dan mentransfernya berarti mentransfer asumsi yang tidak pernah dinyatakan sebagai asumsi.

**"Memperlakukan instrumen sebagai artefak desain yang dapat direvisi menyimpang dari DBR."** Itu justru sifat iteratif DBR yang diterapkan pada pengukuran alih-alih pada intervensi: satu studi dalam korpus ini memperlakukan rubrik itu sendiri sebagai artefak, bersiklus melalui ko-penyempurnaan dengan [[llm|LLM]]. Ekstensi itu layak dicatat karena menjadikan pengembangan instrumen itu sendiri bagian dari bukti.

## Konsep terkait

- [[research-methods-aied]]
- [[rct]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[usability-research]]
- [[learning-design]]
- [[educational-measurement]]
- [[learning-gains]]
- [[limitations-in-aied-research]]
- [[theory-development-aied]]
- [[learning-sciences]]

## Artikel terkait

- [[ai-assisted-collaborative-learning-model-dbr]] — DBR untuk Model Pembelajaran Kolaboratif Berbantuan AI
- [[genai-literacy-training-teacher-education-dbr-2026]] — DBR untuk pelatihan literasi AI dalam pendidikan guru
- [[crompton-faculty-technology-integration-standards-2026]] — DBR untuk standar integrasi teknologi fakultas
- [[human-centered-ai-teacher-educators-2026]] — AI berpusat manusia untuk pendidik guru (DBR)
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]] — Enam studi DBR yang mengimplementasikan AIDA di Open University
- [[critical-thinking-genai-scaffolding]] — DBR untuk perancah berpikir kritis GenAI
- [[science-integrated-ai-literacy-curriculum-dbr-2026]] — DBR untuk kurikulum literasi AI terpadu sains (Moore et al. 2026)
- [[play-ai-pre-k-kindergarten-ai-literacy-2026]] — Play With AI (PL-AI): kurikulum literasi AI berpusat permainan untuk pre-K dan taman kanak-kanak (Lee 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM sebagai agen desain pedagogis iteratif
