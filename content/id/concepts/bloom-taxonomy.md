---
title: "Taksonomi Bloom"
created: "2026-11-21T04:00:00-05:00"
type: concept
research_method: [literature review]
confidence: high
foundations: [theories-and-frameworks, learning-design, curriculum-design, critical-thinking]
pedagogy: [learning-theories, metacognition, icap-framework, mastery-learning, scaffolding, inquiry-based-learning]
assessment: [assessment, automated-question-generation, automated-assessment, educational-measurement, formative-assessment, assessment-validity]
technology: [generative-ai, llm, machine-learning, educational-nlp]
methods: [quantitative-research, qualitative-research]
connected_concepts: [learning-theories, critical-thinking, metacognition, icap-framework, tpack, mastery-learning, scaffolding, inquiry-based-learning, automated-question-generation, automated-assessment, educational-measurement, assessment-validity, formative-assessment, generative-ai, llm, machine-learning, cognitive-offloading, higher-ed, k-12, curriculum-design]
connected_articles: [austin-bloom-taxonomy-generative-ai-2026, bloom-classifier-ai-assisted-questions-2026, bloom-taxonomy-llm-item-classification-2026, cross-dataset-bloom-question-classification, bloom-aligned-educational-control-llms, llm-educational-question-cognitive-depth, stewart-tag-question-categorization-competency-2026, luo-ibl-patterns-llm-bloom-2026, student-llm-use-ai-question-difficulty-data-science-2026, student-cognitive-offloading-ai-higher-ed-2026]
updated: "2026-11-24T14:04:29-05:00"
translation_of: "concepts/bloom-taxonomy"
source_updated: "2026-11-22T12:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Sintesis** — Taksonomi Bloom mengerjakan dua tugas berbeda dalam [[ai-education|AI dalam pendidikan]], dan mencampuradukkan keduanya menyebabkan sebagian besar perdebatan bidang ini mengenainya. Sebagai **instrumen klasifikasi**, ia mengode tingkat kognitif butir dan keluaran mesin, dan sejumlah karya yang berkembang menunjukkan kode itu rapuh: pengelompok yang dilatih pada bank butir kurasi manusia runtuh pada pertanyaan yang dihasilkan AI, tingkat yang dimaksudkan nyaris tidak menjelaskan kesulitan empiris sebuah butir, dan kesepakatan AI-dengan-fakultas paling baik hanya sedang. Sebagai **kerangka desain dan penurutan**, ia menata tuntutan kognitif, dan di sinilah [[generative-ai|AI generatif]] memicu revisi alih-alih pensiun: rekursi berawalan artefak, urutan terbalik, dan kerangka yang mengukur apakah bantuan memberi perancah atau jalan pintas. Taksonomi itu lebih baik diperlakukan sebagai kosakata bersama yang labelnya perlu divalidasi daripada sebagai tangga yang anak tangganya memprediksi pembelajaran.

## Pertanyaan yang Perlu Dipertimbangkan

- Ketika Anda melabeli sebuah pertanyaan "menganalisis" atau "mengevaluasi", bukti apa yang Anda miliki bahwa siswa yang menjawabnya benar-benar melakukan pekerjaan kognitif itu?
- Jika seorang pengelompok dapat menandai tingkat Bloom sebuah butir, apakah itu memberi tahu Anda sesuatu tentang seberapa sulit butir itu, atau hanya tentang bagaimana rumusannya?
- Seorang siswa menyerahkan esai lancar yang dihasilkan dengan AI. Tingkat Bloom manakah yang dibuktikan artefaknya, dan yang manakah oleh prosesnya?
- Apakah "berpikir tingkat tinggi" selalu menjadi sasaran, atau terkadang kelancaran dasar justru membutuhkan anak tangga yang lebih rendah terlebih dahulu?
- Siapa yang memeriksa keluaran AI terhadap tingkat yang dimaksudkan tugas untuk memunculkannya: siswa, instruktur, atau sistem?

## Pendahuluan

Taksonomi Bloom adalah kosakata yang paling banyak digunakan untuk menggambarkan tuntutan kognitif tugas belajar, dan dalam AI dalam pendidikan ia jarang netral. Ia muncul sebagai skema pengodean bank penilaian, sebagai sasaran yang ingin dicapai [[scaffolding|perancah]], sebagai metrik atas apa yang dapat dihasilkan [[llm|model bahasa besar]], dan sebagai struktur warisan yang dikatakan telah dipatahkan oleh [[generative-ai|AI generatif]]. Taksonomi 1956 menata tujuan pendidikan dari Mengingat hingga Mengevaluasi; revisi Anderson dan Krathwohl 2001 mengganti nama dan menata ulang menjadi enam tingkat yang sekarang biasanya dimaksud: Mengingat, Memahami, Menerapkan, Menganalisis, Mengevaluasi, Mencipta. Piramida yang familiar adalah singkatan visual di kemudian hari, bukan bagian dari kedua versi.

