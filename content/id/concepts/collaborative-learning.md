---
title: "Pembelajaran Kolaboratif"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education]
pedagogy: [collaborative-learning, scaffolding]
ethics: [equity-in-ai-education]
connected_faqs: [group-work-ai, asynchronous-online-courses-ai]
audience: [learners]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/collaborative-learning"
source_updated: "2026-11-05T22:30:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembelajaran Kolaboratif** — pendekatan instruksional tempat siswa bekerja bersama untuk memecahkan masalah, menyelesaikan tugas, atau mengonstruksi pengetahuan, yang didukung atau dimediasi oleh alat AI. Dalam [[ai-education|AI dalam pendidikan]], [[research-methods-aied|penelitian]] pembelajaran kolaboratif mencakup AI sebagai mitra kolaborasi, AI sebagai mediator kolaborasi manusia, dan desain sistem tutoring AI kolaboratif.

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan suatu saat ketika Anda belajar sesuatu secara mendalam dalam sebuah kelompok. Apa yang membuatnya berhasil? Sekarang bayangkan sebuah [[conversational-ai|chatbot]] AI bergabung ke kelompok itu — bagaimana ia dapat memperkuat atau diam-diam meruntuhkan apa yang Anda alami?
- Penelitian menemukan trade-off: mendelegasikan penalaran kepada AI menghasilkan kinerja tugas terbaik tetapi keterlibatan pengaturan diri paling rendah, sementara mode yang membangun [[self-regulated-learning|pengaturan diri]] justru berkinerja lebih rendah pada tugas. Jika harus memilih, mana yang akan Anda lindungi — hasilnya atau pergulatannya?
- Kerangka ICAP menempatkan kolaborasi 'interaktif' sebagai bentuk keterlibatan terdalam. Mungkinkah AI yang menjawab atas nama kelompok justru menurunkan kolaborasi dari interaktif menjadi sekadar pasif — bahkan ketika siswa merasa lebih puas?
- Satu studi menemukan bahwa mediator AI dipercaya hanya selama mereka tetap netral; ketika AI beralih memberi saran atau menantang, kepercayaan itu terkikis. Seberapa netral seharusnya mediator AI sebuah kelompok?
- Ketika siswa menggunakan AI untuk menghasilkan artefak yang rapi, mereka bisa melewati upaya epistemik yang membangun pemahaman. Bagaimana Anda merancang mitra AI yang memunculkan perbedaan pendapat dan konflik alih-alih menghaluskannya?
- Siswa neurodivergen melaporkan kebutuhan akan tugas terstruktur, tim kecil yang konsisten, dan peran yang eksplisit. Jika alat kolaborasi AI dibangun untuk siswa 'rata-rata', siapa yang mungkin tersisih — dan bagaimana Anda akan merancang secara berbeda?

## Pendahuluan

Pembelajaran kolaboratif berakar pada [[sociocultural-learning|teori sosiokultural]] pembelajaran yang memposisikan konstruksi pengetahuan sebagai sesuatu yang secara fundamental sosial. AI menghadirkan dinamika baru: AI dapat berperan sebagai teman sebaya, fasilitator, atau partisipan dalam proses kolaboratif. Artikel-artikel dalam basis pengetahuan ini menelaah bagaimana kolaborasi yang dimediasi AI memengaruhi [[learning-gains|hasil belajar]], keterlibatan epistemik, dan [[equity-in-ai-education|keadilan]] — serta bagaimana struktur kolaboratif harus dirancang untuk mengakomodasi keragaman siswa.

**Kolaborasi sebagai konstruk vs. kerja kelompok sebagai struktur.** Pembelajaran kolaboratif adalah teori yang lebih luas: pengetahuan dikonstruksi bersama melalui aktivitas dan dialog bersama. [[group-work|Kerja kelompok]] adalah implementasi formalnya yang paling konkret — sebuah tim menghasilkan luaran bersama, dan sering kali nilai bersama. Keduanya berhubungan erat tetapi tidak identik: sebuah kelompok dapat beroperasi tanpa kolaborasi sejati (tugas dipartisi menjadi bagian-bagian independen, pekerjaan sekadar digabungkan), dan kolaborasi dapat terjadi tanpa kelompok formal (pasangan, dialog seluruh kelas, atau interaksi manusia–[[student-ai-interaction|AI]]). AI paling menekan tepat pada celah ini — [[chen-zou-genai-group-assessment-agency-2026|Chen dan Zou (2026)]] menemukan kelompok-kelompok yang praktik [[generative-ai|GenAI]] individualnya tidak pernah menjadi kapabilitas kolektif karena tugasnya tidak pernah menuntut kerja bersama, di samping kelompok-kelompok yang nilai bersamanya menjadikan penggunaan GenAI masalah koordinasi. Halaman [[group-work|kerja kelompok]] menelaah dinamika ini secara mendalam; halaman ini mempertahankan lensa yang lebih luas pada pembelajaran kolaboratif secara keseluruhan.

