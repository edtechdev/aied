---
title: "Robot dalam Pendidikan"
created: "2026-08-13T18:49:42-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
updated: "2026-11-04T02:20:32-05:00"
translation_of: "concepts/educational-robotics"
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Robot dalam pendidikan (robotika pendidikan)** — penggunaan robot fisik atau simulasi sebagai alat untuk [[teacher-role|pengajaran]] dan pembelajaran. Robotika pendidikan merentang pada spektrum yang luas: dari kit terprogram yang mengajarkan berpikir komputasional dan pemrograman, hingga robot asisten sosial dan humanoid yang menjadi tutor, bercerita, memodelkan bahasa isyarat, atau melatih keterampilan sosial. Ia dihargai karena memupuk [[problem-solving|pemecahan masalah]], [[critical-thinking|berpikir kritis]], [[creativity|kreativitas]], dan keterlibatan STEAM, serta karena membuat konsep komputasi abstrak menjadi nyata melalui interaksi berwujud. Korpus robotika basis pengetahuan ini merentang pada pemrograman terintegrasi [[curriculum-design|kurikulum]], tutor percakapan bertenaga LLM, robot [[storytelling-in-education|storytelling]] asisten sosial, dan permainan peran untuk pembelajaran sosial-emosional. Ia ditopang dua area yang berkerabat dekat dan diserap di sini: **robot sosial** (robot yang dirancang untuk interaksi sosial dan pembangunan relasi) dan **interaksi manusia–robot (HRI)** (studi tentang bagaimana orang mempersepsi, memercayai, dan belajar bersama robot).

## Pertanyaan yang Perlu Dipertimbangkan

- Robot di ruang kelas menambahkan [[community-of-inquiry|kehadiran sosial]] yang berwujud yang tidak dimiliki chatbot di layar. Menurut Anda, apa yang diubah oleh tubuh fisik dan isyarat sosial robot terhadap cara siswa belajar, memercayai, dan terlibat — dan dari apa hal itu mungkin mengalihkan perhatian?
- Robot sosial menggunakan tutur, gestur, dan kepribadian yang mirip manusia untuk mengajar, bercerita, atau melatih keterampilan sosial. Apakah robot yang tampak dan bertindak seperti manusia secara inheren lebih baik untuk pembelajaran, ataukah kehadiran sosial itu dapat membawa risiko (misinformasi, ketergantungan berlebih, privasi) yang tidak dimiliki alat perangkat lunak semata?
- LLM kini memungkinkan robot sosial bercakap dengan lancar. Jika robot dapat berbicara seperti tutor, apa yang masih bergantung pada perwujudan fisiknya — dan di mana penambahan "tubuh" benar-benar penting bagi pembelajaran dibandingkan sekadar menjadi kebaruan?
- Pikirkan saat Anda mempelajari sesuatu dengan memanipulasi objek secara fisik atau menyaksikan tindakan Anda menghasilkan hasil yang terlihat. Bagaimana memprogram robot fisik dapat membumikan gagasan abstrak (seperti logika program) secara lebih efektif daripada menulis kode di layar?

## Pendahuluan

Robotika pendidikan adalah aplikasi [[ai-education|AI dalam pendidikan]] yang khas namun berkerabat dekat. Berbeda dari [[intelligent-tutoring|tutoring cerdas]] berbasis perangkat lunak semata atau chatbot [[llm]], robot menambahkan kehadiran **berwujud** dan sering kali **sosial** — agen fisik yang dapat dilihat, dimanipulasi, dan (semakin sering) diajak bercakap oleh pembelajar. Perwujudan ini menjadi pusat nilai [[pedagogy|pedagogis]] mereka: ia membumikan logika program abstrak dalam perilaku yang dapat diamati, dan dapat mendukung pembangunan relasi serta keterlibatan emosional yang tidak dapat dilakukan sistem tanpa tubuh.

Buktinya lebih tipis daripada volume kerjanya: sebuah tinjauan tentang AI dan robotika dalam pendidikan menemukan bahwa sebagian besar studi empiris melibatkan pembelajar di bawah 13 tahun selama empat minggu atau kurang, terkonsentrasi di beberapa negara yang berinvestasi awal, dengan [[learning-gains|kinerja belajar]] sebagai hasil yang paling banyak diteliti dan etika, keadilan, serta kebijakan tertinggal dari penerapan ([[white-wu-robotics-ai-education-2026|White dan Wu (2026)]]).

