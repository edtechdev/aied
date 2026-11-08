---
title: "Rekayasa Prompt"
created: "2026-07-28T10:44:35-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
updated: "2026-11-08T13:51:25-05:00"
translation_of: "concepts/prompt-engineering"
source_updated: "2026-11-08T08:41:46-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Rekayasa prompt** — praktik merancang dan menyempurnakan input ke model bahasa besar untuk memperoleh keluaran yang diinginkan. Dalam pendidikan, rekayasa prompt menjalankan peran ganda: sebagai keterampilan pembelajar (siswa harus belajar melakukan prompt secara efektif) dan sebagai tuas desain sistem (pengembang menyusun prompt yang membentuk perilaku [[intelligent-tutoring|tutoring AI]]).

## Pertanyaan yang Perlu Dipertimbangkan

- Anda mungkin baru saja mengetikkan prompt ke sebuah alat AI. Sekarang pertimbangkan ini: cara Anda merumuskannya tidak netral — ia mungkin mengungkap bagaimana Anda merencanakan, berpikir, dan mengalokasikan usaha. Apa yang mungkin dikatakan kebiasaan prompting Anda sendiri tentang cara Anda mendekati masalah?
- Sebuah studi menemukan bahwa pengguna yang merumuskan permintaan dengan terampil secara sistematis memperoleh keluaran lebih baik daripada mereka yang menyatakan maksud yang sama dengan kurang cekatan. Jika Anda menerima bahwa 'hak istimewa prompt' itu nyata, apakah akses yang adil ke AI paling baik diperbaiki dengan [[teacher-role|mengajarkan]] semua orang melakukan prompt lebih baik, atau dengan merancang ulang sistem agar tidak menuntut keterampilan itu — dan apa trade-off masing-masing?
- Apakah prompting adalah 'trik' yang harus dihafal, atau keterampilan intelektual yang sesungguhnya? Satu alur [[research-methods-aied|penelitian]] memperlakukannya sebagai pertimbangan profesional dalam suatu disiplin (jurnalisme, hukum, [[medical-education|kedokteran]]); alur lain memperlakukannya sebagai inti literasi AI. Pandangan mana yang selaras dengan pengalaman Anda sendiri tentang apa yang sebenarnya membedakan prompt yang baik dari yang buruk?
- Prompt yang dirancang baik dapat menyediakan perancah bagi pemikiran siswa, sementara prompt yang digunakan dengan buruk dapat mendorong offloading kognitif. Dapatkah Anda mengingat momen ketika jawaban AI berpikir untuk Anda? Apa pada prompt — atau niat Anda — yang membuatnya terjadi, dan dapatkah ia dirancang untuk melakukan kebalikannya?
- Prompting adalah sekaligus keterampilan pembelajar dan tuas desain sistem: sebagian tutor kini secara otomatis merutekan dan memilih prompt bagi pengguna. Ketika prompting berpindah dari pengguna ke sistem, apa yang siswa kehilangan — dan apa yang mereka dapatkan?
- Tetapkan tujuan kecil sebelum Anda membaca: setelah mempelajari rekayasa prompt, putuskan satu cara konkret Anda akan mengubah cara menulis prompt dalam pekerjaan Anda sendiri, dan hasil apa yang akan Anda periksa untuk mengetahui bahwa itu berhasil.

## Pendahuluan

Rekayasa prompt menjadi sentral bagi penggunaan [[generative-ai]] yang efektif dalam pendidikan. Berbeda dari antarmuka pemrograman tradisional, LLM merespons bahasa alami — tetapi kualitas, akurasi, dan nilai [[pedagogy|pedagogis]] dari respons tersebut sangat bergantung pada desain prompt. Penelitian dalam basis pengetahuan ini mengungkap bahwa prompting bukan tindakan netral: ia mencerminkan bagaimana siswa berpikir, merencanakan, dan mengalokasikan usaha kognitif. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran dan Arar (2026)]] mempertajam cakupan istilah itu dengan membedakan rekayasa prompt, yaitu optimasi teknis input untuk kinerja, dari literasi prompt, yaitu kerja retoris, etis, dan reflektif untuk menjernihkan maksud, membaca keluaran secara kritis, dan merevisi dengan alasan yang dinyatakan. Siklus Literasi Prompt mereka (Menjernihkan Maksud, Menyusun Prompt, Berinteraksi dengan Keluaran, Menyempurnakan Prompt, Merefleksikan) dan contoh rubrik proses membuat perbedaan itu dapat diajarkan, dan mereka berargumen bahwa pengajaran yang hanya mengoptimalkan keluaran membiarkan dimensi etis dan epistemologis penggunaan LLM tak tersentuh.

