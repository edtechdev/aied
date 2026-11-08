---
connected_resources: [teacherserver]
title: "Pendidikan Khusus"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
updated: "2026-11-08T14:09:36-05:00"
translation_of: "concepts/special-education"
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

> **Pendidikan Khusus** — perancangan dan penyampaian instruksi bagi siswa dengan disabilitas, mencakup perbedaan kognitif, fisik, sensorik, dan perkembangan saraf. Dalam [[ai-education|AI dalam pendidikan]], [[research-methods-aied|penelitian]] dalam basis pengetahuan ini mengeksplorasi bagaimana alat AI mendukung kebutuhan siswa beragam melalui [[personalized-learning|personalisasi]], [[scaffolding|perancah adaptif]], dan antarmuka yang aksesibel — sekaligus mengkaji risiko [[ai-technologies|sistem AI]] yang mengabaikan atau meminggirkan siswa dengan disabilitas.

> ⚠️ **Pendidikan Khusus terutama merupakan istilah [[k-12]].** Istilah ini berakar pada Individuals with Disabilities Education Act (IDEA) Amerika Serikat dan sistem Individualized Education Programs (IEP) berbasis hak yang mengatur layanan pendidikan khusus di sekolah dasar dan menengah. Dalam [[higher-ed|pendidikan tinggi]] — dan semakin sering di K-12 — kerangka yang lebih umum adalah **[[universal-design-for-learning|Universal Design for Learning]]** (kerangka perancangan proaktif yang bermanfaat bagi semua siswa) bersama [[accessibility]] dan [[assistive-technology]] alih-alih "pendidikan khusus." Artikel pendidikan khusus K-12 dan artikel UDL perguruan tinggi membahas konteks yang tumpang tindih tetapi berbeda; basis pengetahuan mempertahankan keduanya karena literatur mencakup keduanya. Ketika suatu sumber menyangkut pendidikan tinggi dan siswa dengan disabilitas, lebih baik ditautkan ke [[universal-design-for-learning]], [[accessibility]], atau [[inclusive-learning]] daripada ke special-education.

## Pertanyaan untuk Dipertimbangkan

- Halaman ini menekankan "pendidikan khusus" terutama merupakan istilah K-12 berbasis hak yang berakar pada IDEA dan IEP, sementara pendidikan tinggi lebih sering berbicara tentang Universal Design for Learning dan aksesibilitas. Menurut Anda mengapa konteks ini berbeda, dan apa yang diungkapkan perbedaan itu?
- Janji personalisasi AI tampak dirancang khusus untuk siswa berkebutuhan beragam. Tetapi jika sistem dapat beradaptasi dengan "profil kognitif individual," apa yang bisa salah ketika model tentang disabilitas terlalu kasar atau tidak ada sama sekali?
- Penelitian ini mencakup alat AI untuk profil disabilitas tertentu (misalnya siswa disleksia atau Tuli dan Kurang Dengar). Risiko apa yang Anda lihat dalam merancang untuk profil sempit dibandingkan merancang universal untuk semua siswa sejak awal?
- Bagaimana sistem AI yang dibangun untuk siswa "rata-rata" dapat mengabaikan atau meminggirkan siswa disabilitas, bahkan tanpa sengaja — dan siapa yang bertanggung jawab mencegahnya?
- Apa artinya bagi alat AI untuk benar-benar menyertakan, bukan sekadar mengakomodasi, siswa dengan disabilitas — dan bagaimana Anda mengenali perbedaannya dalam praktik?

## Pendahuluan

Pendidikan khusus adalah domain tempat kapasitas AI untuk personalisasi dan adaptasi menjanjikan banyak hal. Berbeda dari instruksi seragam, [[intelligent-tutoring|tutor AI]] secara teoretis dapat beradaptasi dengan profil kognitif, kebutuhan komunikasi, dan tempo belajar individual. Artikel dalam basis pengetahuan ini mencakup AI untuk profil disabilitas tertentu, pengalaman siswa neurodivergen, dan perspektif kritis tentang AI dan disabilitas.

