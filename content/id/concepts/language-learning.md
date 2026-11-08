---
connected_resources: [mglearn]
title: "Pembelajaran Bahasa"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/language-learning"
source_updated: "2026-11-06T03:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Pembelajaran Bahasa** — kajian tentang bagaimana AI mendukung pemerolehan bahasa kedua (L2), pengembangan menulis, dan keragaman linguistik dalam lingkungan pendidikan. [[ai-education|AI dalam pendidikan]] [[research-methods-aied|penelitian]] dalam basis pengetahuan ini mencakup lawan bicara AI untuk dialog lisan, [[automated-essay-scoring|evaluasi menulis otomatis]] bagi pembelajar L2, dukungan membaca, dan kekhawatiran tentang bias bahasa dalam sistem penilaian AI.

## Pertanyaan yang Perlu Dipertimbangkan

- Bahasa secara inheren bersifat interaktif, yang membuatnya cocok untuk [[conversational-ai|AI percakapan]] — tetapi kemampuan linguistik AI juga memunculkan risiko bias terhadap pola non-penutur asli. Di mana Anda melihat ketegangan antara peluang dan risiko ini terjadi?
- Satu studi menemukan bahwa penilaian AI secara sistematis meremehkan siswa yang lebih lemah secara linguistik, sementara studi lain mengusulkan membandingkan siswa dengan karya mereka sendiri sebelumnya alih-alih dengan norma penutur asli. Bagaimana "titik rujukan" evaluasi mengubah apakah [[ai-feedback-quality|umpan balik AI]] membantu atau menghukum seorang pembelajar?
- Lawan bicara AI dapat memperluas latihan komunikatif dalam skala besar, tetapi halaman ini memperingatkan bahwa mereka harus dipasangkan dengan interaksi manusia agar kefasihan transfer ke percakapan nyata. Apa yang mungkin Anda peroleh dari berlatih dengan AI yang tidak dapat diberikan mitra manusia — dan apa yang akan Anda kehilangan?
- Dukungan guru — bukan hanya alat AI — terbukti mendorong keterlibatan dalam pembelajaran bahasa berbantuan AI melalui tujuan prestasi siswa. Bagaimana konteks sosial dan [[pedagogy|pedagogis]] membentuk apakah pembelajar terus terlibat dengan alat latihan AI?
- Sebuah [[meta-analysis-systematic-review|meta-analisis]] menemukan perolehan kecil hingga sedang yang bergantung pada jenjang dari teknologi baru, dengan keterampilan produktif (berbicara, menulis) memperoleh lebih banyak daripada keterampilan reseptif. Mengapa berbicara dan menulis mungkin lebih diuntungkan daripada menyimak dan membaca oleh alat AI?
- Jika AI mengistimewakan bahasa Inggris standar dan dapat menghukum pola bahasa non-penutur asli atau yang beragam, bagaimana pengajar bahasa harus merancang evaluasi dan umpan balik agar AI mendukung keragaman linguistik alih-alih menghapusnya?

## Pendahuluan

Pembelajaran bahasa telah muncul sebagai domain AI dalam pendidikan yang signifikan karena bahasa secara inheren interaktif — sehingga cocok untuk AI percakapan — dan karena kemampuan linguistik AI memunculkan peluang ([[personalized-learning|latihan bahasa terpersonalisasi]] dalam skala besar) sekaligus risiko (bias sistematis terhadap pola bahasa non-penutur asli). Artikel-artikel dalam basis pengetahuan ini mengeksplorasi kedua sisi persamaan itu. Ketika bahasa target adalah **bahasa Inggris secara khusus** — terutama [[english-education|English for Academic Purposes (EAP)]] dan [[teacher-role|pengajaran]] bahasa Inggris EFL/ESL/L2 — lihat halaman konsep [[english-education]] khusus, yang membedakan penelitian khusus bahasa Inggris dari pemerolehan L2 umum dan penulisan umum.

