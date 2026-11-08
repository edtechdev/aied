---
title: "Evaluasi AI dalam Pendidikan"
created: "2026-05-29T10:44:35-04:00"
type: concept
foundations: [agentic-ai, teacher-role]
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment, assessment-validity, educational-measurement, formative-assessment]
audience: [researchers, instructors, administrators]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods, reporting-interpreting-aied-research]
confidence: high
methods: [benchmark]
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/ai-ed-evaluation"
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

> **Evaluasi AI-ed** — kumpulan metode, tolok ukur, dan kriteria yang dipakai untuk menilai apakah alat [[ai-education|pendidikan AI]] (tutor berbasis [[llm]], [[automated-assessment|penilai otomatis]], sistem umpan balik, agen) benar-benar bekerja — bukan hanya pada akurasi di judul, tetapi pada keandalan, kualitas [[pedagogy|pedagogis]], validitas, dan dampak pembelajaran yang nyata. Tema yang berulang di seluruh riset dalam basis pengetahuan ini adalah bahwa evaluasi harus spesifik domain, sadar keandalan, dan berjangkar pada pertimbangan manusia serta luaran pendidikan, bukan pada satu angka akurasi agregat.

## Pertanyaan untuk Dipertimbangkan

- Bagaimana Anda memutuskan apakah sebuah alat tutor AI 'berhasil'? Bukti apa — di luar angka akurasi di judul — yang akan meyakinkan Anda bahwa alat itu benar-benar meningkatkan pembelajaran?
- Temuan kuncinya adalah bahwa keandalan tidak menjamin validitas: sebuah sistem dapat sangat konsisten tetapi salah menilai seperti apa pengajaran yang baik. Mengapa AI yang stabil dan dapat diulang masih bisa keliru?
- Evaluasi harus spesifik domain — tolok ukur yang berfungsi untuk satu mata pelajaran bisa menyesatkan untuk mata pelajaran lain. Ketika Anda melihat hasil tolok ukur yang cemerlang untuk sebuah alat AI, apa yang ingin Anda periksa tentang konteksnya?
- 'Kebenaran dasar' yang menjadi pembanding sistem sering diperdebatkan — apa yang dianggap jawaban atau nilai yang benar berbeda antar pakar dan disiplin. Bagaimana ketidakpastian itu mempersulit kepercayaan pada evaluasi apa pun?
- Riset menunjukkan evaluator LLM berbasis teks mengistimewakan perilaku yang dinyatakan eksplisit dan mengurangi bobot konteks implisit — sebuah 'bias isyarat eksplisit.' Jenis pengajaran baik apa yang mungkin secara sistematis terlewat oleh mesin karena ia hanya mencari yang tampak jelas?
- Evaluasi modern juga menimbang biaya lingkungan dan infrastruktur — energi, perangkat keras — bukan hanya kualitas keluaran. Haruskah [[sustainability]] diperhitungkan dalam cara Anda menilai nilai sebuah alat AI?

## Pendahuluan

Evaluasi AI-ed mencakup beberapa objek penilaian yang berbeda. Ia dapat mengevaluasi **keluaran** (apakah jawaban, nilai, atau umpan balik AI benar dan andal?), **proses** (apakah alat itu mendukung penilaian dan pembelajaran yang valid dan dapat dipertahankan?), dan **agen** (apakah tutor atau agen AI mengajar secara efektif dan berperilaku semestinya?). Masing-masing menuntut metode berbeda dan memunculkan pertanyaan validitas yang berbeda.

Rentang satu dekade bidang ini sendiri merupakan sebuah kerangka: [[xiong-ai-educational-measurement-review-2026|Xiong dan Li (2026)]] menelusuri tiga era — Formatif (2015–2018), Ekspansi (2019–2022), dan Generatif (2023–sekarang) — di 313 artikel, dan berargumen bahwa konstruk serta argumen validitas harus ditulis ulang untuk [[human-ai-collaboration|kolaborasi manusia–AI]], sebab model [[item-response-theory|IRT]] dan Teori Tes Klasik dibangun di atas kinerja manusia tanpa bantuan.

### Bagaimana evaluasi AI-ed muncul dalam riset

- **Keandalan keluaran dan kebenaran dasar:** [[ground-truth-reliability-aied|Memodernkan kebenaran dasar]] berargumen bahwa masalah keandalan dalam evaluasi AI-ed sering berakar pada data rujukan itu sendiri — label "kebenaran dasar" yang menjadi pembanding sistem — dan mengusulkan empat pergeseran untuk memperbaiki keandalan dan validitas. [[calibrating-trustworthiness-llm-education-2026|Mengkalibrasi keterpercayaan]] merancang metrik dan [[visualization|visualisasi]] evaluasi bersama pemangku kepentingan agar kepercayaan pada alat AI bersandar pada bukti yang terbukti dan dapat ditafsirkan.

