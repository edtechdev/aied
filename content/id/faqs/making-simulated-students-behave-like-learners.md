---
title: "Bagaimana Cara Membuat Siswa Simulasi Berperilaku Seperti Pembelajar Nyata?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

Anda punya demo pada Kamis. Siswa simulasi di dalamnya salah mengerjakan soal pecahan, menerima satu petunjuk, lalu menghasilkan jawaban yang benar dengan penjelasan yang benar. Seseorang di ruangan bertanya mengapa pembelajar yang kesulitan melakukan itu, dan Anda tidak punya jawabannya.

Sebelum demo berikutnya, Anda perlu kejelasan sejauh ini: meminta model memerankan seorang siswa menghasilkan suara seorang pembelajar. Yang menghasilkan perilakunya adalah batasan pada apa yang diketahui simulator, struktur dalam giliran percakapan, dan validasi terhadap catatan dari pembelajar nyata. Hanya 3% studi yang mensimulasikan pembelajar memvalidasi simulatornya setelah digunakan, jadi tidak ada yang akan memeriksa ini untuk Anda.

## Versi singkat

**1.** Tuliskan pembelajar mana yang tidak Anda simulasikan, dan letakkan kalimat itu di tempat pengguna Anda akan membacanya.

**2.** Uji keadaan keyakinannya, bukan prosanya. Tanyakan apa yang dikatakan simulator setelah sebuah koreksi.

**3.** Batasi pengetahuan dengan sengaja: tentukan keadaan epistemiknya, atau hapus pengetahuannya.

**4.** Naskahkan interaksinya giliran demi giliran. Prompt persona yang lebih baik tidak memperbaiki penyimpangan.

**5.** Nilai fidelitas perilaku dan responsivitas terhadap bimbingan secara terpisah, terhadap catatan pembelajar nyata.

## Putuskan pertanyaan apa yang dijawab simulator

Tiga pekerjaan dilebur di bawah “siswa simulasi”, dan ketiganya memerlukan mesin yang berbeda. Melatih ulang seorang guru atau tutor memerlukan mitra yang berperilaku masuk akal di bawah tekanan. Mengaudit bagaimana AI memperlakukan berbagai profil pembelajar memerlukan cakupan profil yang Anda pedulikan. Memprediksi hasil suatu mata kuliah memerlukan distribusi pembelajar, bukan satu individu yang meyakinkan. Simulator yang dibangun untuk pekerjaan pertama akan mengecewakan Anda pada yang ketiga, dan bukti di bawah ini terus memisahkan keduanya.

## Sebutkan pembelajar yang tidak Anda cakup

Temuan yang paling berguna bagi siapa pun yang akan memercayai simulator adalah tentang cakupan. Dua belas guru yang mengajari siswa LLM melaporkan bahasa yang terlalu kompleks, emosi yang hilang, atensi yang tidak wajar, dan lompatan pengetahuan yang tidak dijelaskan, dan simulasi itu hanya mewakili satu dari empat kuadran perilaku siswa nyata ([[llm-student-simulation-teacher-insights|Martynova dkk., 2026]]). Kuadran yang mereka cakup adalah yang paling mudah disimulasikan.

Itu penting karena hampir tidak ada yang memeriksa. Hanya 3% studi yang mensimulasikan pembelajar memvalidasi simulatornya setelah digunakan. Jika Anda membangun satu dan melewati validasi, Anda berada di mayoritas yang sangat besar, dan Anda juga alasan statistik itu tetap layak dikutip.

## Batasi apa yang diketahui simulator

Model yang cakap tidak dapat dengan mudah berpura-pura menjadi orang yang hanya tahu sebagian. Penelitian menyebutnya **paradoks kompetensi**: model yang sangat cakap yang diminta meniru pembelajar dengan pengetahuan sebagian menghasilkan pola kesalahan dan dinamika pembelajaran yang tidak realistis.

