---
connected_resources: [playlab]
title: "Pengembang Teknologi Pendidikan"
created: "2026-09-17T15:20:00-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/educational-technology-developers"
source_updated: "2026-10-26T06:20:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pengembang Teknologi Pendidikan** — orang dan organisasi yang membangun teknologi pendidikan: perancang produk, pengembang perangkat lunak, learning engineer, perancang analitik pembelajaran, serta perusahaan edtech, laboratorium universitas, dan proyek [[open-source]] tempat mereka bekerja. Dalam AI dalam pendidikan, inilah peran yang mengubah kapabilitas model menjadi sesuatu yang benar-benar dapat digunakan guru atau siswa, dan peran ini membawa keputusan yang tidak dapat dibatalkan tahap berikutnya: bukti apa yang menjadi landasan klaim desain, sejauh mana pipeline [[learning-analytics|analitik]] atau sistem [[intelligent-tutoring|tutor]] berakar pada materi berlisensi institusi sendiri, apakah guru dan siswa dilibatkan dalam desain, asumsi [[learning-design|desain instruksional]] mana yang tertanam dalam nilai bawaan, dan apa yang terjadi pada produk setelah pendanaan berhenti. Di seluruh laporan sistem dan studi penyebaran dalam basis pengetahuan, pelajaran yang berulang adalah bahwa konteks penyebaran, bukan model, biasanya menjadi kendala yang mengikat.

## Pertanyaan yang Perlu Dipertimbangkan

- Jika meta-analisis yang mengklaim bahwa "AI meningkatkan pembelajaran" bertumpu pada metodologi yang tidak valid, seperti temuan audit dalam [[oneill-presumed-effective-meta-analysis-2026]], bukti apa yang sebenarnya boleh menjadi landasan peta jalan produk?
- Haruskah penjelasan algoritma ditulis dalam bahasa kurikulum guru bahkan ketika itu menuntut upaya desain lebih besar daripada menampilkan feature importance — dan siapa yang membayar upaya tersebut?
- Ketika sebuah alat dirancang bersama siswa, putusan siapa yang menentukan: keuntungan belajar yang terukur, atau 96% yang mengatakan mereka ingin alat itu dipertahankan?
- Apakah penyebaran on-premise dengan lisensi terbuka merupakan pilihan teknis atau pilihan tata kelola — dan haruskah persyaratan transparansi menjadi syarat pembelian?
- Apa yang pengembang utang kepada institusi ketika hibah berakhir: produk yang terpelihara, repositori yang dapat di-fork, atau pernyataan jujur bahwa sistem itu tidak pernah menjadi intervensi yang tervalidasi?

## Pendahuluan

Pengembang berada satu tingkat di bawah platform. [[edtech-platform]] menggambarkan sistem yang disebarkan dan pemangku kepentingan yang ia menjadi begitu berada di sekolah atau universitas; halaman ini membahas orang-orang yang memutuskan apa yang dilakukan sistem itu. Pembedaan ini penting karena temuan tingkat platform — serapan rendah, kemiringan keadilan, gesekan pengadaan — biasanya merupakan konsekuensi dari pilihan desain yang dibuat lebih awal, oleh seseorang yang tidak pernah bertemu siswanya.

Peran ini juga berbeda dari tetangganya. [[learning-design]] dan [[curriculum-design]] merancang kursus untuk kohort yang diketahui; pengembang teknologi merancang produk yang akan digunakan banyak kursus, yang diajarkan oleh orang-orang yang belum pernah mereka temui — itulah sebabnya nilai bawaan, kemampuan konfigurasi, dan dokumentasi membawa bobot pedagogis. [[educational-development]] mendukung staf pengajar sebuah institusi dari dalam; pengembang berada di luar atau di sampingnya, memasok alat yang kemudian diminta diadopsi staf tersebut. Dan [[design-based-research]] adalah standar bukti yang makin sering diminta dipenuhi pengembang semacam itu: iteratif, kontekstual, dan dilaporkan beserta keterbatasannya sendiri.

### Siapa yang membangun AI pendidikan

