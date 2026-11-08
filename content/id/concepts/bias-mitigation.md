---
connected_resources: [writing-rhetoric-studies-in-the-loop]
title: "Mitigasi Bias"
created: "2026-07-14T10:44:35-04:00"
type: concept
foundations: [ai-literacy, teacher-role]
technology: [generative-ai, llm]
ethics: [bias-mitigation, equity-in-ai-education, ethics]
audience: [learners, instructors]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/bias-mitigation"
source_updated: "2026-11-06T01:55:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Mitigasi bias dalam pendidikan AI** — identifikasi, pengukuran, dan pengurangan perilaku tidak adil yang berpola identitas pada [[intelligent-tutoring|tutor AI]], penilai, pemberi rekomendasi, dan sistem pendidikan. Bias dapat masuk pada setiap tahap pipeline AI — data pelatihan, perilaku model, prompt, penilaian, dan penerapan — dan bermanifestasi sebagai perlakuan berbeda terhadap pembelajar berdasarkan bahasa, gender, ras, budaya, atau karakteristik identitas lain. Mitigasi mencakup kurasi data, algoritma debiasing, [[prompt-engineering|desain prompt]], metode penilaian yang adil, [[explainable-ai|keterjelasan]], dan evaluasi. Ini adalah padanan teknis bagi [[equity-in-ai-education]] dan kekhawatiran inti [[ethics]] dalam pendidikan AI.

## Pertanyaan yang Perlu Dipertimbangkan

- Bias dapat masuk pada setiap tahap pipeline AI — data pelatihan, perilaku model, prompt, penilaian, dan penerapan. Sebelum membaca, di mana dalam rantai itu Anda menduga bias berada? Halaman ini menyarankan bias dapat muncul hampir di mana saja. Di mana satu tempat yang belum Anda pertimbangkan?
- [[research-methods-aied|Penelitian]] menunjukkan penilaian [[physics-education|fisika]] berbasis AI secara sistematis meremehkan siswa yang penjelasan tekstualnya berkualitas linguistik lebih rendah — AI menilai bahasanya, bukan pemahamannya. Mengapa sistem yang secara keseluruhan cukup sepakat dengan penilai manusia masih bisa secara konsisten menghukum penulis non-pribumi atau yang kurang fasih?
- Satu studi menemukan bahwa prompt yang berbias gender mendorong esai siswa menampilkan "kesenjangan agentik" yang lebih besar dan lebih banyak konten stereotip gender — bias berpindah dari alat ke karya pembelajar itu sendiri. Apa yang dikatakan hal ini tentang bias bukan sekadar sebagai skor yang tidak adil melainkan sebagai kekuatan yang dapat membentuk ulang apa yang dihasilkan siswa dan siapa yang mereka lihat sebagai diri mereka?
- Studi lain menunjukkan LLM menggeser umpan balik dengan cara yang selaras stereotip ketika dipersonalisasi dengan atribut siswa — bersandar pada pujian dan melunakkan kritik untuk siswa yang "ditandai" bahkan ketika esainya identik. Bagaimana umpan balik yang berbias secara "ramah" bisa lebih merugikan daripada skor yang jelas-jelas salah, karena lebih sulit dideteksi?
- Mitigasi mencakup kurasi data, algoritma debiasing, desain prompt netral, metode penilaian yang adil, keterjelasan, dan pengawasan manusia. Tuas mitigasi tunggal mana yang menurut Anda akan membuat perbedaan terbesar dalam sistem AI yang Anda andalkan, dan apa yang perlu Anda audit untuk mengetahui bahwa itu berhasil?
- Prompt netral sebagian besar menghindari penginduksian bahasa yang terdiferensiasi gender — menunjukkan desain prompt adalah mitigasi yang praktis. Tetapi jika bias dapat dimasukkan kembali melalui data, penilaian, atau penerapan, mengapa memperbaiki prompt saja merupakan jawaban yang tidak lengkap?

## Pendahuluan

Mitigasi bias penting karena [[ai-education|AI dalam pendidikan]] tidak netral: sistem yang dilatih pada data bahasa dan budaya dominan dapat secara sistematis merugikan pembelajar yang terpinggirkan, dari penilaian berbasis AI yang menghukum penulis non-pribumi hingga tutor [[llm|LLM]] yang menjawab secara berbeda untuk kelompok berbeda. Bias adalah kekhawatiran lintas-bidang yang muncul dalam [[automated-assessment|Penilaian Otomatis]], [[automated-essay-scoring]], [[knowledge-tracing]], sistem rekomendasi, dan tutor [[conversational-ai|AI percakapan]].

