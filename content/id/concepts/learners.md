---
title: "Pembelajar"
created: "2026-09-18T03:20:00-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
updated: "2026-11-08T13:51:25-05:00"
translation_of: "concepts/learners"
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

> **Sintesis:** Pembelajar adalah audiens utama [[ai-education|AI dalam pendidikan]] — para siswa di [[k-12]], [[higher-ed]] dan [[adult-learning]] yang pekerjaan, pemahaman, dan rasa diri mereka kini dibentuk oleh AI. Halaman ini adalah payung bagi cakupan sisi pembelajar dalam basis pengetahuan: apa yang dialami pembelajar ([[student-experience]]), siapa yang sedang mereka menjadi ([[learner-identity]]), apa yang masih mereka pilih ([[agency]]), bagaimana mereka benar-benar berinteraksi dengan alat tersebut ([[student-ai-interaction]]), apakah usaha dan [[self-regulated-learning|regulasi diri]] mereka bertahan di bawahnya ([[cognitive-offloading]]), dan bagaimana sistem AI memodelkan mereka ([[student-modeling]]). Temuan yang berulang di seluruh penelitian itu adalah bahwa alat yang sama membantu dan merugikan pembelajar yang berbeda secara berbeda — keuntungan terkonsentrasi di tempat [[prior-knowledge|pengetahuan awal]], [[ai-literacy|literasi AI]], dan kebiasaan verifikasi sudah ada, dan kemunduran terkonsentrasi di tempat AI menggantikan pemikiran yang seharusnya dibangun oleh tugas tersebut.

## Pertanyaan yang Perlu Dipertimbangkan

- Pembelajar mana dalam konteks Anda sendiri yang akan dijangkau lebih dahulu oleh alat AI baru, dan siapa yang akan ditinggalkannya — dan apa yang membuat Anda berpikir demikian?
- Penelitian sering melaporkan bahwa siswa *percaya* AI membantu mereka sementara ukuran tanpa bantuan menunjukkan tidak ada keuntungan, atau bahkan kerugian. Jika kesaksian pembelajar itu sendiri adalah bukti yang tidak dapat diandalkan, apa yang akan Anda terima sebagai bukti bahwa pembelajaran telah terjadi?
- Pembelajar di sini digambarkan baik sebagai orang yang menggunakan AI maupun sebagai objek yang dimodelkan AI ([[student-modeling|model pembelajar]], [[knowledge-tracing|pelacakan pengetahuan]], [[simulating-students|siswa simulasi]]). Di mana model tentang pembelajar seharusnya menginformasikan pengajaran, dan di mana model itu harus berhenti dipercaya?
- [[self-regulated-learning|Regulasi diri]] dan [[prior-knowledge|pengetahuan awal]] menentukan apakah dukungan AI menjadi pembelajaran atau substitusi. Apakah itu defisit pembelajar yang harus diperbaiki, masalah desain yang harus dipecahkan, atau masalah penilaian yang harus dibenahi?
- Jika sekelompok pembelajar berkinerja buruk dengan alat AI, perancang alat itu biasanya yang terakhir mengetahuinya. Seperti apa rutinitas untuk mendengar pembelajar sebelum dan sesudah penerapan di institusi Anda?
- [[agency|Agensi pembelajar]] dan [[learner-identity|identitas]] turut dipertaruhkan bersama capaian. Mana di antaranya yang akan Anda tolak untuk ditukar dengan [[learning-gains|kenaikan skor]] yang terukur — dan apakah desain penilaian Anda akan membuat penolakan itu terlihat?

## Pendahuluan