### Robot sosial dan interaksi manusia–robot

Dua alur membentuk sisi sosial robotika dalam pendidikan.

**Robot sosial** adalah robot yang dirancang untuk melibatkan orang melalui interaksi sosial, menggunakan isyarat mirip manusia seperti tutur, gestur, ekspresi wajah, dan kepribadian untuk berkomunikasi, mengajar, membantu, atau menemani. Dalam pendidikan, robot sosial (humanoid seperti iCub, Pepper, Reachy, dan robot pendamping) digunakan untuk tutoring, storytelling, permainan peran, dukungan bahasa, dan sebagai pendamping belajar. Kehadiran sosial mereka adalah pembeda utama dari [[agentic-ai|agen AI]] berbasis perangkat lunak, yang memungkinkan pembangunan relasi dan keterlibatan emosional. Kemajuan [[llm|model bahasa besar]] telah secara dramatis memperluas apa yang dapat dikatakan dan dilakukan robot sosial, memungkinkan tutoring percakapan yang lancar dan adaptif — sekaligus memperkenalkan risiko seperti misinformasi, [[cognitive-offloading|ketergantungan berlebih]], dan pelanggaran [[privacy|privasi]], yang memotivasi pendekatan desain berbasis pengetahuan.

**Interaksi manusia–robot (HRI)** adalah studi interdisipliner tentang bagaimana orang dan robot berinteraksi, mencakup persepsi, komunikasi, kolaborasi, dan dinamika sosial, kognitif, serta [[ethics|etis]] dari interaksi itu. Dalam pendidikan, HRI mendasari bagaimana pembelajar mempersepsi, memercayai, dan belajar bersama robot — baik saat memprogram robot, bercakap dengan robot tutor, maupun melatih skenario sosial. [[research-methods-aied|Penelitian]] HRI memeriksa bagaimana penampilan, perilaku, konteks tugas, dan perwujudan robot membentuk [[usability-research|pengalaman pengguna]], kepercayaan, agensi, dan pembelajaran. Kekhawatiran utama dalam HRI pendidikan meliputi pelestarian [[agency|agensi]] manusia, pembangunan [[trust|kepercayaan]], dukungan terhadap [[self-efficacy|efikasi diri]], dan memastikan bahwa interaksi dengan robot mendukung otonomi serta pembelajaran sosial alih-alih meruntuhkannya. Ia menghubungkan robotika dengan [[human-ai-collaboration|kolaborasi manusia–AI]] dan [[social-emotional-learning|pembelajaran sosial-emosional]].

### Bagaimana robot digunakan dalam pendidikan

[[teaching-with-robots-five-types-perspective-2026|Christ dkk. (2026)]] menambahkan tipologi peran alih-alih daftar teknologi: lima tipe robot kelas hasil lokakarya mereka dibedakan oleh *fungsi pedagogis dan tingkat abstraksi*, bukan oleh perangkat keras. Tipe a menjalankan demonstrasi noninteraktif atas pola sosial generik (teater emosi berskenario yang diikuti diskusi tentang dinamika seperti eskalasi atau kesalahpahaman); tipe b adalah robot interaktif yang reaktif terhadap sentuhan dan mendukung teater fisik partisipatif, [[embodied-learning|pembelajaran berwujud]], kesadaran batas, dan regulasi emosi; tipe c adalah mitra bahasa lisan yang menunjukkan empati dan mengingat interaksi dengan satu murid, menciptakan suasana satu-lawan-satu yang terlindungi untuk pengungkapan diri; tipe d dipandu secara eksternal oleh spesialis tersembunyi seperti boneka dengan derajat kebebasan tambahan, ditujukan untuk meratakan hierarki sosial; dan tipe e adalah robot noninteraktif yang memutar ulang tindakan yang baru diamati di sekolah sehingga murid dapat merenungkan perilaku yang terletak dalam konteks — kontrasnya dengan tipe a justru terletak pada abstraksinya yang khas konteks alih-alih digeneralisasi. Tipologi itu secara eksplisit mengaku sebagai ruang desain yang belum tervalidasi dan bersandar pada satu program kesehatan mental nasional, sehingga ia adalah menu untuk merancang dan mengevaluasi peran robot, bukan bukti bahwa salah satunya berhasil.

