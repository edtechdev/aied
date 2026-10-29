---
title: "Bagaimana Kita Tahu bahwa AI Pendidikan Bekerja dengan Benar, Bukan Hanya Memberi Skor yang Baik?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/checking-whether-educational-ai-works
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

Laporan evaluasi seorang vendor tiba dengan satu angka di bagian atas: kesepakatan dengan penilai manusia, 0,84. Atau uji coba Anda berakhir Jumat dan buktinya terdiri atas survei kepuasan ditambah satu baris tolok ukur yang disalin dari catatan rilis model. Dalam rapat seseorang bertanya apakah sistem itu berfungsi, dan Anda memiliki angka yang terdengar seperti jawaban.

Jawaban singkatnya: skor yang paling sering Anda lihat mengukur kemiripan, dan kemiripan adalah klaim yang lebih lemah daripada “ini mengajar” atau bahkan “umpan balik ini dapat dibaca”. Putuskan apa yang diizinkan oleh setiap angka untuk dibuktikan, beri skor pada setiap keluaran yang dihasilkan sistem Anda, dan ubah akurasi menjadi aturan dengan ambang, seorang manusia, dan penghematan yang menyertainya. Angka yang tidak dapat ditindaklanjuti siapa pun bukan bukti.

## Versi singkat

**1.** Tuliskan satu kalimat yang menyebutkan apa yang Anda pedulikan, lalu pilih ukuran yang membaca hal itu. Tumpang tindih kata tidak akan memberi tahu Anda apakah penalarannya benar.

**2.** Evaluasi setiap keluaran secara terpisah. Skor pemberian nilai yang kuat tidak mengatakan apa pun tentang modul umpan balik di sebelahnya.

**3.** Minta seseorang menilai sekitar lima puluh keluaran dan bandingkan penilaian itu dengan pemeriksa otomatis Anda. Di tempat keduanya tidak sepakat, pemeriksa itulah yang sedang diuji.

**4.** Gantikan “akurasi 0,84” dengan aturan: di bawah keyakinan ini, manusia membaca responsnya. Laporkan ambangnya, bagian pekerjaan yang dihemat, dan bagaimana kesepakatan itu berubah karenanya.

**5.** Uji keselamatan di sepanjang percakapan utuh, dan periksa setiap siswa simulasi sebelum Anda memercayai apa yang dikatakannya tentang tutor Anda.

## Putuskan apa yang diizinkan oleh angka itu untuk dibuktikan

Dua keluarga angka mendominasi literatur ini. Keduanya mengukur seberapa dekat keluaran Anda menyerupai sesuatu yang lain, dan itu klaim yang lebih lemah daripada kebenaran.

**Skor kemiripan** (ROUGE dan BLEU) membandingkan pilihan kata dalam jawaban sistem Anda dengan pilihan kata dalam jawaban acuan. Model yang menulis sesuatu yang dekat dengan teks yang diharapkan memperoleh skor baik, bahkan ketika penalarannya salah, atau ketika siswa dapat mencapai jawaban yang benar melalui jalur yang tidak mengajarkan apa pun.

**Skor kesepakatan** (QWK, kappa terbobot kuadratik) mengukur seberapa dekat nilai model sejajar dengan nilai manusia. Model dapat menyamai penilai pada nilai akhir sementara salah tentang alasannya, dan alasan itulah bagian yang dipelajari siswa.

Siswa dapat mencapai jawaban yang salah melalui jalur salah yang tampak seperti jalur benar, dan tidak ada skor kemiripan yang menyadarinya. Jika penalaran adalah hal yang Anda pedulikan, ukurannya harus membaca penalaran itu: rubrik yang diterapkan oleh manusia, atau pemeriksaan yang ditulis untuk langkah tertentu itu.

Asisten mata kuliah Sistem Kendali Linear melaporkan hal ini dengan cara yang benar. Konfigurasi terbaiknya mencapai skor kemiripan **0,4093** terhadap jawaban acuan, dengan peningkatan yang terukur secara andal di atas nol, dan penulisnya menyatakan terus terang bahwa angka-angka itu mengukur pilihan kata dan format ([[lora-finetuned-control-systems-course-qa-2026]]). Skornya tidak mengesankan dan makalahnya tetap berguna, karena makalah itu menyebutkan apa yang dicakup skor tersebut.

