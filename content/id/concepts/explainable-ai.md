---
title: "AI yang Dapat Dijelaskan"
created: "2026-09-07T10:15:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
updated: "2026-11-04T02:42:40-05:00"
translation_of: "concepts/explainable-ai"
source_updated: "2026-11-01T09:13:16-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **AI yang Dapat Dijelaskan (XAI) dalam pendidikan** adalah desain dan kajian untuk membuat keputusan sebuah sistem AI dapat dibaca oleh para pemangku kepentingannya dalam pendidikan — [[learners]], guru, [[administrator|administrator]], [[parents-and-families|orang tua]], peneliti, dan [[stakeholders|pembuat kebijakan]]. Distingsi utama yang dipertahankan bidang ini: menjelaskan **materi pelajaran** (mengapa suatu fakta benar) tidak sama dengan menjelaskan **keputusan sistem AI** (mengapa siswa ini diberi aktivitas ini, mengapa respons ini ditandai salah, bukti apa yang mendukung prediksi risiko). Pendidikan membawa kebutuhan keterjelasan yang khas — data pembelajaran yang berisik, penjelasan yang dapat langsung mendukung [[metacognition]] dan [[self-regulated-learning]], serta pemangku kepentingan yang memerlukan jenis penjelasan yang secara mendasar berbeda. Pertanyaan desain yang operatif adalah **kualitas penjelasan**, bukan sekadar ketersediaan penjelasan: penjelasan yang secara teknis ada tetapi tidak terbaca, menyesatkan, atau tidak selaras dengan audiensnya dapat menimbulkan kerugian lebih besar daripada tidak ada penjelasan sama sekali.

## Pertanyaan yang Perlu Dipertimbangkan

- Ketika sebuah [[intelligent-tutoring|tutor AI]] memberi tahu Anda mengapa sebuah petunjuk diberikan, apakah itu menjelaskan *materi pelajaran* atau menjelaskan *keputusan sistem*? Dapatkah Anda menyebutkan tiga contoh masing-masing dalam penggunaan AI pendidikan Anda sendiri?
- Siapa yang membutuhkan penjelasan dalam pendidikan — dan apakah siswa, guru, serta pembuat kebijakan membutuhkan jenis yang *sama*? Untuk apa masing-masing akan menggunakan sebuah penjelasan?
- Sebuah AI menandai seorang siswa sebagai berisiko putus sekolah. Apa yang perlu diketahui seorang [[teacher-role|guru]] untuk bertindak atas hal itu, dibandingkan dengan apa yang perlu diketahui siswa? Apakah penjelasan yang sama layak untuk keduanya?
- Halaman ini berargumen bahwa *kualitas* penjelasan lebih penting daripada *ketersediaan* penjelasan. Apa yang membuat penjelasan yang secara teknis ada menjadi gagal — dapatkah Anda mengingat saat sebuah penjelasan ada tetapi tidak berguna, atau lebih buruk, menyesatkan?
- [[trust-calibration|Kepercayaan]] dan penjelasan saling terkait tetapi tidak identik. Mengapa penjelasan yang percaya diri dan lancar dapat menciptakan keyakinan *palsu* pada sistem yang cacat — dan bagaimana Anda akan mendeteksi hal itu terjadi?

## Pendahuluan

[[ai-education|AI dalam pendidikan]] yang dapat dijelaskan menamai ekspektasi yang tumbuh bahwa sistem AI di ruang kelas tidak boleh menjadi kotak hitam. Karena AI dalam pendidikan memengaruhi keputusan yang berkonsekuensi — nilai, tanda risiko, [[recommender-systems-and-learning-paths|jalur pembelajaran]], rekomendasi sumber daya — pemangku kepentingan makin menuntut untuk mengetahui bukan hanya *apa* yang disimpulkan sistem tetapi *mengapa*. Pendidikan mempertajamnya menjadi dua pertanyaan berbeda: menjelaskan materi pelajaran yang sedang dipelajari, dan menjelaskan pengambilan keputusan sistem AI itu sendiri. Mencampuradukkan keduanya adalah kesalahan kategori dengan konsekuensi praktis: AI yang menjelaskan jawaban [[physics-education|fisika]] dengan sempurna tetap tidak memberi siswa dan guru wawasan apa pun tentang mengapa *sistem* memberi peringkat mereka berisiko, merekomendasikan aktivitas tertentu, atau menandai sebuah respons salah.

