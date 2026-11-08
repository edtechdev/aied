---
title: "Pelatihan dan Penyetelan Halus LLM"
created: "2026-05-07T10:44:35-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/llm-training-and-fine-tuning"
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

> **Pelatihan dan Penyetelan Halus LLM** — bagaimana model AI pendidikan dibuat: pipeline dari pra-pelatihan melalui pasca-pelatihan hingga adaptasi, berapa biaya setiap tahap, dan apa yang dikatakan bukti tentang manfaatnya. Masalah pengorganisasiannya adalah **ketidaksesuaian insentif**: model serbaguna dioptimalkan untuk menjawab, sementara mengajar menuntut menahan jawaban. Pasca-pelatihan dan penyetelan halus adalah dua tuas yang mengubah perilaku itu, dan hasil paling jelas dalam basis pengetahuan ini adalah bahwa keduanya merupakan pilihan *ketiga*, bukan yang pertama — pengambilan dan prompting datang lebih awal dalam urutan keputusan, dan satu studi di sini menemukan penyetelan halus terawasi gagal pada tugas yang justru dimenangkan prompting biasa ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Ditulis untuk [[educational-technology-developers|pengembang perangkat lunak pendidikan]] dan praktisi pengajaran yang sedang memutuskan apa yang akan dibangun.

## Pertanyaan yang Perlu Dipertimbangkan

- Jika Anda memiliki tugas tutoring di mana model serbaguna menjawab terlalu cepat, apakah langkah pertama Anda adalah prompt yang lebih baik, pengambilan atas materi Anda sendiri, atau pelatihan? Apa yang perlu Anda ukur untuk mengetahui mana yang membantu?
- Penyetelan halus membutuhkan data. Dari mana contoh pelatihan proyek Anda akan berasal, siapa yang memilikinya, dan tinjauan privasi seperti apa yang dibutuhkan sebelum data itu dapat digunakan?
- Satu studi di sini menemukan bahwa penyetelan halus sebuah model pada data penilaian meningkatkan *pemformatan dan kemiripan* sementara penyetelan halus terpisah gagal sepenuhnya dalam menghasilkan umpan balik. Apa yang disarankan hal itu tentang mencocokkan metode pelatihan dengan tugasnya?
- Pasca-pelatihan dengan pembelajaran penguatan dapat mengajari model untuk memandu alih-alih menjawab. Imbalan seperti apa yang akan Anda tulis untuk menangkap "memandu dengan baik", dan bagaimana model akan memainkannya?
- Basis pengetahuan melaporkan bahwa pilihan model dan prompt hanya menyumbang sekitar 15% dari kesenjangan antara LLM dan [[learning-gains|perolehan belajar]] siswa. Jika itu benar, bagaimana hal itu seharusnya mengubah keputusan membangun-versus-membeli Anda?
- Model yang disetel halus dan akurat tetap bisa tidak aman sepanjang percakapan panjang. Apa yang akan Anda uji sebelum membiarkannya berbicara dengan siswa tanpa pengawasan?

## Pendahuluan

Pengembangan AI pendidikan menabrak dinding yang sama dari dua arah. Model bahasa serbaguna dipasca-latih pada preferensi manusia akan kegunaan, yang dalam praktiknya berarti menjawab dengan cepat dan lengkap; tutoring menuntut yang sebaliknya, karena [[pedagogy|tujuan pedagogis]]nya adalah membantu siswa mencapai jawaban alih-alih menyerahkannya. Pada saat yang sama, model serbaguna tidak tahu apa pun tentang kurikulum Anda, rubrik Anda, atau suara institusi Anda, dan tidak ada jumlah rekayasa prompt yang secara andal menanamkan hal-hal itu.

Halaman ini membahas teknik yang mengubah model alih-alih teks yang Anda kirimkan kepadanya. Teknik-teknik itu berada pada **tangga komitmen yang meningkat**: prompting, lalu pengambilan, lalu adaptasi hemat parameter, lalu penyetelan halus penuh, lalu pasca-pelatihan dengan sinyal preferensi atau imbalan. Setiap tingkat menelan lebih banyak data, lebih banyak komputasi, dan lebih banyak disiplin evaluasi daripada tingkat sebelumnya, dan setiap tingkat merupakan pilihan pertama yang lebih buruk daripada tingkat di bawahnya kecuali ada pengukuran spesifik yang membenarkan pendakian itu. Sebagian besar literatur penelitian hanya melaporkan puncak tangga itu, yang membuat pengembang mudah menjangkau pelatihan padahal pengambilan sudah cukup.

Halaman ini diorganisasi di sekitar keputusan yang benar-benar dihadapi pembangun: tuas mana yang ditarik (bagian ini dan bagian berikutnya), apa yang dibeli dan dibiayai adaptasi dalam praktik, apa yang dapat dibentuk pasca-pelatihan dan tidak dapat dibentuk adaptasi, dan bagaimana sistem ini gagal. Terminologi digunakan dalam pengertian standarnya: **pra-pelatihan** adalah tahap dari nol pada korpus umum, **pasca-pelatihan** adalah segala sesuatu sesudahnya yang membentuk perilaku (penyetelan halus terawasi, optimasi preferensi, pembelajaran penguatan), dan **penyetelan halus** mencakup tahap terawasi dari pasca-pelatihan sekaligus kerja adaptasi tugas atau domain yang kemudian, termasuk metode hemat parameter.

## Pipeline pelatihan, tahap demi tahap

Tiga tahap, dengan keterjangkauan yang sangat berbeda. Mengetahui tahap mana yang sedang dijelaskan sebuah makalah mencegah sebagian besar kesalahan pembacaan literatur ini.

**Pra-pelatihan** membangun model dasar dari korpus teks umum. Ini adalah tahap yang menghasilkan kapabilitas luas model, dan tahap ini praktis di luar jangkauan setiap proyek pendidikan: biayanya diukur dalam jutaan dolar dan datanya adalah perayapan berskala web. Tidak ada apa pun dalam basis pengetahuan ini yang melakukannya. Relevansinya bagi praktisi bersifat diagnostik alih-alih operasional — data pra-pelatihan adalah tuas dominan atas bagaimana model berperilaku, dan itulah satu-satunya tuas yang tidak dapat Anda tarik. Asimetri itulah sebabnya semua teknik lain di bidang ini beroperasi pada model yang sudah terlatih.

