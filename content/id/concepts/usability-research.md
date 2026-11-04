---
title: "Riset Kegunaan"
created: "2026-08-24T02:15:00-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/usability-research"
source_updated: "2026-10-26T01:30:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Riset kegunaan** — studi empiris tentang bagaimana pengguna berinteraksi dengan sistem perangkat lunak, serta tentang kegunaan, kebermanfaatan, dan pengalaman pengguna (UX) sistem tersebut. Berasal dari interaksi manusia–komputer (HCI), riset kegunaan mengevaluasi apakah alat pendidikan AI dapat digunakan, dapat dipelajari, efisien, dan memuaskan — kualitas yang menentukan apakah pembelajar benar-benar mengadopsi dan memperoleh manfaat darinya. Ia berbeda dari, tetapi melengkapi, [[qualitative-research|inkuiri kualitatif]] atas fenomena belajar dan [[quantitative-research|khasiat kuantitatif]]: riset kegunaan berfokus pada *interaksi antara orang dan sistem*, bukan pada luaran belajar itu sendiri.

## Pertanyaan yang Perlu Dipertimbangkan

- Dapatkah Anda mengingat sebuah alat perangkat lunak — pendidikan atau bukan — yang secara pedagogis sehat atau sungguh kuat, namun Anda berhenti menggunakannya karena membingungkan atau menjengkelkan? Kegagalan itulah yang coba dijelaskan riset kegunaan sebelum ia memakan biaya pembelajaran.
- Asumsi umum adalah bahwa efektivitas pendidikan sebuah alat dapat dinilai dari apakah perolehan belajar meningkat. Namun halaman ini berargumen bahwa alat dapat tidak dapat digunakan dan tetap tampak "bekerja" dalam uji coba, atau dapat digunakan namun gagal mengajar. Mengapa studi yang menunjukkan perolehan belajar masih mungkin melewatkan bahwa alat itu menyulitkan dalam praktik?
- Sebelum membaca metodenya, bagaimana Anda akan mencari tahu apakah tutor AI membingungkan, menjengkelkan, atau rawan kesalahan bagi pembelajar? Apa yang sebenarnya akan Anda lakukan atau amati — dan apa yang akan dilewatkan oleh laporan kepuasan pengguna sendiri namun tertangkap oleh observasi yang cermat?
- Think-aloud adalah metode inti: pengguna mengucapkan pikiran mereka saat bekerja, menyingkap kebingungan dan model mental secara real time. Jika Anda seorang pembelajar yang menggunakan alat AI, apa yang dapat Anda artikulasikan tentang kebingungan Anda yang tidak akan pernah ditangkap survei sederhana "apakah Anda menyukainya?"
- Halaman ini mencatat bahwa kepuasan yang dilaporkan sendiri dapat menyimpang dari kinerja objektif — orang dapat mengatakan menyukai alat yang diam-diam memperlambat mereka, atau meremehkan alat yang sebenarnya membantu. Di mana Anda pernah melihat jurang antara apa yang orang katakan dan apa yang ditunjukkan perilaku mereka?
- Riset kegunaan memberi tahu Anda apakah sebuah alat dapat digunakan, bukan apakah ia mengajar. Jika Anda mengevaluasi alat belajar AI, bagaimana Anda akan memadukan bukti kegunaan dengan bukti belajar — dan apa yang masih mungkin gagal dicapai oleh alat yang lolos keduanya?

## Pendahuluan

Riset kegunaan dan UX menjawab pertanyaan seperti: Dapatkah siswa mengetahui cara menggunakan tutor AI ini? Apakah alat AI itu membingungkan, menjengkelkan, atau rawan kesalahan? Apakah ia cocok dengan alur kerja guru atau pembelajar? Pertanyaan-pertanyaan ini adalah prasyarat bagi — dan kadang penyebab tersembunyi dari — [[learning-gains|perolehan belajar]] (atau ketiadaannya) yang diukur dalam studi khasiat. Alat AI yang secara pedagogis sehat tetapi tidak dapat digunakan akan gagal dalam praktik; bukti kegunaan menjelaskan mengapa.

## Metode inti