**AI sebagai mitra kolaboratif** mengeksplorasi peran AI dalam pembelajaran kelompok. **[[polished-artifacts-fragile-engagement-2026|Kimmerle]]** mengonseptualkan risiko berkurangnya upaya epistemik ketika siswa menggunakan AI untuk menghasilkan artefak pengetahuan yang rapi, dan menganjurkan AI distrukturkan sebagai mitra argumentatif yang mempertahankan konflik kognitif. Menguji hal ini pada skala kelas, [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] meminta mahasiswa pengantar ilmu sosial (n = 154) menulis esai argumentatif, menerima kritik dari [[llm|LLM]] seperti ChatGPT, Gemini, atau Claude, lalu memasukkan atau membantahnya; pengode buta menemukan refleksi pada 92.7% dan bantahan aktif atas klaim LLM pada 87.8% respons (κ antar-penilai = 0.81–0.89), bukti bahwa siswa berperilaku sebagai konsumen yang [[critical-thinking|kritis]] dan mempertahankan, bukan menyerahkan, konflik kognitif dari kritik tersebut. **[[epistemic-emotions-collaborative-problem-solving]]** menelaah bagaimana emosi membentuk [[problem-solving|pemecahan masalah]] kolaboratif dengan AI. **[[hingle-collaborative-ai-literacy-2025]]** mengeksplorasi pendekatan kolaboratif untuk pengembangan [[ai-literacy|literasi AI]].

Dukungan fasilitator adalah tuas terkuat yang teramati atas apakah siswa menerima agen yang kontrarian: dalam dua belas tim interprofesional, tim yang fasilitator fakultasnya memengaruhi integrasi AI mereka menilai AI itu lebih sebagai bagian dari tim (M = 3.08 vs 2.64) dan umpan baliknya lebih membantu (M = 3.44 vs 2.93) ([[genai-counter-learner-groupthink-2025|Wiss dan rekan (2025)]]).

**Kolaborasi sejawat yang dimediasi AI** menelaah bagaimana AI [[scaffolding|memberi perancah]] pada kolaborasi antarmanusia. **[[golrang-propact-pair-programming-2026]]** dan **[[agent-voice-accents-k12-group-learning]]** mengeksplorasi bagaimana karakteristik agen AI memengaruhi dinamika kelompok. **[[ai-agents-peer-learning-discourse]]** mendokumentasikan bagaimana [[agentic-ai|agen AI]] yang saling mengajar menghasilkan pola wacana yang menyerupai pembelajaran sejawat manusia. Sistem seluas kelas memperluas ini ke dimensi *relasional* kolaborasi: **[[breideband-community-builder-cobi-2026|CoBi]]** menggunakan [[speech-and-voice-technologies|pengenalan suara]] dan pemahaman bahasa untuk mendeteksi wacana kelompok kecil yang "mengangkat" (saling menghormati, adil, berkomitmen pada komunitas, memajukan pemikiran) dan mengembalikan [[visualization|visualisasi]] tingkat kelas yang non-evaluatif untuk mendukung pembangunan komunitas dan keterampilan kolaborasi, dengan sengaja menahan umpan balik tingkat siswa atau kelompok demi melindungi [[privacy|privasi]] dan [[trust|kepercayaan]].

**Perspektif neurodivergen tentang kolaborasi** mengungkap persyaratan desain yang kritis. **[[neurodivergent-computing-students|Zastudil dan rekan]]** menemukan bahwa siswa neurodivergen membutuhkan tugas terstruktur, tim kecil yang konsisten dengan peran yang didefinisikan secara eksplisit, dan pola interaksi yang dapat diprediksi — persyaratan yang harus diakomodasi alat kolaborasi AI. Ini menghubungkan pembelajaran kolaboratif dengan [[inclusive-learning|pembelajaran inklusif]] dan [[neurodiversity|neurodiversitas]].

**Kolaborasi guru–AI** menelaah bagaimana guru dan AI bekerja bersama. **[[teacher-student-agency-orchestration]]** dan **[[teacher-ai-teaming-five-levels]]** mengeksplorasi kerangka untuk pengajaran kolaboratif manusia–AI, yang terhubung ke [[teacher-role|peran guru]] dan [[human-in-the-loop-ai|manusia dalam lingkar]].

**AI sebagai mediator [[pedagogy|pedagogis]]** mengonseptualkan ulang peran AI dalam kolaborasi di luar alat atau teman sebaya. Dengan bersandar pada teori sosiokultural dan [[distributed-cognition|kognisi terdistribusi]], **[[niari-ai-pedagogical-mediator-collaborative-learning|Niari]]** memposisikan AI sebagai partisipan aktif dalam orkestrasi interaksi, pemaknaan epistemik, dan proses regulasi, dengan mendistribusikan ulang agensi, otoritas, dan tanggung jawab di antara aktor manusia dan non-manusia tanpa menggantikan agensi siswa atau guru. Ini mendasarkan pembelajaran kolaboratif pada pandangan AI yang termediasi secara sosial dan diatur bersama, bukan pandangan individualistis.