Penyimpangannya punya arah, dan arahnya menunjuk ke pembelajar yang paling perlu disimulasikan. Terhadap gagasan siswa yang diambil dari 49 pelajaran sains selaras NGSS, enam model menjaga sebagian besar gagasan di dalam cakupan pengetahuan yang diharapkan dan sekitar dua pertiga pada atau di bawah tingkat bacaan target, lalu melampaui batas justru di tempat pembelajarnya paling muda. Gagasan sekolah dasar dan menengah lebih sering melampaui cakupan pengetahuan dan tingkat bacaan kelas target, dan korpusnya condong ke penalaran yang lebih luas, kosakata yang lebih teknis, dan penanda ketidakpastian yang lebih sedikit (“mungkin”, “sepertinya”) daripada gagasan pelajaran sebenarnya ([[llm-simulating-student-scientific-thinking-2026|Nguyen dan Cao, 2026]]).

Dua catatan dari studi itu. Pilihan model tidak satu dimensi, karena sistem yang mencocokkan gagasan pelajaran dengan rapat tetap dapat menaikkannya di atas tingkat kelas. Dan perbaikannya sering bersifat instruksional: prompt ulang eksplisit pada tingkat kelas mengangkat sebagian besar model kembali ke jangkauan.

## Tentukan keadaannya, atau ambil pengetahuannya

Jika model tahu terlalu banyak, Anda dapat menyebutkan keadaan yang seharusnya dimilikinya atau mengurangi pengetahuan yang seharusnya tidak dimilikinya.

**Kondisikan pada keadaan epistemik.** Kerangka tanpa pelatihan membangun prototipe kognitif setiap siswa dari sebuah [[knowledge-graph|graf pengetahuan]] dan menilai kandidat pencarian berkas terhadapnya, melaporkan peningkatan akurasi simulasi sebesar 100% ([[simulating-students-diverse-cognitive-levels-2025|Wu dkk., 2025]]). Kualitasnya naik seiring tingkat kognitif siswa, sehingga pembelajar yang lebih lemah tetap menjadi kasus yang lebih sulit, yang sayangnya justru sering menjadi intinya. Memodelkan dinamika kognitif alih-alih persona statis melangkah lebih jauh: pembaruan keadaan berbasis ICAP dari CogEvolution mencapai R²LC = 0,92 sementara agen statis mencapai 0,45, dan jatuh ke 0,58 tanpa modul ICAP-nya ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang dkk., 2026]]).

**Hapus pengetahuannya.** Menekan 16 komponen pengetahuan yang ditargetkan pada Mistral-7B menurunkan akurasi dari sekitar 0,75 pada rasio lupa 10% menjadi di bawah 0,5 pada 40%, sementara model dasar bertahan mendekati 0,85. Pengetahuan yang ditekan terbukti dapat dipulihkan melalui pembelajaran ulang terawasi dan dialog terbimbing pelatih ([[simulating-novice-students-machine-unlearning-2026|Song, Guo dan Lin, 2026]]). Ini hal yang paling dekat dengan memproduksi pemula secara langsung, dan sifat dapat dipulihkannya menjadi keunggulan jika Anda ingin simulator belajar selama satu sesi.

## Naskahkan gilirannya, bukan personanya

Stabilitas persona ternyata masalah desain interaksi, bukan pilihan model. Dengan menyilangkan lima LLM dengan tiga desain prompt dan empat persona intensitas ADHD, interaksi bernaskah yang berjangkar tugas menghilangkan penyimpangan perilaku yang dinilai pengamat, hingga 97% dibandingkan dialog tanpa naskah. Tanpa instruksi persona yang eksplisit, representasi siswa dasar condong ke gejala ADHD tinggi ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase dan Leins, 2026]]).

Jika simulator Anda menyimpang, lihat apa yang Anda minta dilakukannya giliran demi giliran sebelum Anda mengganti model atau menulis ulang deskripsi siswanya.

## Nilai dua hal, bukan satu