**AI sebagai tutor bahasa dan lawan bicara** adalah tema yang paling berkembang. **[[ai-interlocutor-l2-spoken-dialogue|Apa yang Berubah Ketika Lawan Bicaranya adalah AI?]]** mengkaji kefasihan interaksional dan penyerapan linguistik ketika pembelajar L2 bercakap-cakap dengan AI versus manusia. **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** menyediakan tutoring ESL yang adaptif secara pedagogis. **[[llm-children-reading-story-generation]]** mengeksplorasi cerita yang dihasilkan AI untuk perkembangan membaca anak. Semua ini terhubung ke [[intelligent-tutoring]] dan [[generative-ai]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng dan Yang (2026)]]** merancang dua agen berbasis [[llm]] — guru bahasa Inggris AI konvensional dan satu yang menggunakan **kerangka 5E** (engage, explore, explain, elaborate, evaluate) untuk pembelajaran tata bahasa berbasis inkuiri. Di antara **37 siswa ESL** dalam perbandingan acak, **siswa berprestasi tinggi merespons positif terhadap guru AI** sementara siswa berprestasi rendah menunjukkan sikap campuran, dan kondisi-kondisi itu berbeda dalam motivasi intrinsik, perubahan kognitif, dan kinerja — menunjukkan bahwa desain agen LLM harus disesuaikan dengan kemahiran pembelajar.

Untuk tutor yang [[embodied-learning|berwujud fisik]], meta-analisis atas 11 studi RALL (N = 595) menemukan efek gabungan yang besar pada pembelajaran L2 (g = 0.83) dengan heterogenitas tinggi, dan hanya format interaksi yang memoderasinya — format berbasis kelompok mengalahkan satu-lawan-satu sementara morfologi robot, modalitas, otonomi, dan peran sosial tidak ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang & Zou (2026)]]).

**AI dalam penilaian bahasa** mulai muncul seiring LLM mendukung [[automated-question-generation|pembuatan butir soal]] dan evaluasi. **[[gpt-item-generation-l2-listening-2026|Aryadoust dan Wong (2026)]]** membandingkan [[prompt-engineering|rekayasa prompt]] dengan penyetelan halus untuk pembuatan butir soal otomatis dalam penilaian menyimak L2: penyempurnaan prompt berulang meningkatkan kualitas butir tetapi kemudian mendatar, sementara **penyetelan halus GPT-4.1 pada prompt yang telah dioptimalkan** (dengan desain prompt dijaga konstan) menghasilkan perolehan lebih lanjut — sebuah templat untuk menentukan kapan pengembang penilaian harus berinvestasi pada [[llm-training-and-fine-tuning|adaptasi model]] alih-alih iterasi prompt.

Granularitas komponen pengetahuan adalah keputusan pemodelan dalam tutoring berbasis sekolah: [[elhefny-knowledge-component-granularity-language-tutoring-2026|El Hefny dan Meurers (2026)]] membandingkan 19 model komponen pengetahuan (KC) yang mencakup 11 tingkat hierarki domain FeedBook pada 153,819 respons percobaan pertama dari 1,059 siswa kelas tujuh yang belajar bahasa Inggris di sekolah Jerman. Model tingkat butir yang halus paling baik memprediksi siswa baru pada konten yang dikenal, sementara model tingkat menengah yang berlandaskan semantik paling baik menggeneralisasi ke konten baru (Property ID + Exercise Type RMSE 0.4243 di bawah AFM versus 0.4447 untuk Actionable Element ID). Audit cakupan anotasi menemukan pemetaan properti yang ketat awalnya menghapus 45.7% catatan dan alat anotasi yang lebih baru mengurangi pengecualian menjadi 30.6%, dengan label gabungan positive|statement saja menyumbang 74.9% catatan yang dikecualikan.


Perbandingan atas 52 tugas penilaian EFL yang dinilai oleh 20 guru berpengalaman tidak menemukan perbedaan kualitas yang signifikan secara keseluruhan antara butir yang dihasilkan AI dan yang dikembangkan manusia, tetapi menemukan pembagian kerja yang jelas: AI lebih disukai untuk tata bahasa dan kosakata (69%) dan pengembangan manusia untuk membaca, menulis, menyimak, dan berbicara (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia dan Darvishi (2026)]]).

