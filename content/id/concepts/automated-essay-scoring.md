---
title: "Penskoran Esai Otomatis"
created: "2026-08-09T07:47:05-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
updated: "2026-11-08T11:03:58-05:00"
translation_of: "concepts/automated-essay-scoring"
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

> **Penskoran Esai Otomatis (Automated Essay Scoring, AES)** — penggunaan AI untuk mengevaluasi dan memberi skor esai tertulis, mencakup pendekatan statistik tradisional, model bahasa yang disetel halus, dan strategi prompting berbasis [[llm]] yang semakin mudah diakses. [[research-methods-aied|Penelitian]] AES dalam basis pengetahuan ini mencakup akurasi penskoran, keadilan dan bias, validitas psikometrik, dan [[accessibility|aksesibilitas]] praktis bagi pendidik.

## Pertanyaan yang Perlu Dipertimbangkan

- Penskoran Esai Otomatis telah bergerak dari model statistik tradisional ke prompting berbasis LLM. Ketegangan utama di halaman ini adalah antara akurasi dan aksesibilitas — model yang disetel halus memberi skor baik tetapi tidak praktis bagi sebagian besar pendidik. Mana yang akan Anda prioritaskan dalam konteks Anda sendiri, dan mengapa?
- Temuan utama adalah bahwa sekadar menyertakan esai contoh dalam prompt membawa kesepakatan LLM–manusia mendekati reliabilitas manusia–manusia — dan model yang lebih murah dapat menyamai model yang lebih mahal. Apa yang disarankan ini tentang seberapa besar kualitas AES ditentukan oleh model versus bagaimana ia diprompt?
- Halaman ini memperingatkan bahwa penskoran AI dapat secara sistematis meremehkan siswa dari latar belakang linguistik yang beragam. Sebelum membaca, jika Anda melihat AI memberi skor lebih rendah pada esai penutur non-asli, apakah Anda akan menganggapnya 'masalah bias' atau sekadar 'skornya'? Apa yang akan mengubah cara Anda merespons?
- Pendekatan swarujuk menilai penulis L2 dengan membandingkan tulisan mereka dengan karya mereka sendiri sebelumnya alih-alih dengan norma penutur asli. Bagaimana pilihan dasar pembanding mengubah makna suatu skor — dan siswa mana yang mungkin diperlakukan lebih adil?
- AES bersinggungan dengan penilaian formatif ketika digunakan untuk umpan balik alih-alih pemberian nilai. Kapan umpan balik mesin atas sebuah esai benar-benar berguna bagi penulis yang sedang berkembang, dan kapan ia dapat menyeragamkan jenis umpan balik [[qualitative-research|kualitatif]] yang akan diberikan editor manusia?

## Pendahuluan

Penskoran Esai Otomatis memiliki sejarah panjang dalam teknologi pendidikan, dari model statistik awal hingga pendekatan berbasis LLM modern yang dapat mengevaluasi esai secara holistik tanpa kumpulan data besar yang telah diskor sebelumnya. Ketegangan kunci dalam penelitian AES adalah antara akurasi dan aksesibilitas — meskipun model yang disetel halus mencapai hasil yang kuat, model tersebut padat sumber daya dan tidak praktis bagi sebagian besar pendidik.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang dkk.]]** RACES menggunakan keselarasan imbalan untuk membuat penskoran esai LLM akurat sekaligus konsisten, menjawab kekhawatiran validitas AES yang inti.

[[xu-recentering-humans-ai-assisted-writing-scoring-2026|Xu, Lu dan Abdi (2026)]] meninjau dua belas studi yang membandingkan penskoran AI dan manusia atas tulisan akademik EFL dan melaporkan keselarasan moderat secara keseluruhan, paling kuat pada ciri linguistik permukaan dan paling lemah pada organisasi, koherensi dan pengembangan argumen, dengan keadilan jarang diperiksa.

Dalam tulisan respons-terhadap-teks tingkat dasar atas, [[correnti-erevise-validity-argument-formative-assessment-2026|Correnti dkk. (2026)]] menemukan bahwa [[ai-feedback-quality|umpan balik otomatis]] atas penggunaan bukti oleh siswa meningkatkan skor ciri, dan bahwa kualitas revisi bergantung pada apakah guru mengangkat umpan balik itu dalam diskusi, bukan pada sistemnya semata.

## Tema penelitian utama