## Beri skor pada setiap keluaran secara terpisah

Dalam proyek WrAFT, model yang disetel halus mencapai skor kesepakatan **0,84** dengan penilai manusia pada 360 esai TOEFL yang disisihkan. Itu hasil yang kuat untuk pemberian nilai. Model proyek yang sama yang dilatih menulis umpan balik menghasilkan keluaran yang terpotong dan tidak dapat diurai, sementara sekadar memberi prompt kepada model lain menghasilkan umpan balik yang lebih disukai guru ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Basis pengetahuan ini memuat kegagalan yang sama dalam bentuk kedua: sebuah penerapan yang modul penilaiannya memperoleh skor baik dan yang umpan baliknya tiba terpotong di tengah kalimat dan tidak dapat dibaca. Tidak ada apa pun dalam angka utamanya yang menyatakan hal itu.

Jadi daftarlah keluaran yang dihasilkan sistem Anda, lalu beri masing-masing ukurannya sendiri dan syarat lulusnya sendiri. Pemberian nilai, teks umpan balik, pemilihan petunjuk, dan penolakan keselamatan gagal dengan cara yang berbeda, dan skor tingkat modul tidak dapat melihat melampaui modulnya sendiri.

## Tempatkan manusia di tempat model tidak yakin

Korelasi memberi tahu Anda bahwa model biasanya benar. Korelasi itu tidak memberi tahu apa yang harus dilakukan pada kesempatan ketika model tidak benar. Hasil perutean berbasis keyakinan adalah templat paling bersih dalam basis pengetahuan ini, dan cukup singkat untuk disalin.

Keyakinan ternyata merupakan tanda peringatan yang andal: ketika model tidak yakin, model lebih cenderung salah (**β = -0,602, p < 0,001**). Tim mengirimkan **20%** respons yang paling tidak yakin kepada manusia. Satu aturan itu menaikkan kesepakatan dengan nilai manusia dari **0,78 menjadi 0,82** dan memangkas pekerjaan penilaian manual sekitar **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Perhatikan apa yang dimuat laporan itu: ambang, manusia, dan penghematan. “Kesepakatan 0,84” tidak memuat satu pun dari ketiganya, itulah sebabnya angka itu sulit ditindaklanjuti dan mudah diperdebatkan.

## Periksa pemeriksa otomatis Anda terhadap manusia

Banyak tim kini menggunakan model kedua untuk menilai model pertama. Susunan itu masuk akal dan model kedua tidak otomatis benar.

Sebuah studi yang meminta model mutakhir menulis petunjuk untuk [[intelligent-tutoring|sistem tutor cerdas]] menemukan sekitar **35%** petunjuk itu terlalu umum, salah, atau membocorkan jawaban, dan pemeriksaan kualitas otomatis milik model itu sendiri tidak sepakat dengan penilaian manusia tentang petunjuk mana yang buruk ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Versi praktisnya: ambil sampel sekitar lima puluh keluaran, minta seseorang menilainya, dan bandingkan dengan penilaian pemeriksa Anda. Di tempat keduanya menyimpang, Anda telah mempelajari sesuatu tentang pemeriksa itu. Simpan sampel dan tabel ketidaksepakatan, karena itu juga artefak yang menjawab peninjau yang bertanya bagaimana Anda tahu.

## Ukur kuantitas itu sendiri ketika tugasnya memungkinkan

Perbaikan paling bersih adalah melatih model pada kuantitas yang sama dengan yang ingin Anda ukur. Sebuah model yang disetel halus dilatih untuk mereproduksi sifat statistik soal ujian: seberapa sulit setiap butir, seberapa baik butir itu memisahkan siswa yang lebih kuat dari yang lebih lemah. Model itu mempelajari pola-pola tersebut dan bukan diberi tahu ([[multimodal-item-parameter-estimation-2026]]). Karena sasarannya adalah sifat dari penilaian itu sendiri, evaluasinya dapat tentang sifat tersebut dan bukan tentang pilihan kata.