**Evaluasi menulis otomatis untuk pembelajar L2** menilai kemampuan AI untuk menilai tulisan non-penutur asli. **[[self-referential-l2-writing-llm-assessment|Bannò dkk.]]** mengusulkan pendekatan swarujuk yang membandingkan tulisan siswa dengan karya mereka sendiri sebelumnya alih-alih dengan norma penutur asli. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** menemukan bahwa penilaian AI secara sistematis meremehkan siswa yang lemah secara linguistik — temuan yang terhubung dengan kekhawatiran [[assessment-validity|validitas penilaian]] dan [[bias-mitigation|mitigasi bias]]. **[[genai-linguistic-diversity-academic-writing]]** mengeksplorasi bagaimana AI memengaruhi keragaman linguistik dalam konteks akademik.

Sistem tingkat wacana melangkah lebih jauh dengan menamai cacatnya alih-alih menilai teksnya: klasifikasi relasi pasangan kalimat melokalisasi patahan koherensi - lompatan logis, konjungsi yang hilang, rujukan yang ambigu - dan penerapan umpan balik yang dihasilkannya menurut penilaian guru berkisar 71.2%-88.4% ([[bert-discourse-english-teaching-2026|Wang dkk., 2026]]).

**[[accessibility|Aksesibilitas]] bagi pembelajar bahasa** terhubung dengan [[inclusive-learning|pembelajaran inklusif]]: **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** menganalisis bagaimana pembelajar disleksia menggunakan AI untuk dukungan literasi, dan **[[ai-tools-arab-english-classrooms]]** mengeksplorasi alat AI dalam konteks kelas Arab-Inggris. Studi-studi ini menghubungkan pembelajaran bahasa dengan [[equity-in-ai-education|keadilan dalam pendidikan AI]] dan [[special-education|pendidikan khusus]].

**Mekanisme motivasional dalam pembelajaran bahasa berbantuan AI** mengkaji mengapa pembelajar terlibat dengan AI untuk latihan bahasa. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** menggunakan teori penetapan tujuan dengan 758 [[multilingual-learning|pembelajar bahasa Inggris]] di universitas Tiongkok untuk menunjukkan bahwa **dukungan guru** meningkatkan keterlibatan dalam pembelajaran berbantuan AI melalui tujuan penguasaan-pendekatan dan prestasi-pendekatan siswa (bukan tujuan penghindaran) — bukti bahwa konteks pedagogis dan sosial, bukan hanya alat AI, menentukan apakah pembelajar tetap terlibat dengan latihan bahasa berbantuan AI. Ini menghubungkan pembelajaran bahasa dengan [[motivation|motivasi]] dan [[student-engagement|keterlibatan siswa]].

[[chatgpt-english-language-learning-malaysia|Annamalai dkk. (2026)]] menambahkan kasus [[qualitative-research|kualitatif]] berbasis teori penentuan nasib sendiri: dalam wawancara dengan 25 mahasiswa Malaysia, ChatGPT mendukung kompetensi dan otonomi, dan daya tanggap percakapannya menghasilkan rasa didengar — sebuah "ekologi motivasional yang dimediasi AI" di mana keterhubungan sebagian dipenuhi oleh alat itu, meskipun rujukan yang tidak akurat menuntut verifikasi dan pelengkap manusia.

Kualitas desain, bukan frekuensi penggunaan, yang membawa efek motivasional pada tutor buatan instruktur: di antara 74 mahasiswa yang menggunakan GPT bahasa Jepang berlingkup mata kuliah, frekuensi penggunaan di luar kelas tidak menunjukkan korelasi signifikan dengan otonomi, kompetensi, atau keterhubungan, sementara pembelajar menilai tutor itu tinggi untuk [[self-directed-learning|pembelajaran mandiri]] (M = 4.39) dan menyebut keamanan afektif (60.8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee & Kwon, 2026]]).