**Tutor AI khusus disabilitas** menyesuaikan AI dengan kebutuhan siswa tertentu. **[[special-r1-rl-special-education|Special-R1]]** memperluas [[reinforcement-learning|pembelajaran penguatan]] untuk memodelkan keragaman kognitif dan komunikatif di lima profil disabilitas, memakai prompt sadar persona dan reward berpikir untuk membentuk respons tutor tiap siswa. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** menganalisis pengalaman siswa disleksia dengan alat AI, mengungkap nilai AI untuk dukungan literasi sekaligus hambatan aksesibilitas yang menetap. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** merancang sistem pembuatan pertanyaan bertenaga [[llm]] untuk [[accessibility|siswa Tuli dan Kurang Dengar]], memperkenalkan strategi pertanyaan Visual dan Emosi serta menyempurnakan pertanyaan secara iteratif bersama komunitas sasaran untuk mengatasi ketidaksesuaian prompt AI berbasis teks dan bahasa pertama isyarat. **[[embodied-string-learning-blindness-low-vision-musicians]]** mengembangkan strategi belajar nonvisual bersama musisi tunanetra dan low vision, memusatkan desain [[embodied-learning|terwujud]] yang dipimpin penyandang disabilitas. Semua terhubung dengan [[inclusive-learning]] dan [[neurodiversity]].

**Pengalaman siswa neurodivergen** memusatkan siswa autistik dan ADHD. **[[neurodivergent-computing-students|Zastudil et al.]]** menemukan siswa komputasi neurodivergen membutuhkan tugas terstruktur, tim kecil konsisten, dan definisi peran eksplisit — persyaratan desain yang harus ditangani alat [[collaborative-learning]]. **[[adhd-video-segmentation-computing-education]]** menunjukkan video tersegmentasi AI menghilangkan kesenjangan kinerja ADHD. Keduanya terhubung dengan [[learning-design]] dan [[universal-design-for-learning]].

**Perspektif kritis** mengkaji bagaimana AI meminggirkan siswa dengan disabilitas. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** berargumen bahwa sistem AI secara aktif meminggirkan pengetahuan yang berpusat pada disabilitas karena data pelatihan yang berpusat pada Barat — terhubung dengan kekhawatiran [[equity-in-ai-education]] tentang keadilan epistemik.

