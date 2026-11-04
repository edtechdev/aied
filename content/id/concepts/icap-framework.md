---
title: "Kerangka ICAP"
created: "2026-08-14T04:33:38-04:00"
type: concept
connected_faqs: [designing-ai-into-learning]
foundations: [learning-design]
pedagogy: [active-learning, cognitive-psychology, collaborative-learning, learning-theories]
technology: [educational-nlp, learning-analytics]
confidence: high
updated: "2026-11-04T02:51:21-05:00"
translation_of: "concepts/icap-framework"
source_updated: "2026-11-01T09:12:59-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Kerangka ICAP** (Interactive–Constructive–Active–Passive) — taksonomi keterlibatan kognitif yang dikembangkan Michelene Chi yang mengklasifikasikan perilaku pembelajar ke dalam empat mode perubahan pengetahuan, terurut dari yang paling sedikit ke yang paling terlibat secara kognitif: *pasif*, *aktif*, *konstruktif*, dan *interaktif*. Dalam AI dalam pendidikan, ICAP menyediakan baik target desain (bangun alat yang memunculkan keterlibatan konstruktif dan interaktif alih-alih konsumsi pasif) maupun lensa evaluasi (ukur apakah pembelajar dan sistem AI benar-benar terlibat pada mode yang lebih tinggi).([[hingle-collaborative-ai-literacy-2025]])([[icap-cognitive-engagement-llm-agents]])

## Pertanyaan yang Perlu Dipertimbangkan

- Pikirkan saat terakhir Anda 'belajar' sesuatu dengan menonton video atau membaca. Kerangka ICAP akan menyebutnya pasif. Apa yang sesungguhnya Anda ingat dari paparan pasif dibandingkan dari menjelaskannya kepada orang lain?
- ICAP mengurutkan keterlibatan dari pasif ke aktif ke konstruktif ke interaktif. Di mana alat AI yang pernah Anda gunakan cenderung menahan pembelajar — dan apakah mengklik latihan adaptif dihitung sebagai keterlibatan sungguhan atau sekadar aktivitas?
- Halaman ini berargumen bahwa pergeseran paling konsekuensial adalah dari Aktif ke Konstruktif — menghasilkan penjelasan atau artefak baru alih-alih sekadar menerapkan pengetahuan. Mengapa menghasilkan sesuatu yang baru mungkin merupakan langkah yang benar-benar mengubah pemahaman?
- Satu studi menemukan pakar manusia jauh mengungguli model AI dalam melabeli tingkat keterlibatan. Jika sistem otomatis secara sistematis meremehkan keterlibatan, bagaimana kita harus memperlakukan metrik 'keterlibatan' yang dihasilkan AI?
- ICAP menunjukkan bahwa alat yang menjawab untuk Anda menahan Anda tetap pasif, sementara alat yang memprompt dan bertanya mendorong Anda ke keterlibatan konstruktif dan interaktif. Pilihan desain mana yang akan Anda ambil untuk pembelajar Anda?
- Kerangka ini digunakan sekaligus sebagai target desain dan lensa evaluasi. Bagaimana Anda dapat menggunakan ICAP dalam pengajaran atau desain Anda sendiri untuk mengetahui apakah pembelajar benar-benar terlibat alih-alih sekadar aktif?

## Pendahuluan

ICAP bertumpu pada asumsi bahwa *apa yang dilakukan pembelajar* menentukan seberapa banyak dan apa yang mereka pelajari. Kerangka Chi mengajukan bahwa ketika keterlibatan bergerak dari pasif ke aktif ke konstruktif ke interaktif, sifat perubahan pengetahuan makin mendalam — dari menyimpan, ke memperhatikan, ke mengintegrasikan pengetahuan baru dengan pengetahuan sebelumnya, ke menciptakan pengetahuan bersama melalui dialog. Hal ini menjadikan ICAP alat analitis yang ampuh bagi AI dalam pendidikan, di mana pertanyaan desain sentralnya adalah apakah bantuan AI mendukung atau menggantikan keterlibatan kognitif pembelajar.

## Empat mode

