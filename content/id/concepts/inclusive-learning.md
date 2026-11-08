---
connected_resources: [mglearn]
title: "Pembelajaran Inklusif"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education, learning-design]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, higher ed]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/inclusive-learning"
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

> **Pembelajaran Inklusif** — perancangan dan penyampaian pengalaman pendidikan yang mengakomodasi kebutuhan siswa yang beragam, mencakup perbedaan fisik, kognitif, sensorik, dan situasional. Dalam AI dalam pendidikan, [[research-methods-aied|penelitian]] pembelajaran inklusif mengkaji baik bagaimana alat AI dapat menghilangkan hambatan bagi siswa penyandang disabilitas dan neurodivergen maupun bagaimana [[ai-technologies|sistem AI]] itu sendiri harus dirancang agar tidak menciptakan celah aksesibilitas baru.

## Pertanyaan untuk Dipertimbangkan

- Alat yang aksesibel tidak menjamin pengajaran yang inklusif, dan teknologi bantu tidak menjamin agensi yang bermakna. Apa perbedaan antara menghilangkan hambatan terhadap suatu format dan merancang pendidikan agar semua orang dapat berpartisipasi secara bermakna?
- Halaman ini membedakan pembelajaran inklusif, aksesibilitas, teknologi bantu, pendidikan khusus, dan desain universal. Di mana AI dalam konteks Anda sendiri berada — dan pertanyaan mana yang sebenarnya ingin Anda jawab?
- Satu studi menemukan bahwa video yang disegmentasi AI dengan jeda tetap menghilangkan kesenjangan performa antara siswa ADHD dan non-ADHD. Bagaimana merancang untuk kebutuhan satu kelompok dapat meningkatkan pembelajaran bagi semua orang?
- Sistem AI digambarkan berisiko menciptakan celah aksesibilitas baru bahkan ketika menghilangkan yang lama. Jenis siswa seperti apa yang mungkin secara diam-diam dikecualikan oleh alat AI berbasis teks, visual, dan selalu daring?
- Penelitian penilaian inklusif mengungkap ketegangan antara tindakan anti-kecurangan dan akomodasi bagi siswa dengan kebutuhan pemrosesan visual. Ketika keamanan dan aksesibilitas berbenturan, bagaimana trade-off itu harus diputuskan — dan oleh siapa?
- Beberapa alat membalik asumsi bahwa [[edtech-platform|edtech]] harus visual — misalnya, [[speech-and-voice-technologies|pendamping yang mengutamakan suara]] bagi siswa dengan gangguan penglihatan. Asumsi tentang siswa "default" seperti apa yang mungkin dibuat oleh alat atau materi Anda sendiri?

## Pendahuluan

Pembelajaran inklusif adalah komitmen desain bahwa pendidikan harus dibangun agar semua siswa dapat berpartisipasi secara bermakna, bukan diadaptasi setelah fakta bagi mereka yang kesulitan. Di sini ia berfungsi sebagai payung atas konsep-konsep yang berdekatan tetapi berbeda — [[accessibility]] (dapatkah semua orang mempersepsikan dan mengoperasikan formatnya?), [[assistive-technology]] (alat apa yang menjembatani [[digital-divide|kesenjangan akses]] individu?), [[universal-design-for-learning]] (bagaimana desain harus mengantisipasi variabilitas?) — dan ia menyentuh [[neurodiversity]] dan [[special-education]] sebagai konteks desain, bukan pengecualian. AI masuk sebagai janji (personalisasi, akomodasi, penerjemahan) sekaligus sumber pengucilan baru (biaya, data, cakupan bahasa, dan asumsi yang tertanam dalam model).

## Bagaimana konsep-konsep terkait saling terhubung

Pembelajaran inklusif adalah konsep **payung**; halaman-halaman di bawah ini berada di dalamnya, masing-masing menjawab pertanyaan yang berbeda. Mereka saling tumpang tindih tetapi tidak dapat dipertukarkan — mengetahui klaim mana yang termasuk pada konsep mana menjaga basis pengetahuan tetap presisi:

| Konsep | Pertanyaan inti yang dijawabnya | Fokus tipikal |
|---|---|---|
| **Pembelajaran Inklusif** *(halaman ini)* | Bagaimana kita [[design-education|merancang pendidikan]] agar semua siswa dapat berpartisipasi secara bermakna? | Desain pengajaran yang luas di seluruh variabilitas siswa |
| **[[accessibility]]** | Dapatkah semua orang mempersepsikan dan mengoperasikan *format/media*? | Takarir, teks alternatif, transkrip, kontras, kompatibilitas keyboard/pembaca layar, WCAG |
| **[[assistive-technology]]** | Alat/perangkat apa yang menjembatani kesenjangan akses individu? | Pembaca layar, TTS/STT, braille/taktil, takarir, akomodasi AI |
| **[[special-education]]** | Bagaimana kita menyampaikan pengajaran kepada siswa dengan disabilitas terdiagnosis? | IEP, akomodasi individual, tutoring khusus disabilitas — **terutama istilah [[k-12]] (IDEA/hak layanan)** |
| **[[universal-design-for-learning]]** | Bagaimana kita secara proaktif membangun fleksibilitas sejak awal? | Berbagai cara [[student-engagement|keterlibatan]], representasi, tindakan/ekspresi |

Dalam praktik: **UDL** adalah filosofi desain yang *mencegah* hambatan; **aksesibilitas** adalah properti yang menghilangkan hambatan *format*; **teknologi bantu** adalah lapisan *alat* yang digunakan individu; **pendidikan khusus** adalah domain *instruksional* untuk disabilitas terdiagnosis — dan istilah itu terutama berlaku untuk **K-12**, sedangkan dalam **[[higher-ed|pendidikan tinggi]]** (dan semakin juga K-12) kerangka yang lebih umum adalah [[universal-design-for-learning|Universal Design for Learning]]. **Pembelajaran inklusif** adalah payung yang menyatukan semuanya di sekitar tujuan bersama partisipasi yang adil. Alat yang aksesibel tidak menjamin pengajaran yang inklusif, dan teknologi bantu tidak menjamin agensi yang bermakna — itulah sebabnya payung ini harus mencakup semuanya.

Pembelajaran inklusif berada di persimpangan [[equity-in-ai-education]], [[learning-design]], dan [[special-education]], serta didukung oleh lapisan alat konkret [[assistive-technology]] dan properti desain [[accessibility]]. Berbeda dari akomodasi sempit yang menambahkan akses pada sistem yang sudah ada, perspektif pembelajaran inklusif — yang berlandaskan [[universal-design-for-learning|Universal Design for Learning]] — berargumen bahwa lingkungan harus dirancang untuk seluruh rentang keragaman manusia sejak awal. Artikel-artikel dalam basis pengetahuan ini mengeksplorasi bagaimana AI dapat mewujudkannya melalui transformasi konten otomatis, antarmuka penilaian adaptif, dan alat yang dirancang dengan pengalaman hidup [[neurodiversity|pengguna neurodivergen]] sebagai titik awal.

### Tema penelitian utama

**Aksesibilitas konten bertenaga AI** menunjukkan bagaimana pipeline otomatis dapat mengurangi hambatan. **[[adhd-video-segmentation-computing-education|Pimenova et al.]]** menunjukkan bahwa [[video-education|video instruksional]] yang disegmentasi AI dengan jeda tetap menghilangkan kesenjangan performa antara siswa ADHD dan non-ADHD — bukti kuat bagi Universal Design for Learning melalui transformasi konten otomatis. Studi ini terhubung dengan penelitian [[neurodivergent-computing-students]] tentang bagaimana struktur [[collaborative-learning|pembelajaran kolaboratif]] memengaruhi kenyamanan siswa neurodivergen. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** merancang sistem pembangkitan pertanyaan bertenaga [[llm]] bagi siswa Tuli dan Gangguan Pendengaran, memperkenalkan strategi pertanyaan Visual dan Emosi yang menyasar momen kesulitan visual atau emosional dalam video — sekaligus mengungkap ketidakcocokan yang menetap antara prompt AI berbasis teks dan bahasa pertama berbasis isyarat para siswa DHH, yang menegaskan perlunya desain AI yang peka bahasa dan budaya. **[[text-simplification-its|MuTSE]]** menangani hambatan pelengkap — tingkat keterbacaan — dengan mengevaluasi penyederhanaan teks berbasis LLM untuk [[intelligent-tutoring]], menyesuaikan kompleksitas konten dengan tingkat siswa saat ini melalui kerangka evaluasi [[human-in-the-loop-ai|human-in-the-loop]] alih-alih mengandalkan metrik linguistik yang melewatkan kualitas [[pedagogy|pedagogis]].

