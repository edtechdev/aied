---
title: "Video dalam Pendidikan"
created: "2026-09-05T01:05:00-04:00"
type: concept
pedagogy: [online-teaching-and-learning, student-engagement, video-education]
technology: [adaptive-learning, generative-ai, learning-analytics, llm, multimodal, personalized-learning]
audience: [instructors, instructional designers]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-08T14:14:01-05:00"
translation_of: "concepts/video-education"
source_updated: "2026-11-05T23:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Video dalam pendidikan** — penggunaan video sebagai medium untuk [[teacher-role|pengajaran]] dan pembelajaran, dan bagaimana [[generative-ai|AI generatif]] membentuk ulangnya: video instruksional yang dihasilkan AI dan [[personalized-learning|dipersonalisasi]] AI, [[ai-avatars-and-synthetic-instructors|avatar]] dan pemapar AI, pembuatan video adaptif, [[learning-analytics|analitik pembelajaran]] berbasis video dan penginderaan atensi/[[student-engagement|keterlibatan]], serta dukungan AI untuk konsumsi video kuliah. Basis pengetahuan ini memperlakukan video sebagai medium pembelajaran daring yang mapan sekaligus situs inovasi AI yang berkembang cepat, mencakup pengajaran [[online-teaching-and-learning|daring]], hibrida, dan tatap muka.

## Pertanyaan yang Perlu Dipertimbangkan

- Video pendidikan telah lama menjadi sumber "satu ukuran untuk semua" — konten identik bagi setiap pembelajar. AI generatif kini membuat video per pembelajar menjadi layak, dan [[research-methods-aied|penelitian]] menunjukkan siswa sangat menghargai personalisasi itu. Apa yang ditambahkan personalisasi melebihi relevansi — dan apa yang mungkin menjadi biayanya?
- Siswa sering mengatakan mereka tetap menghargai kehadiran dan keaslian instruktur manusia dalam video. Namun dalam preferensi berhadapan langsung, video AI yang dipersonalisasi dapat mengalahkan kuliah umum yang direkam manusia. Pertukaran apa yang sebenarnya dilakukan pembelajar, dan seberapa tahan lama pertukaran itu?
- Avatar AI yang diklon dari instruktur dapat menghasilkan video dalam skala besar — tetapi mereka juga dapat memicu ketidaknyamanan "uncanny valley" dan keberatan [[ethics|etis]] (dampak lingkungan, tenaga kerja, integritas akademik). Kapan pemapar AI dapat diterima, dan kapan ia melewati batas yang tidak dapat diatasi perbaikan teknis apa pun?
- Banyak penelitian video bersandar pada preferensi dan [[self-report-measures|laporan diri]] siswa. Seberapa baik preferensi yang dinyatakan memprediksi [[learning-gains|hasil belajar]] yang sebenarnya — dan kapan video yang "terasa baik" mengajar lebih buruk daripada yang tidak?
- Analitik video dapat mendeteksi atensi, keterlibatan, dan titik putus sekolah. Apa implikasi [[pedagogy|pedagogis]] dan [[privacy|privasi]] dari menginstrumentasikan pembelajaran video sedekat ini?

## Pendahuluan

Video adalah landasan pendidikan kontemporer — terutama [[online-teaching-and-learning|pembelajaran daring dan hibrida]] — dihargai karena fleksibilitas, skalabilitas, dan konsistensinya. Namun video instruksional konvensional diproduksi sebagai artefak satu ukuran untuk semua, menyajikan konten identik kepada setiap pembelajar tanpa memandang minat, latar belakang, atau [[prior-knowledge|pengetahuan awalnya]]. AI generatif menggeser video dari medium siaran statis menjadi medium dinamis yang disesuaikan secara individual, dan juga memunculkan pertanyaan baru tentang kehadiran, [[trust]], [[privacy]], dan pengukuran.

### Bagaimana penelitian basis pengetahuan ini mengelompok