**Mode kolaborasi dan trade-off efisiensi–regulasi.** Penelitian empiris tentang mahasiswa yang berkolaborasi dengan AI untuk pemecahan masalah kompleks mengidentifikasi tiga mode yang berbeda — *Delegated Reasoning*, *Concerted Interpretation*, dan *Delegated Elaboration*. Mode yang paling efisien (penalaran yang didelegasikan) menghasilkan kinerja tugas tertinggi tetapi keterlibatan pengaturan diri siswa terendah, sementara mode dengan pengaturan diri terbesar (interpretasi bersama) berkinerja lebih rendah pada luaran tugas.([[hao-human-ai-collaborative-problem-solving-cognition]]) Ini mengungkap ketegangan desain yang sentral: lingkungan pembelajaran kolaboratif harus menyeimbangkan efisiensi sistem manusia–AI yang terdistribusi dengan kedalaman keterlibatan [[self-regulated-learning|regulasi]] siswa.

Satu-satunya kontras meta-analitik yang tersedia untuk kerja kolaboratif berbantuan AI berada di dalam intervensi PBL/PjBL yang didukung GenAI, di mana kolaborasi sejawat terkumpul pada g = 0.885 berbanding g = 0.416 untuk kerja individual, tetapi perbedaannya hanya mencapai tren marginal (QM = 3.675, p = .055) dan sisi kerja individual bertumpu pada dua studi — sehingga bukti terkumpul bahwa kolaborasi mengalahkan bekerja sendiri di bawah GenAI bersifat sugestif, bukan mapan ([[chen-pbl-pjbl-genai-meta-analysis-2026|Chen dan rekan 2026]]).

Pemetaan tingkat bidang mencapai kesimpulan yang sama dari arah lain: analisis BERTopic atas 1,048 publikasi AI dalam pembelajaran daring dari 2010 hingga 2023 menemukan bahwa kerja berorientasi sosial tentang pembelajaran kolaboratif berbantuan AI dan pengembangan komunitas tidak pernah muncul sebagai topik dominan, yang oleh para penulisnya diatribusikan pada korpus yang berpusat pada [[learning-analytics|analitik]] tingkat individu ([[chen-bertopic-ai-online-learning-research-topics-2026|Chen dan rekan (2026)]]).

Sebuah [[meta-analysis-systematic-review|tinjauan lingkup]] atas 18 studi memetakan trade-off yang sama di seluruh kerja kelompok: GenAI mendukung pengembangan pengetahuan, pembangkitan ide, dan efisiensi komunikasi sekaligus mengurangi tuntutan akan interaksi sejawat, negosiasi, dan pemaknaan kolektif, dan bukti acak menemukan saran AI yang lebih inovatif tanpa kenaikan signifikan pada keinovasian keseluruhan partisipan ([[wei-perkins-genai-student-collaboration-scoping-2026|Wei dan Perkins (2026)]]).

**Desain peran adalah tuas atas kualitas, bukan volume, konstruksi pengetahuan kolaboratif.** [[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng dan rekan (2026)]] menetapkan peran moderator, analis, dan pendebat yang berotasi pada 58 [[higher-ed|mahasiswa pascasarjana]] dan mitra AI mereka dalam 16 kelompok, dan menemukan bahwa struktur itu mengangkat *isi* peta pikiran kelompok hampir satu band SOLO penuh (M = 3.65 menjadi 4.59, z = 3.771, p < 0.001) sementara jumlah simpul dan cabang tetap datar — organisasi alih-alih cakupan — dengan biaya kenaikan moderat pada [[cognitive-offloading|beban kognitif]] kolaboratif (p = 0.023). [[network-analysis|Analisis sekuensial lag]] menambahkan transisi-diri evaluasi dan jalur konflik-ke-membela yang tidak dihasilkan alat itu sendirian, memposisikan [[human-ai-collaboration|kolaborasi manusia–AI]] sebagai masalah desain alih-alih masalah alat.

**GenAI sebagai agen dan ruang dalam kelompok kecil — mode itu penting.** [[xu-genai-collaborative-space-2026|Xu dan rekan (2026)]] mengamati bahwa *bagaimana* sebuah tim mengakses GenAI membentuk kolaborasi: dengan satu antarmuka bersama dalam kerja sinkron, tim mengonstruksi bersama "prompt kolektif", menjalankan siklus permukaan–evaluasi–sematkan, dan memperlakukan percakapan sebagai memori bersama; dalam kerja asinkron, pemberian prompt privat dan "de-labeling" keluaran memecah [[explainable-ai|transparansi]] dan menaikkan biaya mempertahankan model kognitif bersama. Lensa GenAI-Supported Cooperative Work (GSCW) mereka membingkai GenAI sebagai agen yang dapat dikonfigurasi (dari asisten individual hingga anggota tim) dan ruang kolaboratif interaktif — menghubungkan konfigurasi akses secara langsung dengan kualitas keterlibatan interaktif yang relevan bagi [[icap-framework|ICAP]].

