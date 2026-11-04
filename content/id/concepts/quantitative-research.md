---
title: "Penelitian Kuantitatif"
created: "2026-08-24T02:05:00-04:00"
type: concept
assessment: [educational-measurement]
research_method: [survey, experiment]
confidence: high
methods: [quantitative-research, research-methods-aied]
updated: "2026-11-04T02:37:02-05:00"
translation_of: "concepts/quantitative-research"
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Penelitian kuantitatif** — keluarga metode empiris yang mengumpulkan dan menganalisis data *numerik* untuk menggambarkan pola, menguji hubungan, dan mengestimasi efek kausal. Dalam [[ai-education|AI dalam pendidikan]], metode kuantitatif mengukur apakah dan bagaimana alat AI memengaruhi [[learning-gains|hasil belajar]], [[student-engagement|keterlibatan]], [[motivation|motivasi]], dan [[self-efficacy|efikasi diri]], serta memodelkan mekanisme psikologis dan perilaku penggunaan AI. Metode ini menyediakan keluasan, presisi, dan kekuatan inferensi kausal yang ditukar oleh [[qualitative-research|metode kualitatif]] demi kedalaman dan konteks.

## Pertanyaan yang Perlu Dipertimbangkan

- 'Siswa yang menggunakan tutor AI mendapat skor lebih tinggi' — sebelum Anda membaca, apakah ini klaim tentang kausalitas atau korelasi, dan satu bukti apa yang akan mengubah yang satu menjadi yang lain?
- Survei potong lintang dapat menguji model mediasi yang kompleks namun tidak pernah menetapkan kausalitas. Mengapa dua variabel bisa berkorelasi dalam survei bahkan ketika tidak satu pun menyebabkan yang lain? Dapatkah Anda memikirkan cara agar benar-benar tersesat oleh korelasi semacam itu dalam pendidikan?
- Instrumen kuantitatif hanya sebaik apa yang diukurnya — dan halaman ini mencatat bahwa instrumen dapat mengukur konstruk yang salah. Ketika Anda mengisi survei laporan diri tentang 'kepercayaan diri' atau 'keterlibatan', apa yang sebenarnya mungkin ditangkapnya, dan bagaimana Anda akan mengetahuinya?
- RCT secara acak menugaskan siswa ke kondisi untuk mengestimasi efek kausal. Apa yang membuat penugasan acak kuat, dan masalah praktis serta etis apa yang muncul ketika 'perlakuan' adalah alat AI yang mungkin membantu sementara sebagian siswa ditolak aksesnya?
- Desain longitudinal melacak siswa yang sama sepanjang waktu — esensial untuk membedakan kinerja yang digelembungkan AI dari pembelajaran yang bertahan lama. Mengapa satu potret skor tinggi gagal mengungkap apakah pembelajaran benar-benar terjadi?
- Kerja kuantitatif menyediakan keluasan dan kekuatan kausal; kerja kualitatif menyediakan kedalaman dan makna. Sebelum membaca pasangan ini, di mana Anda pikir angka semata paling mungkin menyesatkan Anda tentang sebuah klaim pembelajaran, dan metode apa yang akan Anda tambahkan untuk memeriksanya?

## Pendahuluan

Penelitian kuantitatif mencakup desain deskriptif (mengukur prevalensi dan pola), desain korelasional/observasional (menguji hubungan antar variabel), serta desain eksperimental dan kuasi-eksperimental (mengestimasi efek kausal). Yang menyatukan semuanya adalah reduksi sistematis observasi menjadi angka, yang dianalisis dengan statistik, dan prioritas yang diberikan pada **reliabilitas, validitas, dan kemampuan generalisasi** — perhatian inti [[educational-measurement]].

## Pendekatan kuantitatif utama