- **Protokol think-aloud.** Pengguna mengverbalisasi pikiran mereka saat mengerjakan tugas, menyingkap pemahaman, kebingungan, dan model mental secara real time. [[code-anchor-multi-view-visualization|Sebuah studi tentang visualisasi kode multi-tampilan]] dan [[learn-framework-responsible-genai-pbl-2026|kerangka LEARN]] menggunakan think-aloud untuk memahami bagaimana pembelajar memaknai alat berbantuan AI; [[feedback-futures-genai|masa depan umpan balik]] mengkaji bagaimana pembelajar memproses umpan balik yang dihasilkan AI.
- **Studi pengguna.** Evaluasi terstruktur berbasis tugas mengukur efisiensi, tingkat kesalahan, kepuasan, dan penyelesaian. [[rhaimi-productivemath-2025|ProductiveMath]] mengevaluasi kegunaan aplikasi AI generatif dalam mendukung pengajaran kegagalan produktif; [[supplynet-visual-exploratory-learning|SupplyNet]] menjalankan studi pengguna atas alat belajar eksploratif visual; [[llm-chatbots-cs-multiple-choice|Chatbot LLM untuk pilihan ganda CS]] menilai kualitas interaksi.
- **Wawancara dan observasi.** Wawancara kegunaan kualitatif serta observasi menangkap pengalaman pengguna, preferensi, dan titik kesulitan. [[icub-humanoid-storytelling-llm-hri-2025|Sebuah studi kegunaan atas robot humanoid pendongeng]] menggunakan evaluasi terstruktur untuk menanyakan apakah orang tua akan membiarkan robot itu berinteraksi dengan seorang anak; [[genai-architectural-design-studios|AI di studio desain]] mengamati dan mewawancarai siswa yang menggunakan AI dalam pekerjaan desain autentik.
- **Evaluasi kegunaan sistematis.** Evaluasi heuristik, penelusuran kognitif, dan ukuran UX berbasis kuesioner (misalnya SUS) menilai kegunaan secara sistematis terhadap kriteria yang telah ditetapkan.

## Bagaimana riset kegunaan muncul dalam basis pengetahuan

- **Evaluasi alat belajar AI.** [[rhaimi-productivemath-2025|ProductiveMath]], [[supplynet-visual-exploratory-learning|SupplyNet]], dan [[anvil-ai-educational-animations|animasi pendidikan]] dievaluasi dari segi kegunaan dan UX.
- **Interaksi manusia–robot dan [[conversational-ai|AI konversasional]].** [[icub-humanoid-storytelling-llm-hri-2025|Studi pendongeng humanoid]] adalah studi kegunaan eksplisit atas interaksi bertenaga [[llm]]; [[conversational-ai-agents-umbrella-review-2026|sebuah tinjauan payung atas agen AI konversasional]] mengidentifikasi kegunaan dan kualitas interaksi sebagai tema yang berulang.
- **Desain dan penyempurnaan.** Temuan kegunaan menyuplai desain iteratif (lihat [[design-thinking]] dan [[learning-design]]), memperbaiki alat sebelum atau bersamaan dengan pengujian khasiat.
- **Satu instrumen lintas konteks, dan plafon yang membatasinya.** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça et al. (2026)]] menahan domain, tugas, dan instrumen tetap konstan sementara tingkat pendidikan bervariasi, sehingga penilaian 144 siswa atas 893 jawaban umpan balik dan 237 laporan membandingkan konteks alih-alih disiplin — dan hanya akurasi yang dipersepsikan yang berbeda lintas tingkat. Studi ini juga menamai batas evaluasi pengguna semacam ini: 72.2 hingga 86.4 persen siswa rata-rata memberi setidaknya 4 dari 5, dan para penulis menyatakan bahwa perbedaan tidak signifikan mereka tidak menetapkan kesetaraan karena tidak ada margin yang ditetapkan lebih dulu.
- **Desain penilai yang dilaporkan sebagai bagian dari temuan.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] meminta 25 pakar yang cocok secara domain menilai 92 kuliah yang dihasilkan ulang terhadap rubrik yang berjangkar pada "kualitas kuliah MOOC standar," dengan menugaskan setiap video ke satu peninjau (k = 1) agar panel tersebar pada lebih banyak bagian korpus alih-alih mengumpulkan penilaian berulang. Pertukarannya dimodelkan alih-alih disembunyikan: model intersep-acak mengatribusikan sekitar 35 persen varians sisa kepada peninjau (ICC = 0.35) dan intervalnya diklusterkan menurut peninjau, dan begitulah sebuah panel pakar dapat melaporkan "87 persen pada atau di atas ambang" dengan rentang yang jujur.