Video yang padat persamaan dapat dibuat aksesibel alih-alih ditranskripsikan secara manual: pipeline Gemini-plus-LuaLaTeX mengubah 16 video fisika instruksional menjadi PDF yang lolos validasi PDF/UA-2 dan ISO 32005, dengan hanya satu video yang memerlukan percobaan kedua ([[gemini-lualatex-physics-video-transcription-2026|Looney & Duston (2026)]]).

**Aksesibilitas sensorik: siswa tunanetra, penglihatan rendah, dan Tuli.** Beberapa artikel membalik asumsi bahwa edtech harus visual. **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** menjadikan percakapan lisan sebagai modalitas utama dan memadai bagi anak-anak dengan gangguan penglihatan — deteksi kesulitan waktu nyata, pencocokan jawaban [[multilingual-learning|multibahasa]], dan ASR di perangkat yang mengutamakan mode luring menghilangkan ketergantungan visual sekaligus kebutuhan konektivitas. **[[tactile-statistical-graphs-accessibility|Obiuwevwi et al.]]** membangun pipeline yang dapat digunakan ulang untuk menghasilkan grafik statistik taktil cetak 3D bagi siswa tunanetra/penglihatan rendah dalam waktu kurang dari 250ms, dengan ekstraksi grafik berbasis LLM dari gambar sebagai opsi. **[[pepper-robot-sign-language-lis-2025|Bolla et al.]]** mengeksplorasi apakah robot sosial Pepper dapat menghasilkan Bahasa Isyarat Italia yang dapat dipahami, merancang bersama 52 isyarat dengan seorang siswa Tuli dan penerjemah ahli — memperluas [[educational-robotics]] ke aksesibilitas komunikatif bagi siswa Tuli sekaligus menyoroti tantangan mereproduksi komponen non-manual (ekspresi wajah, postur) yang krusial bagi makna. **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** memperluas lini kerja ini ke pendidikan tinggi, dengan menemukan dalam studi kasus [[qualitative-research|kualitatif]] terhadap 21 mahasiswa tunanetra di Palestina bahwa GenAI menyesuaikan tempo, konten, dan penyampaian dengan profil individual serta mengonversi teks akademik yang kompleks lintas modalitas — dengan siswa memandang GenAI sebagai pelengkap, bukan pengganti, guru, sehingga koneksi manusia tetap terjaga sambil memungkinkan partisipasi.

**Desain penilaian inklusif** bergulat dengan ketegangan antara keamanan dan aksesibilitas. **[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]** mengusulkan kerangka teoretis untuk pengalihan visual adaptif yang menahan kecurangan melalui tangkapan layar sekaligus mengakomodasi siswa dengan kebutuhan pemrosesan visual — secara eksplisit memodelkan trade-off antara tindakan anti-kecurangan dan prinsip pembelajaran inklusif. Ini terhubung dengan isu [[academic-integrity]] dan [[assessment]] yang lebih luas.

**Pengalaman siswa neurodivergen** memusatkan suara siswa penyandang disabilitas dan neurodivergen. **[[neurodivergent-computing-students|Zastudil et al.]]** menemukan bahwa mahasiswa komputasi neurodivergen membutuhkan tugas yang terstruktur, tim kecil yang konsisten, dan definisi peran yang eksplisit — preferensi yang harus diakomodasi oleh [[intelligent-tutoring|tutoring AI]] dan alat kolaborasi. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** menganalisis diskusi forum siswa disleksia, mengungkap bahwa meskipun mereka menghargai AI untuk dukungan literasi, mereka menghadapi hambatan aksesibilitas yang signifikan akibat kualitas keluaran yang tidak konsisten dan kurangnya akomodasi yang adil. Keduanya terhubung dengan [[special-education]] dan [[student-experience]].