**Penulisan berbantuan GenAI di tingkat sekolah dasar.** [[genai-writing-program-primary-l2-motivation-engagement|Lu dkk. (2026)]] menjalankan program menulis opini selama sembilan minggu dengan 301 pembelajar kelas 5 dan 6 di Tiongkok Timur, dengan delapan kelas utuh yang ditugaskan secara acak ke program itu atau ke pengajaran konvensional. Program itu meningkatkan diri penulis L2 ideal pembelajar (selisih rata-rata tersesuaikan 0.20) dan ketahanan akademik (0.17), serta mengangkat keterlibatan perilaku dan emosional, tetapi tidak mengubah pola pikir berkembang, keterlibatan kognitif atau metakognitif, atau organisasi yang dinilai rubrik — di antara dimensi menulis hanya penggunaan bahasa yang meningkat. Dua ciri desain itu penting bagi guru bahasa: pemberian prompt diajarkan secara eksplisit, melalui bank prompt terkategori yang terkait dengan tujuan menulis tertentu, dan umpan balik GenAI digunakan bersamaan dengan perbandingan terhadap umpan balik guru dan revisi berulang. Perolehan kepengarangan yang dilaporkan pembelajar bertumpu pada struktur instruksional itu alih-alih pada alatnya semata, dan para penulis menyebut berkurangnya [[metacognition|pemantauan diri]] dan strategi berorientasi jalan pintas sebagai risiko yang tetap ada.

**Pengajaran tata bahasa dengan GenAI bekerja melalui revisi, bukan komentar.** Dalam kuasi-eksperimen sepuluh minggu dengan 88 mahasiswa EFL Ethiopia, siklus draf–prompt–refleksi–revisi meningkatkan tata bahasa (η² = 0.499) dan tulisan secara keseluruhan, dan skor konten naik meskipun prompt itu melarang umpan balik konten ([[wordofa-genai-grammar-instruction-efl-2026|Wordofa & Abo, 2026]]).

## Implikasi bagi pengajar bahasa

- **[[ai-technologies|Teknologi]] baru menghasilkan perolehan kecil hingga sedang yang bergantung pada jenjang.** Sebuah [[liu-emerging-tech-tefl-review-2026|meta-analisis atas 33 studi TEFL]] (N = 3,181) menemukan efek keseluruhan Hedges' g = 0.38 yang naik seiring jenjang pendidikan (dasar 0.29, menengah 0.35, tinggi 0.44), dengan VR/AR menghasilkan efek terbesar dan keterampilan produktif (berbicara, menulis) memperoleh lebih banyak daripada keterampilan reseptif — mendukung penggunaan teknologi baru, terutama pada jenjang tinggi, sambil menjaga ekspektasi tetap realistis.
- **Sebuah tinjauan sistematis memetakan di mana pendidikan bahasa AI di sekolah dasar masih tipis.** Di antara 31 studi (2013-2025), pekerjaan di kelas bahasa sekolah dasar mengelompok pada berbicara, literasi, dan kosakata sementara tata bahasa, pemahaman menyimak, dan bahasa isyarat hampir tidak diteliti, dan sebagian besar desain kurang memiliki kekhususan tingkat kelas ([[ai-elementary-language-education-review-2026|Hamasha dkk., 2026]]).
- **Gunakan AI untuk memperluas latihan komunikatif, bukan menggantikannya.** [[ai-interlocutor-l2-spoken-dialogue|Lawan bicara AI]] dan [[tact-pedagogically-adaptive-esl-tutoring|tutor ESL adaptif]] memperluas latihan interaksional dalam skala besar — pasangkan dengan interaksi manusia agar kefasihan dan penyerapan transfer ke percakapan nyata.
- **Perluas [[scaffolding|perancah]] AI ke [[reading-education|membaca kolaboratif]].** Dengan 63 mahasiswa jurusan bahasa Inggris Tiongkok dalam studi anotasi sosial berbantuan GenAI, [[genai-social-annotation-epistemic-network-analysis-2026|Pan dkk. (2026)]] menemukan bahwa chatbot meningkatkan keterlibatan kognitif dan emosional serta kinerja membaca dan mengaitkan [[community-of-inquiry|kehadiran sosial]] dengan integrasi dan resolusi, meskipun kelompok berprestasi tinggi menggunakan perancah itu jauh lebih banyak.
- **Kesiapan, bukan kinerja yang teramati.** Di antara 708 pembelajar, latihan berbicara berbantuan AI yang lebih banyak berkorelasi dengan kemauan berkomunikasi yang lebih tinggi diarahkan ke manusia (β = 0.384) dan [[anxiety-and-stress|kecemasan]] berbicara bahasa asing yang lebih rendah (β = −0.416), sementara skenario asisten suara AI menurunkan kecemasan yang diantisipasi lebih jauh lagi; tidak ada studi yang mengamati berbicara manusia yang sebenarnya ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).