Pembelajar muncul dalam basis pengetahuan ini dalam dua wujud yang sangat berbeda, dan mengaburkan keduanya menyebabkan sebagian besar kebingungan di bidang ini. Pada wujud pertama, pembelajar adalah **orang yang menggunakan AI**: mereka bertanya, menerima atau menolak jawaban, kehilangan atau mempertahankan pijakan, dan melaporkan pengalaman dukungan, rasa bersalah, kecemasan, dan ketergantungan. Pada wujud kedua, pembelajar adalah **objek yang dimodelkan sistem AI**: perkiraan keterampilan dalam [[knowledge-tracing|pelacakan pengetahuan]], keadaan laten dalam [[cognitive-diagnosis|diagnosis kognitif]], atau [[simulating-students|siswa simulasi]] yang menggantikan siswa sungguhan. Bukti tentang wujud pertama berasal dari survei, wawancara, analisis log, dan eksperimen; bukti tentang wujud kedua berasal dari mesin pengukuran itu sendiri — dan model tentang pembelajar adalah sebuah klaim, bukan seorang pembelajar.

Halaman ini adalah titik masuk bagi keduanya. Ia mengumpulkan konsep-konsep sisi pembelajar yang dicakup basis pengetahuan, menjelaskan bagaimana konsep-konsep itu berhubungan, dan menautkan studi-studi di belakangnya. [[stakeholders]] mencakup sisi lain dari bidang yang sama — [[teacher-role|guru]], [[administrator|administrator]], perancang, dan pembuat kebijakan — dan kedua halaman ini dimaksudkan untuk dibaca bersama.

## Siapa yang dihitung sebagai pembelajar

Basis pengetahuan memperlakukan pembelajar di seluruh rentang pendidikan formal: siswa [[k-12]], [[higher-ed|mahasiswa]], pembelajar [[vocational-education|vokasi]] dan [[professional-training|profesional]], serta pembelajar [[adult-learning|dewasa]] dan [[lifelong-learning|sepanjang hayat]], termasuk [[special-education|pembelajar dengan disabilitas]], pembelajar [[neurodiversity|neurodivergen]], dan pembelajar [[multilingual-learning|multibahasa]]. Dua konvensi penting. Pertama, "pembelajar" dan "siswa" tidak dapat dipertukarkan secara berguna: *siswa* menamai peran institusional, *pembelajar* menamai sebuah aktivitas, dan seseorang bisa menjadi yang satu tanpa yang lain (seorang karyawan dalam [[professional-training|pelatihan kerja]] adalah pembelajar tetapi bukan siswa). Kedua, pembelajar bukan kelompok homogen, dan heterogenitas itulah yang terus muncul dalam penelitian — [[prior-knowledge|pengetahuan awal]], [[self-regulated-learning|regulasi diri]], bahasa, akses, dan status disabilitas semuanya mengubah apakah sebuah alat AI membantu.

## Apa yang dialami pembelajar

[[student-experience]] adalah salah satu dimensi AI dalam pendidikan yang paling banyak diteliti, dan pelajaran utamanya adalah bahwa efeknya campuran, bukan seragam. [[student-perceptions-ai-study-productivity-2026|Karya survei tentang produktivitas belajar]] menemukan pembelajar melaporkan keuntungan efisiensi yang nyata — 92.3% mengatakan AI meningkatkan pemahaman mereka — di samping kesenjangan yang disembunyikan angka utama: hanya 38.5% yang mengatakan AI mengurangi waktu belajar keseluruhan mereka, dan separuh melaporkan kadang mengandalkan AI alih-alih mencoba belajar mandiri. [[uneven-impact-generative-ai-student-learning-2026|Analisis pola ketergantungan]] melangkah lebih jauh: siswa dengan tingkat [[ai-literacy|literasi AI]] dan keterampilan evaluasi yang berbeda berakhir dalam hubungan yang secara kualitatif berbeda dengan alat tersebut, sehingga kebijakan mata kuliah yang sama menghasilkan hasil yang berbeda bagi pembelajar yang berbeda — dukungan bagi sebagian, substitusi bagi yang lain. [[genai-student-experiences-uk-he-survey-2026|Siswa menggambarkan tarikan upaya-minimal]] dengan kata-kata mereka sendiri, yang oleh halaman [[academic-integrity]] dan [[misconceptions]] diperlakukan sebagai masalah desain dan kebijakan, bukan masalah moral.

