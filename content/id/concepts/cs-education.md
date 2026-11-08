---
connected_resources: [liascript, code-viva]
title: "Pendidikan Ilmu Komputer"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment]
discipline: [stem education, cs education]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/cs-education"
source_updated: "2026-11-07T12:15:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pendidikan CS** — pendidikan [[science-education|ilmu komputer]] adalah subbidang STEM yang paling banyak diteliti dalam basis pengetahuan, berkat keselarasan alami antara alat AI dan tugas pemrograman. Generasi kode, bantuan debugging, dan tinjauan kode otomatis adalah aplikasi AI utamanya. Karena siswa belajar membangun alat yang mereka pakai sendiri, pendidikan CS berada di pusat perdebatan tentang literasi AI, desain ulang kurikulum, rekayasa perangkat lunak agensik, dan batas antara pembelajaran sejati dan [[cognitive-offloading|ketergantungan berlebih]].

## Pertanyaan yang perlu dipertimbangkan

- Jika AI kini dapat menulis kode yang lulus ujian pemrograman sungguhan, apa yang masih harus dipelajari siswa untuk dikerjakan dengan tangan — dan apa yang harus berhenti diajarkan kurikulum?
- [[research-methods-aied|Riset]] menemukan bahwa kepercayaan yang lebih tinggi pada asisten koding AI memprediksi kemampuan yang LEBIH BURUK dalam membedakan saran yang benar dari yang menyesatkan. Bagaimana kepercayaan berbeda dari ketergantungan yang tepat, dan bagaimana Anda akan mengajarkan yang kedua?
- Dalam ko-pemrograman siswa-AI, hampir 80% interaksi bersandar pada strategi non-belajar seperti menyubkontrakkan jawaban, dan hanya sekitar 1 dari 9 yang menunjukkan [[student-engagement|keterlibatan]] epistemik yang mendalam. Mengapa pembelajaran sejati jarang terjadi secara default ketika AI tersedia?
- Agen [[learning-by-teaching]] yang terlalu kompeten melemahkan latihan debugging siswa. Apakah Anda akan sengaja membuat tutor AI bisa keliru — dan jika ya, bagaimana?
- Saat AI mengotomatiskan implementasi, kurikulum bergeser dari menulis kode ke memverifikasi dan mengarahkan artefak yang dihasilkan AI. Kompetensi baru apa yang dituntut hal itu, dan apa yang mungkin hilang dalam pergeseran itu?
- Siswa membangun alat yang mereka gunakan sendiri. Bagaimana menjadi pembangun sekaligus pengguna AI mengubah apa yang harus mereka pelajari tentang batas-batasnya — dan etikanya?

## Pendahuluan

### AI dalam pendidikan CS

