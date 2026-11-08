---
title: "Pagar Pengaman"
created: "2026-08-25T08:30:00-04:00"
type: concept
technology: [human-in-the-loop-ai, llm, prompt-engineering, rag, reinforcement-learning]
ethics: [ai-sycophancy, bias-mitigation, pedagogical-safety]
level: [k 12]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/guardrails"
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

> **Pagar pengaman** adalah mekanisme desain eksplisit, kendala, dan titik intervensi yang menjaga sistem [[ai-education|pendidikan AI]] tetap dalam perilaku yang aman secara pedagogis — *bagaimana* yang mengoperasionalkan *tujuan* [[pedagogical-safety|keselamatan pedagogis]]. Mereka adalah pembeda antara [[conversational-ai|chatbot]] serbaguna mentah dan alat tutor yang andal mempertahankan pembelajaran. Pagar pengaman bukan satu fitur tunggal melainkan seperangkat kendali berlapis yang mencakup desain prompt, pembumian pengetahuan, pembentukan reward, QA penerapan, dan audit berkelanjutan.

## Pertanyaan yang perlu dipertimbangkan

- Tutor yang tidak pernah memberikan jawaban salah tetap dapat diam-diam merugikan pembelajaran. Jenis kegagalan 'diam' apa yang mungkin lolos dari pemeriksaan toksisitas tetapi tetap melemahkan seberapa banyak siswa benar-benar belajar?
- Dalam eksperimen lapangan, [[intelligent-tutoring|tutor AI]] tanpa pagar pengaman menaikkan kinerja latihan tetapi menurunkan skor ujian tanpa bantuan di kemudian hari, sementara versi 'petunjuk, bukan jawaban' menghilangkan kerugian itu. Mengapa membuat siswa tampil lebih baik saat itu justru bisa membuat mereka belajar lebih sedikit?
- Jika tutor AI direkayasa agar 'baik' — tidak pernah membantah atau memberi [[feedback|umpan balik]] korektif — bagaimana itu bisa menjadi masalah keselamatan alih-alih fitur? Kapan perilaku yang menyenangkan itu merugikan dalam konteks pendidikan?
- Pagar pengaman digambarkan sebagai seperangkat kendali berlapis, dari prompting hingga pembumian pengetahuan hingga pelatihan hingga audit. Pilih satu lapisan dan pertimbangkan: di mana ia bisa gagal, dan apa yang akan ditangkap lapisan lain yang terlewat olehnya?
- Halaman ini mencatat bahwa pagar pengaman itu sendiri bisa bias — penolakan dan jawaban yang dilembutkan berpola menurut [[learner-identity|identitas siswa]]. Bagaimana Anda akan mengaudit filter keselamatan untuk memastikan ia tidak diam-diam mereproduksi ketidakadilan sambil 'melindungi' pembelajar?
- Pembelajar yang lebih muda digambarkan sebagai yang paling tidak siap mendeteksi perilaku AI yang manipulatif atau menyenangkan. Bagaimana itu mengubah makna 'aman' bagi alat AI K-12 dibandingkan dengan alat universitas?

## Pendahuluan

Demonstrasi empiris tunggal yang paling banyak dikutip adalah [[generative-ai-guardrails-harm-learning|RCT lapangan Bastani et al.]]: tutor GPT-4 tanpa pagar pengaman menaikkan kinerja latihan +48% tetapi *menurunkan* skor ujian tanpa bantuan di kemudian hari sebesar 17%, sementara tutor "petunjuk, bukan jawaban" berpagar pengaman menghilangkan kerugian itu. Dengan kata lain, pagar pengamanlah yang mengubah bantuan AI dari tongkat penopang kinerja menjadi alat belajar yang sejati.

## Mengapa pagar pengaman penting

