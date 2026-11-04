---
title: "Pemodelan Pembelajar dan Pengajaran Adaptif"
created: "2026-08-09T07:47:05-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/student-modeling"
source_updated: "2026-10-26T10:50:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pemodelan pembelajar dan pengajaran adaptif** — payung bagi bagaimana AI merepresentasikan siswa (apa yang mereka ketahui, rasakan, dan butuhkan) dan bagaimana ia menggunakan representasi itu untuk mengadaptasi [[teacher-role|pengajaran]]. Keluarga konsep ini membentang dari lapisan *pemodelan* — **pemodelan siswa**, [[knowledge-tracing]], [[cognitive-diagnosis]], dan [[simulating-students|simulasi siswa]] — hingga *sistem adaptif* yang mengonsumsi model tersebut — [[intelligent-tutoring]], [[adaptive-learning]], dan [[personalized-learning]]. Pertanyaan bersamanya: *bagaimana sebuah sistem mengetahui apa yang diketahui seorang siswa, dan apa yang seharusnya diajarkannya berikutnya?*

## Pertanyaan yang Perlu Dipertimbangkan

- Pertanyaan payung yang diajukan halaman ini adalah: bagaimana sebuah sistem mengetahui apa yang diketahui seorang siswa, dan apa yang seharusnya diajarkannya berikutnya? Sebelum Anda membaca lebih jauh, bagaimana Anda bahkan akan mulai merepresentasikan 'apa yang diketahui seorang siswa' di dalam mesin?
- Pemodelan pembelajar mencakup pelacakan pengetahuan (melacak pengetahuan sepanjang waktu), diagnosis kognitif (memetakan keterampilan yang telah dikuasai), dan simulasi siswa (siswa sintetis). Menurut Anda masing-masing pendekatan unggul dalam hal apa — dan apa yang berisiko salah dilakukan masing-masingnya?
- Setiap AI adaptif bergantung pada suatu model tentang siswa. Jika sebuah model hanya sebaik bukti yang memberi masukannya, bukti apa yang menurut Anda benar-benar dimiliki sistem AI tentang seorang siswa, dan hal penting apa tentang mereka yang tetap tidak terlihat?
- Sebuah model mungkin menangkap apa yang benar dan salah dilakukan seorang siswa tetapi tidak mengapa, atau tidak bagaimana perasaan mereka. Bagaimana sebuah model pembelajar dapat menyesatkan sistem adaptif dengan cara yang merugikan alih-alih membantu siswa?
- Jika Anda merancang tutor adaptif, apa yang ingin Anda sertakan dalam modelnya tentang Anda — dan apa yang ingin Anda larang secara eksplisit untuk diasumsikannya?

## Pendahuluan

Pemodelan pembelajar adalah representasi komputasional atas siswa; pengajaran adaptif adalah apa yang dilakukan sistem dengan representasi itu. Setiap AI adaptif dalam pendidikan bergantung pada suatu model tentang siswa — bahkan yang ringan — dan setiap model pembelajar ada untuk menginformasikan suatu keputusan instruksional. Halaman ini adalah payung bagi alur itu: metode pemodelan, sistem yang bertindak atas model, dan bagaimana keduanya berhubungan.

## Lapisan pemodelan

Konsep-konsep ini menjawab "apa yang diketahui, rasakan, dan butuhkan siswa ini?" — sisi representasi dari keluarga ini.

- **pemodelan siswa** — praktik luas merepresentasikan karakteristik siswa (pengetahuan, keterampilan, kondisi [[affective-computing|afektif]], [[student-engagement|keterlibatan]], preferensi) dalam bentuk komputasional. Ia adalah istilah payung di dalam lapisan ini, yang mencakup semua cara merepresentasikan seorang siswa.
- **[[knowledge-tracing]]** — praktik khusus memodelkan pengetahuan kognitif *sepanjang waktu* dengan melacak kinerja pada latihan dan memprediksi penguasaan di masa depan. Ia memformalkan dinamika temporal pembelajaran — kapan pengetahuan diperoleh, kapan meluruh, dan bagaimana konsep saling berhubungan.
- **[[cognitive-diagnosis]]** — [[assessment]] berbutir halus atas keterampilan atau komponen pengetahuan spesifik mana yang telah dikuasai seorang siswa, yang menghasilkan profil penguasaan yang mendukung remediasi yang tertarget.
- **[[simulating-students|simulasi siswa]]** — menghasilkan siswa *sintetis* sesuai permintaan, alih-alih merepresentasikan siswa nyata, sehingga [[pedagogy]] dan sistem AI dapat diuji atau dilatih secara offline.
- **Formalisme kausal untuk model pembelajar.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] menggantikan jaringan Bayesian gerbang-berisik dengan model kausal struktural yang diperoleh dari pakar, menjadikan petunjuk sebagai variabel endogen eksplisit sehingga model dapat menanyakan apa yang akan dijawab seorang siswa tanpa bantuan yang ia gunakan — sedikit kurang prediktif, tetapi mampu melakukan kontrafaktual yang tidak dapat diungkapkan model asosiatif.

