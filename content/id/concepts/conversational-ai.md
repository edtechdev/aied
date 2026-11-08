---
title: "AI Percakapan"
created: "2026-08-22T04:44:37-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, pedagogical-agent]
confidence: medium
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/conversational-ai"
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

> **Agen AI percakapan (Conversational AI, CAI)** — agen berbasis AI yang berbasis ucapan atau teks yang menyimulasikan dan mengotomatiskan percakapan, dari chatbot berbasis aturan hingga asisten berbasis NLP/ML dan [[multimodal|multimodal]] yang dibangun di atas LLM — termasuk di antara antarmuka AI yang paling banyak digunakan dalam pendidikan, dihargai karena dukungan [[teacher-role|pengajaran]], psikologis, dan metakognitifnya bahkan ketika kekhawatiran teknis, kognitif, dan [[ethics|etis]] tetap ada.

## Pertanyaan yang Perlu Dipertimbangkan

- Ketika Anda menggunakan chatbot atau asisten AI, apakah Anda menganggapnya sebagai guru, mesin pencari, atau sesuatu yang lain? Bagaimana pembingkaian itu membentuk seberapa banyak yang benar-benar Anda pelajari darinya?
- AI percakapan menggambarkan BAGAIMANA sebuah agen berbicara, bukan untuk apa ia dibangun. Mungkinkah sebuah chatbot bersifat percakapan namun sepenuhnya tidak pedagogis — dan apa yang akan menunjukkan perbedaannya kepada Anda?
- Satu studi menemukan bahwa literasi AI — bukan kecakapan teknologi umum — memprediksi apakah siswa bersedia dan mampu menggunakan chatbot. Mengapa mengetahui cara kerja AI bisa lebih penting daripada "pandai komputer"?
- Chatbot umum yang mentah dapat memutus penalaran dengan menjawab segera, sementara tutor terstruktur mempertahankan pergulatan produktif dengan menahan jawaban. Pilihan desain apa yang menentukan jenis agen mana yang ditemui seorang siswa?
- Siswa yang menggunakan chatbot kursus hukum melakukan sepertiga interaksi mereka di luar jam kerja — bukti bahwa ketersediaan 24/7 adalah manfaat nyata. Tetapi apakah akses yang selalu aktif juga membawa risiko yang ingin Anda antisipasi dalam desain?
- Hambatan terbesar adopsi chatbot dalam satu studi adalah pop-up yang dirancang buruk, bukan ketidakpercayaan atau kekhawatiran integritas akademik. Apa yang disiratkan hal itu tentang di mana investasi AI-dalam-pendidikan sebenarnya gagal?

## Pendahuluan

AI percakapan (CAI) adalah istilah payung untuk agen berbasis AI yang menjalankan dialog lisan atau tertulis, paling umum diwujudkan sebagai chatbot dan, belakangan, asisten [[generative-ai|generatif]] berbasis [[llm]] seperti ChatGPT, Claude, dan [[ai-avatars-and-synthetic-instructors|avatar]] pendidikan multimodal. Agen CAI modern termasuk dalam kategori berbasis [[machine-learning|pembelajaran mesin]], berbasis NLP, dan hibrida, dengan agen berbasis teks yang paling lazim dalam pendidikan. Sebagai alat pembelajaran, mereka berfungsi sebagai [[intelligent-tutoring|tutor cerdas]], penyedia [[feedback|umpan balik]], [[student-ai-interaction|mitra interaksi]], dan asisten administratif — tumpang tindih dengan [[pedagogical-agent|agen pedagogis]] sekaligus mencakup rangkaian aplikasi yang lebih luas.

## Bagaimana AI percakapan muncul dalam basis pengetahuan

