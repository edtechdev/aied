---
connected_resources: [drawsplat]
title: "Visualisasi"
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-08-29T12:55:12-04:00"
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/visualization"
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Visualisasi** — penggunaan visualisasi data, infografik, dasbor, bagan, diagram, dan representasi grafis lain untuk membuat informasi dapat dipahami bagi pembelajaran dan analisis. Di seluruh pendidikan, visualisasi makin banyak dihasilkan oleh AI (text-to-image, analisis slide dan bagan [[multimodal]]) sekaligus digunakan sebagai antarmuka tempat siswa, guru, dan sistem analitik menalar atas data bersama.

## Pertanyaan yang Perlu Dipertimbangkan

- Bagan atau dasbor dapat memperjelas data — tetapi apakah sekadar *melihat* visualisasi sama dengan memahaminya? [[research-methods-aied|Penelitian]] yang dirujuk halaman ini menyarankan bahwa cara Anda berinteraksi dengan visualisasi lebih penting daripada bagannya sendiri. Ingat kembali sebuah dasbor atau grafik yang Anda lihat tetapi tidak benar-benar pelajari. Apa yang hilang dari sekadar tampilannya?
- Dasbor pembelajaran konvensional mengikuti model 'tampilkan data, berharap muncul wawasan'. Temuan di sini adalah bahwa siswa yang menjawab pertanyaan tentang data mereka *sebelum* melihat metriknya berefleksi dan mengalibrasi lebih baik daripada mereka yang pasif melihat bagan. Mengapa dipaksa memprediksi lebih dulu dapat mengubah apa yang Anda peroleh dari melihat data sebenarnya?
- AI kini dapat menghasilkan visualisasi yang akurat atas konten terspesialisasi — satu studi menaikkan akurasi domain dari 12% menjadi 78% dengan menyetel halus model text-to-image pada konsep nuklir. Namun halaman ini juga menemukan bahwa tidak ada model yang kompeten secara merata. Di mana Anda akan memercayai visual yang dihasilkan AI, dan di mana Anda akan bersikeras memeriksanya dengan pakar manusia?
- Peserta dalam satu studi menilai komik data yang dihasilkan AI lebih menarik dan lebih mudah dipahami, tetapi banyak juga yang menandai risiko misinformasi dan kelebihan informasi. Bagaimana Anda menimbang daya tarik visual AI yang memikat terhadap potensinya menyesatkan — dan apa yang akan Anda verifikasi sebelum memercayai atau menggunakannya?
- Halaman ini memperingatkan bahwa *kepercayaan diri* sebuah model bukanlah *keandalannya*: sistem dapat sangat berbeda dalam penilaian tingkat keparahan sementara benar pada konstruk dasarnya. Jika Anda mengandalkan alat AI untuk menilai slide, esai, atau data, bagaimana Anda akan menemukan di mana kepercayaan dirinya menyembunyikan kesalahan serius?
- Satu studi menemukan siswa menghabiskan sebagian besar waktu pandangnya pada kode meskipun ada perancah visual yang rumit — bantuan visual sekadar tidak menarik perhatian semua orang. Apa implikasinya terhadap asumsi bahwa diagram atau dasbor yang bagus akan otomatis membantu semua siswa terlibat? Apa lagi selain visual yang membentuk bagaimana orang benar-benar menggunakan alat?

## Pendahuluan

Visualisasi adalah penggunaan representasi grafis — dasbor, bagan, diagram, infografik, dan tampilan multimodal — untuk membuat pembelajaran dan data pembelajaran dapat dipahami. Peran pendidikannya yang paling mapan adalah dasbor [[learning-analytics|analitik pembelajaran]], tempat model dominan *tampilkan data dan berharap muncul wawasan* telah digantikan desain interaktif: buktinya menunjukkan bahwa bagaimana siswa berinteraksi dengan representasi lebih penting daripada apakah mereka melihatnya, dan bahwa prompt yang memancing jawaban sendiri serta [[pedagogical-agent|agen pedagogis]] memperbaiki kalibrasi lebih baik daripada metrik pasif. Pertanyaan yang sama — apakah tampilannya memancing pemikiran atau menggantikannya? — menghubungkan visualisasi dengan [[desirable-difficulties]] dan [[metacognition]].

