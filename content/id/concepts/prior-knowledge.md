---
title: "Pengetahuan Awal"
created: "2026-08-22T01:20:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [constructivist, learning-theories, metacognition, prior-knowledge, scaffolding]
technology: [personalized-learning, student-modeling]
confidence: high
updated: "2026-11-08T13:51:25-05:00"
translation_of: "concepts/prior-knowledge"
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

> **Pengetahuan awal** — pengetahuan, keterampilan, keyakinan, dan model mental yang sudah dimiliki pembelajar saat menghadapi tugas belajar baru. Ia adalah prediktor terkuat tunggal bagi pembelajaran berikutnya: informasi baru ditafsirkan melalui — dan diintegrasikan dengan — apa yang sudah diketahui pembelajar, sehingga pengajaran yang mengaktifkan dan membangun di atas pengetahuan awal menghasilkan pembelajaran yang lebih kuat dan lebih tahan lama daripada pengajaran yang memperlakukan setiap pembelajar sebagai kertas kosong. Dalam [[ai-education|AI dalam pendidikan]], pengetahuan awal menjadi pusat [[student-modeling]] (menyesuaikan [[personalized-learning|pengajaran]] dengan keadaan pembelajar saat ini), pusat prinsip [[constructivist]] bahwa pengetahuan dibangun secara aktif di atas model mental yang ada, dan pusat risiko bahwa alat AI yang mengambil lebih dulu dan menyodorkan konten melewati [[retrieval-spacing-interleaving|latihan pengambilan kembali]] yang mengaktifkan pengetahuan awal.

## Pertanyaan yang Perlu Dipertimbangkan

- Apa sesuatu yang Anda pelajari secara mendalam dan sesuatu yang Anda kesulitan pelajari? Seberapa besar perbedaannya ditentukan oleh apa yang sudah Anda ketahui ketika memulai?
- Memiliki pengetahuan awal tidaklah cukup—ia harus diambil kembali dan dihubungkan secara aktif. Kapan mengingat kembali apa yang sudah Anda ketahui (atau gagal mengingatnya) mengubah seberapa baik Anda mempelajari sesuatu yang baru?
- Halaman ini menyatakan pengetahuan awal dapat *mengganggu* ketika ia keliru (sebuah miskonsepsi). Dapatkah Anda memikirkan keyakinan yang Anda pegang yang membuat informasi baru yang benar lebih sulit dipelajari?
- AI generatif yang mengambil jawaban lebih dulu dapat melewati latihan pengambilan kembali yang mengaktifkan pengetahuan awal. Bagaimana alat yang dirancang untuk membantu Anda belajar justru dapat mencegah Anda mengingat apa yang Anda ketahui?
- Jika AI harus memperkirakan keadaan pengetahuan awal Anda untuk mempersonalisasi, apa yang terjadi ketika perkiraan itu salah? Seberapa yakin Anda bahwa sebuah sistem dapat mengetahui secara akurat apa yang sudah Anda ketahui?
- Bagaimana 'mengaktifkan pengetahuan awal' berbeda dari sekadar mengajukan pertanyaan kepada siswa sebelum [[teacher-role|mengajar]]? Apa yang akan membuat aktivasi itu benar-benar memperdalam pembelajaran yang menyusul?

## Pendahuluan

Aktivasi pengetahuan awal adalah salah satu temuan paling kokoh dalam [[learning-sciences|ilmu pembelajaran]]: pembelajar tidak menyerap materi baru dalam ruang hampa melainkan memetakannya ke skema yang sudah ada, dan mutu pemetaan itu menentukan retensi dan [[transfer-of-learning|transfer]]. Konsep ini menopang pengatur awal (advance organizer) Ausubel, aktivasi pengetahuan awal sebelum pengajaran baru, latihan pengambilan kembali sebagai bentuk pengaktifan dan penguatan apa yang diketahui, dan [[assessment|penilaian]] diagnostik atas apa yang sudah diketahui pembelajar. Di era AI, pengetahuan awal memperoleh urgensi baru karena [[generative-ai|AI generatif]] dapat *menopang* aktivasi ([[prompt-engineering|meminta]] pembelajar mengingat kembali dan menghubungkan apa yang mereka ketahui) atau *melewatinya* sepenuhnya (menyediakan jawaban atau konten yang sudah diambil lebih dulu secara instan, yang tidak pernah perlu diambil kembali atau diintegrasikan oleh pembelajar).