- **Video instruksional yang dihasilkan AI dan dipersonalisasi.** Satu alur utama menanyakan apakah siswa menerima video yang diproduksi AI dan bagaimana ia dibandingkan dengan konten yang direkam manusia. [[ai-generated-instructional-videos-computing-ed|Survei siswa dalam pendidikan komputasi]] menyelidiki persepsi dan preferensi terhadap video instruksional yang dihasilkan AI. Dalam penerapan lapangan berskala besar, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] menemukan bahwa siswa lebih menyukai video AI *yang dipersonalisasi* daripada kuliah yang direkam manusia tanpa personalisasi — preferensi di mana efek personalisasi lebih besar daripada nilai yang ditempatkan pada pemapar manusia. [[ai-video-dual-gatekeeping-2026|Penelitian dual gatekeeping]] menunjukkan bagaimana pengawasan instruktur ("gatekeeping") pada dua tahap produksi video AI menghasilkan keluaran yang lebih berlandaskan pedagogis, terhubung ke desain [[human-in-the-loop-ai|human-in-the-loop]].
- **Pembuatan video adaptif dan terstruktur.** [[courseblueprint-adaptive-video-generation|CourseBlueprint]] menawarkan pipeline terstruktur yang menghasilkan video pedagogis adaptif yang berlandaskan korpus mata kuliah, menunjukkan bahwa struktur pedagogis eksplisit — bukan hanya [[ai-literacy|kefasihan AI]] — yang menggerakkan video AI yang efektif. [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] menerapkan logika yang sama pada skala kuliah utuh: dari 31 kuliah pascasarjana ia menghasilkan 209 video untuk kesehatan, keuangan, energi, dan audiens generik, dan 25 pakar yang cocok secara domain menilai 92 di antaranya dan menempatkan 87% pada atau di atas titik tengah yang ditulis sebagai "kualitas kuliah MOOC standar" (rata-rata 3.42 dari 5), dengan biaya API sekitar \$0.22 per menit — dengan suara, waktu tayang slide, dan tata letak menjadi cacat yang berulang.
- **Lingkar pembelajaran mengalahkan render yang lebih baik.** [[pivot-generative-video-tutors-stem-2026|Ma et al. (2026)]] merencanakan setiap video sebagai papan cerita berisi tujuan, aktivasi prasyarat, contoh terkerjakan, dan probe diagnostik, dipasangkan dengan kuis yang menghindari contoh dalam video dan remediasi untuk setiap opsi salah; 96.9% dari 32 instruktur menilai lingkar itu lebih efektif daripada video berdiri sendiri.
- **Analitik pembelajaran video dan atensi.** Menginstrumentasikan video mengungkap bagaimana pembelajar terlibat. [[engagement-assessment-video|Asesmen keterlibatan dalam pembelajaran video]] dan [[savvy-student-attention-video-learning|SAVVY]] memvisualisasikan atensi siswa selama pembelajaran berbasis video, mendukung [[learning-analytics|analitik pembelajaran]], [[self-regulated-learning|regulasi diri]], dan peringatan dini terhadap ketidakterlibatan. Kerja segmentasi (mis., [[adhd-video-segmentation-computing-education|segmentasi video temporal]]) menyesuaikan video dengan perbedaan individual.
- [[zhou-gaiva-human-ai-video-analysis-2026|Zhou, Kang dan Nguyen (2026)]] memasangkan tahap transkripsi MLLM dengan tahap pengodean LLM berbasis teks dalam GAIVA untuk membawa keandalan setingkat manusia ke analisis video kelas. Prompt penugasan peran menghasilkan transkrip paling seimbang (akurasi M = 3.24, kelengkapan M = 3.86), pengodean ganda penilai mencapai ICC 0.89 hingga 0.99, dan pengodean berbasis transkrip GPT-4o mencapai κ = 0.91 untuk Kolaborasi Terkoordinasi — di atas κ manusia–manusia = 0.83.
- **Pembacaan neural atas penyandian video.** [[sensor-and-gaze-analytics|Rekonstruksi EEG]] atas bingkai video yang ditonton lebih mirip secara semantik untuk pertanyaan yang dijawab benar (M = 71.43) daripada yang salah (M = 62.30, p < .001), dan ketidakselarasan temporal yang sistematis — rekonstruksi yang menyerupai bingkai sebelumnya — dapat dikuantifikasi sebagai ukuran dispersi yang terkait dengan kinerja ([[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]]).
- **Avatar dan kehadiran.** Avatar AI — pemapar virtual dan agen pedagogis — memunculkan pertanyaan tentang identitas, [[community-of-inquiry|kehadiran sosial]], dan kepercayaan. [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Identitas avatar dan kepercayaan epistemik]] memeriksa bagaimana identitas tampak seorang pemapar membentuk kepercayaan pembelajar, sementara [[ai-psychotherapy-training-avatars|avatar AI dalam pelatihan]] memperluas pola itu ke praktik profesional.
- **Komentar perancah dalam video — dan apa yang masih salah dilakukan AI.** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang, Du dan Jin (2026)]] menghasilkan *i-Comments*, pesan [[scaffolding]] yang ditampilkan di dalam bingkai video dan disinkronkan dengan konten, dengan menghitung entropi tingkat bingkai dan menyisipkan dukungan hanya pada interval berinformasi rendah. Dibandingkan dengan 120 komentar dari instruktur berpengalaman, 1,000 komentar ChatGPT lebih padat, jauh lebih sedikit bervariasi secara struktural (keragaman POS 3-gram 5.5–6.2% vs. 25.1–38.5%), lebih sulit dibaca pada setiap indeks keterbacaan, dan kurang selaras secara topikal (BERTScore dukungan emosional 0.317 vs. 0.574); 40 pembelajar menilai komentar manusia secara signifikan lebih tinggi pada ketepatan waktu dan kegunaan, meskipun model yang lebih baru mempersempit kesenjangan itu. Argumennya adalah argumen desain sekaligus argumen otomatisasi: dukungan yang tertanam dalam media menghindari biaya atensi dan kognitif dari berhenti untuk menanyakan [[conversational-ai|chatbot]] terpisah ([[ai-feedback-quality|kualitas umpan balik]], [[social-emotional-learning|dukungan emosional]]).
- **Dukungan AI untuk konsumsi video kuliah.** Di luar pembuatan, AI membantu pembelajar dan guru bekerja dengan video yang ada: [[bilingual-llm-lecture-companion-srl-2026|pendamping kuliah LLM bilingual]] mendukung pembelajaran yang diatur sendiri dengan kuliah terekam, dan [[gemini-lualatex-physics-video-transcription-2026|pipeline transkripsi]] mengubah video kuliah menjadi teks yang aksesibel.
- **Kesetiaan transkrip menentukan sejauh mana teks dapat menggantikan video.** [[wang-educational-video-transcripts-llm-analysis-2026|Wang, Pritchard dan Rosenberg (2026)]] menolok ukur lima sistem ASR terhadap transkrip rujukan manusia pada episode Crash Course U.S. History, dengan tingkat galat kata berkisar dari 2.43% (TurboScribe) hingga 15.32% (Vosk). Pengodean GPT-5.5 atas 48 transkrip menemukan PERSON sebagai kategori entitas bernama paling sering (2,033 total; M = 42.35 per episode), dan pemindaian K yang telah ditetapkan memilih K = 5, di mana perluasan rujukan LLM menghasilkan pemisahan topik yang lebih jelas daripada garis dasar ASR.
- **Zoom tingkat wilayah adalah lapisan yang hilang dari slide bernarasi.** Studi dalam-subjek dengan 24 penonton menemukan bahwa zoom otomatis plus sorotan tersinkronisasi menurunkan beban kerja NASA-TLX dari 5.74 menjadi 4.53 (d = 0.84) dan meningkatkan pemahaman langsung (d = 0.46), meskipun keunggulan 24 jam meleset dari signifikansi (p = .054) ([[lian-guideslide-narrated-slides-visual-guidance-2026|Lian et al., 2026]]).