**AES berbasis prompting** telah muncul sebagai pendekatan yang paling mudah diakses. **[[choi-anchor-aes-prompting-2025|Studi kertas jangkar Choi dkk.]]** menunjukkan bahwa menyertakan esai contoh dalam prompt membawa kesepakatan LLM–manusia mendekati reliabilitas manusia–manusia, dengan GPT-4o mini mencapai hasil sebanding dengan GPT-4o pada biaya lebih rendah. Ini terhubung ke penelitian [[prompt-engineering]] yang lebih luas dan membuat AES layak digunakan oleh [[teacher-role|guru]].

**Penskoran psikometrik dan tingkat sifat** bergerak melampaui skor holistik. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]** menyediakan kerangka yang sadar psikometrik untuk penskoran adaptif-sifat dengan umpan balik yang berlandaskan [[sociocultural-learning|ZPD]]. **[[icle-plus-plus-essay-scoring|ICLE++]]** memodelkan sifat-sifat berbutir halus untuk penskoran esai holistik, memajukan presisi evaluasi otomatis.
- **Penskoran sifat tingkat dimensi dibatasi oleh data di balik setiap dimensi.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi dkk. (2026)]] melatih satu pengklasifikasi per dimensi kerangka [[critical-thinking|berpikir kritis]] FRISCO milik Ennis pada 106 esai fisika kelas sebelas dari Indonesia (83 untuk pelatihan, 23 untuk pengujian, dengan tiga penilai guru yang sepakat pada kappa 0.78–0.84 di setiap dimensi). Kesepakatan terkonsentrasi pada ekspresi alih-alih penalaran: kappa kuadratik berbobot mencapai 0.763 untuk Clarity dan 0.728 untuk Situation tetapi hanya 0.374 untuk Focus, 0.332 untuk Reason dan 0.227 untuk Inference. Sinyal ordinal itu direkayasa, bukan diamati. Esai sintetis tingkat-1 (pembangkitan templat, degradasi ke 20–40% panjang asli, penghapusan kata kunci) plus parafrase LLM menaikkan Focus sebesar +0.346 kappa dari garis dasar 0.028 — dan satu konfigurasi mencapai akurasi 0.652 dengan kappa mendekati nol atau negatif, sehingga akurasi bukan kriteria pemilihan yang dapat digunakan dalam AES ordinal.

**Bias dan keadilan** merupakan kekhawatiran kritis. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** menemukan bahwa penskoran AI secara sistematis meremehkan siswa dari latar belakang linguistik yang beragam, menyoroti perlunya pertimbangan [[bias-mitigation]] dan [[equity-in-ai-education]] dalam penerapan AES.

**Guru ingin skor disajikan sebagai dapat ditinjau, bukan final.** Sembilan guru menulis SMA berpengalaman dari Brasil mengevaluasi aplikasi penskoran esai [[ai-education|AIED]]-Unplugged dan menilainya tinggi — median SUS 92.5, median TAM 7 untuk kegunaan, kemudahan penggunaan, relevansi dan niat menggunakan, 6 untuk kualitas hasil. Tanpa diminta, mereka menyatakan bahwa laporan itu sebaiknya memuat peringatan di layar bahwa ia tidak sepenuhnya andal dan harus ditinjau sebelum dilihat siswa; satu guru membaca kewajiban itu sebagai fitur positif ([[ribeiro-teachers-writing-analytics-adoption-2026|Ribeiro dkk. (2026)]]). Mereka meminta lebih banyak detail, bukan lebih sedikit: diagnostik per kompetensi, ringkasan global, kolom untuk komentar mereka sendiri, dan contoh konkret cara memperbaiki. Di mana penelitian validitas berdebat tentang tingkat kesepakatan, pengguna ini meminta antarmuka mengodekan pembagian pertimbangan antara sistem dan guru.

**Ketidaksepakatan dengan penilai manusia bersifat sistematis, bukan acak.** Model GPT dan Llama siap pakai hanya sepakat lemah dengan skor manusia (QWK ≈ 0.17–0.28 terhadap 0.72 antara dua penilai manusia) dan bias ke arah yang bergantung pada kualitas — lebih tinggi untuk esai pendek yang kurang berkembang dan lebih rendah untuk esai panjang yang kuat namun memuat kesalahan permukaan kecil ([[llms-do-not-grade-essays-like-humans-2026|Mathew dkk. (2026)]]).

**Penilaian L2 dan swarujuk** mengeksplorasi konteks tulisan non-asli. **[[self-referential-l2-writing-llm-assessment|Penilaian L2 berbasis profil]]** menggunakan pendekatan swarujuk yang membandingkan tulisan siswa dengan karya mereka sendiri sebelumnya alih-alih norma penutur asli.

