---
title: "Apa Praktik Terbaik untuk Mengembangkan Tutor AI yang Efektif?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Tutor Anda berjarak tiga minggu dari uji coba. Obrolan sudah berjalan, model menjelaskan sebuah turunan dengan rapi, dan demo internal mendapat tepuk tangan. Lalu seseorang dari pusat pengajaran mengajukan pertanyaan yang tidak punya kolom di spesifikasi Anda: setelah satu semester dengan alat ini, apakah mahasiswa dapat menyelesaikan soal ketika alat itu tidak ada di ruangan? Yang Anda punya adalah daftar fitur. Yang tidak Anda punya adalah satu kalimat yang menyatakan apa yang harus mampu dilakukan pembelajar sendirian pada akhirnya.

Tutor adalah kebijakan yang membungkus sebuah [[conversational-ai|chatbot]], dan kebijakan itu yang menentukan apakah pembelajaran terjadi. Sebutkan kerja kognitif yang harus dilakukan pembelajar, buat sistem menuntutnya (percobaan sebelum bantuan, tangga petunjuk yang memudar, pemeriksaan yang tidak dapat dipalsukan model), dan evaluasi dengan tutor dimatikan. Kualitas model menentukan seberapa baik percakapan terasa. Kebijakan menentukan apa yang dapat dilakukan mahasiswa pada bulan Juni.

## Versi singkat

**1.** Tulis tujuan sebagai klaim tentang kinerja tanpa bantuan, lalu turunkan setiap fitur darinya. Jika sebuah fitur tidak dapat dilacak ke kalimat itu, ia adalah fitur demo.

**2.** Bangun model pembelajar dari bukti yang dapat Anda catat, dan simpan setiap diagnosis sebagai hipotesis dengan nilai keyakinan, bukan sebagai fakta.

**3.** Tetapkan tangga bantuan di dalam kode, dengan anak tangga yang bernama, dan buat antarmuka menagih pembelajar sesuatu untuk setiap langkah menuruni tangga itu.

**4.** Dasarkan konten pada materi Anda sendiri, dan serahkan pemeriksaan aritmetika, aljabar dan kode kepada alat deterministik yang tidak dapat berhalusinasi.

**5.** Uji kegagalan mengajar lintas percakapan utuh: kebocoran jawaban, sikofansi, penguatan miskonsepsi, penyimpangan instruksional.

**6.** Ukur dengan fase penarikan dan tes tertunda, bukan dengan skor kepuasan.

## Tulis tujuan sebagai klaim tentang kinerja tanpa bantuan

Tiga daftar, ditulis sebelum siapa pun memilih model:

- Apa yang seharusnya diketahui atau mampu dilakukan pembelajar sesudahnya.
- Kerja kognitif apa yang harus mereka lakukan sendiri.
- Apa yang boleh dilakukan tutor untuk mereka.

Literatur [[intelligent-tutoring]] menunjukkan bahwa efektivitas bergantung pada desain [[pedagogy|pedagogis]] dan bukan semata pada kapabilitas model, dan kegagalan itu mudah dibangun tanpa sengaja. Tutor yang dioptimalkan untuk "menyelesaikan soal" akan merusak tutor yang dioptimalkan untuk "belajar menyelesaikan soal" sambil tetap lulus setiap uji fungsional yang Anda tulis, karena keduanya menghasilkan jawaban akhir yang benar. Perbedaannya terletak pada apa yang dilakukan mahasiswa antara pertanyaan dan jawaban.

Daftar kedua adalah tempat tim pengembang menjadi konkret. Ambil label penguasaan seperti "penguasaan turunan" dan tolak membiarkannya berarti menghasilkan turunan yang benar. Pecah menjadi mengenali kapan sebuah turunan sesuai, menafsirkannya sebagai laju perubahan sesaat, memilih aturan, menjalankan prosedur, menjelaskan mengapa pilihan itu tepat, memeriksa kewajaran, dan menerapkannya pada soal yang tidak dikenal. Masing-masing adalah hal terpisah untuk dicatat, dan masing-masing menyiratkan respons berbeda ketika ia tidak ada. Dekomposisi ini juga pertahanan terhadap [[correct-answer-trap-misconceptions|perangkap jawaban benar]], ketika pembelajar mencapai jawaban yang benar melalui penalaran yang keliru dan analitik Anda mencatat keberhasilan. [[correct-answer-trap-ai-tutor|Menangkap Perangkap Jawaban Benar]] dan [[zhang-tutormoments-2026|Ketika Bantuan Tidak Membantu]] keduanya menggambarkan versi kegagalan itu dalam produksi.

## Bangun model pembelajar sebelum percakapan

Model pembelajar menyimpan dua jenis keadaan: perkiraan per konsep (limit: berkembang, aturan pangkat: dikuasai, aturan perkalian: berkembang, aturan rantai: belum terbukti) dan hipotesis miskonsepsi beserta bukti dan keyakinan di balik masing-masing. Jaga keduanya terpisah. Perkiraan konsep adalah yang menggerakkan pemilihan tingkat kesulitan. Hipotesis adalah yang menggerakkan pertanyaan berikutnya.