### Personalisasi versus kehadiran manusia

Ketegangan yang berulang adalah apakah nilai [[personalized-learning|personalisasi]] dapat melebihi nilai instruktur manusia yang terlihat. [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] membingkai personalisasi dan kehadiran sosial sebagai *sinyal kepedulian instruksional yang dapat saling menggantikan sebagian*: penyampaian manusia meningkatkan pengalaman [[affective-computing|afektif]] dan keaslian, sementara personalisasi meningkatkan relevansi — dan siswa bersedia menukar satu dengan yang lain. Data peringkat mereka dari mata kuliah besar (88.4% lebih menyukai semacam video yang dipersonalisasi; hanya 73.8% lebih menyukai yang direkam manusia) menunjukkan bahwa personalisasi kini sering menjadi faktor yang lebih berpengaruh, mengarah pada model komplementer di mana instruktur manusia menyediakan keahlian dan koneksi sosial sementara AI memperluas jangkauannya dengan media yang disesuaikan secara individual.

### Desain, etika, dan pengukuran

Menghasilkan video AI yang efektif membutuhkan struktur pedagogis dan pengawasan manusia, dan memunculkan kekhawatiran yang khas: pemapar AI dapat menimbulkan ketidaknyamanan atau ketidakpercayaan ("uncanny valley"); video generatif berisiko ketidakakuratan faktual yang mungkin tidak ditangkap pembelajar; menskalakan personalisasi menuntut pengumpulan atau inferensi atribut pembelajar, dengan kekhawatiran [[privacy|privasi]], bias, dan [[governance|tata kelola]] yang menyertainya; dan sebagian pembelajar menolak instruksi yang dihasilkan AI atas dasar prinsip (dampak lingkungan, tenaga kerja, otomatisasi, [[academic-integrity|integritas akademik]]). Pengukuran pun sedang berubah — banyak bukti bersandar pada preferensi yang dinyatakan dan nilai yang dipersepsikan alih-alih hasil belajar objektif, sehingga data preferensi harus dibaca bersama data hasil (yang sering masih akan datang).