**GenAI sebagai infrastruktur koordinasi kelompok — dan risiko kerja sama yang mendatar.** [[chen-zou-genai-group-assessment-agency-2026|Chen dan Zou (2026)]] menunjukkan bagaimana lima belas kelompok guru pra-jabatan menangani GenAI dalam presentasi kelompok yang dinilai, dan perpecahannya berlawanan dengan asumsi umum bahwa tekanan kelompok menaikkan ketergantungan pada AI. Lima kelompok mengintensifkan penggunaan untuk memecahkan masalah kolaborasi yang akrab — tidak mengetahui apa isi bagian rekan mereka — dengan mengumpankan pekerjaan itu ke chatbot agar dapat dipahami dan menyelaraskan bagian mereka sendiri, dengan satu kelompok membangun ulang siklusnya sebagai *diskusi → eksternalisasi ke GenAI → tinjauan kolektif → diskusi ulang*. Para penulis membacanya sebagai lebih dari [[cognitive-offloading|pengalihan kognitif]], karena siswa tetap mempertahankan penilaian sementara alat menyerap koordinasi, tetapi menandai bahwa alur kerja yang lebih mulus dapat melewati ketidaksepakatan yang biasanya menjadi jalan pembangunan kohesi, sehingga kerja relasional menjadi pertanyaan terbuka. Tujuh kelompok justru memangkas penggunaan GenAI mereka, melindungi pengetahuan [[situated-learning|situasional]] yang dibangun di ruang kelas bersama ("AI hanya tahu momen itu saat Anda mengetik"), [[bias-mitigation|keadilan]] terhadap rekan kelompok, orisinalitas antar kelompok, dan keragaman perspektif yang sudah dimiliki kelompok. Tiga kelompok tidak mengalami perubahan sama sekali: dengan tugas yang dipartisi menjadi bagian-bagian independen, praktik GenAI yang canggih secara individual tidak pernah menjadi kapabilitas kolektif, meskipun koherensi adalah kriteria eksplisit. Pola ini menunjukkan bahwa norma kelompok, bukan alatnya, yang menentukan apa yang dilakukan kelompok dengan AI — dan bahwa adopsi kolektif dapat menurunkan persepsi [[ai-misuse-learning-harm|risiko penyalahgunaan]] alih-alih menaikkan komitmen.

**Konfigurasi epistemik kelompok menentukan di mana AI berada, bukan seberapa sering ia digunakan.** [[wang-genai-metacognitive-prompting-preconceptions-2026|Wang dan rekan (2026)]] memberikan chatbot [[metacognition|metakognitif]] yang diinisiasi siswa kepada empat belas kelompok guru pra-jabatan selama inkuiri Go-Lab 60 menit tentang bentuk energi, dengan delapan kelompok memegang prakonsepsi berbeda dan enam memegang yang serupa pada [[prior-knowledge|pengetahuan awal]] yang setara (U = 293.50, p = 0.515). Kedua jenis kelompok mengajukan pertanyaan yang sebanding, 39 prompt dipertahankan pada 18 berbanding 21 dengan distribusi fungsi yang tumpang tindih. Yang berbeda adalah penyerapannya.

Penambangan proses menempatkan negosiasi kueri AI pada simpul integrasi dalam kelompok yang beragam, dengan tiga jalur masuk dan dua jalur keluar, dijangkau dari pernyataan konsep pada 55.6% kasus, sementara dalam kelompok dengan prakonsepsi serupa ia berada pada jalur linier kueri-lalu-proses. Kelompok yang beragam mempertahankan evaluasi positif atau netral atas keluaran AI sementara kelompok yang serupa mempertahankan evaluasi negatif, yang sebagian dilacak para penulis pada agen yang berbicara proaktif yang datang setelah kelompok sudah sepakat. Dua belas dari 39 prompt bertemu tindak lanjut informasional singkat dengan klarifikasi cakupan, argumen mereka untuk lapisan klasifikasi permintaan yang memisahkan prompt metakognitif dari prompt prosedural.

**Kolaborasi sebagai objek pengajaran.** [[golrang-propact-pair-programming-2026|ProPACT]] adalah [[intelligent-tutoring|tutor adaptif]] yang digerakkan AI untuk pemrograman berpasangan yang memperlakukan *diad* — bukan individu — sebagai unit analisis, memodelkan atensi visual bersama, upaya mental bersama, dan sinyal berbasis pupil secara real time untuk memprediksi keruntuhan kolaborasi hingga 30 detik sebelumnya dan mengintervensi sebelum terjadi. Diad yang menerima umpan balik proaktif mencapai keberhasilan debugging yang jauh lebih tinggi dan menyelesaikan tugas lebih efisien, serta menunjukkan keuntungan yang bertahan dalam regulasi kolaboratif sesudahnya — bukti bahwa AI dapat mengajarkan kolaborasi itu sendiri, bukan hanya mendukung sebuah tugas. Mengukur kompetensi kolaboratif mengajukan tantangan pelengkap berupa menilai keterampilan pemecahan masalah kolaboratif (CPS) pada skala besar, yang secara tradisional menuntut pengodean manual data proses dari tugas simulasi menjadi perilaku CPS — memakan waktu dan tidak praktis pada skala besar; [[prompt-engineering|pemberian prompt yang sadar konteks]] pada model bahasa terlatih sebelumnya mengotomatiskan pengodean ini dengan memodelkan ketergantungan kontekstual dan memadukan kemampuan kognitif serta sosial, mencapai kinerja yang lebih unggul daripada baseline yang kuat.