Afek berjalan seiring dengan kisah kognitif: [[anxiety-and-stress]] dan [[well-being]] mendokumentasikan kecemasan tentang tertinggal, tentang dituduh melakukan pelanggaran, dan tentang nilai dari gelar yang sedang ditempuh. Model mental pembelajar tentang AI — apa yang mereka pikirkan tentang AI dan untuk apa mereka pikir AI digunakan — berada di hulu apakah mereka menggunakannya dengan baik, itulah sebabnya [[misconceptions]] dan [[framing-ai-use-for-students]] muncul di seluruh penelitian sisi pembelajar.

Kesaksian pembelajar juga mempersulit kisah integritas yang membingkai begitu banyak kebijakan sisi pembelajar. [[mulisa-students-genai-integrity-perspectives-2026|Wawancara dengan 27 mahasiswa sarjana di sebuah universitas Etiopia]] menemukan penggunaan GenAI yang nyaris universal di samping pembacaan [[ethics|etis]] yang benar-benar terbelah — sebagian besar menghargai alat itu karena meningkatkan prestasi mereka, sebagian kecil menyebut penggunaan untuk tugas kuliah sebagai pelanggaran, dan hampir semua melaporkan medan permainan yang tidak seimbang di mana pengguna AI mendapat nilai di atas pekerja mandiri yang rajin, satu di antaranya menggambarkan efeknya sebagai membunuh rasa ketekunannya. Sisi siswa dari prosedur pelanggaran lebih tipis dalam literatur daripada sisi penggunaan siswa, tetapi [[munoz-misconduct-allegation-evidence-2026|analisis berkas kasus atas 1,162 tuduhan GenAI]] menunjukkan apa yang dihadapi pembelajar ketika respons institusional datang: bukti yang paling sering dikutip adalah jenis yang peringkatnya paling lemah, tidak ada ambang bukti minimum yang mengatur apakah sebuah kasus berlanjut, dan siswa yang kasusnya bersandar pada bukti tipis didorong ke arah banding.

## Identitas, agensi, dan kepengarangan

Penelitian sisi pembelajar bukan hanya tentang hasil. [[learner-identity]] menanyakan siapa yang sedang menjadi seorang pembelajar dalam kaitannya dengan suatu disiplin dan dengan AI, dan buktinya bergerak ke dua arah: penggunaan yang dirancang baik dapat menopang rasa memiliki disiplin, sementara pengalihan ke luar dapat menggerus rasa bahwa pekerjaan itu milik sendiri. [[agency]] menanyakan apa yang masih dikendalikan pembelajar. Basis pengetahuan memperlakukan keduanya sebagai benar-benar dipertaruhkan, bukan sebagai pelengkap lunak bagi capaian: pembelajar yang menghasilkan keluaran benar dengan AI dan tidak lagi mengenali penalaran di baliknya telah kehilangan sesuatu yang tidak dicatat oleh nilai. Pertanyaan kepengarangan adalah tempat pembelajar sendiri paling bergulat: [[mulisa-students-genai-integrity-perspectives-2026|siswa yang diwawancarai tentang GenAI dan integritas]] mengklaim orisinalitas karena tidak ada penulis lain — "Jika ini bukan ide orisinal saya, lalu milik siapa?" — sementara yang lain menyimpulkan karya itu tidak mewakili mereka, dan satu orang bernalar menuju pengakuan atas alat itu sebagai rekan penulis yang tidak mungkin ia wujudkan, mengingat AI bukanlah seorang pribadi.

## Berinteraksi dengan AI: apa yang sebenarnya dilakukan pembelajar

