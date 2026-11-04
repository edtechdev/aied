---
title: "Penilaian Sumatif"
created: "2026-08-19T17:30:00-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/summative-assessment"
source_updated: "2026-10-26T08:45:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Penilaian sumatif** — penilaian yang dipakai untuk mengevaluasi dan mensertifikasi apa yang telah dipelajari pembelajar pada akhir satu unit, mata kuliah, atau program, berbeda dengan [[formative-assessment|penilaian formatif]] yang mendukung pembelajaran selama pengajaran berlangsung. Penilaian sumatif biasanya berbentuk ujian berisiko tinggi — tertulis, lisan, dengan pengawasan, atau tutup buku — yang memberi nilai, membatasi kelulusan, dan mensertifikasi kompetensi. Di era AI, penilaian sumatif telah menjadi medan pertempuran sentral atas [[academic-integrity]] dan validitas: [[generative-ai|AI generatif]] dapat mengembungkan kinerja pada tugas tanpa pengawasan atau tugas di rumah, sehingga pilihan format sumatif — dan bagaimana ia menahan substitusi AI — menjadi keputusan desain yang pivotal.

## Pertanyaan untuk Dipertimbangkan

- Penilaian sumatif mensertifikasi apa yang telah dipelajari siswa pada akhir mata kuliah, sementara penilaian formatif mendukung pembelajaran selama prosesnya. Di mana Anda pernah melihat garis antara keduanya mengabur, dan mengapa penting bahwa keduanya menjalankan fungsi berbeda?
- Halaman ini membingkai AI generatif sebagai penyusun ulang penilaian sumatif dalam dua arah sekaligus: AI menilai ujian, dan siswa memakai AI untuk menghindari pengukuran berbasis ujian. Manakah dari dua tekanan itu yang menurut Anda ancaman lebih besar bagi validitas, dan mengapa?
- Jika tugas tanpa pengawasan atau di rumah kehilangan validitas karena AI dapat menghasilkan jawabannya, apa implikasinya bagi cara penilaian seharusnya dirancang — dan apa yang mungkin dikorbankan dalam prosesnya?
- [[research-methods-aied|Penelitian]] yang dikutip di halaman ini menemukan LLM tidak menilai esai dengan cara yang sama seperti manusia. Jika penskoran otomatis cepat dan konsisten tetapi menilai secara berbeda, apakah itu masalah [[bias-mitigation|keadilan]], peluang, atau keduanya?
- Apa makna sebuah hasil berisiko tinggi (nilai, kredensial, penerimaan) jika pekerjaan di baliknya bisa saja dihasilkan AI? Bagaimana Anda akan merancang penilaian yang benar-benar dapat Anda percayai?

## Pendahuluan

Penilaian sumatif menjalankan fungsi yang secara fundamental berbeda dari penilaian formatif: ia mengukur dan mensertifikasi capaian alih-alih membimbing langkah berikutnya. Ia mencakup ujian akhir unit, ujian akhir semester, tes terstandardisasi dan berisiko tinggi (misalnya ujian masuk), ujian lisan, dan penilaian kinerja kumulatif. Karena hasil sumatif membawa konsekuensi nyata (nilai, kelulusan, kredensial, penerimaan universitas), ia menghadapi tekanan khusus di era AI — baik sebagai *sasaran* penskoran otomatis maupun sebagai ukuran *rentan* yang mungkin dimanipulasi siswa dengan AI generatif.

## Taruhan era AI: validitas dan integritas

Penelitian dalam basis pengetahuan ini mendokumentasikan bagaimana AI generatif secara fundamental menyusun ulang lanskap penilaian sumatif dalam dua arah: AI dipakai untuk **menilai** ujian dalam skala besar, dan AI dapat dipakai siswa untuk **menghindari** pengukuran pembelajaran mereka sendiri yang berbasis ujian.

