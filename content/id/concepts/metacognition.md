---
connected_resources: [student-guide-to-ai]
title: "Metakognisi"
created: "2026-05-07T10:44:35-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition, scaffolding, self-regulated-learning]
technology: [generative-ai, llm]
assessment: [formative-assessment]
connected_faqs: [reducing-over-reliance, study-with-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-04T02:10:52-05:00"
translation_of: "concepts/metacognition"
source_updated: "2026-11-03T09:06:35-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> Metakognisi — berpikir tentang pemikiran sendiri — adalah sekaligus sasaran [[ai-education|pendidikan AI]] [[research-methods-aied|penelitian]] (dapatkah alat AI mengembangkan keterampilan metakognitif siswa?) dan faktor risiko (AI yang menyelesaikan tugas dapat menekan praktik metakognitif).([[stanford-evidence-base-ai-k12-2026]])([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Pertanyaan untuk Dipertimbangkan

- 'Metakognisi' adalah berpikir tentang pemikiran Anda sendiri — mengetahui apa yang Anda ketahui, memantau diri, dan menyesuaikan strategi. Ketika Anda belajar atau memecahkan masalah, seberapa sadarkah Anda pada saat itu apakah Anda benar-benar memahami atau hanya mengenali materinya?
- Temuan yang mencolok: siswa yang memakai bantuan esai AI sering tidak mampu mengingat kutipan dari esai mereka sendiri, karena mereka tidak bergulat dengan kontennya selama produksi. Ketika sebuah alat menghasilkan luarannya, praktik apa yang hilang dari siswa — dan pentingkah praktik itu?
- Halaman ini membingkai metakognisi sebagai sasaran (dapatkah AI membangunnya?) sekaligus risiko (dapatkah AI menekannya?). Mungkinkah alat AI yang sama memperkuat atau melemahkan metakognisi siswa bergantung pada cara ia dirancang atau dipakai? Apa yang menentukan arahnya?
- Prompt terstruktur yang meminta siswa menjelaskan sendiri, mengevaluasi strategi, atau mengidentifikasi celah mempertahankan tuntutan metakognitif, sementara AI yang sekadar menyelesaikan tugas menggusurnya. Jika Anda merancang alat belajar AI, apa yang akan Anda bangun agar ia mengundang refleksi alih-alih menggantikannya?
- Halaman ini menemukan bahwa apakah penggunaan AI kaya secara metakognitif bergantung pada motivasi dan sikap siswa sama besarnya dengan pada teknologinya. Pernahkah Anda memakai sebuah alat secara dangkal lalu menyadari Anda tidak belajar apa pun — dan apa yang berbeda pada saat-saat Anda memakainya secara mendalam?

## Pendahuluan

Metakognisi dalam pendidikan merujuk pada kesadaran, pemantauan, dan [[regulation|regulasi]] siswa atas proses kognitif mereka sendiri:

- **Pengetahuan metakognitif:** Memahami apa yang diketahui, strategi apa yang tersedia, dan kapan menggunakannya
- **Regulasi metakognitif:** Merencanakan, memantau, dan mengevaluasi pembelajaran sendiri secara waktu nyata

Dalam kerangka [[self-regulated-learning]], metakognisi adalah mekanisme sentral yang memungkinkan siswa menyesuaikan strategi, mengenali kebingungan, dan mencari bantuan secara tepat.([[scheu-mobile-chatbot-journaling-motivation-2026]])

Cara siswa benar-benar mengerahkan metakognisi di sekitar AI dibentuk oleh lebih dari alatnya sendiri: [[cui-motivation-roles-metacognitive-genai-2026|Cui dkk.]] menemukan bahwa motivasi siswa dan peran interaksi yang mereka ambil membentuk [[student-engagement|keterlibatan]] metakognitif mereka dengan [[generative-ai|GenAI]] — artinya apakah penggunaan AI kaya secara metakognitif bergantung pada sikap siswa sama besarnya dengan pada teknologinya. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran dan Arar (2026)]] menambahkan [[student-ai-interaction|interaksi AI]] itu sendiri sebagai objek refleksi itu: langkah penutup Siklus [[prompt-engineering|Prompt Literacy]] mereka meminta siswa memeriksa apa yang diungkap proses itu tentang cara kerja prompt dan asumsi apa yang membentuk responsnya, dan mereka menjadikan refleksi serta revisi sebagai fase tempat kepengarangan dan pertimbangan kritis berkembang.

Peran metakognisi yang lebih mendasar muncul ketika lokus koordinasi bergeser dari guru ke siswa. [[dang-human-ai-collaboration-competency-2026|Dang, Hong, Doyle dan Nguyen (2026)]] berargumen dalam kerangka [[human-ai-collaboration|Human-AI Collaboration Competency (HACC)]] mereka bahwa kerja integratif yang TPACK tugaskan kepada pedagogi beralih, begitu aktornya adalah siswa, kepada metakognisi siswa itu sendiri — kompetensi yang memungkinkan siswa mengarahkan kolaborasi, [[trust-calibration|mengalibrasi]] ketergantungan mereka pada [[generative-ai|AI]], dan tetap menjadi pengarang pembelajarannya. Mereka memperlakukan kompetensi metakognitif sebagai mekanisme yang melaluinya [[agency|agensi siswa]] diwujudkan, dengan sengaja mengecualikan agensi sebagai komponen terpisah dan membacanya sebagai kualitas yang muncul dari koordinasi kompetensi domain, AI, dan metakognitif. [[network-analysis|Epistemic Network Analysis]] mereka atas wawancara dengan 24 pendidik pendidikan tinggi menemukan pembicaraan metakognitif meningkat seiring tingkat peran — pendidik senior menghubungkannya dengan domain, AI, dan belajar dengan AI — yang dibaca para penulis sebagai tanda bahwa pendidik dengan tanggung jawab kurikuler lebih luas melihat kesulitan menetap siswa sebagai persoalan regulasi alih-alih teknis.

## Bagaimana Alat AI Memengaruhi Metakognisi

### Risiko Penekanan (Stanford SCALE, 2026)