Studi [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] menunjukkan bahwa representasi yang setia tidak memerlukan keluarga model paling kompleks: model siswa berbentuk pohon keputusan yang ringan dan secara intrinsik dapat ditafsirkan — dibangun dari fitur interaksi-konten mata kuliah alih-alih telemetri kaya — memprediksi kemajuan tingkat modul dalam mata kuliah [[cs-education|pemrograman]] daring berskala besar (akurasi 85–91%) dan memisahkan profil [[student-engagement|keterlibatan]] siswa berisiko yang tidak terlibat, yang tidak terlibat tetapi berhasil, dan yang berkinerja tinggi yang terlibat, sehingga mendukung peringatan dini [[learning-analytics]] dalam skala besar.

Model pembelajar prediktif dapat bersandar pada struktur pendaftaran alih-alih data jejak: TRACE mengodekan setiap semester sebagai keranjang mata kuliah tak berurutan dan memprediksi kumpulan mata kuliah serta nilainya secara bersamaan, memangkas galat prediksi nilai menjadi 0.1339 MAE — 46.4% di bawah model yang hanya menggunakan nilai — di seluruh 5,326 siswa dan sepuluh tahun ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Model siswa juga dapat dibangun murni dari jejak perilaku dan tetap mendukung adaptasi. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]] menurunkan tiga profil keterlibatan — Observation, Construction, dan Exploration — dari aliran klik 315 pembelajar daring yang membangun 822 model ekologis di VERA, tanpa data demografis atau kontekstual apa pun, dan menunjukkan bahwa profil-profil ini memprediksi kualitas model (Exploration menghasilkan model paling kompleks dan beragam, sementara Observation didominasi model salinan alih-alih model orisinal). Karakterisasi tingkat keterlibatan semacam ini adalah model siswa berbutir kasar yang dapat dikonsumsi lapisan [[adaptive-learning|pengajaran adaptif]] untuk menargetkan umpan balik.

Pemodelan siswa afektif adalah dimensi lebih lanjut: sebuah tutor matematika menyimpulkan emosi dari teks percakapan dan ekspresi wajah serta memetakan keadaan teragregasi ke strategi tutoring, tetapi fusi multimodalnya hanya mencapai akurasi 60% terhadap anotasi partisipan sendiri, menjadikan pembacaan afek sebagai tautan terlemah alur tersebut ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]] menemukan bahwa sinyal penundaan-awal yang terekam selama latihan matematika memprediksi hasil bahasa Inggris, dengan penunda kronis (di atas 13 menit) menunjukkan perolehan lebih rendah (ELA β = -.11 SD) bahkan setelah mengendalikan [[prior-knowledge|pengetahuan awal]] dan waktu-dalam-tugas — sehingga model siswa berbasis perilaku dapat berpindah antar mata pelajaran tanpa pelatihan ulang per mata kuliah, meskipun titik potongnya harus diturunkan ulang.

## Lapisan pengajaran adaptif

Konsep-konsep ini menjawab "apa yang seharusnya diajarkan berikutnya?" — sisi aplikasi yang mengonsumsi model pembelajar.

- **[[intelligent-tutoring]]** — sistem yang menggunakan model siswa dan estimasi penguasaan untuk memilih soal dan memberikan bimbingan tingkat langkah, aplikasi klasik dari pemodelan pembelajar.
- **[[adaptive-learning]]** — sistem yang menyesuaikan konten, kecepatan, atau tingkat kesulitan sebagai respons terhadap model pembelajar.
- **[[personalized-learning]]** — penyesuaian yang lebih luas atas pengajaran, konten, dan jalur belajar terhadap karakteristik dan preferensi siswa secara individual.