## Menjelaskan materi pelajaran vs. menjelaskan keputusan sistem

Kontribusi pendiri bidang ini — [[xai-education-framework|kerangka XAI-ED]] (Khosravi et al., 2022) — menegaskan bahwa pendidikan memiliki kebutuhan keterjelasan yang *khas* di luar XAI tujuan umum. Yang utama di antaranya adalah pemisahan antara dua sasaran penjelasan:

- **Penjelasan materi pelajaran** menjernihkan *isi*: mengapa sebuah petunjuk menyasar sebuah [[misconceptions|miskonsepsi]], mengapa sebuah jawaban salah, bagaimana hasil fisika mengikuti prinsip-prinsip. Ini adalah penjelasan [[pedagogy|pedagogis]] yang mendukung [[scaffolding]], [[feedback]], dan [[metacognition]].
- **Penjelasan keputusan sistem** menjernihkan *model*: mengapa siswa ini diberi aktivitas ini, mengapa sistem memprediksi siswa ini berisiko, bukti apa yang mendukung pelacakan pengetahuan atau prediksi [[learning-analytics]]. Ini adalah penjelasan transparansi yang mendukung [[trust-calibration]], [[bias-mitigation]], dan akuntabilitas.

Distingsi ini penting karena keduanya melayani pemangku kepentingan dan tujuan yang berbeda. Siswa yang bertanya "mengapa ini ditandai salah?" terutama membutuhkan penjelasan *materi pelajaran*; guru yang memutuskan apakah akan bertindak atas tanda risiko, atau pembuat kebijakan yang mengaudit bias, membutuhkan penjelasan *keputusan sistem*. Merancang satu penjelasan yang melayani keduanya jarang mungkin — itulah sebabnya desain multi-pemangku kepentingan menjadi tema inti XAI-ED.

## Siapa yang membutuhkan penjelasan: desain multi-pemangku kepentingan

- **Siswa** membutuhkan penjelasan yang mendukung pembelajaran dan regulasi diri mereka sendiri — mengapa sebuah petunjuk diberikan, mengapa jawaban mereka ditandai salah, mengapa sumber daya ini direkomendasikan (mendukung [[self-regulated-learning]]). [[student-perspectives-ai-writing-grading-2026|Bukti perspektif siswa]] menunjukkan bahwa siswa menarik garis tegas antara menerima *umpan balik* AI (berguna untuk revisi) dan menyerahkan *otoritas penilaian* (yang disimpan untuk instruktur manusia) — sikap terkalibrasi yang selaras fungsi dan diaktifkan oleh transparansi tentang keterlibatan AI. [[ko-hughes-vsd-student-centered-its-2026|Karya desain peka nilai bersama siswa community college]] mempertajam poin ini: siswa lebih menyukai penjelasan yang *kolaboratif dan dimanusiakan* (misalnya, "AI mungkin tidak yakin di sini, jadi mari kita periksa bersama") daripada keyakinan model mentah atau transparansi teknis, karena transparansi saja bernilai kecil kecuali langsung mendukung pembelajaran mereka. Studi tersebut memunculkan ketegangan transparansi-vs.-interpretabilitas yang mendorong desain penjelasan ke arah semantik yang berorientasi pembelajar alih-alih keluaran feature-importance.
- **Guru** membutuhkan penjelasan yang menginformasikan intervensi — siswa mana yang berisiko dan *mengapa*, atas bukti apa. [[xai-teachers-trust-edtech-recommendations-2026|Studi keterjelasan bersama guru]] menunjukkan bahwa penjelasan [[discipline-specific-aied|khas domain]] dalam bahasa [[curriculum-design|kurikulum]] membangun penerimaan dan kepercayaan terkalibrasi lebih efektif daripada penjelasan feature-importance generik, namun guru tetap menginginkan pengalaman kelas nyata sebelum sepenuhnya bergantung — penjelasan saja tidak memberikan [[trust-calibration|kalibrasi]].
- **Pengembang dan peneliti** membutuhkan penjelasan untuk men-debug perilaku model dan mendeteksi [[bias-mitigation|bias]] — memunculkan fitur mana yang mendorong prediksi.
- **Administrator dan pembuat kebijakan** membutuhkan penjelasan untuk akuntabilitas, [[privacy]], dan kepatuhan [[regulation]] (misalnya hak atas penjelasan), serta untuk mengaudit apakah keputusan yang digerakkan AI adil dan [[equity-in-ai-education|setara]].