Ketika AI menyelesaikan tugas penalaran untuk siswa — memecahkan soal matematika, menulis esai, menghasilkan kode — siswa kehilangan latihan dalam memantau pemahamannya sendiri dan memilih strategi.([[stanford-evidence-base-ai-k12-2026]])

Ketergantungan bukanlah kegagalan: [[du-yuan-epistemic-dependence-2026|Du dan Yuan (2026)]] menilai pembelajaran termediasi AI dengan enam kriteria diagnostik — contestability, recoverability, transfer, traceability, tanggung jawab terdistribusi, dan pluralitas epistemik — dan membedakan bantuan instrumental, yang membantu menghasilkan luaran, dari bantuan yang membawa pertimbangan, yang menyediakan standar untuk menilai luaran.
**Menamai pertanyaan tata kelola.** [[metacognitive-ownership-human-ai-regulation-2026|Lin dan Chang (2026)]] mengusulkan **kepemilikan metakognitif** — tata kelola siswa atas standar, pertimbangan evaluatif, dan tindakan yang disumbangkan AI — memisahkan apropriasi standar, tata kelola pemantauan-pertimbangan, dan otorisasi kendali, serta menuntut kesempatan yang realistis untuk bertindak berbeda.


Temuan utama:
- **Kosmyna dkk. (2025):** Siswa yang memakai bantuan esai AI **83% tidak mampu mengingat kutipan** dari esai mereka sendiri, vs. 11% pada pengguna non-AI — menunjukkan mereka tidak bergulat dengan konten selama produksi.
- **Stadler dkk. (2024):** AI serbaguna mengurangi beban kognitif tetapi menghasilkan **penalaran berkualitas lebih rendah** dibanding pencarian tradisional, yang menunjukkan keterlibatan metakognitif tergeser.
- **Lehmann dkk. (2025):** AI umum untuk [[cs-education|pemrograman]] merugikan pemahaman siswa ber-[[prior-knowledge|pengetahuan awal]] rendah — siswa yang paling membutuhkan scaffolding metakognitif justru menerima jawaban.
- **Kemalasan metakognitif.** Bidang ini menamai mode kegagalan khas ketika siswa melepaskan tanggung jawab metakognitif mereka kepada alat — mengadopsi istilah *kemalasan metakognitif* untuk ilusi kompetensi yang dihasilkannya, dan memperingatkan bahwa risiko kognitifnya paling keras menimpa pemula dan pengatur diri yang lemah ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).

Kelancaran adalah alasan kehilangan itu luput disadari. Siswa menilai pembelajaran mereka sebagian dari seberapa mudah materi diproses, dan Bjork dkk. (2013) menunjukkan bahwa isyarat kelancaran membuat orang melebih-lebihkan pemahaman ketika konten terasa mudah; teks hasil AI yang lancar menyediakan perasaan itu entah pemahaman menyusul atau tidak, menciptakan kondisi bagi ilusi kompetensi yang dipabrikasi. [[generativism-learning-theory|Generativisme]] memperlakukan hal ini sebagai alasan mengapa metakognisi adaptif tidak dapat diasumsikan: siswa harus bertanya apakah kemudahan membaca mencerminkan pemahaman alih-alih membaca kemudahan itu sebagai jawabannya.

**Kesadaran tidak menjamin penyelesaian berhenti.** [[metacognitively-discordant-completion-genai-2026|Jia (2026)]] menamai *penyelesaian yang diskordan secara metakognitif*: siswa yang menginvestasikan usaha sungguh-sungguh, memegang putusan orang pertama yang sudah terbentuk bahwa pemahaman belum datang, dan tetap melepaskan pekerjaannya — kasus yang justru diasumsikan tidak ada oleh penjelasan ilusi kelancaran maupun penarikan usaha.

Siswa juga salah terkalibrasi tentang biaya AI: partisipan memprediksi waktu mandiri secara akurat tetapi meremehkan waktu berbantuan AI, dan melaporkan usaha lebih rendah (0.61 poin pada NASA-TLX) sementara AI hanya mempercepat tiga dari 24 tugas — bias yang absen ketika pembantu yang dibayangkan adalah orang lain ([[cognitive-offloading-speedup-illusion|Yu dkk. (2026)]]).

Biayanya tampak terbatas alih-alih global: pengalihan menurunkan keterampilan spesifik yang dilatih, bukan kemampuan umum domain yang mendasarinya, dan muncul saat penarikan: sebuah studi endoskopi menemukan deteksi adenoma turun dari 28.4% menjadi 22.4% ketika AI tidak tersedia, sehingga pemantauan sumber (membedakan penalaran AI dari penalaran sendiri) tetap menjadi risiko metakognitif yang terbuka ([[ai-making-us-stupid|Cash dkk. (2026)]]).

### Peluang Augmentasi (Scheu dkk., 2026)

Ketika AI dirancang untuk mendukung refleksi alih-alih menggantikannya, metakognisi dapat diperkuat:

- **Jurnal belajar** adalah praktik metakognitif klasik: dengan merefleksikan proses pembelajaran, siswa meningkatkan kesadaran atas kognisi mereka
- **Prompt terstruktur** yang meminta siswa menjelaskan sendiri, mengevaluasi strategi, atau mengidentifikasi celah pengetahuan mempertahankan tuntutan metakognitif. CoMeT (Hou dkk. 2026) memberi frasa itu definisi dan jaminan empiris: ia memperlakukan tuntutan metakognitif sebagai kuantitas yang berbeda dari [[cognitive-offloading|beban kognitif]] — apa yang harus siswa putuskan, nyatakan, atau nilai sebelum bantuan datang, bukan sekadar apa yang tersisa ketika bantuan ditahan — dan menahannya setara secara statistik dengan tutor yang menahan jawaban secara desain (p_TOST = .004) sementara dukungannya sendiri meningkat dan memudar satu tingkat demi satu tingkat. Pemudaran bertahan ketika giliran siswa diarahkan pada keputusan yang sedang didukung: giliran yang diarahkan ke tempat lain memperoleh konsesi belakangan 40.3% dari waktu berbanding 28.8% untuk giliran terarah, selisih 11.5 poin, sehingga yang harus dibaca tutor adalah di mana perhatian siswa berada, bukan seberapa besar usaha yang ditampilkan giliran itu.

