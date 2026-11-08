---
title: "Agen Pedagogis"
created: "2026-08-08T11:47:01-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
updated: "2026-11-08T13:51:25-05:00"
translation_of: "concepts/pedagogical-agent"
source_updated: "2026-11-04T16:51:25-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis**: Agen [[pedagogy|pedagogis]] adalah antarmuka percakapan berbasis AI yang tertanam dalam lingkungan belajar dan menggunakan strategi pedagogis (menggali, memberi tahu, memberi perancah) untuk mendukung [[student-engagement|keterlibatan siswa]], refleksi, dan metakognisi. Rancangannya beragam, dari penyedia informasi sederhana hingga mitra dialog interaktif yang beradaptasi terhadap keadaan siswa.

## Pertanyaan untuk Dipertimbangkan

- Pikirkan saat ketika chatbot atau tutor memberi Anda jawaban sempurna yang tidak membuat Anda lebih paham. Apa yang membuat AI 'mengajar' alih-alih sekadar 'memecahkan'—dan mengapa skor tolok ukur bisa gagal menangkap perbedaan itu?
- Halaman ini menemukan bahwa skor 'pemecahan' dan skor 'pedagogi' dalam tutoring hanya berkorelasi lemah antarmodel. Apa yang seharusnya itu katakan kepada Anda tentang mengevaluasi tutor AI berdasarkan kemampuannya menjawab pertanyaan?
- Sebagian desain memberi AI peran yang berbeda—Guru, Teman Sekelas, Mentor—dan bahkan menjaga orang tua tetap terlibat secara terpusat (seperti pada ParaTutor). Dalam pengalaman Anda, apakah memberi agen peran yang jelas mengubah cara [[learners]] berinteraksi dengannya?
- Siswa nyata sering 'melewati' pembingkaian pedagogis chatbot ketika tujuan agen bertentangan dengan tujuan siswa itu sendiri. Mengapa seorang siswa bisa secara rasional mengabaikan perancah yang baik, dan apa implikasinya bagi asumsi 'kalau kita membangunnya, mereka akan terlibat'?
- Apakah Anda lebih suka belajar dari AI yang memberi tahu Anda berbagai hal, AI yang mengajukan pertanyaan, atau AI yang memediasi diskusi kelompok? Bagaimana preferensi Anda membentuk pandangan Anda tentang apa yang seharusnya menjadi 'agen pedagogis'?
- Dari penyedia info sederhana hingga armada agen khusus yang mengorkestrasi seluruh mata kuliah—menurut Anda di mana nilai (dan risiko) tutoring AI percakapan sebenarnya berada?

## Pendahuluan

Agen pedagogis adalah komponen AI interaktif dalam sistem pembelajaran yang melibatkan siswa melalui dialog, pertanyaan, atau prompt untuk mendukung proses kognitif dan [[metacognition|metakognitif]]. Berbeda dari [[visualization|dasbor]] pasif atau umpan balik statis, agen pedagogis menggunakan strategi tutoring berbasis bukti — seperti menggali [[assessment|penilaian]] diri siswa sebelum memberikan [[feedback]], atau [[scaffolding]] [[problem-solving]] melalui dialog Sokratik. Payung istilahnya kini mencakup segala hal, dari satu [[intelligent-tutoring|tutor cerdas]] percakapan hingga armada [[agentic-ai|agen]] yang terspesialisasi peran yang mengajar, membimbing, memfasilitasi kolaborasi, dan bahkan mengorkestrasi pembuatan mata kuliah, semuanya berlandaskan puluhan tahun [[research-methods-aied|penelitian]] sistem tutoring cerdas.
- **Agen yang perannya adalah regulasi, bukan penjelasan.** Chen et al. (2026) membangun SSRLAgent untuk mendiagnosis keadaan regulasi bersama sebuah kelompok dan memberi prompt yang sesuai, serta menahan agen pendukung konten tetap konstan di kedua kondisi ([[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen et al., 2026]]). Karena kedua lengan memiliki agen dan platform terstruktur, keuntungannya melekat pada [[adaptive-learning|adaptivitas]] prompt regulasi, bukan pada kehadiran agen percakapan.