- **Generasi dan pelengkapan kode:** [[code-review-genai-cs1|tinjauan kode CS1]], [[dura-llm-cs2|DURA untuk CS2]], dan [[prompt-problems-nl-programming-mistakes|kesalahan pemrograman NL]] mengkaji bagaimana siswa menggunakan AI untuk generasi kode dan apa yang mereka pelajari darinya.
- **Agen konversasional untuk pemula ([[meta-analysis-systematic-review|tinjauan cakupan]]):** [[conversational-agents-novice-programmers-scoping-2025|Barzanji & Loitsch (2025)]] memetakan 23 studi (2019–Juni 2024) tentang [[conversational-ai|agen konversasional]] untuk pemrogram pemula, mendokumentasikan pergeseran dari chatbot berbasis aturan ke agen berbasis [[llm]] dan [[rag]] (dengan [[rag|retrieval-augmented generation]] mengurangi [[hallucination-risk|halusinasi]]) serta dukungan tutoring yang dipersonalisasi (misalnya, InfoBot, ProbSol-Bot, Lint Bot, Profe Alex). Yang mencolok, hanya 4 dari 23 studi mendasarkan desain pada [[learning-theories|teori belajar]], dan 17 dari 23 prototipe hanya berbahasa Inggris meskipun sebagian besar riset berasal dari luar negara berbahasa Inggris — menandai landasan [[pedagogy|pedagogis]] yang lemah dan kesenjangan inklusivitas bagi desain CA di masa depan dalam pemrograman pengantar.
- **Dukungan debugging:** [[debugtracker-classroom-debugging|Alat debugging]], [[chat-debugging-human-ai-collaboration-circuits|kolaborasi debugging manusia-AI]], dan [[golrang-propact-pair-programming-2026|pemodelan pair-programming diadik]] memanfaatkan AI untuk identifikasi dan perbaikan kesalahan.
- **Penerapan kursus langsung menemukan panjang petunjuk, bukan pilihan model, sebagai variabel yang dapat ditindaklanjuti.** Tiga penerapan berturut-turut dalam kursus pengembangan web pengantar (o3-mini, GPT-5-mini dan GPT-5.5 pada 79,438, 83,374 dan 10,420 pengiriman tercatat) mengasosiasikan petunjuk dengan hasil langsung yang lebih baik dalam beberapa perbandingan. Pesan yang lebih panjang memprediksi ketepatan kiriman berikutnya yang lebih buruk, lebih banyak percobaan dan pengiriman ulang yang lebih lambat, dan siswa yang telah menerima petunjuk pada langkah proyek sebelumnya lebih jarang menyelesaikan langkah akhir, pada 95.6% berbanding 98.1% ([[mihaylova-llm-feedback-live-programming-course-2026|Mihaylova et al., 2026]]).
- **Tutor berbantuan alat yang bersemayam di peramban adalah arsitektur yang dituju bidang ini.** Desain SLM berbantuan alat memasangkan perencana kecil yang disetel halus (1B–7B) dengan empat alat deterministik — eksekutor kode, pelari tes, pengambil dokumentasi, modul [[knowledge-tracing]] — di balik kebijakan eskalasi empat tingkat (alat lebih dulu, SLM di perangkat, LLM awan dengan persetujuan, instruktur), memindahkan kendali pedagogis dari model ke kebijakan yang dapat diaudit; model pelengkapan ~150M awal mencapai 10.97% HumanEval pass@1, di atas beberapa baseline kode 100M–150M ([[browser-sized-agents-slm-webllm-tutor-2026|Suvernev et al. (2026)]]).
- **Tutor kecil yang disetel halus dapat memberi perancah lebih baik daripada model umum yang lebih besar.** Penyetelan halus Qwen2.5-Coder-7B-Instruct pada 1,213 dialog tutoring sintetis memangkas pengungkapan solusi prematur dari 7.43% menjadi 1.88% giliran tutor dan menaikkan kualitas perancah bertahap serta pertanyaan debugging di atas GPT-4o, meskipun generasi rencana pedagogis yang andal tetap menjadi masalah terbuka ([[socraticrepair-program-debugging-2026|Kopytskyi et al. (2026)]]).
- **Penilaian otomatis:** [[automated-grading-linux-bash-examinations-large-language-models|penilaian Linux Bash]], [[llm-automated-grading-programming-comparison-2026|perbandingan penilaian berskala besar atas 18 model]], dan [[llm-intervention-design-cs-review|tinjauan intervensi LLM]] mengevaluasi penilaian kode otomatis. Keamanan alur kerja itu adalah pertanyaan terpisah: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] melakukan red-team atas tugas penilaian AI yang rutin dan menemukan bahwa instruksi yang disembunyikan di dalam berkas yang dikirimkan menaikkan nilai esai yang gagal tanpa peringatan yang terlihat, pada 9 dari 9 iterasi untuk satu strategi dan 17 dari 18 untuk strategi lain — bukti bahwa ketangguhan penilai termasuk dalam daftar periksa [[assessment-validity]] bersama akurasi.
- **Prompt penilai satu kalimat dapat meruntuhkan LLM, dan penyetelan halus memperbaikinya.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]] menilai ujian visi komputer praktis (570 siswa dinilai ganda) dalam 171 konfigurasi dan ujian [[machine-learning|pembelajaran mesin]] (1,038 siswa) dalam 162 konfigurasi lain: pembuka "penilai ketat" yang singkat mendorong 14 dari 17 model berbobot terbuka keluar dari pita nilai (MAE ≥ 8), dengan tiga berhenti menilai sama sekali, dan kerusakannya terlacak ke dua kalimat kebijakan penahanan kredit yang arahnya tidak berpindah ke ujian kedua (tujuh model membaik). Satu adaptor LoRA atas sekitar 3,900 contoh ternilai yang digabungkan membawa lima [[open-source|model terbuka]] kecil ke paritas dengan penilai manusia.
- **Media pembelajaran yang dihasilkan AI:** [[ai-generated-traces-novice-programmers|Trace Animasi yang Dihasilkan]] menunjukkan bahwa [[visualization|visualisasi]] yang dihasilkan AI dapat membantu pembelajaran langsung tetapi harus dipersonalisasi — siswa dengan keterlibatan menengah mengalami penurunan kinerja yang konsisten dengan efek pembalikan keahlian.
- **[[metaphors-and-analogies|Kritik analogi GenAI]] sebagai aset instruksional:** [[student-reception-genai-analogies-computing-2026|Bernstein & Sibia (2026)]] mendasarkan penerimaan analogi GenAI pada CS2: sepuluh siswa yang telah menyelesaikan CS2 mengaudit analogi yang dihasilkan GenAI untuk linked list dan rekursi dan menolak pemetaan yang gagal dalam korespondensi struktural — analogi rute pulau yang memetakan ke linked list melingkar alih-alih tunggal, atau reli bulu tangkis yang ditawarkan untuk rekursi meskipun tidak memiliki masukan yang menyusut secara terjamin, dengan satu siswa mengusulkan golf sebagai gantinya. Karya ini berargumen bahwa kritik analogi itu sendiri merupakan pemeriksaan atas pemahaman konsep, menjadikan analogi AI yang cacat sebagai aset instruksional yang dapat dipakai alih-alih bahaya yang harus disaring, dan merekomendasikan penugasannya sebagai objek untuk diperiksa dan diperbaiki.
- **Pemodelan [[misconceptions|miskonsepsi]]:** [[student-misconceptions-conditionals-loops-taxonomy|taksonomi miskonsepsi conditionals/loops]] memberi sistem otomatis kosakata yang tepat untuk mendiagnosis kesalahan pemula.
- **Miskonsepsi strategis yang dihasilkan model:** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] membangun SocraticTrap-CS di sekitar 35 konsep dari kurikulum ACM/IEEE CS2023 — algoritma, bahasa pemrograman, basis data, jaringan dan sistem operasi — dan meminta tujuh model berbobot terbuka untuk penjelasan yang lancar dan berwibawa yang bersandar pada kesalahan halus. Enam dari tujuh menghasilkan miskonsepsi strategis yang dikonfirmasi ahli untuk 91% atau lebih konsep yang diprompt (221 dari 241 segmen, 91.7%), tanpa perbedaan signifikan antar domain CS; kesalahan konseptual mendominasi (66.5% konseptual vs. 33.5% faktual, dan tidak ada yang murni logis), dan baik daya persuasi maupun jenis kesalahan bervariasi menurut domain. Para penulis karena itu merekomendasikan penanggulangan yang peka domain — pemeriksaan berfokus penalaran di kursus yang berat pemrograman, pemeriksaan silang terhadap spesifikasi protokol di jaringan — dan evaluasi [[automated-question-generation]] serta penjelasan yang ditulis AI pada [[trust|keterpercayaan]] pedagogis alih-alih hanya ketepatan.
- **Kinerja [[authentic-assessment]]:** [[genai-oop-programming-assessments-2026|Lepp & Kaimre (2026)]] menunjukkan sistem [[generative-ai|GenAI]] 2026 mengungguli kohort mahasiswa rata-rata pada [[assessment|penilaian]] OOP pengantar yang autentik dan sering meraih nilai penuh pada tugas pemrograman yang lebih panjang, namun masih kesulitan dengan antarmuka, kelas abstrak, pewarisan, dan pertanyaan berbasis gambar — pola kesalahan berulang yang dapat dimanfaatkan instruktur saat merancang penilaian. Studi longitudinal CS1 memperkuat sisi kapabilitas temuan itu: [[student-llm-code-detection-cs1-2026|Ye et al. (2026)]] mengukur model terdepan pada 98.93-99.99% pada lab berbanding 76.37-88.03% untuk kiriman siswa.