## Peran pengetahuan awal

- **Ia adalah prediktor pembelajaran terkuat.** Puluhan tahun [[research-methods-aied|riset]] menunjukkan bahwa apa yang sudah diketahui pembelajar berkorelasi dengan [[learning-gains|hasil belajar]] lebih kuat daripada hampir semua faktor lain, karena informasi baru dikodekan relatif terhadap model mental yang ada. Sistem AI yang menyesuaikan diri dengan keadaan pengetahuan awal tiap pembelajar karena itu menjanjikan efisiensi dan [[transfer-of-learning|transfer]] secara khusus.
- **Seberapa lebih kuat, dalam satu perbandingan teracak.** Dua tutor matematika kelas dua yang identik kecuali pada apakah pemilihan tugas mengikuti perkiraan penguasaan penelusuran pengetahuan Bayes tidak menghasilkan perbedaan skor pascates. Pengetahuan awal memprediksi skor itu pada η²p = .63 (F(1, 124) = 206.99, p < .001) sementara urutan adaptif menyumbang η²p = .00 ([[adaptive-intelligent-tutoring-primary-mathematics-2026|Sibley, Berner dan Schmalfeldt (2026)]]). Adaptasi menata ulang urutan latihan; apa yang dibawa pembelajar ke dalamnya tetap membawa hasilnya.
- **Aktivasi penting, bukan hanya kepemilikan.** Memiliki pengetahuan awal tidaklah cukup — ia harus diambil kembali dan dihubungkan secara aktif dengan materi baru. Inilah sebabnya "mengaktifkan pengetahuan awal" adalah langkah [[pedagogy|instruksional]] standar, dan sebabnya latihan pengambilan kembali (mengingat apa yang Anda ketahui sebelum menambahkannya) meningkatkan pembelajaran melampaui paparan ulang sederhana.
- **Ia tidak selalu memprediksi siapa yang melakukan kerja yang menggerakkan pembelajaran.** Dalam studi [[learning-by-teaching|belajar-dengan-mengajar]] lima hari bersama 23 tutor sekolah menengah pertama, skor tes sebelumnya tidak memprediksi porsi respons pembangunan pengetahuan yang dihasilkan seorang tutor, dan tutor berpengetahuan awal rendah yang membangun pengetahuan berakhir secara statistik setara dengan rekan berpengetahuan awal tinggi ([[knowledge-building-tutor-learning-2026|Ameen et al., 2026]]).
- **Ia membentuk penafsiran.** Pembelajar menafsirkan informasi baru melalui apa yang sudah mereka yakini. Ketika keyakinan itu keliru ([[misconceptions]]), pengetahuan awal dapat *mengganggu* pembelajaran, yang membuat pengajaran harus memunculkan dan menangani miskonsepsi alih-alih mengasumsikan titik awal yang netral.
- **Ia menggerakkan pemodelan siswa.** Untuk mempersonalisasi, sistem AI harus memperkirakan keadaan pengetahuan awal pembelajar — dasar [[knowledge-tracing]], pemodelan siswa, dan [[scaffolding]] adaptif. Mutu perkiraan ini menentukan apakah adaptasi benar-benar membantu atau menyesatkan.
- **Isi pengetahuan menentukan proses mana yang direkrut latihan.** Apakah pembelajaran bergantung pada memori atau pada induksi ditentukan oleh struktur pengetahuan awal sasarannya: [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] mengikuti kerangka KLI dalam membedakan komponen pengetahuan dengan kondisi dan respons konstan (fakta, diperoleh melalui memori dan latihan pengambilan kembali) dari yang memiliki kondisi dan respons variabel (keterampilan, diperoleh melalui induksi dan generalisasi ke masukan baru) — yang menjadi sebab campuran optimal contoh terkerjakan dan latihan berbeda untuk konten fakta versus konten keterampilan.

## Pengetahuan awal di era AI

AI generatif telah menjadikan pengetahuan awal pertimbangan desain yang sentral alih-alih variabel latar:

- **Risiko pelewatan.** [[agentic-ai-pedagogical-best-practice-2026|AI agensik proaktif]] yang mengambil lebih dulu dan menyodorkan konten dapat melewati latihan pengambilan kembali yang mengaktifkan pengetahuan awal — pembelajar tidak pernah perlu mengingat kembali atau mengintegrasikan apa yang mereka ketahui sebelum menerima jawaban. Ini salah satu dari enam risiko pedagogis yang diidentifikasi dalam kerangka praktik terbaik pendidikan [[agentic-ai|agensik]], dan ia terhubung langsung ke [[cognitive-offloading|Ketergantungan Berlebih]] dan prinsip [[desirable-difficulties]] bahwa pemrosesan penuh usaha menopang pembelajaran yang tahan lama.
- **Pengetahuan awal membentuk pola pengalihdayaan, bukan hanya hasilnya.** Dalam studi penulisan sintesis, klaster berpengetahuan tinggi dengan pengalihdayaan minimal menulis 80% esainya berbanding 2% bagi klaster dengan pengalihdayaan terberat (rata-rata 25.1 prompt), sehingga volume prompt menjejaki pengetahuan awal alih-alih usaha ([[cognitive-offloading-llm-synthesis-writing|Poquet et al. (2026)]]).
- **Kesenjangan manfaat berlipat.** Karena penggunaan AI yang produktif bergantung pada apa yang sudah diketahui pembelajar, siswa dengan pengetahuan awal lebih kuat memanfaatkannya lebih baik sementara pemula paling mungkin memperlakukannya sebagai pengganti — risiko distribusional yang dapat melebarkan kesenjangan capaian bahkan ketika aksesnya setara ([[lodge-loble-cognitive-offloading-2026|Lodge & Loble (2026)]]).
- **Penyalaan awal dan aktivasi sebagai desain.** [[genai-mindtool-generative-learning|Pendekatan mindtool GenAI]] dengan sengaja "menyiapkan tugas belajar" dengan mengaktifkan pengetahuan awal dan rasa ingin tahu melalui pertanyaan pemancing, visual yang dihasilkan AI, dan analogi (mis., "Apa yang sudah Anda ketahui tentang ekosistem?") sebelum memperkenalkan konten baru — memodelkan jalur pengambilan-dan-integrasi alih-alih jalur penyediaan jawaban.
- **Pemodelan siswa dan memori.** Sistem AI kian memodelkan keadaan pengetahuan awal dan memori longitudinal pembelajar (mis., memasukkan keadaan pengetahuan awal dan kurva lupa ke dalam memori tutoring), yang memungkinkan pengulangan berjarak dan tinjauan adaptif yang membangun di atas apa yang sudah diketahui tiap pembelajar.([[nie-personavlm-long-term-personalization-2026]])
- **Tuas adaptasi yang dipersonalisasi.** Karena pembelajar berbeda jauh dalam pengetahuan awal, adaptasi harus disetel ke individu — argumen inti bagi [[personalized-learning]] dan [[scaffolding]] adaptif yang menemui pembelajar pada keadaan aktualnya alih-alih pada asumsi rata-rata kelas.

## Implikasi bagi desain AI dalam pendidikan

1. **Aktifkan sebelum menyediakan.** Rancang interaksi AI untuk meminta pembelajar mengambil kembali dan mengartikulasikan apa yang sudah mereka ketahui sebelum menyediakan konten atau jawaban baru — mempertahankan latihan pengambilan kembali alih-alih melewatinya.
2. **Modelkan keadaan pengetahuan awal pembelajar.** Bangun pemodelan siswa dan adaptasi di atas pengetahuan awal yang diperkirakan (dan miskonsepsinya), bukan di atas keseragaman yang diasumsikan, agar personalisasi benar-benar responsif.
3. **Munculkan dan tangani miskonsepsi.** Ketika pengetahuan awal keliru, ia akan mengganggu; pengajaran harus mengeliciasi dan mengoreksi miskonsepsi alih-alih menambahkan konten baru di atas fondasi yang cacat.
4. **Timbang pertukaran gesekan.** Mengaktifkan pengetahuan awal menambahkan kesulitan yang diinginkan (pengambilan kembali, integrasi) yang cenderung dihapus oleh bawaan AI yang menghilangkan gesekan — ketegangan yang harus dikelola dengan sengaja alih-alih dibiarkan diselesaikan otomasi secara bawaan.