## Bagaimana agen pedagogis dikaji dalam basis pengetahuan

- **Sebaya versus tutor adalah peran yang dihasilkan interaksi, dan dinilai dari perilaku sosial.** [[lin-ai-peer-collaborative-math-learning-2026|Lin et al. (2026)]] meminta tujuh peneliti ahli menyelesaikan persamaan kuadrat bersama agen adaptif yang membawa persona Big Five dan modulasi motivasional, lalu mewawancarai mereka. Peserta memaknai agen sebagai sebaya ketika agen menciptakan ruang tanpa penghakiman, bernalar secara tentatif, menunjukkan ketidaksempurnaan yang wajar, dan menghormati tempo mereka, dan sebagai tutor ketika agen menyetujui secara buta, mengungkap jawaban lebih awal, atau menetapkan arah perjalanan — pergeseran yang didorong kendali, bukan kebenaran. Seorang peserta menganggap kesalahan agen menggemaskan sementara peserta lain menganggapnya tidak berguna, jadi kemiripan dengan sebaya dan kegunaan sebagai sebaya berbeda, dan sejarah bersama yang direkayasa ("klaim bahwa saya pernah mengatakan hal-hal yang tidak saya katakan") merusak kepercayaan lebih cepat daripada jawaban salah mana pun.
**Desain dan arsitektur agen percakapan.** Benang merah yang berulang adalah bagaimana agen distrukturkan, bukan hanya model apa yang menggerakkannya. [[conversational-ai-tutors-framework|Kerangka tutor AI percakapan]] berargumen bahwa [[ai-technologies|teknologi]] ITS yang terbukti — [[knowledge-tracing]], deteksi afek, [[student-modeling|pemodelan siswa]] — harus menjadi jangkar tutor generatif, mempertahankan tulang punggung diagnostik sementara [[generative-ai]] menyediakan dialog yang fleksibel. Desain multiagen mendorong ini lebih jauh: [[mooc-to-maic|MAIC]] menggantikan "satu video untuk N siswa" pada [[online-teaching-and-learning|MOOC]] dengan kelas yang digerakkan [[llm]] yang terdiri dari agen Guru, Asisten, Teman Sekelas, dan Analis untuk menghadirkan [[personalized-learning|pembelajaran yang dipersonalisasi]] dalam skala besar, sementara [[lecturaagents-multi-agent-teaching|LecturaAgents]] menambahkan ProfessorAgent yang [[embodied-learning|berwujud]] dengan algoritma TASA yang menyelaraskan tindakan [[teacher-role|mengajar]] yang terlihat (tulisan tangan, menyorot) dengan profil siswa. Bahkan tutoring orang tua–anak menjadi masalah dua agen dalam [[paratutor-parent-child-tutoring|ParaTutor]], tempat perancah yang terpisah peran menjaga orang tua tetap terlibat secara terpusat alih-alih membiarkan chatbot generik menggantikannya. Logika berbasis peran yang sama muncul dalam [[instructional-agents-multi-agent-course-gen|Instructional Agents]], tempat agen Fakultas Pengajar, Desainer, Asisten Pengajar, dan Ketua Program berkolaborasi melintasi ADDIE untuk menghasilkan materi mata kuliah.

Penggunaan pelengkap agen berbasis peran menyasar praktik [[teacher-education|guru]] alih-alih pembelajaran siswa: [[educasim-cs1-instructional-practice|Mohne et al. (2026)]] memadukan persona siswa yang pedagogis, memori yang berlandaskan materi mata kuliah aktual, dan orakel pembicara LLM-sebagai-hakim sehingga instruktur pemula berlatih sesi kelompok kecil — 254 sesi opsional dengan rata-rata sekitar 16 menit per sesi, dengan biaya sekitar \$0.05–\$0.10 per sesi.