## Pendekatan dan format

Kerangka XAI-ED mengatalogkan modalitas penjelasan utama: **visual** (heatmap, pohon keputusan), **tekstual** (justifikasi berbahasa alami), **berbasis contoh** (counterfactual, tetangga terdekat), peringkat **feature-importance**, **ekstraksi aturan**, dan **penyederhanaan model**. Kerangka ini juga memetakan pendekatan ke kelas model:

- Model **kotak putih** (pohon keputusan, model linear, berbasis aturan) secara inheren dapat diinterpretasikan.
- Model **kotak hitam** ([[machine-learning|jaringan saraf]], ansambel) memerlukan metode penjelasan post-hoc.
- Pendekatan **kotak kaca** berupaya menyeimbangkan akurasi dengan transparansi.

Basis bukti AIED yang konkret mencakup semuanya. **[[knowledge-tracing|Pelacakan pengetahuan]] yang dapat diinterpretasikan** membuat model pengetahuan pembelajar dapat diperiksa secara langsung ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **Surrogate yang menjelaskan diri sendiri** menyuling model kotak hitam menjadi [[llm|model bahasa]] kecil yang dapat diinterpretasikan untuk [[learning-analytics]] ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Penjelasan counterfactual** — "apa yang perlu berubah agar hasilnya berbeda" — mendukung dukungan keputusan pendidikan dan recourse ([[sc2r-counterfactual-recourse-educational-2026]]). **Analitik pembelajaran federated + yang dapat dijelaskan** menunjukkan kualitas penjelasan dapat bergeser (kalibrasi menurun) bahkan ketika stabilitas peringkat bertahan, menggarisbawahi bahwa penjelasan bukan properti tetap melainkan keluaran sistem yang harus diukur ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Dan **ITS [[affective-computing|afektif]] yang dapat diinterpretasikan** mendemonstrasikan penjelasan dalam tutor [[affective-tutoring|yang sadar emosi]] ([[multimodal-affective-its-presentation]]).
- **Pengukuran eksternal menghindari masalah akun yang tidak jujur.** Filtered Decision Logs membangun kembali jejak alat menjadi pohon provenans dan memberi peringkat bukti dengan empat sinyal deterministik, sehingga skor pengaruh dapat diverifikasi secara independen dari rekomendasi, dan penghapusan alat secara counterfactual mengonfirmasi bahwa peringkat tersebut mengikuti ketergantungan ([[filtered-decision-logs-transparency-genai-2026|Anbalagan et al. (2026)]]).

## Kualitas penjelasan, bukan ketersediaan

Pelajaran yang berulang di seluruh bukti: **memiliki penjelasan tidaklah cukup**; penjelasan harus tepat bagi audiensnya, akurat, dan terkalibrasi terhadap taruhannya. Kerangka XAI-ED menamai jebakannya secara eksplisit:

- **Kelebihan muatan penjelasan** — terlalu banyak informasi membanjiri pengguna dan meniadakan manfaatnya.
- **Penjelasan yang menyesatkan** — penjelasan post-hoc mungkin tidak mencerminkan penalaran aktual model, sehingga memberi keyakinan palsu.
- **Bias konfirmasi** — pengguna secara selektif memperhatikan penjelasan yang mengonfirmasi keyakinan yang sudah ada.
- **Kepercayaan berlebih** — penjelasan yang lancar dapat menciptakan keyakinan palsu pada sistem yang cacat, memicu [[cognitive-offloading|ketergantungan berlebih]] (kebalikan dari [[trust-calibration]]).
- **Mempermainkan sistem** — siswa dapat memanfaatkan penjelasan untuk menghindari pembelajaran yang sebenarnya.

