---
title: "Risiko Halusinasi"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/hallucination-risk"
source_updated: "2026-11-07T12:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Risiko Halusinasi** — bahaya bahwa sistem AI menghasilkan konten yang tampak masuk akal tetapi secara faktual keliru atau difabrikasi dalam konteks pendidikan, tempat kesalahan semacam itu dapat menyesatkan [[learners]], meruntuhkan [[trust]], dan menghasilkan penilaian yang tidak valid. Halusinasi sangat berakibat dalam pendidikan karena siswa mungkin tidak memiliki pengetahuan domain untuk mendeteksi kesalahan AI, dan guru mungkin bersandar pada diagnosis atau umpan balik yang dihasilkan AI yang tampak otoritatif tetapi tidak berdasar.

## Pertanyaan yang Perlu Dipertimbangkan

- Siswa sering tidak memiliki pengetahuan domain untuk mengenali kesalahan AI, dan guru mungkin memercayai diagnosis AI yang terdengar otoritatif. Bagaimana asimetri pengetahuan antara AI dan pembelajar ini membuat halusinasi sangat berbahaya dalam pendidikan?
- Sebuah studi menemukan AI yang mendiagnosis matematika tulisan tangan siswa dapat memfabrikasi kutipan bukti yang tidak ada, sambil mengklaim keyakinan. Ketika AI terdengar pasti dan mengutip 'bukti', apa yang seharusnya membuat Anda berhenti dan memverifikasi?
- Jika [[intelligent-tutoring|tutor AI]] terlalu memvalidasi solusi yang keliru dan terlalu menolak penalaran yang valid tetapi suboptimal, apa efek jangka panjangnya bagi siswa dan guru yang memercayainya?
- Halaman ini mengusulkan tinjauan human-in-the-loop, kalibrasi keyakinan yang sadar bukti, dan pengandaran pada sumber terverifikasi sebagai mitigasi. Mana yang tampak paling layak dalam konteks Anda, dan apa yang masih mungkin luput darinya?
- Bagaimana halusinasi dapat bersinggungan dengan ketergantungan berlebih: mengapa kesalahan AI paling berbahaya ketika pengguna memercayai keluarannya tanpa kritis, bukan ketika mereka skeptis?
- Jika Anda merancang alat [[ai-feedback-quality|umpan balik AI]] untuk siswa Anda, pengaman spesifik apa yang akan Anda tuntut untuk melindungi dari keluaran yang tampak masuk akal tetapi salah — dan bagaimana Anda mengetahui pengaman itu bekerja?

## Pendahuluan

Halusinasi dalam AI pendidikan mengambil beberapa bentuk yang terdokumentasi dalam artikel basis pengetahuan ini: bukti yang difabrikasi dalam [[assessment|penilaian siswa]], salah diagnosis pengetahuan pembelajar yang terlalu percaya diri, dan penjelasan yang terdengar masuk akal tetapi keliru yang diterima siswa sebagai kebenaran. Risiko ini diperkuat dalam pendidikan karena asimetri pengetahuan antara AI dan pembelajar berarti pembelajar berada pada posisi yang lemah untuk memverifikasi keluaran AI. Latar lebih lanjut adalah bacaan mata kuliah yang dihasilkan AI yang menggantikan buku teks: dalam sebuah mata kuliah pascasarjana yang menggantikan teks komersialnya dengan cara ini, hanya sekitar 0.80% dari 4,487 halaman yang tercatat memuat sitasi dalam teks bergaya APA dan string DOI praktis tidak ada, sehingga sebagian besar klaim tidak dapat diaudit dari dalam artefaknya ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Celah ketertelusuran itu berbeda dari jawaban yang salah, karena teksnya terbaca otoritatif sementara menawarkan sarana konfirmasi internal yang terbatas.

Tinjauan atas 125 studi memberi rentang pada prevalensi dan celah deteksinya: tingkat halusinasi 10–40%, dengan mahasiswa kedokteran hanya mendeteksi kesalahan AI 44–55% dari waktu ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