### Bagaimana rekayasa prompt tampil dalam penelitian

- **Prompting sebagai jejak kognitif:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk et al.]] menunjukkan bahwa pola prompt mengungkap [[cognitive-offloading|offloading kognitif]] — pekerjaan berkualitas tinggi menggunakan prompt kaya konteks, sopan, dan instruksional; pekerjaan berkualitas rendah menunjukkan ketidaksetujuan reaktif tanpa landasan domain

- **Kedalaman memperbaiki produk, bukan retensinya.** Pada 22 mahasiswa pascasarjana, proporsi prompt pencarian penjelasan ("mengapa/bagaimana/jelaskan") memprediksi kualitas tugas yang dinilai secara independen (β = 6.27) melampaui pengetahuan dasar dan volume prompt, namun menunjukkan asosiasi nol dengan daya ingat segera ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).

- **Kognisi prompt mengikuti disiplin ilmu, bukan siswa.** [[student-ai-conversations-cognitive-engagement-2026|Chang dan Li (2026)]] mengklasifikasikan 60,087 prompt dari 116 mata kuliah dan menemukan profil tingkat Bloom berbeda menurut disiplin — STEM didominasi Apply (20.8%), ilmu sosial didominasi Create (33.8%) — dengan varians tingkat mata kuliah melebihi varians tingkat siswa.
- **Prompting sebagai literasi:** [[tracing-genai-literacy-interaction-patterns|Melacak literasi GenAI]] dan penelitian [[aaai2026-prompting-literacy-k12|literasi prompting K-12]] membingkai prompting sebagai komponen inti [[ai-literacy]]
- **Literasi prompt adalah kemampuan yang dipersepsikan, dan ia tetap memprediksi keterlibatan.** Pada 829 mahasiswa desain di 40 kelas utuh, literasi prompt yang dilaporkan sendiri — enam butir lapor diri yang diadaptasi, bukan prompting yang diamati — memprediksi [[student-engagement|keterlibatan]] belajar pada β = 0.539, 95% CI [0.473, 0.595] ([[han-prompt-literacy-ai-dependence-design-2026|Han dan Cao, 2026]]). Asosiasi itu bertahan terlepas dari ketergantungan fungsional (p = 0.396) atau ketergantungan emosional (p = 0.941). Hanya ketergantungan kognitif, menggantikan pertimbangan AI dengan pertimbangan sendiri, yang jelas menipiskannya.
- **Pemula mengandalkan coba-coba, dan menyalahkan model.** Dalam seminar linguistik teks, sepuluh pemula genAI menyempurnakan prompt dengan coba-coba, jarang menggunakan contoh dalam konteks, dan secara berlebihan mengaitkan keluaran yang buruk dengan LLM alih-alih dengan rumusan prompt mereka sendiri ([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).
- **Prompt yang kabur meninggalkan jejak dalam dialog.** Ciri khas kelompok berkualitas lebih rendah adalah lingkar klarifikasi yang mengulang diri sendiri (IC→IC, Z = 3.25), yang dilacak hingga prompt kabur dan salah baca AI, dan membawa kesenjangan frustrasi terbesar dalam studi itu (2.12 vs 3.82); debugging prompt pada log autentik menyasar hal itu saat terjadi ([[fang-human-ai-collaboration-patterns-instructional-design-2026|Fang et al. (2026)]]).

- **Ketika instruktur memodelkan prompt, siswa menggunakannya kembali secara verbatim.** Di antara 310 prompt yang terekam dari dua belas kelompok STEAM sekolah menengah, penyalinan persis atas instruksi instruktur adalah sudut pandang siswa yang paling sering pada 47.1%, mendahului penyelidikan spontan pada 28.7% ([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).

- **Siklus regulasi mengalahkan formula prompt.** Dalam uji coba kuasi-eksperimental dengan 42 mahasiswa sarjana, siswa yang diajari siklus IDEA (Intent, Deconstruction, Expression, Adaptation) menghasilkan prompt dan keluaran berkualitas lebih tinggi daripada rekan yang diajari prompting Role–Task–Context–Format di kelima kategori tugas (keuntungan prompt terkoreksi +11.77 hingga +29.19 poin) ([[idea-framework-metacognitive-genai-2026|Wang et al., 2026]]).
- **Prompting sebagai desain sistem:** [[cotal-formative-assessment-scoring-2026|CoTAL]] menggunakan rekayasa prompt [[human-in-the-loop-ai|manusia dalam lingkar]] untuk penilaian [[formative-assessment|asesmen formatif]]; [[choi-anchor-aes-prompting-2025|prompting berbasis jangkar]] meningkatkan [[automated-essay-scoring|penilaian esai otomatis]]

- **Prompting adalah keterampilan pintu masuk, bukan disiplinnya.** Gorsky (2026) membingkai [[ai-literacy]] bagi profesional perangkat lunak sebagai kemampuan mengelola [[agentic-ai|agen]] alih-alih melakukan prompt kepadanya, menyebut pembingkaian, spesifikasi, rekayasa konteks, verifikasi, orkestrasi multiagen, dan keterauditan sebagai keterampilan yang harus dinilai kurikulum ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Perutean prompt adaptif:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]] memperlakukan pemilihan prompt sebagai bagian dari sistem tutoring itu sendiri — perutean prompt yang sadar mata pelajaran atas 14 fitur pedagogis, di mana perouter stokastik memilih prompt terbaik per percakapan. Ini menggeser prompting dari keterampilan pembelajar menjadi tuas desain sistem adaptif, meningkatkan [[student-engagement|keterlibatan]] dan efisiensi (konversi latihan 28.1% vs 19.6% dalam uji A/B dunia nyata).
- **Modalitas prompt:** [[voice-text-prompt-problems-computing-education|Penelitian input suara vs. teks]] mengkaji apakah modalitas prompting memengaruhi [[learning-gains|hasil belajar]]