**[[cognitive-offloading|Offloading kognitif]] dan trade-off antara akses dan perkembangan.** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]] menunjukkan bahwa bagi siswa dengan kesulitan belajar, GenAI yang sama yang menurunkan hambatan akses membaca dan menulis (penyesuaian tingkat teks, peringkasan, dukungan penyusunan draf) dapat, jika tidak dijaga, menggantikan latihan pemahaman, perencanaan, dan pemantauan yang paling dibutuhkan siswa tersebut — ketegangan keadilan yang sentral bagi pembelajaran inklusif. Desain inklusif karena itu harus mempertimbangkan bukan hanya apakah suatu alat *aksesibel* tetapi apakah alat itu mempertahankan kesempatan siswa untuk mengembangkan keterampilan yang justru ingin diwujudkan oleh akses tersebut.

**Dukungan disleksia: deteksi, bantuan, dan [[personalized-learning|personalisasi]].** Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] interdisipliner 2026 (Dabaghi, D'Urso & Sciarrone, dipandu PRISMA, 2018–2024, n=72) menemukan AI mendukung siswa disleksia dalam deteksi, dukungan bantu, dan pembelajaran terpersonalisasi — tetapi dengan lini-lini ini berkembang secara paralel alih-alih terintegrasi, lebih didorong oleh peluang teknologi daripada teori pendidikan yang mapan. Alat bantu pendidikan berbasis ML mencakup lima area (aplikasi spesifik, [[student-engagement|keterlibatan]], personalisasi, rekomendasi, dukungan generik) namun menekankan performa teknis dan akurasi klasifikasi sambil mengabaikan validitas ekologis dan penerapan praktis di kelas. Penelitian deteksi ([[sensor-and-gaze-analytics|EEG]], pelacakan mata, model ML) menunjukkan janji diagnostik untuk intervensi dini tetapi sering memerlukan peralatan khusus dan lingkungan yang terkendali, sehingga membatasi skalabilitas dan aksesibilitas dalam lingkungan sekolah yang tipikal. Tantangan yang terbuka mencakup validasi eksperimental yang terbatas, skalabilitas, kekhawatiran [[ethics]]/privasi dengan data siswa yang sensitif, dukungan dan pelatihan [[teacher-role|guru]] yang terbatas, serta hambatan bahasa/budaya (sebagian besar penelitian menyasar populasi berbahasa Inggris) — menegaskan bahwa pembelajaran inklusif harus memadukan kemampuan teknis dengan penerapan yang tervalidasi, skalabel, dan berlandaskan etika.

**Kritik AI yang berpusat pada disabilitas** mengkaji bagaimana sistem AI dapat memarginalkan alih-alih menyertakan. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** berargumen bahwa sistem [[generative-ai|AI generatif]] di pendidikan tinggi secara aktif memarginalkan cara-cara mengetahui yang berpusat pada disabilitas akibat data pelatihan yang Anglofon dan berpusat di Barat — terhubung dengan kekhawatiran [[equity-in-ai-education]] tentang keadilan epistemik.

**Gerbang diagnosis formal mengecualikan siswa yang diklaim dilayani oleh suatu alat.** Dalam tinjauan pelingkupan [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]] atas 40 studi teknologi bantu digital bagi siswa neurodivergen, 28 menjadikan diagnosis formal sebagai syarat partisipasi dan hanya tiga yang memperlakukan lingkungan, bukan siswa, sebagai sasaran.