Kualitas penjelasan juga memiliki dimensi keadilan: penjelasan yang secara teknis ada tetapi tidak terbaca bagi pemangku kepentingan tertentu — atau yang mengaburkan [[bias-mitigation|bias]] dalam sebuah prediksi — gagal memenuhi tujuannya. Inilah sebabnya pertanyaan desain adalah *kualitas dan kesesuaian*, dan sebabnya desain penjelasan yang berpusat pada manusia dan khas pemangku kepentingan tidak terpisahkan dari pembangkitan penjelasan secara teknis. XAI yang efektif adalah tindakan komunikasi yang dirancang untuk kebutuhan kognitif penerima, bukan sekadar artefak teknis.


Penjelasan tidak selalu meratakan. Dalam eksperimen vignette 2 × 2 dengan 250 siswa kelas tujuh, rasional tertulis untuk sebuah skor matematika menaikkan penerimaan dan persepsi keadilan pada kedua kondisi tetapi melebarkan alih-alih menutup kesenjangan antara keputusan yang dibuat [[teacher-role|guru]] dan yang dibuat AI ([[decision-making-agent-student-decision-acceptance-2026|Zhang et al. (2026)]]).

Sitasi berperilaku sebagai isyarat kredibilitas alih-alih bukti kebenaran: melampirkan sitasi dan sinyal otoritas pada antarmuka debat menaikkan pengabaian penilaian yang benar demi posisi AI dari 15.0% menjadi 31.8%, dan kasus yang disitasi kadang salah atribusi atau fiktif ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

Dua kehati-hatian mempertajamnya lebih jauh, keduanya menjadi pusat kontribusi terbaru wiki tentang subjek ini. Pertama, mesin penjelasan itu sendiri tidak netral: metode post-hoc seperti LIME dan SHAP dapat tidak jujur terhadap perilaku aktual model, sehingga penjelasan yang secara teknis ada dapat menyesatkan alih-alih menginformasikan ([[lund-socially-accountable-data-science-xai-2026|Lund et al. 2026]], mengacu pada Chuan et al. 2024). Kedua, **penjelasan bukan akuntabilitas**. Paparan tentang fitur mana yang mendorong sebuah prediksi tidak mengungkap apakah fitur itu layak digunakan, apakah data pelatihan representatif, atau apakah desain sistem mencerminkan pertimbangan yang sehat; penjelasan dapat menciptakan tampilan transparansi sementara membiarkan kondisi struktural yang menghasilkan keputusan tidak tersentuh (Mittelstadt et al. 2019). Bagi pendidikan ini berarti pertanyaan yang harus terus diajukan bukanlah apakah sebuah penjelasan dihasilkan tetapi apakah orang yang menerimanya — siswa, guru, penasihat — dapat memahaminya, bertindak atasnya, atau mempersoalkan keputusan di baliknya. Kegagalan keterbacaan yang sama muncul di sisi keamanan [[automated-assessment|penilaian otomatis]]: [[humble-prompt-injection-ai-grading-red-team-2026|red-team Humble (2026) terhadap alat penilaian AI]] menemukannya diam-diam menonaktifkan percakapan setelah memblokir sebuah prompt injection, dan — setelah mengumumkan tidak akan pernah mengikuti instruksi tersemat — mengikutinya dalam enam percobaan berikutnya pada berkas yang sama, sehingga tidak meninggalkan sinyal andal bagi pengguna untuk mendasari kepercayaan.

**Dapat dijelaskan sejak desain** adalah satu jawaban atas masalah kejujuran post-hoc. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang dan Fang (2025)]] memparameterkan dekoder penjelasan dengan representasi gabungan dan skor prediksi yang sama yang menentukan [[assessment]], sehingga skor rendah pada pertanyaan [[formative-assessment|formatif]] menghasilkan rasional yang menyebut kurangnya pertanyaan penggalian, dan memasangkannya dengan atensi dua lensa atas standar kurikulum dan gerakan rubrik khas mata pelajaran. Keselarasan atensi-ke-rubrik mencapai 78.0% dibandingkan 41.7% untuk GPT-4 zero-shot dan 32.1% untuk BERT, dan kejujuran diuji melalui penghapusan counterfactual atas rentang kritis rubrik bersama penilaian manusia pada daftar periksa yang berjangkar rubrik, menghasilkan skor kredibilitas penjelasan 0.78 — peningkatan 0.31 dibandingkan BERT-base. Audit juga menunjukkan di mana klaim arsitektural menipis: pada isyarat emosional model mengalokasikan 28.4% bobot atensi dibandingkan 15.2% pada pakar (keselarasan 0.53), dengan satu kasus kegagalan memberikan 28% pada token "frustrated", yang dibaca penulis sebagai overfitting terhadap afek alih-alih pedagogi dan mereka namai sebagai area penyempurnaan. Menanamkan penjelasan dalam jalur keputusan membuatnya lebih jujur daripada rasional post-hoc; itu tidak membuatnya benar.