Halaman [[student-ai-interaction]] mengumpulkan apa yang diminta pembelajar kepada AI, bagaimana prompt dan dialog mereka berkembang, dan mengapa kualitas interaksi memprediksi [[learning-gains|hasil belajar]] lebih baik daripada akses. [[student-llm-interaction-taxonomy-review-2026|Sebuah tinjauan pelingkupan cepat atas 46 kategorisasi yang diambil dari 33 studi]] menemukan basis bukti itu terfragmentasi secara konseptual — studi berbeda dalam sumber data, skema kategori, dan unit analisis, sehingga "interaksi berkualitas" belum menjadi konstruk yang dapat dibandingkan di antara studi-studi itu, dan seruan tinjauan tersebut adalah taksonomi konvergen penggunaan [[llm]] yang berorientasi belajar, bukan klaim bahwa taksonomi semacam itu sudah ada. [[student-ai-conversations-cognitive-engagement-2026|Studi atas isi percakapan]] menemukan siswa mendisiplinkan diri mereka dengan cara yang khas, dengan keterlibatan mulai dari menyelidiki dan menguji klaim hingga menerima jawaban masuk akal yang pertama. [[help-seeking]] menyediakan kerangka yang lebih tua: meminta bantuan adalah keterampilan, dan meminta kepada penolong yang salah dengan cara yang salah adalah mode kegagalan yang sudah dikenal yang tidak dihapus oleh AI.

## Usaha, regulasi diri, dan kesenjangan kinerja–pembelajaran

Di sinilah bukti sisi pembelajar paling berkonsekuensi, karena ia memisahkan apa yang *dapat dilakukan pembelajar dengan AI* dari apa yang *dapat mereka lakukan tanpanya*. 

[[cognitive-offloading]] mengumpulkan bukti ketergantungan berlebih; [[genai-performance-vs-learning]] menyatakan poin metodologis sentral bahwa kinerja dengan bantuan dan kemampuan tanpa bantuan harus diukur secara terpisah; [[layer-sensitive-cognitive-offloading-writing-2026|studi pelepasan kognitif berlapis pada penulisan]] memisahkan pelepasan permukaan, struktural, gagasan, dan penalaran, dan menemukan kinerja tertinggi yang didukung dalam kondisi paling tidak terbatas bersamaan dengan kinerja mandiri terendah delapan minggu kemudian; dan [[shaw-nave-cognitive-surrender-2026|paparan penyerahan kognitif Shaw dan Nave]] menamai disposisi yang membuat delegasi menjadi kebiasaan alih-alih strategi. [[metacognitively-discordant-completion-genai-2026|Diskoransi metakognitif]] mendokumentasikan kasus tengah yang tidak nyaman — pembelajar yang menyadari mereka tidak memahami dan tetap mengumpulkan — dan [[verification-quality-reliance-calibration-genai-2026|penelitian verifikasi]] menunjukkan bahwa "memeriksa" itu sendiri adalah keterampilan bertingkat, bukan kebiasaan biner. Di sisi desain, [[desirable-difficulties|kesulitan produktif]] dan [[reducing-ai-misuse]] mengumpulkan intervensi yang memulihkan usaha yang seharusnya dituntut oleh tugas.

## Pembelajar sebagai model

Konsep-konsep sisi pembelajar dengan garis keturunan teknis terpanjang adalah konsep-konsep yang merepresentasikan pembelajar kepada sistem. [[student-modeling]] mencakup keluarganya: [[knowledge-tracing]] yang memperkirakan perolehan keterampilan sepanjang waktu, [[cognitive-diagnosis]] yang melokalisasi miskonsepsi tertentu, dan sistem adaptif serta [[personalized-learning|terpersonalisasi]] yang mengonsumsi perkiraan tersebut. [[simulating-students]] dan [[simulating-students-llm-review-2026|tinjauannya]] memperlakukan [[simulation]] sebagai cara menguji [[intelligent-tutoring|tutor]] dan menghasilkan data ketika pembelajar sungguhan tidak tersedia — pengganti sementara yang secara eksplisit bersifat sementara, bukan substitusi. Dua peringatan mengalir melalui literatur ini: perkiraan model adalah inferensi dari perilaku yang sensitif terhadap bagaimana butir soal dan antarmuka dibangun, dan [[demographic-signals-llm-student-assessment-2026|studi atas sinyal demografis]] menunjukkan bahwa sistem penilaian dapat menangkap proksi identitas pembelajar (bahasa, latar belakang) yang tidak pernah dimaksudkan menjadi bagian dari konstruk. [[self-report-measures]] mencakup masalah cermin di sisi penelitian: apa yang dikatakan pembelajar tentang pembelajaran mereka sendiri sering berbeda dari apa yang dapat mereka lakukan.