- **Penilaian dan penskoran otomatis:** [[cong-confidence-asag-2026|Penilaian jawaban singkat berbasis LLM]], [[cong-confidence-asag-2026|ASAG yang sadar keyakinan]], [[cotal-formative-assessment-scoring-2026|rekayasa prompt human-in-the-loop CoTAL]], dan [[llm-cognitive-diagnosis-handwritten-math|diagnosis kognitif matematika tulisan tangan]] menunjukkan bahwa LLM dapat menilai dan mendiagnosis, tetapi keandalannya bergantung pada [[human-in-the-loop-ai|pengawasan manusia]], landasan yang spesifik domain, dan kalibrasi keyakinan, bukan pada ukuran model mentah.
- **Tolok ukur untuk pengetahuan pedagogis, bukan konten.** [[cdpk-pedagogy-benchmark-llms|Lelièvre et al. (2025)]] memberi skor 97 model pada butir ujian guru Chile (CDPK 28–89%), banyak yang melampaui perkiraan garis dasar manusia ~50%, namun butir pilihan ganda statis tidak dapat menguji perencanaan pembelajaran atau scaffolding dari giliran ke giliran.
- **Mengenali bukan menghasilkan.** Pada TutorCaseBench, model terbaik dari 11 model memilih strategi terdokumentasi pada 63.0% butir empat opsi tetapi memenuhi intervensi terdokumentasi hanya pada 55.8% kasus respons bebas, sehingga skor pemilihan strategi melebih-lebihkan kesiapan tutor ([[tutor-case-bench-challenging-behaviors-2026|Park et al. (2026)]]).

- **Memvalidasi butir yang dihasilkan terhadap tolok ukur psikometrik.** [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]] menghasilkan ujian yang disesuaikan dengan mata kuliah untuk 71 kelas dan membandingkan 20 lainnya dengan butir AP Statistics karya manusia, mencocokkan model [[item-response-theory|IRT]] 2PL hierarkis Bayes dengan jangkar pra-tes pada 1,686 siswa; butir AI lebih mudah tetapi lebih diskriminatif (ᾱ = 1.3 vs. 1.2).

- **Kualitas dan keselarasan pedagogis:** [[machines-misread-pedagogical-quality|Mengapa mesin salah membaca kualitas pedagogis]] mendokumentasikan ketidakselarasan manusia–mesin dalam menilai apa yang membuat pengajaran baik, dan [[tutoring-effectiveness-index|Indeks Efektivitas Tutoring]] memprediksi kualitas tutor dari perilaku mengajar. [[responsible-assessment-ai-era-stanford-2026|Penilaian yang bertanggung jawab di era AI]] dan [[authentic-products-authenticated-processes-2026|proses yang terautentikasi]] berargumen bahwa evaluasi harus menjangkau melampaui jawaban benar ke pertanyaan apakah penilaian tetap autentik, valid, dan dapat dipertahankan ketika AI dapat menghasilkan "produk" pembelajaran.
- **Pemantauan produksi dan kalibrasi juri:** [[llm-judge-evaluation-educational-ai-2026|Rohlfs et al. (2026)]] melaporkan apa yang terjadi ketika evaluasi LLM-sebagai-juri berjalan pada skala produk, dengan bersandar pada rangkaian [[k-12|K-12]] yang melayani jutaan pesan guru dan siswa setiap bulan. Ketika program itu matang, positif palsu mendominasi bendera para evaluator dan mengalihkan perhatian analis dari kegagalan yang menuntut perubahan produk. Tiga perubahan — panel yang gagal secara bulat dari putaran juri yang diulang, pilihan model juri per-evaluator, dan rubrik yang dilunakkan — memangkas positif palsu terkonfirmasi sebesar 99% dan menaikkan presisi per-bendera dari 0.6% ke 49% di 21 evaluator yang diterapkan, sementara himpunan kegagalan berat menjaga cakupan tetap 100%. Pelajaran bagi praktik evaluasi adalah bahwa titik operasi sebuah evaluator, bukan akurasi di judulnya, yang menentukan apakah sebuah bendera dapat ditindaklanjuti.
- **Keberagaman juri sebagai protokol validitas.** Sebuah tolok ukur untuk agen desain instruksional menarik jurinya dari penyedia model yang berbeda alih-alih satu penyedia, dan melaporkan keandalan antar-juri yang tinggi di 1,017 skenario yang dinilai ([[jeon-isd-agent-bench-2026|Jeon et al. (2026)]]).

- **Audit sebuah penjelasan terhadap atribusi yang diklaimnya, bukan terhadap kelancarannya.** [[distilling-self-explaining-lm-learning-analytics-2026|Pan et al. (2026)]] menyaring narasi model berdasarkan ketertutupan aritmetika, kovariat yang dikutip, kesetiaan keputusan, dan laju perlakuan tidak aman, karena teks yang lancar sama rapi bentuknya apakah sinyalnya tepat atau bising — 98.8% narasi lolos sementara ekor negatifnya terpotong.
- **Sensitivitas prompt adalah sifat orde pertama sebuah penilai LLM.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]] menilai ujian [[cs-education|visi komputer]] pada 570 siswa di 171 konfigurasi dan ujian [[machine-learning|pembelajaran mesin]] pada 1,038 siswa di 162 konfigurasi: prakata singkat "penilai ketat" mendorong 14 dari 17 model open-weights keluar dari pita nilai, sementara replikasinya mereproduksi kerentanan itu tetapi tidak arahnya, dan justru memperbaiki tujuh model yang prompt netralnya menilai berlebih. Akurasi satu prompt bukan bukti penilai yang dapat dipakai, dan bias bertanda seharusnya berdampingan dengan angka mean-absolute-error; penyetelan halus LoRA pada contoh berpasangan yang dinilai ganda membawa lima model kecil ke paritas manusia dan hampir menghapus sensitivitas persona.