## Miskonsepsi Umum

**"Siswa lebih menyukai video AI, jadi ia mengajar lebih baik."** Preferensi dan pembelajaran adalah ukuran yang terpisah, dan sebagian besar literatur ini bersandar pada yang pertama. Dalam mata kuliah daring besar (493 responden), siswa menempatkan video AI yang dipersonalisasi di atas kuliah yang direkam manusia tanpa personalisasi (peringkat rata-rata 2.26 versus 2.69) dan 88.4% menempatkan semacam video yang dipersonalisasi di urutan pertama — hasil preferensi yang bersih. Peringatan halaman ini sendiri berlaku: bukti di sini sebagian besar bersandar pada preferensi yang dinyatakan dan nilai yang dipersepsikan alih-alih [[learning-gains|hasil belajar]] objektif, sehingga data preferensi harus dibaca bersama data hasil, bukan sebagai penggantinya. Video yang terasa lebih tepat sasaran tidak dengan sendirinya mengajar lebih banyak.

**"Komentar perancah yang dihasilkan AI dapat menggantikan komentar instruktur."** Keduanya berbeda dalam cara yang penting bagi pengajaran. Dibandingkan dengan 120 komentar dari instruktur berpengalaman, 1,000 komentar ChatGPT *lebih padat* tetapi jauh lebih sedikit bervariasi secara struktural (keragaman POS 3-gram 5.5–6.2%), dan 40 pembelajar menilai komentar manusia secara signifikan lebih tinggi pada ketepatan waktu dan kegunaan — meskipun model yang lebih baru mempersempit kesenjangan itu. Volume dan kepadatan tidak sama dengan komentar bervariasi dan bertempo yang dihasilkan instruktur yang baik, dan kesenjangan yang menyempit adalah tren yang perlu dilacak alih-alih kesetaraan yang sudah selesai.

**"Mengklon instruktur menjadi avatar menskalakan kehadiran manusia."** Itu menskalakan produksi dan mengubah apa yang disampaikan. Avatar AI yang diklon dari instruktur dapat menghasilkan video dalam skala besar, tetapi mereka juga memicu ketidaknyamanan uncanny valley dan memunculkan keberatan [[ethics|etis]] yang mencakup dampak lingkungan, tenaga kerja, dan [[academic-integrity|integritas]]. Kehadiran yang diskalakan adalah simulasi instruktur, dan biayanya melekat pada simulasi itu.

**"Menghasilkan banyak varian dari satu kuliah adalah personalisasi."** Jumlah varian adalah angka produksi, bukan angka instruksional. [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] menghasilkan 209 video dari 31 kuliah pascasarjana untuk kesehatan, keuangan, energi, dan audiens generik, yang menunjukkan kapasitas pipeline; apakah ada varian yang cocok dengan kebutuhan pembelajar tertentu adalah pertanyaan terpisah yang tidak dapat dijawab oleh jumlah generasi.

## Implikasi bagi Praktik

**Bagi instruktur**

- Tanyakan apakah bukti di balik produk video yang dipersonalisasi adalah preferensi atau pencapaian. Angka terkuat dalam literatur ini adalah peringkat dan rating, dan kedua jenis bukti itu cukup sering menunjuk arah berbeda sehingga perlu dipisah.
- Simpan komentar manusia untuk momen yang membutuhkan tempo dan selektivitas. Studi komentar menemukan komentar manusia lebih kuat pada ketepatan waktu dan kegunaan, jadi sisakan suara instruktur untuk bingkai di mana waktu membawa makna.
- Perlakukan avatar sebagai keputusan produksi dengan biaya (tenaga kerja, lingkungan, integritas) alih-alih kemenangan efisiensi netral.