**Perilaku mengajar versus memecahkan.** Temuan empiris sentral adalah bahwa produksi jawaban bukanlah dukungan belajar. [[measuring-llm-tutors-teach-vs-solve|Mengukur apakah tutor LLM mengajar atau memecahkan]] menunjukkan skor pemecahan dan pedagogi pada tolok ukur tutoring hanya berkorelasi lemah (r = 0.421 pada delapan model), dengan argumen bahwa tolok ukur harus melaporkan kriteria berorientasi pedagogi — pertanyaan pemandu, petunjuk yang terkalibrasi, perancah yang tidak membocorkan jawaban — secara terpisah. Ini selaras dengan bukti [[stanford-evidence-base-ai-k12-2026|AI khusus tutoring vs AI umum]]: tutor yang dirancang pedagogis dengan [[guardrails]] memitigasi penurunan skor ujian dan penalaran yang tertekan yang dihasilkan chatbot serbaguna mentah, mempertahankan [[desirable-difficulties|kesulitan yang diinginkan]] dan pergulatan produktif alih-alih memotongnya. Namun tolok ukur dapat melebih-lebihkan seberapa baik tutor yang bahkan sudah diberi perancah bekerja di dunia nyata. [[rethinking-scaffolding-llm-tutors|Memikirkan ulang perancah pada tutor LLM]] menemukan bahwa siswa nyata sering melewati pembingkaian pedagogis chatbot, respons rasional terhadap ketidakcocokan antara tujuan agen dan tujuan siswa sendiri — sehingga penerimaan harus dievaluasi, bukan diasumsikan.

**Peran dalam tutoring dan kolaborasi.** Agen semakin diposisikan bukan sebagai pemberi jawaban melainkan sebagai fasilitator dan mediator. [[niari-ai-pedagogical-mediator-collaborative-learning|Kerangka mediator pedagogis Niari]] memikirkan ulang AI dalam [[collaborative-learning|pembelajaran kolaboratif]] sebagai mediator interaksional, epistemik, dan regulatif — memberi perancah partisipasi dan [[regulation]] bersama tanpa menggusur guru atau [[agency|agensi siswa]]. Secara konkret, [[golrang-propact-pair-programming-2026|tutoring AI kolaboratif (ProPACT)]] memperlakukan kolaborasi itu sendiri sebagai objek pengajaran, memperkirakan keruntuhan diadik hingga 30 detik ke depan dan memberikan perancah yang minim gangguan yang mempertahankan [[metacognition]]. [[embodied-inquiry-ai-facilitator-physics-2026|Inkuiri berwujud dengan AI sebagai fasilitator]] menunjukkan AI dapat melengkapi pembangunan model secara langsung dengan memfasilitasi penerapan model yang telah dibangun, sementara [[robot-assisted-language-learning-meta-analysis-2026|meta-analisis pembelajaran bahasa berbantuan robot]] menemukan bahwa hasilnya mengikuti bagaimana agen robotik diposisikan dalam pengajaran (interaksi berbasis kelompok) lebih daripada kecanggihan teknisnya. Apakah *peran* yang dimainkan agen sudah cukup, atau apakah agen juga harus *menyesuaikan perilakunya*, dipertanyakan oleh [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]]: studi "book talk" di [[k-12|sekolah dasar]] menemukan bahwa pendamping "teman sekelas" yang tetap mempertahankan interaksi lebih lama namun menekan agensi siswa dan mencapai "[[affective-computing|plafon afektif]]" (refleksi emosional/berorientasi masa depan yang lemah), dengan argumen bahwa *pelabelan* peran harus dipasangkan dengan logika interaksi yang *adaptif terhadap peran* alih-alih desain peran tunggal yang monolitik.

[[ethics-training-agents-group-ethics-discussion-2026|Agen Pelatihan Etika (Seo et al., 2026)]] menunjukkan apa yang terjadi ketika agen pedagogis diminta memoderasi alih-alih mengajar: fasilitator LLM yang menangani giliran bicara (penumpukan giliran dengan jendela angkat tangan 15 detik), manajemen waktu (memajukan tahap secara otomatis ke penutup setelah 9 menit), dan peringkasan batch inkremental mengurangi beban kognitif peserta dan memberi mereka kesan bahwa diskusi "sesuai jalur" — seorang peserta membandingkannya secara positif dengan ChatGPT, yang "sering terasa tidak terorganisasi atau membuat sulit melihat perkembangan gagasan." Studi yang sama menyingkap plafon agen berbasis persona: tiga agen berorientasi [[ethics|etis]] yang berbeda dinilai secara signifikan di bawah rekan manusia pada kontribusi, keberagaman, dan pengaruh (Kruskal-Wallis p < .001), dan peserta meminta keluaran yang berorientasi proses ("bagaimana agen bernalar") alih-alih berorientasi kesimpulan.