- **Bukti yang dapat dinilai adalah variabel desain, bukan sifat tugas.** [[durable-skills-measurement-ai-teammates-2026|Globerson et al. (2026)]] membiarkan sebuah Executive LLM memegang rubrik dan mengarahkan percakapan menuju keterampilan yang dinilai, menaikkan bukti yang dapat dinilai menjadi 92.4% untuk manajemen proyek dan 85% untuk resolusi konflik, sementara meminta peserta memperhatikan keterampilan itu tidak mengubah apa pun.

### Mengapa evaluasi sulit dalam AI-ed

Evaluasi AI-ed sulit karena beberapa alasan. Pertama, **keandalan tidak cukup** — sebuah sistem dapat setuju dengan rubrik namun salah menilai pedagogi, seperti ditunjukkan [[machines-misread-pedagogical-quality|riset keselarasan manusia–mesin]]. Kedua, **kebenaran dasar diperdebatkan** — apa yang dihitung sebagai jawaban "benar", nilai, atau langkah mengajar itu sendiri adalah pertimbangan yang berbeda antar disiplin dan pakar, menurut [[ground-truth-reliability-aied|modernisasi kebenaran dasar]]. Ketiga, **validitas pendidikan bersifat multidimensi** — [[assessment-validity]], [[formative-assessment]], dan [[authentic-assessment]] masing-masing menerapkan kriteria berbeda yang tidak dapat ditangkap oleh satu metrik akurasi. Terakhir, **sasarannya terus bergerak** — AI agentic dan model [[multimodal]] menuntut kerangka evaluasi ([[agentic-ai]], [[tool-invariant-framework-agentic-ai|penilaian yang invarian terhadap alat]]) alih-alih penggunaan ulang tolok ukur model teks. Temuan evaluasi juga tunduk pada keterbatasan lintas-bidang yang memengaruhi semua riset AIED — temuan itu menua seiring AI membaik, bergantung pada reproduksibilitas dan praktik FAIR, dan mungkin bersandar pada sistem berpemilik — sehingga hasil evaluasi harus dibaca dengan kaveat dalam [[limitations-in-aied-research]]. Satu dimensi lain yang sedang muncul adalah **keberlanjutan sumber daya**: penerapan on-premise makin banyak melaporkan konsumsi energi dan kebutuhan perangkat keras (mis., VRAM, mWh per kueri) berdampingan dengan akurasi — lihat [[shen-sustainable-ai-knowledge-base-cs-education-2026|asisten basis pengetahuan on-premise yang berkelanjutan]] — sehingga evaluasi yang lengkap menimbang biaya lingkungan dan infrastruktur, bukan hanya kualitas keluaran.

**Keandalan tidak menjamin validitas.** [[melo-llm-classroom-observation-teach-2026|Validasi observasi kelas berbasis LLM]] menunjukkan bahwa sebuah model dapat sangat stabil di seluruh evaluasi berulang namun tetap tidak selaras dengan pertimbangan pakar, dan sebaliknya bahwa model yang selaras baik dengan pakar sering lebih bervariasi — keandalan dan akurasi terlepas satu sama lain, sehingga satu angka akurasi sekali-jalan dapat melebih-lebihkan keterandalan. Studi yang sama mendokumentasikan **bias isyarat eksplisit**: evaluator LLM berbasis teks mengistimewakan perilaku yang dinyatakan eksplisit dan mengurangi bobot bukti implisit atau kontekstual (mis., [[self-regulated-learning|regulasi diri]] siswa yang berkelanjutan ketika rubrik mengizinkan nilai tinggi pada kriteria yang toleran terhadap ketiadaan), sehingga menghasilkan ketidaksepakatan yang sistematis, bukan acak. Ini menegaskan bahwa keandalan pengukuran adalah prasyarat bagi — bukan proksi bagi — interpretasi yang valid, dan bahwa evaluasi harus mencakup pemeriksaan stabilitas ukuran berulang berdampingan dengan akurasi yang berjangkar pada pakar.

Bahkan model wacana jangka panjang yang tervalidasi hanya melacak ukuran luaran independen secara lemah: skor Student Reasoning dan Teacher Uptake NSPA berkorelasi dengan model value-added efektivitas guru pada ρ = 0.10, sehingga konstruk otomatis memerlukan validasi luaran eksternal sebelum menginformasikan evaluasi ([[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang dan Liu, 2026]]).