### Penelitian survei dan korelasional
Survei potong lintang mengukur sikap, persepsi, motivasi, [[self-efficacy]], dan penerimaan teknologi yang dilaporkan sendiri, sering dimodelkan dengan regresi atau pemodelan persamaan struktural (SEM/PLS-SEM) untuk menguji hubungan dan mediator yang dihipotesiskan. Pendekatan ini mendominasi korpus basis pengetahuan, terutama untuk pertanyaan penerimaan, motivasi, dan mekanisme psikologis. [[acceptance-ai-english-tools-2026|Penerimaan alat bahasa Inggris berbantuan AI]] membangun [[technology-acceptance-model|TAM]] dengan SEM; [[tian-genai-learning-adoption-pathways-2026|Jalur adopsi GenAI]] menggunakan PLS-SEM, fsQCA, dan pemetaan importance-performance; [[teacher-education-ai-literacy-sdt-2026|literasi AI guru]] menggunakan survei tervalidasi faktor yang berlandaskan [[self-determination-theory]].

- **Kekuatan:** sampel besar; cakupan luas dan berbiaya rendah; menguji model mediasi yang kompleks; layak untuk sikap yang sulit diamati.
- **Keterbatasan:** data potong lintang tidak dapat menetapkan kausalitas; bias laporan diri; pengambilan sampel kemudahan membatasi kemampuan generalisasi; mediator disimpulkan dari kovarians, bukan manipulasi. Lihat [[self-report-measures]] untuk pembahasan batasan ini dari sisi instrumen.
- **Model mediasi tersaturasi tidak dapat menguji urutannya sendiri.** Survei satu gelombang atas 1,020 mahasiswa keperawatan membagi efek total 1.36 menjadi langsung 0.92 dan tak langsung 0.44 melalui pembelajaran mandiri, 32.35% dari total, dengan model yang memiliki parameter bebas sebanyak kovarians teramati sehingga mereproduksi data secara konstruksi ([[li-nursing-genai-interaction-self-regulated-learning-2026|Li et al. (2026)]]).
**Efek tak langsung total yang mendekati nol dapat menyembunyikan dua jalur yang hidup.** Dalam satu gelombang laporan diri dari 568 mahasiswa desain, asosiasi tak langsung berjalan 0.0929 melalui fokus promosi dan -0.0884 melalui fokus pencegahan, berjumlah 0.0045 sementara jalur langsung membawa 98.7% dari total ([[wang-ai-disruption-design-innovation-competence-2026|Wang et al. (2026)]]).

### Penelitian eksperimental dan kuasi-eksperimental
Eksperimen secara acak menugaskan siswa ke kondisi (misalnya, tutor AI vs. tutor manusia, atau berbantuan scaffolding AI vs. tanpa bantuan) untuk mengestimasi efek kausal pada hasil. **Uji terkontrol acak ([[rct]]s)** adalah standar emas untuk validitas internal. [[access-not-enough-ai-tutoring-2026|Studi lapangan acak tentang dukungan manusia plus tutoring AI]] dan [[genai-can-harm-teaching-rct-2026|sebuah RCT tentang AI generatif dalam pengajaran]] menggunakan penugasan untuk mengisolasi efek kausal. Desain **kuasi-eksperimental** (pra/pasca, kelompok dipasangkan tanpa pengacakan) lebih layak di kelas utuh tetapi lebih lemah dalam klaim kausal.

[[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al. (2025)]] mengadopsi crossover dalam-subjek: setiap siswa menemui konten fisika yang sama dua kali, sekali dalam pelajaran pembelajaran aktif di kelas dan sekali melalui tutor AI milik kursus itu sendiri, dengan pra- dan pasca-tes di sekitar masing-masing, sehingga setiap siswa menjadi kontrol bagi dirinya sendiri dan perbedaan antar-individu saling menghapus.

- **Kekuatan:** inferensi kausal terkuat; pengukuran hasil yang bersih; mendukung estimasi ukuran efek dan klaim khasiat.
- **Keterbatasan:** mahal dan lambat; kondisi artifisial mengurangi validitas ekologis; alat AI yang berubah cepat membuat eksperimen cepat usang; sampel kecil kurang bertenaga untuk mendeteksi efek; kendala etis dalam menahan alat yang membantu.
- **Uji akses teracak kelompok membutuhkan pemeriksaan penyerapan.** Dengan sekitar 15% siswa di kelas perlakuan yang pernah menggunakan tutor, estimasi intent-to-treat studi mencerminkan efek pengenalan alat — termasuk izin dan substitusi yang dibawanya — alih-alih efek terisolasi dari sesi individual ([[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]]).