## Keadilan lintas pembelajar

Karena manfaat mengikuti keuntungan sebelumnya, kerja sisi pembelajar tidak terpisahkan dari [[equity-in-ai-education]]. [[digital-divide]] dan akses ke tingkatan model berbayar membentuk siapa yang mendapatkan alat terkuat; kekhawatiran [[bias-mitigation|keadilan]] mengatur bagaimana model yang dipelajari memperlakukan kelompok yang berbeda; [[inclusive-learning]], [[accessibility]], [[special-education]] dan [[neurodiversity]] mencakup pembelajar yang kebutuhannya diabaikan oleh desain bawaan. Pelajaran praktis dari penelitian ini adalah bahwa "AI membantu siswa" bukanlah temuan — temuannya selalu *siswa mana*, dalam *kondisi apa*, dengan *pengetahuan awal dan akses apa*. Dua kelompok memikul porsi khas dari risiko itu. [[wright-transcription-not-generation-2026|Wright (2026)]] berargumen bahwa larangan yang dirumuskan seputar "[[generative-ai|AI generatif]]" alih-alih seputar fungsi menangkap alat transkripsi yang mengubah format pekerjaan yang telah ditulis pembelajar sendiri, sehingga positif palsu yang dihasilkan paling keras menghantam pembelajar disabilitas yang mengandalkan ucapan-ke-teks dan OCR, termasuk ketika OCR bertenaga AI telah menggantikan perangkat lunak bantu yang dihentikan; [[harerimana-remote-proctoring-nursing-scoping-2026|sebuah tinjauan pelingkupan atas pengawasan jarak jauh]] menyampaikan poin paralel tentang kondisi penilaian, menemukan bahwa konektivitas, biaya data, dan kegagalan perangkat menentukan siapa yang dapat dinilai sama sekali — temuan keadilan, bukan temuan teknis, dan terkonsentrasi di lingkungan berpendapatan rendah dan menengah.

## Posisi halaman ini

Bacalah bersama [[stakeholders]] untuk orang-orang di sekitar pembelajar, dan bersama [[pedagogy]] serta [[learning-design]] untuk apa yang dilakukan guru dengan temuan-temuan ini. [[assessment]] menentukan kemampuan pembelajar mana yang pernah dibuat terlihat; [[limitations-in-aied-research]] menjelaskan mengapa begitu banyak bukti sisi pembelajar bersifat jangka pendek, dilaporkan sendiri, dan dilakukan pada sampel kemudahan; dan [[misconceptions]] adalah titik masuk yang biasa bagi pembelajar sendiri.

## Miskonsepsi Umum

**"Pembelajar dan siswa adalah populasi yang sama."** Keduanya tidak dapat dipertukarkan secara berguna: *siswa* menamai peran institusional, *pembelajar* menamai sebuah aktivitas, dan seseorang bisa menjadi yang satu tanpa yang lain — seorang karyawan dalam [[professional-training|pelatihan kerja]] adalah pembelajar tetapi bukan siswa. Mencampuradukkan keduanya mempersempit basis bukti menjadi orang-orang dengan catatan pendaftaran dan diam-diam membuang justru orang dewasa, profesional, dan [[self-directed-learning|pembelajar yang mengarahkan diri sendiri]] yang menjadi pokok penelitian [[lifelong-learning|pembelajaran sepanjang hayat]].