**Distorsi memori setelah keluaran.** Sebuah eksperimen 2026 menemukan bahwa ringkasan AI yang menyesatkan melakukan lebih dari sekadar salah informasi: ia mengubah apa yang diingat 328 orang dewasa tentang video yang telah mereka tonton. Hanya 44,8% yang membaca ringkasan menyesatkan kemudian mengidentifikasi detail kritis dengan benar, berbanding 83,6% yang membaca ringkasan konsisten, dan efeknya bertahan ketika ringkasan diberi label tulisan manusia ([[sim-ai-summary-memory-distortion-2026|Sim, Eiger & Kohno, 2026]]). Kelalaian adalah kesalahan paling umum dalam audit pendampingnya: seluruh 20 ringkasan memuat kesalahan, dan 95% menghilangkan tabrakan itu sendiri. Studi itu tidak menguji siswa, tetapi ia menunjukkan mengapa pemeriksaan halusinasi yang berhenti pada teks tidak lengkap: kesalahan dapat bertahan dalam memori pembaca setelah teksnya hilang.

**Halusinasi penilaian** sangat merusak. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** menemukan bahwa LLM memfabrikasi kutipan bukti yang tidak ada dalam tulisan tangan siswa ketika mendiagnosis keterampilan kognitif, dengan 58.5% diagnosis yang keliru disertai klaim palsu akan keyakinan evidensial. **[[llm-fallacy-misattribution]]** mendokumentasikan kelebihan atribusi bukti yang sistematis dalam penalaran [[llm]] — model mengklaim dukungan evidensial di tempat yang tidak ada. Keduanya terhubung ke [[ai-ed-evaluation]] dan kekhawatiran [[knowledge-tracing]] tentang [[assessment-validity]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] menambahkan dua mode kegagalan yang terlihat ketika keluaran AI dinilai alih-alih diperiksa: perincian yang difabrikasi yang lolos penilaian — makalah yang ditinjau yang tidak ada, lengkap dengan DOI yang tak dapat diselesaikan, dan ukuran sampel yang dilaporkan 378 padahal sumbernya menyebut 329 — dan kontradiksi diri dalam satu respons, di mana model menalar jalan menuju opsi yang benar lalu melaporkan opsi lain dalam ringkasan penutupnya. Karena daftar referensi saat ini dinilai untuk format alih-alih akurasi, kelas kesalahan ini mencapai nilai kelulusan sambil menyesatkan siswa yang menggunakan alat yang sama untuk merevisi.

Dalam percontohan desain penilaian, [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] menemukan referensi yang difabrikasi dan perkiraan waktu yang tidak realistis yang bertahan melalui prompting berulang dan menuntut revisi akademik substansial — halusinasi dalam alat penyusunan draf yang menghadap pendidik, bukan dalam pekerjaan siswa.

**[[misconceptions|Miskonsepsi]] strategis** adalah kerabat yang lebih halus dari halusinasi terang-terangan. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] meminta tujuh model berbobot terbuka menghasilkan "jebakan [[socratic-method|Sokrates]]" untuk 35 konsep ilmu komputer inti — penjelasan yang lancar dan otoritatif sementara bersandar pada kesalahan halus yang spesifik domain — dan tiga pakar domain mengonfirmasi 221 dari 241 segmen yang diprompt (91.7%) sebagai miskonsepsi strategis, tanpa perbedaan signifikan antar-domain ilmu komputer. Kesalahannya sebagian besar konseptual alih-alih faktual (66.5% vs. 33.5%) dan tidak ada yang murni logis, dan semuanya dinilai cukup hingga sangat persuasif (M = 3.71 pada skala lima poin), dengan identitas model menjelaskan 43% varians. Karena pernyataan individual dapat benar sementara relasi di antaranya salah, pemeriksaan fakta tidak memadai; para penulis berargumen [[ai-literacy|pembelajar]] membutuhkan verifikasi konseptual dan validasi model mental. Mereka juga memperingatkan bahwa angka itu mengukur kapabilitas di bawah [[prompt-engineering|prompting]] adversarial alih-alih prevalensi kesalahan semacam itu dalam penggunaan biasa, dan bahwa tidak ada siswa yang diuji, sehingga tidak ada penipuan atau hasil belajar yang diukur.