- **Aktivitas repositori tidak lagi seperti dulu.** Di 260 repositori tim capstone (sepuluh semester, 2021-2025), basis kode akhir semester kurang lebih menjadi tiga kali lipat, dari sekitar 3.4 KLOC pada 2021-2023 menjadi sekitar 10 KLOC pada 2024-2025, dengan kompleksitas siklomatik dan kepadatan penanganan galat meningkat sementara kepadatan komentar tetap datar ([[shakil-code-commits-complexity-genai-2026|Shakil, Brabrand & Denny (2026)]]). Kohort berikutnya juga melakukan commit lebih sering dan dalam volume lebih besar dengan ukuran suntingan per commit yang tidak berubah, pergeseran ritme pengembangan yang perlu ditimbang mata kuliah proyek sebelum memperlakukan aktivitas repositori sebagai bukti kemajuan.

- **Pemodelan prediktif untuk dukungan berisiko:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] menunjukkan bahwa pohon keputusan yang dapat ditafsirkan secara intrinsik yang dilatih pada fitur log interaksi konten memprediksi kemajuan tingkat modul secara akurat dalam kursus pemrograman daring berskala besar (akurasi 85–91% pada empat kursus K-12) dan menandai hasil putus sekolah "Tidak ada kiriman", memberi pendidik jendela 7–8 hari untuk [[teacher-role|campur tangan]] pada [[learners]] yang kesulitan dan tidak terlibat sebelum tenggat modul — melengkapi kerja penilaian otomatis dan prediksi atrisi di atas.
- **Dukungan berbasis pengambilan untuk CS teoretis hanya cocok untuk studi asinkron.** AlgoRAG menjawab seluruh 179 pertanyaan ujian yang ditulis instruktur dalam batas waktu 240 detik dengan rata-rata 38.0 detik per pertanyaan, dan BLEU-4-nya sebesar 0.0000 di seluruh himpunan merupakan sifat pencocokan n-gram pada pembuktian matematis alih-alih kegagalan sistem ([[algorag-rag-theoretical-cs-education-2026|Adhikari (2026)]]).

- **Adopsi mengikuti tugas, bukan subbidang.** Di antara tujuh tugas dan 211 siswa, [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] mengukur penggunaan LLM dari 89.6% pada algoritma hingga 15.2% pada rekayasa perangkat lunak, menghubungkan sebarannya pada kompleksitas tugas, keterverifikasian dan perancah alih-alih pada subjeknya sendiri.

- **Umpan balik dapat diatur bertahap agar diagnosisnya tetap tersembunyi.** [[educator-guided-llm-pedagogical-agent-2026|Riazi & Rooshenas (2026)]] memisahkan diagnosis skema basis data siswa yang berbasis artefak dari alur kerja yang melepaskannya, dengan pendidik menulis tahapannya; di antara 383 episode, 71.1% umpan balik mencapai tingkat sasarannya.

### Pedagogi pemrograman: dari blok ke pembelajaran berbasis permainan yang berwujud

Pendidikan pemrograman mencakup pemrograman pengantar berbasis blok hingga pengembangan perangkat lunak lanjutan, dan makin mendasarkan kode abstrak pada hasil yang konkret dan teramati.

- **Pemrograman visual berbasis blok:** lingkungan seperti Scratch dan Blockly memungkinkan pemula menyambungkan blok grafis alih-alih mengetik teks, menghilangkan kesalahan sintaksis dan membuat struktur program terlihat — terutama bernilai bagi pembelajar yang lebih muda dan untuk mengendalikan [[educational-robotics|robot pendidikan]]. Di era AI mereka makin sering digabungkan dengan agen AI konversasional (misalnya, [[microbit-robotics-machine-learning-teacher-training-2026|Micro:bit + MakeCode dalam pelatihan guru]], [[cstutorbench-slm-tutors|tutor model bahasa kecil]]).
- **Pemrograman blok [[embodied-learning|berwujud]]:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] menggabungkan pemrograman berbasis blok dengan agen pengajaran AI konversasional dan eksekusi robot berwujud, menciptakan lingkar menulis–menjalankan–mengamati–merevisi yang mempertahankan [[agency|agensi]] pembelajar.
- **Kendali robot dengan bahasa alami:** [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] memungkinkan pemula mengendalikan robot simulasi melalui instruksi bahasa alami, menurunkan hambatan pemrograman robot tanpa menuntut keahlian kode tingkat rendah.
- **Robotika dan berpikir komputasional:** [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] menghubungkan berpikir komputasional dengan robotika pendidikan dalam kurikulum STEAM sekolah menengah, dan [[microbit-robotics-machine-learning-teacher-training-2026|riset pelatihan guru]] berargumen bahwa aktivitas robotika dan ML harus tertanam dalam [[teacher-education]].
- **Pembelajaran berbasis permainan dan gamifikasi:** [[game-based-gamified-robotics-education-review-2026|Sebuah tinjauan sistematis]] membandingkan pembelajaran berbasis permainan (cocok untuk lingkungan informal) dan gamifikasi (cocok untuk kelas formal) dalam pendidikan robotika, yang menekankan pemrograman pengantar dan kit modular.
- **Robotika berbasis proyek:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] mengajarkan pemrograman robotika melalui [[project-based-learning|proyek]] agile yang membentang satu semester, menjawab kesenjangan teori-praktik di pendidikan tinggi.
- **Dampak LLM pada [[learning-gains|hasil belajar]]:** [[jost-llm-programming-education-learning-outcomes|Jošt et al. (2024)]] dan [[genai-meta-analysis-programming-learning|meta-analisis GenAI dan pembelajaran pemrograman]] mengkaji apakah alat berbantuan AI membantu atau melemahkan capaian pemrograman.

### Transformasi kurikulum di era AI

Pertanyaan "apa yang masih harus dipelajari siswa dengan tangan?" kini membentuk ulang program komputasi.

