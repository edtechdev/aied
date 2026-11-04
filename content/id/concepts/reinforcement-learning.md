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

updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/reinforcement-learning"
source_updated: "2026-10-26T01:00:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembelajaran penguatan** melatih tutor AI dan agen melalui sinyal imbalan: [[special-r1-rl-special-education]], [[singh-eduqwen-pedagogical-rl-2026]], [[pedagogical-safety-rl]], dan [[ai-coaching-rl-skill-development]] menyelaraskan RL dengan tujuan pedagogis, termasuk keselamatan dan transfer keterampilan ([[intelligent-tutoring]], [[agentic-ai]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Tutor RL 'belajar' apa yang harus dilakukan dengan memaksimalkan sinyal imbalan. Sebelum Anda membaca, apa yang bisa salah pada AI yang mengoptimalkan suatu imbalan — khususnya jika imbalannya adalah sesuatu seperti 'siswa mengeklik lanjut' atau 'jawaban benar sekarang'?
- Halaman ini mencatat bahwa desain imbalan mengodekan nilai-nilai pendidikan. Jika Anda harus menentukan imbalan yang seharusnya dimaksimalkan oleh tutor AI, apa yang akan Anda masukkan ke dalamnya — dan apa yang akan diabaikan atau diberi imbalan secara keliru oleh imbalan Anda tanpa sengaja?
- RL melatih agen untuk membuat rangkaian keputusan berhorizon panjang (petunjuk apa yang diberikan, kapan menaikkan kesulitan, bagaimana mengatur tempo) alih-alih jawaban tunggal. Bagaimana itu berbeda dari kebenaran dari saat ke saat yang mungkin Anda beri imbalan secara naif — dan mengapa perbedaannya penting bagi pembelajaran?
- Batasan keselamatan dapat diintegrasikan ke dalam RL agar optimasi imbalan tidak mengorbankan kesejahteraan pembelajar. Pikirkan perilaku 'membantu' yang mungkin ditunjukkan tutor yang mengoptimalkan imbalan tetapi sebenarnya merugikan secara pedagogis (misalnya, membocorkan jawaban untuk menggelembungkan tingkat penyelesaian). Di mana Anda akan menarik garis keselamatan Anda?
- Optimasi imbalan dapat mempertahankan atau menghancurkan pergulatan produktif, tergantung desainnya. Dari pengalaman Anda, apakah 'siswa menyelesaikan tugas' sama dengan 'siswa belajar'? Di mana Anda pernah melihat AI dioptimalkan untuk yang pertama sekaligus melemahkan yang kedua?

## Pendahuluan

### Bagaimana pembelajaran penguatan bekerja dalam AIED

Pembelajaran penguatan (RL) melatih agen dengan memberi imbalan atas perilaku yang diinginkan — agen mempelajari kebijakan yang memaksimalkan imbalan kumulatif melalui coba-coba. Dalam AI di bidang pendidikan, RL digunakan untuk melatih agen tutoring dan pendamping belajar yang harus membuat rangkaian keputusan (petunjuk apa yang diberikan, kapan menaikkan tingkat kesulitan, bagaimana mengatur tempo latihan) alih-alih jawaban tunggal. Ini membuat RL cocok untuk [[adaptive-learning]] dan [[intelligent-tutoring]] tempat keputusan pedagogis berhorizon panjang menjadi penting.

### Aplikasi yang terdokumentasi dalam basis pengetahuan

- **RL yang selaras secara pedagogis.** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] menggunakan pipeline RL-SFT-RL untuk melatih model yang *membimbing* alih-alih menjawab, menyelaraskan imbalan dengan tujuan pedagogis; [[special-r1-rl-special-education]] menerapkan RL pada desain tutor untuk [[special-education]].
- **RL mengalahkan penyetelan halus terawasi untuk mengikuti instruksi pedagogis.** Pelatihan LearnLM menemukan bahwa RL berbasis preferensi jauh lebih efektif daripada SFT saja, karena penilaian preferensi menangkap perbedaan yang bergantung pada konteks di sepanjang percakapan panjang yang hanya sebagian ditangani oleh data terawasi berlabel instruksi ([[learnlm-improving-gemini-learning|LearnLM Team (2025)]]).
- **Keselamatan dan transfer keterampilan.** [[pedagogical-safety-rl]] mengintegrasikan batasan keselamatan ke dalam tutoring berbasis RL agar optimasi imbalan tidak mengorbankan kesejahteraan pembelajar; [[ai-coaching-rl-skill-development]] menunjukkan coaching yang digerakkan RL yang mendukung pengembangan keterampilan dan transfer yang autentik.
- **Apa yang dihilangkan suatu imbalan membentuk siapa yang diuntungkan.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi et al. (2026)]] menemukan tutor deep-RL yang diberi imbalan atas skor tes dan efisiensi waktu menyamai heuristik BKT pada posttest (A = .58 untuk keduanya, dibandingkan 65.7) tetapi hanya menugaskan 4% soal latihan untuk perbaikan contoh keliru yang konstruktif dan lebih menguntungkan siswa dengan pengetahuan awal tinggi.
- **Simulasi dan latihan.** [[history-aware-student-simulation]] dan [[q-learning-lab-rl-teaching]] menggunakan RL dan pembelajar tersimulasi untuk melatih dan mengevaluasi [[pedagogical-agent|agen pedagogis]], menghubungkan RL dengan [[student-modeling]] dan [[learning-analytics]].