Evaluasi [[simulating-students|pembelajar simulasi]] menghadapi standar yang sama: sebuah [[simulation|simulator]] valid hanya jika perilakunya setia secara *epistemik* dan bukan sekadar lancar, sehingga ia harus dinilai terhadap tujuan perilaku dan lingkungan yang dinyatakannya, bukan terhadap kemanusiaan generik — dan juri otomatis cocok dengan preferensi pakar manusia sekitar 65% dari waktu ([[valid-student-simulation-llm-2026|Yuan et al. (2026)]]).

**Akurasi agregat menyembunyikan siapa yang kurang terlayani.** [[drawedumath-vlm-struggling-students-2026|Evaluasi model bahasa-visi pada DrawEduMath]] menunjukkan bahwa akurasi keseluruhan menutupi kelemahan sistematis: model tampil lebih buruk justru pada pekerjaan siswa yang paling membutuhkan bantuan pedagogis (pekerjaan siswa yang keliru dan sedang berjuang), sehingga pemecahan evaluasi menurut kemahiran siswa dan status kesalahan menjadi perlu agar kapabilitas tidak dilebih-lebihkan dan kesenjangan capaian tidak melebar.

**Kebenaran biner menyembunyikan kegagalan yang penting.** Pada tolok ukur diagnosis langkah tiga arah atas 10,836 pasangan simulasi, tujuh tutor LLM mengklasifikasikan langkah optimal hampir sempurna (F1 94–99%) tetapi alternatif yang valid hanya pada F1 0–76% dan langkah keliru pada 4–55% — penolakan berlebih dan validasi berlebih — dan diagnosis yang akurat tetap tidak menghasilkan umpan balik yang dapat ditindaklanjuti ([[yasir-llm-tutoring-agents-2026|Yasir et al. (2026)]]).

- **Kontrol perturbasi menunjukkan bukti mana yang sebenarnya dipakai model.** Dalam VIRA-Bench, model terbaik dari 11 model menjawab 61.3% pertanyaan video tutoring terhadap rujukan pakar 91.0%, dan menghapus video versus mengacak urutannya menurunkan lapisan pertanyaan yang berbeda — diagnostik yang lebih murah daripada skor agregat lain ([[vira-bench-pedagogical-contingency-tutoring-videos-2026|Wang et al. (2026)]]).

- **Menggunakan ulang instrumen manusia untuk mengevaluasi LLM menuntut pemeriksaan struktur laten.** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]] mencocokkan analisis faktor eksploratori secara terpisah untuk manusia dan enam LLM multimodal: kongruensi LLM–manusia tetap di bawah garis dasar manusia–manusia pada kedua instrumen, dan analisis paralel mempertahankan jumlah faktor yang berbeda (lima untuk manusia versus empat untuk LLM).

- **Evaluasi bersama memunculkan trade-off yang disembunyikan satu skor.** [[elbench-education-llm-benchmark-2026|Jiang et al. (2026)]] memberi skor sembilan model berorientasi pendidikan pada kapabilitas, keselamatan, pendidikan dasar, dan pemupukan tingkat tinggi di bawah satu protokol: enam teratas secara statistik tidak dapat dibedakan secara keseluruhan namun berbeda 19.5 poin pada Keselamatan, dan Keselamatan berkorelasi negatif kuat dengan Pendidikan Dasar (r = −0.83).
- **Kemiringan kelas dapat membuat metrik evaluasi menyesatkan.** [[reflection-level-classification-hungarian-essays-2026|Csibi dan rekan (2026)]] mengklasifikasikan tingkat refleksi dalam 1,954 esai [[teacher-education|pendidikan guru]] Hungaria yang 68% berada pada satu tingkat: satu konfigurasi dangkal mencapai ROC-AUC 0.7131 dengan akurasi hanya 0.5162, dan penyeimbangan kelas menurunkan setiap metrik (akurasi 0.6672 tanpa penyeimbangan berbanding 0.6408 dengannya). Model dangkal memberi skor agregat terbaik sementara transformer menangani tingkat minoritas lebih baik, sehingga angka yang dilaporkan harus mengikuti kinerja yang benar-benar menjadi sandaran suatu keputusan.
- **Kesalahan tolok ukur dan penilai disalahartikan sebagai kegagalan model.** Penilaian ulang oleh pakar atas enam tolok ukur [[physics-education|fisika]] yang banyak dipakai mengaudit 250 butir yang ditolak dan mengaitkan 143 (57.20%) dengan cacat tolok ukur dan 95 (38.00%) dengan kesalahan penilai, menyisakan hanya 12 (4.80%) kesalahan model yang sejati, sehingga 95.20% dari selisih yang terukur tidak dapat dikaitkan dengan model. Perbaikan butir menggeser mean@4 HLE-Physics dari 47.28% ke 78.66% dan mean@5 CritPt dari 32.29% ke 87.50% yang terkoreksi, mengubah kelemahan model frontier yang tampak menjadi nyaris saturasi. Audit itu berargumen bahwa skor yang dilaporkan adalah sifat bersama dari model, bank butir, dan penilai, dan bahwa adjudikasi pakar harus mendahului klaim kapabilitas apa pun yang ditarik dari tolok ukur. ([[frontier-models-physics-benchmark-audit-2026]])