## Bagaimana anggotanya berhubungan

Konsep-konsep ini membentuk alur, bukan pesaing: **pemodelan siswa** adalah representasi payung; [[knowledge-tracing]] dan [[cognitive-diagnosis]] adalah metode pemodelan spesifik yang mengisinya; [[simulating-students|simulasi]] *menghasilkan* siswa alih-alih merepresentasikan yang nyata; dan [[intelligent-tutoring]], [[adaptive-learning]], serta [[personalized-learning]] adalah sistem yang mengonsumsi model-model ini untuk mengadaptasi pengajaran.

**Pemodelan siswa vs. simulasi siswa** adalah pembedaan kunci yang harus dijaga tetap lurus. Pemodelan siswa adalah tentang **merepresentasikan seorang siswa nyata** — membangun model *dari* data siswa aktual sehingga sistem adaptif dapat bertindak atas individu itu. Simulasi siswa, sebaliknya, **menghasilkan siswa sintetis** sesuai permintaan untuk menggantikan siswa nyata sehingga pedagogi dan AI dapat dievaluasi atau dilatih secara offline. Keduanya berhubungan erat alih-alih dapat dipertukarkan: siswa simulasi biasanya *menanamkan* model siswa (keadaan epistemik, kumpulan [[misconceptions|miskonsepsi]], atau profil keterlibatan) dan menarik pada konstruk yang sama yang diformalkan [[knowledge-tracing]] dan [[cognitive-diagnosis]]. Tujuannya berbeda — pemodelan siswa melayani adaptasi langsung dengan menginformasikan keputusan tentang orang nyata, sementara [[simulation]] memfabrikasi siswa untuk menguji sistem (dan semakin sering untuk mengaudit AI, misalnya [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) alih-alih untuk bertindak atas individu nyata mana pun.

**Pelacakan pengetahuan vs. pemodelan siswa** adalah kebingungan umum lainnya. Pelacakan pengetahuan secara spesifik memodelkan pengetahuan kognitif sepanjang waktu; pemodelan siswa adalah praktik yang lebih luas yang mencakup semua aspek seorang siswa (kondisi afektif, keterlibatan, preferensi). Pelacakan pengetahuan adalah *salah satu jenis* pemodelan siswa yang berfokus pada dimensi kognitif-temporal. Konstruk pelacakan pengetahuan juga menginformasikan [[simulating-students|siswa simulasi]] — keadaan kognitif pembelajar simulasi sering diformalkan dengan dinamika penguasaan/peluruhan yang sama yang dimodelkan pelacakan pengetahuan, sehingga simulasi adalah cara untuk *menghasilkan* keadaan pengetahuan yang biasanya *disimpulkan* metode pelacakan dari data respons nyata.

**Menambatkan pelacakan pada [[curriculum-design|kurikulum]] memperkuat model.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] menunjukkan bahwa model pembelajar memperoleh kesetiaan ketika pelacakan diikat pada struktur kurikulum eksplisit alih-alih dipelajari murni dari data: Outcome-Based Knowledge Tracing (OKT) mereka memperlakukan capaian mata kuliah dalam Outcome-Based Education sebagai konsep pengetahuan yang dilacak, memasok hubungan antarkonsep melalui "affinity mapping" OBE yang divalidasi pakar antara capaian mata kuliah dan capaian program (alternatif eksplisit bagi attention implisit atau graph message passing), dan menggunakan modul bertambah memori untuk memodelkan bagaimana ketercapaian satu capaian berdampak pada yang lain. Pada data program teknik yang hidup, ia mengalahkan baseline DKT, DKVMN, EKT, dan SimpleKT (89.81% AUC), yang menggambarkan bahwa lapisan pemodelan dapat memanfaatkan struktur kurikulum itu sendiri untuk merepresentasikan siswa dengan lebih setia.

**Tutoring cerdas vs. pembelajaran adaptif/personal** berada di sisi aplikasi: tutoring cerdas adalah sistem pemilih soal dan pembimbing langkah; pembelajaran adaptif menyetel konten dan kecepatan; pembelajaran personal adalah penyesuaian terluas atas keseluruhan pengalaman belajar. Ketiganya adalah "konsumen" lapisan pemodelan.

## Tantangan validitas bersama

