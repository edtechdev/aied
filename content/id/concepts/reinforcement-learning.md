---
title: "Pembelajaran Penguatan"
created: "2026-07-28T10:44:35-04:00"
type: concept
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer]
pedagogy: [active-learning, scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, personalized-learning]
ethics: [pedagogical-safety]
level: [special education, k 12, higher ed]
confidence: medium

connected_concepts: [intelligent-tutoring, student-experience, stem-education, self-regulated-learning, scaffolding, active-learning, edtech-platform, higher-ed, learning-analytics, open-source, pedagogical-safety, llm-training-and-fine-tuning, ai-technologies]
connected_articles: [history-aware-student-simulation, q-learning-lab-rl-teaching, singh-eduqwen-pedagogical-rl-2026, residencyrl-clinical-rl-training-2026, learnlm-improving-gemini-learning, adaptive-scaffolding-cognitive-engagement-its, riedmann-reinforcement-learning-education-review-2026]
updated: "2026-11-24T15:51:30-05:00"
translation_of: "concepts/reinforcement-learning"
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembelajaran penguatan** melatih tutor AI dan agen melalui sinyal imbalan: [[special-r1-rl-special-education|Lee et al., 2026]], [[singh-eduqwen-pedagogical-rl-2026|Singh et al., 2026]], [[pedagogical-safety-rl|Olukolaa et al. (2026)]], dan [[ai-coaching-rl-skill-development|Wang et al. (2026)]] menyelaraskan RL dengan tujuan [[pedagogy|pedagogis]], termasuk keselamatan dan transfer keterampilan ([[intelligent-tutoring|tutoring cerdas]], [[agentic-ai|agensik]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Seorang tutor RL 'belajar' apa yang harus dilakukan dengan memaksimalkan sinyal imbalan. Sebelum Anda membaca, apa yang bisa salah pada AI yang mengoptimalkan suatu imbalan, khususnya jika imbalannya adalah sesuatu seperti 'siswa mengeklik lanjut' atau 'jawaban benar sekarang'?
- Desain imbalan mengodekan nilai-nilai pendidikan. Jika Anda harus menentukan imbalan yang seharusnya dimaksimalkan oleh tutor AI, apa yang akan Anda masukkan ke dalamnya, dan apa yang akan diabaikan atau diberi imbalan secara keliru oleh imbalan Anda tanpa sengaja?
- RL melatih agen untuk membuat rangkaian keputusan berhorizon panjang (petunjuk apa yang diberikan, kapan menaikkan kesulitan, bagaimana mengatur tempo) alih-alih jawaban tunggal. Bagaimana itu berbeda dari kebenaran dari saat ke saat yang mungkin Anda beri imbalan secara naif, dan mengapa perbedaannya penting bagi pembelajaran?
- Imbalan seorang tutor dapat membawa batasan keselamatan di dalamnya, sehingga apa yang dibayar untuk kebijakan tidak dapat mengesampingkan [[well-being|kesejahteraan]] pembelajar. Pikirkan perilaku 'membantu' yang mungkin ditunjukkan tutor yang mengoptimalkan imbalan tetapi sebenarnya merugikan secara pedagogis, misalnya membocorkan jawaban untuk menggelembungkan tingkat penyelesaian. Di mana Anda akan menarik garis keselamatan Anda?
- Optimasi imbalan dapat mempertahankan atau menghancurkan [[desirable-difficulties|pergulatan produktif]], tergantung desainnya. Dari pengalaman Anda, apakah 'siswa menyelesaikan tugas' sama dengan 'siswa belajar'? Di mana Anda pernah melihat AI dioptimalkan untuk yang pertama sekaligus melemahkan yang kedua?

## Pendahuluan

## Bagaimana pembelajaran penguatan bekerja dalam AIED

Pembelajaran penguatan (RL) melatih agen dengan memberi imbalan atas perilaku yang diinginkan, dan agen mempelajari kebijakan yang memaksimalkan imbalan kumulatif melalui coba-coba. Dalam [[ai-education|AI dalam pendidikan]], RL digunakan untuk melatih agen tutoring dan pendamping belajar yang keputusannya saling bersambung sepanjang satu sesi, yaitu petunjuk apa yang diberikan, kapan menaikkan kesulitan, dan bagaimana mengatur tempo latihan, alih-alih menyelesaikan satu jawaban pada satu waktu. Ini membuat RL cocok untuk [[adaptive-learning|pembelajaran adaptif]] dan [[intelligent-tutoring|tutoring cerdas]] tempat keputusan pedagogis berhorizon panjang menjadi penting.

## Aplikasi yang terdokumentasi

- **RL yang selaras secara pedagogis.** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] menggunakan pipeline RL-SFT-RL untuk melatih model yang *membimbing* alih-alih menjawab, menyelaraskan imbalan dengan tujuan pedagogis; [[special-r1-rl-special-education|Lee et al., 2026]] menerapkan RL pada desain tutor untuk [[special-education|pendidikan khusus]].
- **RL mengalahkan penyetelan halus terawasi untuk mengikuti instruksi pedagogis.** Pelatihan LearnLM menemukan bahwa RL berbasis preferensi jauh lebih efektif daripada SFT saja, karena penilaian preferensi menangkap perbedaan yang bergantung pada konteks di sepanjang percakapan panjang yang hanya sebagian ditangani oleh data terawasi berlabel instruksi ([[learnlm-improving-gemini-learning|LearnLM Team (2025)]]).
- **Keselamatan dan transfer keterampilan.** [[pedagogical-safety-rl|Olukolaa et al. (2026)]] mengintegrasikan batasan keselamatan ke dalam tutoring berbasis RL agar optimasi imbalan tidak mengorbankan kesejahteraan pembelajar; [[ai-coaching-rl-skill-development|Wang et al. (2026)]] menunjukkan coaching yang digerakkan RL yang mendukung pengembangan keterampilan dan transfer yang autentik.
- **Apa yang dihilangkan suatu imbalan membentuk siapa yang diuntungkan.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] menemukan tutor deep-RL yang diberi imbalan atas skor tes dan efisiensi waktu menyamai heuristik BKT pada posttest (A = 0,58 untuk keduanya, dibandingkan 65,7) tetapi hanya menugaskan 4% soal latihan untuk perbaikan contoh keliru yang konstruktif dan lebih menguntungkan siswa dengan [[prior-knowledge|pengetahuan awal]] tinggi.
- **Simulasi dan latihan.** [[history-aware-student-simulation|Duan et al., 2026]] dan [[q-learning-lab-rl-teaching|Jueng (2026)]] menggunakan RL dan [[simulating-students|siswa simulasi]] untuk melatih dan mengevaluasi [[pedagogical-agent|agen pedagogis]], menghubungkan RL dengan [[student-modeling|pemodelan siswa]] dan [[learning-analytics|analitik pembelajaran]].