## Visualisasi sebagai Antarmuka Pembelajaran

Peran visualisasi yang paling mapan dalam pendidikan adalah dasbor analitik pembelajaran. Learning Analytics Dashboard (LAD) konvensional beroperasi pada model "tampilkan data → berharap muncul wawasan", menyajikan metrik perilaku dalam bagan yang dilihat siswa secara pasif. Penelitian tentang [[interactive-learning-dashboards-engagement]] menantang paradigma ini: ketika sebuah dasbor menambahkan [[llm]] sebagai tenaga penggerak [[pedagogical-agent|agen pedagogis]] dan penilaian diri Judgment of Learning yang interaktif, kondisi "elicit" — tempat siswa menjawab pertanyaan tentang data mereka sebelum melihat metrik — menghasilkan lebih banyak refleksi dan kalibrasi penguasaan yang lebih akurat daripada dasbor pasif atau agen yang "memberi tahu". Pelajarannya adalah bahwa bagaimana siswa berinteraksi dengan visualisasi lebih penting daripada sekadar melihatnya. Ini terhubung ke [[learning-analytics]] dan [[self-regulated-learning]], tempat umpan balik visual mendukung kalibrasi pertimbangan [[metacognition|metakognitif]] alih-alih sekadar tampilan informasi.

Dasbor yang berorientasi [[teacher-role|guru]] menambahkan seperangkat pelajaran desain yang berbeda. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain dkk. (2026)]] menemukan bahwa guru secara sistematis lebih menyukai visualisasi yang lebih sederhana dan lebih tradisional (plot batang, diagram pai, legenda) bahkan ketika desain yang lebih kompleks (misalnya heatmap) menghasilkan wawasan yang lebih terperinci — preferensi visual tidak selalu selaras dengan keinformatifan, bergema dengan perdebatan tentang keterbacaan komparatif diagram pai. Literasi visualisasi (VL) tidak menggerakkan preferensi desain, tetapi guru dengan VL lebih tinggi menghasilkan interpretasi yang lebih mendalam dan terperinci (misalnya lebih banyak dari mereka mengidentifikasi tren dalam data deret waktu), menegaskan VL sebagai [[research-methods-aied|perancu]] bagi pengukuran bagaimana guru membaca desain analitik. Untuk perbandingan antarkelompok, guru sangat menyukai superposisi alih-alih jukstaposisi, dan lebih menyukai plot yang menampilkan informasi lengkap (misalnya menyertakan kelompok "siswa yang tidak menonton") alih-alih pengodean perbedaan secara eksplisit, meskipun guru yang lebih muda memberi peringkat lebih tinggi pada plot perbedaan. Temuan ini berargumen bahwa desain dasbor harus menyeimbangkan preferensi yang dinyatakan guru dengan kedalaman interpretatif yang ditawarkan pengodean yang lebih kompleks.

Dasbor juga berfungsi sebagai representasi bersama yang menjembatani penalaran manusia dan AI. Sistem CLARA menggunakan artefak yang dihasilkan LLM — peta konsep dan asesmen kolaborasi tujuh dimensi — sebagai landasan bersama antara pengguna dasbor dan [[agentic-ai|agen AI]], mengindeksnya ke dalam koleksi vektor terpisah sehingga kedua pihak menalar atas materi yang sama yang terlihat dan dapat dikueri. Serupa dengan itu, Expert Cognition Dashboard membingkai ulang analitik sebagai "kecerdasan kognisi", mengubah perilaku siswa mentah menjadi struktur kognisi yang dapat ditafsirkan pada tingkat individu, kelas, dan pakar AI Twin. Sistem-sistem ini memosisikan visualisasi bukan sebagai keluaran melainkan sebagai infrastruktur penalaran yang tertanam dalam pendidikan yang berakar pada [[ai-technologies]].

## Konten Visual yang Dihasilkan AI dan Multimodal