[[solyst-youth-systematic-evaluation-genai-2026|Solyst dkk. (2026)]] menunjukkan bahwa mitigasi bias dapat diajarkan, bukan hanya direkayasa: remaja yang diprompt untuk menginterogasi keluaran model teks-ke-gambar menghasilkan evaluasi representasi yang sistematis, dan permintaan mereka untuk gambar orang condong ke kulit putih sebelum intervensi.

Keadilan adalah dimensi yang paling sedikit diteliti dalam literatur penilaian AI versus manusia: dari dua belas studi yang ditinjau, sepuluh bungkam tentang bias demografis, linguistik, atau sosial, dan gender adalah satu-satunya dimensi yang diuji ([[xu-recentering-humans-ai-assisted-writing-scoring-2026|Xu, Lu dan Abdi, 2026]]).

## Sumber bias

Penelitian basis pengetahuan mendokumentasikan bias yang masuk di beberapa titik dalam pipeline:

- **Bias bahasa dan penilaian:** [[ai-scoring-language-bias-physics|penilaian fisika berbasis AI]] secara sistematis meremehkan pemahaman konseptual siswa yang penjelasan tekstualnya berkualitas linguistik lebih rendah — AI menilai bahasanya, bukan pemahamannya, sehingga menghukum penulis non-pribumi atau yang kurang fasih. Ini adalah kegagalan validitas dan keadilan yang langsung dalam [[automated-assessment|Penilaian Otomatis]].
- **Transfer bias gender dalam penulisan berbantuan LLM:** [[gender-bias-transfer-llm-writing|Kolaborasi yang Terkontaminasi]] menunjukkan bahwa ketika siswa menulis dengan prompt LLM yang berbias gender, esai mereka menampilkan kesenjangan agentik yang jauh lebih besar dan lebih banyak saran profesi stereotip gender (N=123); transfer bias bersifat asimetris, menekan agensi dalam esai yang menyasar perempuan. Studi verifikasi (N=1,600 esai LLM, R²=.399) menegaskan prompt berbias gender menginduksi bahasa yang terdiferensiasi gender.
- **Penolakan diferensial dan ketidakadilan epistemik:** [[paternalistic-filter-llm-history-education|Filter Paternalistik]] mengaudit empat LLM sebagai tutor sejarah (1,800 respons) dan menyingkap "filter paternalistik": model secara diferensial menolak, melunakkan, atau membingkai ulang konten sensitif untuk pembelajar yang berbeda — sebuah ketidakadilan epistemik dengan implikasi keadilan yang langsung.
- **Bias seleksi dalam [[learning-analytics|analitik pembelajaran]]:** [[temporal-smoothness-debiased-kt|Pelacakan pengetahuan yang didebias]] menangani bias seleksi yang timbul dari rekomendasi latihan yang tidak acak: pelatihan pada log teramati dengan risiko empiris standar menghasilkan estimasi penguasaan yang berbias yang memperbesar kesalahan dalam lingkar rekomendasi adaptif.
- **Bias data dan anotasi:** [[data-annotations-pedagogical-hints|anotasi data]] dan penelitian [[ground-truth-reliability-aied|keandalan data acuan]] mengkaji bagaimana label dan keandalan antar-penilai yang mendasari model AI membawa bias — berargumen menentang memperlakukan κ > 0.8 sebagai stempel persetujuan biner.
- **Deteksi identitas membawa bias budaya.** [[ji-de-identification-personally-identifiable-information-2025|Ji dkk. (2025)]] menguji deteksi PII tingkat nama lintas kelompok budaya dengan uji Mann-Whitney U dua sisi: baseline siap pakai mendeteksi nama Afrika pada recall 0.7647-0.9244 dengan kesenjangan signifikan terhadap kelompok lain, sementara GPT-4o-mini yang disetel halus berkisar 0.9748-0.9840 di keempat budaya tanpa perbedaan signifikan — biasnya ada pada detektor baseline, bukan pada model yang disetel.
- **Pengetahuan yang terpinggirkan:** [[genai-minoritized-knowledges-disability|AI generatif dan pengetahuan minoritas]] mendokumentasikan bagaimana data pelatihan dan perilaku model meminggirkan sistem pengetahuan non-dominan dan perspektif disabilitas.
- **Umpan balik [[ai-feedback-quality|otomatis]] yang selaras stereotip ([[pedagogy|Pedagogi]] yang Ditandai):** [[marked-pedagogies-linguistic-bias-writing-feedback|Tan dkk. (2026)]] menunjukkan empat LLM yang luas dipakai secara sistematis menggeser umpan balik menulis dengan cara yang selaras stereotip ketika umpan balik dipersonalisasi dengan atribut siswa — ras, etnis, penanda ELL, disabilitas belajar, capaian, atau motivasi. Dua bias mengikuti: bias umpan balik positif dan bias penahanan umpan balik — lebih banyak pujian, kritik yang kurang substantif, asumsi kemampuan terbatas — bagi siswa yang ditandai pada esai yang sebaliknya identik. Metrik konsentrasi "Marked Words" menawarkan metode konkret untuk mengaudit bias semacam itu dalam umpan balik otomatis.
- **Bias visual dalam alat teks-ke-gambar:** [[bias-representation-text-to-image-education-2026|Alon, Hadar Shoval, dan Levkovich (2026)]] [[meta-analysis-systematic-review|meninjau secara sistematis]] 31 studi telaah sejawat (2023–2025) tentang bias dan representasi dalam penggunaan pendidikan atas teks-ke-gambar yang dihasilkan AI. Dengan kerangka analitis enam bagian (gender; ras, etnis, dan SES; budaya dan agama; usia; tubuh dan (dis)abilitas; konten), mereka menemukan representasi yang berbias merata — gambar sering berpusat pada figur kulit putih, laki-laki, Barat, kurus, dan non-disabilitas, sementara keragaman terkait usia, tubuh, dan kemampuan sebagian besar terlewatkan. Sebagian besar studi mengandalkan audit gambar dan metode [[qualitative-research|kualitatif]], dengan sedikit rancangan eksperimental atau berbasis intervensi, menyingkap titik buta signifikan dalam cara penelitian pendidikan mengukur dan merespons bias visual.