- **Tetapkan tingkat penggunaan AI per tugas.** HAIML memasangkan tiga lapisannya dengan Empat Tingkat Penggunaan AI — dari tanpa penggunaan AI, melalui curah gagasan, hingga kolaborasi AI dan kreasi terintegrasi AI dengan evaluasi luaran — sehingga instruktur menetapkan tingkatnya untuk sebuah tugas dan menjaga refleksi metakognitif tetap sentral di setiap tingkat ([[haiml-human-centered-ai-metacognitive-model-2026|Reardon, 2026]]).
- **Mata kuliah berbasis contoh** dalam [[conversational-ai|chatbot]] Scheu dkk. meningkatkan **kompetensi yang dipersepsikan** (sebuah [[self-assessment|penilaian diri]] metakognitif) bahkan ketika asisten [[llm]] sendirian tidak melakukannya
- **Pembingkaian yang muncul menempatkan sistem, bukan hanya individu, dalam loop.** Tinjauan bibliometrik–sistematis atas 135 studi kelas STEM (24 studi inti) menemukan pembingkaian posthumanis yang muncul dan memosisikan AI sebagai ko-regulator pembelajaran, menggeser unit analisis dari refleksi individual ke [[regulation|regulasi]] tingkat sistem dan [[distributed-cognition|kognisi terdistribusi]] ([[ai-metacognition-stem-review|Tsakeni dkk. (2025)]]).

**Pada skala sintesis polanya bertahan, dan ia menipis ketika pengukuran menajam.** Sebuah meta-analisis tiga tingkat atas 54 studi (kuasi-)eksperimental (121 ukuran efek, 7,431 siswa) menempatkan efek AI terhadap metakognisi pada g = 0.624 (CI 95% [0.431, 0.817]), dengan 107 dari 121 efek positif dan keuntungan naik seiring paparan dari g = 0.381 di bawah satu pekan menjadi g = 1.638 pada 15 sampai 20 pekan ([[ai-metacognition-three-level-meta-analysis-2026|Li dkk. (2026)]]). Sumber pengukuran adalah moderator yang menentukan: laporan diri g = 0.776, observasi perilaku g = 0.514, dan penilaian akurasi, yaitu selisih antara kinerja yang dinilai dan yang sebenarnya, g = 0.035 dan tidak signifikan. Keuntungannya terbesar di tempat paling mudah diklaim dan nyaris nol di tempat pemantauan dinilai terhadap kinerja, yaitu masalah laporan diri yang terus dihadapi studi-studi di atas.

**Metakognisi termasuk luaran yang paling sedikit diteliti.** Dalam scoping review atas 394 studi GenAI pendidikan tinggi, metakognisi dan pembelajaran mandiri termasuk luaran yang paling sedikit disasar, bersama etika dan kreativitas ([[mapping-genai-higher-ed-scoping-review|Lin dkk. (2026)]]).

- **Memunculkan pola interaksi yang tidak dapat dilihat siswa.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li dan Weng (2026)]] melacak gerakan mata, pencatatan, dan tuturan saat 22 peserta pelatihan juru bahasa bekerja dengan sistem pengenalan tutur dan terjemahan mesin, dan menemukan bahwa cara siswa membagi [[cognitive-psychology|perhatian]] antara luaran AI dan catatan mereka sendiri tidak terlihat oleh mereka: 58.3% berganti profil antar tahap tugas, dan pembaca luaran AI yang paling berat mendapat skor terendah pada kelancaran penyampaian dan kualitas bahasa sasaran. Konsekuensi pedagogisnya adalah refleksi harus discaffold oleh bukti eksternal, karena strategi siswa tidak dapat diintrospeksi — para penulis menyerukan pembimbingan siswa untuk mendeskripsikan dan mengevaluasi mengapa mereka bekerja dengan cara tertentu pada setiap tahap.