- **Prompting di luar teks — ilustrasi ilmiah.** Prompting dapat menghasilkan gambar molekuler dan [[chemistry-education|kimia fisika]] dengan cepat dengan cepat, tetapi render yang meyakinkan secara lokal tetap bisa salah atau membawa bias representasional, sehingga siswa harus menginterogasi [[visualization|visualisasi]] yang dihasilkan AI yang dihasilkan AI terhadap prinsip kimia alih-alih memercayainya ([[unesco-ai-guidelines-chemical-education-2026|Li et al. (2026)]]).
- **Prompting terancah:** [[guided-llm-scaffolding-independent-learning|Perancah LLM terbimbing]] dan [[scaffolding-critical-engagement-genai-minority-students|perancah keterlibatan kritis]] mengajarkan prompting terstruktur sebagai intervensi pembelajaran

- **Melatih prompting dengan dukungan yang memudar:** dalam ARPG+, seorang pelatih waktu nyata mendiagnosis kualitas prompt di enam dimensi dan memudarkan dukungan seiring kompetensi tumbuh, mengangkat kualitas prompt akhir menjadi 7.82 berbanding 5.95 untuk templat statis dan 4.52 tanpa bantuan ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye et al. (2026)]]).
- **Dekomposisi tugas memiliki titik optimum:** menghasilkan pelajaran pelatihan tutor dalam tiga segmen menghasilkan pelajaran dengan penilaian tertinggi (rata-rata 14.67) sementara satu lintasan memperoleh nilai terendah (10.67) dan lima segmen kembali di bawah tiga — dekomposisi moderat mengalahkan kedua ekstrem ([[lin-llm-interactive-lesson-generation|Lin et al. (2025)]]).
- **Hak istimewa prompt dan keadilan:** [[prompt-privilege-equitable-ai-access-2026|Jin et al.]] menunjukkan keahlian prompting terdistribusi tidak merata — pengguna yang merumuskan permintaan dengan terampil secara sistematis memperoleh keluaran lebih baik daripada mereka yang menyatakan maksud yang sama dengan kurang cekatan. Prompt Equity Transformer mereka menggeser optimasi prompt dari pengguna ke sistem AI, berargumen bahwa keluaran yang [[equity-in-ai-education|adil]] harus direkayasa ke dalam model alih-alih dituntut dari pemula.
- **Penyempurnaan prompt mendatar; penyetelan halus mengambil alih dari sana.** Desain prompt iteratif menghasilkan keuntungan kualitas butir yang menurun dalam [[assessment]] menyimak L2, tetapi penyetelan halus GPT-4.1 pada prompt yang dioptimalkan — dengan prompt dipertahankan konstan — menghasilkan butir yang lebih berlandas konteks dan seimbang, mengisolasi [[llm-training-and-fine-tuning|adaptasi model]] alih-alih keahlian prompt alih-alih keahlian prompt sebagai tuas berikutnya ([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026]]).

