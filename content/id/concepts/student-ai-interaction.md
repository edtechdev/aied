---
title: "Interaksi Siswa-AI"
created: "2026-08-20T02:55:00-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
updated: "2026-11-08T14:09:36-05:00"
translation_of: "concepts/student-ai-interaction"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Interaksi siswa-AI** — pola, proses, dan kerja kognitif dalam cara siswa terlibat dengan sistem [[generative-ai|AI generatif]] selama belajar dan [[problem-solving|pemecahan masalah]]. [[research-methods-aied|Penelitian]] di sini mencirikan apa yang siswa minta dari AI, bagaimana prompt dan dialog berkembang, dan bagaimana kualitas interaksi berhubungan dengan [[learning-gains|hasil belajar]], [[cognitive-offloading]], dan [[agency]].

## Pertanyaan untuk Dipertimbangkan

- Pikirkan beberapa prompt terakhir yang Anda (atau seorang siswa) tulis kepada AI. Apakah sebagian besar darinya meminta jawaban, atau meminta AI menjelaskan, menyelidik, atau mengevaluasi? Menurut Anda apa dampak pola itu terhadap pembelajaran?
- Penelitian menemukan bahwa sebagian kecil tipe pertanyaan menyumbang sebagian besar pertanyaan siswa, dan pertanyaan itu berubah seiring kemajuan tugas. Mengapa menurut Anda pertanyaan siswa menyempit, dan apa yang disarankan hal itu tentang cara mereka menggunakan alat tersebut?
- Halaman ini menyatakan prompt yang dangkal dan mencari jawaban berkaitan dengan pembelajaran yang berkurang dan ketergantungan berlebih, sedangkan interaksi reflektif yang berorientasi verifikasi mendukung pemahaman. Menurut Anda apa yang membedakan prompt 'baik' dari yang 'buruk' — dan apakah itu tanggung jawab siswa atau desain alatnya?
- Jika kualitas interaksi dibentuk oleh konteks tugas dan scaffolding, bukan merupakan sifat tetap siswa, bagaimana sebuah mata kuliah atau alat dapat dirancang ulang untuk mengundang rentang pertanyaan yang lebih luas dan lebih produktif?
- Bagaimana Anda mengetahui apakah dialog AI yang lancar dari seorang siswa mencerminkan pembelajaran sejati atau sekadar pendelegasian yang terampil — dan apa yang akan Anda periksa untuk mengetahuinya?

## Pendahuluan

Interaksi siswa-AI adalah permukaan yang dapat diamati dari [[student-engagement|keterlibatan]] siswa dengan AI generatif — pertanyaan yang mereka ajukan, prompt yang mereka tulis, cara mereka menegosiasikan dan memverifikasi keluaran AI, dan bagaimana pola itu bergeser antartahap tugas dan sepanjang waktu. Ia berada di persimpangan [[student-experience]], [[prompt-engineering]], dan [[learning-analytics]], dan menjadi pusat perdebatan tentang apakah penggunaan AI dalam pendidikan merupakan pembelajaran sejati atau [[cognitive-offloading|ketergantungan berlebih]]. Jika [[human-ai-collaboration]] membingkai pembagian kerja kognitif tingkat tinggi antara manusia dan model, interaksi siswa-AI adalah perwujudan konkret dan terukur dari hubungan itu — pertanyaan, prompt, dan langkah negosiasi spesifik yang dilakukan siswa dari saat ke saat.

### Apa yang siswa tanyakan kepada AI