**AI untuk disleksia lintas deteksi, dukungan, dan pembelajaran personalisasi.** Sebuah [[meta-analysis-systematic-review|tinjauan sistematis]] interdisipliner 2026 (Dabaghi, D'Urso & Sciarrone, dipandu PRISMA, 2018–2024, n=72) memetakan bagaimana AI mendukung siswa disleksia dalam pendidikan, menemukan AI digunakan untuk deteksi, dukungan bantu, dan pembelajaran personalisasi — tetapi untaian ini berkembang paralel alih-alih terintegrasi, didorong peluang teknologi lebih dari teori pendidikan terkonsolidasi. Alat bantu pendidikan berbasis ML terbagi ke dalam lima area (aplikasi spesifik, keterlibatan, personalisasi, rekomendasi, dukungan generik) tetapi menekankan kinerja teknis dan akurasi klasifikasi, mengabaikan validitas ekologis dan penerapan praktis di kelas. Penelitian deteksi (EEG, pelacakan mata, model ML) memprioritaskan intervensi dini dan menunjukkan janji diagnostik, tetapi sering memerlukan peralatan khusus dan lingkungan terkontrol, membatasi skalabilitas dan aksesibilitas di sekolah pada umumnya. Tantangan terbuka mencakup validasi eksperimental yang terbatas, skalabilitas, kekhawatiran [[ethics]]/privacy terkait data siswa yang sensitif, dukungan dan pelatihan guru yang terbatas, serta hambatan bahasa/budaya (sebagian besar penelitian menyasar populasi berbahasa Inggris).

**Pengalihan kognitif bagi siswa dengan disabilitas belajar (SWLD).** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], tinjauan konseptual dalam serial khusus *Learning Disability Quarterly* tentang AI bagi siswa dengan LD, membingkai ulang penggunaan [[generative-ai|GenAI]] bagi SWLD melalui lensa [[cognitive-offloading]]. Mereka berargumen GenAI dapat menjadi **bantuan kompensatoris atau jalan pintas** tergantung bagaimana keputusan pengalihan berinteraksi dengan profil kognitif dan [[motivation|motivasional]] SWLD (tantangan fungsi eksekutif dan memori kerja, beban kognitif meningkat, tujuan kinerja menghindari usaha, efikasi diri akademik lebih rendah, dan ekspektasi berlebihan terhadap GenAI) serta desain instruksional. Untuk membaca dan menulis, GenAI dapat menjadi perancah akses (penyetaraan tingkat teks, peringkasan, keluaran [[multimodal]], perencanaan, penyusunan draf, umpan balik revisi) sambil mempertahankan [[student-engagement|keterlibatan]] tingkat tinggi — tetapi pengalihan berlebihan berisiko melewati proses pemahaman, perencanaan, dan pemantauan yang sudah rapuh, menumbuhkan "kemalasan [[metacognition|metakognitif]]" dan memperburuk kesulitan literasi lintas domain. Makalah memposisikan **[[guardrails|pagar pengaman]] instruksional** sebagai faktor moderasi kunci dan merekomendasikan [[teacher-role|pengajaran]] pengalihan strategis, membangun [[ai-literacy]] untuk mengkalibrasi kepercayaan alat, menyusun pengalaman penguasaan untuk membangun [[self-efficacy]], dan menyelaraskan tugas dan penilaian dengan tujuan IEP yang memprioritaskan pengembangan keterampilan, bukan substitusi. Ini memperluas cakupan pendidikan khusus ke dimensi keadilan pengalihan: alat yang sama yang menurunkan hambatan akses dapat, tanpa penjagaan, menggantikan latihan yang paling dibutuhkan SWLD.
**Konten intervensi yang dihasilkan AI memerlukan kontrol sebelum generasi, bukan hanya tinjauan.** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] menemukan praktisi menilai alat Social Story rancangan bersama sangat mudah digunakan (SUS 86.8) namun menyebut gambarnya generik dan berorientasi Barat serta pelacak perilakunya tidak selaras pertimbangan klinis terkait tujuan — batasan yang akan mereka tetapkan sebelum generasi.

[[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková (2026)]] bertolak dari materi, bukan dari percakapan: model bahasa-visi membaca foto Shoebox Tasks — dirancang agar tujuan terlihat pada objek — dan mengubahnya menjadi rencana yang dieksekusi atau didemonstrasikan oleh humanoid Nao, melaporkan akurasi rencana pada enam tugas dan tanpa data siswa.
- **Perilaku menantang adalah titik henti [[benchmark|tolok ukur]] tutor.** Dari 923 dialog berlandaskan kasus dari literatur pendidikan khusus dan psikologi pendidikan, model terbaik dari 11 model memenuhi intervensi terdokumentasi pada 55.8% kasus terbuka dan 43.3% rencana jangka panjang ([[tutor-case-bench-challenging-behaviors-2026|Park et al. (2026)]]).

## Implikasi bagi instruktur pendidikan khusus