- **Prompting sebagai pertimbangan profesional yang [[situated-learning|tersituasi]].** Di luar literasi dan desain sistem, prompting dapat dibingkai sebagai *praktik disipliner*. [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Taksonomi Dierickx et al.]] untuk jurnalisme memperlakukan definisi tugas dan prompting sebagai bentuk pertimbangan profesional yang dijalankan dalam norma epistemik dan etis suatu domain — menerjemahkan kerja jurnalistik menjadi tugas eksplisit (pengumpulan berita → pemaknaan → penyuntingan → publikasi/distribusi) membuat asumsi, prioritas, dan [[ethics|pertimbangan etis]] terlihat, serta mengubah prompting menjadi alat pedagogis bagi literasi AI kritis. Logikanya beralih ke profesi padat pengetahuan lain (hukum, kedokteran, kebijakan publik).
- **Desain prompt sebagai spesifikasi instruksional.** Neto dan kolega (2026) menemukan dalam [[meta-analysis-systematic-review|tinjauan sistematis]] mereka tentang GenAI dalam pendidikan kesehatan bahwa desain prompt berfungsi sebagai bentuk spesifikasi instruksional, mengodekan target kognitif dan kriteria kualitas yang tersirat dalam penulisan ahli — namun hanya 34.8% studi menyelaraskan konten yang dihasilkan dengan kerangka instruksional dan hanya 34.8% melaporkan prompting dengan cukup rinci untuk dapat direproduksi. Looi, Liu, dan Sun (2026) lebih lanjut menunjukkan bagaimana arsitektur prompt dapat menanamkan aturan pedagogis (gerbang kebenaran, batas anti-spoiler, gerbang perpisahan) untuk membatasi perilaku tutoring [[llm]] dalam domain prosedural.
- **Prompting dipandu rubrik dan sadar peran.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] menunjukkan bahwa prompting dipandu rubrik — memperlakukan rubrik sebagai antarmuka semantik antara maksud pedagogis manusia dan inferensi mesin — mendorong kesepakatan LLM–manusia atas karya desain siswa dari 54.75% menjadi 81.25% (Alpha Cronbach 0.393 → 0.798). Rubrik yang direkayasa untuk LLM harus menyeimbangkan presisi dan fleksibilitas: terlalu kabur mengundang interpretasi bebas, terlalu kaku mereduksi model menjadi pencocokan pola. Prompting sadar peran — mengevaluasi artefak yang sama di bawah prompt instruktur, peninjau sejawat, dan peninjau hibah — menghasilkan umpan balik yang berbeda secara kualitatif dan epistemik, menunjukkan bahwa desain prompt membentuk bukan hanya akurasi tetapi juga sikap evaluatif keluaran.
- **Perancah prompt dapat menggeser model menjauh dari guru.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al. (2026)]] meminta tujuh model menghasilkan umpan balik menulis tingkat paragraf di bawah tiga strategi prompting dan menemukan bahwa penambahan nama kategori atau contoh kerja meningkatkan divergensi dari distribusi guru pada sebagian besar model, hanya memperbaiki Mistral-7B (0.2695 menjadi 0.2398). Garis dasar zero-shot tetap paling dekat, sehingga instruksi jenis fokus adalah sesuatu yang perlu diuji alih-alih diasumsikan.
- **Prompting sadar konteks untuk penilaian.** Prompting sadar konteks pada model bahasa terlatih sebelumnya mengotomatiskan pengodean keterampilan [[collaborative-learning|pemecahan masalah kolaboratif]] dari data proses, memodelkan dependensi antar kode perilaku dan memadukan kemampuan kognitif dan sosial. Ini memungkinkan analisis CPS terstruktur dalam skala besar dan waktu nyata, mengatasi intensitas tenaga kerja skema pengodean manual.
- **Templat berbasis peran dan rubrik kualitas untuk perencanaan guru.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo dan Tahir (2025)]] secara empiris mengembangkan kerangka prompt untuk [[curriculum-design|perencanaan pelajaran]] seni STEAM anak yang memasangkan templat Role (R) – Instructions (I) – End Goal (E) (diadaptasi dari RISEN) dengan rubrik optimasi "empat poin dan satu garis" — terstandardisasi, praktis, menarik, dan lengkap, ditambah dimensi perluasan. Menerapkan rubrik untuk mengkritik dan menyempurnakan prompt menjaga rencana yang dihasilkan tetap dapat diterima guru seni praktik (rata-rata penilaian di atas 4/5) sekaligus menyingkap celah berulang ([[personalized-learning|personalisasi]], batasan [[pedagogical-safety|keselamatan anak]], bias budaya) yang tidak ditangani prompting satu-lintasan biasa — menunjukkan templat prompt plus kriteria evaluasi eksplisit berfungsi sebagai perancah kendali mutu untuk pembangkitan di ruang kelas.
- **Perancah lima bagian, diuji pada empat keluarga model.** Prompt Role–Goal–Input–Process–Output menaikkan kualitas keluaran yang dinilai dari 3.318 menjadi 4.603 (Δ = +1.285) pada 400 pasangan yang dipasangkan, dengan setiap keluarga membaik dan garis dasar terlemah memperoleh keuntungan terbesar ([[li-who-benefits-llms-prompt-engineering-equity-2026|Li et al. (2026)]]).

