---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack, teacher-dev]
title: "Aksesibilitas"
created: "2026-08-23T12:00:00-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/accessibility"
source_updated: "2026-11-05T21:30:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Aksesibilitas** — perancangan teknologi, konten, dan antarmuka pendidikan agar dapat dipersepsikan, dioperasikan, dan dipahami penyandang disabilitas dan orang dengan kebutuhan beragam. Dalam [[ai-education|AI dalam pendidikan]], aksesibilitas mencakup hambatan operasional yang konkret pada *medium* pembelajaran: takarir video, teks alternatif, transkrip, kompatibilitas pembaca layar dan papan ketik, kontras warna, penyederhanaan teks, keluaran taktil, dukungan bahasa isyarat, dan kompatibilitas dengan [[ai-technologies|teknologi]] bantu.

## Pertanyaan untuk Dipertimbangkan

- Saat terakhir merancang atau memilih alat pembelajaran digital, apakah Anda memeriksa apakah takarir, teks alternatif, navigasi papan ketik, dan kontras warna berfungsi sebelum mempertimbangkan [[pedagogy|pedagogi]]nya? Mengapa urutan itu mungkin penting?
- Video dengan takarir yang akurat bersifat "aksesibel," sedangkan kursus yang menyusun diskusi di sekitar kebutuhan komunikasi seorang siswa Tuli bersifat "mendukung siswa tersebut." Di mana Anda menarik garis antara menghilangkan hambatan teknis dan melayani siswa secara bermakna?
- [[research-methods-aied|Penelitian]] menunjukkan [[video-education|video instruksional]] yang disegmentasi AI dengan jeda tetap menghilangkan kesenjangan kinerja antara [[neurodiversity|ADHD]] dan [[learners]] non-ADHD. Dapatkah Anda mengingat "perbaikan yang dirancang untuk satu siswa" yang akhirnya bermanfaat bagi semua orang di kelas yang Anda ikuti?
- Sebagian berpendapat aksesibilitas perlu tetapi tidak cukup — alat aksesibel tidak otomatis inklusif atau adil bagi penyandang disabilitas. Apa bedanya mampu menggunakan alat dan dilayani secara bermakna olehnya?
- Banyak alat AI dilatih terutama dengan data berbahasa Inggris yang berpusat pada Barat. Bagaimana itu membatasi layanan bagi siswa yang bahasa pertamanya isyarat, atau yang cara mengetahuinya berbeda dari arus utama?
- AI dapat mengotomatiskan aksesibilitas dalam skala besar — menghasilkan takarir, menyederhanakan teks, menghasilkan keluaran taktil. Apa yang ingin Anda verifikasi manual sebelum mempercayai aksesibilitas otomatis itu, dan mengapa?

## Pendahuluan

Aksesibilitas berbeda dari, tetapi erat terkait dengan, tiga konsep tetangga di basis pengetahuan ini. **[[inclusive-learning]]** adalah payung yang lebih luas untuk merancang pendidikan bagi semua keragaman siswa (fisik, kognitif, sensorik, situasional). **[[special-education]]** adalah domain instruksional bagi siswa dengan disabilitas yang terdiagnosis, termasuk akomodasi individual. **[[universal-design-for-learning]]** adalah kerangka perancangan proaktif (berbagai sarana [[student-engagement|keterlibatan]], representasi, tindakan/ekspresi). **Aksesibilitas** dalam konstelasi ini adalah *lapisan teknis dan prosedural*: menghilangkan hambatan mempersepsikan dan mengoperasikan format, bukan merancang ulang pedagogi. Keduanya dapat dipisahkan pada spektrum — aksesibilitas bertanya "dapatkah semua orang mengakses konten dan alat ini?" sementara dukungan bagi siswa dengan disabilitas bertanya "apakah instruksi melayani setiap siswa secara bermakna, termasuk akomodasi dan dukungan khusus disabilitas?" Keduanya penting, dan AI menyentuh keduanya.

### Mengapa perbedaan ini penting