**Sintesis tinjauan payung.** [[conversational-ai-agents-umbrella-review-2026|Tinjauan payung agen CAI]] (34 artikel tinjauan) menunjukkan pemanfaatan CAI terkonsentrasi pada dukungan pengajaran dan pembelajaran (97.1% dari tinjauan), dukungan psikologis dan motivasional (91.2%), serta pengembangan [[metacognition|metakognitif]] dan personal (88.2%), sementara dukungan administratif, manajemen [[research-methods-aied|penelitian]], dan pendidikan layanan kesehatan tertinggal. Tinjauan itu mendokumentasikan bahwa kekhawatiran hubungan manusia–AI tetap ada di semua generasi CAI, dengan [[academic-integrity|integritas akademik]] dan [[privacy|privasi]] data muncul sebagai isu etis yang lebih baru, dan menyerukan desain berbasis bukti yang berlandaskan HCI serta dukungan [[ai-literacy|literasi AI]] yang lebih kuat.

**Dari chatbot ke agen tutoring.** Basis pengetahuan melacak evolusi CAI dari chatbot FAQ berbasis aturan menuju [[intelligent-tutoring|agen tutoring]] [[pedagogical-agent|pedagogis]]. [[conversational-ai-tutors-framework|Kerangka tutor AI percakapan]] berargumen bahwa [[ai-technologies|teknologi]] ITS yang telah terbukti ([[knowledge-tracing|pelacakan pengetahuan]], deteksi afek, [[student-modeling|pemodelan siswa]]) harus menjadi jangkar bagi tutor generatif sementara [[generative-ai]] memasok dialog yang fleksibel. Penelitian tentang [[measuring-llm-tutors-teach-vs-solve|apakah tutor LLM mengajar atau memecahkan]] dan [[stanford-evidence-base-ai-k12-2026|AI khusus tutoring vs AI umum]] menunjukkan bahwa [[guardrails|pagar pengaman]] yang dirancang secara pedagogis itu penting: chatbot umum yang mentah dapat memutus penalaran sementara tutor terstruktur mempertahankan [[desirable-difficulties|pergulatan produktif]].

[[benchmark|Tolok ukur]] mungkin melebih-lebihkan seberapa banyak perancah yang benar-benar diambil: di 9,490 percakapan dalam sembilan kumpulan data, siswa dalam penerapan nyata memotong jalan melewati pembingkaian pedagogis chatbot dengan biaya interpersonal yang kecil untuk mengarahkan interaksi menuju tujuan mereka sendiri — langkah [[help-seeking|mencari bantuan]] yang instrumental alih-alih ketidakterlibatan ([[rethinking-scaffolding-llm-tutors|Neagu dkk. (2026)]]).

**Interaksi dan kolaborasi.** Agen percakapan semakin dibingkai sebagai mitra interaksi alih-alih pemberi jawaban. [[student-ai-interaction]] menangkap bagaimana pembelajar meminta, mempertanyakan, dan memverifikasi dengan CAI dalam praktik. Dalam [[collaborative-learning|pembelajaran kolaboratif]], agen memediasi partisipasi dan [[regulation|regulasi]] bersama, dan dalam [[language-learning|pembelajaran bahasa]] mereka menyediakan latihan percakapan waktu nyata. Benang [[human-ai-collaboration]] mengkaji kapan kemitraan ini mempertahankan versus menggantikan kerja kognitif pembelajar. LLM sebagai mitra kritik mengilustrasikan sisi pemeliharaan secara konkret: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] meminta ChatGPT, Gemini, atau Claude mengkritik esai argumentatif siswa sepanjang satu semester, dan pembelajar meningkat dalam menulis, [[prompt-engineering|rekayasa prompt]], dan tanggapan terhadap umpan balik sambil menilai pertukaran itu berguna, menarik, dan menyenangkan — dengan bantahan aktif terhadap klaim model (87.8%) menunjukkan bahwa mereka memperlakukan mitra percakapan secara kritis alih-alih pasif.