Berhati-hatilah membiarkan [[llm|LLM]] melakukan diagnosis sendiri. [[benchmark|Tolok ukur]] menemukan bahwa tutor LLM dapat mengenali penalaran yang jelas benar namun kadang menolak alternatif yang valid atau menerima penalaran yang salah. Model yang menangkap kasus baik dan salah membaca kasus ambigu gagal tepat pada mahasiswa yang membutuhkan bantuan. Untuk domain yang berkonsekuensi, arsitektur yang bertahan adalah **diagnosis terstruktur ditambah dialog LLM yang fleksibel**, susunan yang diuraikan [[yasir-llm-tutoring-agents-2026|Mengonfirmasi yang Benar, Melewatkan Sisanya]]: detektor Anda sendiri menetapkan apa yang mungkin dilakukan mahasiswa, dan model menulis percakapan di sekitar temuan itu.

Beri diagnosis urutan eksplisit yang tidak dapat dilewati model: deteksi, verifikasi, respons. Model boleh mengusulkan [[misconceptions|miskonsepsi]] sebagai hipotesis, lalu harus memverifikasinya terhadap pekerjaan mahasiswa yang sebenarnya atau pertanyaan bertarget sebelum tutor meresponsnya. Tanpa langkah itu, sistem mengarang bukti lalu menutori mahasiswa atas kesalahan yang tidak mereka buat, yang tidak berguna sekaligus sedikit menghina.

Bukti yang layak dicatat, dalam urutan kasar menurut kegunaan: percobaan terbaru beserta langkah antaranya, pengetahuan yang terbukti per konsep, perilaku mencari bantuan (yang dengan sendirinya merupakan sinyal tentang keyakinan), dan keyakinan yang dilaporkan sendiri di tempat Anda mengumpulkannya. Sesuaikan tingkat kesulitan dan bantuan dari catatan itu, dan perlakukan prompt terbaru pembelajar sebagai satu masukan bagi catatan itu. Satu prompt adalah penaksir yang buruk atas apa yang diketahui mahasiswa, dan tutor yang bereaksi terhadapnya akan bergerak kacau.

## Tetapkan tangga bantuan, lalu buat antarmuka menagihnya

Tuliskan anak tangganya sebelum Anda menulis prompt, karena tangga itu keputusan produk dengan keadaan yang bernama, dan pengaturan nada tidak dapat mengungkapkannya. Urutan yang dapat dijalankan:

1. Percobaan mandiri.
2. Pertanyaan metakognitif tentang apa yang sudah dicoba mahasiswa.
3. Petunjuk konseptual.
4. Identifikasi aturan yang relevan.
5. Susun sebagian soal.
6. Langkah antara yang dikerjakan.
7. Solusi yang dikerjakan.
8. Mahasiswa menjelaskan solusinya.
9. Mahasiswa menyelesaikan soal sebanding tanpa bantuan.

Dukungan memudar seiring meningkatnya kompetensi, yang merupakan mekanisme di pusat [[scaffolding|perancah]]. Melihat solusi yang dikerjakan tidak membuktikan penguasaan, jadi sesi apa pun yang mencapai anak tangga ketujuh berutang anak tangga kesembilan kepada Anda sebelum dapat dihitung tuntas.

Bukti kausal bahwa tangga seperti itu perlu dibangun berasal dari sebuah eksperimen lapangan ketika antarmuka GPT tanpa penjagaan menaikkan kinerja matematika berbantuan dan menurunkan kinerja ujian tanpa bantuan sesudahnya. Tutor yang memberi petunjuk sebagian besar menghapus penalti pembelajaran itu ([[generative-ai-guardrails-harm-learning|AI generatif tanpa pagar pengaman dapat merugikan pembelajaran]]). Kendalanya bersifat arsitektural. Model yang sama, dengan perilaku bantuan yang berbeda, menghasilkan hasil yang berlawanan pada ukuran yang penting.

Eksperimen lapangan acak yang lebih besar dengan lebih dari 6.000 siswa sekolah menengah pada platform latihan berbasis penguasaan menunjukkan seperti apa tangga itu dalam catatan. Siswa yang diberi dukungan AI berkembang lebih lambat dan mencoba lebih sedikit soal, dan mereka menjawab dengan lebih akurat. Mekanisme yang paling jelas adalah ketepatan percobaan berikutnya setelah kesalahan: lebih sedikit percobaan yang dibutuhkan untuk kembali ke jawaban yang benar. Pola itu adalah perlambatan yang produktif, dan itulah tanda yang seharusnya ditinggalkan sebuah tangga petunjuk ([[making-ai-tutoring-productive-mastery-math-2026|Membuat Tutor AI Produktif]]).

Studi yang sama memberi peringatan tentang dasbor Anda sendiri. Mewajibkan tiga jawaban benar berturut-turut dengan tajam menaikkan penguasaan yang didefinisikan platform tanpa menghasilkan keuntungan yang terdeteksi pada tes tertunda seminggu kemudian. Bukti tes tertunda terkuat hanya muncul ketika AI berada di dalam alur kerja penguasaan (koefisien 0,085), bukan ketika AI tersedia sebagai akses mandiri. Jika metrik keberhasilan Anda adalah penghitung rentetan, Anda akan merilis sistem yang mengoptimalkan rentetan itu.