**Di mana agen percakapan digunakan (dan tidak digunakan) — gambaran tinjauan payung.** [[conversational-ai-agents-umbrella-review-2026|Tinjauan payung agen AI percakapan]] (Ganguly et al. 2025, 34 tinjauan) mengkuantifikasi pemanfaatan CAI: dukungan pengajaran dan pembelajaran (97.1% tinjauan), dukungan psikologis dan [[motivation|motivasional]] (91.2%), serta pengembangan metakognitif dan personal (88.2%) memimpin, sementara dukungan administratif (50%), penelitian dan manajemen informasi (52.9%), serta dukungan kesehatan/medis (41.2%) tertinggal. Tinjauan itu juga menandai bahwa penelitian [[conversational-ai|CAI]] kekurangan panduan desain ujung-ke-ujung, metode [[usability-research|kegunaan]] yang khas CAI, dan strategi orkestrasi kelas yang konkret untuk peran guru — yang menegaskan bahwa desain agen pedagogis harus berlandaskan HCI, berbasis bukti, dan peka terhadap [[ai-literacy]].([[conversational-ai-agents-umbrella-review-2026]])

**Orientasi peran adalah variabel desain, bukan pilihan gaya.** [[wang-teacher-student-centered-agents-physics-2026|Perbandingan agen fisika]] (Wang et al. 2026, 59 siswa) mengisolasi peran yang ditentukan prompt sambil menahan model, platform, dan suhu tetap: agen berpusat guru yang berlandaskan sumber buku teks terbatas dan menjawab dari perspektif instruktur, versus agen berpusat siswa yang dikonfigurasi dengan pengetahuan tentang pemahaman siswa dan diskrip untuk mendiagnosis miskonsepsi, menamai konsep, dan [[transfer-of-learning|mentransfer]] ke kasus analog. Peran berpusat siswa menang pada setiap hasil yang diukur — performa pascates, beban kognitif ekstraneus yang lebih rendah dan beban germane yang lebih tinggi, pengalaman flow, dan empati yang dipersepsikan — meskipun agen berpusat guru adalah yang dioptimalkan untuk akurasi dan kesetiaan pada buku teks. Ini menjadikan *peran dan pola interaksi* parameter desain kelas satu bersama [[prompt-engineering|prompt]] dan pilihan model, dan menunjukkan bahwa empati dapat direkayasa dari struktur percakapan alih-alih dari model yang dilatih berbeda ([[affective-computing]]).


**Niat penulis tidak menjamin pedagogi yang terwujud.** Ketika 27 guru sekolah menengah mengonfigurasi alat penulisan chatbot untuk guru, evaluasi atas 108 penilaian kriteria tingkat bot menemukan bahwa respons yang dihasilkan jauh lebih selaras dengan responsivitas (88.9%) dan persona (81.5%) daripada dengan aturan (70.4%) atau tujuan yang dinyatakan (59.3%), yang oleh penulis dibingkai melalui bentuk-bentuk pedagogis dari Gulf of Execution dan Gulf of Evaluation Norman — kontrol yang dapat dikonfigurasi saja tidak membuat niat instruksional guru terlihat dalam perilaku bot ([[teachers-configure-educational-chatbots-2026|Riahi et al. (2026)]]).