- **Penolakan adalah konfigurasi interaksi, bukan ketiadaan penggunaan.** [[silverdal-distributed-authorship-swedish-writing-2026|Silverdal, Hermansson dan Lindgren (2026)]] merekam tiga siswa menengah atas menulis cerita yang sama terinspirasi Kafka dengan GenAI dan memetakan tiga susunan berbeda dari rekaman itu: kepengarangan yang didelegasikan ke model, ko-penulisan kritis timbal balik, dan konfigurasi eksplisit "AI dan saya—tidak, terima kasih" di mana siswa menata ulang praktik menulisnya menjauh dari alat tersebut. Temuan bagi halaman ini adalah bahwa tugas, ruang, dan alat yang *sama* menghasilkan ketiganya, dan banyak dari apa yang membedakannya berada pada momen di antara prompt — jeda, reformulasi, keraguan sebelum menerima saran — yang tidak ditangkap catatan obrolan saja.
Salah satu alur utama penelitian mengukur **jenis dan kualitas pertanyaan siswa**. Studi menerapkan taksonomi tipe pertanyaan — misalnya taksonomi 18 tipe Graesser et al. — untuk mengklasifikasikan interaksi siswa-AI, sering menggunakan pengklasifikasi few-shot untuk menskalakan analisis pada ratusan atau ribuan interaksi. Temuan menunjukkan bahwa sebagian kecil tipe pertanyaan menyumbang mayoritas pertanyaan siswa, dan pertanyaan yang diajukan siswa **berubah secara substansial seiring kemajuan tugas** (mis., [[student-ai-inquiry-types-cs2-2026]]). Ketergantungan pada tugas ini penting: kualitas interaksi bukan sifat tetap siswa tetapi dibentuk oleh konteks masalah, [[scaffolding]], dan kemampuan alat AI. Pada usia paling muda, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]] menemukan anak-anak (usia 6–14) secara aktif menguji kredibilitas [[conversational-ai|chatbot]] dengan mengajukan pertanyaan yang jawabannya mereka ketahui (mis., "seberapa besar t rex") — ekspresi agensi diri epistemik — sementara anak pada umumnya hanya mengajukan 1–3 pertanyaan dan satu siswa kelas satu yang menonjol mengajukan 21, menegaskan bagaimana variasi perkembangan dan individual membentuk pertanyaan yang diajukan siswa.

Taksonomi itu sendiri belum sepakat: dari 46 kategorisasi pada 33 studi, label yang serupa menamai fenomena yang berbeda, sehingga tinjauan mengusulkan *episode interaksi* — pertukaran terarah tujuan yang berbatas waktu — sebagai unit yang mencakup pemerolehan pengetahuan, umpan balik evaluatif, panduan strategis, inkuiri dialogis, penghalusan artefak, dan ko-regulasi ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).

Melengkapi studi taksonomi tersebut, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] mencirikan *bentuk dialog* pertanyaan siswa. Di antara 38 [[higher-ed|mahasiswa sarjana]] yang menyelesaikan esai argumentatif tanpa pengawasan, 76.32% menggunakan pola satu putaran tanya–dapat jawaban–berhenti — biasanya menempelkan judul tugas tanpa menjelaskan kebutuhan mereka dan mengirim ulang prompt yang identik ketika tidak puas — dan 78.94% hanya menyentuh [[generative-ai|GenAI]] di awal (ide, latar) atau akhir (pemolesan, panjang) tugas, menjaganya terpisah dari membaca dan [[writing-education|menulis]] mandiri; hanya 23.68% yang mempertahankan dialog bolak-balik iteratif dengan pertanyaan lanjutan dan penalaran mereka sendiri. Para penulis menempatkan pola ini pada spektrum dari **outsourcing kognitif** hingga **realokasi kognitif** — analog era GenAI dari pendekatan belajar permukaan versus [[metacognition|pendekatan mendalam]] — dengan mencatat bahwa sebagian besar siswa memahami alat itu sebagai mesin pencari yang ditingkatkan, yang membatasi mereka pada ujung outsourcing.

Dengan membingkai ulang pola ini sebagai kerja epistemik, analisis atas 200 sesi obrolan ko-pemrograman menemukan 78.8% interaksi siswa–GenAI berjalan pada tujuan dan strategi non-penguasaan seperti outsourcing atau mencari verifikasi, dan hanya 11.1% yang memadukan tujuan berorientasi penguasaan dengan justifikasi epistemik ([[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]]).