Gesekan antarmuka termasuk dalam lintasan desain yang sama. Petunjuk tanpa batas di balik tombol yang terlihat mengubah seluruh tangga menjadi jalan pintas, dan permintaan petunjuk yang terlalu dini disertai pembacaan yang dangkal berkaitan dengan [[learning-gains|hasil belajar]] yang lebih rendah. Mengganti `[Hint][Hint][Hint][Show Answer]` dengan pertanyaan "apa yang sudah Anda coba?" dan "bagian mana yang menghambat Anda?" (memilih aturan, menyusun persamaan, mengerjakan aljabar, memahami konsep) berbiaya satu layar dan mengarahkan mahasiswa ke anak tangga yang benar-benar mereka butuhkan. Itu juga memberi Anda data catatan yang menunjukkan anak tangga mana yang biasa mereka lewati.

## Serahkan bagian yang dapat diperiksa kepada pemeriksa

Dasarkan generasi pada materi yang disetujui pengajar: bagian buku teks, catatan kuliah, contoh yang dikerjakan, terminologi, metode yang disetujui, notasi, aturan tugas, kebijakan, dan sumber daya [[curriculum-design|kurikuler]]. Generasi yang diperkaya pengambilan terhadap korpus itu mengurangi [[hallucination-risk|risiko halusinasi]] dan tidak menghilangkannya, sebagaimana diuraikan [[rag|RAG]]. Tampilkan sitasi atau asal-usul di antarmuka di tempat mahasiswa mungkin memeriksa sebuah klaim, karena sitasi itulah yang membuat pendasaran dapat diaudit setelah kejadian.

Pendasaran juga melakukan tugas yang terlewat oleh metrik akurasi. Sebuah mata kuliah punya metode yang disetujui, dan tutor yang memperkenalkan teknik yang valid secara matematis namun tidak dipakai mata kuliah itu telah mengajarkan sesuatu yang akan membuat nilai mahasiswa turun. Pengambilan dari lapisan mata kuliah adalah cara tutor tetap berada di dalam himpunan metode.

Untuk domain dengan jawaban yang dapat diperiksa secara formal, tambahkan alat deterministik: kalkulator, sistem matematika simbolik, eksekusi kode, graf pengetahuan, validator berbasis aturan, dan pemecah [[discipline-specific-aied|khusus domain]]. Pembagian kerjanya adalah bagian yang penting. LLM menangani penjelasan dan dialog. Mesin simbolik memverifikasi kesetaraan aljabar, turunan, integral, solusi persamaan, titik kritis dan aproksimasi numerik. Langkah antara yang salah yang ditangkap verifikator menjadi momen tutoring. Langkah antara yang salah yang tidak ditangkap apa pun menjadi miskonsepsi yang dibawa mahasiswa ke ujian.

## Tuntut pembelajar untuk bertindak atas umpan balik

Umpan balik yang berbunyi "Benar", "Salah", atau "Kerja bagus" adalah peristiwa penilaian yang memakai antarmuka pengajaran. Basis pengetahuan memperlakukan [[feedback|umpan balik]] sebagai lingkar penyediaan dan penerimaan: umpan balik mendukung pembelajaran ketika mahasiswa memahaminya dan bertindak atasnya, dan paruh kedua itulah yang biasanya dilewati sistem. Bangun tutor untuk menyebut langkah penalaran yang terlibat, menyatakan apa yang perlu ditinjau ulang, memberi satu tindakan berikutnya yang konkret, dan meminta pembelajar memprediksi atau menjelaskan sebelum umpan balik diungkapkan.

Urutan yang membawa hal ini adalah pembelajar lebih dulu, AI kedua, pembelajar lagi. Mahasiswa menghasilkan, memilih, membenarkan, mengevaluasi atau merefleksikan; tutor merespons; mahasiswa melakukan sesuatu dengan respons itu. Rancang struktur giliran agar ini tidak opsional. Sistem tempat model dapat menghasilkan tiga paragraf sebagai jawaban atas satu pertanyaan mengajari mahasiswa untuk bertanya dan membaca.

Tujuan jangka panjangnya adalah internalisasi. Pembelajar semestinya berakhir dengan menjalankan sendiri pertanyaan dan strategi [[problem-solving|pemecahan masalah]] milik tutor, yang merupakan argumen [[agency|agensi]] dan alasan tangga itu punya anak tangga teratas tempat tutor diam.

## Rancang untuk apa yang terjadi pada giliran keempat puluh

Keamanan pedagogis adalah rangkaian uji yang terpisah dari keamanan chatbot biasa, dan sebagian besar tim merilis hanya dengan yang kedua. Toksisitas dan ketahanan terhadap jailbreak tidak memberi tahu Anda apakah tutor akan menyerahkan jawaban kepada mahasiswa yang bertanya dua kali, menyetujui metode yang salah karena mahasiswa terdengar yakin, menyimpang dari himpunan metode mata kuliah selama sesi panjang, atau mendorong pembelajar ke [[cognitive-offloading|offloading kognitif]]. [[ai-sycophancy|Sikofansi]] adalah yang pertama lolos, karena persetujuan terbaca sebagai kebaikan dan data preferensi Anda memberinya imbalan.