- **Berpikir komputasional dan pemrograman:** Robot terprogram (misalnya LEGO, platform berbasis blok) membantu pembelajar menghubungkan kode dengan hasil nyata. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]] menghubungkan berpikir komputasional dengan kurikulum STEAM sekolah menengah, dan [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]] menggabungkan pemrograman blok dengan agen [[conversational-ai|AI percakapan]] dan umpan balik robot yang berwujud. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]] memungkinkan pemula mengendalikan robot simulasi dengan bahasa alami.

- **Tutoring dan penyampaian pengetahuan:** [[knowledge-based-design-generative-social-robots-2026|Penelitian desain berbasis pengetahuan]] dan [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]] mengembangkan robot sosial generatif bertenaga LLM yang menjadi tutor bagi mahasiswa, menangani risiko seperti misinformasi dan [[cognitive-offloading|ketergantungan berlebih]]. [[task-context-trust-educational-hri-2026|Penelitian tentang kepercayaan]] menunjukkan bahwa apa yang dilakukan robot (konteks tugas) membentuk kepercayaan pembelajar lebih besar daripada penampilannya, dengan kepercayaan tertinggi pada tugas instruksional.

- **Storytelling dan keterlibatan:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] dan [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]] menggunakan robot sosial interaktif bertenaga LLM untuk storytelling guna mendongkrak motivasi dan keterlibatan, sementara [[icub-humanoid-storytelling-llm-hri-2025|studi HRI naratif iCub]] mengeksplorasi storytelling ko-kreatif antara manusia dan humanoid.

- **Pembelajaran sosial-emosional dan [[inclusive-learning|inklusi]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] menggunakan permainan peran termediasi robot untuk melatih intervensi pengamat dalam perundungan, dan [[pepper-robot-sign-language-lis-2025|kerja dengan robot Pepper]] mengeksplorasi komunikasi bahasa isyarat robot untuk mendukung pembelajar Tuli. [[pepper-social-robot-formal-education-scoping-review-2026|Sebuah tinjauan lingkup]] memetakan penggunaan Pepper dalam pendidikan formal.

- **Otonomi dan agensi:** [[human-autonomy-agency-hri-review-2025|Sebuah tinjauan sistematis]] menyintesis bagaimana HRI memengaruhi otonomi manusia dan rasa agensi, menjembatani kerangka desain dengan tuntutan [[regulation|regulasi]] (EU AI Act, IEEE Ethically Aligned Design). [[social-robot-study-companions|Robot sosial sebagai pendamping belajar]] dan [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|integrasi robot–LLM dalam penulisan kreatif]] lebih lanjut mengeksplorasi peran robot.

- **Pendekatan berbasis proyek dan berbasis permainan:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]] menyajikan mata kuliah robotika berbasis proyek, dan [[game-based-gamified-robotics-education-review-2026|sebuah tinjauan sistematis]] membandingkan pembelajaran berbasis permainan dan gamifikasi dalam pendidikan robotika.

- **Pembelajaran penguatan dan sim-to-real dalam alur kerja robotika penuh.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao dan Wang (2026)]] mengubah alur kerja penelitian robotika ujung-ke-ujung — perakitan, pemeriksaan kelistrikan, pelatihan kebijakan berbasis simulasi, dan penerapan fisik — menjadi mata kuliah [[k-12|sekolah menengah]] yang dibangun di atas satu humanoid terbuka (ToddlerBot, dengan biaya komponen yang dilaporkan di bawah USD 6,000) dalam delapan sesi tiga jam. Pasangan siswa berbagi satu robot dan melatih [[reinforcement-learning|kebijakan berjalan]] di [[simulation|simulasi]] sebelum menerapkannya ke perangkat keras, dengan pagar keselamatan (lulus uji berdiri sebelum berjalan) yang membuat urutan ketergantungan terlihat. Karena artefak bersama memberi manfaat pada tim alih-alih individu, kerangka itu memisahkan kinerja robot dari pemahaman individual: siswa bergiliran peran, masing-masing menyerahkan prediksi dan penjelasan terpisah di setiap titik pemeriksaan, dan langkah terbantu secara eksplisit tidak diperlakukan sebagai bukti penguasaan konseptual — peringatan penulis bahwa lulus tonggak robot bukan berarti memahaminya.