| Mode | Perilaku pembelajar | Sifat perubahan pengetahuan |
|------|------------------|---------------------------|
| **Interaktif** | Dialog dengan pembelajar atau agen lain, mengonstruksi makna bersama; mis. mempertahankan posisi, [[collaborative-learning|pemecahan masalah kolaboratif]] | Menciptakan pengetahuan baru bersama melalui aktivitas timbal balik yang bersesama |
| **Konstruktif** | Menghasilkan keluaran baru melampaui yang diberikan; mis. menjelaskan diri sendiri, membandingkan, merefleksi, menggambar | Mengintegrasikan informasi baru dengan pengetahuan sebelumnya untuk menghasilkan pemahaman baru |
| **Aktif** | Memanipulasi atau bertindak atas materi; mis. mencatat, menggarisbawahi, berhenti sejenak untuk berpikir | Memperhatikan dan menyimpan informasi, kadang tanpa integrasi mendalam |
| **Pasif** | Menerima informasi tanpa tindakan nyata; mis. mendengarkan kuliah, membaca | Menyimpan informasi, dengan pemrosesan lanjutan yang terbatas |

## ICAP dalam AI dalam pendidikan

### Target desain bagi alat AI

ICAP membingkai ulang pertanyaan desain sentral bagi AI dalam pendidikan: alat AI yang *menjawab untuk* pembelajar menahan mereka dalam mode pasif/aktif, sementara alat yang *memprompt, bertanya, dan [[scaffolding|merancah]]* dapat mendorong pembelajar ke keterlibatan konstruktif dan interaktif. Hal ini menyelaraskan ICAP dengan pedagogi [[constructivist]] dan dengan penelitian [[active-learning]].([[multimodal-learning-genai]])([[hingle-collaborative-ai-literacy-2025]])

### Lensa evaluasi bagi agen AI

ICAP juga berfungsi sebagai kerangka pengukuran. Dalam satu studi, para peneliti memperluas ICAP ke skala 7 titik untuk mencirikan keterlibatan kognitif dalam dialog kolaboratif, lalu membandingkan anotator manusia terlatih dengan pelabelan berbasis LLM (pembelajaran dalam konteks, prompting zero-shot, dan agen reflektif). Reliabilitas antar-penilai manusia (kappa = 0.906–0.998) jauh melampaui anotasi LLM (kappa = 0.541–0.609), menonjolkan peran ICAP — dan batasnya saat ini — dalam pengukuran keterlibatan otomatis bagi alur [[learning-analytics]].([[icap-cognitive-engagement-llm-agents]])

### Memandu fasilitasi dialog kolaboratif

Karena keterlibatan interaktif adalah mode ICAP tertinggi, kerangka ini membantu menemukan nilai fasilitasi AI dalam [[collaborative-learning|diskusi kolaboratif daring]]. [[llm-facilitation-timing-online-discussions|Penelitian tentang waktu fasilitasi LLM]] menunjukkan bahwa *kapan* AI campur tangan dalam diskusi membentuk apakah ia mendukung atau mengganggu ko-konstruksi pengetahuan interaktif — peringatan berperspektif ICAP bahwa agen moderasi otonom perlu dikalibrasi ke arah sikap menahan diri seperti manusia alih-alih fasilitasi yang terlalu bersemangat.

### ICAP dan desain analitik pembelajaran

ICAP mendasari kritik terhadap metrik "keterlibatan" yang dangkal: berinteraksi dengan dasbor dengan mengklik filter adalah keterlibatan *aktif*, bukan *interaktif*. Desain analitik pembelajaran yang efektif memunculkan penilaian diri dan dialog dua arah alih-alih sekadar menampilkan data — implikasi yang ditarik langsung dari kerangka Chi.([[interactive-learning-dashboards-engagement]])

### Transisi Aktif→Konstruktif sebagai langkah pivotal

Meskipun ICAP menggambarkan hierarki, pergeseran paling konsekuensial bagi pembelajaran adalah lompatan dari mode *Aktif* ke *Konstruktif* (Chi & Boucher, 2023). Keterlibatan aktif (menerapkan pengetahuan pada skenario serupa-tetapi-tidak-identik) menyiapkan pembelajar, tetapi keterlibatan Konstruktif — menghasilkan penjelasan, ringkasan, atau artefak baru — yang membekali mereka untuk menciptakan pengetahuan baru. Inilah inti persoalan bagi AI dalam pendidikan: alat yang menahan pembelajar pada mode Aktif (mis., mengklik latihan adaptif) mungkin tampak produktif tetapi tidak pernah mendorong mereka ke generasi konstruktif yang menghasilkan pemahaman tahan lama. Intervensi kolaboratif dan berfokus literasi yang sengaja merancah lompatan Aktif→Konstruktif cenderung menunjukkan perolehan terkuat.([[hingle-collaborative-ai-literacy-2025]])

