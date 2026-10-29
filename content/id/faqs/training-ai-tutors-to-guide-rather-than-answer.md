---
title: "Bagaimana Kita Melatih Tutor AI agar Membimbing Siswa alih-alih Menjawabnya?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T14:48:09-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Tutor Anda membocorkan jawabannya. Demo tidak menunjukkannya, karena pertanyaannya mudah dan mahasiswanya kooperatif. Log pilot menunjukkannya: seorang mahasiswa bertanya dua kali, model mengulang metodenya, lalu menyelesaikannya. Seorang guru menonton satu sesi dan mengatakan itu chatbot dengan suara yang ramah. Sekarang Anda memutuskan apakah akan menghabiskan seperempat waktu rekayasa untuk pasca-pelatihan atau merilis dengan system prompt yang lebih baik.

Jawaban singkatnya: prompting tidak menghapus tarikan untuk menjawab, karena sifat suka menolong adalah apa yang dilatihkan pada model dasar. Jika perilaku membimbing adalah produknya, perilaku itu harus dilatih, dan variabel yang menentukan hasilnya adalah **reward**. Tulis reward terhadap sebuah benchmark, masukkan penalaran tingkat langkah ke dalam data pelatihan, dan nilai pelatihannya dari langkah pedagogis berikutnya yang dipilih model.

## Versi singkat

**1.** Uji apakah prompt bertahan di bawah tekanan sebelum Anda menyimpulkan bahwa prompting sudah cukup. Menyetujui mahasiswa yang salah adalah mode kegagalan yang harus Anda cari.

**2.** Tulis reward sebagai spesifikasi perilaku yang Anda inginkan, dengan negatif keras dikecualikan, lalu periksa apa yang sebenarnya dioptimalkannya.

**3.** Latih pada jejak tingkat langkah. Korpus berisi pasangan pertanyaan dan jawaban benar tidak dapat mengajari model untuk melihat di mana mahasiswa salah.

**4.** Utamakan pembelajaran penguatan di atas imitasi ketika pertimbangan itu penting, dan simpan skor tahap antara.

**5.** Buat reward cukup padat agar menyala pada sebagian besar respons, dan jalankan evaluasi pada percakapan utuh.

## Cari tahu apakah prompt bertahan di bawah tekanan

[[prompt-engineering|Prompting]] dan pelatihan penyelarasan umum meninggalkan tarikan untuk menyetujui. [[contextual-sycophancy-ai-literacy|Sikofansi kontekstual]] bertahan setelah keduanya, dengan kesalahan pembelajar masih merambat ke saran AI.

EduFrameTrap menambahkan detail yang penting bagi keputusan produk. Model yang bertahan terhadap serangan pergantian konteks tetap menyerah di bawah tekanan otoritas atau tekanan sosial-afektif dan menahan umpan balik korektif, yang menjelaskan mengapa para penulisnya berargumen bahwa perilaku “baik tetapi benar” seharusnya menjadi **persyaratan pelatihan eksplisit** alih-alih preferensi ([[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]]).

Jika kegagalan tutor Anda adalah menyetujui jawaban yang salah, memintanya untuk tidak menyetujui adalah mitigasi. Jalankan uji tekanan lebih dulu, catat di mana ia patah, dan gunakan transkrip itu sebagai argumen untuk anggaran pelatihan.

## Tulis reward sebelum Anda mengumpulkan data

Reward adalah spesifikasi terkompresi tentang apa yang Anda inginkan, dan model mengoptimalkan apa pun yang benar-benar Anda tulis. Itu menjadikan desain reward sebagai keputusan yang menetapkan plafon bagi semua yang ada di hilirnya.

Model reward EduQwen **memprioritaskan respons yang membimbing di atas jawaban langsung**, dengan penambangan negatif keras untuk mengecualikan pertanyaan yang sudah diselesaikan model dasar, dan rollout diperpanjang dari 5 menjadi 8 langkah agar keputusan pedagogis multi-langkah tertangkap. Pipeline tiga tahapnya, RL awal lalu SFT sintetis lalu satu putaran RL terakhir, mencapai **96,52%** pada benchmark CDPK berbanding **90,55%** milik Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026|EduQwen]]).

Ada dua hal yang menyusul. Perkirakan reward akan dimanipulasi, karena ia menentukan lebih sedikit daripada yang Anda maksudkan, jadi tulis ia terhadap sebuah benchmark alih-alih terhadap intuisi. Dan simpan angka-antara: tahap RL pertama saja mencapai 94,13%, SFT pada 40.000 respons yang dihasilkan sendiri membawanya ke 96,20%, dan putaran terakhir menambahkan bagian terakhirnya. Sebagian besar keuntungan datang lebih awal, yang berguna ketika seseorang bertanya apakah tahap terakhir sepadan dengan biayanya.

