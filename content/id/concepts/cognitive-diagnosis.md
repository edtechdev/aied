---
title: "Diagnosis Kognitif"
created: "2026-08-12T21:20:35-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/cognitive-diagnosis"
source_updated: "2026-10-27T10:05:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Diagnosis kognitif** — inferensi keadaan pengetahuan laten seorang siswa — konsep, keterampilan, dan miskonsepsi spesifik yang dimiliki atau tidak dimilikinya — dari respons atau perilakunya. Ini adalah padanan sisi penilaian dari [[knowledge-tracing]], yang berfokus pada pencirian *apa* yang diketahui siswa dan bukan hanya memprediksi kinerjanya berikutnya.

## Pertanyaan untuk Dipertimbangkan

- Diagnosis kognitif menginferensi keadaan pengetahuan laten siswa — konsep, keterampilan, dan miskonsepsi spesifik yang dimiliki atau tidak dimilikinya — dari responsnya, bukan hanya memprediksi skornya berikutnya. Sebelum membaca, apa perbedaan yang Anda perkirakan antara 'memprediksi nilai siswa' dan 'mendiagnosis apa yang sebenarnya tidak dipahaminya'?
- Gagasan kuncinya adalah 'perangkap jawaban benar' — ketika jawaban yang benar menyembunyikan penalaran yang cacat. Pernahkah Anda yakin seorang siswa memahami sesuatu karena jawabannya benar, lalu menemukan miskonsepsi di baliknya? Bagaimana diagnosis dapat mengungkap hal itu ketika skor tidak bisa?
- Halaman ini membedakan diagnosis kognitif (potret statis dan berbutir halus tentang apa yang saat ini dipegang seorang siswa) dari penelusuran pengetahuan (dinamika temporal penguasaan sepanjang waktu). Mengapa tutor cerdas memerlukan keduanya — untuk mengetahui apa yang salah dan untuk mengetahui apa yang harus diajarkan berikutnya?
- Salah satu prinsip desain di sini adalah memisahkan diagnosis dari umpan balik: tutor LLM mengonfirmasi langkah yang benar tetapi terlalu sering menolak penalaran yang valid dan terlalu sering memvalidasi kesalahan, dan diagnosis yang akurat tidak secara andal menghasilkan umpan balik yang dapat ditindaklanjuti. Mengapa mengetahui apa yang salah tetap bisa gagal menghasilkan langkah berikutnya yang membantu?
- Diagnosis era LLM meluas dari pilihan ganda ke pekerjaan terbuka, tulisan tangan, dan percakapan. Apa yang bisa salah jika AI mendiagnosis miskonsepsi dari pekerjaan yang tidak sepenuhnya dapat dipahaminya — dan bagaimana Anda memverifikasi bahwa diagnosis itu sendiri dapat dipercaya?

## Pendahuluan

Sementara penelusuran pengetahuan biasanya mengestimasi penguasaan skalar sepanjang waktu, diagnosis kognitif menghasilkan profil yang lebih berbutir: komponen pengetahuan mana yang telah dikuasai, mana yang rapuh, dan miskonsepsi mana yang hadir. Profil ini adalah substrat bagi [[personalized-learning]], [[intelligent-tutoring]], dan [[adaptive-learning]].

### Bagaimana diagnosis kognitif bekerja