**Bukti yang dimanipulasi alih-alih difabrikasi.** Mode kegagalan terkait dalam [[automated-assessment|penilaian otomatis]] adalah keluaran yang digeser dari luar. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] melakukan red team pada alur kerja penilaian AI yang rutin dan menemukan bahwa instruksi yang disembunyikan di dalam berkas yang dikirimkan menaikkan nilai esai yang gagal tanpa peringatan yang terlihat dalam 9 dari 9 iterasi untuk satu strategi dan 17 dari 18 untuk strategi lain. Dua perincian berkaitan dengan [[trust-calibration|kepercayaan]]: injeksi yang terdeteksi diblokir dengan menonaktifkan obrolan secara diam-diam dan tidak pernah dilaporkan kepada pengguna, dan pada satu jalannya ketika alat mengumumkan hanya akan mengikuti instruksi tugas resmi, enam pengulangan berkas yang sama tetap menaikkan nilai. Nilai yang diperoleh dengan cara ini tidak membawa klaim [[assessment-validity|validitas]] apa pun, dan karena manipulasi itu tidak meninggalkan jejak yang tahan lama, [[human-in-the-loop-ai|instruktur]] tetap menjadi satu-satunya pemeriksaan nyata atas keluaran yang dirancang agar tidak terlihat.

Pertahanan terhadap manipulasi semacam itu membawa pertukarannya sendiri: alur pagar pengaman berlapis meninggalkan 46.34% injeksi berhasil dan Prompt Guard 38.48%, sementara NeMo [[guardrails]] memblokir setiap serangan tetapi menandai 16.22% kueri siswa yang benigna — tingkat positif palsu yang dengan sendirinya merupakan kerugian [[pedagogy|pedagogis]] dalam sebuah tutor ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

**Halusinasi tutoring** memengaruhi pembelajaran secara langsung. **[[yasir-llm-tutoring-agents-2026]]** menemukan LLM terlalu memvalidasi solusi yang keliru sementara terlalu menolak penalaran yang valid tetapi suboptimal — kegagalan sistemik yang akan menyesatkan siswa maupun guru. **[[eduframetrap-llm-sycophancy-educational-safety]]** dan **[[eduguard-safe-rag-llm-tutor]]** membahas mekanisme keselamatan untuk LLM pendidikan. Risiko-risiko ini terhubung ke [[pedagogical-safety]] dan persyaratan [[human-in-the-loop-ai]].

**Pendekatan mitigasi** mencakup desain [[human-in-the-loop-ai]] di mana AI menopang alih-alih menggantikan pertimbangan [[teacher-role|guru]], arsitektur yang sadar bukti yang mengalibrasi keyakinan berdasarkan mutu evidensial (seperti dianjurkan MathCog), dan pengandaran berbasis [[rag]] yang membatasi keluaran LLM pada sumber terverifikasi. Konsep [[cognitive-offloading|Ketergantungan Berlebih]] berkaitan erat — halusinasi paling berbahaya ketika pengguna memercayai keluaran AI tanpa kritis. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] menambahkan mode kegagalan yang tidak sepenuhnya dicakup tumpukan mitigasi: klaim institusional yang terlalu spesifik, dengan sekitar 1.03% halaman yang tercatat memasangkan kampus bernama seperti "Sacramento State" dengan verba kebijakan yang asertif tentang aturan retensi, jabatan, dan promosi yang direvisi atau Perintah Eksekutif CSU, yang tidak satu pun dapat diverifikasi dari teksnya. Kekhususan itulah yang membuatnya mahal, karena perincian lokal yang difabrikasi tampak cukup tepat untuk lolos dari pemeriksaan kelayakan pembaca, dan obat yang diusulkan studi itu bersifat prosedural alih-alih teknis: perlakukan generasi sebagai produksi draf di bawah tinjauan instruktur, lalu kurasi sumber ke dalam desain yang diperkaya pengambilan.