### Penelitian longitudinal
Desain longitudinal melacak siswa yang sama sepanjang waktu, menangkap perubahan, pertumbuhan, dan pembelajaran yang bertahan lama yang terlewat oleh pengukuran satu titik waktu. [[ai-lms-middle-school-longitudinal|Studi LMS longitudinal]] melacak siswa sepanjang satu tahun ajaran. Desain longitudinal esensial untuk membedakan kinerja yang digelembungkan AI dari [[genai-performance-vs-learning|pembelajaran yang bertahan lama]].


Perbandingan antar kumpulan data membutuhkan titik kerja tetap: pemeriksaan struktural atas data pendidikan sintetis menemukan bahwa menganalisis setiap kumpulan data pada ambangnya sendiri membalik kontras yang bertahan pada titik bersama, dan bahwa perbandingan surrogatnya hanya membutuhkan data sintetis dan permutasi dari dirinya sendiri - null berbasis permutasi alih-alih ambang absolut ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).

### Kuantifikasi komputasional dan psikometrik
Metode kuantitatif juga mencakup pengukuran langsung konstruk melalui instrumen — domain [[educational-measurement]] dan [[item-response-theory]]. [[jin-glat-genai-literacy-assessment|GLAT]] dalam basis pengetahuan adalah instrumen kuantitatif 20 item yang divalidasi dengan IRT; [[educational-measurement|instrumen pengukuran]] di seluruh [[ai-literacy|literasi AI]], penerimaan, dan efikasi diri menyediakan skala tervalidasi tempat penelitian survei dan eksperimental bergantung.

Analisis bibliometrik adalah keluarga kuantitatif lebih lanjut: [[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram et al. (2026)]] memetakan 1,403 publikasi [[medical-education]] melalui jaringan ko-okurensi negara, institusi, dan kata kunci, membaca bentuk sebuah literatur alih-alih menilai studinya — yang membuat kesimpulan mereka, bahwa keilmuan [[governance]] belum mengimbangi pengujian kapabilitas, menjadi klaim tentang lapangan dan bukan tentang pembelajaran.

## Bagaimana penelitian kuantitatif muncul dalam basis pengetahuan

- **Klaim khasiat dan kausal.** RCT dan kuasi-eksperimen menguji apakah alat AI meningkatkan pembelajaran ([[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]]).

- **Praregistrasi dan replikasi.** [[chatbot-outreach-course-performance-2026|Meyer et al. (2026)]] menyatakan hipotesis dan rencana analisis mereka sebelum uji dan menggabungkan perbandingan teracak lintas dua semester dan dua kursus asinkron besar, sehingga estimasinya bertumpu pada rencana tetap dan satu replikasi alih-alih satu sampel.
- **Pemodelan mekanisme.** SEM/PLS-SEM menguji mediator dan moderator adopsi AI serta pembelajaran ([[tian-genai-learning-adoption-pathways-2026]], [[acceptance-ai-english-tools-2026]], [[teacher-education-ai-literacy-sdt-2026]]).

- **Model panel yang memisahkan efek dalam-individu dari antar-individu.** [[genai-reliance-human-agency-collaborative-learning-2026|Wu dan Lu (2026)]] mengestimasi model panel cross-lagged random-intercept atas tiga gelombang data penulisan kolaboratif, yang memisahkan perbedaan stabil antar siswa dari urutan temporal dalam-individu — pembedaan yang memungkinkan pembacaan ketergantungan yang meningkat sebagai mendahului turunnya agensi yang dipersepsikan alih-alih sekadar menyertainya.
- **Pengukuran dan pengembangan skala.** Basis pengetahuan mendokumentasikan pengembangan dan validasi instrumen kuantitatif ([[jin-glat-genai-literacy-assessment|GLAT]], [[educational-measurement]]).

- **Kinerja versus pembelajaran yang bertahan lama.** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] mengacak 120 siswa ke belajar berbantuan AI atau tradisional dan mengukur retensi dengan tes kejutan 20 pertanyaan 45 hari setelah intervensi, sehingga hasilnya adalah apa yang bertahan melewati jeda alih-alih apa yang muncul di akhir sesi.

## Kekuatan dan keterbatasan

