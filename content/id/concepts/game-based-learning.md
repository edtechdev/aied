---
title: "Pembelajaran Berbasis Gim"
created: "2026-08-13T18:49:42-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/game-based-learning"
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

> **Pembelajaran berbasis gim (GBL)** — penggunaan gim itu sendiri (digital atau fisik) sebagai medium dan konteks pembelajaran, di mana mekanika, tantangan, dan progresi gim membawa konten pendidikan. Siswa belajar *melalui* bermain. Terkait dengan itu, **gamifikasi** menerapkan elemen desain gim (poin, lencana, level, papan peringkat) pada aktivitas belajar non-gim tanpa mengubahnya menjadi gim penuh. Dalam pendidikan AI dan [[educational-robotics|robotika]], kedua pendekatan digunakan untuk membuat konten teknis menarik dan memotivasi.

## Pertanyaan yang Perlu Dipertimbangkan

- Pembelajaran berbasis gim menggunakan gim itu sendiri sebagai medium belajar — Anda belajar *melalui* bermain. Gamifikasi hanya melapisi poin, lencana, dan level pada aktivitas non-gim. Menurut Anda seberapa berbeda keduanya dalam efeknya pada pembelajaran nyata, dibandingkan pada keterlibatan jangka pendek?
- Sebuah tinjauan komparatif menemukan pembelajaran berbasis gim lebih lazim di lingkungan informal sementara gamifikasi mendominasi kelas formal dan lebih menyukai pembelajaran berbasis proyek. Mengapa menurut Anda masing-masing pendekatan menemukan rumah yang berbeda — dan apa yang diberitahukannya tentang di mana masing-masing paling berfungsi?
- Gamifikasi berakar pada teori penentuan diri — [[agency|otonomi]], kompetensi, keterhubungan. Jika motivasi adalah soal memenuhi kebutuhan itu, mengapa sistem poin-dan-lencana bisa berhasil atau gagal bergantung pada bagaimana ia membentuk usaha dan atensi yang dipersepsikan?
- [[research-methods-aied|Penelitian]] menunjukkan manfaat motivasional dari desain yang seperti gim dan berbantuan AI bergantung pada bagaimana desain itu membentuk beban kerja dan atensi yang dipersepsikan, bukan pada gamifikasi semata. Kapan Anda melihat gim atau lencana menaikkan keterlibatan tanpa benar-benar meningkatkan pembelajaran — atau sebaliknya?

## Pendahuluan

GBL berakar pada teori [[motivation]], [[student-engagement]], dan [[active-learning]]: gim menyediakan motivasi intrinsik, umpan balik langsung, dan konteks masalah yang autentik. Ia bertumpang tindih dengan [[simulation]], [[project-based-learning]], dan [[educational-robotics]]. GBL sangat relevan bagi [[educational-robotics]], [[computational-thinking]], dan [[cs-education]], di mana gim dapat membuat konsep teknis abstrak menjadi konkret dan menyenangkan.

### Bagaimana GBL muncul dalam penelitian basis pengetahuan

- **Pendidikan robotika:** [[game-based-gamified-robotics-education-review-2026|Tinjauan sistematis komparatif]] tentang pembelajaran berbasis gim dan gamifikasi dalam pendidikan robotika menemukan GBL lebih lazim di lingkungan informal, sementara gamifikasi mendominasi kelas formal dan lebih menyukai [[project-based-learning|pembelajaran berbasis proyek]].
- **Gim yang dimediasi robot:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] adalah gim bermain peran yang dimediasi robot untuk intervensi anti-perundungan, dan [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] menggunakan [[storytelling-in-education|penceritaan digital]] interaktif untuk meningkatkan motivasi.
- **[[conversational-ai|Agen percakapan]] AI dalam gim simulasi:** Wenzel, Geiger, dan Liening (2026) menurunkan kerangka CAIS-GBL — empat prinsip desain dan lima belas fitur desain untuk agen percakapan AI dalam pembelajaran berbasis gim digital — dari meta-persyaratan berbasis teori yang mencakup keterlibatan kognitif, motivasional, [[affective-computing|afektif]], dan [[sociocultural-learning|sosiokultural]], dengan sikap [[equity-in-ai-education|keadilan]]-melalui-desain. Agen yang diinstansiasi (Lara) dalam gim simulasi bisnis diterima secara positif untuk kehadiran kognitif dan [[community-of-inquiry|kehadiran sosial]] serta dukungan [[self-regulated-learning]], menjawab kesenjangan umum berupa terbatasnya umpan balik [[formative-assessment|formatif]] dan refleksi terstruktur dalam gim simulasi.