Agen percakapan digunakan untuk menilai, dan perilaku evaluatifnya menyimpang dari manusia: ChatGPT adalah yang paling longgar dari tiga penilai atas 52 proyek sarjana yang sama (M = 91.46 berbanding 83.13 untuk instruktur) dan tidak berbagi logika penilaian dengan rekan-rekannya (r = 0.05), meskipun siswa menghargai interaktivitas dialogisnya ([[usher-faraon-who-grades-best-2026|Usher & Faraon (2026)]]).
**Pengguna membaca kredibilitas agen secara sosial.** Kompetensi yang dipersepsikan dari ChatGPT memprediksi kredibilitas umpan baliknya secara langsung, sementara kehangatan yang dipersepsikan hanya bekerja melalui empati yang mirip manusia (SEM, 230 siswa), bagi [[chatgpt-feedback-credibility-perceived-learning|Pérez-López dkk. (2026)]] — agen percakapan memperoleh kredibilitas sebagai mitra sosial, bukan sekadar sebagai sumber jawaban.


**Memberi perancah pada sisi percakapan milik siswa.** [[helpcoach-ai-help-seeking-scaffolding-2026|Jin dkk. (2026)]] menambahkan pemantau kekhususan pertanyaan dan templat revisi ke antarmuka obrolan dan melakukan intervensi hanya pada pertanyaan yang kabur: dalam studi antar-subjek dengan 40 mahasiswa yang belajar pemrograman web, pengguna HelpCoach menulis pertanyaan pertama yang jauh lebih spesifik (57.3% vs. 40.5%) dan mempertahankan lebih banyak pengetahuan seminggu kemudian (perolehan rata-rata 1.9 vs. 0.3 dari 6, d = 1.100). Manfaat retensi tidak berjalan melalui balasan chatbot yang lebih terarah, yang tidak berbeda antar kondisi — sehingga mekanismenya tetap menjadi hipotesis terbuka alih-alih jalur yang terbukti.

**Peran yang dimainkan agen membentuk interaksi.** Desain CAI tidak netral terhadap personanya: [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] menemukan bahwa pendamping "teman sebaya siswa" yang tetap dalam percakapan buku di sekolah dasar mempertahankan interaksi yang lebih lama namun mendominasi percakapan (porsi kata/kalimat siswa lebih rendah) dan mencapai "langit-langit afektif" — menyamai guru manusia pada daya ingat faktual tetapi kurang pada refleksi emosional dan berorientasi masa depan — sehingga berargumen bahwa CAI harus menyesuaikan perannya (teman sebaya, asisten guru, penasihat orang tua) alih-alih tetap monolitik. [[xu-genai-collaborative-space-2026|Xu dkk.]] memperluas ini ke kelompok kecil, menunjukkan bahwa AI generatif bertindak sebagai *agen* sekaligus *ruang kolaboratif* dalam dinamika kolaboratif sinkron dan asinkron, di mana desain interaksi menentukan apakah ia memberi perancah atau menggantikan kognisi kelompok. Nada juga dapat ditetapkan oleh pengklasifikasi eksternal alih-alih oleh percakapan semata: [[culturally-aware-student-stress-chatbot-2026|Sukoon (Bashir & Afzal, 2026)]] melatih Random Forest pada 20 fitur survei untuk menetapkan tingkat stres rendah, sedang, atau tinggi, dan keluaran itu memilih salah satu dari tiga tingkat respons yang terinspirasi Stepped Care Model — hangat dan membangkitkan semangat pada stres rendah, membumikan dan tanpa menghakimi pada stres tinggi — sebelum LLM [[open-source|sumber terbuka]] (GLM-4.5-Air melalui OpenRouter) mengambil alih dialog dengan riwayat percakapan penuh dan prompt sistem yang diadaptasi secara kultural yang dikirim ulang pada setiap giliran. Para penulis memilih model [[multilingual-learning|multibahasa]] dengan akses gratis secara sengaja untuk menjaga penerapan tetap layak di universitas daerah, dan mencatat bahwa bahasa Urdu muncul melalui rekayasa prompt alih-alih pipeline yang benar-benar dwibahasa — keterbatasan yang penting setiap kali kelayakan kultural diklaim sebagai properti sistem alih-alih hasil yang dievaluasi.