**Agen dalam lingkungan imersif dan realitas diperluas.** [[aclime-pedagogical-agents-extended-reality-2026|Ross dan Kaspar (2026)]] memperluas konsep ke [[virtual-and-augmented-reality|realitas diperluas]] (AR, virtualitas tertambah, dan VR) dengan ACLIME, kerangka konseptual yang — tidak seperti CAMIL, CATLM-VR, dan TICOL — menempatkan agen di dalam model. Kerangka itu menamai dua mode interaksi yang diambil dari literatur: tutor, yang menawarkan bimbingan, dorongan, pertanyaan reflektif, dan penjelasan, serta mitra bermain peran, yang menempati peran tertentu di dalam skenario seperti penduduk lokal dalam kunjungan lapangan perubahan iklim atau pihak lawan bernegosiasi dalam pelatihan korporat. Tubuh agen (hanya kepala hingga seluruh tubuh) dan perilakunya diperlakukan sebagai permukaan desain: realisme visual versus perilaku, kendali AI yang fleksibel versus skrip berbasis aturan yang tetap, ucapan sintetis versus rekaman, dan kanal nonverbal termasuk [[sensor-and-gaze-analytics|tatapan]], gestur, dan proksemik. Imersi dan interaktivitas berbasis tubuh diargumentasikan melipatgandakan isyarat sosial di balik [[community-of-inquiry|kehadiran sosial]] — realisme perilaku, bukan realisme visual, diusulkan sebagai prediktor penentu — sementara tubuh virtual siswa sendiri menambahkan dimensi [[embodied-learning|perwujudan]] (kepemilikan tubuh, agensi tubuh sendiri virtual, lokasi diri) dan efek proteus. Trade-off eksplisit kerangka ini bersifat kognitif: imersi dan kehadiran agen semata dapat menaikkan beban kognitif meskipun interaksi sosial dengan agen menurunkannya melalui efek memori kerja kolektif, dan lapisan temporal (familiarisasi, pendewasaan relasi manusia-agen, penurunan kebaruan, berkembangnya cybersickness) ditambahkan ke variabel desain yang biasa. Statusnya sengaja bersifat sementara: hampir belum ada kerja empiris yang menguji agen pedagogis dalam media imersif, dan [[learning-gains|hasil belajar]] jangka panjang serta karakteristik siswa berada di luar model.

Permukaan agen adalah sumbu desain yang terpisah dari pedagoginya. [[ai-avatars-and-synthetic-instructors]] memperlakukan isyarat identitas avatar, kehadiran, dan efek kepercayaan pada wajah serta suaranya sebagai hasil yang layak diukur tersendiri, terlepas dari apa yang dilakukan perancah agen itu.

**Evaluasi dan tolok ukur.** Mengukur agen pedagogis menuntut pengujian pedagogi, bukan konten. [[teaching-monster-pck-benchmark-2026|The Teaching Monster Challenge]] menilai Pengetahuan Konten Pedagogis dengan meminta agen menyesuaikan pelajaran pada persona siswa tertentu, dan menemukan sistem yang kuat pada konten namun lemah dalam menyesuaikannya — sekaligus menyingkap bahwa hakim LLM salah memberi peringkat pada sistem yang kuat. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]] mengevaluasi agen pada pertimbangan pedagogis profesional, tutoring multi-putaran yang [[situated-learning|tersituasi]], dan penyelesaian alur kerja bergaya kanvas, dan menunjukkan model masih di bawah standar pengajaran profesional. [[ai-generated-interactive-fiction-education-2026|Fiksi interaktif yang dihasilkan AI]] menambahkan sudut evaluasi desain: koherensi dan integrasi kuis, bukan kemampuan menghasilkan, yang membatasi kegunaannya bagi [[student-experience|pengalaman siswa]].
**Uji ketahanan persona pada banyak putaran.** [[adversarial-stress-testing-role-playing-agents|Shouqi et al. (2026)]] menjalankan enam serangan yang meningkat terhadap agen bermain peran dengan Hakim otomatis: pengujian multi-strategi memotong ketahanan sebesar 0.17–0.20 dibandingkan garis dasar strategi tunggal, dan kegagalan kritis mengelompok setelah putaran 5–6, sehingga evaluasi singkat atau satu putaran melebih-lebihkan stabilitas persona dan kepatuhan etis.