**Pasca-pelatihan** membentuk perilaku di atas model dasar. Penyetelan halus terawasi (SFT) mengajari model meniru demonstrasi; optimasi preferensi dan pembelajaran penguatan kemudian mendorongnya ke arah keluaran yang dinilai lebih tinggi oleh model imbalan atau sekumpulan penilaian manusia. Ini adalah tahap ketika model dapat diajari memandu alih-alih menjawab, dan di sinilah hasil pendidikan paling mencolok berada. Ini juga tahap yang paling sensitif terhadap desain imbalan, karena imbalan adalah spesifikasi terkompresi tentang apa yang Anda inginkan dan model mengoptimalkan apa pun yang benar-benar Anda tulis.

**Adaptasi** mencocokkan model yang sudah ada dengan tugas atau domain Anda, biasanya dengan data dan komputasi yang jauh lebih sedikit. Penyetelan halus hemat parameter (PEFT), yang bentuk umumnya adalah LoRA, melatih sejumlah kecil parameter tambahan dan membiarkan bobot dasar tetap beku. Penyetelan halus penuh memperbarui semuanya. Distilasi dan unlearning berdiri di sampingnya. Bagian-bagian di bawah membahas masing-masing secara bergiliran. Bagi sebagian besar pengembang pendidikan inilah tahap praktisnya — tahap ketika beberapa ratus hingga beberapa ribu contoh dan satu GPU dapat menghasilkan model yang layak diterapkan.

## Prompt, pengambilan, atau pelatihan? Keputusan yang datang lebih dulu

Hasil tunggal terkuat dalam basis pengetahuan ini tentang pertanyaan itu adalah studi pengambilan, bukan studi pelatihan. Saat membangun asisten basis pengetahuan mata kuliah, Shen dan rekan (2026) mengevaluasi model lokal dalam tiga konfigurasi dan menemukan bahwa **pengambilan, bukan modelnya, adalah keputusan desain tingkat pertama**: LLM lokal mereka tanpa pengambilan hanya mencapai akurasi **52.3%**, *di bawah* garis dasar TF-IDF sebesar **55.4%**, sementara menambahkan [[rag|retrieval-augmented generation]] tanpa penyetelan halus sama sekali mengangkatnya ke **66.6%** ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Konfigurasi penyetelan halus yang juga mereka uji dilaporkan bersama ablasi pengambilan, kuantisasi dan energi per kueri, yang membuat perbandingannya luar biasa jujur: model dasar tanpa landasan dapat lebih buruk daripada metode leksikal berusia puluhan tahun, dan perbaikan termurah bukanlah pelatihan.

Apa yang benar-benar dibangun bidang ini mencerminkan urutan serupa. Tinjauan terpandu [[meta-analysis-systematic-review|PRISMA]] atas 23 studi empiris (2020–2025) tentang penyesuaian AI untuk [[writing-education|pengajaran menulis]] menemukan **rekayasa prompt dominan (N = 13), mendahului penyetelan halus (N = 7) dan arsitektur hibrida (N = 3)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Temuan yang lebih tajam dari tinjauan itu adalah ketidakselarasan struktural alih-alih peringkat teknik: tujuan pedagogis yang dinyatakan telah bergerak menuju proses menulis, [[feedback-literacy|literasi umpan balik]] dan keterampilan akademik tingkat tinggi, sementara implementasi yang dominan masih mengejar tujuan berorientasi produk melalui desain prompt atau penyetelan halus.

Ketika prompting dan pelatihan dibandingkan secara langsung, hasilnya bergantung pada tugasnya, yang justru menjadi alasan keputusan itu harus diukur alih-alih diasumsikan:

- **Pelatihan menang ketika sasarannya adalah format keluaran yang stabil atau sifat yang terkendali.** Pada pembuatan butir otomatis untuk penilaian menyimak L2, penghalusan prompt berulang mencapai dataran, dan penyetelan halus GPT-4.1 *pada prompt yang telah dioptimalkan* kemudian meningkatkan generasi melampaui prompting saja — mengisolasi adaptasi model, alih-alih desain prompt, sebagai pendorong keuntungan yang tersisa ([[gpt-item-generation-l2-listening-2026]]).
- **Prompting menang ketika sasarannya adalah teks yang sarat penilaian.** Sistem yang sama yang berhasil disetel halus untuk *penilaian skor* gagal pada *umpan balik*: dalam WrAFT, modul GPT-4o yang disetel halus mencapai QWK 0.84 dan RMSE 0.44 pada 360 esai TOEFL yang disisihkan, tetapi penyetelan halus terawasi untuk generasi umpan balik menghasilkan keluaran terpotong dan tak terurai, sementara prompting langsung pada Claude 3.7 menghasilkan umpan balik yang dinilai guru paling baik ([[wraft-automated-writing-evaluation-argumentative-2026]]). Penyetelan halus mengajari model mencapai skor; ia tidak mengajarinya menulis.
- **Pembentukan di tingkat prompt dapat menggantikan pelatihan ketika sasarannya adalah persona atau rubrik.** Prompting terpandu rubrik, yang disempurnakan bersama secara iteratif, menaikkan kesepakatan LLM–manusia atas karya desain siswa dari **54.75% menjadi 81.25%** (Cronbach's Alpha 0.393 → 0.798) tanpa penyetelan halus apa pun ([[yasar-llms-iterative-pedagogical-design-2026]]), dan prompt custom-GPT berbasis literatur memunculkan [[misconceptions|miskonsepsi matematika]] sasaran pada kehadiran **0.98** dibandingkan **0.40** untuk prompt luas ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Ada batas atas bagi semuanya.** Hardy dan Kim (2026) memperkirakan bahwa pilihan model dan prompt bersama-sama hanya menyumbang sekitar **15%** dari ketidakselarasan antara LLM dan perolehan belajar siswa, dengan sisanya terbagi lintas model, dan mereka menemukan bahwa ansambel pembobotan tolok ukur dan pemungutan suara bulat membuat keselarasan *lebih buruk* ([[educational-llm-alignment]]). Jika data pra-pelatihan adalah tuas dominan dan itulah tuas yang tidak dapat Anda tarik, maka ekspektasi tentang apa yang dapat dicapai teknik mana pun di sini harus dikalibrasi sesuai itu.

## Apa yang dibeli penyetelan halus: kendali atas skala

Ketika model serbaguna tidak dapat dibuat memegang sifat yang Anda butuhkan, penyetelan halus pada kumpulan data sederhana sering kali bisa — dan hasil yang berulang adalah bahwa *penyasaran mengalahkan ukuran*. Tiga model 8B yang disetel halus pada kurikulum bacaan anak yang dirancang ahli mengungguli GPT-4o zero-shot dan Llama 3.3 70B pada metrik terkait kesulitan, dengan masalah keselamatan yang dapat diabaikan. Penulisnya membingkainya sebagai **kendali atas skala**, karena model ringkas dapat disetel ke tingkat bacaan dan pola kesalahan tertentu dengan cara yang tidak dapat diminta dari model serbaguna ([[llm-children-reading-story-generation]]).

Polanya berulang pada tugas-tugas yang sangat berbeda:

- **Landasan kurikulum.** Kumpulan data instruksi multibahasa 24,795 contoh yang berlandaskan Sistem Pengetahuan India menghasilkan model 7B yang disetel halus dengan skor **6.39** pada panel eksternal lima juri (median atas 1,201 butir terstratifikasi). Itu berada dalam **0.15** dari model rujukan umum yang kuat dengan sebagian kecil biaya penerapan — sementara model dasar yang sama mendapat skor **mendekati nol pada dimensi khusus IKS** tanpa penyetelan halus ([[iks-instruct-dataset-indian-knowledge]]). Kesenjangan antara "kompeten secara umum" dan "kompeten di sini" itulah seluruh alasan adaptasi domain. Perhatikan juga detail berlawanan intuisi yang dilaporkan penulis: kualitas **tidak** naik secara monoton seiring kurasi data.
- **Data terstruktur [[curriculum-design|kurikulum]] hemat sampel.** Di bawah anggaran yang disamakan sekitar 2,300 sampel, penyetelan halus pada pasangan pertanyaan–jawaban yang diturunkan dari [[knowledge-graph|graf pengetahuan]] K–12 buku teks People's Education Press mengalahkan potongan berukuran setara dari delapan korpus instruksi arus utama, dan keuntungannya bertransfer melampaui mata pelajaran yang dilatih, bukti bahwa struktur kurikulumlah yang membedakan data pelatihan pendidikan ([[liang-k12-kgraph-curriculum-knowledge-graph-2026|Liang dan rekan (2026)]]).
- **Keandalan penilaian, dengan murah.** Satu adaptor LoRA yang dilatih pada sekitar **3,900** contoh bergradasi gabungan membawa lima model terbuka kecil (4B–30B) ke setara atau lebih baik daripada penilai manusia pada dua ujian ilmu komputer, dan hampir menghapus sensitivitas persona (drift ≤ 0.32 MAE) ([[llm-graders-computer-science-exams-2026]]). Satu adaptor, satu kumpulan data, beberapa model dasar — inilah bentuk penerapan yang praktis.
- **Otomasi selektif.** Keyakinan adalah prediktor kesalahan penilaian yang andal (β = −0.602, p < .001). Mengarahkan **20%** respons dengan keyakinan terendah ke tinjauan manusia memindahkan model GPT-3.5 yang disetel halus dari r = 0.781 ke **r = 0.822** (RMSE 0.5990 → 0.5544) sekaligus memangkas kerja penilaian manual sekitar **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]). Penyetelan halus di sini tidak menggantikan manusia; ia membuat perhatian manusia terjangkau.
- **Mengukur konstruk yang biasanya Anda nilai manual.** Transformer Hungaria yang disetel halus (hubert-base-cc, PULI-BERT-Large) ditolok ukur terhadap fitur TF-IDF dan embedding Qwen3 untuk menilai [[reflection|tulisan reflektif]] dalam [[teacher-education|pelatihan guru]] ([[reflection-level-classification-hungarian-essays-2026]]), dan model [[multimodal]] yang disetel halus (berbasis Qwen3.5) terbukti dapat merekonstruksi kurva karakteristik butir untuk butir pilihan ganda, mempelajari pola respons yang terkode dalam kurva 3PL dan MCM alih-alih diberi tahu ([[multimodal-item-parameter-estimation-2026]]).

## Adaptasi hemat parameter dalam praktik

LoRA dan kerabatnya adalah tempat sebagian besar tim pendidikan benar-benar akan bekerja, dan literatur memuat panduan yang luar biasa spesifik tentang bagaimana keduanya berperilaku.

**Peringkat adalah kompromi, bukan tombol untuk dimaksimalkan.** Lu dan rekan (2026) membangun 360 dialog sistem–pengguna–asisten dari mata kuliah Linear Control Systems, merestrukturisasi jawaban ke format Solution–Method–Teaching-Points, dan menerapkan LoRA pada Qwen2.5-3B dan 7B pada peringkat 4, 8 dan 16. Cakupan keluaran terstruktur bergerak dari mendekati nol pada dasar ke sekitar **1.00**, dan konfigurasi terbaik (7B, r = 16) mencapai ROUGE-L **0.4093** dengan interval kepercayaan bootstrap untuk keuntungannya sepenuhnya di atas nol. Namun **keuntungan per juta parameter adaptor turun secara monoton seiring naiknya peringkat**, sehingga keselarasan tingkat mata kuliah adalah kompromi skala-dan-peringkat alih-alih peningkatan gratis ([[lora-finetuned-control-systems-course-qa-2026]]). Metrik mereka mengukur kemiripan dan pemformatan, bukan akurasi derivasional, yang merupakan peringatan standar bagi seluruh keluarga evaluasi ini.