Di seluruh keluarga ini, tantangan validitas yang menentukan adalah sama: representasi siswa harus **secara setia mencerminkan keadaan siswa yang sebenarnya** alih-alih asumsi default sistem. Bagi **pemodelan siswa** dan [[knowledge-tracing]], ini berarti model harus benar-benar menangkap apa yang diketahui seorang siswa ([[ai-ed-evaluation|evaluasi]] dan [[assessment-validity|validitas pengukuran]]). Bagi [[simulating-students|simulasi]], ini berarti siswa sintetis harus menunjukkan ketidaksempurnaan yang realistis alih-alih kompetensi penuh model atau kesepakatan yang [[ai-sycophancy|menjilat]]. Sistem adaptif yang mengonsumsi model cacat mewarisi dan menyebarkan galat itu.


Model yang menyimpulkan keadaan siswa dari permainan mencapai AUC 0.848–0.913, namun hanya dua dari 55 studi yang ditinjau mengauditnya untuk bias demografis dan hanya satu yang menelaah hasil diferensial menurut kemampuan siswa ([[ai-game-based-learning-systematic-review-2026|Kaşarcı dan Yurt (2026)]]).

Sebagian sinyal yang dimaksudkan mungkin tidak dapat dipulihkan dari dialog sama sekali: pilot kerangka Learning Context memulihkan miskonsepsi pada 91.4% dan kecemasan pada 100% tetapi keterbukaan hati pada hanya 68.6% dan kemahiran bahasa pada 60%, sehingga model yang sadar konteks sebaiknya menangkap sifat yang lambat muncul alih-alih menunggu dialog menyingkapnya ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]] menyingkap sirkularitas dalam cara siswa sintetis semacam itu divalidasi: agen EduMirror mereka menyelenggarakan kuesioner psikometrik secara post-hoc dan membaca kesepakatan dengan representasi nilai internal agen sebagai validitas psikologis, tetapi karena Surveyor mengukur dimensi yang sudah terkodekan dalam sistem nilai itu, pemeriksaannya adalah pemeriksaan konsistensi alih-alih validasi independen.

**Kebenaran tidak selalu merupakan sinyal yang setia.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, dan Stamper (2026)]] menunjukkan bahwa model pembelajar yang menyimpulkan penguasaan dari tindakan yang benar dapat salah merepresentasikan keadaan siswa yang sebenarnya: siswa yang menunjukkan *overgeneralisasi menipu* tampak menguasai namun menghilangkan satu batasan penerapan yang kritis, sehingga sistem adaptif dapat menghentikan latihan terlalu dini. Model pembelajar sebaiknya menilai pemahaman bersyarat — termasuk apakah siswa tahu kapan harus menahan suatu tindakan — bukan hanya kebenaran tindakan.

Miskonsepsi tersembunyi menunjukkan kegagalan yang sama dari sisi lain: [[correct-answer-trap-misconceptions|Imran dan Bulathwela (2026)]] menemukan pengklasifikasi yang disetel halus menangkap 57.4% jawaban benar yang dicapai melalui penalaran cacat, dan pada prevalensi 1.6% bahkan model penalaran berakurasi 83.6% meninggalkan 8 alarm palsu per deteksi — sehingga sinyal penguasaan berbasis kebenaran tidak lengkap sekaligus mahal untuk diperbaiki.

**Bagaimana sebuah model divalidasi itu sendiri adalah pertanyaan validitas.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, dan Carvalho (2025)]] menunjukkan bahwa model pembelajar populer (BKT, BKT-with-Forgetting, AFM) tampak menangkap pembelajaran manusia hanya ketika dicocokkan secara retrospektif pada kumpulan data multi-sesi penuh; di bawah validasi silang berbasis waktu (walk-forward) — memprediksi sesi mendatang dari sesi sebelumnya, sebagaimana model semacam itu sebenarnya diterapkan — model tersebut melebih-lebihkan kinerja, melewatkan [[retrieval-spacing-interleaving|efek spasi]], dan salah mengurutkan kondisi latihan. Karena model yang ditambah peluruhan dan yang tanpa peluruhan berkinerja kira-kira setara di seluruh sesi, para penulis menyimpulkan bahwa peluruhan sering kali diserap ke dalam parameter pembelajar alih-alih benar-benar direpresentasikan. Pelajarannya bagi keluarga ini adalah bahwa representasi siswa yang setia harus divalidasi sebagaimana ia digunakan — dan bahwa mencampuradukkan kinerja sesaat dengan retensi jangka panjang menghasilkan model yang tampak akurat namun salah merepresentasikan siswa.
[[learning-style-inference-bias-student-ai-dialogues-2026|Zamanifard, Goudarzi dan Robb (2026)]] menunjukkan kegagalan yang sama dari sisi pengklasifikasi: menyimpulkan dimensi gaya belajar dari dialog pemecahan masalah 153 mahasiswa tampak sedang pada akurasi hingga recall per kelas menyingkap prediksi label dominan, dengan siswa Intuitive dan Global secara sistematis kurang teridentifikasi dan contoh few-shot kadang memperkuat bias kelas mayoritas.