**Alat aksesibel dalam praktik** menunjukkan bagaimana AI dapat memperluas partisipasi. **[[suacode-african-students-motivations|SuaCode]]** menunjukkan bahwa kursus pemrograman berbasis ponsel pintar menjangkau siswa di konteks Afrika bersumber daya rendah tempat kurang dari 1% memiliki keterampilan pemrograman. **[[embodied-string-learning-blindness-low-vision-musicians|Pimenova et al.]]** bekerja dengan musisi tunanetra dan penglihatan rendah untuk mengembangkan strategi belajar non-visual, memusatkan desain [[embodied-learning|terwujud]] yang dipimpin penyandang disabilitas. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** menyediakan mitra pemikir AI multibahasa, privat, dan tanpa biaya yang menghubungkan pendidik dengan prinsip UDL. **[[special-r1-rl-special-education|Special-R1]]** memperluas [[reinforcement-learning|pembelajaran penguatan]] untuk memodelkan keragaman kognitif dan komunikatif lintas profil disabilitas.

### Koneksi ke konsep terkait

Pembelajaran inklusif sangat terhubung dengan [[equity-in-ai-education]] — aksesibilitas bukan sekadar persoalan teknis melainkan pertanyaan tentang siapa yang berhak berpartisipasi dalam pembelajaran. Ia terhubung dengan [[accessibility]] sebagai lapisan akses konkretnya dan [[assistive-technology]] sebagai lapisan alatnya, dengan [[universal-design-for-learning]] sebagai landasan teoretisnya, dengan [[special-education]] untuk pendekatan khusus disabilitas, dengan [[learning-design]] untuk bagaimana kursus dan alat distrukturkan, dan dengan [[neurodiversity]] sebagai lensa yang membingkai ulang perbedaan sebagai keragaman alih-alih defisit. Karya tentang robot bahasa isyarat dan alat taktil menghubungkan aksesibilitas dengan [[educational-robotics]] dan [[educational-nlp]], sementara penyederhanaan teks menghubungkannya dengan [[sociocultural-learning]] dan [[adaptive-learning]]. Koneksi [[ai-education]] dan [[generative-ai]] menyoroti janji (adaptasi konten otomatis) sekaligus bahaya (sistem AI yang mereproduksi pengucilan).

## Implikasi bagi instruktur yang merancang pembelajaran inklusif

- **Rancang untuk modalitas yang terpinggirkan lebih dahulu, bukan terakhir.** Membangun untuk pengguna tunanetra/penglihatan rendah sejak awal ([[kutti-ai-voice-first-learning-companion|Kutti AI]], [[tactile-statistical-graphs-accessibility|grafik taktil]]) menghasilkan alat yang juga bekerja secara luring dan dalam lingkungan bersumber daya rendah — aksesibilitas sebagai katalis, bukan tambalan.
- **Rancang bersama komunitas sasaran.** [[pepper-robot-sign-language-lis-2025|Robot bahasa isyarat]] dan [[llm-question-generation-deaf-hard-of-hearing-2026|pembangkitan pertanyaan DHH]] menunjukkan keterlibatan komunitas memunculkan hambatan (misalnya bahasa pertama berbasis isyarat) yang tidak dapat diantisipasi perancang — libatkan siswa dan komunitas dalam desain.
- **Evaluasi kualitas pedagogis, bukan hanya metrik linguistik.** [[text-simplification-its|MuTSE]] menunjukkan variabilitas keluaran LLM menuntut evaluasi human-in-the-loop agar penyederhanaan membantu alih-alih menyederhanakan secara berlebihan.
- **Gunakan AI untuk menutup kesenjangan performa.** [[adhd-video-segmentation-computing-education|Video yang disegmentasi AI]] menghilangkan kesenjangan performa ADHD — terapkan AI adaptif di tempat bukti menunjukkan ia menyetarakan hasil.
- **Tangani trade-off keamanan/aksesibilitas secara eksplisit.** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]] memodelkan bagaimana tindakan anti-kecurangan dapat tanpa sengaja mengecualikan siswa dengan kebutuhan pemrosesan visual — timbang integritas terhadap akses.
- **Akses dapat bergantung pada frasa, bukan hanya format.** Dengan tugas dasar yang dipertahankan tetap, akurasi model naik dari 82.4% untuk diksi literasi rendah menjadi 83.4% untuk frasa ahli, sehingga menuntut siswa menulis prompt dengan lebih baik menambah pengucilan baru; penulis ulang di sisi sistem yang menormalkan permintaan menghilangkan kesenjangan yang signifikan tersebut tanpa mengubah konten ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).
- **Waspadai AI yang mereproduksi pengucilan.** [[genai-minoritized-knowledges-disability|Kritik yang berpusat pada disabilitas]] memperingatkan bahwa data pelatihan yang Anglofon dan berpusat di Barat memarginalkan cara-cara mengetahui penyandang disabilitas — audit alat AI untuk keadilan epistemik bersama [[equity-in-ai-education]].