**Skala tidak memprediksi keberhasilan, dan pengaturan identik berperilaku berbeda lintas arsitektur.** AiAWE, sistem penilaian tulisan otomatis sumber terbuka yang dibangun di atas Gemma-3-27B-it yang diadaptasi LoRA, mencapai RMSE 0.474, QWK 0.828, dan kesepakatan dalam ±0.5 dari skor manusia pada **90.56%** dari 360 esai evaluasi, mengungguli LLaMA-3.3-70B dan garis dasar GPT-3.5 yang disetel halus — sambil berjalan di server kelas konsumen. Tiga temuan yang lebih luas lebih penting daripada skornya: skala model **bukan** prediktor andal kinerja hilir di bawah adaptasi LoRA, **hiperparameter LoRA yang identik menghasilkan perilaku adaptasi yang berbeda secara kualitatif lintas arsitektur**, dan model terbuka berukuran sedang yang disetel dengan baik dapat bersaing dengan sistem milik perusahaan ([[aiawe-automated-writing-evaluation]]).

**Lapisan mana yang diadaptasi adalah keputusan nyata.** Dalam sistem analisis wacana untuk pengajaran bahasa Inggris, penyetelan halus BERT terpotong dengan memperbarui **hanya empat lapisan Transformer terakhir** mengalahkan kedua alternatifnya: mengadaptasi hanya lapisan teratas mencapai batas atas yang lebih rendah, dan penyetelan halus 12 lapis penuh mengalami overfit dan berosilasi ([[bert-discourse-english-teaching-2026]]).

**Arsitektur dasar dapat lebih penting daripada jumlah parameter.** Penyetelan halus tiga model teks-ke-gambar terbuka pada 1,000 gambar teknik nuklir berjudul meningkatkan Stable Diffusion XL secara substansial, memberi keuntungan terbatas bagi SD-v3.5-Medium, dan **tidak menghasilkan perbaikan terukur sama sekali bagi model flow-matching Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]). Resep penyetelan halus tidak portabel lintas arsitektur, pelajaran yang sama yang dilaporkan AiAWE dari arah sebaliknya.

**Biaya adaptasi dan selera data dapat diukur, dan keduanya mendukung proses yang kecil dan tersasar.** Jung dkk. (2025) menyetel halus Mistral-7B-Instruct-v0.2 dengan LoRA menjadi CLST, sebuah pelacak pengetahuan, dan melaporkan tagihan tingkat sesi sekitar **6,8 jam dan 1,7 kWh** pada RTX A6000 untuk proses 21 ribu sampel, dibandingkan **50 detik dan 3,47 Wh** untuk garis dasar AKT — sekitar **490x** lebih hemat energi ([[jung-clst-cold-start-knowledge-tracing-2025|Jung dkk. (2025)]]). Penyetelan halus yang sama tetap akurat pada data tipis: kalibrasi keluaran pulih saat set pelatihan tumbuh dari **16 menjadi 64 siswa**, dan CLST mengalahkan model terbaik kedua hingga **24,52%** dengan hanya 8 siswa pelatihan, menjadikan margin akurasinya pertukaran yang berbiaya alih-alih kemenangan gratis.

Dua teknik yang berdekatan melengkapi tahap adaptasi. **Distilasi** memampatkan sistem besar atau kotak hitam menjadi sistem kecil yang dapat diterapkan. Pipeline dua tahap mendistilasi estimator ML kotak hitam yang terpasang beserta interpretasi pasca-hoc-nya ke dalam LLM berbobot terbuka kecil, dengan "mentee" berparameter 2B mencapai pemulihan hampir tanpa kehilangan atas permukaan efek oracle (r > .90). Hasil itu dilaporkan di bawah evaluasi yang mengutamakan kesetiaan, yang mengaudit setiap narasi terhadap atribusi yang diklaimnya ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Unlearning** menghapus konten yang disasar setelah pelatihan: unlearning berbasis gradien diterapkan pada tiga model untuk mencabut PII dan konten berbahaya, diuji dalam dua urutan penghapusan (PII lebih dulu dan konten berbahaya lebih dulu) ([[llm-unlearning-math-privacy]]) — alat yang relevan ketika model telah menghafal sesuatu yang seharusnya tidak dibawanya.

## Pasca-pelatihan: membentuk perilaku, bukan hanya format

Adaptasi mengajari model *apa yang harus dihasilkan*; pasca-pelatihan mengajarinya *bagaimana berperilaku*. Di sinilah hasil pedagogis paling mencolok, dan di sinilah desain imbalan atau sinyal preferensi menentukan segalanya.

**Hasil pipeline.** Singh dan rekan (2026) mengubah Qwen3-32B menjadi EduQwen melalui tiga tahap — RL awal, SFT sintetis, RL akhir — mencapai **96.52%** pada tolok ukur CDPK dan melampaui **90.55%** milik Gemini-3 Pro. Hasil antara adalah bagian yang instruktif: tahap RL pertama saja mencapai 94.13%, SFT pada 40,000 respons yang dihasilkan sendiri mengangkatnya ke 96.20%, dan putaran RL terakhir menambahkan sebagian kecil terakhir. Model imbalan memprioritaskan **respons yang memandu di atas jawaban langsung**, penambangan negatif keras mengecualikan pertanyaan yang sudah dipecahkan model dasar, dan rollout diperpanjang dari 5 menjadi 8 langkah untuk menangkap keputusan pedagogis multi-langkah ([[singh-eduqwen-pedagogical-rl-2026]]). Terhadap itu, Pedagogy Benchmark — yang diambil dari ujian [[teacher-role|pengembangan profesional guru]] sungguhan lintas **97 model** — menemukan akurasi berkisar dari **28% hingga 89%**, bukti bahwa pengetahuan pedagogis tidak diperoleh secara insidental selama pra-pelatihan umum ([[cdpk-pedagogy-benchmark-llms|Lelièvre dkk., 2025]]).