- **AI sebagai penilai.** Penilaian sumatif makin bergantung pada [[automated-assessment|penskoran otomatis]] ujian, esai, dan jawaban singkat. [[llms-do-not-grade-essays-like-humans-2026|Penelitian tentang penskoran esai oleh LLM]] menemukan [[llm|LLM]] tidak menilai esai dengan cara yang sama seperti manusia, memunculkan pertanyaan validitas dan keadilan bagi penskoran otomatis berisiko tinggi. [[llm-automated-assessment-student-self-explanations|LLM yang menilai penjelasan diri siswa]] dan [[cong-confidence-asag-2026|penskoran jawaban singkat otomatis]] menelaah keandalan penskoran LLM dalam konteks sumatif, sementara [[psyscore-essay-scoring-zpd-feedback|kerangka yang sadar psikometri]] berupaya menjaga penskoran otomatis tetap tepercaya dan adaptif. Ujian kimia dasar tulisan tangan pada 296 siswa menggambarkan mengapa pengawasan selektif diperlukan: kesepakatan skor total LLM multimodal dengan penskoran asisten pengajar tinggi (R² = 0.91) namun keandalan tingkat butir bervariasi tajam menurut format, dan positif palsu (AI memberi kredit pada jawaban yang salah) cenderung tidak terdeteksi karena siswa jarang membantahnya — sehingga penilai AI yang "menilai semuanya" secara seragam tidak dapat dipertahankan untuk penggunaan berisiko tinggi tanpa pendelegasian berbasis keyakinan kepada manusia ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Kesepakatan luaran dapat bertahan meski penskoran butir tidak presisi.** Terhadap nilai resmi yang dimoderasi, LLM multimodal yang menilai 10,364 halaman Olimpiade Fisika dan universitas tulisan tangan berkorelasi pada r = 0.93–0.96 dan memulihkan lima siswa tim internasional yang sama, meski kesepakatan tepat pada bagian soal mencapai 70% — seorang penilai dinilai dari keputusan yang ia informasikan ([[ai-grading-handwritten-physics-2026|Pathak dkk. (2026)]]).
- **AI sebagai penghindaran.** Karena AI generatif dapat menghasilkan jawaban atas soal tertulis, tugas sumatif tanpa pengawasan dan di rumah kehilangan validitas: [[generative-ai-reduced-study-time-math|ukuran dengan pengawasan dan tanpa bantuan itu esensial]] karena kinerja tanpa pengawasan dikembungkan AI, dan [[generative-ai-guardrails-harm-learning|alat yang berpagar pengaman (petunjuk-bukan-jawaban)]] dapat menghapus penalti ujian yang ditimbulkan AI tanpa pagar. Kuasi-eksperimen [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] atas 500,000+ nilai membuat mekanismenya konkret: setelah rilis ChatGPT, mata kuliah dengan lebih banyak tugas terekspos AI mengalami kenaikan proporsi nilai A sebesar 13 poin persentase, dan efeknya terkonsentrasi pada **mata kuliah yang berat pekerjaan rumah** (tambahan 16 pp dalam estimasi triple-differences) — bukti langsung bahwa pekerjaan rumah tanpa pengawasan, bukan [[learning-gains|perolehan belajar]] yang sesungguhnya, adalah tempat AI mengembungkan luaran sumatif.
- **Ujian yang dihasilkan AI.** [[assessing-quality-ai-generated-exams-field-2025|Sebuah studi lapangan berskala besar]] dan [[ai-vs-human-assessment-efl-tpck-2026|penelitian penilaian EFL]] menelaah apakah AI dapat *menghasilkan* ujian dan tugas penilaian bermutu tinggi — penggunaan desain sumatif AI yang tengah berkembang.
- **Siswa tidak dapat mengidentifikasi butir buatan AI secara andal.** Dalam ujian Kedokteran Keluarga yang bernilai kredit, [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt dkk. (2026)]] tidak menemukan perbedaan signifikan dalam atribusi sumber antara 30 butir pilihan ganda hasil AI dan 30 butir ujian lisensi, dengan rata-rata pengenalan benar 68.6 sampai 77.5 persen, dan 18.2 persen butir hasil pembangkitan dieliminasi dalam [[human-in-the-loop-ai|tinjauan manusia]].

## Format sumatif yang tahan AI

Tema kunci dalam basis pengetahuan ini adalah bahwa **format sumatif menentukan ketahanan terhadap AI** — makin sebuah tugas menuntut kinerja langsung, tatap muka, dan diperiksa secara individual, makin sulit bagi siswa menggantikan pembelajaran mereka sendiri dengan AI.