- **RL berhorizon panjang dan berbobot keselamatan.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] mengoptimalkan seluruh pertemuan klinis 60 putaran, jauh melampaui horizon ≤12 putaran pada [[conversational-ai|sistem dialog]] yang ada, dan pelatihan melawan pasien tersimulasi adversarial dengan imbalan yang selaras keselamatan menaikkan akurasi diagnosis 7,0% dan memangkas tingkat tanda bahaya yang terlewat sekitar sepertiga.

## Bukti di seluruh bidang

Sebuah [[meta-analysis-systematic-review|PRISMA]]-standar [[riedmann-reinforcement-learning-education-review-2026|tinjauan sistematis RL dalam pendidikan (Riedmann, Schaper & Lugrin, 2025)]] menyintesis 89 studi (2000 hingga 2024), menemukan pertumbuhan tajam setelah 2016 pada aplikasi [[adaptive-learning|pembelajaran adaptif]] dan [[intelligent-tutoring|tutoring]] yang terkonsentrasi di STEM (terutama [[math-education|pendidikan matematika]]). Tinjauan itu melaporkan bahwa RL tanpa model mendominasi (n = 72) dengan Q-learning sebagai algoritme paling umum, namun RL klasik lebih konsisten efektif daripada Deep RL (61% versus 36% makalah yang menunjukkan keunggulan signifikan). Adaptasi terbagi menjadi mekanisme penjadwalan konten (n = 53) dan mekanisme terkait panduan (n = 36), dengan RL lebih sering mengalahkan garis dasar pada panduan, dan perolehan belajar, terutama perolehan belajar ternormalisasi, merupakan sumber imbalan yang paling efektif. Tinjauan itu juga memperingatkan bahwa lebih dari separuh studi (n = 54) melewatkan uji statistik, sehingga pertumbuhan bidang ini melampaui ketelitian metodologisnya.