**Melatih keputusan alih-alih ujaran.** TACT memasca-latih seorang tutor pada taksonomi 13 strategi plus taksonomi gerakan siswa dua sumbu dan memperoleh **20.30 poin** di atas tulang punggung Qwen3.5-4B-nya, dengan tolok ukur diagnostik yang menahan label keadaan pembelajar yang tersedia selama pelatihan sehingga model harus menyimpulkan keadaan dari dialog ([[tact-pedagogically-adaptive-esl-tutoring]]). Logika yang sama muncul dalam Special-R1 untuk keselarasan [[special-education|pendidikan khusus]] ([[special-r1-rl-special-education]]) dan dalam kerja RL heuristik yang menyelaraskan model sebagai pemandu [[socratic-method|Sokratik]] alih-alih penjawab ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Pasca-pelatihan tidak harus hanya membentuk apa yang dikatakan model: satu platform memasangkan [[conversational-ai|chatbot]] tutoring terjaga dengan agen pembelajaran penguatan yang memilih soal latihan berikutnya, sehingga kebijakan yang dilatih memutuskan apa yang dilakukan pembelajar selanjutnya ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Model penalaran terdistilasi.** Rute yang lebih murah menuju perilaku pedagogis adalah mengajari model kecil meniru model besar: Pedagogy-R1 (1.5B dan 7B) diinstruksi-tune pada keluaran tersaring pedagogis yang didistilasi dari guru QwQ-32B, dipasangkan dengan prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Pasca-pelatihan terkondisi instruksi versus data autentik.** LearnLM membingkai pelatihan model pendidikan sebagai *mengikuti instruksi pedagogis*, membawa instruksi tingkat sistem yang memungkinkan pengembang dan guru menentukan perilaku tutor tanpa berkomitmen pada satu definisi pedagogi. Ia dicampurkan ke tahap pasca-pelatihan Gemini melalui pelatihan bersama, dan para ahli lebih menyukainya daripada GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) dan Gemini 1.5 Pro dasar (**+13%**). Temuan kuncinya adalah bahwa **RL jauh lebih efektif daripada SFT saja** untuk mengikuti instruksi pedagogis yang bernuansa dalam percakapan panjang ([[learnlm-improving-gemini-learning]]). TeachLM mengambil taruhan sebaliknya: bahwa [[prompt-engineering|rekayasa prompt]] adalah tambalan sementara dan bahan yang langka adalah data interaksi pembelajar–tutor yang *autentik*. Dilatih pada **100,000 jam** sesi satu-satu di bawah anonimisasi ketat, ia menggandakan waktu bicara siswa, memperbaiki gaya bertanya, dan menambah giliran dialog sebesar **50%** ([[teachlm-post-training-llms-education]]). Bersama-sama keduanya mendefinisikan ruang desain: pasca-pelatihan terkondisi instruksi ketika data Anda langka, penyetelan halus pada interaksi tutoring nyata ketika Anda memilikinya.

**Kualitas supervisi mengalahkan kuantitas supervisi.** Progresi SWIM untuk [[simulation|simulator menulis]] adalah demonstrasi paling bersih. Prompting berlandaskan rubrik memberi kendali kemahiran yang terbatas (rata-rata QWK sifat terbaik 0.577 untuk Claude Sonnet, 0.422 untuk GPT-5.4, mendekati nol untuk model 7B terbuka); penyetelan halus terawasi mengangkat model 7B itu ke **0.474 ± 0.023**. GRPO terhadap imbalan yang diturunkan dari penilaian esai otomatis mengangkatnya lebih jauh ke **0.618 ± 0.005** pada setiap sifat dan prompt, dengan imbalan dirancang sebagai akurasi ternormalisasi sifat yang padat karena imbalan kecocokan eksak terlalu jarang dalam latar banyak sifat ([[swim-student-writing-simulation-2026]]). Studi pemodelan miskonsepsi mencapai kesimpulan yang lebih tajam tentang *apa* yang harus dimuat supervisi: model yang diinstruksi-tune hanya mempelajari miskonsepsi aljabar ketika dilatih pada **jejak solusi tingkat langkah**, dengan akurasi tetap **di bawah 30% pada setiap ukuran data** ketika dilatih pada jawaban akhir saja. Peran siswa dalam sistem itu menggeneralisasi secara berlebihan kesalahan yang dipelajarinya sampai contoh benar dicampurkan secara eksplisit pada rasio serendah **satu dari empat**, sementara peran tutor tidak menunjukkan biaya semacam itu, mempertahankan akurasi benar dari **93% hingga 98%** pada sepuluh miskonsepsi yang dilatih bersama ([[misconception-acquisition-dynamics-llms-2026]]).

Data pelatihan itu sendiri adalah sesuatu yang dapat dikurasi model: Edu-QuRating mengadaptasi distilasi preferensi ke kurasi data pendidikan, menggantikan satu skor tunggal "apakah ini edukatif?" dengan 20 dimensi rubrik yang mencakup akurasi faktual, struktur pedagogis dan kesesuaian tingkat ([[garrod-edu-qurating-educational-data-curation-2026]]).

**Teori dapat menjadi perancah pelatihan.** Bagi agen yang mengotomasi [[learning-design|desain sistem instruksional]], hibrida kerangka klasik ADDIE dan Dick & Carey dengan penalaran bergaya ReAct mengungguli baik teori murni (terstruktur tetapi tidak fleksibel) maupun agen berbasis teknik saja (fleksibel tetapi tanpa landasan), pada **25,795** skenario dari matriks konteks 51 variabel dengan protokol multi-juri untuk mengurangi bias LLM-sebagai-juri ([[jeon-isd-agent-bench-2026]]). Dan sebuah studi tentang *label* supervisi menemukan bahwa menetapkan satu perilaku sasaran pada setiap contoh pelatihan — kompetensi mata pelajaran, landasan kurikulum, penalaran diagnostik, atau [[scaffolding|perancah]] — mengangkat setiap skala model yang diuji, dengan keuntungan terbesar pada perancah dan pada penggunaan riwayat pembelajar, sementara diagnosis keadaan pengetahuan tetap paling lemah pada **54.04%** ([[omniedu-open-educational-foundation-models-2026]]).

## Melatih sisi pembelajar, bukan hanya tutor