- **Model diagnostik:** model psikometrik (sering di bawah [[item-response-theory]] dan [[educational-measurement]]) menginferensi keadaan keterampilan laten dari pola respons benar dan salah, kadang melalui model diagnosis kognitif yang memetakan butir ke beberapa komponen pengetahuan.
- **Pencarian model otomatis:** karena tidak ada satu model diagnostik yang cocok untuk setiap siswa, pendekatan berbasis [[machine-learning|AutoML]] (mis., pencarian arsitektur kognitif saraf yang dipersonalisasi) menghasilkan model diagnostik untuk profil siswa yang heterogen — mengintegrasikan data pendidikan [[multimodal|multimodal]] untuk memungkinkan analisis dinamis proses belajar dan diagnosis kognitif per siswa, alih-alih bersandar pada hasil [[summative-assessment|ujian]] statis dan indikator statistik sederhana ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Data respons:** diagnosis bersandar pada respons terhadap penilaian, petunjuk, [[help-seeking|pencarian bantuan]], dan waktu pengerjaan tugas — sinyal yang lebih kaya daripada skor mentah.
- **Diagnosis berbasis LLM:** pendekatan yang lebih baru menggunakan [[llm|model bahasa besar]] untuk mendiagnosis dari pekerjaan terbuka atau tulisan tangan, dan untuk mengidentifikasi [[misconceptions|miskonsepsi]] spesifik di balik suatu kesalahan (mis., "perangkap jawaban benar" ketika jawaban benar menyembunyikan penalaran cacat). Dua hasil tahun 2026 membatasi sejauh mana diagnosis itu menjangkau. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] menyupervisi penalaran diagnostik sebagai salah satu dari empat kemampuan dalam keluarga terbuka 4B/9B/27B, dan diagnosis keadaan pengetahuan tetap menjadi kemampuan terlemahnya yang terukur — 54.04% pada 27B dan 53.55% pada 9B, cukup dekat sehingga tiga kali lipat parameter tidak menutup celahnya — sementara [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] penilai LLM-nya berkorelasi dengan penguasaan sebenarnya pada r = 0.68 atas jawaban gabungan tetapi hanya r ≈ 0.15 dalam tingkat kemampuan terlemah (r ≈ 0.48 campuran, 0.41 kuat), sehingga keandalan diagnostik mengikuti tingkat kemampuan siswa sebanyak mengikuti modelnya.
- **Mendiagnosis kesalahan umum pada skala kohort, bukan satu respons sekaligus.** [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] membalik arah yang biasa: alih-alih mendiagnosis kesalahan satu siswa, sebuah [[llm]] mengusulkan transformasi perbaikan-bug kandidat yang memetakan formalisasi salah ke formalisasi benar di seluruh kumpulan data pendidikan, dan setiap kandidat divalidasi secara algoritmik sebelum dipertahankan. Pada 6,106 pasangan formalisasi logika proposisional yang benar dan salah, alur kerja ini menemukan 248 klaster transformasi yang menjelaskan 5,156 pasangan (84.44%), berbanding 4,370 (71.57%) untuk kesalahan pilihan tangan pada pendekatan terbaik sebelumnya, dan ia menemukan kembali kesalahan yang telah diidentifikasi pakar domain secara manual dalam literatur. Pengelompokan mengurutkan kandidat ke dalam kelompok transformasi tunggal, transformasi setara, dan hierarkis, dan graf korelasi yang dihasilkan dapat divisualisasikan bagi instruktur; pipeline yang sama beralih ke logika modal dan ekspresi reguler, di mana satu transformasi disjungsi-untuk-konjungsi saja mencakup 98.80% dari klaster 334 pasangannya. Ini adalah jalan menuju inventaris miskonsepsi yang dibutuhkan model diagnostik sebelum dapat dipasang.

- **Pemulihan solusi yang benar, bukan simulasi kesalahan, adalah hambatannya.** Model menyusun solusi pada 95.2% jejak distraktor dan menyimulasikan miskonsepsi Eedi tertentu pada akurasi 0.92 namun menyediakan jawaban yang benar tetap menaikkan kecocokan dengan distraktor manusia (0.52 → 0.56) — kegagalannya berada di hulu, pada pemulihan solusinya ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **Diagnosis tingkat capaian dalam kurikulum OBE:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] mendiagnosis capaian pembelajaran mana yang telah dicapai siswa dalam Outcome-Based Education dengan memperlakukan capaian sebagai konsep pengetahuan, menyediakan relasi konsep melalui pemetaan afinitas OBE tervalidasi pakar antara capaian mata kuliah dan capaian program (alternatif eksplisit terhadap atensi atau relasi graf yang dipelajari secara implisit), dan menggunakan modul yang diperkaya memori untuk mengestimasi bagaimana capaian satu hasil memengaruhi yang lain — mengungguli baseline DKT, DKVMN, EKT, dan SimpleKT (AUC 89.81%) pada data program teknik langsung.