- **Bukti proses bergantung kanal.** Pada 79 mahasiswa sarjana yang bekerja dengan [[generative-ai|AI generatif]], pemantauan dan perencanaan berkedalaman lebih tinggi lebih sering muncul dalam unit think-aloud sementara regulasi berkedalaman lebih tinggi lebih sering muncul dalam log interaksi, sehingga satu catatan saja meremehkan sebagian proses ([[metacognitive-processes-genai-interaction-logs-2026|Li dan Liu (2026)]]).
- **Praktik reflektif dapat muncul dari penggunaan materi pelajaran biasa.** Lintas delapan sekolah menengah atas Denmark, siswa yang bekerja dengan [[generative-ai]] sebagai mitra kognitif mengembangkan empat praktik — penjelasan, kreasi, inspirasi, dan perbaikan, yang berkembang menjadi sebelas proses — ketika refleksi muncul dalam register disipliner maupun proses, meskipun setiap praktik sama-sama dapat melayani substitusi ([[ai-cognitive-partner-reflective-thought-2026|Dalsgaard & Prilop, 2026]]).
- **Scaffold reflektif dapat menjadi kebiasaan dan menggantikan pemantauan diri yang dilindunginya.** [[skill-sustaining-reliance-reflective-ai-engagement-2026|de Jong (2026)]] memperingatkan bahwa prompt berulang untuk berefleksi dapat luntur karena habituasi — seperti peringatan berulang yang diabaikan secara otomatis — sehingga seorang profesional yang berefleksi hanya ketika sistem memintanya bisa berakhir tanpa alat maupun tanpa kebiasaan pemantauan diri; makalah itu berargumen bahwa prompt reflektif seharusnya diperlakukan sebagai intervensi pembangun keterampilan yang memudar dan diuji apakah pengguna berefleksi tanpanya.
- **Keuntungan selektif: pengetahuan metakognitif tanpa perencanaan dan pemantauan.** [[wang-genai-novice-learner-learning-by-teaching-2026|Wang dkk. (2026)]] membagi 68 guru prapelatihan menjadi kelompok yang menjelaskan flipped classroom kepada siswa pemula AI generatif (n=33) dan kelompok yang mempertanyakan guru AI generatif (n=35). Kelompok siswa pemula mendapat skor lebih tinggi pada pengetahuan metakognitif dan strategi belajar (p < 0.001, Cohen's *d* = 0.41) tetapi tidak pada perencanaan dan pemantauan (M = 4.01 vs. 3.78, p = 0.062), meskipun skor penjelasan dan penerapan kelompok yang sama naik (r = 0.474 dan r = 0.642) sementara ingatan faktual tidak memisahkan kelompok (p = 0.416). Perpecahan itu mengikuti dua komponen dalam Pendahuluan: menjelaskan kepada seseorang yang bertanya balik membangun kesadaran deklaratif atas apa yang diketahui, tetapi tidak ada apa pun dalam desainnya yang membuat siswa menetapkan rute atau memeriksa kemajuan, yang diatribusikan para penulis pada desain tugas dan beban kognitif alih-alih pada perannya sendiri. [[learning-by-teaching|Belajar dengan mengajar]] bersama AI karena itu adalah tuas bagi pengetahuan metakognitif, bukan secara otomatis bagi [[self-regulated-learning|regulasi]], dan para penulis merekomendasikan penambahan prompt perencanaan eksplisit serta umpan balik kemajuan.
- **Think Aloud mendukung kesadaran awal tetapi tidak evaluasi mendalam.** [[karaki-think-aloud-ethical-genai-2026|Karaki dan Baroudi (2026)]] menjalankan studi penelitian tindakan metode campuran dengan 44 mahasiswa wirausaha tahun pertama yang memakai metode Think Aloud selama tugas kuliah berbantuan AI. Think Aloud membuat konstruksi prompt, praktik verifikasi, dan pengambilan keputusan etis siswa lebih terlihat, tetapi evaluasi kritis atas luaran AI "sering tetap di tingkat permukaan, terutama di antara siswa yang membutuhkan dukungan tambahan" — siswa mengenali respons yang generik atau tidak selaras namun tetap bersandar padanya secara berat. Kesadaran metakognitif yang dilaporkan sendiri adalah yang tertinggi dari tiga konstruk yang disurvei (M = 3.79), tetapi survei pascaintervensi tunggal itu tidak dapat memisahkan persepsi dari perubahan. Kesimpulan para penulis — Think Aloud bukan solusi tunggal dan harus dipadukan dengan pengajaran eksplisit dalam literasi AI, konstruksi prompt, dan strategi verifikasi — memperluas jalur bukti proses di atas dari *apa yang ditangkap catatan* menjadi *apa yang diubah vokalisasi saja*.
- **Pelatihan metakognitif sebelumnya menjadi gerbang manfaat mitra refleksi AI.** Dalam eksperimen 2 × 2 dengan 60 guru prapelatihan, [[metacognitive-training-ai-socratic-scaffolding-preservice-2026|Zhang dkk. (2026)]] menemukan interaksi metakognisi × alat yang signifikan: mitra Socratic AI mengalahkan alat digital tradisional dengan selisih 0.56 poin hanya setelah pelatihan, tanpa keunggulan tanpanya (ΔM = −0.03).


[[braun-cognitive-dormancy-ai-affordances-2026|Braun (2026)]] memberi penjelasan penekanan itu uji kausal terpreregistrasi (N = 317) terhadap lembar kerja. Ketidakteraturan naik 0.84 (interval kredibel 95% 0.47 sampai 1.21) dan merupakan efek paling jelas dalam model, sementara pemrosesan mendalam turun melalui rantai yang berjalan dari pengalihan ke berpikir kritis alih-alih secara langsung. Penulisnya menamai keadaan itu dormansi kognitif, ketika pemantauan dan pemilihan strategi menjadi senyap sementara pemrosesan berlanjut, dan menempatkan penyebabnya pada afordansi lingkungan alih-alih pada siswa.

## Pembedaan Keterlibatan–Motivasi

Scheu dkk. (2026) menemukan perpecahan penting:

| Dimensi | Efek Asisten LLM | Efek Mata Kuliah |
|---|---|---|
| **Motivasi intrinsik** (kesediaan terlibat) | **Tidak ada efek** | **Positif** |
| **Keterlibatan perilaku** (jumlah tulisan) | **Meningkat seiring waktu** ([[feedback|loop umpan balik]]) | **Positif konstan** |

Ini menunjukkan bahwa **dukungan metakognitif dan [[motivation]] tidak identik**. [[scaffolding]] asisten LLM atas entri jurnal meningkatkan berapa banyak yang ditulis siswa (keterlibatan perilaku) tetapi tidak membuat mereka *ingin* menulis lebih banyak (motivasi intrinsik).([[scheu-mobile-chatbot-journaling-motivation-2026]])

## Pembedaan Keyakinan–Pengalaman

[[cognitive-offloading-metacognitive-review-2026|Guo & Ye (2026)]] menawarkan penjelasan yang lebih tajam secara teoretis tentang bagaimana metakognisi mengatur pemilihan strategi, dengan membedakan dua komponen yang beroperasi pada fase berbeda:

- **Keyakinan metakognitif** — konsepsi diri yang stabil dan merujuk pada diri sendiri yang tersimpan dalam memori jangka panjang (mis., keyakinan tentang kemampuan memori sendiri, atau keandalan sebuah alat). Keduanya menjadi jangkar pilihan strategi *sebelum* tugas dimulai.
- **Pengalaman metakognitif** — perasaan dinamis dan spesifik tugas (kesulitan yang dipersepsikan, keyakinan, beban mental) yang mendorong *pemutakhiran* keyakinan selama pelaksanaan tugas.

Pembedaan ini menghasilkan prinsip **pencocokan waktu–komponen**: umpan balik yang menyasar keyakinan (mis., peringkat komparatif) paling efektif pada fase persiapan pratugas, sedangkan umpan balik yang menyasar pengalaman (mis., indikator kebenaran segera) paling efektif selama pelaksanaan tugas. Umpan balik peringkat yang abstrak dapat terpisah dari — atau teratasi oleh — pengalaman spesifik tugas yang mendominasi pengambilan keputusan segera, menjelaskan mengapa sebagian intervensi umpan balik gagal mengubah perilaku. Ini memberi [[teacher-role|pendidik]] rasional berbasis fase untuk merancang scaffold metakognitif di sekitar alat AI: kalibrasi keyakinan sebelum penggunaan, sediakan umpan balik spesifik tugas yang segera selama penggunaan.

Dukungan eksternal juga dapat melangkah di depan pertimbangan itu sepenuhnya. [[iqbal-human-genai-support-essay-revision-2026|Iqbal dkk. (2026)]] meminta 87 mahasiswa EFL merevisi esai dengan ChatGPT 4.0, dengan instruktur penulisan akademik berpengalaman, atau tanpa dukungan, dan merekonstruksi strategi yang dipakai siswa dari jejak clickstream, ketukan tombol, dan gerakan tetikus. Apa yang mereka pilih sangat terkait dengan dukungan yang tersedia (Cramér's *V* = 0.668), tetapi tidak dengan akurasi pertimbangan metakognitif (H(3) = 4.995, p = 0.172), yang hanya menunjukkan kaitan marginal pada kondisi tanpa dukungan (p = 0.0460). Tidak ada strategi revisi yang terkait dengan perubahan skor esai (p = 0.273), namun kelompok GenAI meningkat signifikan lebih banyak daripada dua kelompok lain (H(2) = 16.591, p = 0.00025, η² = 0.174), sehingga esai yang lebih kuat tidak berasal dari regulasi diri yang lebih baik. Ketika mitra yang cakap dapat menyediakan langkah berikutnya, pertimbangan metakognitif berhenti menjadi penentu pilihannya, dan penjelasan pilihan strategi di atas lebih menggambarkan siswa tanpa dukungan daripada siswa yang didukung. Bacaan praktis para penulis adalah mengarahkan bantuan AI pada mendorong refleksi atas strategi menulis alih-alih pada menyediakan bantuan langsung.

### Kalibrasi dapat dilatih: prediksi + umpan balik

[[metacognitive-training-optimal-cognitive-offloading-2026|Ngai & Gilbert (2026)]] menyediakan bukti kausal langsung bahwa kalibrasi metakognitif adalah keterampilan yang *dapat dilatih*. Dalam dua eksperimen terpreregistrasi (N=164, N=416), **hanya lima percobaan latihan yang memasangkan prediksi kinerja dengan umpan balik veridikal** meningkatkan kalibrasi dan mengurangi bias. Desain aditif empat kelompok mengisolasi komponen kausalnya: **membuat prediksi sendirian tidak efektif; penambahan umpan balik kinerja mendorong perbaikan; pelabelan eksplisit atas kepercayaan diri berlebih/kurang tidak menambah apa pun**. Yang krusial, perbaikan itu bekerja pada kalibrasi *absolut* — menaikkan keyakinan pada yang kurang percaya diri dan menurunkannya pada yang terlalu percaya diri — sehingga mengoreksi [[trust-calibration|salah kalibrasi]] ke kedua arah alih-alih menggeser semua orang ke satu arah (itulah sebabnya efek bertanda/berarah nol). Ini memperkuat penjelasan "pengalaman bukan keyakinan" di atas dan menunjukkan *pelatihan metakognitif minimum yang layak*: prediksi + umpan balik segera yang spesifik tugas.

- **Prompt refleksi singkat mempertajam pemantauan selama keputusan berbantuan AI.** [[ren-metacognitive-awareness-genai-reliance-2026|Ren (2026)]] menambahkan tiga prompt refleksi sebelum memfinalkan jawaban dalam eksperimen tiga kondisi dengan 342 mahasiswa sarjana: penerimaan atas saran ChatGPT yang salah turun dari 62.4% menjadi 39.7% (*OR* = 0.40) dan kalibrasi kesadaran naik (0.59 vs. 0.41), sementara akurasi rekomendasi dan keselarasan dengan saran yang benar tetap tinggi. Refleksi membuat ketergantungan lebih diskriminatif alih-alih seragam defensif, yang mendukung memperlakukan ketergantungan sebagai masalah pemantauan alih-alih pertanyaan tentang seberapa banyak AI dipakai.

- **Saranglah prompting di dalam siklus metakognitif.** Kerangka IDEA mengurutkan penggunaan GenAI sebagai Intent, Deconstruction, Expression, dan Adaptation, menjadikan prompting satu langkah dalam perencanaan dan pemantauan alih-alih keterampilan tunggal; siswa yang diajari kerangka ini menghasilkan prompt berkualitas lebih tinggi daripada teman sebaya yang diajari prompting Role–Task–Context–Format di kelima kategori tugas ([[idea-framework-metacognitive-genai-2026|Wang dkk., 2026]]).

## Implikasi bagi Desain Alat

1. **Pertahankan "gesekan" berpikir:** Jika AI yang menulis refleksinya, siswa tidak membangun keterampilan metakognitif. Asisten jurnal seharusnya menyediakan scaffold, bukan mengarang.
2. **Modelkan bahasa metakognitif:** Mata kuliah berbasis contoh berhasil sebagian karena ia memaparkan siswa pada monolog metakognitif para model yang mahir.
3. **Pisahkan dukungan motivasi dari dukungan keterampilan:** Pengembangan keterampilan metakognitif (terstruktur oleh mata kuliah) dan peningkatan produktivitas (berbantuan AI) mungkin menuntut strategi desain yang berbeda.
4. **Namai sasarannya sebagai onloading, dan jatahkan bantuannya.** [[fan-metacognitive-offloading-sync-model-2026]] memisahkan pengalihan kognitif, yang tetap berada di bawah kendali metakognitif, dari pengalihan *metakognitif*, ketika perencanaan, pemantauan, evaluasi, dan kalibrasi pertimbangan diserahkan. Sasaran desain mereka adalah metakognitif onloading: scaffold yang membuat siswa, bukan AI, menetapkan tujuan, mengantisipasi kesulitan, dan menilai strategi, ditempatkan di dalam sebuah prompt, lintas sebuah tugas, dan memudar seiring waktu. Aturan bantuannya adalah minimum-yang-perlu: petunjuk atau pertanyaan diagnostik lebih dulu, dengan bantuan lebih dalam terbuka hanya setelah siswa bertanya, memantau, atau memilih arah. Makalah itu bersifat konseptual dan para penulisnya mencatat bahwa belum ada ukuran tervalidasi bagi kedua konstruk tersebut.

AI dapat mengubah **ambang metakognitif** untuk memutuskan bahwa seseorang tahu cukup untuk menjawab: [[ai-advice-suppresses-ikt-suspension-2026|Marcoccia dkk. (2026)]] menemukan bahwa akses semata pada saran AI menekan kesediaan orang untuk menangguhkan penilaian dalam ketidakpastian, bahkan dengan saran yang salah dan insentif akurasi — efek yang bertahan pada luaran AI yang tidak diminta dan imbalan uang.

[[agentic-ai|AI agentik]] proaktif dapat menggusur loop metakognitif siswa sendiri: [[agentic-ai-pedagogical-best-practice-2026|Woollaston dkk. (2026)]] berargumen bahwa ketika agen mengambil lebih dulu, memprakarsai, dan mengoreksi diri, perencanaan, pemantauan, dan evaluasi agen menggantikan milik siswa, menghapus [[retrieval-spacing-interleaving|latihan pengambilan]] dan pemantauan diri yang menjadi sandaran [[desirable-difficulties|kesulitan yang diinginkan]] dan pelatihan metakognitif.

- **[[pedagogy]] berbasis kesalahan sebagai pelatihan metakognitif:** [[pedagogy-ai-mistakes|Hosseini (2026)]] menunjukkan bahwa dengan sengaja memaparkan siswa pada kesalahan hasil AI dalam mata kuliah desain basis data mengaktifkan pemantauan metakognitif — siswa memeriksa luaran, mengidentifikasi kesalahan, dan merevisi desain alih-alih menerima luaran AI apa adanya. [[self-report-measures|Dilaporkan sendiri]], [[ai-literacy|literasi AI]] berkorelasi lemah dan negatif dengan kompetensi objektif (*r*=−0.39), celah kalibrasi yang hendak dipersempit oleh siklus kritik-perbaikan.
- **[[productive-failure|Kegagalan produktif]] melibatkan pemantauan metakognitif.** [[kim-ai-productive-failure-adult-2026|Kim dkk. (2026)]] menunjukkan pembelajaran berbasis kegagalan produktif mengaktifkan refleksi atas percobaan sendiri; tugas [[lukesova-clue-before-correction-2026|petunjuk-sebelum-koreksi]] menuntut siswa mendiagnosis dan mengoreksi kesalahannya sendiri — aktivitas metakognitif ketika AI memberi petunjuk alih-alih jawaban.
- **Regulasi diri meredam kerugian pengalihan tetapi tidak dapat membatalkannya.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] menunjukkan bahwa regulasi metakognitif (menulis mandiri) melemahkan asosiasi negatif antara [[cognitive-offloading|pengalihan kognitif]] mendalam dan luaran mandiri tanpa AI dalam menulis berbantuan GenAI (interaksi B = 0.22), tetapi tidak menghapusnya — kondisi dukungan terbatas yang memasangkan batas delegasi dengan refleksi wajib tentang bagaimana saran AI diterima/ditolak menghasilkan kinerja mandiri terkuat.
- **Kedalaman mencari penjelasan memprediksi kualitas tugas, bukan ingatan.** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]] menunjukkan prompt pencarian penjelasan (kedalaman) dalam interaksi LLM memprediksi kualitas tugas tetapi tidak ingatan segera, menafsirkan disosiasi itu melalui elaborasi (pemahaman) vs. latihan pengambilan (konsolidasi) — dan menyarankan pencarian penjelasan berkorelasi dengan pemantauan metakognitif, meskipun tuntutan pengambilan harus ditambahkan untuk retensi yang tahan lama.