## Miskonsepsi umum

**"Alat yang aksesibel berarti kursus yang inklusif."** Aksesibilitas menjawab satu pertanyaan — dapatkah semua orang mempersepsikan dan mengoperasikan formatnya — yang perlu dan jauh dari cukup. Pembelajaran inklusif juga menanyakan alat apa yang menjembatani [[digital-divide|kesenjangan akses]] individu dan bagaimana desain harus mengantisipasi variasi alih-alih menambalnya. Antarmuka yang kompatibel dengan pembaca layar dalam kursus yang struktur penilaiannya mengasumsikan ruang tenang, broadband yang andal, dan waktu tanpa gangguan telah memecahkan masalah tampilan dan membiarkan masalah partisipasi tetap utuh.

**"Menyediakan teknologi bantu berarti menyediakan agensi."** Keduanya berbeda, dan kerangka halaman ini sendiri menyatakannya: teknologi bantu tidak menjamin agensi yang bermakna. Alat yang memungkinkan siswa menyelesaikan tugas wajib juga dapat mengarahkannya ke versi paling sempit dari tugas itu, dan perbedaan antara perancah dan langit-langit tidak terlihat dalam metrik adopsi.

**"Siswa yang kesulitan seharusnya cukup belajar menulis prompt dengan lebih baik."** Itu mengubah cacat sistem menjadi defisit siswa. Dengan tugas dasar dipertahankan tetap, akurasi model hanya naik dari **82.4% untuk diksi literasi rendah menjadi 83.4% untuk frasa ahli** — selisih satu poin — sementara menuntut [[prompt-engineering|penulisan prompt]] yang lebih baik menambah pengucilan baru di atas yang sudah ada. Daya ungkitnya ada pada penanganan variasi bahasa di sisi sistem, bukan pada pelatihan prompt yang bersifat remedial.

**"Alat yang dibangun untuk kelas bersumber daya besar akan melayani konteks bersumber daya rendah begitu diterjemahkan."** Konteks mengubah kendala desain. [[suacode-african-students-motivations|SuaCode]] menjangkau siswa di konteks Afrika bersumber daya rendah tempat **kurang dari 1% memiliki keterampilan pemrograman** dengan membangun untuk ponsel pintar alih-alih mesin lab desktop, yang merupakan desain yang berbeda, bukan versi lebih kecil dari desain yang sama.

## Konsep terkait

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[accessibility]] — lapisan akses konkret (takarir, teks alternatif, kompatibilitas teknologi bantu)
- [[assistive-technology]] — lapisan alat yang digunakan siswa untuk mengakses konten
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]
- [[speech-and-voice-technologies]]

## Artikel terkait
- [[prompt-privilege-equitable-ai-access-2026]] — Hak Istimewa Prompt: mengukur & memitigasi disparitas aksesibilitas dalam akses LLM
- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Pembangkitan pertanyaan bertenaga LLM bagi siswa Tuli dan Gangguan Pendengaran
- [[text-simplification-its]] — Penyederhanaan Teks untuk Tutoring Cerdas
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI: pendamping mengutamakan suara bagi anak dengan gangguan penglihatan
- [[tactile-statistical-graphs-accessibility]] — Grafik statistik taktil cetak 3D
- [[pepper-robot-sign-language-lis-2025]] — Robot Pepper mendukung komunikasi bahasa isyarat
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[gemini-lualatex-physics-video-transcription-2026]] — Transkripsi video fisika aksesibel matematika dengan Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — GenAI bantu bagi siswa dengan gangguan penglihatan
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — AI generatif, realitas virtual, dan seterusnya: Tinjauan pelingkupan teknologi bantu digital bagi mahasiswa neurodivergen di pendidikan tinggi