## Miskonsepsi Umum

**"Pengetahuan awal memprediksi siapa yang melakukan kerja kognitif."** Ia memprediksi hasil lebih andal daripada memprediksi perilaku. Dalam studi belajar-dengan-mengajar lima hari bersama **23 tutor sekolah menengah pertama**, skor tes sebelumnya **tidak** memprediksi porsi respons pembangunan pengetahuan yang dihasilkan seorang tutor, dan tutor berpengetahuan awal rendah berupaya membangun pengetahuan alih-alih memilih yang lebih sedikit. Siapa yang terlibat dalam perjuangan produktif tidak sekadar siapa yang datang dengan pengetahuan terbanyak.

**"Pengalihdayaan adalah sifat pembelajar yang stabil, sehingga siswa yang sama mengalihdayakan jumlah yang sama di mana pun."** Ia menjejaki pengetahuan awal di dalam tugas. Dalam studi penulisan sintesis, **klaster berpengetahuan tinggi dengan pengalihdayaan minimal menulis 80% esainya berbanding 2% bagi klaster dengan pengalihdayaan terberat**. Pengalihdayaan karena itu sebagian besar merupakan respons terhadap apa yang sudah dimiliki pembelajar dan apa yang dituntut tugas, yang menjadikannya variabel desain alih-alih variabel watak.

**"Siswa dengan pengetahuan awal lebih sedikit membutuhkan lebih banyak dukungan AI."** Itu arah yang paling mungkin melebarkan kesenjangan, karena pola pengalihdayaan yang terukur memusatkan kehilangan kepengarangan di tempat pengetahuan awal paling tipis. Dukungan yang menyediakan pekerjaan kepada pembelajar yang paling kurang diperlengkapi untuk mendeteksi substitusi menghapus aktivitas yang akan membangun pengetahuan yang hilang.

**"Pengetahuan awal adalah masukan tetap yang tidak dapat digerakkan mata kuliah."** Ia adalah faktor dengan bobot terbesar dalam pembelajaran baru, yang menjadikan pembangunannya tugas dengan daya ungkit tertinggi alih-alih kondisi latar — sebabnya pengetahuan domain adalah intervensi itu sendiri, bukan sekadar kovariat.

## Konsep terkait

- [[learners]] — Pembelajar: payung bagi konsep-konsep sisi pembelajar
- [[constructivist]]
- [[personalized-learning]]
- [[student-modeling]]
- [[misconceptions]]
- [[icap-framework]]
- [[knowledge-tracing]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[transfer-of-learning]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[desirable-difficulties]]
- [[learning-theories]]
- [[productive-failure]] — Kegagalan Produktif
- [[retrieval-spacing-interleaving]] — bagaimana apa yang sudah diketahui pembelajar menentukan apa yang dapat dilakukan latihan pengambilan kembali

## Artikel terkait

- [[agentic-ai-pedagogical-best-practice-2026]] — Ketegangan antara otomasi dan pembelajaran (risiko aktivasi pengetahuan awal)
- [[genai-mindtool-generative-learning]] — GenAI sebagai mindtool: menyiapkan dan mengaktifkan pengetahuan awal
- [[nie-personavlm-long-term-personalization-2026]] — Pemodelan siswa dan memori dengan LLM
- [[lodge-loble-cognitive-offloading-2026]] — Lodge & Loble tentang pengalihdayaan kognitif
- [[cognitive-offloading-llm-synthesis-writing]] — Pengalihdayaan kognitif dalam penulisan sintesis dengan LLM
- [[bridging-instructional-design-framework-math]] — Kerangka desain instruksional untuk matematika
- [[knowledge-building-tutor-learning-2026]] — pembangunan pengetahuan alih-alih pengetahuan awal memprediksi pembelajaran tutor, dan tutor berpengetahuan awal rendah yang membangun pengetahuan menyusul
- [[rachatasumrit-example-problem-ratio-2026]]
- [[adaptive-intelligent-tutoring-primary-mathematics-2026]] — Pengetahuan awal membawa pascates (η²p = .63) sementara pemilihan tugas adaptif tidak membawa apa pun (Sibley et al. 2026)