Ujilah kebocoran jawaban, penguatan miskonsepsi, persetujuan berlebihan, tingkat kesulitan yang tidak tepat, offloading, perlakuan yang berbias, hilangnya agensi pembelajar, penyimpangan instruksional, dan keyakinan berlebih dalam penjelasan yang salah. Jalankan uji pada percakapan yang panjang, bukan pada satu giliran, karena kegagalan pedagogis menumpuk: sepuluh giliran pertama bisa teladan dan giliran kesebelas bisa membatalkan sesi. Tutor seharusnya ramah dan benar sekaligus, termasuk ketika pembelajar bersikeras pada miskonsepsi. [[pedagogical-safety]] dan [[hazra-safetutors-pedagogical-safety-2026|Keamanan Tutor AI dan Bahaya Pedagogis]] menguraikan taksonomi kegagalannya.

## Taruh arsitektur data dalam dokumen desain yang sama

Kumpulkan hanya data pembelajar yang diperlukan secara pedagogis, dan mampu menyebutkan mengapa setiap bidang ada. Di tempat Anda menyimpan memori persisten atau [[student-modeling|model pembelajar]], buat tujuannya terlihat oleh pembelajar, beri mereka kendali yang semestinya atasnya, lindungi informasi sensitif, tetapkan masa retensi, dan arahkan keputusan yang berkonsekuensi kepada pengajar atau titik pemeriksaan [[human-in-the-loop-ai|manusia]] lain. Model pembelajar yang diam-diam mengumpulkan perkiraan keyakinan yang tidak pernah dilihat mahasiswa adalah masalah perlindungan data sekaligus masalah pedagogis.

Audit perilaku lintas latar belakang bahasa, tingkat kemampuan, konteks budaya, kebutuhan [[accessibility|aksesibilitas]], serta tingkat [[prior-knowledge|pengetahuan awal]] dan pengalaman AI. Kinerja yang berbeda pada tujuan yang sama adalah bug yang menempel pada seorang mahasiswa, dan ia tidak akan muncul di angka akurasi agregat Anda.

Satu keputusan aksesibilitas layak mendapat barisnya sendiri: jangan jadikan [[prompt-engineering|penyusunan prompt]] yang canggih sebagai prasyarat bagi pengajaran yang baik. Jika tutor hanya mengajar dengan baik ketika mahasiswa menulis prompt yang cermat, Anda telah membangun sistem yang menguntungkan mahasiswa yang sudah tahu cara berbicara dengan model. Tutor semestinya membantu pembelajar merumuskan pertanyaan yang produktif, yang juga merupakan keterampilan [[metacognition|metakognisi]] yang layak dimiliki.

## Instrumentasikan interval penarikan

Metrik sesi tidak akan memberi tahu Anda apakah alat itu bekerja. Akurasi respons, panjang percakapan, preferensi mahasiswa, kepuasan, penyelesaian tugas dan [[student-engagement|keterlibatan]] semuanya naik pada sistem yang tidak mengajarkan apa pun, karena mahasiswa menyukai bantuan dan bantuan mudah diukur. Evaluasi kinerja tanpa bantuan, retensi tertunda, transfer ke soal baru, koreksi miskonsepsi, kemandirian pembelajar, penerimaan umpan balik, dan [[differential-effects-across-learner-groups|efek diferensial lintas kelompok pembelajar]]. [[ai-ed-evaluation]] memuat metodenya, dan [[ai-tutor-behavioral-evaluation|Sumbu Evaluasi yang Hilang]] berargumen bahwa perilaku adalah konstruknya.

Dua studi menajamkan aturan menentang [[self-report-measures|laporan diri]] dan horizon pendek. Sebuah uji coba dengan 38 mahasiswa pemrograman pemula menemukan asosiasi kuat antara penggunaan [[generative-ai|AI generatif]] dan pembelajaran yang *dirasakan* (rs = 0,802, p < 0,001), sementara indikator kemajuan otonom tanpa dukungan pengajar mendapat skor terendah. Para penulis menyebut kesenjangan itu ilusi kompetensi dan utang epistemik, dan itulah tepatnya kesenjangan yang diberi imbalan oleh metrik kepuasan ([[genai-cognitive-tutor-programming-2026|AI Generatif sebagai Tutor Kognitif Informal]]).

Lebih mendasar lagi, sebagian besar evaluasi berhenti pada saat bantuan berakhir. [[cognitive-washout-ai-skill-decay-2026|Dinamika pengikisan kognitif]] menamai interval pascapenarikan yang tidak terukur dan merumuskan empat hasil: pantulan elastis, dataran parsial, perancah laten, dan pemulihan berlebih. Kurva pengikisan itu membawa konstanta waktu pemulihan, suku kelengkapan pemulihan, dan indeks histeresis yang membandingkan usaha belajar ulang dengan usaha semula. Karena reversibilitas menentukan keparahan, kerangka itu berargumen bahwa latihan tanpa bantuan terjadwal semestinya didosis menurut kurva pemulihan alih-alih diperdebatkan sebagai soal prinsip. Rencana evaluasi Anda membutuhkan fase penarikan sekaligus pascates langsung, dan [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|bukti acak bahwa bantuan singkat menekan kinerja tanpa bantuan di kemudian hari]] adalah alasan untuk menjadwalkannya lebih awal.