- **Dari implementasi ke verifikasi:** [[reshaping-cs-education-genai|Reshaping Undergraduate CS Education]] berargumen bahwa saat GenAI mengotomatiskan pemrograman, debugging, dan pengujian pada tingkat implementasi, kurikulum harus bergeser ke arah *memahami dan memverifikasi artefak yang dihasilkan AI*, mempertahankan desain sistem, abstraksi, dan [[critical-thinking|evaluasi kritis]] sambil mengurangi penekanan pada detail implementasi tingkat rendah. Ini sejalan dengan kerangka [[ai-literacy]] yang mengutamakan evaluasi di atas generasi.
- **Rekayasa perangkat lunak agensik sebagai disiplin:** [[ase-26-agentic-software-engineering-curriculum|ASE-26]] memformalkan pengarahan agen alih-alih penulisan kode — mengajarkan keterauditan, context engineering, verifikasi, alur kerja multi-agen, dan AgentOps — dan memosisikan kompetensi [[agentic-ai|AI agensik]] sebagai kurikulum terstruktur berperancah alih-alih penguasaan sintaksis.

- **Dari produksi ke pertimbangan: utang pemahaman dan AASEE.** [[judgment-centred-software-engineering-education-2026|Mahmoud (2026)]] berargumen bahwa bidang ini harus bergeser dari model yang berpusat pada produksi ke model yang berpusat pada pertimbangan, dan memperluas utang pemahaman — biaya pembelajaran dan pemeliharaan yang tertunda ketika produksi berbantuan AI melampaui kemampuan pembelajar untuk menjelaskan, menguji, memodifikasi, dan membenarkan perangkat lunak — menjadi lensa [[assessment]], dengan dasar 621 diari reflektif dari 207 siswa. Tinjauan itu menyempurnakan kerangka AASEE menjadi lima tingkat integrasi non-linear yang dilintasi empat kewajiban bukti — menjelaskan, memverifikasi, memodifikasi, dan mempertanggungjawabkan — dan melaporkan basis bukti yang bersyarat: [[meta-analysis-systematic-review|meta-analisis]] STEM dengan heterogenitas ekstrem (I² = 96.32%) kehilangan manfaat gabungannya setelah bias publikasi dikoreksi, dan sintesis atas 76, 72, dan 64 studi menunjukkan perolehan efisiensi jangka pendek yang tidak [[transfer-of-learning|bertransfer]] ke kinerja tanpa bantuan.
- **Pedagogi dan model penilaian baru:** [[test-driven-ai-assisted-learning|Pembelajaran Berbantuan AI Berbasis Tes]] menggantikan kuliah dengan studi berbantuan AI yang [[self-directed-learning|mandiri]] dan dibatasi tes tutup buku mingguan, mempertahankan akuntabilitas individual sementara agen AI menskalakan produksi materi dan penilaian di bawah [[human-in-the-loop-ai|pengawasan manusia]].
- **[[oral-assessment|Ujian lisan]] sebagai mekanisme akuntabilitas.** Program AI Engineering berbasis proyek menjalankan mahasiswa semester dua melalui tujuh sprint dua minggu dengan AI tertanam dalam kebutuhan, arsitektur, koding dan pengujian, dan mewajibkan ujian lisan individual setelah tiga putaran menunjukkan artefak saja tidak lagi membuktikan pemahaman; rata-rata ECTS yang hilang turun dari 25% menjadi 3% ([[project-based-ai-engineering-curriculum-agile-2026|Rausch (2026)]]).
- **Ajarkan mekanika model secara offline.** Seperangkat sumber daya praktisi mengajarkan alur [[llm-training-and-fine-tuning|pelatihan]]→generasi LLM secara unplugged — grid n-gram yang dihitung tangan dan pengambilan sampel berbasis dadu, tanpa asumsi pemrograman atau matematika — dan melaporkan penyampaian kepada sekitar 400 peserta, dengan keterlibatan baru dimulai pada tahap generasi ([[llms-unplugged-teaching-resources-2026|Swift (2026)]]).
- **Apa yang memprediksi keberhasilan [[vibe-coding]] — dan apa yang tetap harus diajarkan:** [[vibe-coding-writing-cs-achievement-2026|Studi CHI 2026 terpreregistrasi (N=100)]] atas vibe-coding "tanpa kode" murni menemukan bahwa capaian ilmu komputer (r = .39) maupun kemahiran komunikasi tertulis (r = .29) secara independen memprediksi kinerja, dengan capaian CS tetap signifikan bahkan setelah mengendalikan kemampuan kognitif umum domain dan menyumbang sekitar dua kali varians unik keterampilan menulis. Karena lingkungannya menyembunyikan kode yang dihasilkan, pengetahuan CS hanya dapat membantu secara tidak langsung (dekomposisi masalah, berpikir algoritmik) — menjadikan estimasi CS sebagai *batas bawah* bagi alur kerja berbantuan AI yang juga memungkinkan penyuntingan. Para penulis berargumen kurikulum harus menimbang komunikasi tertulis bersama dasar-dasar CS, alih-alih memperlakukan vibe coding sebagai penguasaan sintaksis yang menjadi usang.

### Literasi AI, agensi, dan risiko ketergantungan berlebih

Karena pemrograman adalah tempat bantuan AI paling kuat, di situ pula mode kegagalannya paling terlihat.

- **Kepercayaan ≠ ketergantungan yang tepat:** [[trust-reliance-ai-education-2026|Kepercayaan dan ketergantungan pada AI (Pitts et al.)]] menemukan bahwa kepercayaan yang lebih tinggi pada asisten AI memprediksi diskriminasi yang *lebih buruk* antara saran yang benar dan yang menyesatkan selama [[problem-solving|pemecahan masalah]] Python — dimoderasi oleh [[ai-literacy]] dan kebutuhan akan kognisi. Kalibrasi, bukan kepercayaan diri, adalah tujuannya.
- **Literasi AI epistemik:** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]] menunjukkan bahwa dalam ko-pemrograman siswa-AI, 78.8% interaksi bersandar pada tujuan yang tidak berorientasi penguasaan dan strategi yang tidak andal (menyubkontrakkan, mencari verifikasi), dengan hanya 11.1% yang menunjukkan keterlibatan epistemik tinggi — pembelajaran sejati jarang muncul tanpa dukungan desain yang disengaja.