**Bagi pengembang**

- Instrumentasikan pemahaman, bukan hanya penontonan selesai dan kepuasan. Jika Anda merilis sepuluh varian, laporkan mana yang meningkatkan pemahaman tanpa bantuan.
- Cocokkan *struktur* komentar dengan tolok ukur instruktur dalam evaluasi Anda, bukan hanya relevansi semantik atau kepadatan — kesenjangan keragaman adalah titik di mana komentar yang dihasilkan terlihat jelas gagal.
- Tampilkan status generatif avatar dan varian yang dipersonalisasi; menyajikan kehadiran sintetis sebagai kehadiran instruktur adalah pertanyaan integritas sebelum menjadi pertanyaan desain.

**Bagi peneliti**

- Laporkan ukuran preferensi dan hasil secara bersamaan, dan nyatakan terus terang ketika sebuah studi hanya memiliki yang pertama.
- Laporkan keselarasan temporal secara eksplisit, mengingat bahwa ketidakselarasan antara konten video dan [[cognitive-psychology|pemrosesan kognitif]] muncul dalam data neural.

## Konsep terkait

- [[online-teaching-and-learning]] — video sebagai medium inti pengajaran daring dan hibrida
- [[generative-ai]] — mesin video yang dihasilkan AI dan dipersonalisasi
- [[personalized-learning]] — personalisasi sebagai pendorong daya tarik video AI
- [[adaptive-learning]] — pembuatan dan tempo video adaptif
- [[multimodal]] — video yang menggabungkan modalitas visual, audio, dan tekstual
- [[learning-analytics]] — analitik atas keterlibatan dan atensi video
- [[student-engagement]] — keterlibatan yang ingin ditingkatkan personalisasi video
- [[pedagogical-agent]] — avatar/pemapar AI sebagai agen pedagogis virtual
- [[llm]] — model bahasa besar yang mendasari naskah dan pembuatan video
- [[trust]] — kepercayaan pembelajar pada pemapar dan konten AI

## Artikel terkait
- [[bespoke-industry-personalized-lecture-videos-2026]] — Bespoke: menghasilkan video kuliah yang dipersonalisasi untuk industri dengan kualitas MOOC dalam skala besar (Puech et al. 2026)
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — Komentar dalam video yang dihasilkan ChatGPT: waktu berbasis entropi, kesenjangan kualitas vs. komentar manusia (Wang, Du & Jin 2026)
- [[personalized-ai-generated-videos-preference-2026]] — Siswa lebih menyukai video AI yang dipersonalisasi daripada video yang direkam manusia tanpa personalisasi (Tomlinson et al. 2026)
- [[ai-generated-instructional-videos-computing-ed]] — Persepsi/preferensi siswa atas video instruksional yang dihasilkan AI dalam pendidikan komputasi
- [[ai-video-dual-gatekeeping-2026]] — Dual gatekeeping untuk pembuatan video AI yang berlandaskan pedagogis
- [[courseblueprint-adaptive-video-generation]] — CourseBlueprint: pembuatan video pedagogis adaptif
- [[engagement-assessment-video]] — Asesmen keterlibatan dalam pembelajaran video
- [[savvy-student-attention-video-learning]] — Visualisasi atensi siswa untuk pembelajaran berbasis video
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Bagaimana identitas avatar membentuk kepercayaan epistemik dalam pembelajaran yang dimediasi AI
- [[bilingual-llm-lecture-companion-srl-2026]] — Pendamping kuliah LLM bilingual untuk pembelajaran yang diatur sendiri
- [[adhd-video-segmentation-computing-education]] — Segmentasi video temporal untuk perbedaan individual
- [[ai-psychotherapy-training-avatars]] — Avatar AI dalam pelatihan psikoterapi
- [[gemini-lualatex-physics-video-transcription-2026]] — Mentranskripsikan video kuliah fisika menjadi teks yang aksesibel
- [[pivot-generative-video-tutors-stem-2026]] — Dari Pembuatan Konten ke Dukungan Pembelajaran: Tutor Video Generatif Terpandu Pedagogi untuk Pembelajaran STEM
- [[lian-guideslide-narrated-slides-visual-guidance-2026]] — Lihat ke Sana! Panduan Visual Dinamis untuk Slide Bernarasi AI