- **Agen sebaya yang saran kelirunya justru menjadi intinya.** Copa memadukan pengambilan yang terkontekstualisasi log dengan GPT-4o dan basis pengetahuan khusus tugas berisi lima belas potongan, lalu merangkum setiap segmen siswa secara agensik: ia membandingkan model siswa dengan versi ahli, mendiagnosis masalah yang diutarakan, dan menamai apa yang perlu diambil. Pada studi kelas dengan 16 siswa dan dua kelompok fokus, semua peserta mengatakan bahwa bimbingannya mendukung pemecahan masalah mereka dan akurat, dan semuanya akan menggunakannya lagi. Beberapa juga meminta jawaban langsung, dan sebagian menganggap sebuah saran benar sampai model mereka memburuk. Penulis membaca itu sebagai biaya merancang agen untuk mendorong evaluasi alih-alih menjawab ([[cohn-lc-rag-log-contextualized-retrieval-2025|Cohn et al., 2025]]).

## Panduan praktis

Rancang untuk agensi siswa, bukan kenyamanan model. Utamakan pagar pengaman yang khas tutoring — [[scaffolding]], petunjuk, [[socratic-method|pertanyaan Sokratik]], penargetan [[misconceptions|miskonsepsi]] — alih-alih pembangkitan jawaban mentah, karena pemecahan dan pengajaran berbeda. Distribusikan dukungan menurut peran pengguna (orang tua vs anak, sebaya vs sebaya) alih-alih melalui satu antarmuka generik, dan perlakukan kolaborasi sebagai sasaran perancah yang sah. Jangan mengasumsikan siswa akan menerima perancah; evaluasi penerimaannya dalam konteks nyata. Bangun [[human-in-the-loop-ai|pengawasan manusia]] ke dalam penulisan — seperti yang dilakukan [[ai-tutor-authoring-promptdecipher|PromptDecipher]] dengan menjadikan QA guru atas respons bot sebagai aktivitas kelas satu — dan pilih backend yang lebih murah jika kualitasnya bertahan. Laporkan skor mengajar dan memecahkan secara terpisah, dan validasi konten yang dihasilkan bersama pengguna alih-alih mengasumsikan bahwa pembangkitan sama dengan kegunaan.

Preferensi siswa adalah proksi yang buruk bagi kualitas perancah: siswa dalam pemodelan matematika berbantuan AI tampil paling baik dengan peran Sebaya dan Asisten Pengajar namun menilai peran Tutor dan Siswa Unggul yang lebih direktif paling tinggi pada kegunaan dan [[self-efficacy|efikasi diri]] ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang dan Yang (2026)]]).

Sebuah tinjauan atas 46 studi agen AI dalam pembelajaran kolaboratif berbantuan komputer membedakan perancah kognitif, fasilitasi sosial, dan orkestrasi instruksional, dan menemukan keuntungan kognitif yang konsisten sementara hasil perilaku, sosial, dan emosional bergantung konteks — sehingga fungsi agen harus dipilih berdasarkan hasil yang ingin dihasilkannya ([[ba-ai-agents-cscl-review-2026|Ba et al. (2026)]]).

## Koneksi ke konsep terkait

Agen pedagogis berada di persimpangan [[intelligent-tutoring]] (tulang punggung diagnostiknya berupa [[knowledge-tracing]] dan pemodelan siswa) dan [[generative-ai]]/[[llm]] (mesin penyampaiannya). Mereka mengoperasionalkan [[scaffolding]] dan [[feedback]], menyasar [[metacognition]] dan [[self-regulated-learning]], dan semakin menyasar [[collaborative-learning]]. Kekhawatiran keselamatan berulang pada [[pedagogical-safety]], kualitas penulisan, dan risiko bahwa agen [[cognitive-offloading|membebaskan]] pembelajaran alih-alih mendukungnya. Semua ini dievaluasi melalui [[ai-ed-evaluation]] dan [[benchmark|tolok ukur]] yang harus mengukur pengajaran, bukan sekadar pemecahan.

Yang krusial, agen pedagogis dinilai dari [[learning-gains|perolehan belajar]] mereka, bukan dari seberapa lancar mereka merespons. Bukti basis pengetahuan adalah bahwa agen menghasilkan keuntungan yang bertahan ketika dirancang sebagai pelatih khusus tutoring dengan pagar pengaman — [[stanford-evidence-base-ai-k12-2026|AI khusus tutoring secara konsisten mengungguli chatbot serbaguna]] — dan dapat merugikan pembelajaran ketika menggantikan usaha siswa ([[generative-ai-guardrails-harm-learning|RCT pagar pengaman]], [[jost-llm-programming-education-learning-outcomes|ketergantungan LLM dan nilai]]). Mengukur [[learning-gains]] agen karena itu menuntut ukuran hasil yang dapat ditransfer dan tanpa bantuan, bukan performa di dalam alat.