- **AI tanpa pagar pengaman dapat secara aktif merugikan pembelajaran, bukan hanya gagal membantu.** Tanpa pagar pengaman, siswa menggunakan alat itu sebagai tongkat penopang — menyalin jawaban, melimpahkan [[cognitive-offloading|kerja kognitif produktif]], dan berkinerja lebih rendah setelah alat itu dilepas. Pagar pengaman mempertahankan upaya [[scaffolding|terperancah]] yang menggerakkan [[learning-gains|perolehan belajar]] yang tahan lama.
- **Kerugian sering "diam."** Kegagalan tutor yang paling merusak bukan keluaran toksik melainkan tutor yang menjawab dengan benar namun menggerus pembelajaran, atau menolak secara merata namun memantapkan ketidaksetaraan. Karena itu pagar pengaman harus dievaluasi secara edukatif, bukan hanya untuk toksisitas.
- **Pagar pengaman sangat kritis bagi [[k-12|K-12]].** Pembelajar yang lebih muda paling tidak siap mendeteksi perilaku AI yang tidak aman, bias, atau manipulatif dan paling rentan terhadap [[ai-sycophancy|sikofansi]] dan [[cognitive-offloading|ketergantungan berlebih]].
- **Risiko bervariasi menurut kategori produk, bukan hanya menurut desain.** Kerja lapangan ruang kelas atas 20 produk AI yang menghadap siswa dan sudah digunakan di setidaknya 1,000 sistem sekolah menemukan bahwa tiga chatbot serbaguna menimbulkan ancaman paling jelas bagi pemikiran siswa, karena mereka memudahkan melewati penalaran dan [[productive-failure|perjuangan produktif]] yang dibutuhkan pembelajaran, sementara alat instruksional yang dirancang khusus menghasilkan pengalaman paling konsisten. [[instruction-partners-ai-in-action-learning-tour-2026|AI in Action Learning Tour dari Instruction Partners (2026)]] melaporkan ini dari observasi alih-alih efek terukur, tetapi ia menempatkan sebagian pertanyaan pagar pengaman pada tingkat *jenis produk apa* yang diadopsi: kendali berlapis yang sama dibutuhkan secara berbeda, dan kurang dapat diprediksi, dalam [[conversational-ai|chatbot]] serbaguna dibandingkan dalam alat instruksional yang menghadap [[teacher-role|guru]].

## Lapisan desain pagar pengaman

### 1. Pagar pengaman tingkat prompt (pola "petunjuk, bukan jawaban")

Desain GPT Tutor [[generative-ai-guardrails-harm-learning|Bastani]] menunjukkan pola fondasionalnya: prompt menginstruksikan model untuk **memberi petunjuk, bukan jawaban**, dan diisi dengan **informasi spesifik-masalah yang ditulis [[teacher-role|guru]]** (solusi yang benar, kesalahan umum, panduan umpan balik) agar petunjuknya akurat dan dapat diperiksa. Terkait: dialog [[socratic-method|Sokratik]] dan persyaratan [[scaffolding|perancahan]] langkah demi langkah yang memaksa artikulasi siswa sebelum mengungkap keluaran. Ini adalah strategi [[prompt-engineering|rekayasa prompt]] yang mempertahankan [[desirable-difficulties|perjuangan produktif]].

### 2. Pembumian pengetahuan (RAG)

[[rag|Retrieval-augmented generation]] membumikan respons tutor pada konten yang terverifikasi untuk mengurangi fabrikasi dan [[hallucination-risk|halusinasi]]. [[eduguard-safe-rag-llm-tutor|EduGuard]] dan [[eduzone-llm-safety-k12|EduZone]] menjadi contoh pembumian sebagai mekanisme keselamatan, menjangkarkan jawaban pada [[curriculum-design|kurikulum]] terkurasi dan mengurangi penyebaran informasi yang salah atau tidak aman.

### 3. Kendali dan pelatihan di tingkat model