- **[[ai-avatars-and-synthetic-instructors|Isyarat identitas avatar]] mereproduksi bias luring.** Pada dua eksperimen (N = 396), avatar kulit putih — dan, dalam konteks STEM, avatar laki-laki Asia — dinilai lebih kredibel dan kompeten sementara avatar perempuan kulit hitam yang lebih tua dihukum; tugas STEM dan prosedural memperkuat bias itu dan tugas reflektif serta interpersonal melemahkannya ([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis & Kyriakidou-Zacharoudiou (2026)]]).
- **Non-diskriminasi sebagai nilai etis inti.** [[agarwal-ethical-values-norms-aied-2026|Agarwal dkk. (2026)]], sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] atas 25 artikel, mengidentifikasi non-diskriminasi (definisi yang memakai bias/diskriminasi/keragaman) sebagai salah satu dari enam nilai etis utama bagi [[ai-education|AI dalam pendidikan]], bersama pemeliharaan data, pengawasan manusia, niat baik, keterjelasan, dan kesesuaian pendidikan. Tinjauan itu mencatat nilai-nilai tersebut terkait erat dan dapat berbenturan — misalnya non-diskriminasi versus pemeliharaan data — sehingga menghasilkan dilema etis, dan bahwa tidak ada norma tentang non-diskriminasi yang menyasar pengguna akhir secara langsung, membuat pembelajar sebagian besar pasif dalam literatur etika.

- **Bias alokasi dalam pembentukan tim berbantuan AI.** [[genai-social-bias-software-engineering-education-2026|Entezami dkk. (2026)]] menunjukkan bias masuk ke kelas tugas di luar penilaian dan umpan balik: tiga LLM yang menugaskan kelas rekayasa perangkat lunak berisi 28 mahasiswa ke empat tim merutekan laki-laki setidaknya 80% lebih jarang daripada perempuan ke Desain Antarmuka alih-alih Pengembangan Inti (GPT-5.2 OR < 0.01), dan kebangsaan menggeser penempatan secara independen dari prestasi. Memberikan keterampilan mengurangi tetapi tidak menghilangkannya - 99.2% penugasan berbasis keterampilan cocok dengan salah satu dari dua tim data acuan, namun gender tetap menentukan di antara opsi yang sama validnya (OR 2.53 GPT-4.1, 2.81 GPT-5.2, 1.43 DeepSeek) - dan pembuatan gambar paralel condong ke laki-laki dan berkulit terang untuk gambar satu orang (gender V = 0.64 dan 0.65; warna kulit V = 0.57 dan 0.61) sementara gambar banyak orang tetap relatif seimbang.
- **Audit subkelompok dapat mendokumentasikan kesetaraan pada pengode otomatis** — [[ye-fine-tuned-bert-coding-comparison-gpt4-2026|Ye, Borman dan Borman (2026)]] menemukan pengode esai BERT yang disetel halus mencapai akurasi 0.92 untuk siswa yang terancam stereotip dan 0.94 untuk yang tidak terancam, dengan recall 0.98 di kedua kelompok. Akurasi gender berkumpul di 0.95 versus 0.93 dan kelompok makan siang gratis-atau-harga-rendah di 0.95 versus 0.94, sementara pelajar bahasa Inggris (8%) dan siswa dengan rencana pendidikan individual (10%) dikecualikan dari analisis subkelompok karena subsampelnya terlalu kecil.