## Beri pengajar sesuatu untuk disunting

Sebelum penerapan, minta pendidik menguji profil pembelajar yang realistis, miskonsepsi umum, kasus tepi, prompt adversarial, respons ambigu, dan percakapan tutoring yang panjang. Catat kegagalan pedagogisnya dan umpankan kembali ke prompt sistem, kebijakan tutoring, sumber pengetahuan, [[guardrails|pagar pengaman]], aturan model pembelajar dan pemilihan model. Respons yang lancar tetap bisa salah secara pedagogis, dan pengajar adalah satu-satunya peninjau yang dapat melihatnya.

[[teacher-intervention-k12-ai-based-instruction-2026|Tinjauan sistematis Lee atas 29 studi K-12]] menggambarkan apa isi pengawasan itu dan di mana ia patah. Intervensi [[teacher-role|guru]] adalah siklus empat fase yang berulang: pemantauan, penilaian, intervensi dan orkestrasi. Peringatan AI, [[visualization|dasbor]] dan skor otomatis "tidak secara otomatis mengarah pada tindakan pedagogis". Strategi guru terkuat yang ditemukan tinjauan itu adalah penerjemahan pedagogis: memilih, merevisi, melengkapi, meringkas atau menghapus umpan balik chatbot alih-alih meneruskannya begitu saja.

Dua peringatan desain mengikutinya, dan keduanya bertentangan dengan peta jalan yang biasa. Lebih banyak informasi AI bukan lebih baik: sistem yang terus-menerus memancarkan diagnostik membebani pengajar dan menarik perhatian dari pengamatan mereka sendiri. Prioritaskan apa yang layak ditindaklanjuti, buat dapat ditafsirkan, dan tawarkan rekomendasi dalam bentuk yang dapat diterima, diubah, ditunda atau ditolak pengajar. Lebih banyak dukungan bagi pengajar juga bukan lebih baik: menunda intervensi agar mahasiswa dapat bekerja mandiri itu sendiri adalah keahlian. Kondisi struktural, yakni waktu untuk meninjau data, ukuran kelas, dan kemampuan menjangkau secara fisik kelompok yang membutuhkan bantuan, adalah bagian dari intervensi alih-alih logistik latar. Dasbor yang dibuat untuk pengajar tanpa jam kosong tidak akan dibuka.

## Kasus pertama: tutor kalkulus, ketika verifikasi murah

Tutor kalkulus semester pertama di perguruan tinggi semestinya menaikkan apa yang dapat diselesaikan dan dijelaskan mahasiswa secara mandiri setelah tutor itu dilepas, bukan memaksimalkan soal yang selesai dengan benar. Tutoring matematika sangat rentan terhadap perancah berlebih, penggunaan petunjuk yang terlalu dini, dan diagnosis yang keliru atas penalaran mahasiswa, dan ketiganya terlihat di catatan Anda jika Anda melihatnya ([[math-education]]).

**Pendasaran dan verifikasi.** Bangunan enam lapis: materi mata kuliah dan kebijakan pengajar, lalu lapisan pengambilan, lalu mesin soal dan model pembelajar bersama verifikator simbolik dan mesin diagnostik, lalu lapisan kebijakan pedagogis, lalu generasi percakapan, lalu mahasiswa, lalu kembali ke model pembelajar. Verifikator adalah alasan desain ini dapat dikerjakan. Ia memutuskan apakah sebuah ekspresi setara, sebuah turunan benar, sebuah integral terhitung, sebuah titik kritis ditemukan, dan ia melakukannya tanpa menanyakan pendapat model.

**Satu interaksi.** Untuk menurunkan $f(x)=(x^2+1)\sin x$, chatbot konvensional mengungkap jawabannya. Tutor yang berorientasi pembelajaran bernalar secara internal bahwa mahasiswa menurunkan kedua komponen tetapi mengalikan hasilnya, kemungkinan [[misconceptions|miskonsepsi]] aturan perkalian sebagai $f'g'$, dan mengajukan pertanyaan diagnostik lebih dulu: aturan apa yang berlaku ketika dua fungsi dikalikan? Lalu mahasiswa menulis aturan perkalian secara simbolik, menyusun $u$ dan $v$, dan hanya setelah itu tutor memverifikasi ekspresi akhirnya. Perhatikan berapa banyak tutoring terjadi sebelum prosa model mana pun mencapai mahasiswa.

**Berbagai representasi.** Hubungkan prosedur simbolik dengan rumus, grafik, tabel, penafsiran verbal, dan konteks laju perubahan fisik. Kefasihan prosedural dan pemahaman konseptual tampak identik pada lembar jawaban yang benar dan menyimpang pada soal transfer.

**Dasbor.** Tampilkan bukti agregat sebagai pengganti penilaian yang buram: "aturan perkalian, 62% penguasaan terbukti; pola umum, 18% menghilangkan satu suku, 11% mengalikan turunan". Diagnosis individual keluar sebagai hipotesis beserta bukti pendukungnya, yang juga membuatnya dapat ditinjau pengajar ([[explainable-ai|keterjelasan]] lebih penting bagi pengajar daripada bagi mahasiswa di sini).