- **Ujian dan penilaian lisan.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]] berargumen ujian lisan adalah format sumatif berteknologi rendah yang secara inheren tahan AI: dialog interaktifnya yang waktu-nyata menguji pemahaman, [[critical-thinking|berpikir kritis]], dan penalaran alih-alih hafalan, mencegah siswa memakai AI untuk menghasilkan dan menghafal jawaban, serta mencerminkan praktik profesional. [[socratic-tests-conversational-assessment|Tes Socrates]] dan [[code-review-genai-cs1|wawancara tinjauan kode]] memperluas ini ke penilaian sumatif yang dinamis, percakapan, dan berbasis wawancara.
- **Ukuran tutup buku, dengan pengawasan, tanpa bantuan.** [[generative-ai-reduced-study-time-math|Bukti]] dan [[stromberg-generative-ai-learning-penalty-secondary-2026|data lapangan berskala besar]] menunjukkan bahwa ujian tutup buku dengan pengawasan — bukan pekerjaan rumah atau tugas di rumah yang dikembungkan — adalah sinyal andal bagi pembelajaran yang sebenarnya ketika siswa memakai AI. Kerangka [[responsible-assessment-ai-era-stanford-2026|penilaian yang bertanggung jawab]] menanamkan ukuran tanpa bantuan ini dalam perancangan ulang yang digerakkan validitas. Ketika ujian tetap daring, [[remote-proctoring|pengawasan jarak jauh]] mengambil alih peran itu, dan dua tinjauan dalam korpus ini atas pengawasan otomatis menemukan kekhawatiran privasi dan [[bias-mitigation|keadilan]] di samping keuntungan deteksi ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **Pasangkan tugas yang rentan dengan kembarannya yang mengonfirmasi.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]] mempertahankan tugas yang rentan GenAI karena nilai pembelajarannya tetapi memasangkannya dengan tugas kedua yang menilai luaran yang sama, membuat nilainya saling bergantung melalui ambang konfirmasi atau pembobotan sehingga kembarannya mensertifikasi hasilnya.

## Penilaian sumatif berisiko tinggi dan terstandardisasi

Penilaian sumatif berisiko tinggi — ujian masuk, tes terstandardisasi, dan sertifikasi — membawa konsekuensi besar dan menjadi fokus kekhawatiran era AI. [[stromberg-generative-ai-learning-penalty-secondary-2026|Studi penalti pembelajaran AI generatif]] mengukur luaran ujian masuk sekolah menengah (Zhongkao) dan perguruan tinggi (Gaokao) dan menemukan skor turun 18–24% setelah penggunaan AI yang berkepanjangan. [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]] dan [[genai-performance-vs-learning|penelitian kinerja versus pembelajaran]] memperingatkan bahwa keuntungan pada tugas berbantuan AI tidak bertransfer ke ukuran berisiko tinggi tanpa bantuan.

## Sumatif vs. formatif di era AI

Literatur penilaian dalam basis pengetahuan ini secara konsisten menekankan bahwa [[assessment]] paling efektif ketika memadukan fungsi [[formative-assessment|formatif]] dan sumatif — tetapi era AI menajamkan pembedaan itu. Karena AI mengembungkan kinerja pada tugas berisiko rendah, tanpa pengawasan, dan yang menyembunyikan proses, **ukuran sumatif (terutama dengan pengawasan/tutup buku/tatap muka) menjadi pemeriksaan krusial** atas apakah pembelajaran benar-benar terjadi. Ini memotivasi perancangan ulang penilaian yang mempertahankan tugas sumatif autentik dan tahan AI (ujian lisan, wawancara tinjauan kode, ujian dengan pengawasan, [[eportfolio|portofolio]] berbasis proses) sebagai jangkar [[academic-integrity|integritas]] sambil memakai penilaian formatif untuk mendukung pembelajaran sepanjang jalan. Lihat [[authentic-assessment]] untuk respons desain yang konstruktif.

## Implikasi bagi AI dalam pendidikan

- **Format sumatif adalah tuas validitas dan integritas:** format sumatif yang tahan AI (lisan, dengan pengawasan, tutup buku, tatap muka) mempertahankan kaitan antara kinerja yang dinilai dan pembelajaran yang sebenarnya.
- **Ukuran dengan pengawasan/tanpa bantuan adalah sinyal yang andal:** ketika siswa memakai AI, ujian sumatif tanpa bantuan — bukan pekerjaan rumah — mengungkap pembelajaran yang sesungguhnya.
- **Penskoran otomatis memerlukan penelaahan psikometri:** memakai LLM untuk menilai ujian berisiko tinggi menuntut evaluasi keandalan, keadilan, dan validitas, bukan sekadar akurasi.
- Kesalahan penskoran juga bergantung pada nilai: pada 32 kiriman ujian kesehatan publik, LLM menghindari ujung skala — tidak ada E atau F yang muncul dalam mode cepat — sementara model terbaik menyamai nilai manusia secara persis pada 50.0% dan dalam rentang ±1 nilai pada 90.6% ([[llm-grading-assistants-public-health-2026|Brevik dkk. (2026)]]).
- **AI juga dapat menghasilkan ujian:** pembangkitan ujian dan tugas berbantuan AI adalah aplikasi desain sumatif yang tengah berkembang dan itu sendiri memerlukan evaluasi kualitas.
- **Pertimbangkan ulang tujuan penskoran, bukan hanya formatnya.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] mengkritik penskoran sumatif tradisional yang beracuan norma karena mendorong pembelajaran dangkal dan terfragmentasi, memberi siswa sedikit kendali atau transparansi, merugikan [[motivation]] intrinsik, memicu stres dan [[well-being|kecemasan]], serta melanggengkan ketimpangan sambil sebagian besar menilai daya ingat alih-alih penerapan di dunia nyata. Mereka memosisikan penilaian ulang, [[mastery-learning|penskoran berbasis standar]], dan ungrading sebagai inovasi berfokus penskoran yang dapat melunakkan praktik berat sumatif, sambil mengakui bahwa inovasi itu tetap marginal dalam pendidikan manajemen karena hambatan normatif — penskoran pada kurva, sinyal eksternal (peringkat, magang, akreditasi), dan pola pikir instrumental siswa — dan merekomendasikan eksperimentasi bertahap dengan dukungan institusional.

