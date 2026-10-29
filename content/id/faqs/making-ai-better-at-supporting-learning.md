---
title: "Bagaimana Kita Dapat Membuat AI Lebih Baik dalam Mendukung Pembelajaran di Bidang Kita Sendiri?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Tiketnya berbunyi “fine-tune model pada materi kursus kami.” Anggarannya sudah disetujui, sebuah GPU sudah dipesan untuk bulan depan, dan seorang mahasiswa pascasarjana diminta menyusun kumpulan data. Tidak ada seorang pun dalam panggilan itu yang bertanya berapa skor prompt biasa, atau berapa skor pencarian kata kunci, pada pertanyaan yang sama.

Ajukan dua pertanyaan itu lebih dulu. Dalam basis pengetahuan ini, jarak antara model umum dan model yang kompeten untuk sebuah mata kuliah sebagian besar merupakan masalah grounding dan prompting, dan bukti untuk urutan itu luar biasa langsung: sebuah studi asisten mata kuliah menemukan bahwa pengambilan, bukan modelnya, adalah keputusan tingkat pertama, dan model umum tanpa grounding memperoleh skor *di bawah* baseline TF-IDF biasa.

Pelatihan itu nyata dan kadang diperlukan. Ia adalah hal ketiga atau keempat yang patut dicoba, dan uraian di bawah ini disusun agar Anda mengetahui anak tangga mana yang sebenarnya Anda butuhkan sebelum Anda membelanjakan komputasi satu kuartal.

## Versi singkat

**1.** Catat berapa skor prompt biasa, dan berapa skor metode leksikal sepele, sebelum Anda mengubah apa pun. Angka kedua itulah yang menjaga kejujuran Anda.

**2.** Tempatkan pengambilan atas materi Anda sendiri di depan model. Itu adalah perolehan tunggal terbesar yang dilaporkan di sini untuk biayanya, dan ia dapat dibalik.

**3.** Rekayasa prompt terhadap rubrik Anda dan iterasi sampai perbaikannya berhenti. Plato adalah sinyal bahwa pelatihan mungkin menambahkan sesuatu.

**4.** Adaptasi bobot dengan [[llm-training-and-fine-tuning|LoRA]] ketika sasarannya stabil dan sempit: sebuah format, sebuah rubrik, sebuah tingkat baca, sebuah kosakata domain.

**5.** Lakukan post-training ketika masalahnya perilaku, bukan isi, dan tulis imbalannya terhadap patokan yang Anda perkirakan akan digaming.

**6.** Bangun set pelatihan pada tingkat langkah. Data yang hanya berisi jawaban tidak mengajarkan miskonsepsi.

## Dapatkan baseline yang benar-benar dapat Anda kalahkan

Sebelum mengubah apa pun, catat apa yang dikembalikan prompt biasa. Lalu catat apa yang dikembalikan metode sepele.

Studi [[shen-sustainable-ai-knowledge-base-cs-education-2026|asisten basis pengetahuan mata kuliah]] layak dibaca hanya untuk ini. LLM lokal tanpa pengambilan mencapai akurasi **52,3%**. Baseline TF-IDF, metode leksikal yang berumur puluhan tahun, mencapai **55,4%**. Modelnya lebih buruk daripada metode klasik.

Lewati langkah ini dan Anda tidak dapat mengetahui apakah fine-tune Anda membantu. Lebih buruk lagi, Anda dapat merilis sistem yang dikalahkan pencarian kata kunci dan baru mengetahuinya ketika seorang asisten pengajar menyebutkannya. Dua angka di lembar kerja, yang diambil dalam satu sore, melindungi sisa anggaran.

## Grounding model pada materi Anda sendiri

Menambahkan [[rag|retrieval-augmented generation]] atas materi mata kuliah, tanpa fine-tuning sama sekali, mengangkat sistem yang sama dari 52,3% menjadi **66,6%**. Perolehan itu datang dari sebuah indeks, dan ia membawa sifat yang tidak dimiliki satu putaran pelatihan: ketika dokumen Anda berubah, Anda mengindeks ulang.