StudentSim menuntut dua sifat bertahan bersama: **fidelitas perilaku**, seberapa baik simulator mencocokkan respons siswa itu sendiri, dan **responsivitas terhadap bimbingan**, seberapa andal ia memperbarui diri ke arah yang dituju bimbingan tutor. Tolok ukurnya melemparkan korpus pembelajar publik (catur, tulisan bahasa Inggris sebagai bahasa kedua, matematika) ke dalam protokol per siswa yang di atasnya setiap simulator dipasang dan dinilai pada catatan yang disisihkan. Pelacakan keadaan spesifik domain ternyata lemah pada responsivitas, dan permainan peran LLM berbasis prompt saja ternyata lemah pada fidelitas ([[studentsim-llm-student-simulators|Yang dkk., 2026]]). Simulator dapat lulus satu uji dan gagal uji lainnya, jadi laporkan keduanya.

Sebagai bukti konsep, StudentSim beku yang digunakan sebagai imbalan dalam lingkar [[reinforcement-learning|pembelajaran penguatan]] tutor catur menghasilkan tutor yang dinilai pakar lebih akurat, lebih terarah, dan lebih personal daripada tutor yang dilatih terhadap imbalan simulator LLM tercanggih atau tanpa RL sama sekali. Simulator yang baik dapat menjadi sinyal pelatihan sekaligus alat ukur.

Fidelitas tingkat tindakan punya batasnya sendiri. Simulator siswa mereproduksi tindakan yang dapat diamati tanpa penalaran laten di belakangnya, dan [[inside-llm-student-simulator-reasoning-2026|INSIDE]] menyetel model untuk menghasilkan dialog internal sebelum setiap tindakan, mencapai keselarasan tertinggi antara penalaran yang dihasilkan dan suntingan kode nyata pada 51,8% untuk soal yang familiar dan 57,9% untuk soal yang belum pernah dilihat, tanpa kehilangan fidelitas tindakan (Niousha dkk., 2026). Jika Anda peduli mengapa siswa simulasi Anda melakukan sesuatu, mencocokkan tindakan tidak cukup.

## Validasi terhadap pembelajar nyata dan laporkan garis dasarnya

Dua perbandingan menunjukkan berapa biaya validasi.

Menolok ukur sembilan metode simulasi terhadap tujuh metrik berbasis rujukan pada 382 dialog yang disisihkan dari korpus publik terbesar dialog matematika siswa dan tutor nyata, prompting tertinggal dari fine-tuning pada tindak tutur (0,4998 berbanding 0,6840), ROUGE-L (0,1648 berbanding 0,3212), dan kemiripan kosinus (0,5460 berbanding 0,7390). Metode terbaik yang diuji, optimasi preferensi pada model 8B, hanya sedikit mengalahkan fine-tuning terawasi dan lebih buruk pada kesalahan, dan evaluasi manusia dengan tiga tutor mereproduksi peringkat itu ([[simulated-students-tutoring-dialogues-2026|Scarlatos dkk., 2026]]). Puncak tangga ini berada dekat dengan tengahnya, jadi garis dasar yang Anda laporkan menentukan seberapa mengesankan angka Anda sendiri.

SWIM adalah perbandingan paling jernih antara prompting, fine-tuning, dan pembelajaran penguatan, karena ia menilai setiap esai yang dihasilkan terhadap profil sifat target alih-alih menilainya secara impresionistik. Prompting berbasis rubrik memberi kendali terbatas bahkan untuk model proprietary yang kuat, dengan rata-rata QWK sifat terbaik 0,577 (Claude Sonnet) dan 0,422 (GPT-5.4), serta mendekati nol untuk model terbuka 7B. Fine-tuning terawasi pada pasangan skor-esai nyata mencapai 0,474 ± 0,023 untuk model 7B itu. GRPO dengan imbalan yang diturunkan dari penilaian esai otomatis mencapai 0,618 ± 0,005, dengan keunggulan bertahan pada dua penilai independen yang tidak pernah dilatih oleh kebijakannya ([[swim-student-writing-simulation-2026|SWIM]]).