- **Efektivitas AI-GBL:** Sebuah [[meta-analysis-systematic-review|meta-analisis]] yang mencakup 55 studi tentang pembelajaran berbasis gim berbantuan AI melaporkan perolehan pada pengetahuan, motivasi intrinsik dan keterlibatan afektif, tetapi hanya 4 studi (7%) memenuhi ambang kualitas tinggi tinjauan itu dan hanya 4 (7%) merupakan [[rct|RCT]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı & Yurt, 2026]]). Efektivitasnya bergantung pada menyelaraskan mekanisme AI dengan [[learning-theories|teori belajar]] yang dinyatakan.

- **[[generative-ai|GenAI]] sebagai pengarang gim, bukan pemainnya:** [[xie-genai-mystery-game-legal-education-2026|Xie et al. (2026)]] meminta model menyusun tujuh tokoh dan materi naratif untuk gim bermain peran misteri luring, dan gim itu kemudian mengalahkan ceramah instruktur yang sama dalam uji acak 42 per lengan (partial *η*² = 0.566). Siswa tidak pernah menggunakan AI, jadi efeknya menjadi milik formatnya.

- **Siswa sebagai perancang gim alih-alih pemain:** [[karampa-students-game-designers-ai-literacy-2026|Karampa et al. (2026)]] meminta 22 siswa sekolah dasar berusia 8-12 tahun merancang gim papan escape tertambah tentang misinformasi, memadukan [[project-based-learning|pembelajaran berbasis proyek]] dengan [[design-thinking|design thinking]] dan kerangka ruang-escape Room2Educ8. [[ai-literacy|Literasi AI]] komposit pada kuesioner DigComp 3.0 berisi 20 item naik dari 3.684 menjadi 4.309 pada skala 5 poin, t(21) = −21.086, p < .001, dengan kelima area kompetensi membaik. Kelas itu menghasilkan 11 usulan dengan prompt AI dan menggabungkannya menjadi satu gim yang dapat dibangun. [[self-report-measures|Laporan diri]], satu kelas, dan tanpa kelompok kontrol.

- **Pisahkan AI menjadi pelatih dialog dan mesin kesulitan.** Lingkungan Roblox yang diperkaya AI untuk berpikir komputasional sekolah menengah atas memasangkan karakter non-pemain GPT-4, dibatasi dua sampai tiga kalimat dan dilarang memberi jawaban, dengan mesin berbasis aturan yang menetapkan kesulitan dari waktu-ke-solusi dan tingkat kesalahan ([[hengsawat-ai-game-based-learning-computational-thinking-2026|Hengsawat, Junruang & Kanjug, 2026]]).

### Gamifikasi

**Gamifikasi** adalah penerapan elemen desain gim (poin, lencana, level, papan peringkat, tantangan, bilah progres) pada konteks non-gim untuk memotivasi dan melibatkan pengguna. Berbeda dari pembelajaran berbasis gim — di mana pembelajaran terjadi *melalui* gim — gamifikasi melapisi mekanika gim pada aktivitas belajar yang sudah ada tanpa mengubahnya menjadi gim penuh. Ia digunakan dalam pendidikan untuk meningkatkan motivasi, [[student-engagement]], dan kegigihan, dan diterapkan secara luas di lingkungan kelas formal.