Laporkan perkembangan dan bukan hanya titik akhirnya. Simulator menulis SWIM menerbitkan skor setiap tahap secara berdampingan: prompting berbasis rubrik **0,577**, penyetelan halus **0,474 ± 0,023**, pembelajaran penguatan **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Pembaca dapat melihat dari tabel itu apakah pelatihan tersebut menghasilkan sesuatu. Satu angka akhir tidak dapat memberi tahu mereka, dan angka itu menyembunyikan satu tahap di mana model yang disetel halus berkinerja lebih buruk daripada prompt.

## Bandingkan dengan sesuatu di luar proyek Anda

Dapatkan garis dasar lebih dahulu, termasuk yang murah. Model asisten mata kuliah tanpa landasan memperoleh skor di bawah pencarian kata kunci biasa, dan itu jenis hasil yang mengubah peta jalan dan hanya memakan satu hari untuk ditemukan.

Tolok ukur dari luar kemudian memberi tahu Anda apakah angka Anda berguna sama sekali. Pada tolok ukur pedagogi CDPK, EduQwen mencapai **96,52%** dibandingkan **90,55%** milik Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Pedagogy Benchmark, yang dibangun dari ujian pengembangan profesional guru sungguhan dan mencakup **97 model**, menemukan akurasi yang berkisar dari **28% hingga 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre dkk., 2025]]).

Pada tugas tentang mengajar, model berkisar dari buruk hingga baik, sehingga hasil tolok ukur menempatkan sistem Anda di suatu tempat di dalam rentang yang lebar.

## Uji keselamatan pada percakapan utuh

Sebagian besar pengujian keselamatan memeriksa satu pertukaran. Kerugian yang penting dalam tutor menumpuk. SafeTutors menemukan bahwa bahkan model yang dibangun khusus untuk mengajar mengalami degradasi sepanjang percakapan panjang dan dapat mengungkap jawaban yang seharusnya mereka tahan ([[hazra-safetutors-pedagogical-safety-2026]]).

Jalankan pemeriksaan pada percakapan yang lengkap, dan tulis giliran uji dengan sengaja: siswa yang salah, siswa yang terus mendesak, siswa yang mencoba membujuk model keluar dari perannya. Tutor yang bertahan sepuluh giliran lalu menyerah pada giliran kesebelas gagal dalam ujian yang penting, dan rangkaian uji per balasan akan memberinya skor bersih.

## Periksa siswa simulasi sebelum Anda memercayainya

Menghasilkan siswa simulasi daripada merekrut siswa sungguhan membuat evaluasi jauh lebih murah. Siswa simulasi juga merupakan instrumen pengukuran, dan instrumen itu dapat salah dengan cara instrumen salah: terlalu kooperatif, terlalu lancar, terlalu cepat menerima petunjuk.

Uji paling langsung dalam basis pengetahuan ini membandingkan siswa simulasi dan siswa yang diberi prompt terhadap **382 dialog yang disisihkan** dari kumpulan publik terbesar dialog matematika siswa dan tutor sungguhan, dengan tujuh ukuran yang mencakup bahasa, perilaku, dan berpikir ([[simulated-students-tutoring-dialogues-2026]]). Karya lain mendesak realisme dari sudut berbeda: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] melatih model untuk bertindak dan berpikir seperti siswa, dan profil yang sadar riwayat mengondisikan simulasi pada masa lalu seorang siswa dan bukan pada persona tetap ([[history-aware-student-simulation|simulasi siswa yang sadar riwayat]]).

Jika rangka uji Anda adalah siswa simulasi, validasi simulator itu terhadap transkrip sungguhan sebelum Anda membiarkannya menilai tutor Anda.

## Apa yang salah dipahami tim evaluasi

Skor kesepakatan yang tinggi berarti sistem itu benar. Skor itu berarti sistem menilai seperti penilai yang Anda bandingkan, pada esai yang Anda bandingkan. Angka 0,84 WrAFT disertai umpan balik yang tidak dapat diurai.

Satu angka dapat mewakili seluruh produk. Tim mengirim dasbor dengan “akurasi 0,84” di sudutnya dan tidak ada bidang untuk modul umpan balik, kebijakan petunjuk, atau perilaku penolakan. Skor tingkat modul adalah angka yang paling mudah dihitung dan hal yang paling sedikit memberi informasi untuk dilaporkan.