Pengodean atas 50 pertukaran sampel menghasilkan tipologi tiga arah atas perilaku yang sama: [[three-pathways-student-ai-interaction-2026|Zahra (2026)]] mengklasifikasikan 46% sebagai Tinjauan Pasif, di mana model bertindak sebagai oracle dan keluarannya diterima dengan sedikit pengamatan, 18% sebagai Pertanyaan Langsung, dan 36% sebagai Dialog Strategis, memadukan distribusi itu dengan argumen desain yang mengutamakan batasan (kappa = .48 antarpengode). Survei tujuh tugas pada 211 mahasiswa komputasi mencapai kesimpulan yang sama dari arah sebaliknya: [[student-llm-use-cs-subfields-2026|Nizamani et al. (2026)]] mengukur adopsi LLM dari 89.6% pada algoritma hingga 15.2% pada rekayasa perangkat lunak dan mengaitkan sebarannya dengan kompleksitas tugas, keterverifikasian, dan scaffolding, bukan dengan subbidangnya.

### Kualitas interaksi dan pembelajaran

Alur pelengkap menghubungkan *bentuk* interaksi dengan pembelajaran. Prompt yang dangkal atau sempit secara kebiasaan (meminta AI menghasilkan jawaban alih-alih menjelaskan, menyelidik, atau mengevaluasi) berkaitan dengan pembelajaran yang berkurang dan ketergantungan berlebih yang meningkat, sedangkan interaksi reflektif yang berorientasi verifikasi mendukung [[metacognition]] dan pemahaman yang tahan lama. Ini menghubungkan interaksi siswa-AI langsung ke desain [[intelligent-tutoring]]: sistem dapat dibangun untuk mengundang rentang inkuiri yang lebih luas dan lebih produktif serta untuk menopang pengajuan pertanyaan alih-alih sekadar menjawab. Interaksi bahkan tidak perlu berjalan melalui prompt yang mencari jawaban — ketika AI mengkritik pekerjaan siswa sendiri, pertukaran itu menjadi dialog reflektif yang berorientasi verifikasi. Dalam [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]], respons siswa terhadap esai [[llm]] yang diberi [[feedback]] menunjukkan refleksi pada 92.7%, penerimaan pada 93.6%, dan sanggahan aktif atas klaim LLM pada 87.8% kasus (κ antarpenguji = 0.81–0.89), dan respons mereka terhadap [[ai-feedback-quality|kualitas umpan balik]] membaik antarikatan sebagai keterampilan yang dapat dipelajari. Sisi reflektif interaksi tidak perlu berjalan melalui prompting langsung — dalam [[breideband-community-builder-cobi-2026|CoBi]], siswa terlibat dengan [[visualization|visualisasi]] AI tingkat kelas atas tuturan [[collaborative-learning|kolaboratif]] mereka sendiri dan berembuk tentang kapan klasifikasi AI tampak keliru. Itu mengubah kesalahan klasifikasi yang tampak menjadi peluang untuk mengalibrasi pemahaman mereka tentang kemampuan dan batas AI ([[trust-calibration]]) alih-alih sekadar menerima keluarannya. Namun hubungan antara bentuk interaksi dan pembelajaran memiliki batas: [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] memisahkan *iterasi percakapan* dari *iterasi kognitif* dengan alasan bahwa siswa dapat menghaluskan keluaran selama banyak putaran sementara model mental di baliknya tetap tidak berubah. Bukti pembelajaran adalah perubahan posisi kognitif siswa, bukan panjang atau kelancaran pertukaran — jumlah putaran bukan proksi kedalaman keterlibatan.

Yang menetapkan jalurnya adalah interaksi, bukan alatnya: dalam eksperimen lapangan dengan hampir 1,000 siswa matematika sekolah menengah, GPT-4 tanpa batasan menaikkan skor latihan 48% tetapi memotong skor ujian tanpa bantuan 17%, sedangkan model yang sama yang dibatasi pada petunjuk rancangan guru menaikkan latihan 127% dan sebagian besar menghapus defisitnya ([[naim-bypass-offload-scaffold-llm-learning-2026|Lee, 2026]]).

Yang mengikuti keberhasilan adalah apakah siswa memberi prompt secara efektif, bukan seberapa banyak: AI Query Efficiency dan AI-Driven Problem-Solving adalah prediktor terkuat kinerja akademik pada 128 mahasiswa teknik, dan tetap signifikan setelah mengontrol IPK ([[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez et al. (2026)]]).