Gamifikasi berakar pada teori motivasi, khususnya [[self-determination-theory]] (mendukung otonomi, kompetensi, dan keterhubungan) dan kerangka perubahan perilaku. Ia menunjukkan sinergi khusus dengan [[project-based-learning]] di domain terapan seperti robotika. Dalam penelitian basis pengetahuan:

- **Pendidikan robotika:** tinjauan komparatif menemukan gamifikasi mendominasi kelas formal dalam pendidikan robotika (p < .001) dan sangat menyukai [[project-based-learning|pembelajaran berbasis proyek]] (p = .009), sementara pembelajaran berbasis gim lebih umum di lingkungan informal.
- **Keterlibatan dan motivasi:** gamifikasi digunakan di seluruh basis pengetahuan untuk meningkatkan keterlibatan dan motivasi pembelajar dalam konteks pembelajaran AI, [[cs-education|pemrograman]], dan [[stem-education|STEM]]. Penelitian [[genai-motivation-engagement-2026|AI Generatif, motivasi, dan keterlibatan]] menelaah bagaimana elemen seperti gim berpadu dengan AI untuk mempertahankan minat pembelajar. Dua studi 2026 memperluas ini dengan membandingkan kondisi tergamifikasi dan berbantuan AI terhadap pengajaran tradisional: [[nasa-tlx-workload-gamified-ai-2026|studi NASA-TLX]] mengukur beban kerja yang dipersepsikan di seluruh kondisi pembelajaran tradisional, tergamifikasi, dan berbantuan AI, dan [[arcs-motivational-ergonomics-gamified-ai-2026|studi ARCS]] menelaah "ergonomi" motivasional dalam pembelajaran tergamifikasi dan berbantuan AI dengan implikasi bagi [[professional-training|pelatihan di tempat kerja]]. Bersama-sama keduanya memperjelas bahwa manfaat motivasional dari desain yang seperti gim dan berbantuan AI bergantung pada bagaimana desain itu membentuk [[motivation|usaha yang dipersepsikan]], beban kerja, dan atensi (misalnya dimensi atensi/relevansi ARCS), bukan pada gamifikasi semata.

GBL dan gamifikasi bersama-sama bertaut ke [[educational-robotics]], [[student-engagement]], [[motivation]], [[self-determination-theory]], [[active-learning]], [[simulation]], [[project-based-learning]], dan [[computational-thinking]].

## Miskonsepsi Umum

**"Pembelajaran berbasis gim berbantuan AI memiliki basis bukti yang kokoh."** Sintesis di balik klaim itu besar dan tipis pada saat yang sama. Sebuah **tinjauan sistematis atas 55 studi** menemukan efek positif pada pengetahuan, motivasi intrinsik dan keterlibatan afektif — tetapi hanya **4 studi (7%) memenuhi ambang kualitas tinggi tinjauan itu**. Efek positif terkumpul yang ditarik dari korpus di mana 93% studi berada di bawah standar kualitas tinjauan itu sendiri adalah hipotesis dengan literatur terlampir, bukan temuan yang dapat dijadikan dasar desain.

**"Efek positif pada motivasi dan pengetahuan saling memperkuat."** Keduanya diukur secara terpisah dan, dalam literatur yang lebih luas, dijadwalkan secara terpisah: [[student-engagement|keterlibatan dan capaian]] bergerak pada garis waktu yang berbeda, jadi gim yang menaikkan motivasi intrinsik baru menunjukkan satu hasil. Memperlakukan hasil motivasional sebagai penguat hasil pengetahuan menggelembungkan temuan dua bagian menjadi temuan yang lebih kuat daripada yang didukung desainnya.

**"Jika sebuah gim melibatkan siswa, pembelajarannya mengikuti dari kesenangannya."** Kesenangan adalah mekanisme penyampaian bagi pengulangan yang dibuat gim agar tertahankan, bukan mekanisme pembelajarannya. Gim yang menambah keterlibatan tanpa menambah praktik yang produktif telah menambahkan bagian yang tidak pernah langka.

## Implikasi bagi Praktik