**Laboratorium riset yang membangun infrastruktur publik.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] dibangun di UC Berkeley sebagai sistem tutor adaptif pertama yang sepenuhnya open-source dengan prinsip [[intelligent-tutoring|ITS]]: basis kode berlisensi MIT dengan pustaka aljabar Creative Commons, estimasi penguasaan [[knowledge-tracing|Bayesian Knowledge Tracing]], infrastruktur pengujian A/B, dan dukungan LTI. Alasan keberadaannya adalah keputusan desain — platform berpemilik telah mengurung penelitian [[adaptive-learning]] dalam sistem tertutup — dan jalur penulisannya adalah keputusan lain: 16 pembuat menghasilkan kursus College Algebra dalam enam bulan setelah 2.27 jam pelatihan.

**Pembangun model.** [[learnlm-improving-gemini-learning]] membingkai peningkatan model untuk pembelajaran sebagai [[prompt-engineering|pengikutan instruksi pedagogis]]: perilaku ditetapkan per aplikasi melalui instruksi sistem alih-alih satu definisi [[pedagogy]] yang tetap, dan peninjau ahli lebih menyukainya sebesar +31% dibanding GPT-4o dan +13% dibanding Gemini dasar. Poin praktisnya adalah bahwa pedagogi terlalu bergantung pada konteks untuk didefinisikan secara global; kapabilitas yang berguna adalah kepatuhan pada instruksi yang ditulis pengembang, diukur melalui skenario tingkat percakapan alih-alih [[benchmark|tolok ukur]] satu giliran.

**Arsitek model pengetahuan.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] berargumen bahwa [[personalized-learning]] membutuhkan lebih dari ontologi statis, mengusulkan sistem ontologi yang dipetakan ditambah aturan dan analitik sebagai pengganti arsitektur ITS empat model yang klasik, serta kerangka penggunaan ulang delapan kelas metadata yang bertujuan memangkas biaya setiap pembangunan baru.

**Engineer infrastruktur dan pengukuran.** [[a4l-analytics-pipeline]] menggambarkan pipeline modular yang agnostik domain untuk data interaksi siswa yang divalidasi pada tiga asisten AI pendidikan, di mana metode yang dibangun untuk satu domain diperluas ke domain lain — infrastruktur [[learning-analytics]] yang dapat digunakan ulang, bukan dasbor untuk satu kursus. [[stanbkt-bayesian-knowledge-tracing]] menunjukkan kasus pelengkapnya: reimplementasi Bayesian menghasilkan prediksi yang *identik* dengan alat estimasi titik yang sudah mapan (AUC 0.711), hanya berbeda dalam biaya dan dalam interval kredibel yang membuat perbandingan kondisi dapat ditafsirkan.

**Pembangun di dalam institusi.** [[moodle-ai-tutoring-deep-learning]] menanamkan tutor LLM dalam LMS yang sudah ada alih-alih merilis alat mandiri, menurunkan ambang adopsi yang dalam literatur ITS disebut sebagai alasan sistem gagal dalam praktik. [[savvy-student-attention-video-learning]] mengubah sinyal perhatian multimodal menjadi antarmuka yang dapat dibaca guru sebelum merilis video. [[instructional-agents-multi-agent-course-gen|Instructional Agents]] mengotomatiskan tiga fase pertama ADDIE dengan agen yang terspesialisasi per peran, dan ablasi mereka adalah pelajaran desain: baseline agen tunggal mendapat skor terburuk, Full Co-Pilot mengalahkan Autonomous sebesar 0.5–0.9 poin, dan tidak ada perbedaan kualitas antarbackend yang membuat yang termurah menjadi bawaan.

### Apa yang dapat menjadi landasan klaim desain

**Basis buktinya lebih lemah daripada penampakannya.** [[oneill-presumed-effective-meta-analysis-2026]] mengaudit 14 meta-analisis yang mengklaim AI meningkatkan pendidikan dan menemukan tidak satu pun yang membenarkan klaimnya: semua kecuali dua mendefinisikan perlakuan sebagai alat alih-alih intervensi pedagogis, 61% dari 59 studi primer yang diperiksa memiliki masalah validitas, heterogenitasnya tinggi di mana pun dilaporkan, analisis moderator kurang berdaya, dan bias publikasi tidak pernah dinilai secara valid. Sebuah meta-analisis yang ditarik masih dikutip sebagai otoritatif oleh 60% makalah berikutnya yang disampel. Bagi pengembang, "AI meningkatkan pembelajaran" adalah klaim kategori produk, bukan masukan desain.

