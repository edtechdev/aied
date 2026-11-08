---
connected_resources: [idstack, lesson-md, master-instructional-design]
title: "Penilaian"
created: "2026-08-09T07:47:05-04:00"
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating, course-ai-policy, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity]
technology: [generative-ai, learning-analytics]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, formative-assessment, process-oriented-assessment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/assessment"
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

> **Penilaian** — proses mengumpulkan dan menafsirkan bukti tentang apa yang diketahui dan dapat dilakukan pembelajar, serta metode yang digunakan untuk mengevaluasi pembelajaran. [[ai-education]] telah membentuk ulang penilaian secara fundamental: ia menggerakkan [[automated-assessment|penilaian dan penskoran otomatis]], menghasilkan dan mengadaptasi butir penilaian, dan memunculkan pertanyaan mendalam tentang apa yang sebenarnya diukur penilaian ketika siswa dapat menggunakan AI. Penilaian adalah konsep payung yang mengorganisasi cakupan basis pengetahuan atas [[formative-assessment]], [[automated-assessment|penilaian otomatis]], [[assessment-validity|validitas]], dan [[educational-measurement]].

## Pertanyaan yang Perlu Dipertimbangkan

- Penilaian di sini didefinisikan sebagai mengumpulkan dan menafsirkan bukti tentang apa yang diketahui dan dapat dilakukan pembelajar. Sebelum membaca, bagaimana Anda akan melengkapi kalimat 'suatu penilaian valid jika…' — dan apa yang akan berubah dari jawaban itu jika setiap siswa dapat diam-diam menggunakan AI untuk menghasilkan pekerjaannya?
- Halaman ini mengklaim bahwa *bagaimana* seorang siswa menggunakan GenAI (integrasi evaluatif versus penyerapan jalan pintas tanpa kritik) memprediksi kinerja, sementara seberapa sering mereka menggunakannya tidak memprediksi apa pun. Apa yang disarankan hal ini tentang naluri umum untuk mengatur AI dengan membatasi penggunaannya?
- Seorang pembelajar dapat menyerahkan karya berstandar profesional yang tidak dapat ia reproduksi tanpa alat itu — memutus inferensi antara kinerja dan kemampuan yang mendasarinya. Pernahkah Anda menjumpai sebuah 'kompetensi' dianugerahkan atas pekerjaan yang sebenarnya tidak dapat dilakukan siswa tanpa bantuan? Apa yang diungkapkan hal itu?
- Pertanyaan konstruktif yang diajukan halaman ini bukanlah 'bagaimana kita menghentikan siswa menggunakan AI?' melainkan 'bagaimana kita memungkinkan penggunaan yang bijak dalam konteks yang mencerminkan pekerjaan masa depan mereka?' Bagaimana penilaian akan tampak di bidang Anda jika itu tujuannya?
- Kerangka DRIVE menyarankan menilai kualitas [[student-engagement|keterlibatan]] siswa dengan GenAI — bukan hanya artefaknya — dengan melihat apakah mereka mengarahkan prompt secara strategis dan mengintegrasikan gagasan mereka sendiri. Apa yang akan Anda perhatikan untuk membedakan [[student-ai-interaction|interaksi AI]] yang mendalam dan reflektif dari konsumsi permukaan?
- Penilaian yang dimediasi AI semakin beragam ke dalam [[oral-assessment|ujian lisan]], portofolio, dan format percakapan yang mengurangi kecemasan dan terasa relevan secara profesional. Format penilaian mana dari pengalaman Anda sendiri yang menurut Anda paling 'tahan AI' — dan apakah ketahanan itu sama dengan nilai pendidikan?

## Pendahuluan

Penilaian adalah pusat AI dalam pendidikan karena dua alasan. Pertama, AI sendiri digunakan untuk menilai siswa — menilai esai, kode, jawaban singkat, dan ujian dalam skala besar. Kedua, AI di ruang kelas mengubah apa yang dapat diukur secara valid oleh penilaian, karena siswa dapat menggunakan [[generative-ai]] untuk menghasilkan karya. Bidang ini karena itu mencakup baik *alat* yang mengotomatiskan penilaian maupun pertanyaan *validitas dan integritas* yang dimunculkan AI. Tinjauan PRISMA atas 72 studi penilaian pendidikan tinggi menemukan bahwa pendidik menggunakan GenAI di seluruh siklus penilaian — membuat penilaian, latihan, penilaian hasil, transparansi pembelajaran dan umpan balik — dengan pembuatan penilaian dan umpan balik sebagai kemampuan yang paling sering teridentifikasi ([[higher-ed-assessments-genai-systematic-review|Crompton dan Burke (2026)]]).