Bagian "perolehan terkuat" dari klaim itu adalah inferensi dari kerangka alih-alih perbandingan yang dijalankan tinjauan tersebut. Tinjauan sembilan studi di baliknya (2015–2023) menghitung berapa banyak intervensi yang *menyertakan* tiap mode (9 pasif, 5 aktif, 7 konstruktif, 8 interaktif), tidak melaporkan ukuran efek per mode, dan mencatat bahwa tidak ada studi yang disertakan bergantung pada satu mode saja, sehingga tidak ada apa pun di dalamnya yang mengisolasi lompatan Aktif→Konstruktif ([[hingle-collaborative-ai-literacy-2025|Hingle dkk., 2025]]). Urutannya adalah urutan Chi; yang ditambahkan tinjauan itu adalah bahwa para praktisi menggabungkan mode alih-alih memilih satu.

### ICAP sebagai sinyal perancahan adaptif dalam ITS

Mode-mode ICAP dapat dioperasionalkan sebagai *keadaan target* yang dipilih tutor adaptif untuk merancah keterlibatan kognitif berdasarkan model siswa yang terus berkembang. Dalam sebuah ITS untuk logika, [[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi dkk.]] secara dinamis memilih antara mode *Aktif* "Terbimbing" dengan contoh yang dikerjakan dan mode *Konstruktif* "Buggy" dengan contoh yang mengandung kesalahan. Membandingkan Bayesian Knowledge Tracing (BKT) dengan Deep Reinforcement Learning (DRL) dan garis dasar non-adaptif pada 113 siswa, kedua kebijakan adaptif memperbaiki kinerja pascates — tetapi secara berbeda: BKT memberi perolehan terbesar kepada siswa berpengetahuan awal rendah (membantu mereka mengejar), sementara DRL menghasilkan skor pascates tertinggi di antara siswa berpengetahuan awal tinggi. Ini adalah demonstrasi konkret bahwa *mempersonalisasi* mode ICAP sebuah tutor cerdas secara efektif bergantung pada pemodelan pengetahuan pembelajar saat ini — dan bahwa tidak ada satu mode atau metode adaptif pun yang cocok untuk setiap pembelajar. Hal ini menghubungkan hierarki ICAP langsung ke desain [[adaptive-learning]] dan [[knowledge-tracing]].

### ICAP sebagai model keadaan kognitif untuk menghasilkan agen yang mirip manusia

Melampaui pemilihan mode tugas, ICAP telah disematkan langsung ke dalam *model kognitif* sebuah agen pendidikan generatif. [[cogevolution-student-cognitive-evolution-agent-2026|CogEvolution]] membangun "perceptron kedalaman kognitif" berbasis ICAP yang memetakan masukan ke distribusi probabilitas di keempat tingkat ICAP, memfusikannya dengan pembaruan keadaan terinspirasi evolusi dan pengambilan memori berbasis teori respons butir untuk mensimulasikan evolusi kognitif siswa (termasuk transisi seperti kebingungan → wawasan). Ablasi menunjukkan bahwa menghapus modul persepsi ICAP meruntuhkan kemampuan agen membedakan pembelajaran dangkal dari yang mendalam — bukti bahwa taksonomi ICAP dapat berfungsi sebagai ukuran internal keterlibatan kognitif yang halus untuk [[simulating-students|simulasi siswa]], bukan sekadar lensa evaluasi eksternal.

### ICAP menjadi jangkar penilaian interaksi GenAI reflektif

Penekanan ICAP pada keterlibatan generatif pada tingkat proses telah diadopsi oleh kerangka penilaian yang mengevaluasi *bagaimana* siswa belajar dengan AI generatif. [[assessing-student-drive-framework-2025|Kerangka DRIVE]] secara eksplisit menyelaraskan konstruk intinya — interaksi reflektif mendalam dengan keluaran GenAI — dengan jenis keterlibatan generatif yang diidentifikasi ICAP sebagai pengarah pembelajaran lebih mendalam, dan menggunakannya untuk membedakan konsumsi permukaan dari pengolahan ulang yang reflektif dan penuh usaha atas konten yang dihasilkan AI. Hal ini memposisikan ICAP sebagai jangkar teoretis untuk merancang dan mengukur interaksi pembelajaran [[generative-ai|GenAI]] yang bermakna alih-alih sekadar melacak penggunaan.

## Implikasi bagi desain dan penelitian