## Pemodelan era LLM

Kemajuan terbaru menggunakan [[llm|LLM]] untuk pemodelan yang lebih kaya. [[xie-hillm-cd-2026|Kerangka HiLLM-CD]] merepresentasikan siswa sebagai pohon kemahiran; [[multimodal-knowledge-graph-educational-reasoning|pendekatan multimodal]] membangun representasi pengetahuan berbasis bukti dari beragam sumber data; [[inside-llm-student-simulator-reasoning-2026|LLM kini menyimulasikan siswa dengan penalaran]]. LLM memungkinkan konstruksi model otomatis dari teks pendidikan dan [[simulating-students|simulasi siswa]] berkualitas lebih tinggi, mengurangi ketergantungan pada anotasi pakar — sekaligus mempertajam kekhawatiran kesetiaan di atas. Sinyal model pembelajar juga *mendasari* penalaran LLM: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]] menemukan bahwa memberi GPT-4 estimasi keterampilan [[knowledge-tracing]] Bayesian milik seorang siswa bersama struktur antarmuka tutor sangat meningkatkan diagnosis galatnya (identifikasi galat logis naik dari 40% menjadi 81% pada pemfaktoran; ~87.8% secara keseluruhan), sementara soal bertahap dan respons yang memuat beberapa galat tetap menjadi kasus terlemah — bukti bahwa menggandengkan model pembelajar formal ke LLM memperkuat, tetapi tidak menjamin, inferensi yang sehat tentang siswa nyata. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] menunjukkan bagaimana bentuk persisten dari gandengan itu: penguasaan dan miskonsepsi hasil penambangan disimpan per (pembelajar, mata pelajaran) alih-alih sebagai log per sesi, sehingga bukti terakumulasi antar sesi, dan memorinya ditulis oleh fungsi observasi yang dinilai LLM sambil tetap dapat diperiksa oleh pembelajar melalui bilah penguasaan dan label yang menamai apa yang hendak diperiksa oleh setiap soal yang dihasilkan. Kontrolnya membuat langkah penulisan menjadi eksplisit — dengan memori dibaca tetapi tidak lagi diperbarui, porsi butir yang diarahkan pada keterampilan yang benar-benar lemah turun dari 0.72 menjadi 0.57 — dan ia menjaga kualifikasi halaman ini tetap utuh: penguasaan yang tersimpan adalah keyakinan agen tentang pembelajar, bukan pengukuran pengetahuannya.

Bahasa dapat menggantikan embedding ID sebagai representasi: PLCD membangun skema konsep turunan LLM dan graf proses latihan sebagai prior, mencapai akurasi 83.51% pada XES3G5M, dengan perolehan terbesar pada cold start — 4.60 poin ACC di atas KCD untuk konsep baru dan 4.00 untuk latihan baru — tempat model berbasis ID tidak memiliki riwayat ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).


Kualitas simulator terbagi menjadi dua sumbu: alur pool-then-specialize yang melatih pola perilaku bersama sebelum adaptor per siswa mencapai kesetiaan perilaku 0.51 dan responsivitas bimbingan 0.91 dalam catur, berbanding 0.23 dan 0.72 untuk baseline role-play terdepan, yang menunjukkan bahwa simulator harus mencocokkan siswa sekaligus dapat dikendalikan ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Skor risiko dapat akurat namun tidak didukung: [[at-risk-students-ml-prediction|Gheisari dan Salarian (2026)]] mencapai akurasi 99% dalam memprediksi pengunduran diri dari catatan pendaftaran dan kinerja, tetapi pada 1,027 catatan bersih satu institusi tanpa validasi eksternal, tanpa intervensi yang diuji, dan dengan audit keadilan yang disebut sebagai kerja masa depan — skornya mendukung triase, bukan putusan tentang seorang siswa.