**Laporkan ketidakpastian dan biaya penuh, bukan hanya akurasi.** Untuk [[stanbkt-bayesian-knowledge-tracing|StanBKT]], inferensi Bayesian tidak memberi apa pun dalam prediksi dan memberi segalanya dalam kemampuan menyatakan efek mana yang kredibel. [[shen-sustainable-ai-knowledge-base-cs-education-2026]] melaporkan ablasi pengambilan, penyetelan halus sadar kuantisasi, VRAM, energi per kueri, dan halusinasi yang diukur terhadap sumber daya terbuka yang diambil — dengan catatan penulis sendiri bahwa sistem itu bukan tutor yang tervalidasi. Itulah disiplin [[ai-ed-evaluation|evaluasi]] yang membuat klaim penyebaran dapat diperiksa.

### Ko-desain dengan guru dan siswa

**Penjelasan harus berbicara dalam bahasa guru.** [[xai-teachers-trust-edtech-recommendations-2026]] menjalankan eksperimen within-subject dengan 41 guru kimia pada alat rekomendasi ML: keterpahaman, [[trust|kepercayaan]], dan penerimaan berkorelasi positif, dan penjelasan yang digerakkan domain dalam bahasa kurikulum menghasilkan keterpahaman, [[trust-calibration|kalibrasi kepercayaan]], dan penerimaan yang jauh lebih tinggi daripada penjelasan berbasis feature importance. Kepercayaan juga dinamis — beberapa guru mengatakan hanya pengalaman kelas yang akan menyelesaikannya — dan penerimaan bergantung pada keselarasan pedagogis dan pengurangan beban kerja.

**Isyarat kredibilitas bukan bukti kebenaran.** Menambahkan sitasi dan sinyal otoritas pada debat [[agentic-ai|multi-agen]] meningkatkan pengabaian penilaian yang benar demi posisi AI dari 15.0% menjadi 31.8%, sehingga provenans harus dapat diperiksa pada titik penggunaan ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

**Ko-desain pada skala institusional.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]] di Open University dibangun melalui enam studi berbasis desain selama 18 bulan dengan 498 siswa dan 20 staf. Sekitar 20% awalnya skeptis; setelah penggunaan langsung, 96% ingin alat itu dipertahankan, dan RCT eksploratif menemukan waktu penggunaan dua kali lipat tetapi tidak ada perbedaan signifikan pada data proses pembelajaran. Faktor pemungkinnya bersifat organisasional — sponsor senior, kolaborasi lintas unit, iterasi berbasis data — dengan kesenjangan pada kapasitas systems thinking.

### Pengadaan, keterbukaan, dan setelah pendanaan berhenti

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] memasok masukan yang dibutuhkan keputusan pengadaan: lantai perangkat keras 12 GB VRAM, batas akurasi untuk model kelas 7B, energi per kueri, dan urutan pilihan — pengambilan lebih dulu (tanpa itu model mendapat skor 52.3%, di bawah baseline TF-IDF), lalu penyetelan halus, lalu kompresi sadar kuantisasi; lisensi terbuka adalah prasyarat untuk melayani korpus secara lokal. [[reclaiming-epistemic-agency-co-agency-2026]] membingkai keputusan yang sama sebagai tata kelola: persyaratan transparansi mengubah pembelian menjadi tata kelola epistemologis, keberatan dan provenans menjadi syarat, dan distrik dengan kapasitas paling sedikit menghadapi ambang tertinggi. [[credential-cognitive-stewardship-ai-assessment]] menambahkan bahwa tata kelola vendor hanya muncul di 29% dari 30 paket kebijakan yang diaudit, yang jauh lebih mudah menetapkan apa yang boleh dilakukan AI daripada bukti pembelajaran apa yang tersisa. [[genai-mindtool-generative-learning]] mengajukan pertanyaan desain — apakah produk mendorong belajar *dengan* alat atau memindahkan beban kerja kognitif — dan [[vocabulary-difficulty-prediction]] menunjukkan pertukarannya dalam skala kecil: model kotak hitam dengan skor tertinggi (r > 0.91) kurang dapat dijelaskan daripada model yang interpretabel (r > 0.77).