- **Perhatikan keluaran AI untuk kesalahan pragmatik, bukan hanya gramatikal.** Guru di lima metode pengajaran bahasa daring menyebut kebutaan pragmatik, di mana keluaran AI benar secara gramatikal tetapi salah dalam nada, formalitas, atau budaya ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi dan Khan (2026)]]).
- **Prioritaskan kualitas umpan balik di atas kuantitas dalam berbicara yang didukung ASR.** [[asr-english-speaking-feedback-metacognition-2026|Chen dkk. (2026)]] menemukan bahwa koreksi kesalahan yang akurat dan tugas refleksi terstruktur meningkatkan internalisasi [[feedback|umpan balik]] dan perilaku reflektif dalam berbicara bahasa Inggris di perguruan tinggi, sementara penggunaan ASR yang sering dan akurasi pengenalan hanya sebagian meningkatkan motivasi atau refleksi — presisi teknis semata tidak mendorong keterlibatan kognitif yang lebih dalam, dan kemahiran bahasa memoderasi perolehannya (pembelajar yang lebih kuat menginternalisasi umpan balik secara lebih efektif). Ini mendukung umpan balik yang sehat secara pedagogis (misalnya penjelasan artikulatoris alih-alih penanda kesalahan sederhana), refleksi berperancah, dan dukungan yang dibedakan menurut kemahiran.

- **Beri petunjuk sebelum koreksi.** Tugas ChatGPT "petunjuk sebelum koreksi", di mana pembelajar menyimpulkan perbaikan dari petunjuk terpandu alih-alih menerima koreksi langsung, mengurangi beban kognitif dan mendukung revisi terpersonalisasi — tetapi manfaatnya terutama bertahan bagi pembelajar yang sudah memiliki [[prior-knowledge|pengetahuan awal]] yang cukup (58 siswa, CEFR A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová & Jennings (2026)]]).
- **Berikan [[speech-and-voice-technologies|umpan balik pengucapan]] yang melokalisasi perbedaan yang harus ditutup.** Profy mempelajari kemahiran dari ucapan yang sebagian besar tanpa anotasi dan menunjukkan *di mana* seorang pembelajar menyimpang dari distribusi penutur asli; interval kepercayaan keterpahamannya sebelum/sesudah tidak tumpang tindih, berbeda dengan garis dasar imitasi terpicu — bukti bahwa latihan imitasi dapat didukung tanpa penilai ahli ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Gunakan kanal transkrip sebagai sinyal kedua, bukan pengganti.** Pengklasifikasi audio WavLM mengalahkan pengklasifikasi GPT-4o zero-shot yang membaca transkrip pada korpus pembelajar yang seimbang CEFR, sehingga jejak leksikal bahasa pertama memang nyata tetapi lebih lemah daripada pengucapan, ritme, dan intonasi ([[acoustic-lexical-native-language-identification-learners-2026|Uluslu dkk. (2026)]]).
- **Dukung adaptasi psikologis pembelajar terhadap studi berbantuan AI.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] melacak pembelajar bahasa Jepang selama satu semester dan menemukan bahwa mereka terbagi ke dalam profil adaptasi maladaptif, moderat, dan positif yang digerakkan oleh keseimbangan teknostres dan resiliensi, dengan sebagian besar pembelajar secara bertahap bergeser ke arah adaptasi positif dan melaporkan [[self-efficacy|efikasi diri]] yang lebih tinggi serta kelelahan yang lebih rendah — sinyal untuk merancang latihan bahasa yang dimediasi AI yang mengelola ketegangan teknologi, bukan hanya akses alat.
- **Waspadai bias penilaian dan umpan balik terhadap pembelajar.** [[ai-scoring-language-bias-physics|Penilaian AI]] dapat menghukum pola non-penutur asli; [[genai-linguistic-diversity-academic-writing|penelitian keragaman linguistik]] memperingatkan bahwa AI mengistimewakan bahasa Inggris standar — gunakan evaluasi swarujuk atau yang dimoderasi manusia.
- **Dukung seluruh spektrum pembelajar.** [[dyslexlens-dyslexic-learners-ai|Studi disleksia dan aksesibilitas]] serta desain yang [[culturally-relevant-pedagogy|responsif secara kultural]] ([[ai-tools-arab-english-classrooms|konteks Arab-Inggris]]) menunjukkan bahwa AI harus diadaptasi terhadap kebutuhan pembelajar yang beragam, bukan diasumsikan universal.