- **Robotika kompetisi sebagai masalah ekosistem, bukan masalah kit.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson dkk. (2026)]] menempatkan kendala pengikat pada robotika K–12 bukan pada kurikulum atau perangkat keras, melainkan pada pendampingan teknis lokal yang berkelanjutan, dan menunjukkan bahwa kendala itu terdistribusi secara geografis: di Indiana, partisipasi FIRST LEGO League runtuh pada musim daring 2020, partisipasi perkotaan pulih secara bertahap, dan partisipasi pedesaan tidak, tetap mendekati tingkat pasca-2020 sepanjang 2025–2026. Kerangka ARC mereka menjadikan pendampingan sebagai objek yang direkayasa — perguruan tinggi menjalankan mata kuliah berbayar kredit yang menyiapkan mahasiswa sebagai mentor lokakarya bagi tim di sekitarnya, dan program sekolah yang matang menjadi hub sekunder yang siswanya yang berpengalaman menjadi mentor sebaya bagi sekolah lain, sehingga jangkauan menyebar melampaui daerah tangkapan universitas mana pun melalui lingkar yang saling memperkuat. Sebuah uji coba satu universitas menciptakan tiga tim FLL pedesaan dan menggeser koneksi komunitas mahasiswa dari 1.86 menjadi 4.00 pada skala lima poin (pergeseran terbesar dari semua yang diukur, di atas kepercayaan mengajarkan konsep teknis pada +1.29), sementara simulasi Markov yang eksplisit secara spasial atas 1,925 sekolah negeri Indiana memproyeksikan 992 program sekolah setelah 40 tahun di bawah asumsi moderat, berbanding 161 tanpa ARC. Buktinya berada pada tingkat kelayakan — tujuh mentor dan empat orang tua, laporan diri retrospektif, tanpa kelompok kontrol — tetapi pembingkaiannya dapat dipindahkan ke program robotika mana pun: yang berskala atau gagal berskala adalah kapasitas pendampingan dan geografi hub, bukan robotnya ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **Perkembangan anak dan pembelajar muda:** [[ai-toys-child-development-2026|Mainan bertenaga AI dan perkembangan anak]] mengalihkan lensa ke mainan AI komersial pada masa kanak-kanak awal, memeriksa bagaimana mainan bertenaga AI memengaruhi perkembangan dan bermain anak. Ini memperluas robotika pendidikan melampaui robot kelas menuju mainan konsumen yang ditemui anak di rumah, memunculkan pertanyaan tentang [[pedagogical-agent|agen]] dalam bermain, [[trust-calibration|kalibrasi kepercayaan]], [[agency|agensi]], dan [[well-being|kesejahteraan]] bagi pembelajar termuda — area di mana panduan desain lebih tipis daripada untuk kurikulum robotika usia sekolah.
- **Pengodean tangible dan robot sosial dalam [[ai-literacy|literasi AI]] pra-TK.** Lee (2026) mengintegrasikan bermain unplugged, pengodean tangible (Bee-Bot, Ozobot), dan dialog terpandu dengan robot AI sosial dalam kurikulum Play With AI (PL-AI) untuk pra-TK dan taman kanak-kanak. [[design-based-research|Penelitian berbasis desain]] itu mendokumentasikan bagaimana aktivitas robotika berwujud dan tangible ini mendukung penalaran yang sedang tumbuh pada anak tentang konsep AI, dengan empat prinsip desain — bermain berwujud, pengodean tangible, dialog terpandu, dan kodisain guru — yang menawarkan model sesuai tahap perkembangan bagi pendidikan robotika dan AI [[early-childhood-elementary-ai-education|anak usia dini]].