- **Desain peran dan batasan sebagai variabel independen.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] membandingkan dua agen yang dibangun di atas model dan platform yang sama pada suhu 0.3 yang satu-satunya perbedaan adalah bagaimana prompt menetapkan peran, keterampilan, dan batasan: agen guru ahli yang menjawab dari sumber pengetahuan buku teks yang terbatas versus agen berpusat siswa yang empatik yang ditulis untuk mendiagnosis [[misconceptions]] dan memeriksa pemahaman. Perbedaan peran semata menggeser kinerja belajar, beban kognitif, pengalaman flow, dan empati yang dipersepsikan, menunjukkan bahwa spesifikasi peran adalah keputusan desain instruksional dengan efek yang terukur alih-alih hiasan gaya ([[pedagogical-agent]]).
- **Prompting sebagai desain penilaian.** [[ecd-prompts-automated-essay-scoring-2026|Xiong et al. (2026)]] memetakan model siswa, bukti, dan tugas dari Evidence-Centered Design ke bagian-bagian prompt penilaian, menurunkan lima prinsip — intensionalitas, ketertelusuran, akuntabilitas, iterasi, dan keadilan; prompt yang dibangun ECD mereka menilai esai naratif lebih akurat daripada garis dasar zero-shot, few-shot, dan chain-of-thought.
- **Identitas model, bukan redaksi prompt, yang menggerakkan kesepakatan pengodean LLM–manusia.** Dalam [[keith-llm-prompting-human-coding-theory-concepts-essays-2026|Keith dkk. (2026)]] dengan dekomposisi terkendali, jenis prompt tidak signifikan (F = 1.77, p = 0.136, partial η² = .03) sementara faktor model membawa partial η² = .19. Menambahkan definisi atau instruksi rinci memperburuk deteksi daftar bahkan ketika ia menurunkan kesalahan pada penilaian definisi yang benar, dan harga tidak menjejaki kualitas: Gemini 2.5 Pro berbiaya \$178.13 namun tampil di bawah GPT-4.1 Full pada \$56.77.
- **Suntikkan nama teori, bukan teks lengkapnya.** [[zambrano-llm-human-ai-codebook-development-2026|Zambrano dkk. (2026)]] menunjukkan bahwa prompting bernama-teori mengalahkan makalah yang disediakan pada kegunaan (4.40 vs 3.20) dan kekonkretan (3.80 vs 2.40), sementara teks lengkap hanya menang pada keselarasan teoretis (4.60 vs 3.60).