## Bagaimana AI digunakan dalam penilaian

- **Penilaian otomatis:** [[automated-assessment|penilaian berbasis AI]] mencakup berbagai modalitas — pilihan ganda, jawaban singkat, esai, kode, dan evaluasi berbasis kinerja — melalui [[automated-assessment|penilaian otomatis]], [[automated-essay-scoring]], dan [[automated-question-generation]].
- **Penilaian formatif:** [[ai-technologies|sistem AI]] menghasilkan, memvalidasi, dan mengadaptasi butir penilaian formatif dalam skala besar, menginformasikan pengajaran yang sedang berlangsung alih-alih hanya evaluasi [[summative-assessment|sumatif]].
- **Analitik pembelajaran dan pengukuran:** [[learning-analytics]] dan [[educational-measurement]] menghubungkan data penilaian dengan proses pembelajaran, menggunakan [[item-response-theory]], [[knowledge-tracing]], dan [[student-modeling]] untuk menafsirkan kinerja. [[razavi-powers-item-difficulty-llm-2026|Razavi dan Powers (2026)]] mendemonstrasikan estimasi kesulitan butir berbasis LLM sebagai masukan pengukuran: pada 5,170 butir matematika dan membaca K-5 yang dikalibrasi di bawah model IRT Rasch, peringkat zero-shot GPT-4o berkorelasi sedang-hingga-kuat dengan kesulitan sebenarnya (r = 0.83 matematika, r = 0.81 membaca) tetapi bervariasi menurut kelas, sementara pendekatan berbasis fitur (fitur yang diekstrak LLM ke dalam model berbasis pohon) mencapai korelasi hingga r = 0.87. Studi ini menawarkan alur kerja tujuh langkah yang praktis bagi para profesional pengujian, sekaligus memperingatkan bahwa generalisasi di luar matematika dan membaca K-5 belum jelas.
- **Lingkar umpan balik:** penilaian AI semakin banyak memasok [[feedback|lingkar umpan balik]] yang menutup siklus dari penilaian ke pembelajaran.
- **Penilaian e-portofolio:** [[eportfolio|e-portofolio]] merangkum karya dan refleksi siswa sepanjang waktu sebagai bentuk penilaian berbasis proses yang tahan AI. AI generatif dapat membantu *proses* portofolio — menghasilkan umpan balik, [[scaffolding|merancah]] refleksi, dan (dengan desain rubrik yang tepat) mendukung evaluasi — sementara penekanan portofolio pada jejak penalaran dan draf menahan fabrikasi AI. [[ni-lam-multiliteracies-ai-portfolio-2026|Penilaian portofolio berbantuan AI]] dan [[sutama-chatgpt-eportfolio-speaking-2026|ChatGPT + e-portofolio untuk berbicara EFL]] menunjukkan AI dapat meningkatkan pengalaman portofolio maupun [[feedback-literacy]] pembelajar.
- **Reliabilitas penilaian terbuka bergantung pada model:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] menjadikan tolok ukur sebelas model GenAI dan penyematan kalimat terhadap dua penilai ahli pada 1,885 respons rekayasa perangkat lunak terbuka: hanya GPTo1 yang mencapai kesepakatan hampir sempurna (Fleiss' Kappa 0.82), sementara model berbasis rujukan menghukum jawaban yang benar namun dirumuskan berbeda. Karena GPTo1 adalah satu-satunya model yang dianggap dapat diterapkan tanpa pengawasan tetapi membawa biaya API proprietary, penulis merekomendasikan strategi hibrida yang memasangkan model canggih dengan opsi terjangkau atau [[human-in-the-loop-ai|pengawasan manusia]] di lingkungan dengan sumber daya terbatas. Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] terpandu PRISMA atas 42 studi empiris (2023–2025) mengonfirmasi gambaran reliabilitas bersyarat ini di seluruh bidang penilaian: LLM menyamai penilai manusia pada tugas tertutup dan jawaban singkat tetapi tidak dapat sepenuhnya menggantikan pertimbangan manusia pada karya yang kompleks, terbuka, atau subjektif, dan tidak muncul bias penilaian yang seragam — model kadang lebih longgar, kadang lebih ketat, dan sering menghindari skor ekstrem ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Penyempurnaan rubrik secara iteratif dapat mendorong penskoran terbuka LLM menuju reliabilitas mendekati manusia dalam lingkungan [[medical-education|medis]] berisiko tinggi: [[olvet-genai-scoring-open-ended-medical-2026|Olvet dkk. (2026)]] menemukan bahwa setelah fakultas berulang kali merevisi rubrik analitik dan holistik berdasarkan analisis pola kesalahan, GPT-4 mencapai kesepakatan substansial-hingga-hampir-sempurna dengan penilai fakultas pada tiga dari empat pertanyaan pra-klerik (kappa terbobot hingga 0.94), sementara butir rubrik holistik yang tersisa hanya bertahan pada kesepakatan moderat (κw = 0.54) — menunjukkan baik hasil dari rekayasa rubrik human-in-the-loop maupun batasnya pada tugas sintetis dan holistik.
- **Penilaian lisan dan kinerja berbantuan AI.** Sebuah studi desain [[vocational-education|TVET]] menggeser penilaian dari format yang berat teks menuju [[oral-assessment]] interaktif yang didukung LLM: pada empat kohort, 21 dari 33 pembelajar menilai tugas suara itu realistis dan tidak ada yang tidak setuju bahwa berbicara secara langsung lebih mencerminkan kompetensi daripada portofolio tertulis, sementara jumlah kata untuk pertanyaan yang identik bervariasi lima- hingga delapan kali lipat antar kohort dan sembilan pembelajar menjawab dalam dua hingga tiga belas kata dan semuanya benar. Sistem itu berjalan luring di satu laptop yang melayani hingga 12 pembelajar simultan dengan Mistral 7B dan faster-whisper, menghapus rekaman setelah 90 hari, dan menyerahkan keputusan penskoran kepada asesor — sebuah contoh desain penilaian [[human-in-the-loop-ai]] untuk kualifikasi yang berorientasi tempat kerja. ([[ai-supported-oral-assessment-tvet-2026]])

## Tantangan validitas dan pengukuran

AI memunculkan pertanyaan [[assessment-validity|validitas]] yang mendasar: apakah penilaian yang dinilai AI mengukur pembelajaran siswa atau [[prompt-engineering|keterampilan menyusun prompt AI]]? Apakah penggunaan AI oleh siswa membatalkan penilaian tradisional? Tantangan utamanya meliputi:

- **Validitas konstruk:** [[competency-based-education-genai-production-2026|Penelitian tentang pendidikan berbasis kompetensi]] menunjukkan AI generatif telah memutus inferensi antara kinerja dan kemampuan yang mendasarinya — seorang pembelajar dapat menyerahkan karya berstandar profesional yang tidak dapat ia reproduksi tanpa alat itu. Ini mendorong konseptualisasi ulang tentang kompetensi apa yang dinilai.
- **Kerangka tiga titik sudut untuk menyelaraskan kembali penilaian.** [[koretsky-genai-stem-assessment-2026|Koretsky dkk. (2026)]] memperlakukan GenAI yang ada di mana-mana sebagai masalah validitas dan pendefinisian kemampuan alih-alih masalah kecurangan, dengan berargumen bahwa tiga titik sudut segitiga penilaian — kognisi, observasi, dan interpretasi — harus diselaraskan bersama, bukan ditambal satu per satu.
- **Kepengarangan bersama dan integritas:** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Integritas kepengarangan bersama]] mengusulkan sumber bukti validitas baru yang dilanggar ketika siswa menyerahkan konten yang dihasilkan AI yang tidak mereka pahami, dan mengeksplorasi "AI Vivas" percakapan sebagai respons.
- **Kualitas psikometrik:** [[psychometrically-aware-ai]] dan [[automated-assessment|penilaian yang sadar keyakinan]] berupaya menjaga penskoran AI tetap andal, tidak berbias, dan dapat ditafsirkan.
- **Evaluasi asesor AI:** [[ai-ed-evaluation]] menyediakan metode dan [[benchmark|tolok ukur]] untuk menentukan apakah asesor otomatis benar-benar bekerja — pada reliabilitas, [[pedagogy|pedagogi]], dan [[equity-in-ai-education|keadilan]] — bukan hanya akurasi di judul semata.
- **Reliabilitas penilaian AI dan sejawat yang bergantung pada kualitas (2026):** Membandingkan penilaian ChatGPT, sejawat, dan [[teacher-role|instruktur]] atas [[higher-ed|sarjana]] [[group-work|proyek kelompok]] yang sama, [[usher-faraon-who-grades-best-2026|Usher & Faraon (2026)]] menunjukkan keselarasan penilaian dengan instruktur *bersyarat pada kualitas pekerjaan siswa*: ChatGPT paling menggelembungkan kiriman berkualitas rendah dan lebih selaras dengan instruktur pada karya berkualitas tinggi, sementara sejawat paling selaras pada karya yang lebih lemah dan menilai terlalu rendah proyek yang kuat. Temuan ini menantang pembingkaian biner "andal versus tidak andal", mengarah pada model reliabilitas bersyarat di mana asesor alternatif dipasangkan dengan tingkat tugas dan kinerja.
- **Penilaian manusia itu sendiri sarat nilai (2026):** [[luo-dawson-value-judgments-grading-2026|Luo & Dawson (2026)]] menunjukkan bahwa bahkan penilaian manusia atas karya berbantuan GenAI bukanlah tindakan netral yang berbasis kriteria. Wawancara berbasis skenario dengan 33 guru universitas mengungkap keputusan penilaian yang didorong oleh nilai berorientasi pada orang (kejujuran, ketekunan), berorientasi pada kemampuan (kemandirian, keterampilan GenAI, penguasaan disiplin), berorientasi pada relasi (kepercayaan), dan berorientasi pada keadilan (keadilan, kebajikan) — meluas melampaui tugas ke dugaan guru tentang siswa. Studi ini membingkai ulang pertanyaan penilaian dari "apakah penggunaan GenAI adalah kecurangan?" menjadi "bagaimana pertimbangan nilai guru membentuk nilai, dan apakah nilai-nilai itu relevan dengan capaian yang dinilai?" — mengedepankan [[assessment-validity|validitas]] dan "[[explainable-ai|transparansi]] dua arah" tentang bagaimana penggunaan GenAI akan memengaruhi nilai.