Prompting juga menghasilkan populasi yang ideal, bukan realistis: rata-rata skor keseluruhan ternormalisasi 0,74 berbanding 0,58 untuk siswa nyata, dan panjang median 304 kata berbanding 167. Model yang dilatih memulihkan distribusi skor dan panjang manusia tanpa pengawasan panjang apa pun. Satu hal tetap sulit: bentuk kemahiran rendah yang autentik. Model yang dilatih memulihkan sintaksis tetapi menulis terlalu sedikit kesalahan ejaan dan tata bahasa, sementara prompting mensimulasikan kelemahan melalui korupsi superfisial, salah eja yang disemprotkan ke prosa yang sebenarnya kompeten.

Realisme permukaan adalah uji yang lemah di kedua arah. Dalam studi tersamar, anotator ahli salah mengklasifikasikan 164 dari 196 (83,7%) kiriman Java yang dihasilkan LLM sebagai tulisan manusia, karena kesalahannya secara fungsional tidak dapat dibedakan dari yang autentik, dan keselarasan dengan kesalahan nyata kemudian menurun seiring naiknya kesulitan soal ([[simulating-students-java-programming-errors-llms|Keramati dkk., 2026]]). Di tujuh model dari 4B hingga 120B parameter, simulator beralih ke jawaban yang benar pada tingkat yang hampir seragam apa pun umpan balik yang diterimanya, jadi kemiripan keluaran tidak mengatakan apa pun tentang keadaan keyakinan di belakangnya. Pelatihan terhadap **Selective Flip Score** mengangkat kesetiaan hingga +0,56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar dan Sachan, 2026]]).

## Periksa apakah sebuah deskripsi sudah cukup

Sebelum Anda membangun kohort, periksa opsi yang lebih murah. Untuk mengevaluasi pengalaman belajar daring sebelum siswa terlibat, memprediksi putus kuliah dan penyelesaian, serta memberi umpan balik desain, satu agen web “pendeskripsi” yang menelusuri pelajaran dan menghasilkan deskripsi pengalaman yang kaya mengungguli simulasi langsung populasi siswa.

Siswa simulasi dalam perbandingan itu menunjukkan rentang perilaku yang jauh lebih kecil daripada pembelajar nyata: di 100 agen pada lima pelajaran uji, mereka hanya mereproduksi sekitar 4% jalur yang diambil siswa nyata, sementara biaya komputasinya jauh lebih besar. Pipeline uraikan-lalu-prediksi mencapai prediksi distribusi putus kuliah terbaik pada mata kuliah CS1 global berskala besar, dengan JSD rata-rata 0,060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell dan Piech, 2025]]).

Batas yang ditariknya praktis. Mensimulasikan distribusi siswa mungkin tidak perlu, atau kontraproduktif, ketika tujuannya adalah prediksi hasil atau kritik desain. Simulasi membenarkan biayanya ketika mencakup variasi pembelajar yang sungguh penting, seperti mengaudit perlakuan AI terhadap berbagai profil atau memberi guru sesuatu untuk dilatih ulang.

## Yang salah dipahami pembangun

Realisme permukaan adalah targetnya. Tingkat salah klasifikasi 83,7% untuk kode yang ditulis mesin dan pembalikan jawaban yang hampir seragam di tujuh model sama-sama mengatakan bahwa penilai manusia yang membaca keluaran tidak dapat melihat sifat yang Anda klaim. Ujilah respons terhadap koreksi.

Prompt persona yang lebih baik memperbaiki penyimpangan. Giliran bernaskah yang berjangkar tugas memangkas penyimpangan yang dinilai pengamat hingga 97% di lima model dan tiga desain prompt. Desain gilirannya yang melakukan pekerjaannya.

Model dasar yang lebih kuat menutup celah kompetensi. Model proprietary yang kuat mendapat 0,422 pada QWK sifat dengan prompting sementara 7B yang disetel mencapai 0,474, dan perbandingan enam model yang sama paling parah melampaui batas pada tingkat kelas termuda. Pilihan model menukar satu sumbu fidelitas dengan sumbu lain.