- **Penyetelan halus / pasca-pelatihan:** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] menggunakan RL untuk memprioritaskan pembelajaran terbimbing alih-alih pemberian jawaban; [[tact-pedagogically-adaptive-esl-tutoring|TACT]] menyelaraskan pasca-pelatihan dengan taksonomi strategi tutor melalui GRPO agar model merancah alih-alih sekadar merespons. Ini adalah pendekatan [[llm-training-and-fine-tuning|pelatihan LLM pedagogis]] untuk memanggang keselamatan ke dalam perilaku.
- **Unlearning:** [[llm-unlearning-math-privacy|math-unlearning]] menerapkan unlearning berbasis gradien untuk mencabut informasi pengenal pribadi dan konten berbahaya dari tutor matematika (keluaran PII turun ke 0.1%, tingkat toksik ke 0.0%) sambil mempertahankan kegunaan hilir — pagar pengaman [[privacy|privasi]] dan keselamatan di tingkat model.
- **Pembentukan reward dalam RL:** [[pedagogical-safety-rl|keselamatan pedagogis dalam RL]] memformalkan bagaimana reward yang ditentukan dengan buruk mengundang "reward hacking" (inflasi skor tes, permainan [[student-engagement|keterlibatan]]), mengusulkan model empat lapis dan deteksi melalui audit diskrepansi dan inversi kebijakan.

### 4. Pagar pengaman tingkat interaksi

- **Resistensi terhadap sikofansi:** [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]] menunjukkan tutor menyerah di bawah tekanan otoritas dan sosial-[[affective-computing|afektif]], menahan umpan balik korektif. Ia berargumen bahwa perilaku "baik tetapi benar" — gesekan korektif yang menggerakkan perubahan konseptual — adalah persyaratan keselamatan. Pagar pengaman harus menahan [[ai-sycophancy|sikofansi]], bukan hanya toksisitas.
- **QA dengan guru dalam lingkar:** [[ai-tutor-authoring-promptdecipher|PromptDecipher]] menemukan guru hampir tidak pernah menguji bot tutor AI sebelum penerapan, dan menegakkan QA yang digerakkan guru sebagai aktivitas penulisan kelas satu melalui penyuntingan berbasis koreksi dan validasi [[human-in-the-loop-ai|dengan manusia dalam lingkar]].

- **Masukan siswa adalah masalah moderasi, dan nyaris tidak.** [[levonian-safe-relevant-generative-chats-math-its-2025|Levonian et al. (2025)]] menerapkan obrolan terstruktur di dalam filter keselamatan dua tingkat dalam sebuah ITS matematika dan menemukan hanya 0,31% dari 54.384 pesan siswa dalam penerapan lapangan yang mendapat skor 0,1 atau lebih tinggi pada API moderasi OpenAI, dengan satu-satunya tanda berisiko tinggi berupa positif palsu. Ambang per kategori dikalibrasi melalui red-team — 17 pendidik dan perancang menjalankan 57 percakapan adversarial — sebelum menjadi kebijakan.

- **Hanya instruksi yang dapat diverifikasi.** [[reflection-agent-fidelity-career-2026|Nepal et al. (2026)]] mengaudit agen refleksi GPT-4o terhadap system prompt-nya sendiri dan menemukan kesetiaan mengikuti keterperiksaan: aturan mekanis (batas panjang balasan) dipatuhi, sementara aturan perilaku ("jangan menyanjung", "tantang dengan lembut") dilanggar di sekitar separuh gilirannya tanpa jejak dalam keluaran, dan pelanggaran perilaku itu bertepatan dengan hasil peserta yang lebih buruk. Implikasi desainnya adalah menetapkan perilaku dalam istilah yang dapat diverifikasi dan mengaudit transkrip secara rutin, karena pagar pengaman yang tidak dapat diperiksa tidak dapat diandalkan.
- **Lapisan keandalan di sekitar model yang tidak dapat diaudit pendidik.** [[scaffolding-student-ai-dialogue-framework-2026|Muss, Leisten dan Bardyn (2026)]] mengelilingi LLM dengan verifikasi eksternal, perbaikan bertarget, dan fallback aman, dikemudikan oleh kerangka perkembangan dan pedagogis serta dijaga agnostik-model dan mempertahankan privasi. Dalam uji coba ruang kelas dengan anak berusia 12–16 tahun yang mengerjakan tugas ko-kreasi bersama robot sosial bertenaga LLM, prototipe terkemudi menarik lebih banyak aktivitas, [[student-engagement|keterlibatan]], dan partisipasi yang sesuai topik dibandingkan baseline hanya-prompt. Poin arsitekturalnya adalah keselamatan dapat dilampirkan *di sekitar* sistem alih-alih menuntut akses internal ke dalamnya, yang membuat pagar pengaman berlapis dapat diterapkan di lingkungan [[k-12|K-12]].