## Miskonsepsi Umum

- **"Meta-analisisnya mendukung klaim produk."** Tidak, dan alasannya spesifik, bukan soal derajat. Audit atas **14 meta-analisis** yang mengklaim AI meningkatkan pendidikan menemukan **tidak satu pun membenarkan klaimnya** — semua kecuali dua gagal secara metodologi — dan **meta-analisis yang ditarik masih dikutip sebagai otoritatif oleh 60% makalah berikutnya yang disampel**. Penarikan itu menyebar lebih cepat daripada koreksinya, yang berarti literatur yang kemungkinan dikutip peta jalan memuat klaim yang sudah ditarik bidang ini.
- **"Menambahkan sitasi dan provenans membuat sistem lebih dapat dipercaya."** Dalam lingkungan debat [[agentic-ai|multi-agen]], menambahkan sitasi dan sinyal otoritas pada posisi AI **meningkatkan pengabaian penilaian yang benar dari 15.0% menjadi 31.8%**. Provenans bukan informasi netral: ia membuat jawaban yang salah lebih meyakinkan. Isyarat kredibilitas perlu menjadi bukti kebenaran, bukan hiasan di sekitar klaim.
- **"Ko-desain dengan pengguna memvalidasi desain."** Ko-desain menjawab pertanyaan yang berbeda dari efikasi. Ketika sebuah alat dirancang bersama siswa dan **96% mengatakan ingin alat itu dipertahankan**, itu adalah temuan tentang keberterimaan. Apakah pembelajaran meningkat adalah pengukuran terpisah, dan keduanya dapat menunjuk arah berlawanan tanpa ada yang salah.
- **"Agen adalah tingkat kapabilitas berikutnya."** Ablasi [[instructional-agents-multi-agent-course-gen|Instructional Agents]] adalah kontracontoh yang berguna: baseline agen tunggal mendapat skor **terburuk** dan konfigurasi Full Co-Pilot **mengalahkan** yang Autonomous. Otonomi lebih besar bukan desain yang lebih baik; susunan co-pilot-lah yang lebih baik. Pilihan arsitektur harus dievaluasi, bukan diasumsikan membaik seiring kapabilitas.

## Apa artinya bagi praktik

**Bagi pengembang dan perancang**

- Landasi klaim desain pada studi yang telah Anda baca, bukan pada effect size yang Anda kutip. Dengan 14 meta-analisis yang diaudit gagal secara metode dan satu yang ditarik masih menyebar, jumlah sitasi bukan sinyal validitas.
- Uji otonomi sebagai variabel alih-alih merilisnya sebagai peningkatan. Jalankan ablasinya: agen tunggal, co-pilot, otonom. Hasil Instructional Agents menunjukkan konfigurasi co-pilot menang, jadi bawaannya harus yang terukur terbaik, bukan yang terdengar paling mampu.
- Pisahkan keberterimaan dari efikasi dalam rencana evaluasi Anda sendiri. Angka kesediaan mempertahankan yang tinggi adalah temuan nyata dan bukan bukti pembelajaran, dan mencampuradukkan keduanya dalam laporan adalah cara produk lemah tampak kuat.
- Perlakukan isyarat kredibilitas sebagai manipulasi dengan efek terukur. Menambahkan sitasi menggeser pengabaian jawaban yang benar dari 15.0% ke 31.8%, jadi menampilkan provenans mengubah penilaian pengguna — rancanglah untuk itu alih-alih mengasumsikan ia memberi informasi.

**Bagi instruktur yang mengevaluasi alat**

- Tanyakan bagaimana alat itu dievaluasi pada tugas yang hendak Anda gunakan, dan apakah evaluasinya co-pilot atau otonom. Keduanya tidak dapat dipertukarkan.
- Tanyakan kapan evaluasi itu dilakukan. Klaim kapabilitas yang terikat pada versi model yang tidak dinyatakan cepat kedaluwarsa dan menggambarkan sistem yang tidak akan Anda jalankan.

## Konsep terkait

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Artikel terkait

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Isyarat kredibilitas meningkatkan kepatuhan pada saran AI yang salah; verifikasi provenans pada titik penggunaan