**Apa yang dikatakan model tentang yang digunakannya bergantung pada keluarga model sama besarnya dengan pada data.** Pada tujuh model dalam satu kohort, [[hooshyar-responsible-trustworthy-educational-data-mining-2026|Hooshyar et al. (2026)]] menemukan pendekatan simbolik bersandar pada faktor kognitif dan motivasional, model sub-simbolik pada aspek kognitif, pengetahuan yang dipelajari dan gender, dan keduanya sebagian besar mengabaikan faktor metakognitif, sementara model neural-simbolik menggunakan perangkat yang lebih terintegrasi. Siswa yang sama dan indikator yang sama menghasilkan paparan berbeda tentang apa yang penting, sehingga keselarasan dengan teori pembelajaran menjadi klaim tentang atribusi alih-alih tentang akurasi.

## Mengajarkan keterjelasan sebagai praktik akuntabilitas

Jika kualitas penjelasan menentukan apakah XAI berguna, maka menghasilkan penjelasan harus diajarkan sebagai kebiasaan profesional alih-alih didemonstrasikan sebagai kemampuan. [[lund-socially-accountable-data-science-xai-2026|Lund dan rekan (2026)]] mengusulkan melakukannya melalui empat pilar — **answerability** (kewajiban memberi alasan kepada mereka yang terdampak), **responsibility** (kerugian diantisipasi sepanjang siklus hidup, bukan dibela setelah kejadian), **enforcement** (konsekuensi di dalam mata kuliah) dan **reflexivity** (pemeriksaan terdokumentasi atas asumsi sendiri) — masing-masing dengan tugas dan biaya kelasnya sendiri.

Secara khusus untuk keterjelasan, tugas yang penting adalah yang memaksa penjelasan keluar dari notebook: kartu model yang dinilai sejajar dengan metrik akurasi, dan audit penjelasan terstruktur di mana siswa menerapkan alat interpretabilitas pada model mereka sendiri lalu menyajikan hasilnya kepada audiens tanpa latar teknis bersama. Enforcement adalah pilar yang paling sering hilang dari mata kuliah yang bersinggungan dengan etika dan yang membuat sisanya lebih dari simbolis — rubrik yang memberi imbalan pada dokumentasi yang bertanggung jawab, proyek yang dapat dikembalikan untuk revisi atas alasan [[ethics|etis]], dan [[peer-assessment|tinjauan sejawat]] yang dilakukan terhadap kriteria akuntabilitas alih-alih kriteria teknis semata. Makalah itu terbuka bahwa alat-alatnya berbeda tajam dalam biaya: kartu model dan pernyataan posisionalitas tidak memerlukan perangkat lunak baru dan hanya berisiko kepatuhan yang dangkal, sedangkan panel sejawat dan keterlibatan pemangku kepentingan memerlukan koordinasi dan dukungan institusional, itulah sebabnya makalah merekomendasikan adopsi bertahap alih-alih komitmen semua-atau-tidak-sama-sekali. Lihat [[curriculum-design]] untuk tempat hal-hal ini dalam sebuah program.

## Miskonsepsi Umum