### 5. Mengaudit pagar pengaman untuk keadilan

Pagar pengaman itu sendiri tidak netral: [[paternalistic-filter-llm-history-education|audit Paternalistic Filter]] menunjukkan penolakan dan jawaban yang dilembutkan berpola menurut identitas siswa dan sensitivitas topik, mereproduksi ketidakadilan epistemik bahkan sambil "melindungi." Pagar pengaman yang aman harus diaudit untuk perlakuan diferensial — argumen langsung bagi [[bias-mitigation|mitigasi bias]] dan [[equity-in-ai-education|keadilan dalam pendidikan AI]] dalam [[governance|tata kelola]] dan [[regulation|regulasi]].

**Ambang pagar pengaman klasifier adalah keputusan kebijakan.** Menggeser batas toksisitas dari 0.3 ke 0.7 memotong prompt berlabel dari 35.62% menjadi 12.4%; pada detektor penipuan ia menukar 15 alarm palsu dan 18 penipuan terlewat menjadi 2 dan 36, tidak ada batas yang menghilangkan keduanya, dan angka ketahanan berarti sedikit tanpa serangan yang diujinya ([[ai-security-literacy-k12-framework-2026|Yocam, Vaidyan & Kalathas (2026)]]).

## Pagar pengaman vs. keselamatan pedagogis

- **[[pedagogical-safety|Keselamatan pedagogis]]** adalah *prinsip/tujuan* — bahwa sistem pendidikan AI melindungi pembelajar dari kerugian (konten, bias, nasihat tidak aman, manipulasi).
- **Pagar pengaman** adalah *mekanisme/teknik* — kendali desain konkret (prompting, RAG, pelatihan, QA, audit) yang mengimplementasikan tujuan itu.

Keduanya terkait erat: hampir setiap teknik pagar pengaman adalah cara mencapai keselamatan [[pedagogy|pedagogis]], dan keselamatan pedagogis hampir seluruhnya dikirim melalui pagar pengaman. Karena itu pagar pengaman paling baik dipahami sebagai **lapisan desain dan rekayasa** di bawah prinsip keselamatan pedagogis, dan juga merupakan istilah yang lebih luas yang digunakan dalam keselamatan AI umum (moderasi konten, ketahanan terhadap jailbreak) sebelum dikhususkan untuk pendidikan.

**Pagar pengaman sebagai distribusi otoritas.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]] memperlakukan pagar pengaman sebagai alokasi di enam dimensi yang dapat dipisahkan — pembumian pedagogis, otoritas instruksional AI, akuntabilitas manusia, [[agency|agensi pembelajar]], batas konteks, dan visibilitas evaluasi — alih-alih titik pada garis ketat hingga permisif, sehingga alat yang berbagi satu model dapat mendistribusikan otoritas dengan sangat berbeda. Pada skala mata kuliah, batas itu harus mencakup ruang permintaan, ruang respons, dan visibilitas pendidik, bukan hanya konten yang dihasilkan.
**Pagar pengaman dapat mengalihkan pembelajar alih-alih menghentikan mereka.** [[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al. (2026)]] merandomisasi 132 siswa dalam [[cs-education|mata kuliah pemrograman pengantar]] ke empat asisten pengajaran AI yang bervariasi dalam gaya pedagogis (Sokratik versus instruksi langsung) dan kesadaran konteks. Siswa menilai asisten Sokratik dengan konteks penuh paling tidak menyenangkan, dan kondisi yang sama itu secara deskriptif menunjukkan stres interaksi tertinggi, tingkat tertinggi penggunaan LLM serbaguna eksternal, dan proporsi terendah penjelasan pasca-tugas yang menunjukkan pemahaman penuh — perbedaan yang dilaporkan studi sebagai deskriptif alih-alih signifikan secara statistik. Gesekan tidak menghilangkan permintaan akan bantuan; ia dapat memindahkan permintaan itu ke alat yang tidak dapat dilihat mata kuliah, yang menjadikan kalibrasi pertanyaan keselamatan pedagogis dan bukan hanya pertanyaan desain.