- **Infrastruktur, bukan hanya penilaian, yang mengecualikan bahasa.** Bahasa Bengali mencakup di bawah 0.5% konten web global berbanding defisit token pelatihan Inggris-ke-Bengali sebesar 67:1 dan kesenjangan konektivitas desa–kota (penetrasi internet 36.5% vs 71.4%), sehingga desain berbasis bahasa asli dan offline-first adalah prasyarat untuk akses, bukan sekadar kemudahan ([[structural-silence-underrepresented-language-ai-2026|Roy dan Roy (2026)]]).
- **Pendidik menghargai GenAI untuk pekerjaan persiapan, bukan penggunaan langsung di kelas.** Sebuah [[li-language-educators-genai-review-2026|tinjauan sistematis PRISMA atas 23 studi]] (Li dkk. 2026) menemukan bahwa pendidik bahasa paling menghargai GenAI untuk persiapan di balik layar — [[curriculum-design|perencanaan pelajaran]], pembuatan materi, dan dukungan/umpan balik menulis — namun tetap ragu tentang implementasi langsung yang menghadap kelas, yang mencerminkan kesenjangan teori–praktik antara menyetujui AI secara prinsip dan menggunakannya secara langsung. Adopsi dibentuk oleh faktor identitas profesional, pedagogis, teknis, [[governance|kelembagaan]], dan [[academic-integrity|integritas akademik]], dengan pendidik berada pada spektrum dari non-adopsi hingga integrasi menyeluruh; sikap cenderung berkembang dari rasa tidak aman awal menuju penggunaan selektif yang percaya diri seiring paparan.
- **Siapkan [[ai-literacy|literasi AI]] guru bahasa.** [[governing-unseen-ai-literacy-language-teachers-2026|Tinjauan sistematis]] menemukan bahwa literasi AI di kalangan guru bahasa merupakan kesenjangan kunci — berinvestasilah pada [[educational-development|pengembangan profesional]] guru bersamaan dengan adopsi alat. Seiring AI membentuk ulang pendidikan bahasa, literasi AI juga krusial agar guru dapat terlibat secara kritis dengan teknologi: Teachers' AI Literacy Scale (TAILS) dikembangkan untuk [[teacher-education|pendidikan guru bahasa]], mengoperasionalkan kerangka ED-AI enam dimensi (pengetahuan, evaluasi, kolaborasi, kontekstualisasi, [[agency|otonomi]], [[ethics|etika]]) dan divalidasi dengan calon guru bahasa Inggris.