Video dengan takarir akurat dan transkrip yang ditandai dengan benar bersifat *aksesibel*; kursus yang menyusun diskusi untuk mencakup preferensi komunikasi seorang siswa Tuli bersifat *mendukung siswa tersebut*. Keduanya tumpang tindih — media aksesibel adalah prasyarat bagi instruksi inklusif — tetapi keduanya memerlukan langkah perancangan dan bukti yang berbeda. Aksesibilitas berjangkar pada standar dan hukum (WCAG, [[assistive-technology|Assistive Technology Act]] Amerika Serikat dan IDEA), sedangkan pembelajaran aksesibel dan pendidikan khusus berjangkar pada pedagogi dan [[student-experience|pengalaman siswa]].

### Tema penelitian utama

**Aksesibilitas format: takarir, transkrip, dan teks.** **[[adhd-video-segmentation-computing-education|Video instruksional tersegmentasi AI]]** dengan jeda tetap menghilangkan kesenjangan kinerja antara siswa ADHD dan non-ADHD — aksesibilitas sebagai katalis yang bermanfaat bagi semua orang. **[[text-simplification-its|MuTSE]]** mengevaluasi penyederhanaan teks berbasis [[llm]] dalam [[intelligent-tutoring|tutor cerdas]] untuk menyesuaikan kompleksitas konten dengan tingkat bacaan setiap siswa, lapisan aksesibilitas [[human-in-the-loop-ai|human-in-the-loop]]. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** membangun [[automated-question-generation|pembuatan pertanyaan]] LLM untuk siswa Tuli dan Kurang Dengar, menghadapi ketidaksesuaian antara prompt AI berbasis teks dan bahasa pertama berbasis isyarat.

**Akses sensorik: keluaran nonvisual dan taktil.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** menjadikan percakapan lisan modalitas utama bagi anak dengan gangguan penglihatan, menghilangkan ketergantungan visual. **[[tactile-statistical-graphs-accessibility|Grafik taktil hasil cetak 3D]]** mengubah data statistik visual menjadi keluaran yang dapat disentuh bagi siswa tunanetra dan low vision. **[[pepper-robot-sign-language-lis-2025|Robot bahasa isyarat]]** memperluas [[educational-robotics]] ke aksesibilitas komunikatif bagi siswa Tuli.

**Akses berbasis penolakan: minta gambar alih-alih menebak.** [[croteau-mllm-visual-math-reasoning-refusal-2025|Croteau & Heffernan (2025)]] menemukan bahwa ketika gambar yang krusial bagi tugas disingkirkan, enam model multimodal menolak alih-alih menebak dalam 95,4%–98,9% percobaan — abstensi yang harus diperlakukan sistem akses sebagai permintaan atas gambar atau deskripsi terstruktur, bukan sebagai tebakan. Subset konsensus gold (76 butir) dan ultra-gold (61 butir) yang dirilis memberi eksperimen substitusi deskripsi landasan uji untuk membandingkan gambar asli dengan deskripsi tekstual yang telah divalidasi pada butir matematika yang bergantung pada gambar.

**Deskripsi audio untuk film tidak serta-merta berlaku pada rekaman kuliah.** Kuliah berbasis slide merujuk diagram, persamaan, dan gestur menunjuk, dengan jeda rata-rata hanya 0.5 s, sehingga [[ad4edu-lecture-audio-description-2026|Psychias & Gao (2026)]] membangun tolok ukur khusus kuliah dan metrik yang dapat didiagnosis aturan; [[llm-training-and-fine-tuning|pelatihan lanjutan]] pada pasangan yang diurutkan oleh hakim mesin tidak meningkatkan kepatuhan secara merata.

**[[generative-ai|AI Generatif]] untuk siswa dengan gangguan penglihatan.** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** — studi kasus [[qualitative-research|kualitatif]] terhadap 21 [[higher-ed|mahasiswa sarjana]] dengan gangguan penglihatan di tiga universitas Palestina — menemukan GenAI menyesuaikan tempo, konten, dan penyampaian pada profil belajar individual serta menyederhanakan teks akademik kompleks sambil mengonversi konten lintas modalitas (teks, audio, visual), sehingga materi yang sebelumnya tidak aksesibel menjadi terpakai. Siswa memandang kesegeraan sebagai persyaratan aksesibilitas yang mendasar alih-alih kenyamanan, dan enam atribut teknologi yang saling bergantung — interaktivitas, kemudahan penggunaan, keterjangkauan, multimodalitas, integrasi, dan skalabilitas — menentukan apakah GenAI benar-benar aksesibel dalam [[global-south|konteks sumber daya rendah]], dengan [[usability-research|kegunaan]], keterjangkauan, dan aksesibilitas saling memperkuat, bukan pertimbangan desain terpisah.