Mesin yang sama semakin diarahkan untuk menyimulasikan siswa, yang mengubah ekonomi evaluasi tutor: alih-alih merekrut pembelajar, Anda menghasilkannya.

Kewaspadaannya adalah siswa simulasi harus divalidasi seperti instrumen lain mana pun. Menjalankan tolok ukur atas model yang disetel halus dan diprompt pada **382 dialog yang disisihkan** dari korpus publik terbesar dialog matematika siswa–tutor nyata — melintasi tujuh metrik yang mencakup aspek linguistik, perilaku dan kognitif — menghasilkan uji paling langsung di bidang ini tentang apakah siswa simulasi berperilaku seperti siswa ([[simulated-students-tutoring-dialogues-2026]]). Dua pendekatan lanjutan mendorong kesetiaan: INSIDE menyetel halus LLM agar *berperan* dan *berpikir* seperti siswa, menghasilkan dialog internal yang berlandaskan Taksonomi Bloom pada dimensi kognitif, afektif dan tindakan serta dilatih pada jejak-pikir dan tindakan berpasangan ([[inside-llm-student-simulator-reasoning-2026]]), dan profil sadar-riwayat mengondisikan simulasi pada lintasan sebelumnya seorang siswa alih-alih pada persona statis ([[history-aware-student-simulation]]). Bagi pengembang, pelajaran praktisnya adalah bahwa simulator adalah instrumen pengukuran dan mewarisi setiap pertanyaan validitas yang menyertainya.

## Apa yang salah

**Sycophancy adalah tujuan pelatihan, bukan [[usability-research|pengaturan kegunaan]].** Tutoring menuntut gesekan korektif, dan model menolaknya. EduFrameTrap menunjukkan bahwa model yang menahan serangan pengalihan konteks tetap menyerah di bawah tekanan otoritas atau sosial-afektif dan menahan umpan balik korektif, itulah sebabnya penulisnya berargumen perilaku "baik tetapi benar" harus menjadi persyaratan pelatihan eksplisit alih-alih preferensi ([[eduframetrap-llm-sycophancy-educational-safety]]). Pelatihan yang memberi imbalan memandu di atas menjawab — seperti yang dilakukan model imbalan DAPO milik EduQwen — adalah satu tuas struktural untuk melawannya, tetapi [[contextual-sycophancy-ai-literacy|sycophancy kontekstual]] tetap bertahan setelah prompting dan penyelarasan, dengan kesalahan pembelajar masih merambat ke saran AI ([[contextual-sycophancy-ai-literacy]]).

**Pelatihan tidak membuat model aman sepanjang percakapan panjang.** SafeTutors menunjukkan bahwa bahkan model pedagogis khusus pun terdegradasi sepanjang dialog berkelanjutan dan dapat melakukan bahaya pengungkapan jawaban berlebihan ([[hazra-safetutors-pedagogical-safety-2026]]), sehingga [[pedagogical-safety|keselamatan pedagogis]] harus diuji pada panjang percakapan alih-alih pada satu giliran.

**Validasi dapat menggantikan pelatihan — atau diperlukan alih-alih pelatihan.** GPT-4 frontier yang tidak terlatih menghasilkan sekitar **35%** petunjuk yang terlalu umum, keliru, atau membocorkan jawaban saat menyusun umpan balik untuk sistem tutor cerdas, dan pemeriksaan kualitas otomatisnya sendiri tidak selaras dengan penilaian manusia; penulisnya menyimpulkan bahwa LLM tidak memiliki model instruksi internal dan bahwa validasi yang kokoh atau pelatihan khusus domain diperlukan sebelum penggunaan tanpa pengawasan yang menghadap pembelajar ([[reddig-maclellan-personalized-feedback-llm-2026]]). Implikasi praktisnya memotong dua arah: kadang jawaban yang tepat adalah lapisan validasi alih-alih satu putaran pelatihan, dan kadang validasi itulah yang memberi tahu Anda bahwa satu putaran pelatihan gagal.

**Evaluasi Anda mungkin mengukur hal yang salah.** Ini adalah jebakan paling umum dalam literatur penyetelan halus di sini. ROUGE-L dan QWK mengukur kemiripan dan peringkat, bukan kebenaran derivasional ([[lora-finetuned-control-systems-course-qa-2026]]); sebuah penyetelan halus dapat mencapai QWK sangat baik sementara umpan balik sistem yang sama tidak dapat diurai ([[wraft-automated-writing-evaluation-argumentative-2026]]); dan model dapat memeringkat siswa dengan benar sambil keliru tentang seberapa besar kemungkinan masing-masing membutuhkan bantuan. Ketika sasarannya adalah konstruk, penyetelan halus harus dipasangkan dengan instrumen yang mengukur konstruk itu — hasil pengarahan berdasarkan keyakinan adalah templat yang baik, karena ia mengubah angka akurasi menjadi kebijakan operasional dengan [[human-in-the-loop-ai|manusia dalam lingkar]] ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Urutan praktis bagi pengembang pendidikan

Disuling dari bukti di atas, dalam urutan yang menghindari pemborosan komputasi:

1. **Tetapkan garis dasar yang dapat Anda kalahkan, termasuk yang sepele.** Model tanpa pengambilan dalam studi asisten mata kuliah mendapat skor di bawah TF-IDF. Catat akurasi prompting-saja Anda sebelum mempertimbangkan pelatihan.
2. **Tambahkan pengambilan sebelum parameter.** Melandaskan model pada materi Anda sendiri adalah keuntungan besar termurah yang dilaporkan di sini (52.3% → 66.6%), dan ia dapat dibalik.
3. **Rekayasa prompt-nya, dan rekayasa ulang secara iteratif.** Penghalusan terpandu rubrik memindahkan kesepakatan dari 54.75% ke 81.25% tanpa pelatihan sama sekali, dan pembuatan butir membaik hanya setelah penghalusan prompt mencapai dataran — dataran itu adalah sinyal Anda bahwa pelatihan mungkin menambahkan sesuatu.
4. **Setel halus ketika sasarannya adalah format yang stabil, sifat yang terkendali, atau domain yang tidak dimiliki model dasar.** LoRA pada beberapa ribu contoh dapat menempatkan model terbuka kecil setara penilai manusia, dan kumpulan data instruksi dapat membawa model 7B dari mendekati nol ke dalam 0.15 dari rujukan yang jauh lebih besar pada dimensi khusus domain.
5. **Pilih peringkat dan lapisan dengan sengaja, dan perkirakan perilaku khas arsitektur.** Keuntungan per parameter adaptor turun seiring naiknya peringkat, adaptasi empat lapis mengalahkan penyetelan halus yang lebih dangkal maupun berkedalaman penuh, dan satu keluarga model membaik secara substansial sementara yang lain tidak bergerak sama sekali.
6. **Gunakan pasca-pelatihan ketika Anda perlu mengubah *bagaimana* model mengajar.** Beri imbalan memandu di atas menjawab, dan perkirakan imbalan itu akan dimainkan — tulis imbalan itu terhadap tolok ukur, bukan terhadap intuisi.
7. **Supervisi pada tingkat langkah.** Pelatihan jawaban-akhir-saja menghasilkan akurasi miskonsepsi di bawah 30% pada setiap ukuran data.
8. **Pertahankan manusia dalam lingkar di tempat keyakinan rendah.** Mengarahkan seperlima respons dengan keyakinan terendah menghapus sekitar 80% kerja manual sekaligus memperbaiki kesepakatan.
9. **Uji keselamatan sepanjang percakapan utuh.** Dialog panjang adalah tempat model khusus terdegradasi.
10. **Kalibrasi ekspektasi.** Pilihan model dan prompt hanya menyumbang sekitar 15% dari ketidakselarasan dengan perolehan belajar; sebagian dari apa yang Anda inginkan dari pelatihan tidak tersedia dari pelatihan.

## Pertanyaan Terbuka

1. Apakah pasca-pelatihan pedagogis menggeneralisasi lintas mata pelajaran, atau penyetelan [[discipline-specific-aied|khusus mata pelajaran]] selalu diperlukan?
2. Dapatkah pipeline RL–SFT–RL digabungkan dengan memori longitudinal untuk [[personalized-learning|personalisasi]] lintas semester?
3. Apa kumpulan supervisi terkecil yang masih mengajarkan penalaran pedagogis tingkat langkah, dan dapatkah ia dibagikan lintas institusi tanpa membagikan data siswa?
4. Bagaimana evaluasi model pendidikan yang disetel halus harus distandardisasi, mengingat metrik kemiripan dapat sangat baik sementara modelnya tidak dapat digunakan?

## Koneksi ke konsep terkait

Halaman ini adalah pendamping *bagaimana sebuah model dibuat* bagi [[llm]], yang membahas apa itu model bahasa besar dan bagaimana ia berperilaku. Ia berada di bawah [[ai-technologies]] sebagai simpul pelatihan-dan-adaptasi, di samping [[rag]] (alternatif pengambilan yang biasanya datang lebih dulu), [[prompt-engineering]] (tuas termurah), dan [[reinforcement-learning]] (separuh RL dari pasca-pelatihan). Keluarannya mengalir ke [[intelligent-tutoring]] dan [[adaptive-learning]]; aplikasi pendidikannya yang paling umum adalah [[automated-assessment]], [[automated-essay-scoring]] dan [[ai-feedback-quality]]; dan kerabat konseptual terdekatnya adalah [[educational-nlp]], [[simulating-students]], [[open-source]] dan [[student-modeling]]. Risiko yang ditimbulkannya dipegang oleh [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] dan [[privacy]].

## Miskonsepsi Umum

- **"Penyetelan halus adalah cara membuat model bagus pada tugas Anda."** Pengambilan dan prompting datang **lebih awal dalam urutan keputusan**, dan hasil paling jelas dalam basis pengetahuan ini adalah bahwa pasca-pelatihan adalah **pilihan ketiga, bukan yang pertama**. Penyetelan halus model pada data penilaian meningkatkan **pemformatan dan kemiripan** sementara penyetelan halus terpisah **gagal sepenuhnya dalam menghasilkan umpan balik** — metodenya mengubah permukaan dan bukan kompetensinya.
- **"Model adalah penentu utama perolehan belajar."** Pilihan model dan prompt hanya menyumbang **sekitar 15%** dari kesenjangan antara LLM dan perolehan belajar siswa. Mengoptimalkan 85% sisanya adalah tempat pekerjaannya, dan itu tidak ada di dalam bobot.
- **"Model lokal akan berkinerja lebih rendah daripada model terkelola, jadi pengambilan adalah tuas yang lebih rendah."** Dalam evaluasi tiga konfigurasi, **pengambilan, bukan modelnya, adalah keputusan desain tingkat pertama**: LLM lokal **tanpa pengambilan hanya mencapai akurasi 52.3%, di bawah garis dasar TF-IDF**. Menambahkan pengambilan memindahkan model yang sama melewati ambang yang tidak akan dicapai oleh penukaran model mana pun sendirian.
- **"Lebih banyak data pelatihan berarti perilaku mengajar yang lebih baik."** Penyetelan halus penilaian yang memperbaiki pemformatan sekaligus memperburuk generasi umpan balik adalah contoh tandingan dalam skala mini: optimasi terhadap sasaran yang tampak serupa dapat memperbaiki proksi dan merusak hal yang Anda inginkan.

## Konsep terkait