Konteks perilaku adalah sinyal terpisah dari pertanyaannya sendiri: dalam empat penerapan TutorTrace (480 siswa, ~180,000 peristiwa IDE), mengondisikan bantuan pada keadaan perilaku terbaru siswa memotong interval antara pertanyaan tanpa kerja mandiri dari 50.0% menjadi 20.7%, dan pertanyaan yang akan segera muncul dapat diprediksi dari perilaku saja (AUROC = .726) ([[tutortrace-learner-behavioral-states-2026|Barron et al. (2026)]]).

Kepadatan bukan mekanismenya: pergantian siswa antara suara dan teks hampir menggandakan putaran dialog per menit (1.34 versus 0.75) tanpa mengubah penguasaan mingguan, dan para penulis membaca pertimbangan median 26 detik pada kanal tertulis sebelum ketukan tombol pertama sebagai tindakan pengodean itu sendiri ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne dan Dellarocas (2026)]]).

Loop verifikasi tetap bisa dangkal: analisis sekuensial jeda atas penerapan agen LLM selama empat minggu dalam mata kuliah basis data sarjana menemukan siklus Query–Evaluation–Query yang signifikan, namun terdapat loop transisi-diri yang kuat di dalam keadaan tingkat rendah, dan hanya 3.92% interaksi yang mencapai kognisi tingkat tinggi ([[li-dbagent-llm-educational-agent-cs-2026|Li et al. (2026)]]).

Bernstein dan Sibia (2026) mendokumentasikan pola filter iteratif dalam cara mahasiswa CS2 menangani penjelasan GenAI ([[student-reception-genai-analogies-computing-2026]]): mereka merujuk silang ke catatan kuliah, menuntut provenans ("Saya akan jauh lebih ragu... tanpanya"), dan menyelidik dengan pertanyaan lanjutan untuk mencari ketidakkonsistenan alih-alih mengeluarkan satu penilaian terima-atau-tolak. Siswa juga membaca penjelasan untuk mengetahui pengetahuan dan latar siapa yang diasumsikan — [[prior-knowledge|pengetahuan awal]] yang diasumsikan melampaui silabus, rujukan olahraga dan permainan yang default ("sisi komputasi yang lebih didominasi laki-laki"), dan pengulangan berlebihan semuanya berfungsi sebagai sinyal tentang pembaca yang dibayangkan, dengan scaffolding berlebihan dibaca sebagai merendahkan alih-alih sekadar tidak efisien.

Berkonsultasi dengan AI pada *titik* yang tepat dalam tugas sama pentingnya dengan perumusan prompt individual: dalam studi yang sama, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] menemukan minoritas yang berorientasi realokasi bergantian antara kerja mandiri dan konsultasi GenAI serta melaporkan upaya total yang tidak berubah tetapi fokus yang bergeser — memindahkan sumber daya dari mencari ke memeriksa kualitas dan keseimbangan argumentasi, dan menulis catatan refleksi setelah sesi untuk menangkal retensi yang dangkal — sedangkan siswa dengan tujuan penguasaan tetapi [[ai-literacy|literasi AI]] yang lemah jatuh ke dalam "paradoks efisiensi", meng-offload "bukan karena niat, tetapi karena default".

### Dari interaksi ke pedagogi

Pencirian interaksi siswa-AI menginformasikan [[learning-design]]: instruktur dapat menyadari ketika pola pertanyaan siswa sempit atau dangkal dan merancang intervensi yang memperluas inkuiri; [[teacher-role]] bergeser ke arah melatih siswa berinteraksi secara produktif dengan AI. Ini juga mendasari kurikulum [[ai-literacy]] yang memperlakukan prompting dan verifikasi yang efektif sebagai keterampilan yang dapat dipelajari alih-alih bakat bawaan.

Tuas desain dapat menggeser default itu: dalam mata kuliah fisika asinkron dengan sekitar 70 siswa, artefak yang dinilai adalah transkrip dialog alih-alih jawaban, namun banyak siswa tetap mengajukan daftar panjang pertanyaan tanpa menjawab pertanyaan lanjutan [[socratic-method|Sokratik]] model — mode kegagalan yang justru ingin ditangkap oleh kriteria tersebut ([[context-prompts-physics-assignments-2026|Rodriguez & Wulff (2026)]]).