**Kebijakan dan akomodasi bagi siswa dengan disabilitas.** **[[shin-ai-policies-sld-2026|Shin et al.]]** menganalisis dokumen kebijakan AI Amerika Serikat dan mengungkap kekosongan panduan bagi siswa dengan disabilitas belajar spesifik, mengusulkan akomodasi dan rekomendasi [[educational-policy-ai|kebijakan]] yang berlandaskan [[assistive-technology|Assistive Technology]] Act dan IDEA. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** melakukan meta-analisis terhadap 29 studi intervensi berbasis AI bagi siswa dengan disabilitas, menemukan efek positif sedang terhadap [[learning-gains|hasil belajar]] (g = 0.588) — dan berargumen bahwa AI harus melakukan lebih dari sekadar memastikan aksesibilitas: AI harus memungkinkan partisipasi yang [[agency|agentik]].

**Larangan AI yang terlalu luas dan transkripsi bantu.** **[[wright-transcription-not-generation-2026|Wright (2026)]]** berargumen bahwa larangan menyeluruh atas "penggunaan AI" terlalu luas karena gagal membedakan transkripsi ucapan-ke-teks dan OCR dari penyusunan generatif: teknologi pengenalan mengonversi format konten yang telah ditulis siswa alih-alih menghasilkan konten baru, namun kebijakan berbasis identitas platform menangkap keduanya sama saja. Siswa dengan kondisi yang memengaruhi kontrol motorik halus, keterbacaan tulisan tangan, atau akurasi mengetik — termasuk kondisi spektrum autisme, dispraksia, cerebral palsy, dan cedera regangan berulang — telah mengandalkan aplikasi ucapan-ke-teks dan OCR mandiri, dan laporan menunjukkan beberapa produk semacam itu dihentikan atau diturunkan kualitasnya, sehingga transkripsi bertenaga AI mengisi celah fungsionalnya. Memperlakukan substitusi itu sebagai pelanggaran menimbulkan kekhawatiran keadilan di bawah kewajiban penyesuaian yang wajar dalam UK Equality Act 2010, Public Sector Equality Duty yang bersifat antisipatif, Americans with Disabilities Act Amerika Serikat, dan Disability Discrimination Act 1992 Australia, meskipun makalah tidak mengklaim karakterisasi itu telah diuji di pengadilan. Makalah mencatat persinggungan disabilitas, teknologi bantu, dan kebijakan pelanggaran AI masih kurang diteliti, skala pergeseran ini belum terukur, dan ketidaktepatan yang sama menghasilkan risiko positif-palsu berbeda-beda, karena detektor membaca teks dengan perplexity rendah dari penulis non-penutur asli bahasa Inggris sebagai karya mesin. Eksposur hukum yang diciptakan oleh cakupan berlebih ini dipetakan di [[legal-issues-and-risks]].

**Resistensi mesin membawa [[reading-education|biaya keterbacaan]].** Overlay garis paling menurunkan kualitas ekstraksi (+35.9% kesalahan karakter, +38.3% kesalahan kata), namun empat ahli tipografi dan desain menilai garis vertikal terbaca, sementara garis diagonal merusak bentuk huruf dan dinilai tak terbaca, dan variasi opasitas ekstrem hanya membantu pada intensitas yang juga merugikan keterbacaan manusia ([[airri-machine-resistant-reading-interface-2026|Salaun et al. (2026)]]).