**Rencana evaluasinya.** Kinerja dengan tutor, kinerja pada soal sebanding tanpanya, retensi tertunda, transfer ke soal yang tidak dikenal, kualitas penjelasan konseptual, koreksi miskonsepsi, [[help-seeking|pencarian bantuan]] yang tepat dibandingkan yang terlalu dini, kebocoran jawaban, tingkat positif palsu dan negatif palsu diagnostik, dan hasil diferensial. Perbandingan yang menentukan proyek ini adalah berbantuan melawan tanpa bantuan di kemudian hari. Mahasiswa yang bergerak dari 60% menjadi 95% dengan tutor dan tetap di 60% sendirian belum ditutori.

## Kasus kedua: pelatih menulis, ketika tahap menentukan izin

Menulis tidak punya satu jawaban benar, jadi verifikasi adalah pertimbangan dan kerja desainnya bergeser ke penahapan. Basis pengetahuan membingkai menulis sebagai proses kognitif, sosial dan retoris, yang berarti sistem menulis AI dapat mendukung pembelajaran dan juga dapat menghapus tepatnya pemikiran yang menjadi alasan tugas itu ada ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Model kapabilitas.** Lacak argumen (kekhususan tesis, keselarasan klaim-bukti, kontra-argumen), organisasi (fokus paragraf, kemajuan logis, transisi), bukti (relevansi sumber, integrasi, penafsiran), revisi (revisi global dan tingkat kalimat, evaluasi umpan balik) dan gaya (kejelasan, tata bahasa, suara). Masing-masing menjadi sinyal terpisah di model pembelajar, dan itulah yang memungkinkan umpan balik bertarget.

**Dasarkan pelatih pada tugasnya.** Ambil instruksi, rubrik pengajar, bacaan mata kuliah, persyaratan sitasi, konvensi genre, contoh dari pengajar, dan kebijakan penggunaan AI, sehingga umpan balik dapat berkata "rubrik pengajar Anda meminta Anda menghubungkan setiap klaim utama dengan bukti dari setidaknya dua bacaan mata kuliah" alih-alih mengarang harapan generik. Nasihat generik adalah kegagalan bawaan alat menulis tanpa pendasaran, dan mahasiswa dapat mengetahuinya dalam dua sesi.

**Tetapkan izin per tahap.** Keterlibatan AI pada tahap berbeda mempengaruhi rasa kepemilikan secara berbeda. Dukungan perencanaan mengurangi kepemilikan lebih sedikit daripada dukungan penyusunan draf, dan draf yang dihasilkan AI menghasilkan penurunan terbesar ([[ai-writing-support-stage-ownership-2026|Dari Perencanaan ke Revisi]]). Temuan itu langsung berubah menjadi tabel izin. Pada perencanaan, pelatih mengajukan pertanyaan, membandingkan posisi, menantang asumsi dan mengkritik kerangka, dan tidak menghasilkan argumennya. Pada penyusunan draf, pembelajar menghasilkan prosa lebih dulu dan pelatih mengembangkan alih-alih mengambil alih. Pada revisi, pelatih mendiagnosis dan berhenti di situ: klaim yang tidak jelas, bukti yang hilang, bukti yang tidak mendukung klaim, masalah organisasi, draf terhadap rubrik. Pada penyuntingan, setelah revisi, ia menangani tata bahasa, tanda baca, keringkasan dan format sitasi.

**Satu interaksi yang dikerjakan.** Untuk esai tentang mewajibkan [[online-teaching-and-learning|mata kuliah daring]], sistem generik menulis ulang paragraf mahasiswa menjadi prosa yang rapi dan mengerjakan kerja intelektualnya. Pelatih menyebut apa yang sudah bekerja, menamai masalah utamanya (paragraf itu memberi alasan tetapi tidak pernah menjelaskan mengapa alasan tersebut membenarkan mandat seluruh universitas), mengajukan pertanyaan revisi, dan meminta mahasiswa menyelesaikan satu kalimat dengan kata-katanya sendiri. Argumennya tetap di tempat yang semestinya.

**Umpan balik yang diprioritaskan.** Satu kekuatan untuk dipertahankan, satu isu berdampak tinggi, satu pertanyaan yang menuntut pertimbangan penulis, satu tujuan revisi yang konkret. Bukan empat puluh komentar. Mahasiswa yang menerima empat puluh komentar akan memilahnya menurut panjang, dan pemilahan itu tidak ada hubungannya dengan apa yang penting.

**Buat mahasiswa menilai umpan baliknya.** [[feedback-literacy|Literasi umpan balik]] adalah tujuan pembelajaran tersendiri. Secara berkala tanyakan apakah pembelajar setuju dengan sebuah saran dan mengapa, dan biarkan mereka menolaknya. Keluarannya adalah [[evaluative-judgment|pertimbangan evaluatif]] alih-alih kepatuhan, dan itu juga satu-satunya pertahanan terhadap pelatih yang salah dengan yakin.

**Pertahankan suara.** Bedakan kesalahan, masalah kejelasan, pilihan retoris dan preferensi gaya, dan biarkan dua yang terakhir. Pelatih yang "membetulkan" pilihan retoris menyeragamkan tulisan ke arah gaya apa pun yang disukai model, dan kerusakan terbesarnya menimpa penulis [[multilingual-learning|multibahasa]] serta tradisi retoris nonstandar ([[ai-feedback-quality|kualitas umpan balik AI]] adalah versi umum dari masalah ini).