1. **Rancanglah untuk mode yang lebih tinggi.** Alat AI harus memprompt pembelajar untuk menghasilkan, menjelaskan, dan berdialog — aktivitas konstruktif dan interaktif — alih-alih menyajikan konten pasif atau bertindak sebagai mesin jawaban.([[multimodal-learning-genai]])
2. **Libatkan pembelajar lintas mode.** Pengajaran [[ai-literacy|literasi AI]] yang efektif melibatkan pembelajar pada beberapa tingkat ICAP — paparan pasif, manipulasi aktif, generasi konstruktif, dan dialog interaktif — dengan memilih mode yang sesuai dengan tujuan pembelajaran.([[hingle-collaborative-ai-literacy-2025]])
3. **Ukur keterlibatan secara jujur.** ICAP memberi peneliti dan perancang kosakata bersama untuk membedakan keterlibatan kognitif sejati dari aktivitas semata — koreksi terhadap [[student-engagement]] yang dangkal.([[icap-cognitive-engagement-llm-agents]])
4. **Perhatikan kesenjangan anotasi manusia–LLM.** Jika sistem otomatis dipakai untuk mengodekan keterlibatan, kekurangan sistematisnya dibandingkan manusia terlatih harus diperhitungkan.([[icap-cognitive-engagement-llm-agents]])

## Miskonsepsi Umum

**"ICAP adalah taksonomi untuk memberi label aktivitas."** Ia adalah lensa desain dan evaluasi dengan klaim pengurutan: keterlibatan pasif, aktif, konstruktif, dan interaktif berbeda dalam pembelajaran yang dihasilkannya, sehingga "bangun alat yang memunculkan keterlibatan konstruktif dan interaktif alih-alih konsumsi pasif" adalah target desain alih-alih latihan klasifikasi. Memberi label mode pada sebuah pelajaran tanpa mengubah apa yang dilakukan siswa belum menerapkan kerangka ini.

**"Waktu tugas atau volume interaksi mengindeks tingkat keterlibatan."** Volume menghitung aktivitas, bukan mode. Menggulir adalah aktif dan pasif dalam pengertian berbeda sekaligus, dan siswa yang menghasilkan banyak klik mungkin tetap menerima alih-alih mengonstruksi. Nilai kerangka ini justru terletak pada pembedaannya atas jenis-jenis keterlibatan yang digabung begitu saja oleh metrik aktivitas.

**"Tutor AI secara otomatis menghasilkan keterlibatan interaktif karena ia bercakap-cakap."** Percakapan adalah mediumnya alih-alih modenya. Dialog di mana sistem memasok setiap kontribusi substantif adalah pasif bagi pembelajar yang memakai antarmuka interaktif, yaitu kebingungan yang sama yang didokumentasikan [[student-engagement|literatur keterlibatan]] antara aktivitas perilaku dan investasi kognitif.

**"Mode ICAP yang lebih tinggi selalu lebih baik."** Mode itu berbiaya lebih besar, dan pengurutannya menyangkut pembelajaran per satuan pemrosesan yang relevan alih-alih tentang apa yang harus selalu dituju sebuah pelajaran. Kelancaran dasar dapat menuntut repetisi aktif sebelum kerja konstruktif dimungkinkan; kesalahannya adalah menetap di sana, bukan melewatinya.

## Konsep terkait

- [[active-learning]]
- [[collaborative-learning]]
- [[student-engagement]]
- [[learning-analytics]]
- [[constructivist]]
- [[learning-design]]
- [[metacognition]]
- [[ai-literacy]]
- [[human-in-the-loop-ai]]
- [[limitations-in-aied-research]]

## Artikel terkait

- [[icap-cognitive-engagement-llm-agents]] — Kerangka ICAP yang diperluas untuk mengukur keterlibatan dengan anotasi manusia vs. LLM
- [[hingle-collaborative-ai-literacy-2025]] — Literasi AI kolaboratif di keempat mode ICAP
- [[interactive-learning-dashboards-engagement]] — ICAP sebagai kritik atas keterlibatan analitik pembelajaran yang dangkal
- [[multimodal-learning-genai]] — ICAP dan keterlibatan kognitif dalam desain pembelajaran multimodal
- [[llm-facilitation-timing-online-discussions]] — Waktu fasilitasi LLM dalam diskusi kolaboratif daring
- [[adaptive-scaffolding-cognitive-engagement-its]] — Perancahan ICAP adaptif dalam ITS (BKT vs DRL)
- [[cogevolution-student-cognitive-evolution-agent-2026]] — Model kedalaman kognitif ICAP dalam agen generatif simulasi siswa
- [[assessing-student-drive-framework-2025]] — Penilaian interaksi GenAI reflektif yang berjangkar ICAP
