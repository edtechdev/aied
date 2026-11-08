---
title: "Transfer Belajar"
created: "2026-05-07T18:02:28-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
updated: "2026-11-08T14:14:01-05:00"
translation_of: "concepts/transfer-of-learning"
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

> **Transfer Belajar** — sejauh mana pengetahuan atau keterampilan yang diperoleh dalam satu konteks (mis., latihan dengan alat AI) bertahan dan dapat diterapkan dalam konteks yang berbeda (mis., kinerja mandiri tanpa alat itu). Dalam [[ai-education|AI dalam pendidikan]], transfer adalah pertanyaan terbuka yang sentral: apakah keuntungan kinerja yang ditunjukkan siswa *dengan* alat AI berubah menjadi pembelajaran tahan lama yang dapat mereka tunjukkan *tanpanya*.

## Pertanyaan untuk Dipertimbangkan

- Berikut pola mencolok yang didokumentasikan halaman ini: siswa sering menunjukkan keuntungan segera pada tugas yang dibantu AI, namun keuntungan itu dapat lenyap — atau bahkan terbalik — ketika AI diambil. Sebelum membaca penjelasannya, mengapa menurut Anda alat yang jelas membantu saat itu juga bisa berakhir membuat siswa lebih buruk tanpanya?
- Ingat sesuatu yang Anda pelajari dengan tutor, kalkulator, atau asisten lalu harus Anda lakukan sendiri. Apakah keterampilan itu terbawa, atau Anda merasa bergantung pada bantuan itu? Apa yang berbeda antara pengalaman yang bertransfer baik dan yang tidak?
- Intuisi umum adalah bahwa 'latihan adalah latihan' — bahwa mengerjakan tugas dengan bantuan membangun keterampilan yang sama dengan mengerjakannya sendiri. Di mana intuisi itu bisa menyesatkan, terutama ketika bantuannya adalah AI yang menyelesaikan penalaran untuk Anda alih-alih menuntun Anda melaluinya?
- Halaman ini menarik perbedaan antara 'efek dengan' teknologi dan 'efek dari' teknologi — tampil lebih baik saat memakai alat versus menjadi lebih mampu tanpanya. Jika Anda instruktur, perancang, atau siswa, mana dari keduanya yang menjadi tujuan nyata Anda, dan bagaimana Anda tahu Anda telah mencapainya?
- Bukti menunjukkan bahwa seberapa banyak kerja kognitif yang Anda delegasikan itu penting: mengalihkan tugas permukaan seperti tata bahasa lebih sedikit merugikan transfer daripada mengalihkan penalaran dan struktur yang dalam. Pikirkan terakhir kali Anda memakai AI pada sebuah tugas. 'Lapisan' mana yang Anda delegasikan, dan apa yang diprediksi pilihan itu tentang apa yang akan Anda ingat?
- Halaman ini mengusulkan kondisi yang mungkin mendukung transfer positif — [[pedagogy|pedagogis]] [[guardrails]], dukungan yang memudar, kalibrasi terhadap kesiapan pembelajar. Jika Anda merancang (atau menjadi pengguna) alat belajar AI, apa yang akan Anda tuntut agar keuntungan saat memakainya menjadi kemampuan yang tahan lama tanpanya?

## Pendahuluan

Transfer belajar adalah persoalan mendasar dalam [[research-methods-aied|riset]] pendidikan, dan alat AI membuatnya mendesak. Pola empiris yang menentukan, yang didokumentasikan di seluruh studi AI dalam pendidikan, adalah **paradoks transfer**: siswa yang memakai AI biasanya menunjukkan keuntungan segera yang terukur pada tugas di mana AI tersedia, tetapi keuntungan itu sering gagal bertahan — atau bahkan terbalik — ketika AI diambil dan siswa harus menunjukkan pemahaman secara mandiri. Pola ini melibatkan [[cognitive-offloading|Ketergantungan Berlebih]], Teori Beban Kognitif, dan [[metacognition]] sebagai mekanisme yang bekerja, dan terhubung langsung dengan perdebatan tentang desain [[intelligent-tutoring|Tutoring AI]].