- **RL berhorizon panjang dan berbobot keselamatan.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin et al., 2026)]] mengoptimalkan seluruh pertemuan klinis 60 putaran — jauh melampaui horizon ≤12 putaran sistem dialog yang ada — dan pelatihan melawan pasien tersimulasi adversarial dengan imbalan yang selaras keselamatan menaikkan akurasi diagnosis 7.0% dan memangkas tingkat tanda bahaya yang terlewat sekitar sepertiga.

### Bukti di seluruh bidang

Sebuah [[riedmann-reinforcement-learning-education-review-2026|tinjauan sistematis RL dalam pendidikan (Riedmann, Schaper & Lugrin, 2025)]] berstandar PRISMA menyintesis 89 studi (2000–2024) dan menemukan pertumbuhan tajam setelah 2016 pada aplikasi [[adaptive-learning]] dan [[intelligent-tutoring|tutoring]] yang terkonsentrasi di STEM (terutama [[math-education]]). Tinjauan itu melaporkan bahwa RL tanpa model mendominasi (n = 72) dengan Q-learning sebagai algoritme paling umum, namun RL klasik lebih konsisten efektif daripada Deep RL (61% vs 36% makalah yang menunjukkan keunggulan signifikan); bahwa adaptasi terbagi menjadi mekanisme penjadwalan konten (n = 53) dan mekanisme terkait panduan (n = 36), dengan RL lebih sering mengalahkan garis dasar pada panduan; dan bahwa perolehan belajar — terutama perolehan belajar ternormalisasi — merupakan sumber imbalan yang paling efektif. Tinjauan itu juga memperingatkan bahwa lebih dari separuh studi (n = 54) melewatkan uji statistik, sehingga pertumbuhan bidang ini melampaui ketelitian metodologisnya.

### Keterkaitan dengan basis pengetahuan

RL mendasari banyak desain [[agentic-ai]] dan [[intelligent-tutoring]] modern, tempat agen harus mengoptimalkan pembelajaran jangka panjang alih-alih satu respons yang benar. Ia terkait dengan [[llm-training-and-fine-tuning]] (RL sebagai metode pelatihan), [[scaffolding]] (desain imbalan yang mempertahankan pergulatan produktif), dan [[self-regulated-learning]] (agen yang membantu pembelajar mengatur strateginya sendiri). Karena desain imbalan mengodekan nilai-nilai pendidikan, penelitian RL dalam AIED sangat terkait dengan [[pedagogical-safety]] dan dengan pertimbangan keadilan atas perilaku tutor yang [[equity-in-ai-education|berkeadilan]].

## Miskonsepsi Umum

**"Menyamai garis dasar berarti kebijakan RL mempelajari sesuatu yang layak dimiliki."** Itu berarti imbalannya terpenuhi. Tutor deep-RL yang diberi imbalan atas skor tes dan efisiensi waktu **menyamai heuristik BKT pada posttest (A = .58 untuk keduanya)** sementara hanya menugaskan **4% soal latihan untuk perbaikan contoh keliru yang konstruktif** dan lebih menyukai interaksi yang lebih murah. Kebijakan itu mengoptimalkan apa yang dibayar untuknya, dan apa yang dibayar untuknya mengecualikan aktivitas produktif tersebut.

**"Fungsi imbalan adalah detail teknis."** Ia adalah spesifikasi pedagogis. Apa pun yang diberi bobot oleh imbalan adalah apa yang akan dilakukan kebijakan, sehingga memilih antara skor, efisiensi waktu, keterlibatan, dan perbaikan menuntut posisi eksplisit tentang apa itu belajar — keputusan kurikulum yang dikodekan sebagai angka.

**"Horizon yang lebih panjang selalu lebih baik."** Horizon panjang memungkinkan hal yang tidak dapat dilakukan horizon pendek, dan menuntut imbalan yang tepat di sepanjang seluruh rangkaian. [[residencyrl-clinical-rl-training-2026|ResidencyRL]] mengoptimalkan seluruh **pertemuan klinis 60 putaran**, jauh melampaui horizon ≤12 putaran sistem dialog yang ada, yang menaikkan biaya tujuan yang salah spesifikasi alih-alih menurunkannya.

**"RL adalah formalisme yang tepat untuk tutoring karena pengajaran bersifat berurutan."** Pengurutan itu perlu dan tidak cukup; kendala yang mengikat adalah validitas imbalan. Tujuan yang terspesifikasi baik dengan kebijakan yang lemah mengalahkan kebijakan yang kuat yang melawan tujuan yang salah.

## Konsep terkait

- [[intelligent-tutoring]]
- [[student-experience]]
- [[stem-education]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[active-learning]]
- [[edtech-platform]]
- [[higher-ed]]
- [[learning-analytics]]
- [[open-source]]
- [[pedagogical-safety]]
- [[llm-training-and-fine-tuning]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agensik)

## Artikel terkait

- [[history-aware-student-simulation]]
- [[q-learning-lab-rl-teaching]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[learnlm-improving-gemini-learning]] — LearnLM: RLHF untuk mengikuti instruksi pedagogis
- [[adaptive-scaffolding-cognitive-engagement-its]] — Perancah ICAP adaptif dalam ITS (BKT vs DRL)
- [[riedmann-reinforcement-learning-education-review-2026]]