- **Kekuatan:** presisi dan kekuatan statistik; kemampuan generalisasi ke populasi yang didefinisikan; inferensi kausal (dengan desain eksperimental); cakupan sampel besar yang efisien; kumulatif dan sebanding antar studi.
- **Keterbatasan:** menangkap apa yang terukur, sering melewatkan proses, makna, dan konteks (lihat [[qualitative-research]]); bias laporan diri; instrumen dapat mengukur konstruk yang salah (lihat [[educational-measurement|persoalan pengukuran]]); korelasi tanpa kausalitas; dapat bersifat artifisial dan lambat relatif terhadap perubahan AI.

Metode kuantitatif dan [[qualitative-research|kualitatif]] saling melengkapi — kerja kuantitatif menyediakan keluasan dan kekuatan kausal, kerja kualitatif menyediakan kedalaman dan makna. [[mixed-methods-research|Desain metode campuran]] menggabungkan keduanya. Lihat [[research-methods-aied]] untuk perbandingan metode lengkap dan kontras antara desain eksperimental, survei, kualitatif, dan lainnya.

## Miskonsepsi Umum

- **"Estimasi intent-to-treat menggambarkan apa yang dilakukan alat."** Dalam uji akses teracak kelompok di mana **sekitar 15% siswa di kelas perlakuan pernah menggunakan tutor**, estimasi ITT mencerminkan **efek pengenalan** alat alih-alih efek penggunaannya. Penyerapan yang rendah membuat angka ITT menjadi pernyataan tentang implementasi, dan melaporkannya sebagai efek alat melebih-lebihkan apa yang diukur.
- **"Kinerja pada tugas adalah hasilnya."** [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]] mengacak **120 siswa** ke belajar berbantuan AI atau tradisional dan mengukur **retensi** — desain yang memisahkan kinerja langsung dari pembelajaran yang bertahan lama. Studi yang berhenti pada tugas telah mengukur kuantitas yang lebih mudah.
- **"Perbandingan antar kumpulan data itu lugas."** Pemeriksaan struktural atas data pendidikan sintetis menemukan bahwa **menganalisis setiap kumpulan data pada ambangnya sendiri membalik kontras yang bertahan pada titik kerja bersama**. Tanda perbandingan itu bergantung pada pilihan analitis, yang merupakan jenis kerapuhan yang hendak dicegah oleh titik kerja terpraregistrasi.

## Konsep terkait

- [[research-methods-aied]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[rct]]
- [[learning-gains]]
- [[student-engagement]]
- [[self-efficacy]]
- [[technology-acceptance-model]]
- [[self-report-measures]]

## Artikel terkait

- [[access-not-enough-ai-tutoring-2026]] — Studi lapangan acak tentang dukungan manusia plus tutoring AI
- [[genai-can-harm-teaching-rct-2026]] — AI generatif dapat merugikan pengajaran: sebuah RCT
- [[acceptance-ai-english-tools-2026]] — Penerimaan alat pembelajaran bahasa Inggris berbantuan AI
- [[tian-genai-learning-adoption-pathways-2026]] — Jalur adopsi GenAI (PLS-SEM, fsQCA)
- [[teacher-education-ai-literacy-sdt-2026]] — Literasi AI guru melalui teori penentuan diri
- [[jin-glat-genai-literacy-assessment]] — GLAT: tes literasi GenAI yang divalidasi IRT
- [[ai-lms-middle-school-longitudinal]] — Studi LMS terintegrasi AI yang longitudinal
- [[adaptive-pretesting-retention]] — Pretesting adaptif dan retensi
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Terlewat oleh Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Uji akses teracak kelompok membutuhkan pemeriksaan penyerapan
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Analisis bibliometrik adalah keluarga kuantitatif lebih lanjut: Sriram et al.

- [[li-nursing-genai-interaction-self-regulated-learning-2026]] — Penggunaan kecerdasan buatan generatif dan interaksi pendidikan interpersonal di antara mahasiswa keperawatan: pembelajaran mandiri sebagai mediator statistik

- [[wang-ai-disruption-design-innovation-competence-2026]] — Kesadaran disrupsi teknologi AI, pola pikir design thinking, dan kompetensi inovasi desain di antara mahasiswa desain