**[[explainable-ai|Keterjelasan]] dan pembobotan fitur** membuka kotak hitam bagaimana LLM sebenarnya memberi skor. **[[llm-essay-scoring-feature-weighting-2026|Wang dkk. (2026)]]** membandingkan tiga LLM (Qwen, GPT, Gemini) dengan penilai manusia pada esai bahasa Inggris non-asli di enam belas fitur tekstual, menemukan keselarasan keseluruhan yang kuat tetapi pembobotan yang berbeda: LLM menekankan akurasi gramatikal, kecanggihan leksikal, dan kompleksitas sintaksis, sementara penilai manusia memprioritaskan kelengkapan isi dan penyajian visual. Secara kritis, LLM menggeser pembobotan mereka menurut tingkat kemahiran — memberi bobot lebih pada kesalahan bahasa untuk siswa berkemahiran rendah dan semakin menghargai kecanggihan linguistik untuk siswa berkemahiran tinggi — sedangkan penilai manusia mempertahankan kerangka yang lebih stabil. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye, dan Yan (2026)]]** memperluas ini dengan kerangka evaluasi lima model (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) pada 60 esai panjang, menggunakan penemuan kausal untuk mengungkap heuristik evaluatif yang berbeda: sebagian besar model memprioritaskan presisi leksikal dan kelancaran, sementara yang lain menekankan kompleksitas sintaksis atau integrasi lintas domain, dan beberapa menunjukkan inkonsistensi, pemadatan skor, atau peremehan sistematis. Bersama-sama studi ini menetapkan bahwa validitas AES bergantung bukan hanya pada kesepakatan keseluruhan tetapi pada *bagaimana* model membobot fitur dan apakah pembobotan itu stabil di antara subkelompok pembelajar — yang secara langsung menginformasikan audit [[assessment-validity]] dan [[bias-mitigation]].

**Batas jenis butir dan limitasi pemberian nilai esai.** Dalam ujian universitas berformat campuran, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]] menemukan konkordansi ChatGPT-5 dengan fakultas bersifat substansial hingga hampir sempurna pada butir objektif (CCC 0.935–1.000) tetapi turun tajam pada respons terbuka — mendekati nol hingga negatif untuk jawaban singkat dan hanya 0.341–0.854 untuk pertanyaan esai — dan rubrik terstruktur tidak secara konsisten meningkatkan kesepakatan esai. Ini membatasi validitas AES: kelancaran model membantu pada butir yang terspesifikasi baik tetapi tidak terbawa ke penskoran esai holistik, di mana interpretasi kontekstual atas respons kredit parsial masih menguntungkan [[human-in-the-loop-ai|pertimbangan manusia]].

**Batas jenis isu dalam kesepakatan diagnostik.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao dan Fan (2026)]] menggunakan DeepSeek-R1 untuk melabeli isu tulisan tertentu sebelum revisi dan membandingkan labelnya dengan diagnosis guru lintas tiga siklus (F1 rata-rata = 0.768, SD = 0.037). Kesepakatan tertinggi pada isu yang diisyaratkan secara lokal seperti pilihan kata kosakata (F1 = 0.824) dan terendah di mana isu berporos pada relasi klaim–bukti (penggunaan sumber dan bukti, 0.579), sehingga kesepakatan dalam peran diagnostik bergantung pada jenis isu, bukan hanya pada model atau prompt.
**Distribusi rubrik yang miring dapat membuat metrik penskoran agregat menyesatkan.** Evaluasi otomatis atas satu dimensi rubrik dapat merupakan tugas klasifikasi dengan distribusi label yang timpang alih-alih skor kontinu: menandai tingkat refleksi 0-3 pada 1,954 esai siswa Hungaria, 68% esai berada pada tingkat 3 dan 1.8% pada tingkat 0, dan konfigurasi dangkal terbaik (SMOTEBoost dengan embedding Qwen3) mencapai skor keseluruhan 0.7176 yang dirata-ratakan atas akurasi, F1 dan ROC-AUC terhadap 0.6872 untuk transformer yang disetel halus terbaik — namun satu konfigurasi RidgeClassifier mencetak ROC-AUC 0.7131 pada akurasi hanya 0.5162, dan penyeimbangan kelas menurunkan setiap metrik (akurasi turun dari 0.6672 tanpa penyeimbangan menjadi 0.6408 dengannya), sehingga para penulis membaca pilihan model sebagai pertanyaan tentang metrik mana yang penting, dengan transformer memperoleh tempatnya melalui sensitivitas kelas minoritas alih-alih kesepakatan agregat ([[reflection-level-classification-hungarian-essays-2026|Csibi dkk., 2026]]).