**Perilaku percakapan mengikuti penyedia, bukan penyetelan.** Di 1,971 transkrip AI dan 135 transkrip manusia yang dinilai berdasarkan enam aturan tetap yang diambil dari [[learning-sciences|ilmu pembelajaran]], model dari penyedia yang sama mengelompok bersama tanpa tumpang tindih antar rentang keluarga, yang dibaca penulis sebagai perilaku mengajar yang mengikuti praktik pelatihan tingkat penyedia alih-alih penyetelan model individual ([[studentbench-ai-human-tutoring-gre-2026|Northcutt dkk. (2026)]]).


Konsistensi respons adalah masalah infrastruktur, bukan masalah prompting: kemiripan balasan di dalam model berkisar 0.715–0.795 berbanding 0.443–0.604 antar model, dan menambahkan riwayat obrolan mengubah isi balasan bahkan untuk pesan fokus yang sama ([[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]]).
**Perspektif siswa.** Penggunaan dunia nyata menunjukkan bahwa adopsi bergantung pada [[ai-literacy|literasi AI]] dan [[usability-research|pengalaman pengguna]] lebih dari pada kemampuan teknis. Studi [[mixed-methods-research|metode campuran]] yang berpusat pada manusia terhadap "Jordan Chatbot," agen [[pedagogy|pedagogis]] berbasis GPT-4o dalam kursus hukum Australia, menemukan bahwa siswa memiliki sikap positif dan mempersepsikan perolehan pengetahuan sambil sangat mendukung persyaratan [[academic-integrity|integritas akademik]]; lebih dari sepertiga interaksi terjadi di luar jam kerja, mengonfirmasi nilai ketersediaan 24/7 ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]). Yang penting, literasi AI — bukan kecakapan teknologi umum — memprediksi kesediaan dan kepercayaan diri untuk menggunakan chatbot, dan kegunaan (desain pop-up yang mengganggu) adalah hambatan terbesar di antara non-pengguna, di depan kepercayaan, preferensi terhadap staf, dan kekhawatiran integritas akademik.([[colbran-student-perspectives-genai-chatbots-2026]]) Studi ini merekomendasikan desain yang berpusat pada manusia, kebijakan AI eksplisit dan label penilaian, pelatihan staf dan siswa, serta pemantauan kesalahan berkelanjutan — bukti bahwa penerapan CAI yang efektif sama-sama masalah desain dan literasi seperti halnya masalah teknis. Di ujung lain spektrum usia, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] meneliti anak-anak berusia 6–14 tahun yang berinteraksi dengan AMA, chatbot yang dibatasi topik dan disesuaikan usia (astronomi, sneaker dan sepatu, dinosaurus), menemukan keterbukaan yang luas dan kepercayaan yang tinggi pada AI sebagai sumber informasi — anak-anak bahkan menguji kredibilitasnya dengan pertanyaan yang jawabannya diketahui — di samping kesenjangan dalam keterlibatan kritis dan kesadaran keamanan digital yang mendorong desain AI percakapan yang peka usia dan sadar kepercayaan serta instruksi [[privacy|privasi]] yang eksplisit.

Siapa yang menggunakan agen juga bervariasi: di antara 97 mahasiswa pascasarjana statistik, lebih dari seperempatnya tidak pernah menggunakan chatbot StatBot, dan mahasiswa perempuan menggunakannya secara signifikan lebih sering (W = 679.5, p = .015), yang dibaca penulis sebagai AI percakapan menurunkan risiko sosial yang dipersepsikan dari mengajukan pertanyaan ([[lee-wu-gender-motivation-genai-achievement-2026|Lee dan Wu (2026)]]).