## Integritas dan perdebatan tentang deteksi

AI dalam penilaian telah mengintensifkan percakapan tentang [[academic-integrity|integritas]]. Satu alur berfokus pada [[ai-detection|mendeteksi teks yang dihasilkan AI]], sementara semakin banyak [[research-methods-aied|penelitian]] berargumen bahwa deteksi adalah alat yang terbatas dan situasional — bukan strategi pilihan pertama. [[beyond-detection-authentic-assessment-ai-2025|Melampaui Deteksi]] dan [[responsible-assessment-ai-era-stanford-2026|Penilaian yang Bertanggung Jawab]] berargumen bahwa keaslian tidak dapat dipaksakan menjadi ada melalui pengawasan; keaslian harus didesain ulang, dengan memosisikan AI sebagai kolaborator yang dideklarasikan dan memprioritaskan penilaian [[authentic-assessment|autentik]] dan berbasis [[process-oriented-assessment|proses]] alih-alih pengawasan. **[[walton-bearman-assessment-judgment-2025|Walton dkk. (2025)]]** mendasarkan hal ini pada bukti tentang **bagaimana siswa sebenarnya mempertimbangkan** jalan mereka melalui penilaian dengan GenAI: wawancara scroll-back dengan 26 siswa mengungkap spektrum enam peristiwa pertimbangan — dari mengevaluasi secara kritis pengetahuan AI dan belajar melalui keterbatasan AI, hingga mengadopsi gagasan tanpa kritik dan salah menilai kontribusi AI sebagai milik mereka sendiri. **[[stamatoulis-genai-use-patterns-2026|Stamatoulis dkk. (2026)]]** menambahkan padanan [[quantitative-research|kuantitatif]]: pada 157 siswa, *bagaimana* GenAI digunakan (integrasi evaluatif untuk mendukung pemahaman versus penyerapan jalan pintas dengan verifikasi rendah) memprediksi kinerja, sementara **frekuensi** penggunaan sederhana **tidak memprediksi** kinerja maupun [[self-efficacy|efikasi diri]] akademik. Bersama-sama studi ini membingkai ulang pertanyaan penilaian dari *apakah* siswa menggunakan AI menjadi *bagaimana mereka menilai dan mempolakan penggunaan itu*.