## Hubungan dengan keluarga riset lain

Riset kegunaan berbagi metode pengumpulan data dengan [[qualitative-research|riset kualitatif]] (wawancara, observasi, think-aloud) tetapi berbeda dalam *tujuan*: riset kualitatif menafsirkan makna dan pengalaman untuk membangun pemahaman dan teori, sedangkan riset kegunaan mengevaluasi artefak terhadap kriteria kegunaan/UX. Ia juga bertumpang tindih dengan [[ai-ed-evaluation]] (menilai apakah suatu sistem bekerja) dan dengan [[educational-measurement|pengukuran]] (mengkuantifikasi konstruk kegunaan). Basis pengetahuan ini memperlakukan kegunaan sebagai untaian metodologis yang khas tetapi terhubung — relevan bagi [[human-ai-collaboration]], [[student-experience]], dan desain alat belajar AI yang efektif. Lihat [[research-methods-aied]] untuk melihat bagaimana ia masuk ke lanskap metode yang lebih luas.

## Kekuatan dan keterbatasan

- **Kekuatan:** secara langsung mengidentifikasi hambatan kegunaan yang menghalangi adopsi dan pembelajaran; menghasilkan panduan desain yang dapat ditindaklanjuti; melengkapi riset khasiat dan kualitatif dengan menjelaskan *mengapa* sebuah alat bekerja atau gagal saat digunakan; relatif cepat dan murah dibandingkan eksperimen besar.
- **Keterbatasan:** temuan kegunaan tidak menetapkan efek belajar (alat yang dapat digunakan tetap dapat gagal mengajar); sampel kecil dan latar yang spesifik tugas membatasi generalisasi; kepuasan yang dilaporkan sendiri dapat menyimpang dari kinerja objektif; ketergantungan pada peneliti dan desain tugas.

## Miskonsepsi umum

**"Sistem yang dapat digunakan adalah sistem pendidikan yang baik."** Riset kegunaan membahas interaksi antara orang dan sistem, bukan luaran belajar, dan keduanya terpisah dalam dua arah: alat yang secara pedagogis kuat dapat ditinggalkan karena menjengkelkan, dan alat yang mulus dapat tidak mengajarkan apa pun. Kemudahan adalah prasyarat penggunaan, bukan bukti bahwa penggunaannya bermanfaat.

**"Kegunaan adalah aktivitas pemolesan di akhir pengembangan."** Ia adalah keluarga metode dengan teknik inti — observasi, analisis tugas, think-aloud, tinjauan heuristik — yang membentuk desain alih-alih menyelesaikannya. Menemukan titik gesek setelah pedagoginya ditetapkan cenderung menghasilkan entah desain ulang antarmuka di sekitar masalahnya atau ditinggalkannya alat itu.

**"Siswa yang meninggalkan sebuah alat kurang motivasi."** Meninggalkan alat sering merupakan pembacaan yang benar oleh pengguna atas biaya interaksi yang tidak pernah diukur perancangnya. Karena alat yang tidak digunakan siapa pun tidak dapat berefek, tingkat peninggalan itu sendiri adalah luaran pendidikan.

**"Uji kegunaan sama dengan mengukur belajar."** Keduanya menjawab pertanyaan yang berbeda dan tidak saling menggantikan; mode kegagalannya adalah memperlakukan salah satunya sebagai cukup untuk adopsi.

## Konsep terkait

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## Artikel terkait

- [[icub-humanoid-storytelling-llm-hri-2025]] — Studi kegunaan atas robot humanoid pendongeng bertenaga LLM
- [[rhaimi-productivemath-2025]] — ProductiveMath: kegunaan aplikasi AI generatif
- [[supplynet-visual-exploratory-learning]] — Studi pengguna SupplyNet
- [[anvil-ai-educational-animations]] — Kegunaan animasi pendidikan yang dihasilkan AI
- [[code-anchor-multi-view-visualization]] — Studi think-aloud atas visualisasi kode multi-tampilan
- [[learn-framework-responsible-genai-pbl-2026]] — Kerangka LEARN dan evaluasi think-aloud
- [[feedback-futures-genai]] — Bagaimana pembelajar memproses umpan balik yang dihasilkan AI
- [[llm-chatbots-cs-multiple-choice]] — Chatbot LLM untuk pertanyaan pilihan ganda CS
- [[conversational-ai-agents-umbrella-review-2026]] — Tinjauan payung atas agen AI konversasional