- **"Sitasi membuat penjelasan dapat dipercaya."** Sitasi berperilaku sebagai **isyarat kredibilitas alih-alih bukti kebenaran**: melampirkan sitasi dan sinyal otoritas pada antarmuka debat **menaikkan pengabaian penilaian yang benar demi posisi AI dari 15.0% menjadi 31.8%**. Provenans membuat jawaban yang salah lebih persuasif, yang merupakan kebalikan dari efek yang dimaksudkan.
- **"Penjelasan yang memuaskan pengguna telah menjelaskan sistem."** Kegagalan keterbacaan yang sama muncul di sisi keamanan [[automated-assessment|penilaian otomatis]]: [[humble-prompt-injection-ai-grading-red-team-2026|red-team Humble (2026)]] menemukan alur kerja penilaian sehari-hari dapat dimanipulasi oleh instruksi yang disuntikkan. Narasi yang masuk akal dan narasi yang dapat diaudit adalah artefak yang berbeda.
- **"Praktik XAI umum dapat dipindahkan ke pendidikan."** [[xai-education-framework|Kerangka XAI-ED]] (Khosravi et al., 2022) menegaskan pendidikan memiliki **kebutuhan keterjelasan yang khas** di luar XAI umum, karena audiensnya mencakup pembelajar yang harus bertindak atas penjelasan itu, bukan auditor yang harus mensertifikasinya.
- **"Kejujuran adalah properti yang bisa diklaim tanpa pengujian."** Kejujuran terukur memerlukan **penghapusan counterfactual atas rentang kritis rubrik** bersama penilaian manusia. Keselarasan atensi-ke-rubrik yang mencapai **78.0% dibandingkan 41.7% untuk GPT-4 zero-shot dan 32.1% untuk BERT** adalah hasil komparatif dari pengujian semacam itu, bukan dari klaim tentang interpretabilitas.

## Konsep terkait
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]

## Artikel terkait
- [[lund-socially-accountable-data-science-xai-2026]] — Kerangka empat pilar (answerability, responsibility, enforcement, reflexivity) untuk mengajarkan XAI sebagai praktik akuntabilitas (Lund et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Desain peka nilai untuk ITS yang berpusat pada siswa (penjelasan kolaboratif vs. mentah)
- [[xai-education-framework]] — XAI-ED: kerangka dasar untuk AI yang dapat dijelaskan dalam pendidikan (Khosravi et al. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Penjelasan khas domain membangun kepercayaan dan penerimaan guru (Feldman-Maggor et al. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Perspektif siswa tentang penilaian berbantuan AI yang transparan (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Pelacakan pengetahuan yang dapat diinterpretasikan
- [[explainable-probabilistic-kt]] — Pelacakan pengetahuan yang dapat dijelaskan melalui embedding probabilistik
- [[neural-symbolic-knowledge-tracing]] — Pelacakan pengetahuan neural-simbolik
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Menyuling model kotak hitam menjadi LM yang menjelaskan diri sendiri untuk analitik pembelajaran
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analitik pembelajaran federated dan dapat dijelaskan untuk pemodelan risiko yang menjaga privasi
- [[sc2r-counterfactual-recourse-educational-2026]] — Recourse counterfactual berbatas semantik untuk dukungan keputusan pendidikan
- [[fair-explainable-edu-recommendations]] — Rekomendasi pendidikan yang adil dan dapat dijelaskan
- [[multimodal-affective-its-presentation]] — ITS loop tertutup yang dapat diinterpretasikan untuk umpan balik afektif multimodal
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Menjelaskan adopsi ChatGPT di pendidikan tinggi
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Kerangka LLM yang dapat dijelaskan sejak desain: atensi dua lensa dan penjelasan berparameter skor untuk penilaian guru otomatis (Li et al. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Prompt injection dalam penilaian yang dimediasi AI, ketika deteksi tidak pernah dilaporkan kepada pengguna (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluasi model terlatih untuk penilaian pedagogis atas pertanyaan pendidikan berbantuan AI yang baru

- [[decision-making-agent-student-decision-acceptance-2026]] — Keputusan penilaian oleh guru versus oleh AI: rasional tertulis justru melebarkan kesenjangan keadilan
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Sitasi dan sinyal otoritas menaikkan kepatuhan pada keluaran yang salah, sebagian rujukan salah atribusi atau fiktif
- [[hooshyar-responsible-trustworthy-educational-data-mining-2026]] - model simbolik, sub-simbolik dan neural-simbolik pada satu kohort mengatribusikan prediksi mereka pada faktor yang berbeda

## Kutipan

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