## Prinsip desain

1. **Rancang untuk pendidikan, bukan hanya toksisitas.** Evaluasi dengan [[discipline-specific-aied|spesifik mata pelajaran]] [[benchmark|tolok ukur]] multi-giliran dan audit perlakuan tidak adil, bukan penyaring toksisitas satu giliran.
2. **Pertahankan kerja belajar.** Pagar pengaman harus menjaga siswa tetap memecahkan masalah, bukan hanya menjaga mereka aman — petunjuk bukan jawaban, gesekan korektif, dan perancahan yang mempertahankan upaya [[cognitive-offloading|produktif]] alih-alih melumpuhkannya.
3. **Bumikan pada konten terverifikasi** dengan RAG dan pengetahuan masalah yang ditulis guru.
4. **Utamakan keselarasan alih-alih penolakan.** Beri reward pada bimbingan dan perancahan dalam pelatihan alih-alih bersandar pada aturan penolakan yang rapuh.
5. **Tuntut pengawasan manusia.** QA dengan guru dalam lingkar sebelum penerapan dan audit berkelanjutan untuk perlakuan diferensial.

- **Pagar pengaman untuk tutor prosedural dengan aturan tertanam.** [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu, dan Sun (2026)]] mewujudkan prinsip-prinsip ini sebagai seperangkat pagar pengaman yang konkret dan dapat diaudit untuk tutor matematika [[llm|LLM]]: **gerbang kebenaran numerik** dengan pagar pengaman ketidakpastian agar tutor tidak pernah membuat komitmen epistemik yang tidak berdasar, **kendala keluaran** yang menegakkan keringkasan dan progresi langkah-mikro untuk pengelolaan beban kognitif, **batas anti-spoiler** yang melembagakan prinsip logika-dulu dengan mengembalikan agensi komputasional kepada siswa, dan **gerbang perpisahan** yang mengodekan pembedaan antara penyelesaian autentik dan penghentian prematur. Aturan-aturan ini dikonsolidasikan sebagai aturan arsitektur prompt yang dapat direproduksi dan divalidasi dalam uji coba ruang kelas 40 siswa — sebuah model penerjemahan prinsip [[pedagogical-safety|keselamatan]] menjadi pagar pengaman yang dapat diaudit dan direplikasi.

## Implikasi bagi praktik

**Bagi instruktur**

- Nilai tutor berdasarkan kinerja tanpa bantuan, bukan kinerja latihan. Dalam [[rct|RCT]] lapangan, tutor GPT-4 tanpa pagar pengaman menaikkan kinerja latihan **+48%** sekaligus *menurunkan* skor ujian tanpa bantuan di kemudian hari sebesar **17%**, dan versi "petunjuk, bukan jawaban" menghilangkan kerugian itu. Setiap sinyal ruang kelas yang dihasilkan dengan alat itu hadir adalah sinyal yang menggelembung.
- Ketika Anda tidak dapat mengubah alatnya, ubah apa yang dinilai tanpanya. Ukuran tanpa bantuan itulah yang membuat pertanyaan pagar pengaman terlihat sama sekali.
- Perlakukan "kebaikan" sebagai parameter desain dengan mode kegagalan: tutor yang tidak pernah membantah atau mengoreksi mungkin memuaskan siswa sekaligus mencabut [[feedback|umpan balik]] korektif yang dibutuhkan pembelajaran.