- **Metakognisi yang dilaporkan sendiri adalah proksi lemah bagi regulasi *bersama* LLM.** [[clerc-ai-literacy-workshop-llm-regulation-2026|Clerc dkk. (2026)]] memberi 116 siswa [[k-12|sekolah menengah pertama]] lokakarya literasi AI dua jam lalu mengukur interaksi LLM mereka selama soal sains: siswa terlatih lebih jarang menerima prompt yang kurang spesifik (51.5% vs. 66.7%), jauh lebih sering mengajukan pertanyaan lanjutan setelah respons yang lemah (59.2% vs. 27.9%, *d* = 0.80) dan menilai kebenaran jawaban lebih sensitif terhadap kualitas prompt (interaksi OR = 2.52). Baik skala kesadaran metakognitif umum (Jr. MAI) maupun laporan diri GenAI tidak memprediksi perilaku itu atau kinerja akhir (*r* = .04 dan *r* = .01) — pemantauan dan kendali selama penggunaan [[generative-ai|AI generatif]] bersifat spesifik tugas, dan perilaku yang teramati membawa lebih banyak informasi daripada instrumen laporan diri yang dibuat untuk menangkapnya.

- **Penilaian otomatis menjangkau fase kinerja, bukan perencanaan yang mendahuluinya.** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen dan Liu (2026)]] memberi 46 mahasiswa juru bahasa 14 pekan penilaian otomatis mingguan dengan skor yang dikembalikan, kesalahan yang ditandai, dan rendisi rujukan: kelompok otomatis memperoleh lebih banyak secara keseluruhan (*d* = 1.03), tetapi hanya pemantauan selama latihan yang berkorelasi dengan keuntungan skor (*r* = 0.42) sementara perencanaan prabelajar berada dekat titik tengah skala (M = 3.01). Evaluasi dan refleksi membawa rata-rata tertinggi kedua (3.87 dari 5) namun menunjukkan kaitan nyaris nol dengan keuntungan (*r* = 0.10), sehingga skor refleksi yang tinggi tidak seharusnya dibaca sebagai refleksi yang produktif.
- **Literasi verifikasi berbuah hanya melalui regulasi diri metakognitif.** [[davor-ai-supported-learning-higher-order-outcomes-2026|Davor, Larbi dan Boateng (2026)]] menyurvei 533 mahasiswa universitas dan menemukan bahwa literasi verifikasi AI tidak memiliki asosiasi langsung dengan berpikir kritis atau pemecahan masalah teknis; ia hanya penting secara tidak langsung, melalui regulasi diri metakognitif (pola mediasi penuh). Kecenderungan [[cognitive-offloading|pengalihan kognitif]] berjalan ke arah sebaliknya, memprediksi regulasi diri lebih rendah (-.294) bersama berpikir kritis lebih rendah (-.240) dan pemecahan masalah lebih rendah (-.312).
- **Refleksi naik seiring akses AI, dan ia memberi makan penalaran alih-alih skor ujian.** [[melanou-genai-learning-dynamics-longitudinal-2026|Melanou, Beege dan Kimmig (2026)]] mengikuti tiga kelas (N = 87) sepanjang mata kuliah sembilan pekan, dengan pengukuran di tiga titik. Pengetahuan membaik pada semua kondisi tanpa keunggulan bagi salah satu kondisi AI dan tanpa efek Matthew (BF01 = 8.70), tetapi penggunaan reflektif (memeriksa sumber dan memverifikasi luaran AI sebelum mengadopsinya) jauh lebih tinggi pada kondisi AI daripada kelompok kontrol (M = 3.72 vs. 2.82, F(1, 40) = 20.21, p < 0.001) dan memprediksi berpikir kritis (β = 0.43, p < 0.001, R² = 0.183) sementara tidak memprediksi keuntungan pengetahuan. Refleksi muncul dari akses alat semata alih-alih dari scaffolding, dan karena manfaatnya mendarat di penalaran, tes pengetahuan tidak akan merekam manfaat metakognitif mata kuliah berbantuan AI.
- **Di dalam instrumen laporan diri metakognitif, kesadaran memprediksi lebih baik daripada sisanya.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai dan Alshahri (2026)]] memvalidasi ukuran 45 butir tentang pembelajaran STEM berbantuan AI dengan 649 siswa menengah Arab Saudi (CFI = 0.983, RMSEA = 0.019; ω subskala = 0.888–0.905) dan memakainya untuk memeringkat komponennya. Empat dimensi menjelaskan 68% varian skor pembelajaran mandiri, dengan kesadaran metakognitif berbasis AI paling kuat (β = 0.38, p < 0.001), transfer kognitif dan adaptabilitas berikutnya (β = 0.29, p = 0.008), dan penalaran kritis-kreatif AI-STEM tidak signifikan (β = 0.14, p = 0.135). Kesadaran adalah komponen yang membawa kinerja adaptif, para penulis menyarankan pelaporan subskala secara terpisah alih-alih satu skor global, dan mereka menyisakan penalaran tingkat tinggi untuk tugas kualitas penalaran; ukuran itu tetap merupakan laporan diri, sehingga seperti studi lokakarya di atas ia menangkap kapabilitas yang dipersepsikan alih-alih penggunaan strategi yang teramati.
- **Pemantauan penilai itu sendiri juga kerja metakognitif.** [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl dan Leuders (2026)]] berargumen bahwa inferensi diagnostik hasil AI bukan bukti mentah melainkan interpretasi yang sudah dibuat, sehingga guru harus mengintegrasikannya dengan observasi mereka sendiri dalam proses yang mereka sebut *meta-diagnosis*, dengan memutuskan secara sengaja apakah menerima, menolak, atau memodifikasinya. Itu menempatkan loop metakognitif kedua di samping loop siswa: bukan hanya bagaimana siswa meregulasi pemikiran dengan AI, tetapi bagaimana guru mengevaluasi apa yang diklaim sistem tentang pemikiran itu.