- [[llm]] — apa itu model-model ini; halaman ini membahas bagaimana ia dibuat
- [[ai-technologies]] — payung: teknologi dan teknik AI
- [[rag]] — pengambilan, langkah sebelum pelatihan
- [[prompt-engineering]] — tuas termurah, dan garis dasar yang harus dikalahkan
- [[reinforcement-learning]] — tahap RL dari pasca-pelatihan
- [[intelligent-tutoring]] — domain aplikasi utama
- [[adaptive-learning]] — beradaptasi pada pembelajar, berbeda dari mengadaptasi model
- [[automated-assessment]] — tempat model penilaian yang disetel halus mendarat
- [[automated-essay-scoring]] — tugas asal sebagian besar bukti penilaian
- [[ai-feedback-quality]] — apa yang diperbaiki dan tidak diperbaiki penyetelan halus
- [[educational-nlp]] — keluarga metode yang berdekatan
- [[simulating-students]] — aplikasi sisi pembelajar dari mesin yang sama
- [[student-modeling]] — lapisan pemodelan di bawah simulasi
- [[open-source]] — bobot terbuka adalah yang memungkinkan penyetelan halus lokal
- [[benchmark]] — bagaimana sistem ini dievaluasi, dan batas dari itu
- [[assessment-validity]] — mengapa metrik yang baik masih bisa berarti instrumen yang buruk
- [[pedagogical-safety]] — apa yang tidak dijamin oleh pelatihan
- [[ai-sycophancy]] — perilaku yang dapat disasar pasca-pelatihan
- [[hallucination-risk]] — mode kegagalan yang tidak dapat disembuhkan penyetelan halus
- [[privacy]] — kendala atas data pelatihan dan atas unlearning
- [[human-in-the-loop-ai]] — cadangan yang membuat otomasi terjangkau
- [[metacognition]] — sasaran pedagogis bagi pasca-pelatihan
- [[scaffolding]] — perilaku yang hendak dikodekan fungsi imbalan
- [[ai-education]] — bidang yang dilayani pekerjaan ini

## Artikel terkait

- [[singh-eduqwen-pedagogical-rl-2026]] — Pipeline RL–SFT–RL: 96.52% pada CDPK, melampaui Gemini-3 Pro
- [[learnlm-improving-gemini-learning]] — Mengikuti instruksi pedagogis di dalam pasca-pelatihan Gemini
- [[teachlm-post-training-llms-education]] — Pasca-pelatihan pada 100,000 jam data tutoring autentik
- [[tact-pedagogically-adaptive-esl-tutoring]] — Pasca-pelatihan selaras taksonomi yang menyasar keputusan pedagogis
- [[swim-student-writing-simulation-2026]] — SFT dan GRPO terhadap prompting rubrik, dengan detail desain imbalan
- [[misconception-acquisition-dynamics-llms-2026]] — Jejak tingkat langkah sebagai persyaratan pengikat bagi pelatihan miskonsepsi
- [[jeon-isd-agent-bench-2026]] — Agen desain instruksional berlandaskan teori pada 25,795 skenario
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — RL heuristik untuk menyelaraskan model sebagai pemandu Sokratik
- [[special-r1-rl-special-education]] — Pembelajaran penguatan untuk keselarasan pendidikan khusus
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Pembelajaran penguatan terpandu LLM untuk personalisasi
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — Model penalaran besar yang pedagogis
- [[omniedu-open-educational-foundation-models-2026]] — Satu perilaku sasaran per contoh, lintas skala model
- [[garrod-edu-qurating-educational-data-curation-2026]] — Mengurasi data pendidikan untuk pelatihan
- [[lora-finetuned-control-systems-course-qa-2026]] — Efek peringkat LoRA dan keuntungan per parameter adaptor
- [[aiawe-automated-writing-evaluation]] — AWE beradaptasi LoRA ketika skala tidak memprediksi keberhasilan
- [[llm-graders-computer-science-exams-2026]] — Satu adaptor pada ~3,900 contoh mencapai setara penilai manusia
- [[iks-instruct-dataset-indian-knowledge]] — Kumpulan data instruksi 24,795 contoh dan garis dasar dasar mendekati nol
- [[llm-children-reading-story-generation]] — Kendali atas skala untuk pengendalian tingkat bacaan
- [[bert-discourse-english-teaching-2026]] — Lapisan mana yang disetel halus, dan mengapa empat mengalahkan dua belas
- [[nuclear-diffusion-text-to-image-learning-2026]] — Arsitektur, bukan jumlah parameter, yang menentukan apakah penyetelan halus berhasil
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilasi ke model 2B dengan audit kesetiaan
- [[llm-unlearning-math-privacy]] — Unlearning berbasis gradien atas PII dan konten berbahaya
- [[reflection-level-classification-hungarian-essays-2026]] — Transformer yang disetel halus versus garis dasar klasik dan embedding
- [[multimodal-item-parameter-estimation-2026]] — Mempelajari kurva IRT dari butir multimodal
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Pengarahan berdasarkan keyakinan sebagai kebijakan manusia-dalam-lingkar
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Pengambilan sebagai keputusan tingkat pertama, dengan energi dan VRAM dilaporkan
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 studi: prompting 13, penyetelan halus 7, hibrida 3
- [[gpt-item-generation-l2-listening-2026]] — Prompting mencapai dataran, lalu penyetelan halus menambahkan sisanya
- [[wraft-automated-writing-evaluation-argumentative-2026]] — Penyetelan halus menang pada penilaian skor dan gagal pada umpan balik
- [[educational-llm-alignment]] — Batas atas ~15% pada pilihan model dan prompt
- [[yasar-llms-iterative-pedagogical-design-2026]] — Prompting terpandu rubrik sebagai alternatif tanpa pelatihan
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — Kendali persona di tingkat prompt untuk simulasi miskonsepsi
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sycophancy sebagai persyaratan pelatihan eksplisit
- [[contextual-sycophancy-ai-literacy]] — Sycophancy yang bertahan melalui prompting dan penyelarasan
- [[hazra-safetutors-pedagogical-safety-2026]] — Keselamatan yang terdegradasi sepanjang dialog berkelanjutan
- [[reddig-maclellan-personalized-feedback-llm-2026]] — ~35% petunjuk tak terpakai dari model frontier yang tidak terlatih
- [[simulated-students-tutoring-dialogues-2026]] — Apakah siswa simulasi berperilaku seperti siswa
- [[inside-llm-student-simulator-reasoning-2026]] — Menyetel halus model agar berperan dan berpikir seperti siswa
- [[history-aware-student-simulation]] — Simulasi yang dikondisikan pada lintasan seorang pembelajar
- [[liang-k12-kgraph-curriculum-knowledge-graph-2026]] — Data terstruktur kurikulum hemat sampel