### Keterkaitan dengan konsep yang lebih luas

Rekayasa prompt terkait dengan [[scaffolding]] — prompt yang dirancang baik dapat menyediakan perancah bagi pemikiran siswa alih-alih melewatinya. Ia bersinggungan dengan [[metacognition]] dan [[ai-literacy]], karena prompting yang efektif menuntut pemahaman baik atas kapabilitas AI maupun atas tujuan belajar sendiri. Penelitian [[cognitive-offloading]] secara langsung mengaitkan kualitas prompt dengan apakah penggunaan AI mendukung atau melemahkan pembelajaran.

- **Keterampilan menulis menggerakkan prompting, dan keduanya memprediksi keberhasilan [[vibe-coding]].** Dalam studi CHI 2026 pra-registrasi (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]] menemukan bahwa kemahiran komunikasi tertulis memprediksi kinerja vibe-coding berorientasi GUI (r = .29), dengan kualitas prompt yang dinilai manusia *memediasi* kaitan itu — bukti proses-respons bahwa prosa yang jelas dan terstruktur diterjemahkan menjadi prompt pemrograman bahasa alami yang lebih baik. Keterampilan menulis dan [[cs-education|prestasi CS]] sama-sama prediktor independen, dan prestasi CS (r = .39) membawa sekitar dua kali varians unik, sehingga meningkatkan prompting saja tidak mungkin sepenuhnya menggantikan dasar-dasar pemrograman dalam pengembangan berpendekatan LLM.
- **Strategi prompting memprediksi kinerja.** Sebuah [[isaza-chatgpt-engineering-prompting-2026|studi empiris terhadap 128 mahasiswa teknik]] menemukan bahwa AI Query Efficiency (prompt yang jelas dan terstruktur baik) dan [[problem-solving|pemecahan masalah]] yang digerakkan AI (integrasi strategis keluaran AI ke dalam penalaran) adalah prediktor terkuat keberhasilan akademik — bahkan setelah mengendalikan IPK — yang menunjukkan prompting adalah keterampilan yang dapat diajarkan yang membentuk seberapa efektif siswa belajar dengan AI.
- **Gaya prompting, bukan hanya kualitas prompt, mengikuti hasil.** Sifat yang diturunkan dari 1,540 sesi tutoring mengaitkan pertanyaan konseptual dengan kinerja ujian sementara perilaku pendelegasian tugas berkorelasi negatif — tetapi sifat yang sama gagal direplikasi pada semester berikutnya, sehingga mereka adalah pola perilaku alih-alih keterampilan yang stabil ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du dan Lan (2026)]]).
- **Taksonomi yang dapat digunakan, dan kategori prompt mana yang benar-benar membuahkan hasil.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]] menerjemahkan strategi teknis ke model 3K (*Kontext, Kernauftrag, Klarheit* — konteks, tugas inti, kejelasan): sebelas kategori berorientasi praktik, masing-masing dengan rubrik baik/rata-rata/suboptimal, dan masing-masing diuji sebagai variasi eksperimental pada umpan balik yang dihasilkan untuk tujuan belajar guru pra-jabatan. Bahasa teknis yang spesifik domain adalah kategori yang menentukan — mengganti terminologi mata pelajaran dengan parafrasa sehari-hari secara signifikan menurunkan [[ai-feedback-quality|kualitas umpan balik]] pada tiga model pada tiga model (β = −0.412). Menambahkan contoh konkret dan menghapus instruksi chain-of-thought tidak menghasilkan perbedaan signifikan dari garis dasar pada studi pertama; contoh membantu setelah analisis dijalankan ulang dengan kombinasi model-prompt berkinerja terbaik (β = 0.52). Kualitas prompt dan pilihan model bersama-sama menjelaskan 42.8% varians kualitas umpan balik yang dinilai, yang menjadi dasar argumen makalah bahwa rekayasa prompt adalah kompetensi yang terukur dan dapat diajarkan alih-alih preferensi gaya — dan bahwa kategori-kategorinya tidak dapat dipertukarkan dalam ukuran efek.
- **Prompt yang lebih baik mengurangi iterasi tanpa menaikkan kualitas keluaran.** Guru yang diberi pelatihan AI sebelum eksperimen persiapan pelajaran menulis prompt yang lebih panjang dan rinci yang membutuhkan lebih sedikit penyempurnaan, sementara guru tanpa pelatihan menggunakan prompt lebih pendek dan memerlukan lebih banyak iterasi berikutnya, namun penilaian ahli yang tersamar atas materi yang dihasilkan tetap setara ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel et al., 2026]]). Keahlian prompt di sini membeli lebih sedikit putaran koreksi, bukan draf pertama yang lebih kuat.