Prompt yang ditulis guru adalah salah satu tuas tersebut, tetapi ketelitian yang dilaksanakan tertinggal dari targetnya: pada 1,479 percakapan, 38% tidak mencapai level Depth-of-Knowledge yang dimaksud guru, mendekati 50% pada DOK 3, sementara garis akhir yang eksplisit mempersempit celah itu sebesar 0.22 level dan pagar pengaman "tanpa jawaban langsung" memotong tingkat jawaban akhir AI sebesar 8.5 poin persentase ([[teacher-authored-prompts-student-ai-dialogue|Liu et al. (2026)]]).

Non-penggunaan itu sendiri adalah pola interaksi yang harus direncanakan oleh [[pedagogy]]. [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al. (2026)]], meneliti 85 [[teacher-education|calon guru]] di tiga mata kuliah yang penggunaan GenAI dalam [[assessment]] secara eksplisit diizinkan, menemukan bahwa 62.4% (53 dari 85) menolak menggunakannya sama sekali, jauh di bawah adopsi 79–83% yang terlihat dalam survei sebanding di Inggris dan Australia, dan bahwa penggunaan oleh pengadopsi bersifat dangkal dan korektif alih-alih generatif (mengoreksi ejaan 43.8%, memeriksa kejelasan 34.4%, pembuatan teks hanya 18.8%). Pilihan mereka mengikuti desain penilaian dan budaya institusi alih-alih kesulitan teknis: 41.5% non-pengadopsi takut dituduh [[academic-integrity|plagiarisme]] secara keliru, dan sembilan dari sebelas narasumber membaca kebijakan permisif itu sendiri sebagai kemungkinan "perangkap". Jarak antara 32 pengguna yang dilaporkan survei dan 28 deklarasi diri menunjukkan bahwa interaksi AI yang *dilaporkan* siswa dibentuk oleh konsekuensi penilaian — catatan pengukuran bagi laporan analitik pembelajaran tentang interaksi siswa-AI.

[[wang-student-ai-collaboration-peer-feedback-2026|Wang dan Guo (2026)]] mendokumentasikan apa yang ditambahkan dialog terbuka dengan AI generatif dalam tinjauan sejawat: siswa yang menginterogasi model alih-alih menerima saran pertamanya menghasilkan umpan balik yang dinilai sejawat lebih tinggi, dan melaporkan lebih banyak kenikmatan tugas dan lebih sedikit [[anxiety-and-stress|kecemasan]].

## Disiplin dan Keterlibatan Kognitif dalam Obrolan Siswa-AI