Kesiapan bukan transfer: latihan berbicara berbantuan AI berkaitan dengan [[anxiety-and-stress|kecemasan berbicara]] yang lebih rendah dan kemauan berkomunikasi dengan manusia yang lebih tinggi, namun tidak satu pun dari kedua studi itu mengamati berbicara manusia, sehingga jalur dari latihan AI ke kemampuan komunikatif manusia tetap menjadi usulan pedagogis yang belum teruji ([[ai-speaking-practice-communicative-readiness-2026|Wang & Li (2026)]]).

### Paradoks transfer

Siswa yang memakai AI biasanya menunjukkan **keuntungan segera yang terukur** pada tugas di mana AI tersedia. Namun ketika AI diambil:

- Efek menjadi **campuran atau negatif**
- Keuntungan sering **gagal bertransfer** ke latar yang tidak dinilai
- Siswa dapat menjadi **bergantung pada alat** dengan mengorbankan penalaran mandiri

Basis bukti, yang disintesiskan dalam tinjauan [[stanford-evidence-base-ai-k12-2026|Stanford Evidence Base on AI in K-12]], konsisten di seluruh domain:

| Studi | Konteks | Efek segera | Efek transfer | Mekanisme |
|---|---|---|---|---|
| Bastani et al. (2025) | Matematika sekolah menengah | Nilai latihan lebih tinggi | **~17% lebih buruk** pada ujian akhir buku tertutup | Chatbot serbaguna mengerjakan pekerjaannya |
| Chen et al. (2025) | Pekerjaan rumah pemrograman | Skor pekerjaan rumah lebih tinggi | **Tidak ada peningkatan** pada ujian tanpa bantuan | Tutor [[llm]] menyelesaikan masalah untuk siswa |
| Lehmann et al. (2025) | Pemrograman | Lebih banyak topik tercakup | **Merusak pemahaman**; melebarkan kesenjangan | AI umum untuk pembelajar berkemampuan awal rendah |
| Stadler et al. (2024) | Riset akademik | Penyelesaian tugas lebih cepat | **Penalaran berkualitas lebih rendah** dibanding pencarian | [[student-engagement|Keterlibatan]] kognitif berkurang |
| Kosmyna et al. (2025) | Penulisan esai | Kualitas esai lebih tinggi | **83% gagal mengingat** kutipan mereka sendiri | Kepengarangan dialihkan ke luar |

Kelima studi menunjukkan pola **transfer negatif atau nol** ketika AI serbaguna menjadi intervensinya.

### Mekanisme yang melemahkan transfer

**Perpindahan metakognitif.** AI yang menyelesaikan penalaran mengurangi kesempatan siswa untuk memantau pemahaman mereka sendiri dan memilih strategi. Siswa yang memakai AI kurang mampu menjelaskan jawaban mereka ketika ditanya. Ini terhubung ke riset [[metacognition]] tentang pemantauan diri dan [[vibe-compiler-metacognition-genai-agency-2026|bukti bahwa mata kuliah terstruktur meningkatkan kompetensi metakognitif sementara asisten LLM mentah tidak]].

**Penekanan beban germane.** AI serbaguna tidak hanya mengurangi beban kognitif extraneous (yang mengganggu) tetapi juga beban *germane* — usaha mental produktif yang mengodekan pengetahuan tahan lama. Latihan yang lebih mudah terasa lebih baik tetapi menyimpan jejak yang lebih lemah. Lihat Teori Beban Kognitif dan perbedaan antara [[stanford-evidence-base-ai-k12-2026|AI khusus tutoring vs AI umum]].

**Ketergantungan berlebih / pembalikan keahlian.** Pemula yang diberi jawaban tidak membangun skema. AI umum memberikan jawaban; tutoring yang efektif memberikan panduan terstruktur. Ketika pemula diberi jalan pintas tingkat pakar, pembelajaran terganggu — prinsip [[desirable-difficulties]] secara terbalik.