- **Dua paradigma bagi pembelajar muda: robot pengodean dan robot sosial generatif.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li dan Lee (2025)]] membingkai robotika anak usia dini sebagai pasangan dua paradigma [[pedagogy|pedagogis]], masing-masing dengan basis teoretis yang khas. **Robot pengodean** (Bee-Bot, KIBO, Matatalab) berasal dari LOGO Papert dan mewujudkan [[constructivist|konstruksionisme]] — anak belajar dengan membuat dan membangun [[computational-thinking|berpikir komputasional]] melalui pemrograman tangible. **Robot sosial generatif**, yang ditenagai [[generative-ai|AI generatif]], berakar pada [[sociocultural-learning|konstruktivisme sosial]], bertindak sebagai teman percakapan atau tutor yang [[scaffolding|memberi perancah]] pembelajaran dalam Zona Perkembangan Proksimal anak dan mendukung perkembangan sosial-emosional. **Pendekatan Proyek Kreatif** lima langkah mereka untuk mengintegrasikan kedua jenis robot ke dalam Pendekatan Proyek menjaga guru sebagai fasilitator yang memandu interaksi anak–robot, menyeimbangkan otomatisasi dengan [[creativity|kreativitas]], dan melestarikan [[agency|agensi]] anak.

- **Apa yang sebenarnya dilakukan robotika CT taman kanak-kanak.** Sebuah tinjauan sistematis atas 53 studi menemukan pembelajaran berbasis masalah, storytelling, dan pemberian perancah sebagai strategi yang paling sering digunakan, dengan sebagian besar studi tidak menyebutkan kerangka CT apa pun dan menggunakan alat penilaian ad hoc alih-alih instrumen tervalidasi seperti TechCheck-K ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou & Sapounidis (2026)]]).
- **Perencanaan LLM alih-alih percakapan.** [[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková (2026)]] menggunakan model visi-bahasa untuk mengubah foto Shoebox Tasks — aktivitas terstruktur secara visual yang digunakan bersama pembelajar dalam spektrum autisme — menjadi masalah PDDL yang dijalankan atau didemonstrasikan oleh humanoid Nao, dengan kebenaran rencana dinilai pada enam tugas alih-alih hasil pembelajar apa pun.

### Perwujudan dan pedagogi

Tema yang menentukan adalah bahwa robot efektif ketika mendukung tujuan pembelajaran yang sejati — bukan sebagai latihan teknis yang terisolasi. Proyektor robotik yang dipasang di meja seri dengan ChatGPT laptop selama bantuan tersedia (6.7 berbanding 7.3/10, p = .41) tetapi mempertahankan skornya setelah bantuan ditarik (7.0 berbanding 4.4/10, p = .003), skor transfer jangka pendek 60% lebih tinggi — perolehan yang bergantung tugas yang oleh penulisnya diatribusikan pada ko-lokasi spasial alih-alih penggantian umum ([[aifred-desk-robotic-ai-guidance-2026|Orlando dkk. (2026)]]). Nilai robot bergantung pada konteks pedagogis: mengajarkan berpikir komputasional ([[computational-thinking]]), mendukung [[stem-education|STEAM]], membangun keterampilan [[cs-education|pemrograman]], memotivasi pembelajar ([[motivation]], [[student-engagement|keterlibatan]]), atau mendukung [[social-emotional-learning|pembelajaran sosial-emosional]] dan [[equity-in-ai-education|keadilan]]. Robotika juga terhubung dengan [[project-based-learning|pembelajaran berbasis proyek]], [[game-based-learning|pembelajaran berbasis permainan]], dan [[experiential-learning|pembelajaran eksperiensial]]. Pertimbangan desain utama meliputi pelestarian [[agency|agensi]] pembelajar, pembangunan [[trust|kepercayaan]], dukungan terhadap [[self-efficacy|efikasi diri]], dan pembumian pembelajaran dalam [[embodied-learning|interaksi berwujud]]. Dalam [[language-learning|pembelajaran bahasa]], [[robot-assisted-language-learning-meta-analysis-2026|bukti meta-analitik]] menunjuk pada efektivitas pembelajaran bahasa berbantuan robot yang berwujud.