[[bassett-ai-detectors-education-2026|Bassett dkk. (2026)]] melangkah lebih jauh, berargumen bahwa deteksi tidak boleh digunakan sama sekali: keluarannya yang probabilistik tidak dapat diverifikasi secara independen karena asal teks dunia nyata tidak diketahui, dan skor detektor — sendiri atau bersama penanda linguistik, perbandingan gaya, klaim LLM, atau kesunyian siswa — tidak memenuhi standar keseimbangan probabilitas yang dituntut investigasi integritas.

Tinjauan PRISMA atas 25 studi menambahkan faktor risiko yang dilewatkan perdebatan deteksi: penutur asli non-Inggris menunjukkan kecenderungan tinggi untuk melanggar integritas ketika kesulitan menulis dalam bahasa Inggris, sehingga ekspektasi integritas harus dipasangkan dengan dukungan menulis akademik yang konkret alih-alih penegakan semata ([[ssaho-ai-academic-integrity-review-2025|Balalle dan Pannilage (2025)]]).

## Desain ulang penilaian di era AI

Pertanyaan konstruktif dalam literatur penilaian basis pengetahuan bukanlah "bagaimana kita mencegah siswa menggunakan AI?" melainkan "bagaimana kita memungkinkan mereka menggunakannya dengan bijak dalam konteks yang mencerminkan pekerjaan masa depan mereka?" Ini membingkai ulang penilaian di sekitar:

- **Tugas autentik dan berbasis proses** yang menjadikan penggunaan AI terlihat dan dinilai. [[authentic-assessment]] — memeriksa kinerja siswa pada tugas yang layak dan realistis — adalah respons terkemuka terhadap tantangan AI: setiap tugas yang dapat disimulasikan secara kredibel oleh [[llm]] kehilangan validitasnya, sehingga keaslian harus didesain ulang di sekitar [[collaborative-learning|kolaborasi]] waktu nyata, kontribusi digital dan sosial, serta pemaknaan individual. Ini terhubung ke [[zhan-boud-du-authentic-assessment-scoping-review-2025|kerangka desain untuk penilaian autentik]], [[authentic-products-authenticated-processes-2026|produk autentik dan proses terautentikasi]], dan [[tool-invariant-framework-agentic-ai|penilaian proses yang invarian terhadap alat]].
- **Desain penilaian yang bertanggung jawab** yang berlandaskan bukti validitas ([[responsible-assessment-ai-era-stanford-2026]])
- **Izin AI di tingkat tugas yang diturunkan dari sasaran penilaian:** [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]] menunjukkan kerja desain penilaian yang mendahului [[educational-policy-ai|kebijakan AI]] — menginventarisasi setiap tugas dalam sebuah proyek, menetapkan apa yang dinilai dan terhadap tujuan mana, dan mengizinkan atau melarang AI per tugas atas dasar itu (curah pendapat dan kurasi gambar diizinkan; menyusun tujuan pembelajaran dan desain slide tidak). Latihan penyelarasan yang sama juga berfungsi sebagai pemeriksaan atas inferensi yang didukung penilaian, karena ia memaksa instruktur menamai kinerja yang hendak dijamin oleh suatu nilai ([[assessment-validity]]).
- **Penilaian yang melampaui modalitas linguistik:** Jiang dkk. (2026) mendefinisikan literasi penilaian [[multimodal]] bagi guru [[language-learning|bahasa kedua]] sebagai pengetahuan, nilai, dan kompetensi untuk tugas yang memancing respons lintas modalitas linguistik, visual, auditori, gestural, dan spasial. Program selama setahun dengan 30 guru bahasa Inggris Hong Kong menaikkan pengetahuan tentang strategi penilaian dari 3.13 ke 4.15 dari 5 (partial η² = 0.571) dan kompetensi dalam mendukung siswa dari 3.05 ke 3.98 (0.482), sementara ketiga subdomain nilai tetap datar. Pengalaman guru sendiri menambahkan dua dimensi pada kerangka itu: mempertahankan praktik melawan prioritas kurikuler yang bersaing, dan memobilisasi GenAI secara kritis ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang dkk. (2026)]]).
- **Kepengarangan bersama dan deklarasi** sebagai bagian dari kontrak penilaian
- **Kriteria rubrik berbasis proses yang menilai interaksi, bukan artefak.** [[rubrics-genai-process-based-assessment-2026|Oviedo dan Díaz (2026)]] membaca model 3P Biggs sebagai tiga dimensi penilaian kritis — agensi manusia dan pengawasan kritis, perancah dialogis yang terkait dengan [[prompt-engineering]], dan kedaulatan kognitif yang berlandaskan [[academic-integrity|integritas]] dan transparansi — dengan berargumen bahwa berkas yang selesai tidak lagi membawa informasi tentang penalaran siapa yang menghasilkannya.
- **Produksi sebagai kompetensi** — mengevaluasi kemampuan pembelajar mengarahkan alat dan menghasilkan karya berstandar profesional ([[competency-based-education-genai-production-2026]])
- **Menilai proses interaksi, bukan hanya artefak** — [[assessing-student-drive-framework-2025|kerangka DRIVE]] (Directive Reasoning Interaction + Visible Expertise) memperlakukan kualitas *keterlibatan siswa dengan GenAI* sebagai konstruk yang dinilai. Ia membedakan konsumsi permukaan dari interaksi mendalam dan reflektif dengan melihat apakah siswa mengarahkan prompt secara strategis (DRI) dan mengintegrasikan serta mengembangkan gagasan disipliner mereka sendiri melalui pertukaran itu (VE), mendasarkan kriteria berfokus proses pada teori [[self-directed-learning]] dan keterlibatan kognitif sepanjang hierarki [[icap-framework|ICAP]]. Ini menjadikan DRIVE contoh *penilaian autentik yang dimediasi AI* — rubrik untuk mengevaluasi bagaimana pembelajar bermitra dengan GenAI alih-alih alat deteksi.