- **Empat profil interaksi dalam tugas dwibahasa bertekanan tinggi.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li dan Weng (2026)]] menggunakan pelacakan mata, perekaman pena, dan perekaman suara dengan 22 peserta pelatihan interpreting untuk menunjukkan bahwa siswa membagi perhatian antara keluaran AI dan catatan mereka sendiri dalam empat cara berbeda — Intensive Engagers, Fast Scanners, Traditionalists, dan Frequent Switchers — dan bahwa 58.3% observasi tingkat tahap berubah profil antara tahap pemahaman dan produksi dalam tugas yang sama. Hanya pola tahap pemahaman yang memprediksi kualitas produk, dan klaster yang paling banyak menggunakan AI memperoleh skor terendah pada kelancaran penyampaian dan kualitas bahasa target, yang mendukung pengajaran agar pembelajar mendeskripsikan dan merefleksikan strategi mereka sendiri alih-alih meresepkan satu cara bekerja dengan alat itu.
- **Susun lingkaran empat keterampilan mengelilingi biaya dan konektivitas.** [[llmersion-local-first-language-learning-2026|Guo dkk. (2026)]] merilis LLMersion-1, prototipe local-first yang melatih menyimak, membaca, berbicara, dan menulis atas dokumen pembelajar sendiri pada perangkat keras konsumen — tutor 1B terkuantisasi menjadi 808 MB dan seluruh tumpukan residen tetap di bawah 4 GB — dan memperkirakan biaya lima tahun latihan harian sekitar \$18 listrik, berbanding \$1,200 untuk langganan cloud. Tidak ada hasil pembelajaran yang dilaporkan dan umpan balik pengucapan hanya bersifat segmental.
- **Bukti tentang perolehan berbicara chatbot tidak merata menurut fiturnya.** Dalam satu-satunya sintesis sistematis atas pertanyaan ini, sepuluh studi dari 2021 hingga 2024 paling andal meningkatkan jangkauan dan keterpahaman, sementara koherensi diperiksa sekali dan interaksi hampir tidak pernah; empat dari sepuluh melaporkan satu skor holistik ([[chatbots-oral-proficiency-efl-systematic-review|Soriano-Gonzalez & Belda-Medina (2026)]]).

**Mahasiswa penerjemahan dapat digeser dari koreksi permukaan.** Dalam kursus penerjemahan berita, [[xian-process-visualization-feedback-news-translation-2026|Xian dkk. (2026)]] menemukan konsultasi mesin pencari naik dari median 15.6% menjadi 27.7% waktu sesi (p = 0.020, terkoreksi Holm) dan pencarian berbasis pengetahuan dari 7.2% menjadi 28.8% (p = 0.010). Penggunaan mesin penerjemah turun dari 28.5% menjadi 5.1% tanpa mencapai signifikansi (p = 0.338), dan penggunaan AI interaktif tetap pada median nol. Tuasnya adalah menunjukkan proses mereka sendiri kepada siswa alih-alih melarang suatu alat.

## Miskonsepsi umum

- **"Tutor robot berwujud bekerja karena perwujudannya."** Meta-analisis atas **11 studi RALL (N = 595)** menemukan efek gabungan yang besar pada pembelajaran L2 (**g = 0.83**) dengan **heterogenitas tinggi**, dan — yang penting — **hanya** fitur tingkat **interaksi** yang memoderasinya. Morfologi dan modalitas tidak, sehingga perangkat kerasnya bukan bahan aktif.
- **"Butir penilaian yang dihasilkan AI lebih buruk daripada yang ditulis guru."** Perbandingan atas **52 tugas penilaian EFL yang dinilai oleh 20 guru berpengalaman** menemukan **tidak ada perbedaan kualitas yang signifikan secara keseluruhan** antara butir yang dihasilkan AI dan yang dikembangkan manusia, tetapi ada perbedaan pada dimensi tertentu. Kesetaraan keseluruhan dengan kelemahan spesifik adalah klaim yang berbeda dari peningkatan atau kekurangan.
- **"Umpan balik LLM hanya dapat menilai tulisan."** Sistem tingkat wacana melangkah lebih jauh dengan **menamai cacatnya alih-alih menilai teksnya**, dengan klasifikasi relasi pasangan kalimat yang melokalisasi **patahan koherensi** seperti lompatan logis dan tautan yang hilang. Keluaran yang berguna bersifat diagnostik, bukan numerik.