**"Pembelajar melaporkan AI meningkatkan pemahaman mereka, jadi AI menghemat waktu mereka."** Kedua klaim itu terpisah dalam data survei. Dalam karya tentang produktivitas belajar, **92.3%** mengatakan AI meningkatkan pemahaman mereka, sementara hanya **38.5%** yang mengatakan AI mengurangi waktu belajar keseluruhan mereka. Angka utama menggambarkan pemahaman yang dirasakan; kesenjangan di bawahnya menunjukkan bahwa pemahaman yang membaik dan waktu yang kembali adalah hasil yang berbeda, dan klaim "AI menghemat waktu" yang banyak diulang ditopang oleh angka yang lebih kecil.

**"Siswa yang menggunakan AI untuk jalan pintas mengalami kegagalan moral."** Basis pengetahuan memperlakukan tarikan upaya-minimal sebagai masalah desain dan kebijakan, bukan masalah karakter — siswa menggambarkannya dengan kata-kata mereka sendiri, dan literatur [[reducing-ai-misuse|penyalahgunaan]] serta [[academic-integrity|integritas]] menempatkan tuasnya pada desain tugas dan lingkungan. Membingkainya secara moral tidak menjelaskan apa pun tentang mengapa siswa yang sama berperilaku berbeda di dua mata kuliah.

**"Ketika tuduhan pelanggaran diajukan, buktinya sudah ada."** Analisis berkas kasus atas 1,162 tuduhan GenAI menunjukkan apa yang sebenarnya dihadapi pembelajar ketika respons institusional datang, dan sisi siswa dari prosedur pelanggaran jauh lebih tipis dalam literatur daripada sisi penggunaan siswa. Halaman tentang pembelajar yang hanya mendokumentasikan penggunaan mereka dan bukan keterpaparan mereka pada tuduhan telah mendokumentasikan separuh pengalaman.

## Implikasi bagi Praktik

**Bagi instruktur**

- Tanyakan apa yang *dilakukan* pembelajar, bukan hanya apa yang mereka laporkan rasakan. Pemahaman yang dirasakan (92.3%) dan waktu yang kembali (38.5%) cukup berbeda sehingga bertindak atas salah satunya sambil mengasumsikan yang lain akan menyesatkan desain mata kuliah.
- Rancanglah melawan tarikan upaya-minimal secara struktural alih-alih mengandalkan kebajikan pembelajar, karena tarikan itu terdokumentasi sebagai respons normal terhadap desain tugas.
- Beri tahu pembelajar tentang proses yang akan mereka hadapi jika dituduh, karena bukti prosedur menunjukkan respons institusional adalah tempat kerugian sering mendarat.

**Bagi pengembang**

- Jangan memasarkan penghematan waktu yang tidak dilaporkan pembelajar sendiri. Sediakan metrik untuk pemahaman dan waktu, dan beri label terpisah.
- Rancanglah untuk pembelajar non-siswa: pengguna di tempat kerja dan pengguna yang mengarahkan diri sendiri tidak memiliki konteks pendaftaran yang mungkin diasumsikan oleh nilai bawaan Anda.

**Bagi peneliti**

- Pertahankan perbedaan pembelajar/siswa secara eksplisit dalam pengambilan sampel, dan laporkan siapa yang dikecualikan olehnya.
- Teliti yang dituduh sekaligus penggunanya; sisi prosedur adalah separuh tipis dari literatur ini.