- **Inkuiri AI sempit dan berpola generasi.** Mengklasifikasikan 830 prompt CS2 terhadap taksonomi Graesser, [[student-ai-inquiry-types-cs2-2026|Amoozadeh and Alipour (2026)]] menemukan prompt asersi, verifikasi, dan instrumental mendominasi kedua sesi, dan bahwa siswa generasi pertama mengajukan lebih sedikit pertanyaan dan bersandar pada verifikasi sementara teman sebaya generasi lanjutan menggunakan AI sebagai mitra pemecahan masalah yang aktif.
- **Intervensi struktural terhadap ketergantungan berlebih salin-tempel:** [[soft-barriers-copying-ai-programming-2026|Hambatan lunak untuk penyalinan dalam pemrograman berbantuan AI]] mengevaluasi intervensi desain ringan (misalnya, mekanisme yang mengurangi salin-tempel buta atas keluaran AI) dan menemukan bahwa intervensi itu dapat mengurangi ketergantungan berlebih tanpa memblokir bantuan AI — bukti bahwa risiko [[cognitive-offloading|ketergantungan berlebih]] dalam pendidikan CS dapat diperbaiki lewat desain instruksional, bukan hanya edukasi pembelajar atau pelarangan.
- **Agen yang dapat diajari dan latihan yang produktif:** [[chatgpt-teachable-agent-programming-lbt-2024|Belajar dengan mengajar bersama ChatGPT]] meningkatkan perolehan pengetahuan dan kualitas kode tetapi melemahkan latihan koreksi kesalahan karena agennya terlalu kompeten — pelajaran desain: buat agen *sengaja bisa keliru* agar debugging terjaga.
- **Tata kelola bantuan:** [[llm-programming-support-governance-cs-education|tinjauan cakupan atas 90 sistem]] memperkenalkan **kerangka PEA** (Policy, Enforcement, Authority) untuk membatasi dan mengendalikan bantuan LLM — kosakata komparatif untuk merancang [[scaffolding]] yang membatasi ketergantungan berlebih.

- **Kesesuaian tata kelola, bukan ketatnya.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]] mengusulkan profil tata kelola enam dimensi — landasan pedagogis, otoritas instruksional AI, akuntabilitas manusia, agensi pembelajar, batas konteks, dan visibilitas evaluasi — dan menunjukkan di antara tujuh alat internal dan empat sistem pemrograman terbit bahwa model yang sama dapat mendistribusikan otoritas dan akuntabilitas dengan sangat berbeda; apa yang memprediksi skala yang bertanggung jawab adalah *kesesuaian* tata kelola dengan fungsi instruksional, bukan seberapa ketat alatnya.
- **Konteks perilaku untuk tutoring AI adaptif:** [[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]] menyajikan **TutorTrace**, kumpulan data dan pipeline yang membuat konteks perilaku pembelajar dapat dikomputasi secara waktu-nyata dari telemetri IDE dalam kursus Python berbantuan AI (N=480). Ia menurunkan taksonomi aktivitas sebelum, di antara, dan lintas kueri AI, dan dapat mengklasifikasikan apakah kueri yang akan datang mencerminkan [[help-seeking|pencarian bantuan]] yang terarah atau dependen (AUROC=.717) dan memprediksi kueri yang segera terjadi (AUROC=.726); prompt yang sadar perilaku mengurangi interval kueri tanpa kerja mandiri dari 50.0% menjadi 20.7% dalam evaluasi awal. Ini menunjukkan bagaimana telemetri perilaku dapat membuat [[intelligent-tutoring|tutor pemrograman AI]] adaptif terhadap upaya aktual pembelajar, bukan hanya permintaan eksplisit mereka.
- **Dualitas membangun apa yang Anda gunakan:** posisi unik siswa CS menciptakan kesadaran [[metacognition|metakognitif]] atas keterbatasan AI sekaligus risiko nyata [[cognitive-offloading|Ketergantungan Berlebih]] pada kode yang dihasilkan AI. [[code-review-genai-cs1|Wawancara tinjauan kode]] dan [[critical-engagement-code-completion|studi keterlibatan kritis]] menangani ketegangan ini secara langsung.

- **Koding agensik dan pemahaman dalam PBL tim:** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka et al. (2026)]] memperkenalkan Spec-Driven Development dengan [[agentic-ai|agen AI]] ke dalam kursus proyek rekayasa perangkat lunak sarjana dan menemukan bahwa throughput implementasi (LOC tambahan) naik sepanjang 2022-2025 sementara penggunaan AI yang berat bertepatan dengan penurunan pemahaman kode yang baru pulih setelah pemeriksaan instruktur satu-satu - bukti langsung bahwa perolehan throughput tidak menjamin pemahaman, dan bahwa [[cognitive-offloading|ketergantungan berlebih]] dalam koding berbantuan AI dapat dipantau secara instruksional.

- **Keberlanjutan, bukan adopsi, adalah tempat nilai GenAI diputuskan.** Tinjauan PRISMA atas 45 studi (2023–2025) menemukan generasi dan debugging kode yang membaik seiring kedalaman konseptual yang tidak berubah, dan berargumen bahwa penggunaan berkelanjutan bergantung pada [[trust|kepercayaan]] yang terkalibrasi, keterampilan verifikasi, dan panduan institusional alih-alih [[technology-acceptance-model|kegunaan yang dipersepsikan]] ([[yalwa-genai-programming-education-sustained-use-2026|Yalwa et al., 2026]]).

### Keadilan, budaya, dan siapa yang masuk ke bidang komputasi

- **Memperluas partisipasi:** [[suacode-african-students-motivations|SuaCode]] mendokumentasikan motivasi koding berbasis ponsel pintar di kalangan siswa Afrika (kurang dari 1% lulusan sekolah menengah memiliki keterampilan koding dasar), menginformasikan MOOC berbantuan AI yang aksesibel untuk [[equity-in-ai-education|konteks sumber daya rendah]].
- **Neurodivergensi dan kolaborasi:** [[neurodivergent-computing-students|Mahasiswa komputasi neurodivergen]] melaporkan ketidaknyamanan dengan struktur kolaborasi yang ambigu; tugas terstruktur, tim konsisten yang lebih kecil, dan peran eksplisit meningkatkan [[accessibility]] — pelajaran desain bagi alat AI yang masuk ke kelas komputasi.
- **Budaya membentuk etika yang dipersepsikan:** [[cross-cultural-student-perceptions-genai-computing|Mahasiswa komputasi Kanada vs. Korea Selatan]] menilai praktik koding berbantuan AI yang identik secara berbeda meskipun kebijakannya secara fungsional identik — harmonisasi kebijakan tidak menghasilkan harmonisasi persepsi, sebuah persoalan [[academic-integrity]] dan [[equity-in-ai-education]].
- **[[explainable-ai|Transparansi]] kolaborasi:** [[student-perception-ai-use-collaboration|Graf et al.]] menemukan bahwa keyakinan mitra yang tidak selaras tentang penggunaan AI masing-masing memprediksi skor proyek yang lebih rendah, terutama bagi siswa berkinerja lebih rendah — mekanisme transparansi (pengungkapan, log bersama) mungkin diperlukan dalam pemrograman kolaboratif.