- **Mendiagnosis dari instrumen yang dibangun untuk tujuan lain.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] menunjukkan model CD dapat mengekstrak informasi tingkat objektif dari butir yang tidak pernah ditulis untuk diagnosis. Dengan memetakan butir FCI, FMCE, dan EMCS ke 14 tujuan pembelajaran berbutir halus dalam mekanika pengantar dan memasang DINA pada 24,394 respons posttest dari 807 mata kuliah, mereka menemukan kecocokan baik untuk dua dari tiga instrumen (RMSEA² FCI = 0.033; EMCS = 0.022) dan akurasi klasifikasi pada atau di atas tolok ukur formatif berisiko rendah untuk 19 dari 22 kombinasi objektif–penilaian. Struktur atribut, bukan kualitas butir, yang menjadi kendala pengikatnya: pengodean pakar bertahan dari pengujian model hampir utuh — DINA hanya mengusulkan revisi 14% dari 754 pengodean butir–objektif dan pengode menerima 20 di antaranya (2.7%) — namun model tidak dapat memisahkan tiga tujuan energi yang *bersarang secara konseptual* (Energi Potensial 0.675, Konservasi Energi 0.705, Energi Kinetik 0.745) karena dua tujuan mana pun berbagi sekitar 70% butirnya (tumpang tindih Jaccard 0.67–0.73), melanggar asumsi independensi konjungtif DINA, sementara tujuan momentum pada instrumen yang sama mencapai 0.820–0.917. Atribut yang lebih halus juga lebih cocok, bukan lebih buruk: struktur 14 tujuan memperbaiki kecocokan model atas struktur empat keterampilan luas tim yang sama sebelumnya pada ketiga instrumen. Tumpang tindih butir, bukan kesalahan pengodean, yang membatasi seberapa halus penguasaan dapat dipisahkan.
- **DINA Bayesian untuk jalur belajar personal:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng dan Huang (2026)]] mengintegrasikan model DINA Bayesian (dilatih pada kumpulan data EdNet, N=5,000) dengan teori ruang pengetahuan dan algoritme jalur remediasi terpendek untuk menghasilkan jalur belajar personal, serta menguji secara empiris peran mediasi [[cognitive-offloading|beban kognitif]] melalui transisi keadaan Hidden Markov Model (divalidasi pada 120 siswa) — menjawab masalah konvergensi akibat ketersebaran pada model DINA tradisional maupun mekanisme psikologis yang belum teruji di balik efektivitas jalur personal.
- **Diagnosis berbasis bahasa menggantikan embedding ID.** [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] menggantikan pengenal diskret siswa, latihan, dan konsep dengan skema konsep yang dibangun LLM dan bukti berbasis proses, mengalibrasi keadaan posterior setiap siswa dari catatan respons. Pada tiga kumpulan data [[math-education|matematika]] dari [[online-teaching-and-learning|platform]] kerangka ini mencapai 83.51% ACC / 85.37% AUC pada XES3G5M dan 87.16% ACC pada MOOC, dengan keuntungan terpusat tepat di tempat model diagnosis kognitif klasik merosot: konsep baru (+4.60 ACC atas KCD) dan entri Q-matrix yang hilang (+4.52). Mengablasi bukti terstruktur meruntuhkan akurasi MOOC dari 87.16% menjadi 78.95%, sehingga peningkatan berasal dari struktur turunan bahasa, bukan dari skala model. ([[process-grounded-language-cognitive-diagnosis-2026]])
- **Tugas yang tertanam secara kultural dapat mendahului analisis AI.** [[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]] meminta 178 siswa SMP di Indonesia menyelesaikan tugas terbuka berkonteks budaya sebelum analisis respons AI; diagnosis AI tersebut sesuai dengan penilaian pakar (ICC = 0.81), sementara keterlibatan budaya berkaitan dengan kinerja matematis simbolik (β = 0.42) dan keterlibatan (β = 0.37).
- **Konfigurasi strategi dapat didiagnosis, bukan hanya keadaan pengetahuan.** Lima dimensi yang diestimasi dari 36,234 aksi permainan tata bahasa memprediksi keberhasilan berikutnya dengan AUC 0.826 meski mengecualikan jumlah kesalahan saat ini, dan bervariasi di dalam siswa (ICC = 0.14) alih-alih antarsiswa ([[configuration-aware-diagnostic-adaptive-scaffolding-2026|Geoffre et al. (2026)]]).

## Mengapa ini penting

Diagnosis yang akurat memungkinkan pengajaran menyasar celah yang sebenarnya alih-alih skor "kemampuan" global — memungkinkan [[automated-assessment]] yang menjelaskan *mengapa* siswa keliru dan sistem [[feedback|Feedback Loop]] yang meremediasi [[student-modeling|keadaan pengetahuan]] tertentu. Diagnosis yang buruk menghasilkan sebaliknya: pengajaran yang diarahkan pada konsep yang salah. Inilah sebabnya [[psychometrically-aware-ai]] menekankan validitas diagnostik di samping akurasi prediksi.

### Hubungan dengan penelusuran pengetahuan dan tutor cerdas

Diagnosis kognitif berada di jantung arsitektur [[intelligent-tutoring]] dan merupakan padanan sisi penilaian dari [[knowledge-tracing]]:

- **Diagnosis vs. penelusuran — pandangan temporal yang saling melengkapi.** [[knowledge-tracing|Penelusuran pengetahuan]] melacak *dinamika temporal* penguasaan — mengestimasi bagaimana keadaan pengetahuan skalar berkembang antarlatihan dan memprediksi respons berikutnya. Diagnosis kognitif menghasilkan *potret statis berbutir halus* tentang komponen pengetahuan, keterampilan, atau miskonsepsi mana yang saat ini dipegang siswa. Tutor memerlukan keduanya: penelusuran pengetahuan untuk mengurutkan apa yang diajarkan berikutnya, diagnosis kognitif untuk mengetahui *apa* yang sebenarnya salah. Model diagnostik berbasis [[item-response-theory|IRT]] dan [[educational-measurement|pengukuran]], serta model diagnosis kognitif yang memetakan butir ke beberapa komponen, mewujudkan sisi diagnostiknya.

- **Diagnosis era LLM.** [[llm|LLM]] memperluas diagnosis dari respons pilihan ganda ke pekerjaan terbuka, tulisan tangan, dan percakapan, mengidentifikasi [[misconceptions|miskonsepsi]] spesifik di balik suatu kesalahan (mis., "perangkap jawaban benar" ketika jawaban benar menyembunyikan penalaran cacat). [[xie-hillm-cd-2026|HiLLM-CD]] menggunakan LLM untuk konstruksi pohon konsep otomatis dan inferensi kecakapan hierarkis, menjembatani diagnosis dan penelusuran. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] mendorong ini lebih jauh dengan memfederasikan diagnosis lintas beberapa API LLM komersial dengan privasi diferensial ε-lokal, menunjukkan bahwa diagnosis yang akurat dan menjaga privasi mungkin dilakukan tanpa model mana pun melihat data siswa mentah.
- **Memisahkan diagnosis dari umpan balik adalah prinsip desain.** Tutor LLM secara andal mengonfirmasi langkah yang benar tetapi terlalu sering menolak penalaran valid dan terlalu sering memvalidasi kesalahan — dan diagnosis yang akurat tidak secara andal menghasilkan [[feedback]] yang dapat ditindaklanjuti. Desain ITS karena itu harus memisahkan komponen diagnostik dari komponen umpan balik/[[scaffolding]] ([[yasir-llm-tutoring-agents-2026]]).

## Koneksi

Diagnosis kognitif terhubung ke [[knowledge-tracing]], [[student-modeling]], [[educational-measurement]], dan [[assessment]]. Wawasannya menopang [[intelligent-tutoring]] dan [[adaptive-learning]], dan karya era LLM menghubungkannya dengan identifikasi miskonsepsi dalam [[intelligent-tutoring|AI Tutoring]].

## Miskonsepsi Umum

- **"Diagnosis adalah kemampuan yang sudah terpecahkan bagi model."** [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] menyupervisi penalaran diagnostik sebagai salah satu dari empat kemampuan dalam keluarga terbuka 4B/9B/27B, dan **diagnosis keadaan pengetahuan tetap yang terlemah** di antara keempatnya. Diagnosis adalah kemampuan yang menolak pelatihan yang menghasilkan kemampuan lainnya.
- **"Model dapat menyimulasikan kesalahan siswa, jadi mereka dapat mendiagnosisnya."** Hambatannya justru sebaliknya. Model menyusun solusi pada **95.2% jejak distraktor** dan menyimulasikan miskonsepsi Eedi tertentu pada **akurasi 0.92**, namun **memberikan solusi yang benar** — bukan menyimulasikan kesalahan — yang membatasi mereka. Menghasilkan jawaban salah yang masuk akal lebih mudah daripada mengenalinya.
- **"Diagnosis memerlukan katalog miskonsepsi yang dibangun manual."** Pada **6,106 pasangan** formalisasi logika proposisional yang benar dan salah, sebuah alur kerja menemukan **248 klaster transformasi yang menjelaskan 5,156 pasangan (84.44%)**, berbanding **4,370 (71.57%)** untuk kesalahan pilihan tangan dari kumpulan acuan. Penemuan menyamai atau melampaui kurasi pakar, dan ia beralih ke logika modal — jadi katalog hanyalah titik awal, bukan batas atas.
- **"Diagnosis hanya berguna jika menyebut miskonsepsi."** Mendiagnosis capaian pembelajaran mana yang telah dicapai siswa justru memperlakukan capaian sebagai konsep pengetahuan, dengan menyediakan relasi konsep melalui pemetaan afinitas tervalidasi pakar. Bagi program berbasis capaian, itu unit yang lebih dapat ditindaklanjuti, meskipun lebih kasar.