**Akurasi agregat dapat menyembunyikan model yang tidak dapat menemukan siswa yang kesulitan.** [[hooshyar-responsible-trustworthy-educational-data-mining-2026|Hooshyar dkk. (2026)]] melatih tiga keluarga model pada satu kohort Estonia dan membaginya dengan dua cara. Pada himpunan seimbang, keluarga-keluarga itu sebanding. Pada pemisahan tidak seimbang, dengan 125 siswa di bawah kuartil pertama berbanding 328 di atasnya, pohon keputusan, jaringan Bayesian, dan hutan acak mencapai recall 8%, 12%, dan 16% untuk berprestasi rendah pada presisi 80%, dan hanya model neuro-simbolik yang melewati 50%.

## Pendekatan mitigasi

Penelitian basis pengetahuan mengilustrasikan beberapa strategi yang saling melengkapi:

- **Pemodelan yang sadar keadilan:** [[fair-explainable-edu-recommendations|Kerangka Hybrid HKG-GRU]] mengintegrasikan **Group Distributionally Robust Optimization (GroupDRO)** untuk keadilan bersama keterjelasan dan stabilitas kontrafaktual, dievaluasi pada log Moodle (152 mahasiswa, ~150k interaksi). Ini menunjukkan bahwa sistem rekomendasi dapat dilatih agar adil dan transparan, bukan hanya akurat.
- **Estimator yang didebias:** [[temporal-smoothness-debiased-kt|pembelajaran Temporal Smoothness Doubly Robust (TSDR)]] menggabungkan model propensity dengan model imputasi galat, mempertahankan ketidakbiasan jika salah satunya benar, untuk menghapus bias seleksi dari estimasi penguasaan pelacakan pengetahuan.
- **Mitigasi pada tingkat prompt:** [[gender-bias-transfer-llm-writing|studi bias gender]] menunjukkan prompt netral sebagian besar menghindari penginduksian bahasa yang terdiferensiasi gender, sehingga desain prompt adalah tuas mitigasi yang praktis.
- **Pelatihan invarian dialek:** [[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang dan Liu (2026)]] menunjukkan pelatihan invariansi dialek di dalam mengalahkan menambalnya di luar: menghapus suku kontrastif transfer gaya hampir melipattigakan laju pembalikan kontrafaktual (4.3% menjadi 11.8%) dan melebarkan kesenjangan negatif-palsu dialek non-standar sepuluh poin, sementara hanya berbiaya 0.8 Macro-F1 dan memangkas negatif-palsu African American Vernacular English sebesar 18.4 poin.
- **Penilaian tervalidasi yang independen dari bahasa:** menangani [[ai-scoring-language-bias-physics|bias penilaian]] menuntut penilaian yang memisahkan pemahaman konseptual dari kualitas linguistik, dan audit skor untuk bias bahasa.
- **Keterjelasan:** [[xai-education-framework|XAI dalam pendidikan]] menyediakan transparansi tentang mengapa sebuah sistem menghasilkan skor atau rekomendasi tertentu, memungkinkan deteksi dan koreksi perilaku berbias serta menopang [[trust]].
- **Audit menyeluruh pipeline:** [[antiskillbench-persona-skills-privacy-2026|audit persona-skills]] dan audit sistematis seperti studi filter paternalistik menunjukkan nilai mengaudit model pada berbagai kondisi identitas sebelum penerapan.
- **Pengukuran keadilan sebagian besar absen di tempat analisis berskala.** Tinjauan cakupan PRISMA-ScR atas 421 studi yang menerapkan NLP pada evaluasi pengajaran oleh mahasiswa menemukan metrik keadilan formal hanya di 8 studi (1.9%) dan risiko penggunaan institusional di 18, sementara keterbatasan studi muncul di 70.5% dan perlindungan privasi di 42.3%; para penulis membaca kebersamaan itu sebagai adopsi [[llm|LLM]] yang melebarkan repertoar teknis tanpa perolehan proporsional dalam validasi atau pelaporan penggunaan yang bertanggung jawab ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva (2026)]]).
- **Ukuran kelompok bukan proksi bagi kerugian:** dua dari enam metode keadilan pasca-hoc mengarahkan koreksi ke kelompok yang sudah beruntung karena memakai ukuran kelompok untuk mendefinisikan kerugian; menetapkan ulang kerugian berdasarkan disparitas teramati mengalihkan satu metode tetapi membiarkan yang lain membalik nol prediksi — sebuah batas pada apa yang dapat diklaim mitigasi pasca-hoc ([[fairness-theatre-early-warning-systems-2026|McConvey dkk. (2026)]]).