**Ketidakandalan yang diberi label menurunkan ketergantungan yang dilaporkan alih-alih menaikkannya.** Ketika 546 partisipan membaca dialog GAI yang sama yang diberi label entah memuat informasi yang difabrikasi atau terverifikasi akurat, label fabrikasi menghasilkan [[trust]] dan persepsi kendali yang lebih rendah serta disonansi kognitif dan frustrasi yang lebih tinggi bersamaan dengan skor ketergantungan yang *lebih rendah* (M = 2.935 vs. 3.254) ([[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]]). Hasil ini mengualifikasi logika ketergantungan berlebih pada halaman ini: melihat bahwa sebuah keluaran mungkin difabrikasi tidak sama dengan terus bersandar padanya.

**Isyarat kredibilitas dapat memperkuat kepatuhan alih-alih sebaliknya.** Gerakan sebaliknya muncul ketika keluaran yang tidak andal didandani: menambahkan sitasi dan sinyal kredibilitas ke antarmuka debat ARMADA menaikkan proporsi partisipan yang beralih dari pertimbangan awal yang benar ke posisi AI yang keliru sebesar 112% (31.8% vs. 15.0%), dan pemeriksaan manual menemukan beberapa kasus yang dikutip salah diatribusikan ke referensi yang tidak relevan atau fiktif ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

## Miskonsepsi Umum

- **"Siswa akan menyadari kesalahannya."** **Tinjauan atas 125 studi** menempatkan tingkat halusinasi pada **10-40%**, dengan **mahasiswa kedokteran — di antara pembelajar yang paling cermat diseleksi di [[higher-ed|pendidikan tinggi]] — hanya mendeteksi kesalahan AI 44-55% dari waktu**. Tingkat deteksi yang jauh di bawah keandalan tingkat kebetulan berarti beban itu tidak dapat diletakkan pada pembaca.
- **"Kesalahannya jelas ketika muncul."** AI yang mendiagnosis matematika tulisan tangan dapat **memfabrikasi kutipan bukti yang tidak ada sambil mengklaim keyakinan**. Kegagalannya bukan jawaban yang tampak masuk akal tetapi salah; ia adalah dukungan yang diciptakan dan disajikan dengan kepastian, yang merupakan jenis tersulit untuk ditangkap karena terbaca justru sebagai bukti yang diinginkan pembaca cermat.
- **"Keluaran tanpa sitasi adalah masalah format."** Dalam sebuah mata kuliah pascasarjana yang menggantikan buku teks komersialnya dengan bacaan yang dihasilkan AI, hanya **sekitar 0.80% dari 4,487 halaman yang tercatat memuat sitasi dalam teks bergaya APA**. Itu adalah ketiadaan provenans pada tingkat korpus, bukan kelalaian sesekali, dan artinya verifikasi tidak memiliki titik awal.
- **"Halusinasi adalah masalah generasi model yang diselesaikan model yang lebih baru."** Rentang tingkatnya membentang 10-40% di 125 studi, yang merupakan sifat tugas dan penerapan sebanyak sifat model. Pengurangan tingkat adalah kemajuan nyata dan tidak mengubah bahwa pembaca harus dapat memeriksa.

## Konsep terkait

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Artikel terkait
- [[sim-ai-summary-memory-distortion-2026]] — Ringkasan AI yang menyesatkan mendistorsi memori orang dewasa tentang sebuah video, dan label AI atau manusia tidak melindungi mereka
- [[frontiers-gai-hallucination-dependence-2026]] — Memberi label dialog GAI sebagai fabrikasi menurunkan kepercayaan dan ketergantungan sekaligus
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Isyarat kredibilitas menaikkan kepatuhan pada keluaran AI, dengan beberapa kasus yang dikutip salah diatribusikan atau fiktif
- [[ivory-psychology-assessment-integrity-2026]] — Sitasi yang difabrikasi dan keluaran yang bertentangan dengan diri sendiri di dalam pekerjaan siswa yang lolos (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: penjelasan yang lancar tampak masuk akal tetapi salah pada tingkat konseptual (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Injeksi prompt tersembunyi menaikkan nilai yang dinilai AI tanpa terdeteksi, dan serangan yang terdeteksi tidak dilaporkan (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Merancang Penilaian Autentik dengan AI Generatif: Studi Percontohan Assessment Authentifire di Pendidikan Tinggi