Kegunaan konstruk ini dalam bidang tersebut datang dari menjadi *kosakata bersama*. Risikonya datang dari diperlakukan sebagai *pengukuran*. Label tingkat menggambarkan operasi kognitif yang dimaksudkan suatu tugas untuk memunculkan; ia tidak menggambarkan operasi yang dilakukan pembelajar, kesulitan butir, atau kualitas hasilnya. Sebagian besar literatur era AI adalah perdebatan tentang mana dari ketiga hal itu yang dapat diemban label Bloom.

## Dua pekerjaan: instrumen klasifikasi dan kerangka desain

Pekerjaan pertama bersifat instrumental. Peneliti dan sistem menggunakan taksonomi untuk mengode butir dan keluaran dalam skala besar: bank penilaian yang ditandai menurut tingkat, pertanyaan model yang disortir menurut tingkat yang tampak dituntutnya, dan tugas delegasi siswa yang diklasifikasikan menurut operasi kognitif yang diserahkan. Ini pekerjaan yang paling keras diuji, dan hasilnya mengecilkan hati.

Pekerjaan kedua bersifat arsitektural. Taksonomi menata apa yang diminta pembelajar untuk dilakukan, sehingga ia membentuk [[curriculum-design|kurikulum]], urutan tugas, dan [[rubrics|rubrik]]. Di sini pertanyaannya bukan apakah labelnya akurat melainkan apakah penurutannya benar, dan apakah urutan itu masih berlaku ketika sebuah mesin dapat menghasilkan artefak di puncak urutan. Kedua pekerjaan itu gagal secara berbeda: instrumen klasifikasi gagal ketika labelnya tidak bertahan saat bersentuhan dengan butir nyata; kerangka desain gagal ketika urutannya tidak lagi menggambarkan cara belajar terjadi.

## Bloom sebagai instrumen klasifikasi dalam AIED

Klasifikasi Bloom otomatis adalah subbidang yang mapan dengan masalah generalisasi yang masih hidup. Model yang dilatih pada bank butir kurasi, tulisan manusia, bekerja baik dalam distribusi dan buruk di luar itu. Sebuah pengelompok yang mencetak macro F1 0,88 pada banknya sendiri jatuh ke 0,48 dan 0,20 pada dua set pertanyaan yang dihasilkan AI. Para penulis menelusuri hilangnya kinerja itu ke nyaris tidak adanya kata kerja pemicu Bloom eksplisit dalam teks generatif, bukan ke ukuran model: butir generatif rata-rata jauh lebih panjang (18,2 berbanding 9,3) dan hanya berbagi median 10,5% kata kerja pemicunya dengan korpus kurasi ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]). Karya lintas dataset menceritakan kisah yang sama: model pembelajaran mesin terawasi dan pembelajaran mendalam menurun substansial pada dataset yang belum pernah dilihat, sementara [[llm|LLM]] yang diberi contoh kontekstual dan kata kerja tindakan khusus mata kuliah bertahan ([[cross-dataset-bloom-question-classification|Cross-dataset Bloom classification, 2026]]).

Kesepakatan dengan manusia juga terbatas. Sebuah alat pemetaan kurikuler yang diterapkan pada 62 pertanyaan farmakoterapi mencapai kesepakatan 59,7% dengan penanda fakultas pada Taksonomi Bloom (Cohen's κ = 0,57), yang terkuat dari empat kerangka kompetensi yang diuji, dan tetap hanya sedang ([[stewart-tag-question-categorization-competency-2026|Stewart et al., 2026]]). Sebuah LLM yang mengelompokkan 265 butir matematika hanya sepakat cukup dengan pengode ahli (κ = 0,22) dan menarik butir ke pita Menerapkan/Menganalisis ([[bloom-taxonomy-llm-item-classification-2026|Altaweel & Moussa, 2026]]).

## Apa yang diprediksi dan tidak diprediksi label tingkat

Temuan paling tajam adalah tingkat Bloom yang dimaksudkan nyaris tidak memberi tahu Anda apa pun tentang bagaimana butir berperilaku. Di antara 265 butir matematika empat opsi dari ujian terpusat, tingkat yang dimaksudkan menjelaskan kurang dari 5% varians kesulitan empiris (ε² = 0,043) dan tidak ada varians daya beda, sementara klasifikasi LLM hanya sepakat cukup dengan ahli ([[bloom-taxonomy-llm-item-classification-2026|Altaweel & Moussa, 2026]]). Pola itu berulang di sisi generasi: dalam studi kelas sains data selama 10 minggu, label kesulitan generatif berkorelasi hampir sempurna dengan tingkat Bloom yang dibangkitkan bersamanya, tetapi sama sekali tidak dengan kesulitan empiris ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang, 2026]]). Label menjejaki rumusan yang diminta dari model, bukan pemikiran yang harus dilakukan pembelajar.

Itulah sebabnya taksonomi berada di samping [[educational-measurement|pengukuran pendidikan]] dan [[assessment-validity|validitas]], bukan di dalam keduanya. Kode Bloom adalah klaim tentang tuntutan kognitif yang dimaksudkan; apakah klaim itu berlaku adalah pertanyaan pengukuran, dan buktinya mengatakan biasanya tidak.

## Bloom sebagai kerangka desain dan penurutan