- **Keterlibatan kognitif terkait disiplin dalam obrolan siswa-AI.** Chang dan Li (2026) menganalisis prompt siswa ke AI pada 116 mata kuliah dengan desain dalam-diri dan lintas disiplin, menunjukkan bahwa percakapan siswa-AI mencerminkan keterlibatan kognitif **terkait disiplin** alih-alih gaya interaksi individual yang tetap. Secara keseluruhan sekitar 62% prompt memuat tuntutan kognitif tingkat tinggi, tetapi profil level Bloom berbeda tajam menurut disiplin: mata kuliah [[stem-education|STEM]] memunculkan prompt dominan Apply (20.8%), mata kuliah bahasa dominan Understand (31.7%), dan mata kuliah ilmu sosial dominan Create (33.8%). Perbandingan berpasangan dalam-diri mengonfirmasi siswa yang sama menghasilkan lebih banyak prompt tingkat tinggi secara signifikan pada mata kuliah ilmu sosial daripada STEM (n gabungan = 16, p < .001), dan variasi tingkat mata kuliah melebihi variasi tingkat siswa — argumen kuat bahwa asisten pengajar AI harus dirancang dan dievaluasi dengan mempertimbangkan konteks disiplin.
- **Seberapa banyak siswa menggunakan AI tidak memprediksi bagaimana perasaan mereka tentangnya.** Di antara 819 siswa, gender, keahlian AI yang dinilai sendiri, dan frekuensi penggunaan semuanya gagal mencapai signifikansi dalam MANOVA (Wilks' Lambda 0.997, p = 0.551; 0.990, p = 0.295). Pengguna berat dan ringan dalam sampel itu memiliki pandangan yang sama ([[ai-chatbots-emotional-support-human-connection-2025|Al-Zahrani (2025)]]).

- **"Siswa tidak dapat menggeser nilai penilai."** Mereka bisa, dan ini adalah kegagalan paling menetap dalam rangkaian uji: **17 dari 22** model menaikkan nilai mereka lebih banyak setelah sanggahan telanjang daripada setelah permintaan untuk meninjau ulang, termasuk **enam dari delapan** yang telah lolos setiap pemeriksaan gaming dan jawaban kosong. Yang terbesar adalah Llama 3.2 3B pada **+33.2% skala**, dan permintaan untuk meninjau ulang itu sendiri menurunkan nilai untuk **sepuluh** dari 17, sehingga kontrasnya bukan efek mentah dari sanggahan. [[porcaro-ai-grading-benchmark-2026|Nilai yang dapat dibantah siswa memerlukan catatan pertukaran]].

## Miskonsepsi Umum

- **"Taksonomi interaksi sudah mapan."** **Dari 46 kategorisasi pada 33 studi, label serupa menamai fenomena berbeda**, itulah sebabnya tinjauan mengusulkan *episode interaksi* sebagai unitnya. Skema pengodean yang dipinjam dari satu taksonomi mungkin mengukur konstruk yang berbeda.
- **"Siswa menggunakan AI sebagai tutor."** Di antara **38 mahasiswa sarjana** yang menyelesaikan esai argumentatif tanpa pengawasan, **76.32% menggunakan pola satu putaran tanya-dapat-jawaban-berhenti**, biasanya menempelkan judul tugas. Pola dominannya adalah pengambilan satu putaran, yang bukan tutoring.
- **"Semakin besar penggunaan AI menunjukkan semakin besar keterlibatan dengan materi."** Analisis atas **200 sesi obrolan ko-pemrograman** menemukan **78.8% interaksi siswa-GenAI berjalan pada tujuan dan strategi non-penguasaan**. Volume interaksi mengukur sesuatu selain orientasi belajar, sehingga jumlah sesi adalah proksi keterlibatan yang menyesatkan.

## Konsep terkait
- [[learners]] — Siswa: payung bagi konsep-konsep sisi siswa
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Artikel terkait

- [[ai-chatbots-emotional-support-human-connection-2025]] — Frekuensi penggunaan dan keahlian yang dinilai sendiri tidak memprediksi apa pun pada 819 siswa
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Outsourcing kognitif vs. realokasi dalam penilaian siswa–GenAI tanpa pengawasan (Yan et al. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — “Apakah ini perangkap?”: non-adopsi GenAI oleh calon guru dalam penilaian (Zou et al. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Analisis Jenis Inkuiri dalam Interaksi Siswa-AI
- [[student-llm-interaction-taxonomy-review-2026]] — Tinjauan Taksonomi Interaksi Siswa-LLM
- [[teacher-authored-prompts-student-ai-dialogue]] — Prompt yang Ditulis Guru dalam Dialog Siswa-AI
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Membangun Literasi AI Epistemik
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): Integrasi LLM di CS2
- [[li-dbagent-llm-educational-agent-cs-2026]] — Agen pendidikan berbasis LLM (DBagent) dalam pendidikan CS
- [[isaza-chatgpt-engineering-prompting-2026]] — Perilaku prompting dan integrasi yang tercatat
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Cacat tetapi Mudah Diingat: Penerimaan Kritis Siswa terhadap Analogi GenAI yang Dipersonalisasi Minat dalam Pendidikan Komputasi
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, atau Scaffold: Model Konseptual tentang Bagaimana Model Bahasa Besar Membentuk Pembelajaran
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Ketika Tutor AI Berbicara: Bukti dari Eksperimen Lapangan Acak
- [[context-prompts-physics-assignments-2026]] — Tugas Fisika Berbasis Kecerdasan Buatan menggunakan Prompt Konteks
- [[three-pathways-student-ai-interaction-2026]] — Tipologi Tiga Jalur interaksi siswa-AI: 46% Tinjauan Pasif, 18% Pertanyaan Langsung, 36% Dialog Strategis
- [[porcaro-ai-grading-benchmark-2026]] — Melampaui kesepakatan: 22 penilai berprompt menghadapi probe yang jawaban benarnya diketahui, dan sebagian besar dapat dibujuk naik (Porcaro 2026)