## Miskonsepsi Umum

- **"LLM tidak dapat menilai menurut standar resmi."** Terhadap **nilai resmi yang dimoderasi**, LLM multimodal yang menilai **10,364 halaman** Olimpiade Fisika dan universitas tulisan tangan berkorelasi kuat. Kesepakatan luaran dapat bertahan meski penskoran tingkat butir tidak presisi — yang berarti pertanyaan yang berguna adalah di mana presisi tingkat butir benar-benar dibutuhkan.
- **"Inflasi nilai AI hanyalah spekulasi."** Kuasi-eksperimen [[chirikov-ai-grade-inflation-2026|Chirikov (2026)]] atas **500,000+ nilai** membuat mekanismenya konkret: setelah rilis ChatGPT, **mata kuliah dengan lebih banyak tugas terekspos AI mengalami kenaikan proporsi nilai tinggi**. Efeknya terkonsentrasi di tempat tugas-tugas terekspos, yaitu pola yang akan diprediksi sebuah mekanisme.
- **"Siswa yang memakai AI tidak dapat dibedakan dari yang tidak, jadi provenans adalah harapan kosong."** Temuan bahwa **tidak ada perbedaan signifikan dalam atribusi sumber** antara butir hasil AI dan butir ujian lisensi, dengan pengenalan benar **68.6-77.5 persen** dan tingkat salah atribusi **18.2 persen**, adalah tentang kegagalan pengenalan — bukan tentang provenans yang tidak diperlukan. Justru sebaliknya, ia menaikkan tuntutan akan provenans yang terverifikasi.

## Konsep terkait

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Artikel terkait
- [[llm-grading-assistants-public-health-2026]] — Penilai LLM memampatkan skala nilai dan menghindari ekstrem dalam penilaian esai berisiko tinggi

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Mempertimbangkan ulang ujian lisan sebagai penilaian sumatif yang autentik dan tahan AI
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Penalti pembelajaran AI generatif: bukti ujian dengan pengawasan/tutup buku
- [[chirikov-ai-grade-inflation-2026]] — Pemindahan tugas oleh AI sebagai mekanisme inflasi nilai; mata kuliah berat pekerjaan rumah (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Penyelesaian lebih cepat, pembelajaran lebih sedikit: ukuran dengan pengawasan itu esensial
- [[generative-ai-guardrails-harm-learning]] — AI generatif tanpa pagar pengaman merugikan pembelajaran
- [[assessing-quality-ai-generated-exams-field-2025]] — Menilai kualitas ujian yang dihasilkan AI
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM tidak menilai esai seperti manusia
- [[llm-automated-assessment-student-self-explanations]] — LLM untuk penilaian otomatis penjelasan diri siswa
- [[cong-confidence-asag-2026]] — Penskoran jawaban singkat otomatis
- [[psyscore-essay-scoring-zpd-feedback]] — Penskoran esai adaptif-sifat yang sadar psikometri
- [[socratic-tests-conversational-assessment]] — Tes Socrates: penilaian dinamis, percakapan, multimodal
- [[code-review-genai-cs1]] — Wawancara tinjauan kode di CS1
- [[responsible-assessment-ai-era-stanford-2026]] — Penilaian yang bertanggung jawab di era AI
- [[test-driven-ai-assisted-learning]] — Pembelajaran berbantuan AI yang digerakkan tes
- [[genai-oop-programming-assessments-2026]] — Kinerja GenAI pada penilaian pemrograman berorientasi objek
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: perjuangan produktif dan ilusi pembelajaran
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tugas penilaian hasil AI versus hasil manusia dalam EFL
- [[roe-assessment-twins-2026]] — Kembaran penilaian untuk memperkuat validitas penilaian di era GenAI (Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — Penskoran AI atas penilaian fisika tulisan tangan (Olimpiade)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Siswa tidak dapat mengidentifikasi butir buatan AI secara andal