**Bukti penerapan berisiko tinggi.** Bukti lapangan dari penerapan berisiko tinggi yang nyata ([[human-in-the-loop-ai-scoring-national-assessment-2026|Acredita EB Uruguay, 2024–2025; Curi dkk.]]) menunjukkan GPT-5 yang direkayasa prompt mencapai kesepakatan 60–80% dengan penilai manusia terlatih pada rubrik analitik Spanyol 15 butir, sekitar lima poin persentase di bawah kesepakatan antarpenilai manusia untuk sebagian besar butir dan tidak pernah lebih dari 15 poin di bawahnya, dengan konsistensi antar-jalan di atas 90% untuk hampir semua butir. Kosakata, sintaksis dan ejaan adalah dimensi terlemah, dan butir ejaan harus diserahkan kepada pemeriksa tata bahasa deterministik (LanguageTool, akurasi 68%, konsistensi 100%) karena ortografi tingkat token adalah tempat model paling tidak stabil. Prompt yang dibangun untuk satu edisi ujian berpindah ke edisi berikutnya hanya dengan penyuntingan khusus topik, dan AI secara sistematis lebih ketat daripada manusia — memberi nilai lebih rendah, bukan lebih tinggi. Bagi desain AES, pelajarannya adalah bahwa penskoran berbasis prompting dapat mendekati kesepakatan manusia bahkan dalam ujian nasional, sementara kelemahan yang tersisa berada pada tingkat konvensi bahasa tingkat rendah alih-alih kualitas [[writing-education|menulis]] holistik.

Keyakinan tingkat token, penskoran berbobot probabilitas, dan ensembel masing-masing meningkatkan kesepakatan pada penskoran berpikir divergen — teknik bertumpuk mencapai r = 0.846 (RMSE = 0.4848), dan merutekan hanya 20% respons yang paling tidak yakin ke tinjauan manusia memangkas upaya manual sekitar 80% ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak & Acar (2026)]]).

**[[benchmark|Tolok ukur]] manusia, dan apa yang dapat dan tidak dapat dijustifikasinya.** [[opraise-automated-marking-ai-assessment-2026|Studi OpRaise]] adalah uji terkuat dalam basis pengetahuan ini tentang apakah penilaian LLM siap untuk penggunaan rutin, dan jawabannya berporos pada tolok ukur alih-alih model. Studi ini membandingkan tiga sistem terdepan (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash), masing-masing dalam 27 konfigurasi prompt yang melintasi kekhususan rubrik, kalibrasi dan strategi penskoran, terhadap nilai termoderasi dari 761 esai Psikologi autentik dari 125 mahasiswa di tiga [[higher-ed|universitas]] Inggris. Nilai manusia diadopsi sebagai kebenaran dasar karena pertimbangan akademik adalah standar yang diterima secara sosial, dan para penulis mencatat bahwa penilai manusia hanya sepakat secara moderat satu sama lain — yang membatasi seberapa kuat kesepakatan AI–manusia dapat secara wajar dituntut. Terhadap tolok ukur itu, kesepakatan pada band gelar Inggris berkisar dari **35 hingga 65 persen menurut institusi** (63 persen di Cambridge, 53 persen di Nottingham, 35 persen di Manchester Metropolitan) dan tidak berpindah antar institusi, sehingga rekomendasi utama laporan itu adalah validasi lokal pada materi [[assessment]] milik institusi sendiri. Dua temuan dapat digeneralisasi melampaui korpus ini. Pertama, reliabilitas dan kesepakatan terpisah: setiap model menilai ulang hampir identik (ICC 1.00, 1.00, 0.97) dan model-model itu sepakat satu sama lain lebih dekat daripada dengan manusia (ICC tiga model 0.91), namun ketiganya hanya sepakat pada band gelar untuk **56 persen** kiriman — konsistensi diri bukan validitas. Kedua, nilai AI memadat ke tengah skala (skor pemadatan 0.47–0.82, dengan titik persilangan di mana AI dan manusia rata-rata sepakat berada di kisaran 50-an atas hingga 60-an bawah), membuat AI paling tidak akurat justru pada batas nilai yang memisahkan First dari Upper Second dan lulus dari gagal. Rentang kosakata, konjungsi, kompleksitas kalimat dan panjang teks memprediksi nilai AI dengan efek kecil tetapi signifikan sementara hubungannya dengan nilai manusia secara luas dapat diabaikan — demonstrasi langsung kekhawatiran [[ai-scoring-language-bias-physics|bias linguistik]], dan satu yang tidak dihapus oleh strategi prompting mana pun yang diuji.