## Konsep terkait

- [[eportfolio]]
- [[writing-education]]

- [[reading-education]]

- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## Artikel terkait

- [[chatbots-oral-proficiency-efl-systematic-review]] — Perolehan chatbot dalam kemahiran lisan terkonsentrasi pada jangkauan dan keterpahaman
- [[student-ai-interaction-consecutive-interpreting-2026]] — Interaksi Siswa-AI dalam Interpreting Konsekutif Berbantuan Komputer
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Profil dan Transisi Adaptasi Psikologis dalam Pembelajaran Bahasa Jepang Berbantuan AI
- [[llm-agents-5e-esl-grammar-2026]] — Agen LLM dengan kerangka 5E untuk pemerolehan tata bahasa ESL (Yang, Weng & Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. penyetelan halus GPT untuk pembuatan butir menyimak L2 (Aryadoust & Wong 2026)
- [[bert-discourse-english-teaching-2026]] — Klasifikasi wacana BERT untuk pengajaran bahasa Inggris
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tugas penilaian yang dihasilkan AI vs yang dikembangkan manusia dalam EFL
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Mengelola yang tak terlihat: literasi AI di kalangan guru bahasa
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analisis pembelajaran bahasa berbantuan robot berwujud yang ditingkatkan AI
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Tutor AI Rancangan Instruktur dalam Pendidikan Bahasa Asing Universitas: Studi Metode Campuran atas Motivasi Pembelajar dan Pengalaman Belajar Reflektif Berdasarkan Teori Penentuan Nasib Sendiri
- [[lukesova-clue-before-correction-2026]] — Petunjuk Sebelum Koreksi: ChatGPT untuk Pembelajaran Bahasa Mandiri
- [[chatgpt-english-language-learning-malaysia]] — Pengalaman ChatGPT siswa dalam pembelajaran bahasa Inggris
- [[liu-emerging-tech-tefl-review-2026]] — Meta-analisis teknologi baru untuk EFL
- [[wang-goal-setting-ai-engagement-2026]] — Teori penetapan tujuan: dukungan guru, tujuan prestasi, dan keterlibatan dalam pembelajaran bahasa Inggris berbantuan AI (758 siswa Tiongkok)
- [[li-language-educators-genai-review-2026]] — Praktik dan pengembangan pendidik bahasa dengan GenAI
- [[asr-english-speaking-feedback-metacognition-2026]] — Teknologi ASR dalam berbicara bahasa Inggris di perguruan tinggi: internalisasi umpan balik dan strategi metakognitif
- [[genai-writing-program-primary-l2-motivation-engagement]] — Program menulis berbantuan GenAI untuk pembelajar L2 sekolah dasar (Lu dkk. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: Kerangka Agen AI Local-First untuk Pembelajaran Bahasa Rumahan Berbiaya Rendah menuju Keadilan Pendidikan

- [[ai-ethics-tensions-online-pedagogy-2026]] — Kebutaan pragmatik: keluaran bahasa AI dapat benar secara gramatikal tetapi salah secara kultural
- [[ai-speaking-practice-communicative-readiness-2026]] — Kesiapan, bukan kinerja yang teramati
- [[genai-social-annotation-epistemic-network-analysis-2026]] — Perluas perancah AI ke membaca kolaboratif
- [[acoustic-lexical-native-language-identification-learners-2026]] — Audio mengalahkan pengklasifikasi transkrip GPT-4o zero-shot untuk identifikasi L1 (Uluslu dkk. 2026)
- [[xian-process-visualization-feedback-news-translation-2026]] - umpan balik proses meningkatkan konsultasi sumber dan memangkas penggunaan mesin penerjemah dalam kursus penerjemahan berita
- [[wordofa-genai-grammar-instruction-efl-2026]] — Pengajaran tata bahasa berbantuan AI generatif dan efikasi diri serta kesadaran metalinguistik pembelajar EFL Ethiopia