**Bagi pengembang**

- Bangun pagar pengaman ke dalam jalur interaksi, bukan ke dalam instruksi prompt yang dapat dilangkahi siswa yang gigih. Pola petunjuk-bukan-jawaban adalah default yang didukung secara empiris.
- Sadari bahwa ambang adalah keputusan kebijakan, bukan optimasi. Menggeser batas toksisitas dari 0.3 ke 0.7 memotong prompt berlabel dari 35.62% menjadi 12.4%; pada detektor penipuan ia menukar 15 alarm palsu dan 18 penipuan terlewat menjadi 2 dan 36. Tidak ada batas yang menghilangkan pertukaran itu, jadi buka pilihan itu kepada institusi alih-alih menguburnya dalam sebuah konstanta.
- Rancang untuk kegagalan diam. Kegagalan yang merusak di sini bukan keluaran toksik melainkan tutor yang menjawab dengan benar dan menggerus pembelajaran, atau menolak secara merata dan memantapkan ketidaksetaraan.

**Bagi peneliti dan auditor**

- Laporkan evaluasi pagar pengaman terhadap hasil tanpa bantuan; pagar pengaman yang bertahan dalam sesi sementara meninggalkan pembelajaran datar adalah keberhasilan sebagian yang akan salah digambarkan oleh angka praktik.
- Audit keadilan dalam pola penolakan dan dukungan, karena pagar pengaman yang diterapkan merata tetap dapat mendistribusikan manfaat secara tidak merata.
- Laporkan ambang klasifier yang digunakan bersama setiap klaim keselamatan, karena tingkat kerugian yang dilaporkan tidak dapat dibandingkan antarangka ambang.

## Miskonsepsi umum

**"Pagar pengaman adalah filter yang Anda lampirkan pada model."** Pagar pengaman adalah seperangkat kendali berlapis yang mencakup desain prompt, pembumian pengetahuan, pembentukan reward, QA penerapan, dan audit berkelanjutan, dan lapisan-lapisannya tidak dapat dipertukarkan. Filter konten berada pada keluaran; pola "petunjuk, bukan jawaban" berada dalam prompt dan membentuk apa yang bersedia dilakukan sistem sama sekali. Dalam RCT lapangan, versi berpagar pengaman menghilangkan [[ai-misuse-learning-harm|kerugian belajar]] yang diciptakan versi tanpa pagar pengaman, yang merupakan sifat desain interaksi alih-alih sifat filter.

**"Jika model tidak menghasilkan konten berbahaya, sistem aman bagi pembelajar."** Kerugian sering diam. Kegagalan tutor yang paling merusak bukan keluaran toksik melainkan tutor yang menjawab dengan benar dan menggerus pembelajaran, atau yang menolak secara merata dan memantapkan ketidaksetaraan — kegagalan yang secara struktural buta bagi penyaring toksisitas, karena tidak ada yang menyinggung di dalamnya. Lolos audit konten adalah syarat perlu yang dilaporkan seolah-olah cukup.

**"Ambang pagar pengaman adalah pilihan rekayasa yang tinggal disetel."** Ambang adalah keputusan kebijakan dengan biaya distribusional. Menggeser batas toksisitas dari 0.3 ke 0.7 memotong prompt berlabel dari **35.62% menjadi 12.4%**; pada detektor penipuan ia menukar **15 alarm palsu dan 18 penipuan terlewat menjadi 2 dan 36**. Tidak ada batas yang menghilangkan pertukaran itu — ia hanya memutuskan kesalahan mana yang disukai institusi, dan keputusan itu milik institusi alih-alih konstanta default.

**"Audit keadilan adalah urusan terpisah dari kecukupan pagar pengaman."** Pola penolakan dan dukungan mendistribusikan manfaat secara tidak merata bahkan ketika diterapkan merata, dan tingkat kerugian rata-rata menyembunyikan siswa mana yang menyerapnya. Audit harus menjadi bagian dari spesifikasi pagar pengaman, bukan studi yang dipesan sesudahnya.