**AES sebagai sinyal pelatihan alih-alih hakim.** Model penskoran biasanya dipelajari sebagai evaluator, tetapi SWIM menggunakannya sebagai fungsi imbalan: [[swim-student-writing-simulation-2026|Do, Kontak dan Sachan (2026)]] membekukan verifier AES multi-sifat dan menilainya terhadap esai siswa yang dihasilkan, mengubah profil sifat yang diprediksi menjadi imbalan padat per esai (jarak ternormalisasi-sifat rata-rata dari profil target) untuk GRPO, dengan sengaja bukan metrik Quadratic Weighted Kappa itu sendiri. QWK didefinisikan atas sekumpulan pasangan target-prediksi dan bukan sinyal per sampel, sementara imbalan kecocokan eksak terlalu jarang dalam pengaturan multi-sifat. Perolehannya diperiksa ulang terhadap penskor DeBERTa dan verifier khusus evaluasi yang tidak pernah dilatih oleh kebijakan (0.598 versus 0.479 untuk SFT, dan 0.647 versus 0.501), yang merupakan pemeriksaan yang memisahkan kendali kemahiran sejati dari adaptasi terhadap [[reinforcement-learning|model imbalan]]. Bagi penelitian AES ini adalah tuntutan validitas kedua: penskor yang digunakan sebagai target pelatihan sedang dioptimalkan, sehingga pembobotan sifat dan bias bahasanya sendiri merambat ke segala hal yang dipelajari generator - asimetri pembobotan fitur yang sama (akurasi gramatikal, kecanggihan leksikal dan kompleksitas sintaksis dibobot lebih berat oleh model daripada oleh penilai manusia) yang didokumentasikan di tempat lain di halaman ini, kini membentuk pelatihan alih-alih hanya nilai.
**Penskoran dan umpan balik menginginkan metode yang berbeda, sehingga sistem sebaiknya memisahkannya.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib dkk. (2026)]] membangun satu sistem esai argumentatif TOEFL sebagai tiga modul — penskoran, umpan balik tingkat permukaan atas tata bahasa dan mekanika, dan umpan balik tingkat mendalam atas organisasi, koherensi dan argumentasi — alih-alih satu model yang mengerjakan ketiga tugas itu. Apa yang unggul pada satu modul kalah pada modul lain: [[llm-training-and-fine-tuning|penyetelan halus]] terbimbing GPT-4o pada 120 dari kumpulan kepemilikan 480 esai yang diskor tolok ukur, diuji pada 360 sisanya, mencapai kappa kuadratik berbobot 0.84 dan RMSE 0.44 pada skala 0-5, di depan garis dasar Wang dan Gayed (2024) (QWK 0.78, RMSE 0.57). Namun penyetelan halus yang sama menghasilkan keluaran tak terpakai untuk modul umpan balik, di mana prompting langsung Claude 3.7-lah yang menghasilkan komentar yang disetujui guru.

### Koneksi ke konsep terkait

AES berada di persimpangan [[automated-assessment]], [[writing-education]], dan [[generative-ai]]. Ia terhubung ke [[formative-assessment]] ketika digunakan untuk umpan balik alih-alih pemberian nilai, ke [[feedback|Loop Umpan Balik]] ketika diintegrasikan ke proses menulis iteratif, dan ke [[ai-literacy]] ketika pendidik memahami dan mengkalibrasi alat AES. Konsep [[assessment-validity]] dan [[educational-measurement]] penting untuk memastikan skor AES bermakna dan adil.
- **Kesepakatan, galat dan apa yang ditambahkan penskor hibrida.** Dalam korpus kecil tulisan pemasaran terbuka, LLM mengungguli aturan deterministik dan hibrida berbobot sama pada kesepakatan absolut dengan penilai manusia (ICC(2,1) .435 versus .266 dan .091), dengan hibrida secara signifikan lebih buruk daripada LLM saja, sementara dispersi skor dan satu respons yang hampir kosong menunjukkan betapa kuatnya estimasi semacam itu bergantung pada komposisi korpus ([[automated-scoring-marketing-posts-agreement-2026]]).