**AI untuk disleksia: deteksi, dukungan, dan [[personalized-learning|pembelajaran personalisasi]].** Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] interdisipliner 2026 (Dabaghi, D'Urso & Sciarrone, dipandu PRISMA, 2018–2024, n=72) menemukan AI mendukung siswa disleksia dalam deteksi, dukungan bantu, dan pembelajaran personalisasi — tetapi untaian ini berkembang paralel alih-alih terintegrasi, didorong peluang teknologi lebih dari teori pendidikan terkonsolidasi. Alat bantu pendidikan berbasis ML mencakup lima area (aplikasi spesifik, keterlibatan, personalisasi, rekomendasi, dukungan generik) tetapi menekankan kinerja teknis dan akurasi klasifikasi, mengabaikan validitas ekologis dan penerapan praktis di kelas. Penelitian deteksi (EEG, pelacakan mata, model ML) menunjukkan janji diagnostik untuk intervensi dini tetapi sering memerlukan peralatan khusus dan lingkungan terkontrol, membatasi skalabilitas dan aksesibilitas di lingkungan sekolah pada umumnya. Tantangan terbuka mencakup validasi eksperimental yang terbatas, skalabilitas, kekhawatiran [[ethics]]/[[privacy]] terkait data siswa yang sensitif, dukungan dan pelatihan [[teacher-role|guru]] yang terbatas, serta hambatan bahasa/budaya (sebagian besar penelitian menyasar populasi berbahasa Inggris) — memperkuat bahwa aksesibilitas harus divalidasi, dapat diskalakan, dan berlandaskan etika, bukan sekadar didemonstrasikan secara teknis.

**Batas aksesibilitas semata.** **[[genai-minoritized-knowledges-disability|Karya kritis]]** memperingatkan AI yang dilatih pada data berbahasa Inggris dan berpusat Barat dapat meminggirkan cara mengetahui yang berpusat pada disabilitas. Format aksesibel tidak menjamin instruksi inklusif atau adil — menegaskan aksesibilitas perlu tetapi tidak cukup, dan harus terhubung dengan [[equity-in-ai-education]].

**Alat yang berfokus pada akomodasi dan dibatasi diagnosis mendominasi.** Tinjauan cakupan terhadap 40 studi teknologi bantu digital bagi siswa neurodivergen menemukan 28 menjadikan diagnosis formal sebagai syarat partisipasi dan hanya tiga yang bekerja pada teman sebaya neurotipikal, bukan pada siswa itu sendiri, sambil melaporkan efek inversi — beban kognitif berlebih, kelelahan, distraksi, dan ketergantungan berlebih pada AI generatif.([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]])

## Implikasi untuk praktik

- **Prioritaskan hambatan format terlebih dahulu.** Takarir, transkrip, teks alternatif, kontras, dan operabilitas papan ketik adalah lapisan penjaga gerbang — tanpanya, hal lain tidak berarti bagi siswa yang membutuhkannya.
- **Gunakan AI untuk mengotomatiskan aksesibilitas dalam skala besar.** AI dapat menghasilkan takarir, menyederhanakan teks, menghasilkan alternatif taktil/audio, dan mengadaptasi presentasi — tetapi evaluasi kualitas keluaran dengan pemeriksaan human-in-the-loop.
- **Perlakukan aksesibilitas sebagai perlu tetapi tidak cukup.** Alat yang aksesibel tidak otomatis inklusif atau adil bagi penyandang disabilitas; pasangkan aksesibilitas dengan desain [[inclusive-learning]] dan dukungan [[special-education]].
- **Landaskan akomodasi pada hukum dan kebijakan.** Rujuk standar (WCAG) dan undang-undang (Assistive Technology Act, IDEA) saat merancang atau mengadakan alat AI.
- **Penerapan AI melampaui kebijakan aksesibilitas AI di tingkat institusi.** [[chan-ai-institutionalization-index-global-universities-2026|Chan (2026)]] mengodekan seluruh 100 universitas peringkat Times Higher Education 2026 dan menemukan 0% menerbitkan kebijakan aksesibilitas AI tersendiri sementara 93% menerapkan layanan kampus bertenaga AI ([[conversational-ai|chatbot]] untuk pendaftaran, perumahan, TI). Pembacaan paling bersimpatik: kewajiban aksesibilitas berada dalam kebijakan layanan disabilitas umum, tetapi sebagaimana terukur, persyaratan alat AI tidak tampak di catatan institusional publik. Pernyataan institusional singkat bahwa alat AI dalam pengajaran dan administrasi harus aksesibel bagi siswa dengan disabilitas akan mendahului seluruh bidang yang terukur.

- **Transkripsi video [[physics-education|fisika]] yang aksesibel secara matematis (2026):** Alur kerja AI dengan Gemini (audio + sampel video 1 fps) dan LuaLaTeX mengompilasi video instruksional fisika menjadi PDF/UA-2 dan PDF aksesibel matematis ISO 32005 yang rutin lolos validasi — jalur praktis dan gratis agar konten video padat persamaan terbaca layar oleh siswa tunanetra dan low vision ([[gemini-lualatex-physics-video-transcription-2026]]).