- **Jalur menuju pembelajaran robotika bertenaga AI.** [[educational-robotics-pathways-2026|Sebuah studi kualitatif]] terhadap siswa sekolah menengah dalam kurikulum robotika+AI menemukan pembelajaran melalui praktik dunia nyata, perancangan, dan ekspresi kreatif yang penuh permainan (lensa konstruksionis dan pluralis-epistemologis).

## Miskonsepsi Umum

- **"Robotika mengajarkan berpikir komputasional karena ia adalah robot."** Sebuah tinjauan sistematis atas **53 studi** menemukan **pembelajaran berbasis masalah, storytelling, dan pemberian perancah** sebagai strategi yang paling sering digunakan — pedagoginyalah yang membawa hasil, dan itulah yang sebenarnya dilakukan studi-studi itu.
- **"Robot fisik mengalahkan alternatif berbasis layar di semua aspek."** Perolehannya **bergantung tugas**: skor transfer jangka pendek **60% lebih tinggi** bagi [[aifred-desk-robotic-ai-guidance-2026|Orlando dkk., 2026]] (4.4/10, p = .003) yang oleh penulisnya diatribusikan pada **ko-lokasi spasial alih-alih penggantian umum**. Klaimnya adalah tentang ko-lokasi pada tugas tertentu, bukan tentang keberwujudan secara umum.
- **"CT taman kanak-kanak terlalu dini untuk bermakna."** Bukti yang ditinjau mencakup robotika taman kanak-kanak secara langsung, yang berarti rentang usia itu diteliti alih-alih diasumsikan tidak sesuai.

## Konsep terkait
- [[early-childhood-elementary-ai-education]] — Pendidikan AI anak usia dini dan sekolah dasar
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Payung: teknologi dan teknik AI (model, pelatihan LLM, robotika, RAG, agentic)

## Artikel terkait

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Tinjauan Lingkup Robot Pepper dalam Pendidikan Formal
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analisis pembelajaran bahasa berbantuan robot berwujud yang diperkaya AI
- [[white-wu-robotics-ai-education-2026]] — Robotika dan AI dalam Pendidikan
- [[computational-thinking-educational-robotics-secondary-2026]] — Berpikir Komputasional dan Robotika Pendidikan
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Desain Berbasis Pengetahuan untuk Robot Sosial Generatif
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Konteks Tugas dan Kepercayaan dalam HRI Pendidikan
- [[human-autonomy-agency-hri-review-2025]] — Otonomi dan Agensi Manusia dalam HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — HRI Naratif iCub
- [[pepper-robot-sign-language-lis-2025]] — Pepper dan Bahasa Isyarat
- [[social-robot-study-companions]] — Robot Sosial sebagai Pendamping Belajar
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Integrasi Robot–LLM dalam Penulisan Kreatif
- [[game-based-gamified-robotics-education-review-2026]] — Pendidikan Robotika Berbasis Permainan dan Bergamifikasi
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Jalur Menuju Pembelajaran Robotika Pendidikan Bertenaga AI (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — CT termediasi robot di taman kanak-kanak
- [[ai-toys-child-development-2026]] — Mainan bertenaga AI dan perkembangan anak
- [[creative-project-approach-ai-early-childhood-2025]] — Pendekatan Proyek Kreatif: mengintegrasikan robot pengodean dan robot sosial generatif ke dalam proyek anak usia dini (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Lima tipe robot kelas yang berbeda secara fungsional, dari demonstrasi berskenario hingga dialog empatik satu-lawan-satu (Christ dkk. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: kerangka berbasis hub yang memperlakukan kapasitas pendampingan teknis dan geografi hub, bukan perangkat keras, sebagai kendala program robotika K–12 pedesaan (Jacobson dkk. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Mengajarkan Pembelajaran Penguatan dan Robotika Humanoid kepada Siswa Sekolah Menengah: Desain Kurikulum Tervalidasi Ahli pada Platform Terbuka Berbiaya Rendah
- [[aifred-desk-robotic-ai-guidance-2026]] — Proyektor robotik yang dipasang di meja: panduan ko-lokasi mempertahankan transfer di tempat ChatGPT laptop kehilangannya
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — Model visi-bahasa merencanakan Shoebox Tasks untuk robot Nao (Kudláčková 2026)