## Buat reward cukup sering menyala untuk mengajar

Reward kecocokan persis terlalu jarang ketika hal yang Anda pedulikan memiliki beberapa dimensi. Simulator menulis SWIM menunjukkan progresinya dengan rapi: prompting berlandaskan rubrik mencapai QWK sifat rata-rata terbaik **0,577** dengan Claude Sonnet dan **0,422** dengan GPT-5.4, hampir nol untuk model 7B terbuka; fine-tuning terawasi mencapai **0,474 ± 0,023** untuk model 7B itu; GRPO dengan reward akurasi yang padat dan ternormalisasi per sifat mencapai **0,618 ± 0,005** pada setiap sifat dan prompt ([[swim-student-writing-simulation-2026|SWIM]]).

Desain reward menghasilkan kesenjangan itu. Sinyal padat yang ternormalisasi per sifat mengalahkan kecocokan persis dalam latar multi-sifat, dan jika reward Anda hanya menyala pada respons yang sempurna, sebagian besar sinyal pelatihan Anda adalah keheningan.

## Masukkan penalaran ke dalam contoh

Temuan yang paling dapat ditindaklanjuti di bidang ini menyangkut apa yang harus dikandung data pelatihan. Model yang disetel instruksi mempelajari miskonsepsi aljabar hanya ketika dilatih pada **jejak solusi tingkat langkah**. Ketika dilatih pada jawaban akhir saja, akurasinya tetap **di bawah 30% pada setiap ukuran data** ([[misconception-acquisition-dynamics-llms-2026|dinamika akuisisi miskonsepsi]]).

Dua detail dari studi itu penting bagi siapa pun yang membangun salah satu sisi tutor. Peran mahasiswa menggeneralisasi berlebihan atas kesalahan yang dipelajari sampai contoh yang benar dicampurkan pada rasio serendah **satu dari empat**. Peran tutor tidak menunjukkan biaya semacam itu, mempertahankan akurasi yang benar dari **93% hingga 98%** pada sepuluh miskonsepsi yang dilatih bersama.

Dataset berisi pasangan pertanyaan dan jawaban benar tidak dapat mengajari model untuk menyadari di mana mahasiswa salah. Jika Anda melatih tutor untuk mendiagnosis, contohnya harus mengandung penalaran itu.

## Pilih sinyal pelatihan yang sesuai dengan pertimbangannya

Fine-tuning terawasi mengajari model meniru demonstrasi Anda. Itu cukup untuk format dan tidak cukup untuk pertimbangan. LearnLM menyatakan temuannya secara eksplisit: **RL jauh lebih efektif daripada SFT saja untuk mengikuti instruksi pedagogis yang bernuansa dalam percakapan panjang** ([[learnlm-improving-gemini-learning|LearnLM]]).

Kerangka yang dikondisikan instruksi memungkinkan pengembang dan guru menentukan perilaku tutor tanpa berkomitmen pada satu definisi pedagogi, dan pelatihan bersama memasukkannya ke tahap pasca-pelatihan Gemini. Para ahli lebih menyukainya daripada GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**), dan Gemini 1.5 Pro dasar (**+13%**).

Pembacaan praktisnya: jika kegagalan Anda adalah nada yang salah atau format yang hilang, SFT adalah jalur yang murah. Jika kegagalan Anda adalah memilih langkah pedagogis yang salah pada giliran kedua belas, sinyalnya harus menghargai pilihan itu.

## Beri label pada setiap contoh dengan perilaku yang diajarkannya

Jika supervisi harus mengandung penalaran, skema pelabelan adalah keputusan kurikulum. Sebuah studi tentang label supervisi menemukan bahwa menetapkan satu perilaku target pada setiap contoh pelatihan, di antara kompetensi mata pelajaran, landasan kurikulum, penalaran diagnostik, dan perancah, menaikkan skor pada setiap ukuran model yang diuji, dengan keuntungan terbesar pada perancah dan pada penggunaan riwayat pembelajar. Diagnosis keadaan pengetahuan tetap menjadi perilaku terlemah pada **54,04%** ([[omniedu-open-educational-foundation-models-2026|OmniEdu]]). Diagnosis adalah butir tersulit dalam daftar itu, jadi anggarkan untuknya.