Kecepatan sistem yang dievaluasi merupakan kendala lebih lanjut. [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]] menyatakan masalah temporal itu secara langsung: pada saat sebuah uji skala besar telah dirancang, dijalankan, dianalisis, dan diterbitkan, teknologi yang diteliti mungkin sudah berubah secara material, yang mendorong praktik ke data observasional atau data penggunaan yang lemah justru pada saat bukti yang lebih kuat dibutuhkan. Jawaban mereka bukan menerima desain yang lebih lemah tetapi memperpendek lingkarannya — uji acak mikro yang dipimpin praktisi yang mempertahankan kontras kausal dan mengulanginya seiring platform berkembang.


- **Kesetiaan data adalah masalah evaluasi yang terpisah dari kualitas keluaran.** Kohort pendidikan sintetis yang mereproduksi statistik ringkasan setiap variabel tetap dapat salah menyatakan struktur data: graf kedekatan mingguan atas pembelajar bervariasi 2.6 hingga 4.9 kali lebih sedikit sepanjang satu semester pada versi sintetis daripada pada kohort nyata, sehingga skor kesetiaan tidak memprediksi analisis mana yang bertahan pada data nyata ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake, 2026]]).

- **Akurasi dalam-distribusi bukan kelayakan penerapan.** Pengklasifikasi tingkat Bloom dengan makro F1 0.88 pada bank butir yang dikurasi turun ke 0.48 dan 0.20 pada dua himpunan pertanyaan hasil AI, penurunan yang mengikuti nyaris tidak adanya kata kerja pemicu Bloom eksplisit alih-alih ukuran model; [[llm|LLM]] yang tidak dilatih adalah opsi paling tangguh di luar distribusi (0.79 dan 0.41–0.51) dan pelatihan ulang pada data luar-distribusi berlabel memulihkan keuntungan terbesar (hingga 0.82), sehingga transfer harus masuk laporan berdampingan dengan kecocokan dalam-distribusi ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

- **Skala kesulitan AI adalah bantuan evaluasi, bukan nilai.** Perkiraan kesulitan AI melacak laju lolos tingkat soal secara kuat (rho = −0.871 di 79 soal) tetapi melemah ke −0.552 pada sampel CS101 106 soal dan mendekati nol pada tingkat ujian, sehingga skala semacam itu masuk ke tinjauan butir, bukan ke evaluasi siswa ([[llm-difficulty-calibration-programming-exams-2026|Yan et al. (2026)]]).

### Koneksi ke konsep terkait

Evaluasi AI-ed berada di pusat metode dan risiko basis pengetahuan ini. Ia mengoperasionalkan [[assessment-validity]], [[educational-measurement]], dan [[benchmark]] di dalam [[assessment]] dan [[automated-assessment]]. Seruannya akan pengawasan manusia terhubung ke [[human-in-the-loop-ai]] dan [[teacher-role]], sementara fokusnya pada keandalan terhubung ke [[hallucination-risk]], [[automated-assessment|Penilaian AI yang Sadar Keyakinan]], dan [[trust-calibration]]. Pembeda antara mengevaluasi kinerja dan mengevaluasi pembelajaran terhubung ke [[genai-performance-vs-learning|kinerja vs. pembelajaran]] dan ke [[student-modeling]]; dan evaluasi agen pedagogis terhubung ke [[intelligent-tutoring]], [[llm-training-and-fine-tuning]], dan [[pedagogical-safety]].

### Mengevaluasi perolehan belajar

Objek sentral evaluasi AI-ed adalah **perolehan belajar** — peningkatan pengetahuan atau keterampilan yang terukur yang dihasilkan sebuah alat AI (lihat [[learning-gains]]). Mengevaluasi perolehan secara ketat menuntut pemilihan ukuran luaran yang tepat, karena [[genai-performance-vs-learning|kinerja dan pembelajaran menyimpang]]: AI dapat menggelembungkan kinerja tugas yang segera dan dibantu AI sementara pembelajaran yang tahan lama dan tanpa bantuan tetap tidak berubah atau menurun (lihat [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]). Evaluasi perolehan yang efektif karena itu:

- **Menggunakan ukuran luaran tanpa bantuan yang tahan AI.** [[generative-ai-guardrails-harm-learning|Bukti pagar pengaman]] dan [[summative-assessment|riset penilaian sumatif]] menunjukkan bahwa ukuran yang diawasi, buku tertutup, dan tanpa bantuan — bukan pekerjaan rumah atau tugas yang dibantu AI — mengungkap [[learning-gains|perolehan belajar]] yang sejati.
- **Membedakan kinerja terbantu dari pembelajaran yang tahan lama.** [[genai-meta-analysis-programming-learning|Meta-analisis]] menunjukkan AI dapat menghasilkan keuntungan produktivitas besar tanpa perolehan belajar yang berarti (g ≈ 0), sehingga evaluasi harus melaporkan keduanya.
- **Generasi teknologi mungkin tidak berpengaruh, dan data biaya tidak ada.** [[burneo-can-edtech-close-learning-gaps-2026|Burneo et al. (2026)]] menggabungkan 14 uji acak menjadi perolehan belajar rata-rata 0.125 sd, dengan [[generative-ai|AI generatif]] tidak menunjukkan keunggulan atas perangkat lunak adaptif sebelumnya (0.022 sd, SE 0.075) dan biaya per siswa yang sebanding dilaporkan hanya pada dua atau tiga studi.
- **Memasangkan ukuran pra/pasca dengan pemeriksaan validitas.** [[assessment-validity]] dan [[educational-measurement]] menjadi landasan pengukuran perolehan; [[genai-educational-outcomes-meta-analysis|tinjauan meta-analitik]] menggabungkan ukuran efek antar studi untuk menetapkan bukti perolehan bidang ini.
- **Memecah menurut pembelajar dan konteks.** Karena [[learning-gains]] bervariasi menurut populasi, domain, dan konfigurasi AI, evaluasi harus melaporkan perolehan untuk subkelompok siswa yang berbeda (mis., menurut kemahiran awal, seperti yang diungkap [[drawedumath-vlm-struggling-students-2026|evaluasi VLM]] untuk status kesalahan) alih-alih satu agregat, dan harus menghubungkan temuan perolehan ke [[meta-analysis-systematic-review]] untuk menempatkannya dalam basis bukti yang lebih luas.

Tolok ukur yang terkondisi konteks diperlukan: [[zhang-tutormoments-2026|Zhang et al. (2026)]] berargumen bahwa tolok ukur tutoring sebelumnya (MathTutorBench, MRBench, LearnLM) memberi ganjaran pada satu sisi dilema bantuan atau memberi panduan yang kurang spesifik. TutorMoments sebaliknya memutar ulang titik keputusan pedagogis yang diidentifikasi guru, mengevaluasi apakah bantuan tutor sesuai dengan momen belajar tertentu — [[scaffolding]] versus ketelitian.
- **Metrik yang Anda pilih dapat membalik kesimpulan Anda.** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang et al. (2026)]], yang mengevaluasi agen pengajaran AI dalam [[medical-education|pendidikan kedokteran]], menemukan bahwa skor agregat tak-terbuka sebuah [[edtech-platform|platform pendidikan]] memeringkat agen nyaris berlawanan dengan rubrik kualitas pengajaran 8 dimensi yang transparan dan tervalidasi pakar (akurasi pengetahuan medis, panduan pedagogis, cakupan pengetahuan, kualitas role-play, kesulitan adaptif, keselamatan medis, keterlibatan, umpan balik). Skor platform mengindeks kinerja siswa; rubrik mengindeks perilaku mengajar agen -- memilih metrik yang salah menentukan agen mana yang diadopsi atau diperbaiki. Mereka juga menemukan kelonggaran LLM-sebagai-evaluator berbeda antar model (sebagian terlalu longgar untuk membedakan), sehingga penskoran otomatis memerlukan kalibrasi manusia dan paling dapat dipercaya pada dimensi proses kognitif.
- **Laju kesalahan dapat menyembunyikan kegagalan yang seharusnya ditangkapnya.** [[ai-mediated-input-medical-english-asr-2026|Stanchev (2026)]] mengirim satu rekaman teks-ke-ucapan dari bacaan bahasa Inggris medis ke empat layanan [[speech-and-voice-technologies|ASR]]: dua layanan gratis mengembalikan 87.96% dan 88.34% dari rujukan, sementara dua layanan berbayar mengembalikan pratinjau 32.76% dan 55.35% sehingga mencatat laju kesalahan kata 73.21% dan 48.77%. Laju kesalahan yang tinggi berasal dari token yang tidak pernah dikembalikan, bukan token yang salah dengar, sehingga pemeringkatan berdasarkan laju kesalahan saja memperlakukan pembatasan ekspor sebagai kegagalan transkripsi. Cakupan harus berdampingan dengan laju kesalahan setiap kali metrik otomatis menggantikan artefak yang dilihat pembelajar.
- **Jangkarkan rangkaian evaluasi pada pembelajaran yang terukur, bukan proksi.** Tolok ukur kemampuan mengajar, rubrik pedagogi percakapan, dan latensi tutor harus divalidasi terhadap perolehan belajar yang sebenarnya alih-alih diperlakukan sebagai penggantinya, dan latensi itu sendiri adalah sumbu evaluasi karena ia membentuk apakah siswa terlibat sama sekali ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).
- **Peta bibliometrik dapat menyingkap apa yang dihargai sebuah budaya evaluasi.** Di 1,403 publikasi pendidikan kedokteran, karya yang paling banyak dikutip mengukur kapabilitas model — terutama kinerja ChatGPT pada ujian lisensi — sementara keilmuan [[governance]] tertinggal, sehingga para penulis menyerukan evaluasi empiris atas kerangka tata kelola alih-alih lebih banyak uji kapabilitas ([[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram et al. (2026)]]).
- **Evaluasi berdasarkan pertimbangan pakar memerlukan akuntansi keandalannya sendiri.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]] meminta 25 pakar yang sesuai domain menilai 92 [[video-education|video kuliah]] yang dihasilkan terhadap rubrik yang berjangkar pada "kualitas kuliah [[online-teaching-and-learning|MOOC]] standar," dan menilai 87% pada atau di atas ambang (rata-rata 3.42 dari 5). Setiap video dinilai sekali oleh satu peninjau (k = 1), sehingga desainnya menyebar panel ke seluruh korpus dengan mengorbankan statistik kesepakatan antar-penilai; model intersep acak mengaitkan sekitar 35% varians residual dengan peninjau (ICC = 0.35) dan makalah melaporkan interval terklaster-peninjau alih-alih satu angka presisi. Evaluasi yang dibangun atas pertimbangan pakar hanya sekuat analisis keandalan yang diterbitkannya.