**Belajar dari revisinya.** Simpan riwayat revisi, bukan hanya esai akhir. Pola "bukti dimasukkan tetapi tidak ditafsirkan" yang berulang dan membaik lintas tiga esai adalah sinyal paling berguna yang dapat dimiliki sistem menulis, dan itu gratis.

**Evaluasi.** Kualitas tulisan berbantuan AI dan tulisan tanpa bantuan sesudahnya, kemampuan menemukan kelemahan pada tulisan yang tidak dikenal, kualitas revisi, penerimaan umpan balik, kemampuan menjelaskan revisi, kepemilikan, ketergantungan pada prosa AI, pemeliharaan suara, bias lintas dialek dan penulis multibahasa, keselarasan dengan pertimbangan pengajar, dan transfer tertunda. Desain yang menjawabnya punya tiga lengan: menulis secara mandiri, AI menghasilkan teksnya, dan pelatih. Ketiga kelompok lalu menulis esai baru tanpa AI. Jika kelompok yang dihasilkan AI menang dalam praktik dan kalah tanpanya, sistem itu meningkatkan kinerja alih-alih pembelajaran. Pola tingkat kelas dari dasbor (41% membutuhkan dukungan pada hubungan klaim-bukti) adalah sinyal [[formative-assessment|penilaian formatif]] bagi pengajar.

## Membandingkan kedua bangunan

| Pertanyaan desain | Tutor kalkulus | Pelatih menulis |
|---|---|---|
| Objek pembelajaran utama | Konsep matematika dan pemecahan masalah | Argumentasi dan proses menulis |
| Verifikasi | Sering dapat diperiksa secara objektif | Biasanya menuntut pertimbangan kontekstual |
| Alat deterministik | Mesin matematika simbolik, kalkulator | Pemeriksaan tata bahasa, sitasi, rubrik |
| Peran utama AI | Mendiagnosis dan merancah penalaran | Mendiagnosis dan merancah revisi |
| Risiko utama | Membocorkan solusinya | Menuliskan teksnya untuk pembelajar |
| Tindakan pembelajar yang penting | Menyelesaikan dan menjelaskan | Menyusun draf, mengevaluasi, dan merevisi |
| Model pembelajar | Konsep, prosedur, miskonsepsi | Argumen, bukti, organisasi, revisi |
| Pagar pengaman kunci | Percobaan sebelum solusi | Prosa mahasiswa sebelum penulisan ulang AI |
| Uji transfer | Soal kalkulus baru tanpa AI | Tugas menulis baru tanpa AI |
| Kriteria keberhasilan | Penalaran matematis mandiri | Tulisan mandiri dan pertimbangan evaluatif |

Kedua sistem memakai himpunan [[ai-technologies|teknologi AI]] yang sama dan mewujudkan kebijakan pedagogis yang berbeda, karena disiplinnya menuntut jenis pemikiran yang berbeda. Aturan yang dapat digeneralisasi adalah mengenali aktivitas kognitif yang menghasilkan pembelajaran dan merancang AI untuk mendukung aktivitas itu tanpa melakukannya. Aturan itu mengalahkan model, prompt, kerangka agen atau antarmuka tertentu mana pun.

## Apa yang salah dipahami tim pengembang

Pedagoginya hidup di prompt sistem, jadi prompt yang cermat adalah desain pedagogis. Prompt adalah satu lapisan kebijakan yang juga mencakup bukti mana yang Anda kumpulkan, anak tangga mana yang ditawarkan antarmuka, apa yang diperiksa verifikator, dan apa yang ditampilkan dasbor. Prompt yang tertulis baik di atas model pembelajar yang tidak menyimpan apa pun akan menghasilkan tutor yang lancar tanpa memori tentang mahasiswa, dan tangganya akan mulai ulang setiap sesi.

Model yang lebih baik akan memperbaiki diagnosisnya. Hasil tolok ukur di atas menemukan tutor LLM mengenali penalaran yang benar namun menolak alternatif yang valid dan menerima yang salah, yang merupakan pola kesalahan yang tidak jelas diperbaiki oleh skala. Diagnosis terstruktur ada karena pertimbangan model adalah bagian yang tidak dapat Anda audit.

Kepuasan dan penyelesaian membuktikan desainnya bekerja. Keduanya membuktikan mahasiswa mendapat bantuan. Uji coba dengan 38 mahasiswa pemrograman menemukan pembelajaran yang dirasakan berasosiasi kuat dengan penggunaan sementara kemajuan otonom mendapat skor terendah, dan studi penguasaan menemukan persyaratan rentetan menaikkan penguasaan platform tanpa keuntungan pada tes tertunda. Bangun ukuran penarikan ke dalam uji coba atau Anda akan mempelajari pelajaran yang salah dengan efisien.

Pengambilan membuat jawabannya dapat dipercaya. Ia mengurangi [[hallucination-risk|risiko halusinasi]] dan membiarkan sisa permukaan kegagalan utuh: sebuah bagian yang diambil dapat salah dibaca, sebuah teknik yang valid bisa keliru untuk mata kuliah itu, dan model tetap bisa salah dengan yakin tentang langkah yang ia turunkan sendiri. Pengambilan adalah lantai.