## Miskonsepsi Umum

- **"Bantuan AI membiarkan kemampuan dasarnya utuh."** Siswa yang memakai bantuan esai AI **83% tidak mampu mengingat kutipan dari esai mereka sendiri, berbanding 11% pada pengguna non-AI**, yang menunjukkan **mereka tidak bergulat dengan konten selama produksi**. Proses produksi adalah tempat keterlibatan terjadi, dan melewatinya tampak belakangan.
- **"Pengalihan menurunkan segala hal."** Biayanya tampak **terbatas alih-alih global**: pengalihan menurunkan **keterampilan spesifik yang dilatih, bukan kemampuan umum domain yang mendasarinya**, dan muncul pada uji transfer **dengan**-sesuatu. Lokalisasinya penting, karena ia menunjukkan apa yang harus dilindungi alih-alih memperingatkan tentang kemunduran umum.
- **"Kemampuan memproduksi menyiratkan kemampuan mengingat."** Selisih ingatan 83% versus 11% adalah kontracontoh langsungnya: luaran diproduksi pada kedua kondisi dan jejak memorinya berbeda jauh.

## Konsep terkait

- [[pedagogical-patterns]] — Langkah refleksi yang dibangun oleh urutan-urutan ini
- [[learners]] — Siswa: payung bagi konsep-konsep sisi siswa
- [[self-regulated-learning]]
- [[self-assessment]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[agentic-ai]]
- [[formative-assessment]]
- [[ai-literacy]]
- [[retrieval-spacing-interleaving]] — pertimbangan belajar dan ilusi kelancaran yang dikoreksi oleh latihan pengambilan
- [[cognitive-surrender]]