Umpan balik yang lebih baik tidak sama dengan pembelajaran yang lebih baik: menyesuaikan agen dengan basis pengetahuan dan alur kerja menaikkan akurasi dan kekhususan umpan balik tetapi membiarkan perilaku pengaturan diri, pengalaman belajar, dan hasil tidak berubah, dan keunggulan perolehannya hanya muncul pada umpan balik direktif ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

## Miskonsepsi Umum

- **"Niat penulis menentukan apa yang dilakukan agen pedagogis."** **Niat penulis tidak menjamin pedagogi yang terwujud.** Ketika **27 guru sekolah menengah** mengonfigurasi alat penulisan chatbot untuk guru, evaluasi 108 kriteria tingkat bot menunjukkan perilaku yang terwujud menyimpang dari apa yang diniatkan guru. Alat itu memediasi pedagoginya.
- **"Agen pedagogis yang memoderasi diskusi adalah peran yang sudah selesai."** [[ethics-training-agents-group-ethics-discussion-2026|Agen Pelatihan Etika (Seo et al., 2026)]] menunjukkan apa yang terjadi ketika agen diminta **memoderasi alih-alih** mengajar — tuntutan yang secara kualitatif berbeda dari menjawab pertanyaan, dan yang oleh literatur dianggap belum tuntas.
- **"Basis bukti untuk pengajaran berbantuan komputer tipis."** Sebuah sintesis (**2025, 34 tinjauan**) mengkuantifikasi pemanfaatan CAI pada dukungan pengajaran dan pembelajaran (**97.1% tinjauan**), dukungan psikologis dan motivasional (**91.2%**), dan dukungan **metakognitif**. Cakupan aplikasi yang ditinjau sangat luas, yang membuat celahnya adalah kualitas yang terwujud, bukan cakupan.

## Konsep terkait

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]
- [[ai-avatars-and-synthetic-instructors]]

## Artikel terkait
- [[wang-teacher-student-centered-agents-physics-2026]] — Peran agen berpusat siswa mengungguli peran berpusat guru pada performa, beban, flow, dan empati (Wang et al. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: kerangka konseptual untuk agen pedagogis dalam AR/VR — tutor vs mitra bermain peran, realisme, kehadiran, beban kognitif (Ross & Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: agen siswa generatif untuk latihan instruksional
- [[conversational-ai-agents-umbrella-review-2026]] — Tinjauan payung agen AI percakapan dalam pendidikan
- [[conversational-agents-novice-programmers-scoping-2025]] — Tinjauan cakupan agen percakapan untuk pemrogram pemula
- [[ba-ai-agents-cscl-review-2026]] — Tinjauan agen AI dalam pembelajaran kolaboratif berbantuan komputer
- [[kim-ai-productive-failure-adult-2026]] — Merancang Sistem AI untuk Mendukung Pembelajaran Berbasis Kegagalan Produktif
- [[preferred-scaffolding-ai-mathematical-modeling]] — Perancah yang disukai dalam pemodelan matematika berbantuan AI
- [[llm-adaptive-programming-error-explanations-2026]] — Penjelasan adaptif LLM atas kesalahan pemrograman
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Pendamping AI adaptif peran untuk book talk sekolah dasar; plafon afektif agen berperan tetap (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agen Pelatihan Etika: Memfasilitasi Pendidikan Etika Berbasis Kelompok dengan Bermain Peran dan Diskusi untuk Refleksi dan Eksplorasi Etis

- [[teachers-configure-educational-chatbots-2026]] — Apakah Akan Mengajar Sesuai Niat? Bagaimana Guru Mengonfigurasi Chatbot AI Pendidikan

- [[agent-type-feedback-style-self-directed-learning-2026]] — Agen yang disesuaikan menaikkan kualitas umpan balik tetapi tidak pengaturan diri atau hasil; keunggulan keuntungan hanya pada umpan balik direktif