## Miskonsepsi Umum

- **"Skor tinggi pada ujian guru berarti model kompeten secara pedagogis."** **97 model** diskor pada butir ujian guru Chile (**CDPK 28-89%**), banyak yang melampaui perkiraan **garis dasar manusia ~50%** — namun **butir pilihan ganda statis tidak dapat** menguji pertimbangan yang dijalankan. Skor baik pada ujian dibatasi oleh apa yang diukur ujian itu.
- **"Kriteria penskoran hanyalah persoalan teknis."** Pencocokan ketat memberi skor **42.1%** pada 2,250 dialog tutoring yang sama, sedangkan LLM-sebagai-juri yang dikalibrasi manusia memberi **81.3%** ([[misconcept-dialogue-llm-math-tutoring-2026|Lee et al., 2026]]) — kriteria itu menggeser angka lebih jauh daripada yang dilakukan model tutor, strategi, atau pipeline.
- **"Mengenali dan menghasilkan adalah kapabilitas yang sebanding."** **Mengenali bukan menghasilkan.** Pada TutorCaseBench, model terbaik dari **11 model** memilih strategi terdokumentasi pada **63.0% butir empat opsi** tetapi memenuhi kriteria implementasi terdokumentasi jauh lebih jarang. Memilih jawaban yang benar di antara empat dan menghasilkannya adalah tugas yang berbeda.
- **"Skor model bermakna tanpa instrumen yang tervalidasi."** Ujian yang disesuaikan mata kuliah dihasilkan untuk **71 kelas** dan dibandingkan dengan butir AP Statistics karya manusia dengan model **2PL hierarkis Bayes** — instrumennya dicocokkan sebelum skornya ditafsirkan.

## Konsep terkait

- [[interpreting-and-applying-aied-research]]
- [[ai-assisted-educational-research]] — Riset Pendidikan Berbantuan AI
- [[assessment-validity]] — Validitas interpretasi dalam evaluasi AI-ed
- [[educational-measurement]] — Teori pengukuran untuk menilai pembelajaran
- [[psychometrically-aware-ai]] — Menerapkan psikometrika pada penilaian berbasis AI
- [[benchmark]] — Tolok ukur terstandardisasi untuk mengevaluasi sistem AI
- [[automated-assessment]] — Sistem penilaian dan penskoran berbasis AI
- [[learning-analytics]] — Analisis perilaku belajar berbasis data
- [[research-methods-aied]] — Metode riset untuk AI dalam pendidikan
- [[learning-gains]] — Mengukur perolehan belajar dari alat AI
- [[formative-assessment]] — Penilaian berkelanjutan untuk memandu pengajaran
- [[summative-assessment]] — Penilaian sumatif: format yang tahan AI (ujian lisan, diawasi, buku tertutup)
- [[authentic-assessment]] — Penilaian atas kinerja dunia nyata yang dapat ditransfer
- [[human-in-the-loop-ai]] — Pengawasan manusia atas evaluasi AI
- [[trust-calibration]] — Mengkalibrasi kepercayaan pada sistem AI
- [[hallucination-risk]] — Risiko konten yang direkayasa dalam keluaran AI
- [[intelligent-tutoring]] — Mengevaluasi sistem tutoring AI
- [[agentic-ai]] — Mengevaluasi perilaku agen AI otonom