Sebuah usulan dalam literatur ini melampaui desain ulang di dalam kerangka yang ada. [[ai-agents-joyful-assessment-third-space-2026|El Khoury dan Ma (2026)]] berargumen bahwa reformasi yang diorganisasi di sekitar pencegahan pelanggaran atau deteksi penggunaan AI menyempitkan imajinasi pendidikan menjadi kontrol dan kepatuhan, dan mengusulkan **penilaian yang menyenangkan** sebagai gantinya: penilaian yang aman, responsif secara emosional, memberdayakan, dan mendukung [[agency|agensi siswa]], dengan keselamatan sebagai kondisi penopang karena tanpanya penyelarasan emosional menjadi pertunjukan, pemberdayaan menjadi tekanan, dan agensi menjadi risiko. Pembingkaian mereka membalik agenda deteksi — integritas menjadi konsekuensi dari merancang penilaian yang ingin diikuti siswa alih-alih titik awalnya — dan mereka memosisikan [[agentic-ai|agen AI]] yang dibangun instruktur (GPT kustom, Gems, agen Copilot Studio) sebagai ruang latihan berisiko rendah tempat siswa berlatih sebelum penilaian, dengan klaim bahwa AI mengorganisasi bukti sementara instruktur menafsirkannya.

## Implikasi bagi AI dalam pendidikan