**Kinerja yang bergantung pada alat.** Siswa dapat mengoptimalkan untuk affordance spesifik alat AI ([[prompt-engineering|rekayasa prompt]], ketergantungan pada struktur kode yang dihasilkan) alih-alih membangun generalisasi domain — suatu bentuk [[cognitive-offloading-speedup-illusion|pengalihan kognitif]] yang terasa produktif tetapi menggeser pembelajaran tahan lama.


Kelas yang terlindungi juga dapat mengajarkan kebiasaan yang salah: [[shi-genai-experiential-learning-management-education-2026|Shi, Dai & Zhang (2026)]] memperingatkan bahwa [[simulation|simulasi]] dengan aturan yang ditetapkan lebih dahulu menyaring ketidakpastian dan memperkuat kepatuhan pada aturan, sehingga kebiasaan keputusan yang terbentuk di dalamnya dapat menjadi beban kognitif begitu siswa menghadapi kepentingan yang bersaing dan informasi yang tidak lengkap di latar nyata.
**Pengalihan yang sensitif terhadap lapisan dan transfer.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] menguji secara langsung pembedaan Salomon, Perkins & Globerson tentang "efek dengan vs. efek dari teknologi" dalam penulisan berbantuan [[generative-ai|GenAI]]: kuasi-eksperimen delapan pekan menemukan kolaborasi AI terbuka memaksimalkan kinerja menulis-terbantu tetapi menghasilkan luaran near-transfer mandiri tanpa AI yang *paling rendah*, sementara dukungan terbatas dengan refleksi mempertahankan kompetensi mandiri. Lapisan pengalihan yang lebih dalam (penalaran, struktur) memprediksi transfer yang lebih buruk daripada lapisan permukaan (tata bahasa). Ini bukti kelas yang langsung bahwa keuntungan kinerja *dengan*-dukungan AI tidak bertransfer ke kinerja mandiri *tanpa*-dukungan — dan bahwa kedalaman delegasi, bukan hanya apakah AI dipakai, membentuk transfer.

Contoh pelengkap, meski terkacaukan, datang dari [[physics-education|fisika]]: redesain mata kuliah fisika nuklir dan partikel pengantar di Ruhr University Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al., 2026]]) membuat siswa berhasil menyelesaikan masalah riset kolaboratif yang kaya sumber daya dengan bantuan AI, namun siswa yang sama rata-rata memperoleh 20.6/80 pada ujian tertulis tanpa bantuan konvensional, dengan beberapa upaya serius tidak mampu menyelesaikan perhitungan standar. Para penulis membaca ini sebagai bukti bahwa kinerja terbantu tidak otomatis bertransfer ke kinerja tanpa dorongan, dan obat mereka adalah desain yang sengaja: menjadikan ujian tertulis satu-satunya penentu nilai, merilis soal tutorial lebih awal agar waktu kelas menjadi diskusi yang sudah disiapkan, dan menambahkan persiapan prasyarat, contoh kerja, serta konsolidasi di sekitar kerja eksploratif yang mengizinkan AI.

## Kondisi yang mendukung transfer positif

Bukti yang terbatas menunjukkan bahwa transfer mungkin terjadi ketika:

- **Pagar pengaman pedagogis hadir** — petunjuk langkah demi langkah, penargetan [[misconceptions|miskonsepsi]], [[socratic-method|pertanyaan Sokratik]] (varian tutoring Bastani et al., 2025)
- **Strategi tradisional dipertahankan** — mencatat yang dipasangkan dengan penggunaan AI meningkatkan retensi (Kreijkes et al., 2026)
- **AI dipakai untuk latihan [[formative-assessment|formatif]], bukan [[summative-assessment|sumatif]]** — scaffolding selama belajar, bukan selama penilaian
- **Format latihan dicocokkan dengan pengetahuan yang ditransfer.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger & Carvalho (2025)]] menemukan bahwa keuntungan latihan pengambilan sering gagal bertransfer ke masalah yang tidak dikenal — keuntungan itu memperkuat memori untuk suatu prosedur tanpa memungkinkan penggunaannya di konteks baru — dan bahwa generalisasi yang tahan lama ke penerapan baru menuntut pemasangan latihan dengan contoh kerja yang mendukung induksi keterampilan; rasio contoh–masalah yang optimal karena itu bergantung pada apakah kontennya fakta verbatim atau keterampilan yang dapat digeneralisasi.
- **Keahlian pembelajar dikalibrasi** — alat menyesuaikan dukungan dengan kesiapan alih-alih default ke bantuan penuh