Dua hasil lain menunjuk ke arah yang sama. Tinjauan PRISMA atas 23 studi empiris tentang penyesuaian AI untuk [[writing-education|pengajaran menulis]] menemukan **rekayasa prompt dominan (N = 13), di depan fine-tuning (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Ketika sebuah basis pengetahuan harus tetap mutakhir, pengambilan adalah satu-satunya tuas yang tetap mutakhir tanpa menjalankan ulang pekerjaan pelatihan.

Pengambilan juga memiliki bentuk pedagogis. Menggrounding model pada contoh kerja dan rubrik Anda sendiri adalah cara ia tetap berada di dalam [[scaffolding|perancah]] yang Anda rancang, menjawab pada tingkat yang Anda tetapkan alih-alih melayang ke nasihat generik. Penyimpangan itu adalah keluhan paling umum tentang tutor siap pakai, dan ia lebih sering merupakan masalah pengambilan daripada masalah bobot.

## Tulis prompt terhadap rubrik Anda, dan perhatikan plato

Kerja prompt bukan pendahuluan yang Anda lakukan sambil menunggu GPU. Dua hasil menunjukkan apa yang dapat dicapainya sendiri:

- **Prompt terpandu rubrik, yang disempurnakan bersama secara iteratif, menaikkan kesesuaian LLM dan manusia pada karya desain siswa dari 54,75% menjadi 81,25%** (Cronbach's Alpha 0,393 menjadi 0,798), tanpa fine-tuning sama sekali ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Prompt khusus yang berlandas literatur memunculkan [[misconceptions|miskonsepsi]] matematika sasaran pada tingkat keberadaan **0,98**, dibandingkan **0,40** untuk prompt yang luas ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Sinyal praktisnya adalah **plato**. Dalam studi pembuatan butir, penghalusan prompt iteratif berhenti membaik, dan fine-tuning GPT-4.1 *pada prompt yang telah dioptimalkan* kemudian menambahkan perolehan yang tersisa ([[gpt-item-generation-l2-listening-2026]]). Plato setelah kerja prompt yang sungguh-sungguh adalah bukti bahwa pelatihan memiliki ruang untuk menambahkan sesuatu. Meraih pelatihan sebelum Anda mencapai plato adalah menebak, dan menebak memakan biaya satu bulan.

Perhatikan apa yang diisyaratkan hasil pembuatan butir itu tentang urutan. Fine-tune dibangun di atas prompt yang telah dioptimalkan, sehingga kerja prompt tidak terbuang ketika tim akhirnya berlatih. Anak tangga yang murah juga merupakan spesifikasi bagi anak tangga yang mahal.

## Adaptasi bobot ketika sasarannya stabil dan sempit

Adaptasi berbuah ketika Anda memerlukan model untuk memegang suatu sifat secara andal: sebuah tingkat baca, sebuah format keluaran, sebuah domain yang tidak dimilikinya. Hasil yang berulang adalah bahwa **penargetan mengalahkan ukuran**.

- Tiga model **8B** yang di-fine-tune pada kurikulum membaca anak yang dirancang pakar mengungguli GPT-4o zero-shot dan Llama 3.3 70B pada metrik terkait kesulitan, dengan masalah keselamatan yang dapat diabaikan. Para penulis membingkainya sebagai **keterkendalian di atas skala** ([[llm-children-reading-story-generation]]).
- Kumpulan data instruksi berisi **24.795 contoh** yang berlandas Sistem Pengetahuan India menghasilkan fine-tune **7B** dengan skor **6,39** pada panel eksternal lima juri, dalam jarak **0,15** dari model rujukan umum yang kuat dengan sebagian kecil biaya penerapan. Model dasar yang sama memperoleh skor **mendekati nol pada dimensi khusus domain** tanpa fine-tune itu ([[iks-instruct-dataset-indian-knowledge]]). Jarak antara kompeten secara umum dan kompeten di sini adalah seluruh alasan untuk adaptasi domain.
- Satu adaptor [[llm-training-and-fine-tuning|LoRA]] yang dilatih pada sekitar **3.900** contoh bernilai yang digabungkan membawa lima model terbuka kecil (4B hingga 30B) setara atau lebih baik daripada penilai manusia pada dua ujian ilmu komputer ([[llm-graders-computer-science-exams-2026]]). Satu adaptor, satu kumpulan data, beberapa model dasar: itulah bentuk penerapan yang dapat dijalankan tim kecil.

Kata *stabil* dalam judul memikul bebannya. Format, rubrik, tingkat baca, dan kosakata domain adalah sasaran yang stabil. Prosa yang sarat pertimbangan tidak memiliki sasaran semacam itu, dan di situlah adaptasi gagal, seperti yang ditunjukkan dua bagian berikut.

## Ubah perilakunya ketika jawabannya yang menjadi masalah

Adaptasi mengajarkan model *apa yang harus dihasilkan*. Post-training mengajarkannya *bagaimana berperilaku*. Untuk tutor, pembedaan itu adalah seluruh masalahnya: model umum di-post-train pada preferensi manusia akan kegunaan, yang berarti menjawab dengan segera, dan mengajar menuntut menahan jawaban.

Hasil pendidikan terkuat dalam korpus ini ada di sini. Model imbalan EduQwen secara eksplisit memprioritaskan **respons yang membimbing di atas jawaban langsung**, dan saluran tiga tahapnya mencapai **96,52%** pada patokan CDPK dibandingkan **90,55%** milik Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Simulator menulis SWIM bergerak dari prompt berlandas rubrik (QWK terbaik **0,577**) ke supervised fine-tuning (**0,474 ± 0,023**) ke pembelajaran penguatan (**0,618 ± 0,005**) di seluruh sifat dan prompt ([[swim-student-writing-simulation-2026]]).

Baca angka SWIM dengan hati-hati, karena langkah tengahnya mundur. Supervised fine-tuning pada demonstrasi membuat simulator lebih buruk daripada prompt yang menjadi titik awalnya, dan hanya sinyal imbalan yang memulihkan kerugian itu lalu mengalahkan baseline. Jika rencana Anda berhenti di supervised fine-tuning, rencana itu mungkin sebuah jalan memutar.

## Awasi pada tingkat langkah

Satu temuan di sini mudah terlewat dan mahal untuk diabaikan: **kualitas pengawasan mengalahkan kuantitas pengawasan**. Model yang diinstruksikan mempelajari miskonsepsi aljabar hanya ketika dilatih pada **jejak solusi tingkat langkah**. Ketika dilatih hanya pada jawaban akhir, akurasi tetap **di bawah 30% pada setiap ukuran data** ([[misconception-acquisition-dynamics-llms-2026]]).

Jika contoh pelatihan Anda adalah pasangan pertanyaan dan jawaban benar, Anda melatih hal yang salah, dan menambahkan contoh tidak akan memperbaikinya. Yang Anda butuhkan adalah kerja perantaranya: langkah yang keliru, titik ketika siswa menyimpang, koreksinya. Mengumpulkannya adalah masalah rekayasa data dengan kendala pedagogis, dan biasanya berarti mencatat sesi alih-alih mengambil kunci jawaban.

## Di mana adaptasi gagal secara diam-diam

Inilah bagian yang dilewati oleh antusiasme.

**Teks yang sarat pertimbangan.** Dalam WrAFT, proyek yang sama yang berhasil di-fine-tune untuk *menilai* esai (QWK 0,84) menghasilkan keluaran terpotong dan tidak dapat diurai ketika ia di-fine-tune untuk *umpan balik*, sementara pemberian prompt langsung kepada Claude 3.7 menghasilkan umpan balik yang paling tinggi dinilai guru ([[wraft-automated-writing-evaluation-argumentative-2026]]). Fine-tuning mengajari model mencapai skor, dan penilaian adalah satu-satunya hal yang dipelajarinya.

**Transfer antar model.** Skala bukan prediktor yang andal bagi kinerja hilir di bawah adaptasi LoRA, dan **hiperparameter yang identik menghasilkan perilaku yang berbeda secara kualitatif di lintas arsitektur** ([[aiawe-automated-writing-evaluation]]). Resep yang berhasil pada satu model bukanlah sebuah resep.

**Arsitektur di atas jumlah parameter.** Fine-tuning tiga model teks-ke-gambar terbuka pada 1.000 gambar teknik nuklir beranotasi meningkatkan Stable Diffusion XL secara substansial, memberi perolehan terbatas bagi SD-v3.5-Medium, dan menghasilkan **tidak ada perbaikan yang terukur sama sekali untuk Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Masalahnya adalah validasi.** GPT-4 terdepan yang tidak dilatih menghasilkan sekitar **35%** petunjuk yang terlalu umum, salah, atau membocorkan jawaban ketika menyusun umpan balik tutor, dan pemeriksaan kualitas otomatisnya sendiri tidak sependapat dengan pertimbangan manusia ([[reddig-maclellan-personalized-feedback-llm-2026]]). Itu masalah penyaringan, dan LoRA tidak akan menyelesaikannya.

Polanya di keempatnya: adaptasi secara andal menggerakkan model menuju sasaran yang dapat Anda tentukan dan nilai. Ia tidak menambahkan pertimbangan, dan saluran yang tidak memiliki pemeriksaan tetap akan merilis keluaran yang buruk.

## Anggarkan adaptasinya dengan jujur

Untuk anak tangga adaptasi, ambangnya lebih rendah daripada yang diasumsikan sebagian besar tim: **beberapa ratus hingga beberapa ribu contoh dan satu GPU**. LoRA melatih sejumlah kecil parameter tambahan dan membiarkan bobot dasar beku, sehingga beberapa model dapat dilayani dari satu adaptor.

Peringkat adalah kompromi, bukan tombol yang harus dimaksimalkan. Perolehan per juta parameter adaptor menurun secara monoton seiring naiknya peringkat, dan keselarasan tingkat mata kuliah adalah keputusan skala-dan-peringkat, bukan peningkatan gratis ([[lora-finetuned-control-systems-course-qa-2026]]).

Lapisan mana yang Anda adaptasi juga merupakan pilihan nyata. Memperbarui **hanya empat lapisan Transformer terakhir** dari penganalisis wacana berbasis BERT mengalahkan baik adaptasi hanya lapisan teratas maupun fine-tuning kedalaman penuh ([[bert-discourse-english-teaching-2026]]). Tiga konfigurasi, tiga hasil berbeda, dan yang paling murah menang.

Biaya yang mudah diremehkan adalah evaluasi, yang lebih besar daripada tagihan komputasi. Lihat [[checking-whether-educational-ai-works|Bagaimana kita tahu sebuah AI pendidikan bekerja dengan benar, bukan hanya mendapat skor yang baik?]]

## Kalibrasi apa yang Anda harapkan

Pilihan model dan prompt bersama-sama hanya menyumbang sekitar **15%** dari ketidakselarasan antara LLM dan perolehan belajar siswa, dan dalam studi itu pembobotan patokan serta ansambel pemungutan suara bulat membuat keselarasan menjadi *lebih buruk* ([[educational-llm-alignment]]). Data pra-pelatihan adalah tuas dominan atas perilaku model, dan ia adalah satu-satunya tuas yang tidak dapat Anda tarik.

Tidak satu pun dari itu berargumen menentang kerja di atas. Itu berargumen menentang pengharapan bahwa sebuah fine-tune akan memperbaiki masalah desain. Jika masalahnya adalah tutor Anda menjawab terlalu cepat, pelatihan mungkin mengatasinya. Jika masalahnya adalah pembelajar Anda tidak terlibat dengannya, pelatihan tidak akan mengatasinya, dan angka 15% itu mengatakan uangnya lebih baik dibelanjakan di tempat lain.

## Apa yang sering disalahpahami tim

Fine-tuning adalah cara Anda mengajarkan mata kuliah Anda kepada model. Pengambilan atas materi Anda sendiri mengangkat sistem yang sama dari 52,3% ke 66,6% tanpa pelatihan sama sekali, dan sebuah prompt yang disempurnakan terhadap rubrik menggerakkan kesesuaian dari 54,75% ke 81,25%. Pelatihan mengajarkan perilaku dan format jauh lebih andal daripada mengajarkan isi.

Model dasar yang lebih besar menghilangkan kebutuhan akan semua ini. Model 8B yang di-fine-tune pada kurikulum membaca anak mengalahkan GPT-4o zero-shot dan Llama 3.3 70B pada metrik kesulitan, dan fine-tune 7B mendarat dalam jarak 0,15 dari rujukan umum yang kuat dengan sebagian kecil biaya penerapan. Ukuran dan kesesuaian adalah sumbu yang berbeda, dan hanya satu di antaranya yang dijual per token.

Lebih banyak data akan memperbaiki set pelatihan yang dibangun dengan salah. Pengawasan yang hanya berisi jawaban menyisakan akurasi di bawah 30% pada setiap ukuran data dalam studi miskonsepsi. Skala tidak memperbaiki sasaran yang kehilangan informasi yang dibutuhkan model.

Resep yang berhasil pada satu model akan berhasil pada model berikutnya. Hiperparameter identik menghasilkan perilaku yang berbeda secara kualitatif di lintas arsitektur, dan metode fine-tuning yang sama meningkatkan satu model gambar secara substansial dan tidak melakukan apa pun yang terukur untuk yang lain. Jalankan ulang resepnya pada model dasar Anda atau Anda sedang menebak.

Supervised fine-tuning adalah langkah tengah yang aman sebelum pembelajaran penguatan. Dalam SWIM tahap terawasi memperoleh 0,474 dibandingkan 0,577 dari prompt yang digantikannya, dan hanya sinyal imbalan yang memulihkannya. Langkah tengah dapat memakan biaya satu bulan dan sebuah regresi.

## Apa yang akan kembali kepada Anda

**“Anggarannya disetujui untuk fine-tuning, jadi mari kita fine-tune.”** Habiskan satu minggu untuk baseline dan indeks lebih dulu. Jika pengambilan menggerakkan angkanya, fine-tune adalah keputusan kemudian yang dibuat dengan informasi yang lebih baik, dan Anda akan memiliki kasus yang lebih kuat untuknya atau alasan yang baik untuk mengembalikan GPU.

**“Masalah kami adalah siswa tidak memakainya.”** Pelatihan mengubah apa yang dihasilkan model. Angka 15% menggambarkan seberapa besar pilihan model dan prompt berperan dalam ketidakselarasan dengan perolehan belajar, dan keterlibatan berada di luarnya. Ukur di mana siswa berhenti sebelum Anda membeli komputasi.

**“Kami tidak dapat mengirim karya siswa ke API vendor.”** Hasil LoRA terkuat di sini datang dari model terbuka dalam rentang 4B hingga 30B, dan satu adaptor melayani beberapa di antaranya. Bentuk penerapan itu tersedia bagi tim dengan satu GPU dan tanpa perjanjian pemrosesan data.

**“Prompting itu akal-akalan; kerja sungguhan berarti pelatihan.”** Tinjauan atas 23 studi pengajaran menulis menemukan prompting sebagai pendekatan dominan dan fine-tuning di belakangnya, dan perolehan terbesar yang dilaporkan di halaman ini datang dari sebuah indeks. Baik tinjauan itu maupun studi asisten mata kuliah mengurutkan anak tangga itu berdasarkan perolehan yang terukur.

**“Kami sudah mencoba prompting dan ia mencapai plato, jadi kami butuh pelatihan.”** Itu pembacaan yang benar, dan itulah satu-satunya kasus di mana pendakian itu dibenarkan. Bawa prompt yang telah dioptimalkan ke dalam fine-tune seperti yang dilakukan tim pembuatan butir, dan perkirakan perolehannya lebih kecil daripada kerja promptnya.

**“Materi mata kuliah kami tidak konsisten, jadi pengambilan akan mengembalikan sampah.”** Ia akan begitu, dan pengambilan mewarisi kualitas korpusnya. Membersihkan korpus lebih murah daripada melatih model untuk mengakalinya, dan perolehan dari 52,3% ke 66,6% diukur atas materi mata kuliah biasa, bukan atas kumpulan yang dikurasi.

## Yang perlu dilakukan pekan ini

**1.** Jalankan baseline hanya-prompt dan baseline kata kunci pada 50 pertanyaan nyata dari mata kuliah Anda, dan tuliskan kedua angkanya.

**2.** Arahkan pengambilan ke materi yang sudah Anda miliki dan jalankan ulang 50 pertanyaan yang sama, sehingga perolehannya diukur terhadap baseline Anda sendiri.

**3.** Masukkan rubrik ke dalam system prompt dan iterasi selama satu minggu. Berhenti ketika dua putaran tidak menambahkan apa pun.

**4.** Audit set pelatihan Anda untuk jejak tingkat langkah. Jika isinya pasangan pertanyaan dan jawaban, kumpulan datanya belum siap.

**5.** Tulis satu sifat yang perlu dipegang secara andal, dan putuskan apakah itu perilaku atau isi. Keputusan itu memilih anak tangganya.

## Ke mana selanjutnya

[[training-ai-tutors-to-guide-rather-than-answer|Bagaimana kita melatih tutor AI untuk membimbing siswa alih-alih menjawab mereka?]] membahas separuh bagian post-training secara rinci. [[checking-whether-educational-ai-works|Bagaimana kita tahu sebuah AI pendidikan bekerja dengan benar?]] membahas cara mengetahui apakah semua itu berhasil. [[developing-ai-tutor|Apa praktik terbaik untuk mengembangkan tutor AI yang efektif?]] adalah sisi desain interaksi dari tujuan yang sama, dan [[designing-educational-ai-software|Apa praktik terbaik untuk merancang perangkat lunak AI pendidikan?]] membahas sistem di sekelilingnya. Halaman konsep lengkapnya adalah [[llm-training-and-fine-tuning|pelatihan dan fine-tuning LLM]].