**Beri perancah pada urutan bicara kelompok, bukan frekuensinya.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela & Cukurova (2026)]] menambang sekuens dialog triad 65 siswa dan menemukan satu urutan — memparafrasekan, lalu mengusulkan, lalu bertanya — yang mengikuti perbaikan sementara urutan sebaliknya tidak; perancah maksimal menaikkan perilaku sesuai tugas tetapi juga skripisasi dan lebih sedikit indikator pemecahan masalah.

**Analisis struktural atas pembicaraan kelompok membutuhkan definisi operasional tentang benang.** [[ravi-llm-conversation-threads-collaborative-learning-2026|Ravi dkk. (2026)]] menerbitkan buku panduan penjalinan benang untuk mengidentifikasi untaian topikal dalam transkrip multipihak sinkron.
Disempurnakan melalui moderasi sosial iteratif oleh tiga peneliti terlatih, panduan itu mencapai kappa Cohen 0.89 pada transkrip validasi 200 ujaran dan, ketika diterapkan pada 12 transkrip (2,371 ujaran), memulihkan 315 pohon benang - kerangka struktural tentang siapa yang memulai topik, merespons siapa, dan kontribusi mana yang tidak mendapat serapan.

[[zhou-gaiva-human-ai-video-analysis-2026|Zhou, Kang dan Nguyen (2026)]] menambahkan sumbu nonverbal pada pengukuran kolaborasi kelompok dengan buku kode keterlibatan video lima kategori yang berlandaskan kerangka Goodwin dan Dillenbourg, diterapkan oleh GPT-4o pada transkrip MLLM. Konstruk induktif Keterlibatan Periferal — fokus individual dengan kesadaran sebaya dan kesiapan untuk terlibat kembali — muncul di 10/10 batch pengodean meskipun tidak memiliki preseden langsung dalam kedua teori pemandu.


**AI sebagai mediator netral — dan ketegangan ketika ia berhenti netral.** [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] adalah [[llm|probe LLM]] berbasis Discord yang memediasi batas disipliner dalam tim mahasiswa interdisipliner dengan memunculkan asumsi implisit dan mengembalikan sintesis anonim ke diskusi bersama. Siswa menghargainya sebagai dukungan kognitif sekaligus penyangga relasional, tetapi ketegangan sentral muncul: netralitas AI yang dipersepsikan bersifat menanggung beban, dan terkikis begitu AI bergerak dari mediator netral menjadi penasihat atau penantang — kendala desain kunci bagi [[pedagogical-agent|agen]] yang memediasi kolaborasi sambil mempertahankan [[human-ai-collaboration|kolaborasi manusia–AI]] dan [[trust-calibration|kalibrasi kepercayaan]].

**Protokol fasilitator terstruktur — dan risiko sikofansi.** [[ethics-training-agents-group-ethics-discussion-2026|Seo dan rekan (2026)]] memperluas [[learning-design|desain pembelajaran]] kolaboratif dengan protokol divergensi–deliberasi–konvergensi yang terstruktur: fasilitator LLM menumpuk giliran bicara, mengatur waktu fase, dan merangkum secara bertahap, sebuah format yang dinilai 45 siswa sederhana dan mirip diskusi serta mengurangi kebutuhan fasilitasi eksternal. Desainnya berporos pada ketegangan yang diukur langsung oleh studi itu: agen mendukung keluasan pengambilan perspektif (kelompok menghasilkan kumpulan pemangku kepentingan dan solusi yang lebih besar dan lebih beragam, dan agen secara konsisten menyuarakan sudut pandang minoritas), namun persetujuan yang bersifat [[ai-sycophancy|sikofansi]] dan tanpa penalaran mendatarkan konflik kognitif yang membuat kolaborasi memperdalam pemikiran. Partisipan meminta keluaran agen yang memaparkan langkah deliberasi antara alih-alih hanya kesimpulan, dan kontraargumen yang mempertahankan ketidaksepakatan yang sejati.

**Struktur kolaboratif untuk pendidikan AI.** [[academic-league-of-ai-2026|The Academic League of AI]] menyelenggarakan pendidikan AI melalui [[governance|tata kelola]] siswa yang demokratis dan tim proyek, menyematkan [[active-learning|pembelajaran aktif]] dan [[project-based-learning|pembelajaran berbasis proyek]] dalam struktur kolaboratif yang terhubung dengan komunitas.