- **Transfer sebagai kriteria yang memisahkan belajar dari bantuan.** [[yan-agentivism-learning-theory-ai-2026|Yan dan Gašević (2026)]] membangun teori pembelajaran manusia-AI mereka di sekitar transfer di bawah dukungan yang dikurangi: kinerja terbantu dihitung sebagai belajar hanya jika kapabilitasnya bertahan setelah dukungan ditarik, yang menjadikan transfer sebagai ujian alih-alih satu luaran di antara beberapa. Proposisi mereka bersifat berarah, bahwa menuntut pemeriksaan sumber atau justifikasi selama kerja berbantuan AI seharusnya memperbaiki kinerja tertunda, sementara delegasi berfrekuensi tinggi tanpa friksi dan tanpa rekonstruksi seharusnya melemahkan kalibrasi pembelajar atas kompetensinya sendiri.

- **Panduan berada di lokasi yang sama dengan pekerjaannya.** Berlawanan dengan pola transfer negatif dalam tabel di atas, perbandingan 36 peserta menemukan pembelajar yang dibantu robot meja mempertahankan skor mereka pada 7.0/10 setelah bantuan ditarik sementara pembelajar berbantuan ChatGPT turun ke 4.4/10, skor transfer jangka pendek 60% lebih tinggi ([[aifred-desk-robotic-ai-guidance-2026|Orlando et al. (2026)]]). Hasilnya adalah transfer jangka pendek yang diukur sekitar 35 menit setelah tugas, tanpa uji retensi tertunda, pada 36 peserta di satu kampus.

Ini selaras dengan riset [[intelligent-tutoring|Tutoring AI]] yang menunjukkan bahwa alat khusus tutoring dengan pagar pengaman pedagogis mengungguli [[conversational-ai|chatbot]] serbaguna, dan dengan prinsip [[scaffolding]] tentang dukungan yang memudar seiring kompetensi tumbuh.

### Pertanyaan yang belum terjawab

1. **Skala waktu:** Apakah transfer membaik selama pekan/bulan pemakaian, atau ketergantungan justru menguat?
2. **Perbedaan domain:** Apakah transfer lebih baik di domain terstruktur baik (matematika) vs. domain terstruktur buruk (menulis)?
3. **Perbedaan individu:** Apakah siswa dengan [[prior-knowledge]] tinggi mengalami kehilangan transfer lebih sedikit daripada pemula?
4. **Remediasi keterampilan:** Dapatkah sesi latihan eksplisit "AI-off" membalik ketergantungan pada alat?

Pertanyaan skala waktu kini memiliki formalisasi. [[cognitive-washout-ai-skill-decay-2026|Yajee (2026)]] menamai interval pasca-penarikan itu cognitive washout dan memberinya empat luaran kandidat: pantulan elastis, dataran parsial, perancah laten, dan pemulihan berlebih. Keterbalikan, argumen makalah itu, adalah yang menentukan keparahan, dan ia mengusulkan protokol tiga lengan dua puluh dua pekan yang dapat dipraregistrasi untuk mengukurnya. Studi di atas menguji transfer beberapa jam setelah bantuan berakhir, sehingga pekan-pekan sesudahnya adalah bagian dari pertanyaan terbuka pertama halaman ini yang benar-benar masih belum terukur.

### Koneksi ke konsep terkait