### Pendidikan etika dan tenaga kerja

- **Kesenjangan etika-ke-perilaku:** [[cost-of-ethics-crisis-cs-ethics-education|"Krisis Biaya Etika"]] menunjukkan mahasiswa CS, meskipun telah mendapat pendidikan etika kontemporer, memprioritaskan kompensasi, lokasi, dan budaya di atas pertimbangan [[ethics|etis]] dalam mencari kerja — kesenjangan kritis dalam bagaimana pengajaran etika bertransfer ke perilaku.
- **Pembentukan ulang tenaga kerja:** [[ai-engineering-computing-workforce-grey-literature-2026|tinjauan sistematis atas literatur kelabu AS]] membingkai "Masalah Dua Kereta" — perubahan AI yang cepat berlomba dengan adaptasi [[governance|institusional]] — dan mendesak kompetensi AI yang tahan lama, etika/tata kelola, dan kredensial berbasis keterampilan yang selaras dengan peran yang muncul (misalnya, [[prompt-engineering]], audit AI, [[educational-policy-ai|kebijakan AI]]).

### Koneksi

Pendidikan CS terhubung dengan [[computational-thinking]], [[stem-education]], [[automated-assessment|Penilaian Otomatis]], [[prompt-engineering]], [[ai-literacy]], [[agentic-ai]], [[curriculum-design]], [[human-ai-collaboration]], [[higher-ed]], [[k-12]], dan [[professional-training]]. Tetangga terapan terdekatnya adalah [[information-technology]]: pendidikan CS mengambil program dan algoritma sebagai objeknya, sementara pendidikan TI mengambil sistem organisasi yang digunakan dan pertimbangan praktisi tentangnya — itulah sebabnya kedua bidang memperdebatkan bahaya AI yang berbeda, apakah generasi kode menggerus keterampilan pemrograman berbanding apakah pemecahan masalah AI menggerus keterampilan diagnosis, dan mengajukan pertanyaan berbeda kepada lulusannya, apakah mereka dapat membangun sistem berbanding apakah mereka dapat mengelola sistem yang mereka administrasikan. Ini adalah domain tempat alat [[ai-education|AIED]] dipakai sekaligus dibangun, menjadikannya landasan uji bagi [[intelligent-tutoring]], [[educational-robotics]], [[collaborative-learning]], [[game-based-learning]], dan risiko [[cognitive-offloading|Ketergantungan Berlebih]].

**Sintesis 72 studi dan kerangka VIE.** [[kumar-genai-computing-education-systematic-review-2026|Kumar, Wongsirichot dan Nanthaamornphong (2026)]] meninjau literatur empiris tentang AI generatif dalam pendidikan komputasi dan pemrograman (Januari 2022 – April 2026, 72 studi, 33 venue) dan mengedepankan justru ciri struktural yang membuat disiplin ini khas: AI menghasilkan sendiri artefak yang dinilai, sehingga menggunakan alat, mempelajari keterampilan, dan dinilai melebur dalam satu ketukan tombol. Sintesis mereka atas 14 tema menemukan bahwa efek yang paling banyak direplikasi di bidang ini — perolehan efisiensi dan penyelesaian jangka pendek (36 studi) — juga yang paling menyesatkan: perolehan itu tidak [[transfer-of-learning|bertransfer]] ke kinerja tanpa bantuan (21 studi), dan [[prior-knowledge|pengetahuan awal]] memoderasi apakah bantuan menjadi keterampilan yang tahan lama atau kruk. Riset [[ai-detection|deteksi]] masih tipis (3 studi) sementara desain ulang kursus relatif memiliki bukti yang baik (25 studi), dan tinjauan itu mengonsolidasikan korpus menjadi tiga persyaratan desain yang saling bergantung — Verification, Implementation dan Equity — di mana keterlibatan kritis dengan keluaran AI harus menjadi komponen kerja siswa yang dinilai dan teramati alih-alih aspirasi yang diserahkan pada kebijaksanaan siswa ([[scaffolding]], [[assessment-validity]]).

## Implikasi bagi instruktur komputasi

- **Rancang penilaian yang tidak bisa dilewati AI begitu saja.** Manfaatkan pola kegagalan berulang GenAI (antarmuka, kelas abstrak, pewarisan, tugas berbasis gambar) alih-alih melarang alat sepenuhnya — [[genai-oop-programming-assessments-2026|sistem GenAI masih kesulitan di sana]].
- **Tugas rumah yang dapat dinilai otomatis tidak menawarkan hambatan penyelesaian.** [[chatgpt-qiskit-homework-autogradable-2026|Kaltchenko & Tiwana (2026)]] menjalankan 50 sesi ChatGPT per tugas Qiskit dan seluruh 150 artefak berjalan dan lulus penilai, karena [[personalized-learning|personalisasinya]] memvariasikan parameter alih-alih struktur tugas; obatnya adalah penilaian langsung atas pemahaman — modifikasi tersupervisi atau pembelaan lisan.
- **Kalibrasi kepercayaan, jangan hanya membangunnya.** [[trust-reliance-ai-education-2026|Riset kepercayaan-ketergantungan]] menunjukkan kepercayaan yang lebih tinggi memprediksi diskriminasi yang *lebih buruk* atas saran AI yang menyesatkan; ajarkan verifikasi dan evaluasi kritis, dimoderasi oleh literasi AI dan kebutuhan akan kognisi.
- **Jaga debugging dan [[desirable-difficulties|pergulatan produktif]] tetap hidup.** Pilih alat atau agen yang sengaja bisa keliru ([[chatgpt-teachable-agent-programming-lbt-2024|belajar dengan mengajar]]) yang mempertahankan latihan koreksi kesalahan, dan personalisasikan media yang dihasilkan AI untuk menghindari efek pembalikan keahlian ([[ai-generated-traces-novice-programmers|pembalikan keahlian]]).
- **Kelola bantuan AI secara eksplisit.** Definisikan kebijakan, penegakan, dan otoritas untuk dukungan LLM ([[llm-programming-support-governance-cs-education|PEA]]) alih-alih membiarkan batasnya implisit.
- **Geser kurikulum ke arah verifikasi dan pengarahan agen.** Saat GenAI mengotomatiskan implementasi, ajarkan memahami serta memverifikasi artefak AI ([[reshaping-cs-education-genai|bentuk ulang kurikulum]]) dan keterampilan rekayasa perangkat lunak agensik yang terstruktur ([[ase-26-agentic-software-engineering-curriculum|ASE-26]]).
- **Strukturkan kolaborasi untuk semua pembelajar.** Tim konsisten yang lebih kecil, peran eksplisit, dan transparansi penggunaan AI mendukung siswa [[neurodiversity|neurodivergen]] dan kolaborasi yang adil, terutama ketika keyakinan penggunaan AI yang tidak selaras menurunkan skor proyek.