## Keterkaitan dengan desain AIED

RL mendasari banyak desain [[agentic-ai|agensik]] dan [[intelligent-tutoring|tutoring cerdas]] modern, tempat agen harus mengoptimalkan pembelajaran jangka panjang alih-alih satu respons yang benar. Ia terkait dengan [[llm-training-and-fine-tuning|pelatihan dan penyetelan halus LLM]] (RL sebagai metode pelatihan), [[scaffolding|perancah]] (desain imbalan yang mempertahankan pergulatan produktif), dan [[self-regulated-learning|pembelajaran yang diatur sendiri]] (agen yang membantu pembelajar mengatur strateginya sendiri). Karena desain imbalan mengodekan nilai-nilai pendidikan, penelitian RL dalam AIED sangat terkait dengan [[pedagogical-safety|keselamatan pedagogis]] dan dengan pertimbangan keadilan atas perilaku tutor yang [[equity-in-ai-education|berkeadilan]].

## Miskonsepsi Umum

**"Menyamai garis dasar berarti kebijakan RL mempelajari sesuatu yang layak dimiliki."** Itu berarti imbalannya terpenuhi. Seorang tutor dapat menyamai heuristik BKT pada posttest (**A = 0,58 untuk keduanya**) sambil hanya mengirim **4% soal latihan ke perbaikan contoh keliru yang konstruktif** dan lebih menyukai interaksi yang lebih murah. Kebijakan itu mengoptimalkan apa yang dibayar untuknya, dan apa yang dibayar untuknya mengecualikan aktivitas produktif tersebut.

**"Fungsi imbalan adalah detail teknis."** Ia adalah spesifikasi pedagogis. Apa pun yang diberi bobot oleh imbalan adalah apa yang akan dilakukan kebijakan, sehingga memilih antara skor, efisiensi waktu, keterlibatan, dan perbaikan menuntut posisi eksplisit tentang apa itu belajar, suatu keputusan [[curriculum-design|kurikulum]] yang dikodekan sebagai angka.

**"Horizon yang lebih panjang selalu lebih baik."** Horizon panjang memungkinkan hal yang tidak dapat dilakukan horizon pendek, dan menuntut imbalan yang tepat di sepanjang seluruh rangkaian. [[residencyrl-clinical-rl-training-2026|ResidencyRL]] mengoptimalkan seluruh **pertemuan klinis 60 putaran**, jauh melampaui horizon ≤12 putaran pada sistem dialog yang ada, yang menaikkan biaya tujuan yang salah spesifikasi alih-alih menurunkannya.

**"RL adalah formalisme yang tepat untuk tutoring karena pengajaran bersifat berurutan."** Pengurutan itu perlu dan tidak cukup; kendala yang mengikat adalah validitas imbalan. Tujuan yang terspesifikasi baik dengan kebijakan yang lemah mengalahkan kebijakan yang kuat yang melawan tujuan yang salah.