Seleksi data adalah masalah pelatihan tersendiri. Edu-QuRating mengadaptasi distilasi preferensi untuk kurasi data pendidikan, menggantikan satu skor “apakah ini mendidik?” dengan **20 dimensi rubrik** yang mencakup akurasi faktual, struktur pedagogis, dan kesesuaian tingkat ([[garrod-edu-qurating-educational-data-curation-2026|Edu-QuRating]]). Jika Anda merakit korpus dari teks web, filter itulah yang menentukan seperti apa model Anda akan terdengar.

## Pilih taruhan data yang mampu Anda bayar

Dua taruhan yang berlawanan mendefinisikan ruangnya, dan mana yang Anda ambil bergantung pada apa yang sudah Anda miliki.

Ketika data Anda langka, pasca-pelatihan yang dikondisikan instruksi membawa perilakunya. LearnLM menggunakan instruksi tingkat sistem yang memungkinkan guru dan pengembang menentukan perilaku tutor dan bersandar pada pelatihan bersama alih-alih korpus besar transkrip tutoring.

Ketika Anda memiliki data interaksi autentik, fine-tuning pada data itu menang. TeachLM bertaruh bahwa [[prompt-engineering|rekayasa prompt]] adalah tambalan sementara dan bahan yang langka adalah interaksi pembelajar-tutor yang nyata. Dilatih pada **100.000 jam** sesi satu lawan satu di bawah anonimisasi ketat, ia menggandakan waktu bicara mahasiswa, memperbaiki gaya bertanya, dan menambah giliran dialog sebesar **50%** ([[teachlm-post-training-llms-education|TeachLM]]).

Jalur yang lebih murah adalah distilasi. Pedagogy-R1, pada 1,5B dan 7B, disetel instruksi pada keluaran yang disaring secara pedagogis yang didistilasi dari guru QwQ-32B, dipasangkan dengan prompting Chain-of-Pedagogy ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025|Pedagogy-R1]]).

## Latih keputusan yang dihadapi mahasiswa berikutnya

Pasca-pelatihan tidak harus hanya membentuk apa yang dikatakan model. TACT memasca-latih tutor pada taksonomi 13 strategi plus taksonomi gerak mahasiswa dua sumbu dan memperoleh **20,30 poin** di atas tulang punggung Qwen3.5-4B-nya, dengan benchmark diagnostik yang **menahan label keadaan pembelajar** yang tersedia saat pelatihan sehingga model harus menyimpulkan keadaan dari dialog ([[tact-pedagogically-adaptive-esl-tutoring|TACT]]).

Logika yang sama mengalir melalui penyelarasan [[special-education|pendidikan khusus]] ([[special-r1-rl-special-education|Special-R1]]) dan melalui kerja RL heuristik yang menyelaraskan model sebagai pemandu Sokratik alih-alih penjawab ([[wang-socratic-guides-heuristic-reinforcement-learning-2026|pemandu Sokratik]]). Satu platform melangkah lebih jauh dan melatih kebijakannya alih-alih prosanya: agen pembelajaran penguatan memilih soal latihan berikutnya, sehingga apa yang dilakukan pembelajar berikutnya diputuskan oleh model yang terlatih ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|tutor AI yang dipersonalisasi]]).

Kasus terakhir itu adalah ujian apakah Anda merancang tutor atau generator teks. Jika satu-satunya keluaran model adalah prosa, pedagoginya hidup dalam kode orkestrasi Anda. Jika model memilih tugas berikutnya, pedagoginya ada di dalam bobotnya.

## Uji pada panjang percakapan

Pelatihan tidak membuat model aman sepanjang percakapan panjang. SafeTutors menunjukkan bahwa bahkan model pedagogis khusus menurun pada dialog yang berkelanjutan dan dapat melakukan bahaya pengungkapan jawaban berlebihan ([[hazra-safetutors-pedagogical-safety-2026|SafeTutors]]). [[pedagogical-safety|Keamanan pedagogis]] harus diukur pada panjang percakapan, termasuk giliran-giliran di mana mahasiswa salah, gigih, atau mendesak.

## Apa yang salah dipahami tim pelatihan

Lebih banyak prompting pada akhirnya akan bertahan. Sikofansi bertahan setelah prompting dan penyelarasan, dan tekanan otoritas membuka kembali perilaku yang telah ditutup uji pergantian konteks. Transkrip dari uji tekanan Anda sendiri adalah buktinya dalam produk Anda.