Sistem terbuka juga bagian dari gambaran ini: AiAWE memberi skor esai argumentatif dengan Gemma-3-27B-it yang diadaptasi LoRA, mencapai QWK 0.828 dan kesepakatan dalam ±0.5 dari skor manusia pada 90.56% dari 360 esai evaluasi — dan melaporkan bahwa skala model tidak memprediksi kinerja hilir secara andal di bawah adaptasi LoRA ([[aiawe-automated-writing-evaluation]]).

- **"Model yang diprompt yang paling sepakat adalah penskor esai terkuat."** Pada ASAP 2.0 kesepakatan terpublikasi antara dua penilai ahli adalah **κ 0.745**, dan tidak ada estimasi titik model yang diprompt mencapainya: ke-22 model berkisar dari **0.155** hingga **0.727**, dan untuk **18** model seluruh intervalnya berada di bawahnya. Penskor DeBERTa yang disetel halus mencapai **0.809** dan aturan yang hanya menghitung panjang esai mencapai **0.636**, di atas **16 dari 22** model, meskipun setiap model mempertahankan kesepakatan melampaui panjang. [[porcaro-ai-grading-benchmark-2026|Tolok ukur yang harus dikalahkan adalah penskor terlatih, bukan model di jalan nanti]].

## Miskonsepsi Umum

- **"Hasil penskoran otomatis mencerminkan tulisan siswa."** Sinyal ordinal dapat **direkayasa alih-alih diamati** — esai sintetis tingkat-1 yang dibangun melalui pembangkitan templat, degradasi ke **20-40% panjang asli** dan penghapusan kata kunci. Sistem yang divalidasi pada ekstrem yang dikonstruksi mungkin belum pernah diuji pada distribusi yang akan dihadapinya.
- **"Akurasi agregat adalah metrik yang harus dilaporkan."** **Distribusi rubrik yang miring dapat membuat metrik penskoran agregat menyesatkan**: evaluasi otomatis atas satu dimensi rubrik sering merupakan tugas klasifikasi dengan distribusi label yang timpang, di mana akurasi tinggi dan diskriminasi yang berguna berpisah.
- **"Penerapan lapangan belum dievaluasi."** Bukti lapangan ada dari penerapan berisiko tinggi yang nyata (**Acredita EB Uruguay, 2024**), yang merupakan bentuk bukti terkuat dalam literatur ini dan yang tidak pernah disediakan oleh sebagian besar studi akurasi penskoran.

## Konsep terkait

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]

## Artikel terkait
- [[reflection-level-classification-hungarian-essays-2026]] — Klasifikasi Tingkat Refleksi Otomatis pada Esai Siswa Hungaria
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: Sistem Evaluasi Tulisan Otomatis Modular untuk Esai Argumentatif
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Inovasi Pendidikan melalui Penskoran Esai Otomatis: Kerangka Multidimensi untuk Mengevaluasi Berpikir Kritis dalam Esai Fisika SMA
- [[opraise-automated-marking-ai-assessment-2026]] — Laporan OpRaise: penilaian AI atas 761 esai universitas di tiga universitas Inggris
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Kerangka Human-in-the-Loop untuk Penskoran Berbantuan AI dalam Penilaian Menulis Skala Besar
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: penskoran esai konsisten selaras-imbalan dengan LLM
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM tidak menilai esai seperti manusia (Mathew dkk. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Dari penskoran otomatis ke diagnosis pembelajaran: studi mekanisme penilaian formatif berbantuan AI dalam menulis bahasa Inggris
- [[llm-essay-scoring-feature-weighting-2026]] — Pola pembobotan fitur dalam penskoran esai berbasis LLM (Wang dkk. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Kerangka untuk mengevaluasi LLM dalam penilaian esai (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: keyakinan diri, penskoran probabilistik berbobot dan ensembel meningkatkan kesepakatan penskoran LLM
- [[swim-student-writing-simulation-2026]] — verifier AES yang dibekukan digunakan sebagai imbalan pelatihan padat bagi generator tulisan
- [[porcaro-ai-grading-benchmark-2026]] — Melampaui kesepakatan: 22 penilai yang diprompt menghadapi probe yang jawaban benarnya diketahui, dan sebagian besar dapat dibujuk naik (Porcaro 2026)
- [[ribeiro-teachers-writing-analytics-adoption-2026]] — Guru kelas 300 siswa menilai aplikasi AES unplugged 92.5 SUS dan meminta peringatan reliabilitas, bukan skor final (Ribeiro dkk. 2026)