## Artikel terkait
- [[clerc-ai-literacy-workshop-llm-regulation-2026]] — lokakarya literasi AI dua jam menggeser regulasi interaksi LLM siswa sekolah menengah pertama, berbeda dengan metakognisi yang mereka laporkan sendiri (Clerc dkk. 2026)
- [[student-ai-interaction-consecutive-interpreting-2026]] — Interaksi siswa-AI dalam penerjemahan lisan konsekutif berbantuan komputer
- [[du-yuan-epistemic-dependence-2026]] — Ketergantungan epistemik dalam pembelajaran termediasi AI (Du & Yuan 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Apa yang ditanyakan siswa itu penting: kedalaman interaksi LLM, kualitas tugas, dan ingatan segera (Tsiligkiris 2026)
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Pengalihan kognitif peka lapisan dalam menulis berbantuan GenAI (Chen 2026)
- [[viberg-efficiency-effectiveness-srl-llm-help-seeking-2026]] — Pencarian bantuan termediasi LLM dalam STEM: berlapis, instrumental, dan terverifikasi
- [[cui-motivation-roles-metacognitive-genai-2026]] — Motivasi dan peran dalam keterlibatan metakognitif GenAI
- [[metacognitive-training-optimal-cognitive-offloading-2026]] — Pelatihan metakognitif memfasilitasi pengalihan kognitif yang optimal (Ngai & Gilbert 2026)
- [[cognitive-offloading-metacognitive-review-2026]] — Wawasan meta-kognitif tentang pengalihan kognitif: mekanisme, intervensi, dan implikasi pendidikan (Guo & Ye 2026)
- [[idea-framework-metacognitive-genai-2026]] — Kerangka IDEA untuk penggunaan GenAI yang teregulasi secara metakognitif
- [[haiml-human-centered-ai-metacognitive-model-2026]] — HAIML: model belajar metakognitif AI berpusat manusia (agensi & pembelajaran reflektif)
- [[metacognitively-discordant-completion-genai-2026]] — Penyelesaian yang diskordan secara metakognitif dan pelolosan sadar atas ketidakpahaman
- [[ai-metacognition-stem-review]] — Alat AI yang menyediakan scaffold metakognisi dalam STEM
- [[ai-making-us-stupid]] — Apakah AI membuat kita bodoh? kritik atas pengalihan kognitif
- [[stanford-evidence-base-ai-k12-2026]] — AI serbaguna menekan metakognisi dengan menyelesaikan penalaran
- [[ai-advice-suppresses-ikt-suspension-2026]] — Saran AI menekan kesediaan mengatakan "saya tidak tahu", bahkan dengan saran salah dan insentif akurasi
- [[agentic-ai-pedagogical-best-practice-2026]] — AI agentik dan praktik pedagogis terbaik: ketegangan antara otomatisasi dan pembelajaran
- [[cognitive-offloading-speedup-illusion]] — Pengalihan kognitif dan ilusi percepatan dalam interaksi manusia-AI
- [[lodge-loble-cognitive-offloading-2026]] — AI, pengalihan kognitif, dan implikasinya bagi pendidikan (Lodge & Loble 2026)
- [[pedagogy-ai-mistakes]] — Pedagogi Kesalahan AI: Menumbuhkan Berpikir Tingkat Tinggi (Hosseini 2026)
- [[kim-ai-productive-failure-adult-2026]] — Merancang Sistem AI untuk Mendukung Pembelajaran Berbasis Kegagalan Produktif
- [[lukesova-clue-before-correction-2026]] — Petunjuk Sebelum Koreksi: ChatGPT untuk Pembelajaran Bahasa Mandiri
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — Refleksi atas proses prompting dan perkembangan kepengarangan dalam Siklus Prompt Literacy (Miles, Haber-Curran & Arar 2026)
- [[ren-metacognitive-awareness-genai-reliance-2026]] — Prompt refleksi memangkas penerimaan saran AI yang salah dan memperbaiki kalibrasi kesadaran (Ren 2026)
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Penilaian otomatis memperkuat pemantauan tetapi bukan perencanaan, dan refleksi yang dilaporkan sendiri tetap tidak produktif (Chen & Liu 2026)
- [[davor-ai-supported-learning-higher-order-outcomes-2026]] — Literasi verifikasi yang hanya bekerja melalui regulasi diri metakognitif (Davor, Larbi & Boateng 2026)
- [[iqbal-human-genai-support-essay-revision-2026]] — Dukungan eksternal, bukan akurasi pertimbangan metakognitif, yang mengarahkan pilihan strategi revisi (Iqbal dkk. 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Keuntungan selektif: pengetahuan metakognitif naik sementara perencanaan dan pemantauan tidak (Wang dkk. 2026)
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Penggunaan reflektif naik seiring akses AI dan memprediksi berpikir kritis, bukan keuntungan pengetahuan (Melanou, Beege & Kimmig 2026)
- [[alatoai-ai-learning-environments-self-regulation-2026]] — Kesadaran metakognitif sebagai prediktor terkuat pembelajaran STEM adaptif (Alatoai & Alshahri 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — Dari diagnosis ke meta-diagnosis: guru menilai inferensi hasil AI (Hoppe, Loibl & Leuders 2026)
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Pertanyaan terbuka menuju ketergantungan yang menopang keterampilan dalam keterlibatan AI reflektif
- [[dang-human-ai-collaboration-competency-2026]] — Metakognisi, bukan pedagogi, sebagai mekanisme agensi siswa dalam kolaborasi manusia-AI (Dang, Hong, Doyle & Nguyen 2026)
- [[metacognitive-ownership-human-ai-regulation-2026]] — Kepemilikan metakognitif: konstruk untuk tata kelola siswa atas standar, pertimbangan, dan tindakan

- [[metacognitive-processes-genai-interaction-logs-2026]] — Log dan think-aloud menangkap proses metakognitif yang berbeda dalam pembelajaran berbantuan GenAI
- [[ai-cognitive-partner-reflective-thought-2026]] — empat praktik dan sebelas proses berpikir reflektif ketika siswa memperlakukan AI sebagai mitra kognitif
- [[karaki-think-aloud-ethical-genai-2026]] — Think Aloud membuat konstruksi prompt, verifikasi, dan penalaran etis terlihat, tetapi evaluasi kritis tetap di permukaan; bukan solusi tunggal
- [[metacognitive-training-ai-socratic-scaffolding-preservice-2026]] — Pelatihan metakognitif dan scaffolding Socratic berbasis AI dalam praktik reflektif guru prapelatihan: desain eksperimental dua studi
- [[braun-cognitive-dormancy-ai-affordances-2026]] — Dormansi kognitif: penjelasan eksperimental atas keterlibatan metakognitif yang tertangguhkan dan ketidakteraturan yang meningkat (Braun 2026)
- [[ai-metacognition-three-level-meta-analysis-2026]] — Meta-analisis tiga tingkat: g terkumpul = 0.624, turun ke tidak signifikan untuk pemantauan yang dinilai akurasi (Li dkk. 2026)
- [[fan-metacognitive-offloading-sync-model-2026]] — Model SYNC: pengalihan vs. onloading metakognitif, dan kinerja tugas yang terlepas dari pembelajaran yang tahan lama (Fan dkk. 2026)