## Miskonsepsi umum

- **"Fitur aksesibilitas yang terlihat lebih buruk itu lebih buruk."** Overlay garis **paling menurunkan kualitas ekstraksi (+35.9% kesalahan karakter, +38.3% kesalahan kata)**, namun **empat ahli tipografi dan desain menilai garis vertikal dapat dibaca**, sementara pola diagonal gagal. Keterbacaan mesin dan manusia adalah pengukuran terpisah, dan mengoptimalkan salah satunya dapat merugikan yang lain. Klaim aksesibilitas perlu menyebut untuk pembaca mana.
- **"Aksesibilitas berarti akomodasi."** Tinjauan cakupan terhadap **40 studi** teknologi bantu digital bagi siswa neurodivergen menemukan **28 menjadikan diagnosis formal sebagai syarat partisipasi**. Itu model yang dibatasi diagnosis, dan mengecualikan setiap siswa berkebutuhan tanpa label — kebalikan dari desain universal.
- **"Efek sedang menyelesaikan pertanyaan."** [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]] melakukan meta-analisis terhadap **29 studi** dan menemukan efek positif sedang, yang nyata tetapi tidak mengatakan apa pun tentang alat mana untuk kebutuhan mana. Rata-rata lintas intervensi heterogen bukan rekomendasi.
- **"Kecepatan dan kesegeraan adalah kenyamanan."** Dalam studi kasus kualitatif terhadap **21 mahasiswa sarjana dengan gangguan penglihatan** di tiga universitas Palestina, siswa memandang kesegeraan sebagai **persyaratan aksesibilitas mendasar, bukan kenyamanan**. Yang tampak mewah dari luar adalah prasyarat partisipasi.

## Konsep terkait
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — payung yang lebih luas untuk merancang pendidikan lintas keragaman siswa
- [[special-education]] — domain instruksional bagi siswa dengan disabilitas terdiagnosis
- [[universal-design-for-learning]] — kerangka perancangan proaktif
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — headset, mabuk gerak, dan akses perangkat menentukan siapa yang dapat menggunakannya
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — halaman payung untuk aturan yang terlalu luas, bukti yang cacat, dan penyesuaian yang wajar
- [[arts-design-and-media-education]]

## Artikel terkait
- [[chan-ai-institutionalization-index-global-universities-2026]] — Chan (2026): 0% dari 100 universitas elite menerbitkan kebijakan aksesibilitas AI sementara 93% menerapkan layanan kampus AI
- [[shin-ai-policies-sld-2026]] — Kebijakan AI dan akomodasi bagi siswa dengan disabilitas belajar spesifik
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Meta-analisis intervensi AI bagi siswa dengan disabilitas
- [[adhd-video-segmentation-computing-education]] — Video tersegmentasi AI dengan jeda tetap
- [[text-simplification-its]] — Penyederhanaan teks berbasis LLM untuk tutor cerdas
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Pembuatan pertanyaan LLM untuk siswa Tuli/Kurang Dengar
- [[kutti-ai-voice-first-learning-companion]] — Pendamping voice-first untuk anak dengan gangguan penglihatan
- [[tactile-statistical-graphs-accessibility]] — Grafik statistik taktil hasil cetak 3D
- [[pepper-robot-sign-language-lis-2025]] — Robot Pepper mendukung bahasa isyarat
- [[genai-minoritized-knowledges-disability]] — Perspektif kritis tentang AI dan pengetahuan yang berpusat pada disabilitas
- [[gemini-lualatex-physics-video-transcription-2026]] — Transkripsi video fisika aksesibel matematis Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — GenAI bantu untuk siswa dengan gangguan penglihatan
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — AI generatif, realitas virtual, dan seterusnya: Tinjauan cakupan teknologi bantu digital bagi siswa neurodivergen di pendidikan tinggi
- [[wright-transcription-not-generation-2026]] — Transkripsi bukan generasi: larangan AI yang terlalu luas dan alat bantu yang terkena dampaknya
- [[ad4edu-lecture-audio-description-2026]] — AD4EDU: Tolok ukur Deskripsi Audio Kuliah Universitas lintas Standar, Metrik, dan Preferensi Siswa
- [[airri-machine-resistant-reading-interface-2026]] — AIRRI: Menuju Antarmuka Bacaan yang Mudah Dibaca Manusia dan Tahan Mesin