## Mitigasi di sepanjang pipeline AI

Mitigasi bias bukan perbaikan tunggal melainkan proses berkelanjutan yang membentang di seluruh pipeline:

1. **Kurasi data** — diversifikasikan data pelatihan dan audit label untuk kesenjangan berbasis identitas dan anotasi yang tidak adil.
2. **[[llm-training-and-fine-tuning|Pelatihan model]]** — terapkan tujuan debiasing dan yang sadar keadilan (misalnya GroupDRO, estimator doubly robust).
3. **Desain prompt dan sistem** — rancang prompt dan sistem netral yang tidak merespons secara diferensial terhadap [[learner-identity|identitas pembelajar]].
4. **Penilaian dan asesmen** — validasi bahwa penilaian otomatis mengukur pemahaman alih-alih bahasa atau proksi demografis.
5. **Evaluasi dan audit** — audit model pada berbagai kondisi identitas (bahasa, gender, budaya) dan tuntut keterjelasan untuk menyingkap bias.
6. **Pengawasan manusia** — pertahankan tinjauan [[human-in-the-loop-ai|human-in-the-loop]], terutama untuk kasus berkeyakinan rendah atau bertaruhan tinggi.

## Hubungan dengan konsep terkait

Mitigasi bias adalah mekanisme teknis yang melaluinya [[equity-in-ai-education|Keadilan]] dioperasionalkan, dan persyaratan inti [[ethics]] serta desain AI yang bertanggung jawab. Ini terhubung ke [[ai-ed-evaluation]] (bias sebagai kriteria evaluasi), [[educational-measurement]] dan [[assessment-validity]] (keadilan dalam penilaian), serta [[privacy]] (sebagai kekhawatiran AI bertanggung jawab yang terkait). Ini juga terhubung ke [[cognitive-offloading|Ketergantungan Berlebih]] (karena sistem yang berbias terutama merugikan ketika terlalu dipercaya) dan [[ai-literacy]] (membantu pengguna mengenali dan mempertanyakan AI yang berbias).

## Implikasi bagi AI dalam pendidikan

- **Audit seluruh pipeline:** bias dapat masuk pada tahap data, model, prompt, penilaian, dan penerapan — mitigasikan di semua tahap itu.
- **Uji pada berbagai kondisi identitas:** evaluasi tutor AI, penilai, dan pemberi rekomendasi untuk perilaku diferensial berdasarkan bahasa, gender, budaya, dan disabilitas.
- **Pisahkan pemahaman dari bahasa dalam penilaian:** penilaian otomatis tidak boleh menghukum penulis non-pribumi atau yang kurang fasih atas pemahaman konseptual yang mereka tunjukkan.
- **Buat sistem dapat dijelaskan:** transparansi atas keputusan AI sangat penting untuk mendeteksi dan mengoreksi bias.
- **Gabungkan mitigasi teknis dan manusia:** pasangkan algoritma debiasing dengan pengawasan human-in-the-loop, terutama untuk kasus bertaruhan tinggi atau berkeyakinan rendah.

Semua yang ada di halaman ini menyangkut bias di dalam sistem. [[automation-bias]] menyangkut bias pada orang yang membaca keluarannya — menerima rekomendasi yang akan dipertanyakan manusia jika ia mencapainya sendiri — dan ia tetap bertahan bahkan ketika modelnya akurat.