- **Penilaian dan pembelajaran tidak terpisahkan:** penilaian AI yang baik harus mendukung pembelajaran ([[feedback|umpan balik formatif]]) sebanyak ia mengevaluasinya.
- **Validitas harus dikonseptualisasi ulang:** ketika AI dapat menghasilkan karya siswa, penilaian harus mengukur proses, pertimbangan, dan produksi autentik, bukan hanya keluaran.
- **Otomatisasi harus dievaluasi secara ketat:** asesor otomatis memerlukan evaluasi psikometrik dan [[bias-mitigation|keadilan]], bukan hanya klaim akurasi.
- **Integritas bergeser dari deteksi ke desain:** respons paling kokoh terhadap AI dalam penilaian adalah merancang tugas di mana penggunaan AI diharapkan, dideklarasikan, dan ditelaah.
- **Praktik inovatif dapat mengatasi beberapa masalah sekaligus.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]] berargumen bahwa seperangkat lima praktik yang saling memperkuat — [[authentic-assessment]], [[peer-assessment|penilaian diri dan sejawat]], penilaian ulang, [[mastery-learning|penilaian berbasis standar]], dan ungrading — yang selaras dengan paradigma "penilaian untuk pembelajaran" dapat menangkal bahaya penilaian tradisional yang berat sumatif dan berujuk norma (pembelajaran dangkal, [[motivation|motivasi intrinsik]] yang tergerus, stres dan kecemasan, ketidakadilan, dan [[academic-integrity|integritas]] yang terkompromi) di era AI generatif. Mereka menemukan adopsinya tidak merata antar bidang — penilaian diri dan sejawat mendominasi sementara inovasi yang berfokus pada nilai tetap marginal — dan mendesak pendidik untuk terlibat lebih aktif dan timbal balik dengan inovasi penilaian dan penilaian hasil, didukung eksperimentasi bertahap dan dukungan [[governance|institusional]].

- **Penilaian yang dimediasi AI semakin beragam.** [[aivaluate-anxiety-assessment-2026|AIvaluate]] menunjukkan bahwa [[conversational-ai|agen percakapan]] yang diperkuat LLM mengurangi [[anxiety-and-stress|kecemasan siswa]] selama penilaian berbasis kinerja; [[asynchronous-oral-assessment-2026|Pentland (2026)]] menemukan penilaian lisan asinkron menawarkan keterlibatan lebih tinggi dan dipersepsikan relevan secara profesional; [[graph-its-adaptive-algorithms-2026|ITS berbasis graf]] menggunakan pelacakan status pengetahuan adaptif untuk menginformasikan penilaian.

## Miskonsepsi Umum

- **"Integritas terutama merupakan masalah deteksi."** **Wawancara scroll-back dengan 26 siswa** mengungkap bahwa siswa mempertimbangkan jalan mereka melalui penilaian dengan GenAI sepanjang sebuah **spektrum**, dan pada **157 siswa**, *bagaimana* GenAI digunakan — **integrasi evaluatif untuk mendukung pemahaman versus** substitusi — memprediksi hasilnya. Modus penggunaan memisahkan siswa lebih tajam daripada keberadaan penggunaan.
- **"Penutur asli non-Inggris adalah risiko kecurangan."** **Tinjauan PRISMA atas 25 studi** menambahkan faktor risiko yang dilewatkan perdebatan deteksi: penutur non-asli menunjukkan **kecenderungan tinggi untuk melanggar integritas ketika kesulitan** dengan tuntutan bahasa. Itu adalah masalah dukungan bahasa yang salah dibaca sebagai masalah kejujuran.
- **"Kebijakan yang melarang GenAI menyelesaikan persoalan."** Siswa melaporkan spektrum pertimbangan alih-alih pola mengikuti aturan, sehingga aturan yang tidak menyentuh penalaran evaluatif yang sudah dilakukan siswa tidak akan diikuti secara konsisten.