## Apa artinya bagi praktik

**Bagi instruktur**

- Perlakukan diagnosis sistem sebagai hipotesis yang perlu diperiksa, bukan putusan. Diagnosis keadaan pengetahuan adalah kemampuan terlemah dalam keluarga yang dilatih untuk itu.
- Tanyakan apakah diagnosis menyebut konstruk yang dapat Anda tindak lanjuti. Diagnosis tingkat capaian yang memetakan ke program Anda sering lebih berguna daripada label miskonsepsi yang berbutir halus.
- Jika subjek Anda memiliki aturan, perkirakan penemuan berbasis transformasi akan menemukan pola kesalahan yang tidak Anda antisipasi; 248 klaster yang ditemukan adalah bukti bahwa katalog terkurasi tidak lengkap.

**Bagi pengembang**

- Instrumentasikan kedua arah: mengenali jawaban salah dan menghasilkan jawaban yang benar. Angka pemulihan solusi 95.2% menunjukkan generasi adalah separuh yang mudah dan mode kegagalannya ada pada pengenalan.
- Utamakan penemuan alih-alih katalog statis bila struktur domain memungkinkan, dan laporkan cakupan terhadap kumpulan acuan agar perbandingannya terbaca.
- Jangan merilis skor diagnostik tanpa menyatakan konstruk apa yang diukurnya dan bagaimana ia divalidasi secara independen dari sinyal yang menghasilkannya.

## Konsep terkait

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## Artikel terkait

- [[llm-cognitive-diagnosis-handwritten-math]] — Tolok ukur LLM untuk Mendiagnosis Keterampilan Kognitif dari Matematika Tulisan Tangan
- [[correct-answer-trap-misconceptions]] — Perangkap Jawaban Benar
- [[llm-misconception-difficulty-easy-trap]] — Perangkap Mudah: Mengapa LLM Meremehkan Kesulitan yang Didorong Miskonsepsi
- [[llm-student-misconception-identification]] — Identifikasi miskonsepsi siswa oleh LLM
- [[student-math-competence-clustering]] — Pengelompokan untuk Memodelkan Kompetensi Matematika Siswa
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Kompilasi Agen Kognitif untuk Pemodelan Penyelesai Masalah Eksplisit
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: mendiagnosis dari siswa simulasi
- [[huang-interpretable-knowledge-tracing-2026]] — Penelusuran pengetahuan yang dapat diinterpretasi
- [[xie-hillm-cd-2026]] — HiLLM-CD: pohon konsep LLM + inferensi kecakapan hierarkis
- [[yasir-llm-tutoring-agents-2026]] — Memisahkan diagnosis dari umpan balik pada tutor LLM
- [[zhang-ct-ai-training-test-2026]] — Berpikir Komputasional dalam Tes Pelatihan AI (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnosis kognitif Bayesian untuk jalur belajar personal
- [[personalized-neural-cognitive-architecture-search-2026]] — Pencarian arsitektur kognitif saraf personal AutoML untuk profil siswa
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Penelusuran pengetahuan berbasis capaian dengan pemetaan afinitas
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnosis federasi multi-LLM heterogen yang menjaga privasi
- [[llm-common-modeling-mistakes-formalisms-2026]] — Penambangan kesalahan pemodelan umum dalam skala besar dengan transformasi perbaikan-bug yang dihasilkan LLM dan divalidasi secara algoritmik (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: diagnosis berbasis DINA atas 14 tujuan pembelajaran dari inventaris konsep fisika yang ada (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — Anotasi konsep pengetahuan LLM dan keadaan pengetahuan tingkat konsep yang terkalibrasi
- [[llm-distractor-generation-student-reasoning-2026]] — distraktor berbasis miskonsepsi sebagai tugas desain butir diagnostik
- [[misconception-acquisition-dynamics-llms-2026]] — di mana kesalahan masuk ke dalam solusi adalah hambatan diagnostik
- [[pivot-generative-video-tutors-stem-2026]] — Dari Generasi Konten ke Dukungan Belajar: Tutor Video Generatif Berpanduan Pedagogi untuk Pembelajaran STEM
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Tutor Agen yang Mempelajari Siswanya dalam Loop Ko-Pembelajaran Manusia-AI
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Model Fondasi Terbuka untuk Belajar dan Mengajar
- [[culturally-embedded-ai-diagnostic-assessment-2026]] — Memikirkan Ulang Penilaian Diagnostik melalui AI yang Tertanam Secara Kultural untuk Pembelajaran yang Bermakna