- **Siswa menyebut keselarasan maksud sebagai kesulitannya, bukan sintaksis.** Dalam survei terhadap 234 mahasiswa universitas Tiongkok, [[lei-fan-genai-prompting-strategies-2026|Fan dan Liu (2026)]] menemukan penyempurnaan setelah keluaran yang buruk sebagai kemampuan yang paling banyak disetujui (72.2%) sementara penetapan batasan keluaran paling sedikit (66.2%, dengan 22.2% netral). Preferensi strategi hampir tidak bergeser antara tugas penelitian dan brief kreatif: dari empat pasangan yang dipasangkan, hanya spesifikasi format keluaran yang berbeda setelah koreksi (0.26 poin, dz = 0.233, p disesuaikan BH = .002). Templat peran-tugas-format yang tetap memperoleh dukungan terlemah di antara semua strategi umum pada 59.4%. Di antara 12.8% yang menjawab pertanyaan terbuka, keselarasan maksud prompt muncul dalam 40.0% komentar, dan menambahkan lebih banyak detail tidak secara andal memperbaiki percakapan yang macet. Semuanya adalah [[self-report-measures|laporan diri]] dari satu kuesioner dari satu kuesioner.

## Miskonsepsi Umum

- **"Kualitas prompt adalah atribut siswa."** **Kognisi prompt mengikuti disiplin ilmu, bukan siswa**: [[student-ai-conversations-cognitive-engagement-2026|Chang dan Li (2026)]] mengklasifikasikan **60,087 prompt dari 116 mata kuliah** dan menemukan disiplin memprediksi kecanggihan prompt. Mengajari siswa melakukan prompt lebih baik menangani variasi yang terletak pada materi pelajaran.
- **"Siswa mengembangkan praktik prompting mereka sendiri."** Ketika instruktur memodelkan prompt, **siswa menggunakannya kembali secara verbatim** — di antara **310 prompt yang terekam dari dua belas kelompok STEAM sekolah menengah**, penyalinan persis atas instruksi instruktur adalah hal yang umum. Pemodelan menghasilkan reproduksi, itulah sebabnya ia adalah tuas desain sistem alih-alih keterampilan yang dapat ditransfer.
- **"Prompting adalah keterampilan pembelajar terlebih dahulu dan sifat sistem kedua."** Ini menggeser prompting **menjadi tuas desain sistem adaptif**, dengan efek terukur pada **keterlibatan dan efisiensi (konversi latihan 28.1% vs 19.6%)**. Afordansi prompting pada antarmuka menggerakkan perilaku lebih dari instruksi tentang prompting.