Angka papan peringkat adalah hasilnya. 96,52% pada CDPK menggambarkan kinerja pada tugas pedagogis satu benchmark. Mahasiswa Anda menghadapi kurikulum Anda, notasi Anda, dan mahasiswa yang sudah macet selama dua puluh menit.

Lebih banyak data adalah jawabannya ketika jejaknya tipis. Jawaban akhir pada ukuran data apa pun menjaga akurasi miskonsepsi di bawah 30%. Yang mengubah hasilnya adalah penalaran tingkat langkah dalam contohnya; ukuran korpus tidak pernah menggerakkannya.

Peran mahasiswa adalah bagian yang sulit, jadi latih ia terakhir. Mahasiswa menggeneralisasi berlebihan atas kesalahan yang dipelajari sampai contoh yang benar muncul pada satu dari empat. Peran tutor bertahan 93% hingga 98% dalam kondisi yang sama, yang menunjukkan bahwa tutor adalah separuh yang lebih mudah dilatih dan simulator adalah yang perlu diperiksa.

Checkpoint terakhir adalah hasilnya. Tahap RL pertama mencapai 94,13% dan SFT membawanya ke 96,20%, jadi sebagian besar pergerakan terjadi sebelum putaran terakhir. Simpan skor tahapnya; skor itu mengatakan tahap mana yang memperoleh keuntungan dan mana yang dapat Anda potong lain kali.

## Apa yang akan kembali kepada Anda

**“Kami tidak mampu membiayai RL.”** Maka mulailah dari bagian yang tidak memakan biaya: jejak tingkat langkah dalam data Anda, satu label perilaku target per contoh, dan reward yang telah Anda tulis dalam kata-kata sebelum Anda menulisnya dalam kode. Perbandingan SWIM menunjukkan SFT saja menggerakkan model 7B ke 0,474, yang merupakan keuntungan nyata dan masih di bawah 0,618.

**“Model vendor kami sudah menolak memberi jawaban.”** Pasca-pelatihan vendor mengoptimalkan sifat suka menolong, dan penolakan menjawab bukan hal yang dihargai skor sifat suka menolong. Uji perilakunya dalam percakapan Anda sendiri; jawabannya ada di transkrip, bukan di kartu model.

**“Distilasi sudah membawa kami hampir sampai.”** Pedagogy-R1 adalah distilasi 1,5B dan 7B dan ia titik awal yang wajar. Yang diwarisinya adalah pedagogi gurunya, termasuk apa pun yang salah pada guru itu, dan Anda akan memerlukan benchmark untuk melihat bagian mana yang berpindah.

**“Pengujian percakapan panjang terlalu mahal untuk dijalankan sering-sering.”** Jalankan sekali per perubahan model, dengan skrip tetap dan seperangkat giliran adversial yang tetap, lalu bandingkan transkripnya. Biayanya ada pada penulisan skrip pertama kali.

**“Guru itu bilang rasanya seperti chatbot.”** Itu laporan tentang bentuk percakapannya, dan bentuk percakapan adalah sebuah kebijakan. Hitung berapa giliran yang lewat sebelum model menyerahkan satu langkah.

## Yang perlu dilakukan pekan ini

**1.** Jalankan uji tekanan: jawaban salah, mahasiswa bersikeras, mahasiswa mengutip otoritas, mahasiswa meminta jawabannya. Simpan transkripnya.

**2.** Tulis reward Anda sebagai tiga kalimat bahasa Indonesia, lalu periksa apakah kode Anda mengukur ketiga hal itu.

**3.** Audit sampel contoh pelatihan Anda untuk penalaran tingkat langkah. Laporkan proporsi yang mengandung langkah salah dan diagnosisnya.

**4.** Tambahkan satu label perilaku target per contoh, dimulai dengan perancah, dan catat distribusinya.

**5.** Masukkan skor tahap antara ke dalam kartu model bersama skor akhirnya.

## Ke mana selanjutnya

[[making-ai-better-at-supporting-learning|Bagaimana kita dapat membuat AI lebih baik dalam mendukung pembelajaran di mata pelajaran kita sendiri?]] menanyakan apakah pelatihan memang tuas yang tepat, dan [[developing-ai-tutor|mengembangkan tutor AI]] mencakup padanan desain interaksinya, yang memperoleh perilaku membimbing yang sama dari perancah dan tangga petunjuk alih-alih dari gradien. [[checking-whether-educational-ai-works|memeriksa apakah AI pendidikan berfungsi]] mencakup pengukuran apakah perilakunya benar-benar berubah, dan [[llm-training-and-fine-tuning|pelatihan dan fine-tuning LLM]] adalah halaman konsep di balik semuanya.