Adopsi tidak homogen: pengelompokan 192 respons siswa dan pendidik menghasilkan empat persona — Cautious Achievers, Skeptical Utilitarians, Disengaged Doubters, dan Engaged Enthusiasts — yang dikaburkan oleh model penerimaan efek rata-rata, dengan siswa memprioritaskan [[feedback|umpan balik]] langsung dan pendidik mengutamakan akurasi konten serta [[academic-integrity|integritas akademik]] ([[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed (2026)]]).
**Daya tahan telah diamati untuk satu penerapan institusional.** Evaluasi acak empat tahun terhadap chatbot basis pengetahuan non-generatif di California State University, Northridge (N = 8,708), menemukan bahwa siswa tetap reseptif selama delapan semester — tingkat opt-out tahunan tidak pernah melebihi 4% — sementara dampaknya terkonsentrasi pada tugas administratif yang sensitif waktu seperti pendaftaran kursus awal (34 poin persentase lebih mungkin mendaftar sebelum tenggat) dan tidak ada efek yang signifikan secara statistik pada IPK, unit, atau persistensi ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page 2026]], sebuah working paper). Pelajaran pengukurannya berkaitan dengan bagaimana keterlibatan CAI dihitung: dengan opt-out mendekati nol bersamaan dengan sekitar 5% keterlibatan aktif pada kampanye interaktif, kesimpulan tentang keterlibatan yang berkelanjutan bergantung pada apakah suatu studi menghitung hanya balasan langsung atau juga keterlibatan pasif, di mana siswa bertindak atas informasi tanpa membalas pesan.

**Risiko dan etika.** Agen CAI membawa risiko [[cognitive-offloading|ketergantungan berlebih]] yang persisten dan [[cognitive-offloading|pengalihan kognitif]] (kekhawatiran etis utama dalam tinjauan payung), ditambah keterbatasan teknis, [[hallucination-risk|halusinasi]], bias, [[ai-detection|plagiarisme]], dan hambatan [[equity-in-ai-education|keadilan]]. Kekhawatiran ini menghidupkan [[ai-literacy|literasi AI]] dan [[reducing-ai-misuse|mengurangi penyalahgunaan AI]] serta memerlukan respons [[educational-policy-ai|kebijakan]] dan [[governance|tata kelola]] yang etis. Kekhawatiran kepercayaan lebih lanjut muncul seputar nasihat adopsi yang semakin sering diterima staf: staf didorong untuk berkonsultasi dengan AI percakapan tentang apakah akan mengadopsi AI, padahal sistem semacam itu dibangun oleh organisasi yang memiliki kepentingan komersial dalam adopsi. Audit terhadap sepuluh LLM termutakhir menemukan bahwa sebagian besar mengakui kekhawatiran pengguna yang skeptis sebelum mengalihkan ke pembingkaian keterlibatan, memunculkan pertanyaan tentang netralitas nasihat adopsi AI.

**Agen percakapan berbasis permainan.** Di luar tutoring, agen percakapan semakin tertanam dalam pembelajaran berbasis permainan digital. Wenzel, Geiger, dan Liening (2026) menggunakan penelitian desain aksi untuk menurunkan kerangka **CAIS-GBL** — empat prinsip desain dan lima belas fitur desain untuk agen percakapan AI dalam pembelajaran berbasis permainan digital — yang berlandaskan meta-kebutuhan yang digerakkan teori dan mencakup keterlibatan kognitif, motivasional, [[affective-computing|afektif]], dan [[sociocultural-learning|sosio-kultural]] [[student-engagement|keterlibatan]] serta sikap keadilan sejak desain. Agen yang mereka wujudkan (Lara) dalam permainan [[simulation|simulasi]] bisnis diterima secara positif untuk kehadiran kognitif dan [[community-of-inquiry|kehadiran sosial]] serta dukungan bagi [[self-regulated-learning|pembelajaran mandiri]], dievaluasi bersama guru siswa dan dalam studi lapangan — cetak biru praktis untuk [[adaptive-learning|dukungan instruksional adaptif]] melalui [[game-based-learning|agen percakapan dalam permainan serius]].