**Apa yang membuat AI dikenali sebagai teman sebaya alih-alih tutor.** [[lin-ai-peer-collaborative-mathematics-2026|Lin dan rekan (2026)]] meminta tujuh ahli domain bekerja dengan agen berpersona Big Five yang sikap [[motivation|motivasional]] bergeser melintasi prakarsa, kinerja, dan [[reflection|refleksi diri]] saat memecahkan persamaan kuadrat. Partisipan menilai agen itu dari perilaku sosialnya alih-alih matematikanya: ruang yang tidak menghakimi, penalaran yang tentatif, ketidaksempurnaan yang wajar, dan penghormatan pada tempo siswa terbaca sebagai teman sebaya, sementara persetujuan buta dan pengarahan berlebihan mendorongnya kembali menjadi tutor. Para penulis juga melaporkan ketegangan yang layak dipertahankan — kemiripan dengan teman sebaya dan kebergunaan sebagai teman sebaya tidak selalu selaras — yang merupakan risiko lama dari kolaborasi sejawat itu sendiri, bahwa teman sebaya dapat saling mengonfirmasi kesalahan.

### Kerangka ICAP: kolaborasi sebagai mode keterlibatan tertinggi

Pembelajaran kolaboratif menempati puncak [[icap-framework|kerangka ICAP]] (Interactive–Constructive–Active–Passive): mode *interaktif* — mengonstruksi makna bersama melalui dialog, mempertahankan posisi, atau memecahkan masalah bersama — menghasilkan perubahan pengetahuan terdalam dalam taksonomi Chi. Ini menjadikan ICAP sekaligus pembenaran bagi pedagogi kolaboratif dan kendala desain bagi AI. AI yang memediasi diskusi (seperti yang dilakukan [[spritz-ai-disciplinary-mediation-student-teams-2026|Spritz]] atau [[golrang-propact-pair-programming-2026|ProPACT]]) bernilai justru ketika ia mempertahankan keterlibatan *interaktif*; AI yang menjawab atas nama kelompok atau menghaluskan konflik kognitif dapat menurunkan kolaborasi menjadi mode *aktif* atau *pasif* belaka. Anotasi berbasis ICAP (lihat [[icap-cognitive-engagement-llm-agents|pengukuran ICAP yang diperluas atas dialog kolaboratif]]) dan penelitian penentuan waktu fasilitasi keduanya memperlakukan kualitas wacana interaktif sebagai luaran yang diminati, mendasarkan pembelajaran kolaboratif pada [[student-engagement|keterlibatan siswa]] dan hierarki ICAP.([[icap-cognitive-engagement-llm-agents]])([[llm-facilitation-timing-online-discussions]])
- **GenAI dapat mengambil kursi moderator alih-alih kursi tutor.** Chen dan rekan (2026) menjalankan kuasi-eksperimen 16 minggu dengan 64 mahasiswa sarjana di mana kedua kondisi memiliki agen AI dan platform terstruktur, dan hanya perancah regulasinya yang berbeda: agen SSRL adaptif versus lembar kerja digital statis ([[chen-genai-team-moderator-cscl-shared-regulation-2026|Chen dan rekan, 2026]]). Kelompok adaptif menunjukkan kesetaraan partisipasi yang lebih tinggi tetapi bukan intensitas yang lebih tinggi, tanda khas redistribusi alih-alih lebih banyak bicara.
- **Interaktif tidak otomatis lebih dalam.** Dalam kuasi-eksperimen delapan minggu dengan 87 mahasiswa sarjana, pasangan yang bekerja dengan sistem multiagen GenAI menghasilkan proyek desain terbaik (M = 89.64 berbanding 86.45 untuk kerja solo pada sistem yang sama). Keuntungan kesadaran berpikir kritis bergerak ke arah sebaliknya: terbesar pada kerja solo (M = 0.41), nyaris datar pada kolaborasi sejawat (M = 0.06) dan sedikit negatif pada kondisi AI berpasangan (M = -0.04) ([[bjet-many-hands-make-light-work-2026|Chu, Dai dan Zhai (2026)]]). Konfigurasi mengubah jenis pemikiran yang diaktifkan, bukan seberapa banyaknya.

## Panduan praktis

- **Modelkan kolaborasi, bukan hanya individu.** Alat yang melacak keadaan diad atau kelompok (seperti yang dilakukan [[golrang-propact-pair-programming-2026|ProPACT]]) dapat memberi perancah pada kolaborasi itu sendiri, memprediksi dan mencegah keruntuhan alih-alih bereaksi terhadapnya.
- **Pertahankan konflik kognitif.** Strukturkan AI sebagai mitra argumentatif yang memunculkan ketidaksepakatan dan asumsi implisit, menghindari masalah artefak rapi di mana AI menghaluskan keterlibatan epistemik yang rapuh.
- **Persona kontrarian punya biaya afektif.** Di 97 triad, AI kontrarian mendorong wacana ke arah tantangan dan refleksi tetapi menurunkan kepuasan kerja tim (ε² = .062) dan rasa aman psikologis (ε² = .114) tanpa menaikkan keluaran kreatif ([[jin-emergent-learner-agency-implicit-hai-2026|Jin dan rekan (2026)]]).