Transfer belajar terhubung ke [[metacognition]] (pemantauan diri atas pemahaman), Teori Beban Kognitif (beban germane vs extraneous), [[desirable-difficulties]] (perjuangan produktif), [[scaffolding]] (dukungan yang memudar), [[cognitive-offloading|Ketergantungan Berlebih]] (ketergantungan pada alat), dan [[sociocultural-learning]] (AI serbaguna beroperasi di luar ZPD dengan menyelesaikan pekerjaan untuk siswa). Ia adalah jembatan antara kinerja terbantu dan pembelajaran sejati — pembeda antara [[stanford-evidence-base-ai-k12-2026]] dan pertanyaan sentral bagi efektivitas [[intelligent-tutoring|Tutoring AI]].

## Miskonsepsi Umum

**"Keuntungan pada tugas berbantuan AI menunjukkan pembelajaran yang dapat ditransfer."** Pola sebaliknya yang ditemukan korpus: **kelima studi** dalam sintesis yang dilaporkan di sini menunjukkan **transfer negatif atau nol** ketika AI serbaguna menjadi intervensi — siswa matematika sekolah menengah dengan nilai latihan lebih tinggi mendapat skor **sekitar 17% lebih buruk** pada ujian akhir buku tertutup, dan studi penulisan esai di mana **83% gagal mengingat kutipan mereka sendiri**. Kinerja terbantu yang segera adalah ukuran yang paling tidak dapat ditransfer yang tersedia.

**"Jika siswa bisa melakukannya dengan AI, mereka bisa melakukannya."** Itu adalah definisi kegagalan, bukan ketiadaannya. Transfer menuntut kapabilitas bertahan saat dukungan diambil, dan studi yang menguji penarikan menemukan kapabilitas itu ada pada alatnya. Pembelajar yang dapat menghasilkan artefak sementara penalarannya dilakukan di tempat lain telah dilatih dalam keterampilan yang berbeda: mengoperasikan alat.

**"Transfer datang dari model yang lebih mampu."** Transfer datang dari kondisi yang menghasilkannya — keluasan latihan, keberagaman konteks, dan sejauh mana pembelajar sendiri menghasilkan penalarannya. Kapabilitas model menaikkan batas atas kinerja terbantu dan tidak melakukan apa pun secara khusus bagi apa yang tersisa ketika modelnya tiada.

**"Panduan selalu mendukung transfer, jadi panduan lebih banyak lebih baik."** Panduan yang melakukan penalaran menggantikan proses yang menjadi sandaran transfer. Pembedanya adalah antara bantuan yang menjaga pembelajar menghasilkan langkah berikutnya dan bantuan yang menghasilkannya untuk mereka — dan hanya yang pertama berada di sisi transfer dari garis itu.

## Konsep terkait

- [[pedagogical-patterns]] — Luaran yang akhirnya menjadi dasar penilaian sebagian besar urutan ini
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Kegagalan Produktif

## Artikel terkait
- [[yan-agentivism-learning-theory-ai-2026]] — Teori belajar jarak menengah untuk interaksi manusia-AI, dengan empat mekanisme dan enam proposisi yang dapat diuji (Yan dan Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — Pengalihan kognitif yang sensitif terhadap lapisan dalam penulisan berbantuan GenAI (Chen 2026)
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Pembedaan kinerja-pembelajaran dan transfer yang tahan lama
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Pengarahan Pedagogis LLM untuk Kegagalan Produktif
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI dalam Pendidikan Fisika Partikel: Masalah Riset dan Keterampilan Fondasional
- [[shi-genai-experiential-learning-management-education-2026]] — berargumen bahwa simulasi kelas yang terlindungi dapat membentuk kebiasaan keputusan yang gagal di luarnya

- [[ai-speaking-practice-communicative-readiness-2026]] — Latihan berbicara berbantuan AI menaikkan kemauan terhadap manusia tetapi tidak ada studi yang mengamati berbicara manusia
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred: Pembelajaran Terperkaya melalui Perwujudan Robotik Fungsional di Meja
- [[cognitive-washout-ai-skill-decay-2026]] — Cognitive washout: interval pasca-penarikan dan protokol pengukuran 22 pekan (Yajee 2026)