## Miskonsepsi Umum

- **"Bias adalah masalah penilaian dan umpan balik."** Bias masuk ke **kelas tugas di luar penilaian**: tiga LLM yang menugaskan **kelas rekayasa perangkat lunak berisi 28 mahasiswa ke empat tim merutekan laki-laki setidaknya 80% lebih jarang** daripada distribusi acuan. Pembentukan tim membawa bias pada magnitudo yang sebanding dengan penilaian.
- **"Memberikan keterampilan yang relevan menghilangkan bias itu."** Memberikan keterampilan **mengurangi tetapi tidak menghilangkannya**: **99.2% penugasan berbasis keterampilan cocok dengan salah satu dari dua tim data acuan, namun gender tetap menentukan di antara opsi yang sama validnya (OR 2.53)**. Kecocokan tugas yang hampir sempurna hidup bersama efek gender, sehingga akurasi pada kriteria utama bukan bukti keadilan.
- **"Satu pendekatan mitigasi sudah cukup."** Penelitian mengilustrasikan **strategi yang saling melengkapi** — pemodelan yang sadar keadilan termasuk di antaranya — karena bias yang masuk pada pembentukan tidak ditangani oleh perbaikan yang diarahkan pada teks keluaran.

## Konsep terkait
- [[differential-effects-across-learner-groups]]
- [[automation-bias]] — kegagalan sisi pembaca yang tidak dicakup halaman ini: menerima rekomendasi tanpa memeriksanya
- [[explainable-ai]]
- [[guardrails]]
- [[equity-in-ai-education]]
- [[ethics]]
- [[ai-ed-evaluation]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[educational-measurement]]
- [[knowledge-tracing]]
- [[llm]]
- [[generative-ai]]
- [[privacy]]
- [[human-in-the-loop-ai]]
- [[trust]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[student-experience]]
- [[ai-education]]
- [[recommender-systems-and-learning-paths]]

## Artikel terkait
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Penyelarasan pedagogis neuro-simbolik (NSPA)
- [[ai-scoring-language-bias-physics]] — Bias bahasa dalam penilaian berbasis AI
- [[gender-bias-transfer-llm-writing]] — Transfer bias gender dalam penulisan berbantuan LLM
- [[paternalistic-filter-llm-history-education]] — Filter paternalistik dan penolakan diferensial
- [[fair-explainable-edu-recommendations]] — Rekomendasi pendidikan yang adil dan dapat dijelaskan
- [[temporal-smoothness-debiased-kt]] — Pelacakan pengetahuan yang didebias
- [[ground-truth-reliability-aied]] — Memodernkan data acuan untuk keandalan AI
- [[data-annotations-pedagogical-hints]] — Anotasi data sebagai petunjuk pedagogis
- [[xai-education-framework]] — AI yang dapat dijelaskan dalam pendidikan
- [[antiskillbench-persona-skills-privacy-2026]] — Privasi dan audit bias persona-skills
- [[genai-minoritized-knowledges-disability]] — GenAI dan peminggiran pengetahuan minoritas
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias yang selaras stereotip dalam umpan balik menulis otomatis
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Dapatkah AI memberikan dukungan yang tepat bagi profil mahasiswa yang beragam? Sebuah evaluasi berskala besar
- [[bias-representation-text-to-image-education-2026]] — Bias dan representasi dalam teks-ke-gambar yang dihasilkan AI: tinjauan sistematis (Alon dkk. 2026)
- [[agarwal-ethical-values-norms-aied-2026]] — Nilai dan norma etis bagi AI dalam pendidikan
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — Dari Klasifikasi Sentimen ke Umpan Balik yang Dapat Ditindaklanjuti dan Bertanggung Jawab: Tinjauan Cakupan dan Peta Bukti NLP dalam Evaluasi Pengajaran oleh Mahasiswa, 2015–2026

- [[genai-social-bias-software-engineering-education-2026]] — AI Generatif Dapat Memperkuat Bias Sosial dalam Pendidikan Rekayasa Perangkat Lunak
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Mengevaluasi Intervensi Keadilan Pasca-Hoc dalam Sistem Peringatan Dini yang Dikendalikan Vendor
- [[hooshyar-responsible-trustworthy-educational-data-mining-2026]] - di bawah ketidakseimbangan kelas tiga keluarga model tidak dapat mengidentifikasi berprestasi rendah sementara metrik seimbang tampak sehat