- **Penjelasan kesalahan pemrograman yang adaptif-LLM (2026):** Studi crowdsourced (N=103) menemukan pesan kesalahan yang ditulis ulang LLM meningkatkan keterbacaan, tetapi kinerja debugging objektif bergantung pada penyesuaian gaya penjelasan (pragmatis vs kontingen) dengan keterampilan pemrogram — wawasan perancah bagi pendidikan pemrograman berbantuan AI ([[llm-adaptive-programming-error-explanations-2026]]).
- **Pengawasan adalah soal kelayakan, bukan ketepatan (2026):** Mengodekan 962 giliran siswa-AI dari 145 mahasiswa rekayasa perangkat lunak tahun pertama, [[novice-se-students-oversight-genai-2026|Shakiba and Chaffey (2026)]] menemukan 74.4% intervensi menyebut masalah kelayakan berbanding 16.9% yang menyebut ketepatan, dan 51.0% respons memodifikasi keluaran alih-alih prompt.

- **"Kesepakatan atas kode berarti penilai membaca kodenya."** Dua penilai instruktur dalam tolok ukur itu sepakat pada **0.815** atas jawaban C++: **empat** model melampaui mereka dengan interval di atas 100% dari plafon itu dan **empat belas** jatuh di bawahnya, hingga **33%**. Pada tugas kode yang sama, catatan yang meminta nilai penuh menaikkan nilai Qwen3 235B sebesar **83.2% dari skala**, dan tujuh model dalam baterai itu memberi kredit pada jawaban kosong, sehingga [[porcaro-ai-grading-benchmark-2026|satu putaran penilaian atas kode siswa memerlukan uji kegagalan di samping angka kesepakatan]].

- **"Efeknya sama pada setiap tahap kursus."** Efek itu tumbuh seiring pekerjaan: pada **60 program Java lengkap** yang dinilai dengan rubrik **14 tingkat**, efek label adalah **2.8 kali** ukuran jawaban singkatnya pada GPT-4.1-mini dan **2.4 kali** pada Qwen, meskipun hanya **0.4 kali** pada Gemini. [[porcaro-ai-grader-reliability-2026|Tugas dan rubrik adalah bagian dari apa yang diukur efek itu]], sehingga ukuran yang divalidasi pada jawaban singkat tidak bertransfer ke program.

## Miskonsepsi umum

- **"Siswa yang pair-programming dengan AI sedang belajar memprogram."** Dalam ko-pemrograman siswa-AI, **hampir 80% interaksi bersandar pada strategi non-belajar seperti menyubkontrakkan jawaban**, dan hanya **sekitar 1 dari 9 yang menunjukkan** keterlibatan epistemik mendalam. Pola dominannya adalah bertransaksi untuk keluaran.
- **"Agen konversasional untuk pemula berlandaskan teori belajar."** **Hanya 4 dari 23 studi mendasarkan desain pada [[learning-theories|teori belajar]]**, sehingga sebagian besar basis bukti mendokumentasikan apa yang dilakukan sistem tanpa teori mengapa ia seharusnya bekerja.
- **"Literatur perkakas mencerminkan distribusi global bidang ini."** **17 dari 23 prototipe hanya berbahasa Inggris meskipun sebagian besar riset berasal dari luar** konteks berbahasa Inggris. Prototipe itu melayani populasi yang lebih sempit daripada yang dilayani risetnya.

## Konsep terkait

- [[computational-thinking]]
- [[vibe-coding]]
- [[stem-education]]
- [[information-technology]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[k-12]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[teacher-education]]
- [[professional-training]]
- [[ai-education]]
- [[collaborative-learning]]
- [[prior-knowledge]]
- [[scaffolding]]
- [[assessment-validity]]

## Artikel terkait

- [[shakil-code-commits-complexity-genai-2026]] — Kode, Commit, dan Kompleksitas di Era GenAI: Studi Longitudinal Proyek Capstone Berbasis Tim

- [[mihaylova-llm-feedback-live-programming-course-2026]] — Tiga penerapan, tiga model, 173 ribu kiriman: bagaimana perilaku petunjuk tampak dalam kursus nyata
- [[kumar-genai-computing-education-systematic-review-2026]] — Tinjauan sistematis 72 studi: perolehan efisiensi yang tidak bertransfer, dan kerangka VIE
- [[vibe-coding-writing-cs-achievement-2026]] — Capaian CS dan keterampilan menulis memprediksi kemahiran vibe-coding (CHI 2026)
- [[tutortrace-learner-behavioral-states-2026]]