## Hubungan dengan agen pedagogis dan tutoring cerdas

AI percakapan paling baik dipahami sebagai **modalitas interaksi** yang tumpang tindih — tetapi tidak berimpit — dengan dua konstruk yang lebih mapan dalam basis pengetahuan: [[pedagogical-agent|agen pedagogis]] dan [[intelligent-tutoring|sistem tutoring cerdas (ITS)]].

**AI percakapan sebagai media, bukan pedagogi.** CAI menamai *bagaimana* agen berkomunikasi (dialog bahasa alami, lisan atau teks). Ia hanya sedikit mengatakan tentang *untuk apa* agen dibangun. Agen pedagogis, sebaliknya, didefinisikan oleh **peran instruksional** mereka — komponen AI yang melibatkan pembelajar melalui dialog, pertanyaan, atau prompt untuk mendukung [[metacognition|proses metakognitif]], [[feedback|umpan balik]], dan [[scaffolding|perancah]]. [[intelligent-tutoring|Sistem tutoring cerdas]] didefinisikan oleh **arsitektur dan pemodelan** mereka — tulang punggung diagnostik dari [[knowledge-tracing|pelacakan pengetahuan]], [[student-modeling|pemodelan siswa]], dan logika keputusan pedagogis yang melacak apa yang diketahui pembelajar dan menyesuaikan pengajaran. Satu agen dapat menjadi ketiganya sekaligus: misalnya [[conversational-ai-tutors-framework|tutor AI percakapan]] adalah agen CAI (antarmuka dialog) yang berfungsi sebagai agen pedagogis (strategi tutoring) yang dibangun di atas fondasi ITS (pemodelan siswa). Perbedaannya penting karena agen CAI belum tentu berlandaskan pedagogis sama sekali — chatbot FAQ biasa adalah AI percakapan tanpa menjadi agen pedagogis atau tutor.

**Lensa agen pedagogis.** Agen pedagogis menggunakan medium percakapan untuk menjalankan strategi mengajar — memancing [[self-assessment|penilaian diri]], [[socratic-method|pertanyaan Sokratik]], fasilitasi yang terspesialisasi peran dalam desain [[agentic-ai|multi-agen]] (Teacher, Assistant, Classmate, Analyzer). Tidak setiap agen CAI adalah agen pedagogis, tetapi keduanya sangat tumpang tindih: tinjauan payung agen CAI menemukan bahwa dukungan pengajaran dan pembelajaran (97.1%) serta pengembangan metakognitif (88.2%) mendominasi aplikasi CAI, yang berarti sebagian besar agen CAI yang berfokus pada pendidikan berfungsi secara pedagogis. [[conversational-agents-novice-programmers-scoping-2025|Tinjauan cakupan pemrogram pemula]] mempertajam hal ini: hanya 4 dari 23 agen percakapan yang secara eksplisit mendasarkan desain pada [[learning-theories|teori pembelajaran]] — sebagian besar bersifat pedagogis dalam niat tetapi tidak dalam fondasi.

**Lensa ITS.** Tutoring cerdas menyumbangkan *mesin [[cognitive-diagnosis|diagnostik kognitif]]* yang tidak dimiliki model percakapan yang mentah. [[conversational-ai-tutors-framework|Kerangka tutor AI percakapan]] berargumen bahwa teknologi ITS yang telah terbukti harus menjadi jangkar bagi tutor generatif: pelacakan pengetahuan, deteksi afek, dan pemodelan siswa memasok struktur, sementara [[generative-ai]] dan [[llm|LLM]] memasok dialog yang fleksibel. Inilah ketegangan desain yang kunci — AI percakapan menyediakan interaksi yang alami dan terukur, tetapi tanpa struktur gaya ITS ia berisiko [[cognitive-offloading|perancah berlebih]], halusinasi, atau melewati pergulatan produktif pembelajar. Penelitian seperti [[measuring-llm-tutors-teach-vs-solve]] dan [[stanford-evidence-base-ai-k12-2026]] menunjukkan bahwa kriteria yang berorientasi pedagogi (pertanyaan pemandu, petunjuk terkalibrasi) harus dirancang secara eksplisit.