Model pembelajar yang hanya memprediksi risiko tidak cukup untuk dukungan keputusan: menggandengkan model berisiko terkalibrasi dengan recourse pemrograman bilangan bulat atas tindakan diskret — divalidasi terhadap kendala waktu, anggaran, ketakberubahan, dan ketersediaan — menghasilkan rencana intervensi yang ringkas di tempat optimasi saja menerima rencana yang tidak dapat dilaksanakan ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Estimator kotak hitam juga dapat disuling menjadi model kecil yang menjelaskan dirinya sendiri: alur dua tahap mengubah estimator terpasang dan interpretasi post-hoc-nya menjadi "mentee" berparameter 2B yang mengembalikan estimasi bersama narasi, diaudit untuk kesetiaan alih-alih kelancaran ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Koneksi ke konsep lain

Pemodelan pembelajar dan pengajaran adaptif mengalir ke [[learning-analytics]] ([[visualization|dasbor]] dan intervensi), [[formative-assessment]] (penilaian yang digerakkan analitik), dan [[feedback]] (apa yang dikatakan sistem kepada pembelajar). Ia terhubung ke [[ai-education]] sebagai untaian inti AI untuk pendidikan.

## Miskonsepsi Umum

- **"Model yang setia memerlukan metode paling kompleks."** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries dan Koprinska (2025)]] menggambarkan bahwa **representasi yang setia tidak memerlukan** pendekatan **paling kompleks**. Kompleksitas bukan proksi bagi kesetiaan, dan model yang lebih sederhana yang menangkap struktur relevan dapat menjadi instrumen yang lebih baik.
- **"Model pembelajar memerlukan data jejak."** Model pembelajar prediktif dapat bersandar pada **struktur pendaftaran** alih-alih data jejak: TRACE mengodekan setiap semester sebagai **keranjang mata kuliah tak berurutan** dan memprediksi dari itu. Sinyal prediktifnya dapat hidup dalam catatan administratif institusi.
- **"Kondisi afektif memerlukan penginderaan fisiologis."** Sebuah tutor matematika **menyimpulkan emosi dari teks percakapan dan ekspresi wajah** dan memetakan keadaan teragregasi ke keputusan tutoring. Sinyal afeknya dapat dipulihkan dari apa yang sudah dihasilkan pembelajar.

## Konsep terkait

- [[learners]] — Pembelajar: payung bagi konsep-konsep sisi pembelajar
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — model di balik prediksi risiko dan penargetan dukungan

## Artikel terkait
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Overgeneralisasi menipu: penguasaan adaptif dapat menghentikan latihan sebelum pembelajar tahu kapan harus menahan tindakan (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Pemodelan kausal intervensi dukungan untuk penilaian kompetensi siswa
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: apa yang sebenarnya kita ketahui (brief Stanford SCALE/NSSA)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — Tutor LLM terlalu sering menolak alternatif yang valid, terlalu sering memvalidasi yang salah (Yasir et al. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — Dari prediksi risiko siswa ke SC2R: recourse kontrafaktual
- [[graph-its-adaptive-algorithms-2026]] — Tutoring cerdas berbasis graf untuk domain dinamis (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Menyuling LM yang menjelaskan dirinya sendiri untuk analitik pembelajaran
- [[studentsim-llm-student-simulators]] — StudentSim: melatih simulator siswa berbasis LLM
- [[predicting-attrition-competitive-programming]] — Memprediksi atrisi siswa dalam pemrograman kompetitif
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Pelacakan pengetahuan berbasis capaian dengan affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Melampaui embedding ID: pemodelan bahasa berbasis proses untuk diagnosis kognitif
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — keadaan pembelajar yang ringkas plus pelacak terkalibrasi sebagai lingkungan pemberi rekomendasi
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: tutor agentik yang mempelajari pembelajarnya dalam lingkar belajar bersama manusia-AI
- [[ai-game-based-learning-systematic-review-2026]] — Penilaian stealth mencapai AUC 0.848–0.913, tetapi audit bias hampir tidak ada di seluruh 55 studi
- [[learning-style-inference-bias-student-ai-dialogues-2026]] — Inferensi gaya belajar berbasis dialog gagal pada metrik berimbang (Zamanifard, Goudarzi & Robb 2026)