## Konsep terkait
- [[learners]] — Pembelajar: konsep payung bagi konsep-konsep di sisi pembelajar
- [[pedagogical-partnerships]] — Kemitraan Pedagogis
- [[formative-assessment]] — Penilaian formatif: butir yang dihasilkan AI, tervalidasi, dan adaptif dalam skala besar
- [[automated-assessment]] — Penilaian dan penskoran otomatis lintas modalitas penilaian
- [[authentic-assessment]] — Tugas autentik berbasis proses yang tahan AI
- [[assessment-validity]] — Validitas penilaian di bawah AI generatif
- [[educational-measurement]] — Teori pengukuran yang mendasari penilaian AI
- [[automated-essay-scoring]] — Penskoran esai otomatis
- [[automated-question-generation]] — Pembuatan soal otomatis
- [[oral-assessment]] — Penilaian lisan: format langsung dan terekam yang menahan substitusi AI
- [[summative-assessment]] — Penilaian sumatif: format tahan AI (lisan, terproktor, ujian buku tertutup)
- [[item-response-theory]] — IRT untuk menafsirkan respons penilaian di era AI
- [[psychometrically-aware-ai]] — Penskoran AI yang sadar psikometri
- [[learning-analytics]] — Analitik yang menghubungkan data penilaian dengan pembelajaran
- [[feedback]] — Lingkar umpan balik yang menutup siklus penilaian-ke-pembelajaran
- [[feedback-literacy]] — Literasi umpan balik pembelajar
- [[academic-integrity]] — Integritas dan perdebatan tentang deteksi AI
- [[ai-detection]] — Mendeteksi teks yang dihasilkan AI
- [[ai-ed-evaluation]] — Metode dan tolok ukur untuk mengevaluasi asesor otomatis
- [[eportfolio]] — Penilaian e-portofolio berbasis proses
- [[speech-and-voice-technologies]]
- [[peer-assessment]]

## Artikel terkait
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — Program selama setahun yang mendefinisikan literasi penilaian multimodal dan mengukur apa yang bergerak, dan apa yang tidak
- [[ai-agents-joyful-assessment-third-space-2026]] — Agen AI, penilaian yang menyenangkan, dan ruang ketiga
- [[mccorkle-aligned-genai-course-policy-2025]] — Izin AI di tingkat tugas yang diturunkan dari apa yang dinilai (McCorkle 2025)
- [[usher-faraon-who-grades-best-2026]] — Membandingkan penilaian ChatGPT, sejawat, dan instruktur lintas tingkat kualitas proyek (Usher & Faraon 2026)
- [[responsible-assessment-ai-era-stanford-2026]] — Penilaian yang bertanggung jawab di era AI
- [[beyond-detection-authentic-assessment-ai-2025]] — Melampaui deteksi: penilaian autentik
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Integritas kepengarangan bersama dan validitas penilaian
- [[competency-based-education-genai-production-2026]] — Pendidikan berbasis kompetensi setelah AI generatif
- [[genai-assessment-governance]] — Tata kelola GenAI dalam penilaian yang berpusat pada bukti
- [[ssaho-ai-academic-integrity-review-2025]] — Tinjauan integritas AI: deteksi harus dipasangkan dengan desain ulang penilaian
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: detektor AI dalam pendidikan (Bassett dkk. 2026)
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: Penilaian Kecemasan Siswa yang Diperkuat LLM (2026)
- [[graph-its-adaptive-algorithms-2026]] — Tutoring Cerdas Berbasis Graf untuk Domain Dinamis (2026)
- [[asynchronous-oral-assessment-2026]] — Penilaian Lisan Asinkron di Era AI (Pentland 2026)
- [[assessing-student-drive-framework-2025]] — DRIVE: menilai pembelajaran melalui interaksi GenAI (DRI + Visible Expertise)
- [[walton-bearman-assessment-judgment-2025]] — Pertimbangan dalam pekerjaan siswa dengan GenAI pada tugas penilaian (26 siswa, scroll-back)
- [[stamatoulis-genai-use-patterns-2026]] — Pola penggunaan GenAI (integrasi evaluatif versus penyerapan verifikasi rendah) dan hasilnya
- [[luo-dawson-value-judgments-grading-2026]] — Pertimbangan nilai dalam menilai karya berbantuan GenAI: kejujuran, kepercayaan, validitas, dan transparansi dua arah (Luo & Dawson 2026)
- [[razavi-powers-item-difficulty-llm-2026]] — Mengestimasi kesulitan butir menggunakan LLM dan ML berbasis pohon
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[computing-assessment-genai-workshop-report-2026]] — AI Can Do Your Homework. Now What? Laporan dari lokakarya daring tentang penilaian komputasi di era AI generatif
- [[koretsky-genai-stem-assessment-2026]] — Kerangka tiga titik sudut untuk menyelaraskan kembali penilaian
- [[rubrics-genai-process-based-assessment-2026]] — Kriteria rubrik yang menilai interaksi, bukan artefak