## Konsep terkait

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — Bagaimana pembelajar mempersepsikan, berinteraksi dengan, dan terpengaruh oleh AI
- [[learner-identity]] — Siapa yang sedang menjadi pembelajar dalam kaitannya dengan suatu disiplin dan dengan AI
- [[agency]] — Apa yang masih dikendalikan dan dipilih pembelajar
- [[student-ai-interaction]] — Apa yang sebenarnya diminta pembelajar kepada AI dan bagaimana dialog berkembang
- [[cognitive-offloading]] — Ketergantungan berlebih dan substitusi AI untuk berpikir
- [[self-regulated-learning]] — Merencanakan, memantau, dan menyesuaikan pembelajaran sendiri
- [[help-seeking]] — Meminta bantuan dengan baik, dan mode kegagalan ketika pembelajar tidak melakukannya
- [[metacognition]] — Mengetahui apa yang dipahami dan tidak dipahami
- [[motivation]] — Mengapa pembelajar bertahan atau berhenti
- [[self-efficacy]] — Keyakinan pembelajar atas kemampuan mereka sendiri
- [[student-engagement]] — Keterlibatan perilaku, emosional, dan kognitif
- [[prior-knowledge]] — Pengetahuan latar yang menentukan apakah dukungan menjadi pembelajaran
- [[student-modeling]] — Merepresentasikan pembelajar di dalam sistem
- [[knowledge-tracing]] — Memperkirakan perolehan keterampilan sepanjang waktu
- [[simulating-students]] — Pembelajar simulasi LLM sebagai pengganti sementara
- [[ai-literacy]] — Kemampuan yang menentukan apakah pembelajar menggunakan AI dengan baik
- [[equity-in-ai-education]] — Siapa yang mendapat manfaat dan siapa yang tertinggal
- [[well-being]] — Kecemasan, stres, dan biaya afektif belajar yang dimediasi AI
- [[misconceptions]] — Model mental yang dibawa pembelajar tentang AI
- [[stakeholders]] — Sisi lain dari bidang yang sama: guru, pemimpin, perancang
- [[assessment]] — Kemampuan pembelajar mana yang pernah dibuat terlihat

## Artikel terkait

- [[uneven-impact-generative-ai-student-learning-2026]] — Pola ketergantungan dan literasi evaluasi membelah hasil siswa
- [[student-perceptions-ai-study-productivity-2026]] — Pembelajar melaporkan keuntungan efisiensi di samping kekhawatiran ketergantungan
- [[student-llm-interaction-taxonomy-review-2026]] — Taksonomi interaksi siswa-LLM yang berorientasi belajar
- [[student-ai-conversations-cognitive-engagement-2026]] — Pola khas per disiplin dalam percakapan siswa-AI
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Keuntungan kinerja berbantuan tanpa kemampuan mandiri
- [[genai-performance-vs-learning]] — Mengapa kinerja berbantuan dan pembelajaran tanpa bantuan harus diukur terpisah
- [[shaw-nave-cognitive-surrender-2026]] — Penyerahan kognitif sebagai disposisi, bukan kecelakaan
- [[metacognitively-discordant-completion-genai-2026]] — Pembelajar yang menyadari tidak memahami dan tetap mengumpulkan
- [[verification-quality-reliance-calibration-genai-2026]] — Kualitas verifikasi dan kalibrasi ketergantungan
- [[simulating-students-llm-review-2026]] — Siswa simulasi: arsitektur, mekanisme, dan batas
- [[stanbkt-bayesian-knowledge-tracing]] — Estimasi parameter dalam pelacakan pengetahuan Bayesian
- [[demographic-signals-llm-student-assessment-2026]] — Sinyal demografis implisit dan eksplisit dalam penilaian berbasis LLM
- [[ai-literacy-learning-engagement-psych-capital-2026]] — Literasi AI, keterlibatan, dan modal psikologis
- [[genai-student-experiences-uk-he-survey-2026]] — Siswa menggambarkan tarikan upaya-minimal
- [[mulisa-students-genai-integrity-perspectives-2026]] — Pendapat siswa apakah GenAI adalah alat mencontek atau mitra belajar
- [[munoz-misconduct-allegation-evidence-2026]] — Apa yang sebenarnya termuat sebagai bukti dalam berkas tuduhan pelanggaran
- [[wright-transcription-not-generation-2026]] — Aturan AI yang terlalu inklusif dan siswa yang tertangkap olehnya
- [[sharma-judgment-visible-genai-assessment-2026]] — Integritas sebagai pertimbangan evaluatif alih-alih kepatuhan
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Biaya emosional dan keadilan pengawasan jarak jauh bagi siswa