- **Rancang AI bersama siswa dan komunitas sasaran.** [[llm-question-generation-deaf-hard-of-hearing-2026|Pembuatan pertanyaan untuk siswa Tuli/Kurang Dengar]] menunjukkan nilai penyempurnaan AI iteratif bersama komunitas untuk menjembatani kesenjangan antara prompt berbasis teks dan bahasa pertama isyarat — libatkan siswa dan komunitasnya dalam desain, jangan mengasumsikan AI cocok.
- **Sesuaikan AI dengan profil disabilitas tertentu, bukan aksesibilitas generik.** [[special-r1-rl-special-education|Special-R1]] memodelkan keragaman kognitif dan komunikatif lintas profil disabilitas; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] mendokumentasikan nilai literasi sekaligus hambatan aksesibilitas yang menetap bagi siswa disleksia — pilih alat yang selaras profil setiap siswa dan waspadai hambatan yang belum teratasi.
- **Strukturkan kolaborasi bagi siswa neurodivergen.** [[neurodivergent-computing-students|Siswa komputasi neurodivergen]] membutuhkan tugas yang terstruktur, tim kecil yang konsisten, dan definisi peran yang eksplisit — terapkan persyaratan ini pada setiap aktivitas kolaboratif yang dimediasi AI.
- **Gunakan AI untuk menutup (bukan melebarkan) kesenjangan kinerja.** [[adhd-video-segmentation-computing-education|Video tersegmentasi AI]] menghilangkan kesenjangan kinerja ADHD — terapkan AI adaptif di tempat bukti menunjukkan AI menyetarakan hasil, bukan sekadar mengotomatiskan.
- **Pusatkan desain terwujud yang dipimpin penyandang disabilitas.** Penelitian [[embodied-string-learning-blindness-low-vision-musicians|musisi tunanetra/low vision]] menunjukkan strategi nonvisual yang dipimpin penyandang disabilitas mengungguli antarmuka visual bawaan — bangun dan adaptasikan AI dengan keahlian siswa disabilitas.
- **Cegah peminggiran epistemik.** [[genai-minoritized-knowledges-disability|Perspektif kritis]] memperingatkan bahwa data pelatihan yang berpusat pada Barat dapat meminggirkan pengetahuan yang berpusat pada disabilitas — audit konten dan alat AI untuk keadilan epistemik bersama [[equity-in-ai-education]].

## Miskonsepsi umum

- **"[[usability-research|Penilaian kegunaan]] memvalidasi alat bantu."** Praktisi memberi alat Social Story yang mereka rancang bersama penilaian kegunaan yang lulus (SUS 86.8) sambil menyalahkan citra Barat yang seragam dan pelacak perilaku yang melewatkan pertimbangan klinis terkait tujuan. Kegunaan tinggi berjalan bersama kegagalan substantif, jadi skor SUS bukan pengesahan kecocokan.
- **"Tolok ukur generik memberi tahu Anda bagaimana tutor menangani kasus pendidikan khusus."** Dari **923 dialog berlandaskan kasus** dari literatur pendidikan khusus dan psikologi pendidikan, **model terbaik dari 11 model** memenuhi kriteria terdokumentasi — dan **itulah batas cakupan tolok ukur tutor**. Evaluasi standar tidak menjangkau kasus yang paling membutuhkan bantuan.
- **"Siswa neurodivergen membutuhkan akomodasi, bukan persyaratan desain."** [[neurodivergent-computing-students|Zastudil et al.]] menemukan siswa komputasi neurodivergen membutuhkan **tugas yang terstruktur, tim kecil yang konsisten, dan definisi peran yang eksplisit** — persyaratan desain umum yang bermanfaat bagi semua orang, bukan penyesuaian individual yang diberikan setelah diagnosis.

## Konsep terkait

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Artikel terkait
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: mengevaluasi tutor LLM pada siswa dengan perilaku menantang (Park et al. 2026)
- [[seung-basham-cognitive-offloading-swld-2026]] — Pengalihan kognitif GenAI bagi siswa dengan disabilitas belajar
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Pembuatan pertanyaan bertenaga LLM untuk siswa Tuli dan Kurang Dengar
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — AI generatif, realitas virtual, dan seterusnya: Tinjauan cakupan teknologi bantu digital bagi siswa neurodivergen di pendidikan tinggi
- [[adapted-stories-social-story-intervention-2026]] — Intervensi Social Story Berbantuan AI untuk Pendidikan Khusus: Desain AdaptED Stories
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — Model bahasa-visi merencanakan Shoebox Tasks untuk robot Nao (Kudláčková 2026)