Alur besar kedua menyangkut AI yang menghasilkan visualisasi secara langsung. [[nuclear-diffusion-text-to-image-learning-2026]] menunjukkan bahwa model text-to-image yang diadaptasi domain dapat menghasilkan ilustrasi akurat atas konsep STEM terspesialisasi: penyetelan halus Stable Diffusion pada gambar domain nuklir menaikkan akurasi domain dari 12% menjadi 78%, memungkinkan instruktur menghasilkan visualisasi komponen reaktor dan sistem keselamatan yang benar sesuai permintaan. Kapasitas generatif ini kuat tetapi tidak merata. [[mllm-scientific-visualization-literacy]] [[benchmark|menolok ukurkan]] enam model bahasa besar multimodal terhadap 485 peserta manusia pada literasi visualisasi ilmiah, dan menemukan tidak ada kompetensi yang merata: Gemini sumber tertutup melampaui rerata manusia pada beberapa subset sementara semua model [[open-source]] berada di bawahnya, dengan kelemahan khusus pada estimasi [[quantitative-research|kuantitatif]] berbutir halus dan visualisasi berbasis tekstur atau integrasi. Karena itu AI harus mendukung — bukan menggantikan — literasi visualisasi manusia, temuan yang berimplikasi langsung pada [[ai-literacy]] dan [[formative-assessment]].

Pembuatan bagan dari prompt mengajukan pertanyaan yang berbeda dari apakah AI dapat menghasilkan visualisasi yang kompeten: apakah siswa masih melakukan kerja analitis dan pengodean yang membuat artefak itu mendidik. Sebuah kerangka tahun 2026 menyebutnya sebagai pemisahan proses–keluaran dan mengusulkan transparansi, undangan, dan pemudaran sebagai garis agensi antara [[scaffolding]] dan substitusi ([[genai-visualization-education-framework-2026|Purohit dkk., 2026]]).

Etika dan keandalan meredam antusiasme terhadap konten visual yang dihasilkan AI. [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] menemukan komik data berbantuan [[generative-ai|GenAI]] meningkatkan [[student-engagement|keterlibatan]] dan pemahaman dibandingkan visualisasi konvensional terlepas dari literasi visualisasi sebelumnya, namun peserta mengangkat kekhawatiran tentang risiko misinformasi dan atribusi [[academic-integrity|kepengarangan]], dan dua pertiga menandai sisi buruk seperti kelebihan informasi akibat tata letak yang terlalu padat. Tolok ukur kontrafaktual CFES-P24 memperluas pengawasan ini ke [[cfes-p24-multimodal-slide-auditing-2026|audit slide]], menunjukkan bahwa LLM multimodal dapat secara andal mengenali konstruk [[learning-design]] (operasi, prinsip, lokalisasi bukti) sementara sangat berbeda pada pertimbangan komparatif dan kalibrasi tingkat keparahan — bukti bahwa skor komposit menyembunyikan kemampuan mana yang gagal dan bahwa kepercayaan diri bukanlah keandalan. Bersama-sama karya ini berargumen untuk [[ai-ed-evaluation|evaluasi AI]] berlapis atas visual yang dihasilkan AI alih-alih penilaian holistik.

## Alat Slide, Komik, dan Multi-Tampilan dalam Praktik

Sistem praktis menerapkan prinsip-prinsip ini dalam skala besar. AISSA menggabungkan penskoran rubrik berbasis LLM dengan dasbor analitik pembelajaran untuk memberikan umpan balik otomatis dan iteratif atas slide presentasi siswa, memproses 90 presentasi dalam 1–3 menit masing-masing dengan biaya hanya beberapa sen per evaluasi dan [[usability-research|keterpakaian]] yang dipersepsikan tinggi — sementara siswa menerapkan umpan balik secara selektif, kadang mengabaikan rekomendasi yang bertentangan dengan desain visual mereka. Dalam [[cs-education|pendidikan pemrograman]], Flowcode memasangkan diagram alur struktur kode dengan obrolan yang berorientasi pembelajaran untuk membantu pemrogram kreatif pemula memahami dan memperluas contoh yang mereka temukan, tempat visualisasi dan [[desirable-difficulties|gesekan produktif]] mengarahkan penggunaan AI menuju pembelajaran alih-alih penghindaran. Namun [[scaffolding|perancah]] visual tidak efektif secara universal: [[code-anchor-multi-view-visualization]] menemukan siswa menghabiskan ~47% waktu pandangnya pada kode meskipun ada perancah visual, yang digerakkan oleh agensi, kesesuaian representasional, dan legitimasi yang dipersepsikan atas tampilan metaforis. Temuan [[student-experience|pengalaman siswa]] ini memperingatkan bahwa desain visualisasi harus memperhatikan faktor [[affective-computing|afektif]] dan sosial, bukan hanya daya dukung kognitifnya.