Lulus rangkaian uji keamanan berarti alat itu aman bagi mahasiswa. Pengujian keamanan biasa mencakup toksisitas dan jailbreak. Kegagalan pedagogis yang penting di sini, kebocoran jawaban dan sikofansi dan penyimpangan, tidak terlihat olehnya, dan kegagalan itu menumpuk sepanjang percakapan alih-alih muncul pada satu giliran.

Keterlibatan adalah tujuannya. Panjang percakapan dan jumlah sesi adalah metrik termurah untuk diinstrumentasikan, itulah sebabnya keduanya dipromosikan menjadi tujuan. Argumen [[scaffolding|perancah]] menyatakan sesi ideal menjadi lebih pendek seiring membaiknya mahasiswa, jadi kenaikan keterlibatan sama mungkinnya merupakan gejala masalah.

## Apa yang akan kembali kepada Anda

**"Kami rilis dalam enam minggu dan ini pekerjaan seperempat tahun."** Sebagian besar arsitekturnya murah. Gerbang percobaan, tangga yang dikonfigurasi, pengambilan atas catatan yang sudah Anda miliki, dan skema catatan dengan bidang penarikan adalah pekerjaan beberapa hari. Item mahal (model pembelajar, verifikator, dasbor) dapat dimulai di balik bendera fitur untuk satu mata kuliah, dan uji coba lebih informatif dengan bagian murahnya sudah selesai.

**"Mahasiswa menyukainya dan penyelesaian naik."** Kedua fakta konsisten dengan sistem yang menjawab pertanyaan dengan baik dan tidak mengajarkan apa pun. Studi 6.000 siswa menemukan kemajuan lebih lambat dan lebih sedikit soal yang dicoba bersamaan dengan akurasi yang lebih baik, jadi penurunan penyelesaian juga tidak otomatis berita buruk. Laporkan kinerja tanpa bantuan di samping angka keterlibatan dan biarkan keduanya tidak sepakat di depan umum.

**"Kami tidak dapat menjalankan uji acak."** Anda dapat menjalankan perbandingan dalam diri mahasiswa tanpa uji acak: tujuan yang sama, dibantu selama unit, diuji tanpa bantuan dua minggu kemudian, dengan skor berbantuan dilaporkan di sampingnya. Desain itu menjawab pertanyaan produk dan tidak membutuhkan lengan kontrol. Yang tidak dapat diberitahukannya adalah kontrafaktual bagi mahasiswa yang tidak pernah memakai tutor.

**"Modelnya API vendor, jadi perilaku bantuannya di luar kendali kami."** Anak tangganya hidup di lapisan orkestrasi Anda, dan hasil eksperimen pagar pengaman berasal dari mengubah apa yang boleh dikatakan tutor, bukan dari menukar model. Perkirakan pelatihan lanjutan vendor akan menarik ke arah menjawab dengan sigap, karena kegunaan adalah hal yang dilatihkan, dan taruh pengekangan itu di kode Anda sendiri.

**"Pengajar tidak akan memakai dasbor lain."** Mereka tidak akan memakai dasbor yang memancarkan diagnostik terus-menerus, yang menurut tinjauan K-12 menarik perhatian dari pengamatan mereka sendiri. Beri mereka sedikit sinyal yang dapat ditafsirkan, cara menerima atau menolak setiap rekomendasi, dan waktu dalam sepekan untuk melihatnya.

**"Kami tidak punya ahli disiplin di staf."** Maka tutor akan mengajarkan metode generik dan notasi mata kuliah akan menyimpang dalam satu semester. Seorang ahli bidang selama dua hari pada waktu desain, yang menulis daftar miskonsepsi dan daftar metode yang disetujui, adalah item termurah dalam proyek ini dan yang pertama dipotong tim.

## Yang perlu dilakukan pekan ini

**1.** Tulis kalimat kinerja tanpa bantuan untuk uji coba dan taruh di spesifikasi, di atas daftar fitur.

**2.** Tambahkan gerbang percobaan dan catat. Rekam apakah mahasiswa mencoba sebelum petunjuk pertama, dan anak tangga mana yang mereka capai.

**3.** Ganti tombol petunjuk dengan pertanyaan titik penghambat, dan catat jawabannya sebagai kategori.

**4.** Jadwalkan satu pemeriksaan tanpa bantuan dua minggu setelah unit dan taruh di kalender beserta penanggung jawabnya.

**5.** Pesan dua hari dengan seorang guru bidang untuk menulis daftar miskonsepsi dan daftar metode yang disetujui.

## Ke mana selanjutnya

[[designing-educational-ai-software]] membahas aturan tingkat perangkat lunak yang harus dipenuhi sebuah tutor, dan [[designing-ai-into-learning]] membahas di mana tutor berada dalam urutan mata kuliah. [[evaluating-ai-interventions-methods]] dan [[checking-whether-educational-ai-works]] menangani apakah alat itu bekerja. Jika masalah Anda adalah model menjawab terlalu sigap, [[making-ai-better-at-supporting-learning]] dan [[training-ai-tutors-to-guide-rather-than-answer]] mengupas sisi pelatihan dari pertanyaan yang sama.