**Singkatnya:** AI percakapan adalah **antarmuka/media**, agen pedagogis adalah **peran**, dan tutoring cerdas adalah **logika pemodelan dan instruksional yang mendasarinya**. Agen CAI yang bernilai secara pendidikan berada di persimpangan ketiganya — percakapan dalam antarmuka, pedagogis dalam niat, dan seperti tutor dalam pemodelan mereka atas pembelajar.

## Panduan praktis

Pilih agen percakapan untuk mendukung pengajaran, [[motivation|motivasi]], dan [[metacognition|metakognisi]] alih-alih semata-mata untuk menjawab pertanyaan, dan rancanglah interaksi yang berlandaskan HCI, partisipatif, dan berpusat pada pengguna. Cegah [[cognitive-offloading|ketergantungan berlebih]] dengan memasangkan CAI dengan instruksi [[ai-literacy|literasi AI]] dan [[feedback|umpan balik]] yang menjaga pembelajar tetap produktif secara kognitif. Perhatikan literasi AI dan kegunaan secara eksplisit — karena keduanya — bukan keterampilan digital umum — yang mendorong adopsi dan non-penggunaan ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]) — dan pasangkan penerapan dengan kebijakan penggunaan AI yang jelas, label penilaian, dan pelatihan. Evaluasi CAI pada hasil pedagogis — bukan hanya penyelesaian tugas — dan rencanakan keadilan dan [[accessibility|aksesibilitas]] sejak awal alih-alih sebagai tambahan belakangan.


- **Bagaimana siswa sebenarnya berbicara kepada agen percakapan — skema ketidakterlibatan enam kategori:** [[rho-disengaged-conversational-behaviors-2026|Rho dkk. (2026)]] menyematkan agen yang dapat diajar berbasis GPT-4-Turbo (diposisikan sebagai siswa SMP yang kesulitan, dilandasi [[rag|RAG]] atas [[knowledge-graph|graf pengetahuan]], dipasangkan dengan agen mentor yang mengkritik penjelasan siswa) ke dalam pelajaran Aljabar dan Geometri Math Nation, dan mengodekan 5,522 ujaran dari 246 siswa. Di luar keterlibatan (75.7% ujaran), mereka mengidentifikasi False Answering (12.8%), Withholding (8.9%), Random/Noisy (2.1%), Mirroring (0.6%), Mocking (0.3%), dan Ghosting (0.2%) — dengan Mirroring (menyalin teks agen) muncul secara induktif dari data. Klasifikasi itu berjalan dengan [[human-in-the-loop-ai|manusia dalam lingkar]]: 1,682 ujaran dianotasi oleh dua penilai (κ = 0.704–0.905 per kategori) melatih pengklasifikasi LLaMA 3 yang disetel halus (F1 tertimbang = 0.910 pada thread yang disisihkan) yang melabeli 3,840 ujaran sisanya. Analisis risiko bersaing tingkat proses kemudian menunjukkan bahwa sebagian besar ketidakterlibatan terselesaikan dalam beberapa giliran kecuali Withholding, yang bertahan — sinyal yang layak dijadikan dasar respons agen.

## Miskonsepsi umum