## Implikasi

Di seluruh karya yang dibahas, visualisasi muncul sebagai medium dua guna: AI makin banyak menghasilkan dan menafsirkan visualisasi, sementara dasbor dan visual interaktif berfungsi sebagai permukaan bersama bagi pemaknaan manusia-AI. Text-to-image generatif dan analisis multimodal memperluas jangkauan visualisasi ke konten [[stem-education|STEM]] terspesialisasi dan [[ai-feedback-quality|umpan balik otomatis]], tetapi kompetensi model yang tidak merata, kegagalan kalibrasi tingkat keparahan, dan kekhawatiran [[ethics|etis]] atas misinformasi dan kepengarangan menuntut verifikasi berlapis yang cermat. Bagi perancang dan pendidik, kesimpulan terkuatnya adalah bahwa interaktivitas dan keterlibatan — memancing penalaran siswa atas data visual, membiarkan pengguna mengendalikan usaha kognitifnya, dan memperlakukan visual yang dihasilkan AI sebagai infrastruktur bersama alih-alih titik akhir — lebih penting daripada ketepatan bagannya sendiri.

## Miskonsepsi Umum

- **"AI tidak dapat merender konten terspesialisasi secara akurat."** Ia bisa, dengan metode yang tepat: penyetelan halus model text-to-image pada konsep nuklir **menaikkan akurasi domain dari 12% menjadi 78%**. Kesenjangannya adalah landasan domain, bukan kapasitas generatif, dan ia dapat diatasi.
- **"Visualisasi yang lebih baik menghasilkan luaran yang lebih baik."** Guru **secara sistematis lebih menyukai visualisasi yang lebih sederhana dan lebih tradisional** (plot batang, diagram pai, legenda) **bahkan ketika desain kompleks seperti heatmap menghasilkan wawasan yang lebih terperinci**. Artefak yang lebih informatif bukanlah yang digunakan, sehingga adopsi adalah masalah terpisah dari kualitas desain.
- **"Siswa melihat ke tempat perancahnya berada."** Satu studi menemukan siswa **menghabiskan sebagian besar waktu pandangnya pada kode meskipun ada perancah visual yang rumit** — bantuannya sekadar tidak menarik perhatian. Dukungan visual yang ada tetapi tidak diperhatikan tidak mengubah apa pun.
- **"Keterlibatan dan pemahaman bergerak bersama."** Peserta menilai komik data yang dihasilkan AI **lebih menarik dan lebih mudah dipahami, namun banyak juga yang menandai risiko misinformasi dan kelebihan informasi**. Kedua reaksi itu berasal dari artefak yang sama, sehingga penerimaan yang positif bukanlah pembacaan yang terverifikasi.

## Konsep terkait
- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — representasi spasial dan tiga dimensi

## Artikel terkait

- [[interactive-learning-dashboards-engagement]] — Memikirkan ulang visualisasi pembelajaran sebagai alat keterlibatan melalui agen pedagogis
- [[mllm-scientific-visualization-literacy]] — Menolok ukur LLM multimodal untuk literasi visualisasi ilmiah
- [[nuclear-diffusion-text-to-image-learning-2026]] — Model text-to-image yang diadaptasi domain untuk visualisasi konsep nuklir
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — Efektivitas, manfaat, dan etika komik data berbantuan AI
- [[cfes-p24-multimodal-slide-auditing-2026]] — Tolok ukur kontrafaktual untuk audit slide multimodal
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Membuat temuan ML dapat diakses guru di kelas campuran
- [[genai-visualization-education-framework-2026]] — Mengonstruksi Makna, Bukan Sekadar Bagan: Kerangka Kognitif–Instruksional untuk Penggunaan AI Generatif dalam Pendidikan Visualisasi