## Artikel terkait
- [[tutor-case-bench-challenging-behaviors-2026]] — TutorCaseBench: mengevaluasi tutor LLM pada siswa dengan perilaku menantang (Park et al. 2026)
- [[vira-bench-pedagogical-contingency-tutoring-videos-2026]] — VIRA-Bench: Mendiagnosis Pemahaman Kontingensi Pedagogis dalam Video Tutoring Daring
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — Apa yang terlewat oleh skor platform: evaluasi multidimensi agen pengajaran AI
- [[assessment-latent-structure-human-llm-2026]] — Apakah instrumen penilaian mengukur hal yang sama bagi manusia dan LLM? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Menilai kualitas ujian hasil AI: studi lapangan skala besar
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Keselarasan pedagogis neuro-simbolik (NSPA)
- [[yasir-llm-tutoring-agents-2026]] — Tolok ukur klasifikasi tiga arah untuk agen tutoring LLM (Yasir et al. 2026)
- [[drawedumath-vlm-struggling-students-2026]] — Mengevaluasi VLM pada DrawEduMath: konten kesalahan paling sulit (Lucy et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Tolok ukur pengetahuan pedagogis LLM (CDPK + SEND)
- [[melo-llm-classroom-observation-teach-2026]] — Validasi observasi kelas oleh LLM: keandalan versus akurasi (Melo et al. 2026)
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asisten basis pengetahuan AI OER on-premise: evaluasi multidimensi
- [[ground-truth-reliability-aied]] — Memodernkan Kebenaran Dasar: Empat Pergeseran Menuju Keandalan dan Validitas yang Lebih Baik
- [[calibrating-trustworthiness-llm-education-2026]] — Mengkalibrasi Keterpercayaan: Merancang Metrik dan Visualisasi Bersama
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Mengevaluasi Kemampuan Mengajar LLM
- [[machines-misread-pedagogical-quality]] — Mengapa Mesin Salah Membaca Kualitas Pedagogis: Keselarasan Manusia-Mesin
- [[cong-confidence-asag-2026]] — Penilaian Jawaban Singkat Otomatis dengan LLM
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Rekayasa Prompt Human-in-the-Loop untuk Penilaian Formatif
- [[llm-cognitive-diagnosis-handwritten-math]] — Tolok ukur LLM untuk Mendiagnosis Keterampilan Kognitif Siswa
- [[tutoring-effectiveness-index]] — Indeks Efektivitas Tutoring: Memprediksi Kualitas Tutor Matematika LLM
- [[jeon-isd-agent-bench-2026]] — Tolok Ukur Agen ISD
- [[tool-invariant-framework-agentic-ai]] — Kerangka Invarian-Alat untuk Mengajar dan Menilai Metode Komputasional
- [[valid-student-simulation-llm-2026]] — Menuju Simulasi Siswa yang Valid dengan Model Bahasa Besar
- [[llm-difficulty-calibration-programming-exams-2026]] — Dari Model yang Dievaluasi ke Alat Bantu Evaluasi
- [[socratic-tests-conversational-assessment]] — Landasan Teoretis Tes Sokratik
- [[responsible-assessment-ai-era-stanford-2026]] — Penilaian yang Bertanggung Jawab di Era AI
- [[authentic-products-authenticated-processes-2026]] — Dari Produk Autentik ke Proses Terautentikasi
- [[genai-educational-outcomes-meta-analysis]] — Meta-analisis luaran pendidikan AI generatif
- [[zhang-tutormoments-2026]] — Ketika Bantuan Tidak Membantu: mengevaluasi tutor AI untuk perjuangan produktif
- [[elbench-education-llm-benchmark-2026]] — ELBench: tolok ukur LLM pendidikan
- [[ai-grading-handwritten-physics-2026]] — Penilaian AI atas asesmen fisika tulisan tangan (Olimpiade)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Menyuling LM yang menjelaskan diri untuk analitik pembelajaran
- [[burneo-can-edtech-close-learning-gaps-2026]] — Evaluasi meta-analitik atas EdTech adaptif + AI
- [[xiong-ai-educational-measurement-review-2026]] — Peran AI di seluruh penskoran, psikometrika, penilaian
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Mengevaluasi Tutoring AI dengan Kecepatan Inovasi: Uji Acak Mikro yang Dipimpin Praktisi atas Platform Tutoring AI dalam Sains GCSE
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Penilaian Kualitas Butir Matematika Berbasis Proses
- [[durable-skills-measurement-ai-teammates-2026]] — Menuju Pengukuran Keterampilan Tahan Lama yang Skalabel
- [[pivot-generative-video-tutors-stem-2026]] — Dari Generasi Konten ke Dukungan Belajar: Tutor Video Generatif Berpanduan Pedagogi untuk Pembelajaran STEM
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: tutoring AI dan manusia menghasilkan perolehan belajar GRE yang setara
- [[synthetic-educational-data-structural-fidelity-2026]] — Apa yang Terlewat oleh Metrik Kesetiaan: Pemeriksaan Struktural atas Data Pendidikan Sintetis
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluasi model pra-terlatih untuk penilaian pedagogis pertanyaan pendidikan baru yang dibantu AI
- [[llm-judge-evaluation-educational-ai-2026]] — Ketika Evaluator Berteriak Serigala: Pelajaran dari Evaluasi LLM-sebagai-Juri dalam Produksi di Pendidikan AI
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Peta bibliometrik dapat menyingkap apa yang dihargai sebuah budaya evaluasi
- [[misconcept-dialogue-llm-math-tutoring-2026]] — MisconceptDialogue: Kriteria Evaluasi Membentuk Keberhasilan yang Terukur dalam Tutoring Matematika LLM (Lee et al. 2026)