## Konsep terkait
- [[pedagogical-patterns]] — Lapisan perancah di dalam urutan penggunaan terstruktur
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agen)

## Artikel terkait

- [[lei-fan-genai-prompting-strategies-2026]] — 234 siswa tentang apa yang mereka anggap sulit: keselarasan maksud, bukan sintaksis prompt
- [[wang-teacher-student-centered-agents-physics-2026]] — Prompt peran dan batasan agen sebagai variabel desain dalam pembelajaran fisika (Wang et al. 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. penyetelan halus untuk pembangkitan butir menyimak L2 berbasis GPT (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Apa yang ditanyakan siswa itu penting: kedalaman interaksi LLM, kualitas tugas, dan daya ingat segera (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: pelatihan waktu nyata untuk prompting LLM pendidikan
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Taksonomi tugas LLM berbasis tugas untuk literasi AI kritis dalam jurnalisme
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: mengukur & memitigasi disparitas aksesibilitas dalam akses LLM
- [[principal-trait-analysis-human-ai-skills-2026]] — Principal Trait Analysis: sifat kolaborasi manusia-AI yang digerakkan data
- [[llms-text-linguistics-teaching-2026]] — LLM dalam pengajaran linguistik teks
- [[idea-framework-metacognitive-genai-2026]] — Kerangka IDEA untuk penggunaan GenAI yang diatur secara metakognitif
- [[lin-llm-interactive-lesson-generation]] — Pembangkitan pelajaran pelatihan tutor interaktif oleh LLM (Lin et al. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — Pedoman AI UNESCO diterjemahkan ke pendidikan kimia; pergeseran epistemik
- [[isaza-chatgpt-engineering-prompting-2026]] — Perilaku prompting memprediksi kinerja mahasiswa teknik
- [[student-ai-conversations-cognitive-engagement-2026]] — Keterlibatan kognitif tingkat Bloom yang terkait disiplin dalam percakapan siswa-AI (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM sebagai agen desain pedagogis iteratif
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Rekayasa prompt vs literasi prompt: kerangka keterlibatan GenAI berpusat manusia lima fase dengan Siklus Literasi Prompt lima langkah (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Rekayasa prompt dan pemilihan model sebagai prediktor kualitas umpan balik AI (Jacobsen et al. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Mengevaluasi Fokus Umpan Balik dan Adaptivitas Pedagogis dalam Umpan Balik yang Dihasilkan LLM atas Tulisan Siswa

- [[middle-school-genai-steam-interactions-2026]] — Kelompok STEAM sekolah menengah menyalin instruksi instruktur secara verbatim dalam 47.1% prompt
- [[ecd-prompts-automated-essay-scoring-2026]] — Menggunakan Evidence-Centered Design untuk Memandu Rekayasa Prompt dalam Pengukuran: Ilustrasi dengan Penilaian Esai Otomatis
- [[fang-human-ai-collaboration-patterns-instructional-design-2026]] — Prompt yang kabur menghasilkan lingkar klarifikasi yang mengulang diri sendiri dengan kesenjangan frustrasi terbesar
- [[li-who-benefits-llms-prompt-engineering-equity-2026]] — Kompetensi rekayasa prompt sebagai jalur keadilan, dengan eksperimen perancah lintas model (Li et al. 2026)
- [[han-prompt-literacy-ai-dependence-design-2026]] — Literasi prompt sebagai kemampuan yang dipersepsikan yang tetap memprediksi keterlibatan