- **Sesuaikan fungsi agen dengan luaran yang Anda inginkan.** Tinjauan atas 46 studi agen AI dalam pembelajaran kolaboratif berbantuan komputer menemukan keuntungan kognitif yang dilaporkan secara konsisten sementara luaran perilaku, sosial, dan emosional tetap bergantung konteks, dengan keselarasan terkuat antara fungsi agen dan luaran berada dalam domain yang sama ([[ba-ai-agents-cscl-review-2026|Ba dan rekan (2026)]]).

- **Peran Fasilitator yang terpisah mengurangi dominasi, bukan responsivitas.** Dalam [[astra-multi-agent-tutoring-benchmark-2026|tolok ukur simulasi Oyelere (2026)]], menambahkan agen Fasilitator di samping Tutor menurunkan ketidakseimbangan giliran dan kata diad (M = 0.103 dan 0.105 berbanding 0.183 dan 0.182) tanpa mengubah keterlibatan timbal balik — meskipun siswanya adalah persona sintetis, bukan diad nyata.
- **Seimbangkan efisiensi dengan pengaturan diri.** AI kolaboratif yang memaksimalkan efisiensi tugas (penalaran yang didelegasikan) dapat melemahkan keterlibatan regulasi siswa; desain harus dengan sengaja melindungi ruang untuk interpretasi bersama.
- **Patuhi kendala netralitas.** Mediator AI dipercaya selama netral; bergerak ke peran penasihat atau penantang menggoyahkan kepercayaan itu, sehingga perpindahan peran harus eksplisit dan dapat dikonfigurasi.
- **Akomodasi siswa neurodivergen.** Tugas terstruktur, tim kecil yang konsisten, dan definisi peran yang eksplisit adalah persyaratan yang harus didukung alat kolaborasi AI.
- **Utamakan umpan balik non-evaluatif tingkat kelas.** Saat mendukung dimensi relasional kolaborasi, umpan balik agregat tingkat kelas melindungi [[privacy|privasi]] dan [[agency|agensi siswa]] ketika penilaian individual akan terasa seperti pengawasan; siswa [[breideband-community-builder-cobi-2026|CoBi]] lebih menyukai [[qualitative-research|visualisasi kualitatif]] (pohon organik) daripada yang [[quantitative-research|kuantitatif]] (diagram radar), dan guru lebih menghargai penggunaan temuan sistem untuk memicu refleksi daripada tampilan langsung.
- **Rancang untuk pembacaan/atensi yang mendahului kontribusi.** Pembelajaran kolaboratif di forum [[online-teaching-and-learning|diskusi daring]] bergantung bukan hanya pada memposting tetapi juga pada pembacaan yang mendahuluinya. [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao & Cukurova (2026)]] menunjukkan ringkasan diskusi yang dihasilkan LLM dan contoh pos dapat bertindak sebagai [[scaffolding|perancah]] navigasional yang memperluas paparan siswa terhadap kontribusi rekan dan kondisi jaringan bagi modal sosial penjembatanan (ikatan lemah) — dukungan yang harus melengkapi, bukan menggantikan, strategi sosio-pedagogis untuk mempertahankan keterlibatan di bawah beban akademik.

- **Sisi sosial menunjukkan gangguan tanpa keuntungan pengimbang.** Di lima proses kolaborasi, konsensus 30 ahli hanya mencapai kerentanan, dengan peringkat peningkatan di bawah ambang: Koneksi Sosial (3.80 berbanding peningkatan 1.90), Perkembangan Sosio-Emosional (3.60 berbanding 2.00), Pembelajaran Sosial, Pembelajaran Kolaboratif, dan Rasa Memiliki (semuanya 3.30) ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou, Greene & Nixon dan rekan, 2026]]). Laporan itu memperlakukan asimetri tersebut sebagai sasaran desain, karena pemecahan masalah kolaboratif berjangkar pada produk bersama sementara pembelajaran kolaboratif tidak memiliki rujukan yang terlihat dan dapat terkikis tanpa terdeteksi.

## Miskonsepsi Umum

- **"Memberi AI kepada kelompok berarti lebih banyak kolaborasi."** Tinjauan lingkup atas **18 studi** memetakan trade-off di seluruh kerja kelompok: GenAI mendukung **pengembangan pengetahuan, pembangkitan ide, dan efisiensi komunikasi** sekaligus membawa biaya relasional dalam intervensi yang sama. Keuntungan efisiensi dan biaya relasional datang bersamaan.
- **"Pembelajaran kolaboratif berbantuan AI punya dukungan meta-analitik."** **Satu-satunya** kontras meta-analitik yang tersedia untuk kerja kolaboratif berbantuan AI berada **di dalam** intervensi PBL/PjBL yang didukung GenAI alih-alih diestimasi secara langsung, sehingga ia adalah komponen dari efek yang lebih luas, bukan pengukuran kolaborasi.
- **"Mitra LLM mempertahankan penalaran kelompok itu sendiri."** [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash dan Connell Pensky (2025)]] mengujinya pada skala kelas dengan mahasiswa pengantar ilmu sosial, justru karena pemertahanan adalah pertanyaan terbuka dan bukan asumsi.