Pekerjaan desain telah menghasilkan argumen era AI yang lebih berakibat. Austin, Gulya, dan Kassorla berpendapat bahwa [[generative-ai|AI generatif]] memutus asumsi di mana penggunaan taksonomi dalam [[assessment|penilaian]] bertumpu, yaitu bahwa produk jadi membuktikan pemikiran yang menghasilkannya ([[austin-bloom-taxonomy-generative-ai-2026|Austin et al., 2026]]). Pembacaan mereka bersifat historis sebanyak teknis: piramida adalah salah baca terhadap taksonomi yang bersifat hierarkis dalam maksud tetapi tidak pernah digambar demikian, dan citra tangga yang membuat produk tampak seperti bukti. Respons mereka mempertahankan enam tingkat dan mengubah urutan atau titik masuknya. Bloom terbalik dimulai dari Mencipta dan turun, sehingga ketergantungan pada alat paling tinggi di tempat pembelajar paling sedikit memiliki apa untuk memeriksanya; UnBlooms memperumum gerakan itu menjadi rekursi berawalan artefak, di mana bukti yang dapat dinilai adalah pertanyaan, adaptasi, dan arahan yang diterapkan pembelajar pada draf buatan mesin.

Garis sejajar mengukur pertanyaan desain secara langsung. Kerangka selaras Bloom untuk [[llm|LLM]] memperlakukan "kendali pendidikan" sebagai kemampuan mempertahankan maksud instruksional tugas sambil menggeser tuntutan kognitifnya ke tingkat lebih tinggi, metrik untuk apakah bantuan memberi perancah atau jalan pintas ([[bloom-aligned-educational-control-llms|Bloom-aligned educational control, 2026]]). Yang lain memakai tingkat itu secara analitis: studi eksploratif atas siswa yang bekerja dengan LLM selama tugas menulis sains data [[inquiry-based-learning|berbasis inkuiri]] mengidentifikasi empat belas pola interaksi yang tersebar di seluruh tingkat kognitif ([[luo-ibl-patterns-llm-bloom-2026|Luo et al., 2026]]), dan evaluasi enam model menemukan bahwa sistem menghasilkan butir pengingat fakta dengan baik dan butir tingkat tinggi dengan buruk ([[llm-educational-question-cognitive-depth|Wang et al., 2026]]).

## Implikasi untuk desain dan penelitian

- **Validasi labelnya, jangan mengandaikannya.** Perlakukan tingkat Bloom sebagai klaim tentang tuntutan yang dimaksudkan dan periksa terhadap perilaku butir empiris sebelum menggunakannya untuk argumen [[assessment-validity|validitas]].
- **Harapkan peluruhan pengelompok.** Pengelompok Bloom dipasang pada sebuah korpus, jadi laporkan kinerja di luar distribusi bersama kecocokan di dalam distribusi, dan utamakan [[llm|LLM]] dengan prompt atau pelatihan ulang pada butir domain target berlabel.
- **Nilai prosesnya, bukan hanya artefaknya.** Jika produk dapat dibuat mesin, bukti yang dapat dinilai bergeser ke interogasi, adaptasi, dan arahan yang diterapkan pembelajar.
- **Pertahankan kosakatanya, buang tangganya.** Enam tingkat tetap bahasa bersama yang berguna untuk tuntutan yang dimaksudkan; urutan kaku dari bawah ke atas adalah bagian yang dibuat tak tertahankan oleh AI.
- **Gunakan sebagai lensa analitis di tempat yang cocok.** Mengode tugas delegasi menurut tingkat dapat menggambarkan apa yang diserahkan pembelajar pada sistem, seperti ketika mahasiswa sarjana mengalihdayakan paling banyak pada tingkat Mencipta, tetapi ode itu menggambarkan perilaku, bukan pembelajaran ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]).

## Miskonsepsi Umum

**"Label Bloom memberi tahu Anda seberapa sulit sebuah butir."** Di antara 265 butir matematika, tingkat yang dimaksudkan menjelaskan kurang dari 5% varians kesulitan. Label menggambarkan tuntutan kognitif yang dimaksudkan, bukan perilaku empiris.

**"Taksonomi adalah piramida, dan pembelajaran memanjatnya."** Piramida adalah singkatan visual kemudian; baik versi 1956 maupun revisi 2001 tidak digambar sebagai piramida, dan argumen era AI justru menyatakan bahwa produk jadi di puncak tidak lagi membuktikan panjatan itu.

**"AI sekarang dapat mengklasifikasikan tingkat kognitif dengan andal."** Kinerja pengelompok dalam distribusi tidak bertahan saat sumber butir berubah, dan kesepakatan AI-fakultas pada bank pertanyaan nyata paling baik sedang (κ = 0,57 dalam kasus terkuat).

**"AI generatif membuat Taksonomi Bloom usang."** Ia membuat satu *penggunaan* taksonomi itu, yaitu membaca produk sebagai bukti proses, tak tertahankan. Sebagai kosakata bersama untuk tuntutan yang dimaksudkan, dan sebagai objek yang divalidasi, ia masih menjadi titik acuan bersama bidang ini.