- [[code-review-genai-cs1]] — Tinjauan kode CS1 atas kode yang dihasilkan AI
- [[dura-llm-cs2]] — DURA: asisten LLM untuk CS2
- [[reshaping-cs-education-genai]] — membentuk ulang kurikulum CS sarjana untuk GenAI
- [[ase-26-agentic-software-engineering-curriculum]] — kurikulum rekayasa perangkat lunak agensik ASE-26
- [[test-driven-ai-assisted-learning]] — Pembelajaran Berbantuan AI Berbasis Tes
- [[genai-oop-programming-assessments-2026]] — Kinerja GenAI pada penilaian OOP pengantar yang autentik (Lepp & Kaimre 2026)
- [[trust-reliance-ai-education-2026]] — kepercayaan vs. ketergantungan yang tepat selama pemecahan masalah Python
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — literasi AI epistemik dalam ko-pemrograman siswa-AI
- [[chatgpt-teachable-agent-programming-lbt-2024]] — belajar dengan mengajar bersama ChatGPT
- [[llm-programming-support-governance-cs-education]] — kerangka PEA untuk membatasi bantuan LLM
- [[conversational-agents-novice-programmers-scoping-2025]] — Tinjauan cakupan agen konversasional untuk pemrogram pemula
- [[debugtracker-classroom-debugging]] — debugging kelas DebugTracker
- [[llm-automated-grading-programming-comparison-2026]] — perbandingan penilaian otomatis 18 model
- [[ai-generated-traces-novice-programmers]] — trace animasi yang dihasilkan AI
- [[student-misconceptions-conditionals-loops-taxonomy]] — taksonomi miskonsepsi conditionals/loops
- [[jost-llm-programming-education-learning-outcomes]] — dampak LLM pada hasil belajar pemrograman (Jošt et al.)
- [[genai-meta-analysis-programming-learning]] — meta-analisis GenAI dan pembelajaran pemrograman
- [[golrang-propact-pair-programming-2026]] — pemodelan pair-programming diadik
- [[critical-engagement-code-completion]] — keterlibatan kritis dengan pelengkapan kode
- [[suacode-african-students-motivations]] — koding berbasis ponsel pintar SuaCode di Afrika
- [[cross-cultural-student-perceptions-genai-computing]] — persepsi lintas budaya atas koding berbantuan AI
- [[neurodivergent-computing-students]] — mahasiswa komputasi neurodivergen
- [[microbit-robotics-machine-learning-teacher-training-2026]] — Micro:bit + ML dalam pelatihan guru
- [[computational-thinking-educational-robotics-secondary-2026]] — berpikir komputasional dan robotika pendidikan
- [[roboblockly-conversational-block-robotics-ct-2026]] — pemrograman blok berwujud RoboBlockly
- [[edusim-llm-robotic-simulation-education-2026]] — kendali robot bahasa alami EduSim-LLM
- [[llm-computational-thinking-physics-2026]] — dukungan LLM untuk berpikir komputasional dalam fisika
- [[student-ai-inquiry-types-cs2-2026]] — Analisis Jenis Inkuiri dalam Interaksi Siswa-AI
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT menyelesaikan tugas Qiskit; desain yang dapat dinilai otomatis
- [[llm-adaptive-programming-error-explanations-2026]] — penjelasan adaptif LLM atas kesalahan pemrograman
- [[soft-barriers-copying-ai-programming-2026]] — ketahanan terhadap salin-tempel dalam pemrograman berbantuan AI
- [[zhang-ml-student-progress-programming-2026]]
- [[spec-driven-development-ai-agents-sdpbl-2026]] - SDD dengan agen AI dalam kursus PBL perangkat lunak; throughput vs. pemahaman
- [[student-reception-genai-analogies-computing-2026]] — Cacat tetapi Mudah Diingat: Penerimaan Kritis Siswa atas Analogi GenAI yang Dipersonalisasi Minat dalam Pendidikan Komputasi
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: menguji kapasitas model untuk menghasilkan miskonsepsi strategis di seluruh kurikulum CS
- [[humble-prompt-injection-ai-grading-red-team-2026]] — red-team prompt injection atas penilaian yang dimediasi AI: instruksi tersembunyi yang menggeser nilai tanpa terdeteksi
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Retrieval-Augmented Generation untuk Pendidikan Ilmu Komputer Teoretis -- Kerangka Evaluasi Komprehensif untuk Analisis Algoritma dan Teori Kompleksitas
- [[llms-unplugged-teaching-resources-2026]] — LLM Unplugged: Sumber Daya Pengajaran untuk Dunia ChatGPT
- [[instructional-governance-design-computing-education-2026]] — Tata Kelola Instruksional secara Desain: Kerangka bagi AI dalam Pendidikan Komputasi

- [[judgment-centred-software-engineering-education-2026]] — Tinjauan dan Kerangka Pasca-Hipe untuk Pendidikan Rekayasa Perangkat Lunak yang Diperkaya AI
- [[llm-graders-computer-science-exams-2026]] — Di Mana Penilai LLM Berhasil dan Gagal: Bukti dari Dua Ujian Ilmu Komputer
- [[student-llm-use-cs-subfields-2026]] — Adopsi LLM berkisar dari 89.6% pada algoritma hingga 15.2% pada rekayasa perangkat lunak di antara 211 siswa, mengikuti tugas alih-alih subbidang
- [[educator-guided-llm-pedagogical-agent-2026]] — Umpan balik bertahap yang ditulis pendidik untuk desain basis data konseptual: diagnosis tersembunyi, pengungkapan terkendali, 71.1% mencapai tingkat sasaran di antara 383 episode
- [[socraticrepair-program-debugging-2026]] — SocraticRepair: Tutoring Sokratik Berpanduan Perencanaan untuk Debugging Program dan Perbaikan Miskonsepsi
- [[browser-sized-agents-slm-webllm-tutor-2026]] — Agen Seukuran Peramban: Model Bahasa Kecil dan WebLLM untuk Pendidikan Pemrograman Berbantuan AI Berbantuan Alat
- [[novice-se-students-oversight-genai-2026]] — Melampaui Ketepatan: Bagaimana Mahasiswa Rekayasa Perangkat Lunak Pemula Menjalankan Pengawasan atas AI Generatif (Shakiba and Chaffey 2026)
- [[porcaro-ai-grading-benchmark-2026]] — Melampaui kesepakatan: 22 penilai yang diprompt menghadapi uji yang jawabannya diketahui, dan sebagian besar dapat dibujuk naik (Porcaro 2026)
- [[porcaro-ai-grader-reliability-2026]] — Konteks pembelajar mengubah nilai penilai LLM pada pekerjaan yang identik, dan kesepakatan dengan guru tidak menangkapnya (Porcaro 2026, Paper VI)
- [[yalwa-genai-programming-education-sustained-use-2026]] — Penggunaan Berkelanjutan Kecerdasan Artifisial Generatif (GenAI) dalam Pendidikan Pemrograman: Sebuah Tinjauan Sistematis