## Konsep terkait
- [[pedagogical-patterns]] — Kolaborasi AI bersama yang terskrip dan desain perannya yang teruji
- [[pedagogical-partnerships]] — Kemitraan Pedagogis
- [[group-work]] — Kerja kelompok
- [[problem-based-learning]]
- [[online-teaching-and-learning]] — Pengajaran dan Pembelajaran Daring
- [[active-learning]]
- [[icap-framework]]
- [[scaffolding]]
- [[teacher-role]]
- [[human-in-the-loop-ai]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[inclusive-learning]]
- [[neurodiversity]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[project-based-learning]]
- [[human-ai-collaboration]]
- [[trust-calibration]]
- [[pedagogical-agent]]
- [[student-modeling]]
- [[student-engagement]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI

## Artikel terkait
- [[lin-ai-peer-collaborative-mathematics-2026]] — Apa yang membuat agen LLM terbaca sebagai teman sebaya: keamanan, penalaran tentatif, ketidaksempurnaan yang wajar
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] - Konsensus 30 ahli menemukan risiko sosial satu sisi: proses kolaborasi rentan tanpa jalur peningkatan
- [[chen-pbl-pjbl-genai-meta-analysis-2026]] — Pembelajaran berbasis masalah dan berbasis proyek sebagai kerangka menjanjikan bagi pendidikan yang didukung AI generatif: bukti yang muncul dari tinjauan sistematis dan meta-analisis tiga tingkat
- [[jin-emergent-learner-agency-implicit-hai-2026]] — Agensi siswa yang muncul dalam kolaborasi manusia–AI implisit: persona suportif vs. kontrarian
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[genai-counter-learner-groupthink-2025]]
- [[polished-artifacts-fragile-engagement-2026]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[neurodivergent-computing-students]]
- [[teacher-student-agency-orchestration]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[hao-human-ai-collaborative-problem-solving-cognition]]
- [[golrang-propact-pair-programming-2026]] — ProPACT: tutor kolaboratif adaptif AI yang proaktif untuk pemrograman berpasangan
- [[spritz-ai-disciplinary-mediation-student-teams-2026]] — Spritz: mediasi disipliner AI dalam tim proyek mahasiswa
- [[academic-league-of-ai-2026]] — Academic League of AI: pendidikan AI yang kolaboratif dan berbasis proyek
- [[icap-cognitive-engagement-llm-agents]] — Kerangka ICAP yang diperluas untuk mengukur keterlibatan dalam dialog kolaboratif
- [[llm-facilitation-timing-online-discussions]] — Penentuan waktu fasilitasi LLM dalam diskusi kolaboratif daring
- [[ba-ai-agents-cscl-review-2026]] — Tinjauan agen AI dalam pembelajaran kolaboratif berbantuan komputer
- [[wei-perkins-genai-student-collaboration-scoping-2026]] — GenAI dan kerja kelompok siswa: tinjauan lingkup (Wei & Perkins 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Tolok ukur sintetis ASTRA untuk tutoring multiagen dan kolaborasi dengan partisipasi seimbang
- [[xu-genai-collaborative-space-2026]] — GenAI sebagai agen dan ruang kolaboratif dalam dinamika kelompok kecil (Xu dan rekan 2026)
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026]] — Desain pembelajaran berbasis ringkasan yang dihasilkan AI di forum diskusi daring
- [[chen-zou-genai-group-assessment-agency-2026]] — GenAI sebagai infrastruktur koordinasi dalam kelompok siswa: penggunaan yang diintensifkan, yang ditahan, dan yang tidak diberlakukan
- [[ethics-training-agents-group-ethics-discussion-2026]] — Agen Pelatihan Etika: Memfasilitasi Pendidikan Etika Berbasis Kelompok dengan Bermain Peran dan Diskusi untuk Refleksi dan Eksplorasi Etis
- [[chen-bertopic-ai-online-learning-research-topics-2026]] — Kerja kolaborasi AI yang berorientasi sosial tidak pernah menjadi topik dominan dalam 1,048 publikasi
- [[wang-genai-metacognitive-prompting-preconceptions-2026]] — Konfigurasi epistemik kelompok menentukan di mana AI berada: simpul integrasi pada kelompok dengan prakonsepsi beragam, jalur linier kueri-lalu-proses pada kelompok yang serupa, pada pengetahuan awal yang setara (Wang dan rekan 2026)
- [[bjet-many-hands-make-light-work-2026]] — Pasangan dengan sistem multiagen menghasilkan proyek terbaik sementara kerja solo menghasilkan keuntungan berpikir kritis terbesar