**Bagi instruktur**

- Tanyakan apa yang dibuat gim agar siswa ulangi, bukan apakah siswa menyukainya. Pengulangan operasi yang tepat adalah mekanismenya; kesenangan adalah yang membuat pengulangan itu tertahankan.
- Perlakukan hasil motivasional dan hasil pengetahuan sebagai klaim terpisah, dan jangan biarkan kenaikan motivasi intrinsik dilaporkan sebagai bukti belajar.
- Periksa kualitas terhadap standar tinjauan itu sendiri sebelum mengadopsi sebuah judul berdasarkan kekuatan sintesis yang positif: hanya 7% studi yang memenuhinya.

**Bagi pengembang**

- Instrumentasikan hasil belajar secara terpisah dari keterlibatan dan afek, dan terbitkan keduanya.
- Bangun praktik yang produktif lebih dulu dan lapisan gim belakangan; lapisan gim di atas praktik yang lemah telah mengotomatiskan bagian yang tidak pernah langka.

**Bagi peneliti**

- Naikkan kualitas desain di bidang ini alih-alih volumenya; tingkat kualitas tinggi 7% adalah kendala yang mengikat bagi apa yang dapat disimpulkan.

- **Umpan balik percakapan dalam simulasi menaikkan beban germane tanpa menurunkan beban ekstraneus.** Dalam gim simulasi bisnis lima minggu dengan **234 siswa**, pengguna rutin chatbot umpan balik berbasis GPT-4o melaporkan **beban kognitif germane yang secara signifikan lebih tinggi** daripada pengguna yang memiliki akses tetapi tidak terlibat (β = −.468, p < .001) dan daripada kontrol umpan balik statis (β = −.253, p = .028) — sementara **beban ekstraneus tidak menunjukkan efek** dalam kedua spesifikasi (F(1, 219) = 0.499, p = .481). Kedua beban **menurun sepanjang lima minggu** (ekstraneus β = −.388, p < .001), efek kebaruan yang diukur pada beban kognitif alih-alih keterlibatan ([[wenzel-conversational-ai-feedback-cognitive-load-game-2026|Wenzel, Geiger dan Liening, 2026]]). Poin desainnya adalah bahwa umpan balik itu membawa [[personalized-learning|personalisasi]], penyinyalan, segmentasi dan struktur feed-forward pada 19 indikator konkret — permukaan chatbot semata bukanlah perlakuan.

## Konsep terkait
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Payung: pedagogi dan strategi pengajaran dalam pendidikan AI
- [[virtual-and-augmented-reality]] — praktik imersif dan tergamifikasi bertumpang tindih dalam desain dan bukti

## Artikel terkait
- [[karampa-students-game-designers-ai-literacy-2026]] — Siswa sekolah dasar merancang gim papan escape; literasi AI naik dalam satu lab e-course
- [[ai-game-based-learning-systematic-review-2026]] — Tinjauan sistematis atas 55 studi pembelajaran berbasis gim berbantuan AI: hasil positif, basis bukti yang tipis

- [[game-based-gamified-robotics-education-review-2026]] — Pendidikan Robotika Berbasis Gim dan Tergamifikasi
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bot dan Balok
- [[white-wu-robotics-ai-education-2026]] — Robotika dan AI dalam Pendidikan
- [[genai-motivation-engagement-2026]] — AI Generatif, Motivasi, dan Keterlibatan
- [[nasa-tlx-workload-gamified-ai-2026]] — Beban kerja NASA-TLX di seluruh kondisi tergamifikasi/AI
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — Motivasi ARCS dan gamifikasi berbantuan AI
- [[xie-genai-mystery-game-legal-education-2026]] — Gim bermain peran misteri hasil karangan GenAI versus ceramah dalam pendidikan hukum (Xie et al. 2026)
- [[hengsawat-ai-game-based-learning-computational-thinking-2026]] — Desain dan validasi awal lingkungan pembelajaran berbasis gim yang diperkaya AI untuk berpikir komputasional