Validasi berarti seorang kolega membaca transkrip dan menganggapnya terdengar benar. Hasil Java menunjukkan seberapa jauh penilaian itu berlaku. Validasi berarti catatan yang disisihkan dari pembelajar nyata dan garis dasar yang dapat Anda sebutkan.

Mensimulasikan populasi adalah opsi yang menyeluruh. Di 100 agen, simulasinya mencakup sekitar 4% jalur yang diambil siswa nyata, dengan komputasi yang jauh lebih tinggi daripada agen pendeskripsi.

## Apa yang akan kembali kepada Anda

**“Guru tidak dapat membedakan simulator kami dari seorang siswa.”** Dalam studi Java tersamar, anotator ahli salah mengklasifikasikan 83,7% kiriman mesin sebagai manusia. Itu mengukur para anotator, dan membiarkan keadaan keyakinan tanpa pemeriksaan.

**“Fine-tuning di luar jangkauan tim kami.”** Maka batasi klaimnya sesuai yang didukung prompting, dan katakan demikian. Prompting menetapkan langit-langit 0,577 untuk model terkuat yang diuji dan mendekati nol untuk 7B terbuka, dan menghasilkan distribusi skor yang ideal.

**“Kami tidak punya akses ke data pembelajar nyata.”** Protokol StudentSim dibangun dari korpus pembelajar publik dalam catur, tulisan bahasa kedua, dan matematika. Data publik membatasi apa yang dapat Anda klaim tentang populasi Anda sendiri, dan memberinya garis dasar, yaitu hal yang paling sering dihilangkan laporan.

**“GRPO mengalahkan fine-tuning terawasi, jadi kami harus melatih dengan RL.”** Benar, pada 0,618 berbanding 0,474. Bentuk kemahiran rendah tetap sulit dalam kedua kasus, dengan terlalu sedikit kesalahan ejaan dan tata bahasa, dan dalam tolok ukur terpisah optimasi preferensi hanya sedikit mengalahkan fine-tuning dan kalah pada kesalahan. Periksa sifat mana yang menjadi sandaran kasus penggunaan Anda.

**“Pembelajar terlemah hanya sebagian kecil pengguna kami.”** Mereka kasus tersulit bagi setiap metode di halaman ini, dan temuan cakupan mengatakan simulasinya mengelompok di kuadran termudah. Jika simulator Anda akan digunakan untuk menarik kesimpulan tentang siswa yang kesulitan, celah itu harus masuk ke dalam tulisan Anda.

## Yang perlu dilakukan pekan ini

**1.** Tulis kalimat cakupan: pembelajar mana yang tidak diwakili simulator ini. Letakkan di README dan catatan demo.

**2.** Tambahkan satu uji ke set uji Anda yang mengoreksi simulator dan memeriksa apakah ia tetap salah.

**3.** Ganti obrolan persona bebas di satu alur dengan giliran berjangkar tugas, dan bandingkan penyimpangannya.

**4.** Nilai satu simulator yang ada terhadap catatan nyata yang disisihkan pada fidelitas dan responsivitas, dan laporkan kedua angka secara terpisah.

**5.** Jalankan pemeriksaan agen pendeskripsi pada pertanyaan yang benar-benar perlu Anda jawab sebelum Anda mendanai kohort.

## Ke mana selanjutnya

[[simulating-students|Simulasi siswa]] adalah halaman konsep lengkapnya. [[checking-whether-educational-ai-works|Memeriksa apakah AI pendidikan bekerja]] membahas evaluasi sistem yang Anda uji terhadap simulator, dan [[making-ai-better-at-supporting-learning|Membuat AI lebih baik dalam mendukung pembelajaran]] membahas metode pelatihan di balik hasil fine-tuning di sini. [[addressing-common-misconceptions-ai-education|Menangani kesalahpahaman umum tentang AI dalam pendidikan]] membahas apakah siswa simulasi dapat menggantikan pembelajar nyata dalam penelitian.