Tolok ukur dari luar menyelesaikan pertanyaan apakah alat itu berfungsi. Rentang 28% hingga 89% pada Pedagogy Benchmark mengatakan bahwa keluarga tugas itu sulit dan dilayani secara tidak merata. Posisi Anda dalam rentang itu adalah fakta tentang model Anda. Apa yang dapat dilakukan siswa Anda setelahnya adalah fakta yang berbeda.

Model yang menilai model adalah pengganti murah bagi penilaian manusia. Memang murah. Angka 35% dan ketidaksepakatan tentang petunjuk mana yang buruk menggambarkan apa yang akan diloloskan oleh penilai yang tidak pernah diperiksa.

Siswa simulasi membuat evaluasi menjadi gratis. Mereka membuatnya murah, dan mereka memindahkan biayanya ke validasi. Perbandingan 382 dialog itu ada karena instrumennya perlu dikalibrasi.

## Apa yang akan kembali kepada Anda

**“Kami tidak punya anotator untuk ini.”** Lima puluh keluaran yang dinilai sudah cukup untuk memulai. Nilailah sendiri jika tidak ada orang lain yang luang, dan simpan lembarnya.

**“Skor tolok ukur kami mengalahkan Gemini.”** Memang, pada CDPK, pada prompt yang digunakan tolok ukur itu. Letakkan ukuran tanpa bantuan di sebelahnya.

**“Penilai otomatis kami sepakat dengan penilai manusia kami.”** Maka Anda memiliki satu korelasi pada satu sampel. Tanyakan pada keluaran mana keduanya tidak sepakat dan bacalah keluaran itu, karena di situlah kegagalannya berada.

**“Kami tidak dapat menjalankan evaluasi penuh sebelum peluncuran.”** Jalankan tiga yang murah: satu keluaran yang diberi skor terpisah, lima puluh keluaran yang dinilai manusia, satu uji keselamatan sepanjang percakapan. Butir-butir mahal dapat menyusul setelah uji coba.

**“Sistem ini baru demo, jadi evaluasinya terlalu dini.”** Demo adalah tempat termurah untuk mengetahui bahwa angka Anda mengukur pilihan kata. Begitu ada peta jalan yang melekat padanya, temuan yang sama lebih mahal untuk ditindaklanjuti.

## Yang perlu dilakukan pekan ini

**1.** Tuliskan klaim satu kalimat yang seharusnya didukung evaluasi Anda. Letakkan di bagian atas dokumen evaluasi.

**2.** Daftar setiap keluaran yang dihasilkan sistem dan beri masing-masing satu baris, satu ukuran, dan satu syarat lulus.

**3.** Ambil lima puluh keluaran, nilailah sendiri, dan letakkan penilaian Anda di samping penilaian pemeriksa.

**4.** Hitung distribusi keyakinan dan tulis aturan perutean dengan angka di dalamnya, ditambah nama orang yang membaca apa pun yang berada di bawahnya.

**5.** Jalankan satu percakapan keselamatan di mana siswa salah, mendesak dua kali, dan meminta jawabannya.

## Ke mana selanjutnya

[[making-ai-better-at-supporting-learning|Bagaimana kita dapat membuat AI lebih baik dalam mendukung pembelajaran di bidang kita sendiri?]] mencakup sisi desain dari masalah yang sama. [[training-ai-tutors-to-guide-rather-than-answer|Melatih tutor AI untuk memandu dan bukan menjawab]] menangani jalur pelatihan menuju perilaku tutor, dan [[evaluating-ai-interventions-methods|mengevaluasi intervensi AI]] adalah versi pertanyaan ini yang ditujukan kepada pengajar, dengan [[reporting-interpreting-aied-research|pelaporan dan penafsiran penelitian AIEd]] sebagai versi yang ditujukan kepada peneliti. Metodenya berada di bawah [[ai-ed-evaluation|evaluasi AIEd]] dan [[llm-training-and-fine-tuning|pelatihan dan penyetelan halus LLM]].