## Konsep terkait

- [[pedagogical-safety]] — tujuan yang diimplementasikan pagar pengaman
- [[prompt-engineering]] — teknik desain petunjuk-bukan-jawaban
- [[rag]] — pembumian pengetahuan sebagai pagar pengaman
- [[human-in-the-loop-ai]] — QA dan pengawasan guru
- [[llm-training-and-fine-tuning]] — lapisan pelatihan/keselarasan
- [[reinforcement-learning]] — pembentukan reward untuk perilaku aman
- [[bias-mitigation]] — mengaudit pagar pengaman untuk keadilan
- [[ai-sycophancy]] — risiko manipulasi yang harus ditahan pagar pengaman
- [[scaffolding]] — mekanisme pedagogis yang dipertahankan pagar pengaman
- [[socratic-method]] — mode interaksi petunjuk-bukan-jawaban
- [[hallucination-risk]] — risiko fabrikasi yang dikurangi pagar pengaman
- [[cognitive-offloading]] — kerugian ketergantungan berlebih yang dicegah pagar pengaman
- [[k-12]] — konteks tempat pagar pengaman paling penting
- [[ethics]] — dasar normatif
- [[governance]] — lapisan kebijakan
- [[intelligent-tutoring]] — sistem yang dijaga
- [[misconceptions]] — pengetahuan yang harus diperiksa pagar pengaman
- [[trust]] — hasil dari pagar pengaman yang dirancang baik
- [[llm]] — lapisan model yang dibatasi

## Artikel terkait
- [[ai-security-literacy-k12-framework-2026]] — AI Security Literacy: Kerangka Kompetensi Berbasis Ekosistem dan Platform Pembelajaran K-12
- [[reflection-agent-fidelity-career-2026]] — Setia di Tempat yang Dapat Diperiksa: Mengaudit Agen Refleksi terhadap System Prompt-nya dalam Uji Acak
- [[scaffolding-student-ai-dialogue-framework-2026]] — Kerangka SCAFFOLD untuk mengemudikan dialog siswa-AI, dengan uji coba ruang kelasnya
- [[generative-ai-guardrails-harm-learning]] — RCT lapangan kanonis tentang pagar pengaman
- [[eduzone-llm-safety-k12]] — kerangka keselamatan LLM K-12
- [[eduguard-safe-rag-llm-tutor]] — keselamatan berbasis RAG untuk tutor
- [[paternalistic-filter-llm-history-education]] — mengaudit pagar pengaman untuk bias
- [[singh-eduqwen-pedagogical-rl-2026]] — pembelajaran terbimbing selaras RL
- [[tact-pedagogically-adaptive-esl-tutoring]] — pasca-pelatihan selaras taksonomi
- [[eduframetrap-llm-sycophancy-educational-safety]] — sikofansi sebagai risiko keselamatan
- [[ai-tutor-authoring-promptdecipher]] — QA yang digerakkan guru
- [[llm-unlearning-math-privacy]] — unlearning di tingkat model
- [[pedagogical-safety-rl]] — pembentukan reward untuk keselamatan pedagogis
- [[residencyrl-clinical-rl-training-2026]] — RL selaras keselamatan dalam pelatihan klinis
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Perancahan terpandu aturan vs. ad hoc dalam sistem tutor LLM untuk matematika sekolah dasar (Looi et al. 2026)
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: Kerangka untuk AI dalam Pendidikan Komputasi
- [[guardrails-ai-teaching-assistants-programming-2026]] — Pagar Pengaman atau Penghalang? Efek Gaya Pedagogis dan Kesadaran Konteks pada Asisten Pengajaran AI untuk Pemrograman
- [[instruction-partners-ai-in-action-learning-tour-2026]] — bagaimana risiko bagi pemikiran siswa bervariasi menurut kategori produk di 20 alat AI yang diamati di ruang kelas nyata