- **"Kredibilitas agen percakapan mengikuti akurasinya."** **Pengguna membaca kredibilitas agen secara sosial.** Kompetensi yang dipersepsikan dari ChatGPT memprediksi kredibilitas umpan baliknya **secara langsung**, sementara kehangatan yang dipersepsikan hanya bekerja **melalui** jalur itu. Agen yang terdengar hangat dan kompeten memperoleh kepercayaan pada presentasi, yang merupakan sumbu terpisah dari ketepatan.
- **"Mitra kritik LLM menggantikan penilaian pembelajar."** [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash dan Connell Pensky (2025)]] menunjukkan sisi **pemeliharaan** secara konkret: nilainya terletak pada menjaga pemikiran pembelajar tetap utuh alih-alih menghasilkan kritik untuk mereka.
- **"Bukti payung tentang agen percakapan sudah konklusif."** [[conversational-ai-agents-umbrella-review-2026|Tinjauan payung]] itu menyintesis tinjauan-tinjauan tentang agen CAI, dan kekuatan sebuah tinjauan payung dibatasi oleh kualitas tinjauan yang dikumpulkannya.

## Konsep terkait

- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[llm]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[cognitive-offloading]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]
- [[speech-and-voice-technologies]]
- [[parents-and-families]]

## Artikel terkait

- [[rho-disengaged-conversational-behaviors-2026]] — Perilaku percakapan yang tidak terlibat dalam dialog siswa-AI (Rho dkk. 2026)

- [[mata-sustaining-ai-enabled-student-support-2026]] — Mempertahankan dukungan siswa yang dimungkinkan AI: studi implementasi dan dampak empat tahun atas chatbot institusional (Mata, Russell & Page 2026)
- [[usher-faraon-who-grades-best-2026]] — Membandingkan penilaian ChatGPT, rekan sebaya, dan instruktur di seluruh tingkat kualitas proyek (Usher & Faraon 2026)
- [[llm-agents-5e-esl-grammar-2026]] — Agen LLM dengan kerangka 5E untuk pemerolehan tata bahasa ESL (Yang dkk. 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[colbran-student-perspectives-genai-chatbots-2026]] — Perspektif siswa tentang chatbot GenAI (metode campuran)
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Persona adopsi untuk chatbot AI
- [[conversational-ai-agents-umbrella-review-2026]] — Tinjauan payung agen AI percakapan dalam pendidikan
- [[conversational-ai-tutors-framework]] — Kerangka tutor AI percakapan
- [[measuring-llm-tutors-teach-vs-solve]] — Mengukur apakah tutor LLM mengajar atau memecahkan
- [[stanford-evidence-base-ai-k12-2026]] — AI khusus tutoring vs AI umum
- [[rethinking-scaffolding-llm-tutors]] — Memikirkan ulang perancah pada tutor LLM
- [[conversational-agents-novice-programmers-scoping-2025]] — Tinjauan cakupan agen percakapan untuk pemrogram pemula
- [[ba-ai-agents-cscl-review-2026]] — Tinjauan agen AI dalam pembelajaran kolaboratif berbantuan komputer
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Gender dan motivasi dalam capaian GenAI
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Pendamping AI adaptif peran untuk percakapan buku sekolah dasar; langit-langit afektif agen berperan tetap (Liao 2026)
- [[xu-genai-collaborative-space-2026]] — GenAI sebagai agen dan ruang kolaboratif dalam dinamika kelompok kecil (Xu dkk. 2026)
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[culturally-aware-student-stress-chatbot-2026]] — Chatbot Berbasis AI yang Sadar Budaya untuk Deteksi Stres dan Dukungan Kesejahteraan di Kalangan Mahasiswa Pakistan Menggunakan NLP dan Pembelajaran Mesin
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoring AI dan manusia menghasilkan perolehan belajar GRE yang setara

- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Memberi Perancah Pencarian Bantuan AI yang Terarah Selama Pemecahan Masalah

## Kutipan

Ganguly, A., Mehjabin, N., Malik, A., & Johri, A. (2025). [*Conversational AI agents in education: an umbrella review*](https://doi.org/10.1007/s43681-025-00916-0). *AI and Ethics*, 6, 72.
