---
title: "Efek Diferensial Antar Kelompok Siswa"
created: "2026-09-19T06:20:00-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied, ai-bias-fairness-education]
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/differential-effects-across-learner-groups"
source_updated: "2026-11-06T03:00:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Efek diferensial antar kelompok siswa** — apa yang ditemukan penelitian [[ai-education|AI dalam pendidikan]] tentang bagaimana *penggunaan* AI dan *efeknya* berbeda di antara jenis-jenis siswa: [[inclusive-learning|siswa penyandang disabilitas]] dan [[neurodiversity|siswa neurodivergen]], pembelajar bahasa kedua dan [[multilingual-learning|pembelajar multibahasa]], anak perempuan dan laki-laki, siswa dari kelompok minoritas, siswa dari latar belakang berpenghasilan rendah, siswa pedesaan, siswa generasi pertama, siswa internasional, dan [[adult-learning|pembelajar dewasa]]. Pola yang layak dibawa pulang tidak merata ke dua arah sekaligus: sebagian untaian memiliki bukti nyata (disabilitas, bahasa) sementara yang lain hampir kosong (generasi pertama, internasional, pengungsi), dan bahkan untaian yang kuat jarang menetapkan bahwa sebuah *kelompok* berbeda — yang mereka tetapkan adalah bahwa sebuah alat membantu atau merugikan sampel dari kelompok itu, yang merupakan klaim berbeda. Halaman ini memetakan apa yang ada, apa yang ditunjukkannya, dan alasan metodologis mengapa rata-rata kelompok bukanlah prediksi tentang seorang siswa.

## Pertanyaan yang Perlu Dipertimbangkan

- Alat Anda sebagian besar berhasil untuk siswa di kelas Anda, dan subkelompok berisi lima orang mengalami kesulitan. Apakah perbedaan subkelompok sebesar itu dapat terdeteksi sama sekali dalam studi semacam ini — dan apakah Anda ingin mengubah alat untuk seluruh kelas berdasarkan bukti itu?
- Penelitian tentang siswa penyandang disabilitas melaporkan efek yang bervariasi menurut kategori disabilitas. Jika dua kategori berada pada ukuran efek yang sangat berbeda dalam [[meta-analysis-systematic-review|meta-analisis]] yang sama, apa artinya itu bagi keputusan desain yang memperlakukan "disabilitas" sebagai satu kelompok?
- Beberapa studi menemukan alat AI yang efeknya *tidak* berbeda menurut gender, sementara karya lain menunjukkan bahwa [[ai-feedback-quality|umpan balik AI]] dan penulisan berbantuan AI *memang* mereproduksi stereotip gender ketika persona atau prompt membawanya. Bagaimana keduanya bisa benar sekaligus?
- Sebagian besar kerja keadilan menguji persona siswa simulasi alih-alih siswa nyata, karena atribut demografis nyata tidak tersedia bagi model saat inferensi dalam sebagian besar penerapan. Apa yang dapat ditetapkan oleh audit persona kontrafaktual, dan apa yang tidak?
- Saat meninjau untaian di halaman ini, kelompok siswa mana yang benar-benar terwakili dalam studi di balik validasi alat Anda — dan apa yang akan Anda lakukan terhadap kelompok yang tidak hadir?
- Intervensi yang menaikkan hasil bagi semua orang tetapi menutup kesenjangan (membantu siswa yang paling tertinggal) memiliki cerita keadilan yang berbeda dari intervensi yang menaikkan rata-rata. Ketika Anda mengevaluasi sebuah pilot, apakah Anda mengukur kesenjangan atau rata-rata?

## Pendahuluan

Dua pertanyaan tersembunyi di dalam "apakah AI berhasil untuk siswa *semacam ini*?". Yang pertama tentang efek: apakah sebuah alat menghasilkan hasil yang berbeda bagi kelompok yang berbeda. Yang kedua tentang penggunaan: apakah kelompok yang berbeda mengadopsi, mengakses, atau berinteraksi dengan alat yang sama secara berbeda, yang dapat membentuk hasil tanpa efek diferensial sama sekali. Halaman ini mencakup keduanya, kelompok demi kelompok, dan menyatakan dengan terus terang di mana literaturnya berhenti.

Halaman ini sengaja tidak menduplikasi tetangganya. [[equity-in-ai-education|Keadilan dalam Pendidikan AI]] membawa kerangka normatif dan struktural — akses, representasi, dan keadilan hasil, serta argumen tentang apa yang *seharusnya* dilakukan AI dalam pendidikan. [[inclusive-learning|Pembelajaran Inklusif]] membawa kerangka desain, termasuk [[universal-design-for-learning|Desain Universal untuk Pembelajaran]]. [[digital-divide|Kesenjangan Digital]] mencakup lapisan akses dan keterampilan. [[neurodiversity]], [[special-education|Pendidikan Khusus]], [[accessibility]], dan [[multilingual-learning|Pembelajaran Multibahasa]] membahas secara mendalam kelompok tunggal. Yang tersisa untuk halaman ini adalah peta bukti lintas kelompok dan pertanyaan penilaian: bagaimana efek ini diestimasi, kelompok mana yang dipelajari sama sekali, dan apa yang diizinkan oleh temuan tingkat kelompok untuk Anda lakukan.

## Bagaimana perbedaan kelompok dilaporkan, dan mengapa sebagian besarnya tidak bisa

**Studi satu kelompok bukanlah studi efek diferensial.** Sebagian besar literatur di bidang ini mengukur satu kelompok tanpa kelompok pembanding. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] menggabungkan 29 studi (kuasi-)eksperimen tentang AI untuk siswa penyandang disabilitas dan menemukan efek positif sedang (Hedges' g = 0.588, 95% CI [0.349, 0.826]) — tanpa pembanding neurotipikal. Itu memberi tahu Anda bahwa sebuah intervensi membantu, bukan bahwa intervensi itu membantu kelompok ini secara berbeda.

**Analisis subkelompok biasanya terlalu kecil untuk menjawab pertanyaannya.** [[ai-tutoring-micro-rct-gcse-science-2026|RCT mikro sains GCSE]] luar biasa eksplisit: interaksi perlakuan-menurut-statusnya adalah 0.57 poin (95% CI −2.25 hingga 3.39), dengan estimasi terstratifikasi g = 0.28 (95% CI −0.04 hingga 0.59) untuk satu kelompok dan g = 0.35 (95% CI 0.18 hingga 0.52) untuk kelompok lainnya. Interval subkelompok yang mencakup nol adalah pertanyaan untuk pilot lokal, bukan dasar bagi aturan seluruh kelas.

**Atribut demografis biasanya disimulasikan.** Demografi siswa nyata jarang dilekatkan pada masukan model, sehingga audit menyediakan persona sebagai gantinya. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto dan Hovy (2026)]] menjalankan enam model yang disetel instruksi pada tiga tugas pendidikan dalam kondisi default model, persona eksplisit, dan riwayat implisit — 192,480 panggilan inferensi — dan menemukan bahwa persona eksplisit maupun riwayat percakapan *implisit* sama-sama menggeser perilaku model. Perbedaan yang mereka buat layak dipertahankan: kesadaran akan perbedaan siswa bisa diinginkan (menyesuaikan umpan balik dengan bahasa pertama seorang siswa), sementara kepekaan yang sama menjadi kerugian ketika ia menggeser penilaian atas karya yang identik.


**Audit dengan pembelajar nyata memang ada, dan dapat mendukung klaim interseksional.** [[stinar-fairness-unmodeled-reading-skills-adaptive-learning-2026|Stinar dkk. (2026)]] menganalisis log MATHia selama dua tahun dari 8.549 siswa dan menemukan bukti yang tidak dapat disediakan audit persona simulasi: kesenjangan laju dasar pembaca pemula sebesar .1007 di antara siswa perempuan pada 2021–2022, perbedaan yang mencapai .0926 di antara siswa Hispanik pada 2022–2023, dan 8 dari 12 statistik ras-menurut-kelompok-baca yang signifikan di antara pembaca non-pemula berbanding hanya 1 dari 12 di antara pembaca pemula.




**Perbaikan keadilan mungkin tidak tergeneralisasi.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] mengurangi kesenjangan galat yang tertuju pada gender dan usia dalam estimasi atensi siswa pada data [[assessment-validity|validasi]], tetapi perolehannya tidak secara konsisten berpindah ke subjek yang disisihkan atau ke pemisahan tingkat-subjek yang diulang.

**Label kelompok menyembunyikan variasi di dalamnya.** Dalam meta-analisis disabilitas yang sama, siswa dengan disabilitas belajar spesifik, disabilitas intelektual dan perkembangan, atau yang tuli menunjukkan efek lebih besar (g = 0.952) daripada siswa dengan gangguan spektrum autisme (g = 0.368) — perbedaan yang dilaporkan penulisnya sebagai tidak signifikan secara statistik di seluruh 239 ukuran efek dari 41 sampel independen. "Disabilitas" bukan satu kelompok, dan begitu pula "pembelajar L2".

## Disabilitas dan neurodivergensi

Ini adalah untaian paling dalam di basis pengetahuan, dan untaian yang pelaporannya paling kuat.

- **Efeknya nyata tetapi tidak merata menurut hasil.** Dalam [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], [[learning-gains|kinerja akademik]] menunjukkan efek terbesar (k = 80, g = 0.929), di depan keterampilan kehidupan sehari-hari dan keterampilan lain (g = 0.766) serta keterampilan sosial-emosional (k = 144, g = 0.382). Bias publikasi hadir (uji Egger β = 2.837, p < .001); trim-and-fill menurunkan estimasi gabungan menjadi g = 0.2694, yang tetap signifikan secara statistik. Bacalah efek utama dan efek yang disesuaikan bias secara bersamaan.
- **Bidang ini telah direorganisasi di sekitar [[generative-ai|AI generatif]].** [[assistive-tech-neurodivergent-higher-ed-review-2026|tinjauan pelingkupan teknologi asistif digital untuk siswa neurodivergen]] menyaring 766 catatan untuk menyertakan 40 studi empiris, 15 di antaranya menggunakan AI generatif dan 11 menggunakan format imersif. Untaian ini kecil dan baru, bukan matang.
- **Sebagian dukungan AI menyetarakan alih-alih membedakan.** [[adhd-video-segmentation-computing-education|Pimenova, Begel dan kolega]] membagi [[video-education|video instruksional]] menjadi potongan instruksi tunggal dengan jeda tetap dalam studi dalam-peserta (17 ADHD, 10 non-ADHD); semua orang membaik, dan galat serta keraguan partisipan ADHD turun hingga setara dengan rekan non-ADHD mereka. Itu adalah bentuk bukti terkuat yang tersedia bagi [[universal-design-for-learning|Desain Universal untuk Pembelajaran]] melalui transformasi konten otomatis: perubahan umum yang menutup kesenjangan, bukan perbaikan yang menyasar kelompok.
- **Apa yang dikatakan siswa neurodivergen bahwa mereka butuhkan sering kali biasa saja.** [[neurodivergent-computing-students|Survei terhadap 24 mahasiswa komputasi neurodivergen dan 20 rekan neurotipikal]], dengan empat wawancara, menemukan ketidaknyamanan signifikan terhadap tugas yang kurang memiliki struktur jelas atau membawa ekspektasi ambigu — akomodasi yang tidak memakan biaya apa pun untuk disediakan.
- **Pilihan desain juga dapat mengecualikan secara epistemik.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] berargumen bahwa data pelatihan berbahasa Inggris dan berpusat Barat memarginalkan cara-cara mengetahui yang nonhegemonik dan menempatkan situasi pembelajar penyandang disabilitas di pusat kritik itu.

- **"Pada nilai manusia yang sama, penilai memperlakukan siswa yang teridentifikasi dan yang tidak teridentifikasi secara sama."** Di seluruh **3,000** esai ASAP 2.0 yang dicocokkan persis pada nilai yang telah diputuskan, **setiap satu dari 22 model** menilai kelompok yang teridentifikasi disabilitas lebih rendah, dari **−0.086** hingga **−0.429** pada skala enam poin, dan **20** terbaca GAP REPLICATES. Kesalahan konvensi dan panjang paling banyak menjelaskan seperlimanya untuk **17 dari 20** model, dan karena ASAP 2.0 merilis satu nilai, desainnya tidak dapat memisahkan bias yang dimiliki bersama oleh panel manusia dari bias yang dimiliki bersama oleh model ([[porcaro-ai-grading-benchmark-2026|bacaannya adalah SHARED GAP, bukan bias model]]).

## Bahasa: pembelajar bahasa kedua, multibahasa, dan bahasa Inggris

Menurut jumlah artikel ini adalah untaian terbesar, dan terbelah rapi menjadi efek alat dan kerugian alat.

- **Efek alat menjanjikan dan berisik.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang dan Zou (2026)]] memeta-analisis 11 studi (17 ukuran efek, N = 595) tentang [[language-learning|pembelajaran bahasa]] berbantuan robot dan menemukan efek keseluruhan yang positif (g = 0.83, 95% CI [0.46, 1.21]) dengan heterogenitas tinggi (I² = 84.4%); dari enam moderator yang diuji, hanya jenis interaksi robot-pembelajar yang signifikan. Basis bukti sebesar ini mendukung [[benchmark]] sementara, bukan keputusan pengadaan.
- **Infrastrukturnya sendiri tidak merata sebelum alat apa pun digunakan.** [[structural-silence-underrepresented-language-ai-2026|Roy dan Roy (2026)]] mendokumentasikan kesenjangan korpus dengan bahasa Bengali sebagai kasus: di bawah 0.5% konten web global berbanding sekitar 49.5% untuk bahasa Inggris, meskipun penutur Bengali hampir 4% dari populasi dunia.
- **Bahasa pengantar mengubah hasil di antara 294 mahasiswa.** Tinjauan yang sama melaporkan bahwa konten berbahasa asing menghasilkan hasil lebih rendah daripada pengajaran dalam bahasa ibu, dan bahwa pengajaran [[cs-education|pemrograman]] bilingual mengungguli pengajaran berbahasa Inggris saja.
- **Detektor menghukum penulis bahasa kedua.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge dan Mesbah (2026)]] menguji Turnitin dan Originality terhadap 192 teks: satu detektor mengklasifikasikan 48 dari 48 teks yang ditulis secara profesional dengan benar tetapi salah mengklasifikasikan empat dari 48 teks mahasiswa EFL (91.6%). Asimetrinya adalah intinya — galatnya jatuh pada kelompok yang tulisannya sudah dalam pengawasan.

## Gender

Penelitian gender di sini terbagi menjadi apakah alat memperlakukan siswa secara berbeda, dan apakah siswa terpapar perkakas yang sarat stereotip.

- **Desain yang sengaja netral gender tidak menunjukkan perbedaan gender.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Studi kuasi-eksperimen terhadap 195 siswa kelas sembilan]] menguji ADA, [[conversational-ai|chatbot]] berkode perempuan yang berlandaskan Ada Lovelace: minat situasional naik untuk kedua gender tanpa perbedaan gender dalam respons emosional, beban kognitif, atau kinerja akademik. Persona panutan dapat dibangun tanpa memicu ancaman stereotip.
- **Namun isi prompt memindahkan bias ke dalam karya siswa.** [[gender-bias-transfer-llm-writing|Studi terkontrol dengan 123 partisipan]] meminta siswa menulis esai rencana karier untuk profil berpasangan yang hanya berbeda dalam gender, dalam kondisi tanpa AI, AI netral, dan AI berbias gender; kondisi berbias memindahkan bahasa yang terdiferensiasi gender ke dalam tulisan siswa dan menekan [[agency]] perempuan secara asimetris. Para peneliti lebih dulu mengonfirmasi efek itu pada 1,600 esai yang dihasilkan.
- **Ruang dan pembingkaian sama pentingnya dengan alatnya.** [[all-girls-genai-makerspace-gender-equity-2026|Studi kasus makerspace AI generatif khusus perempuan]] menemukan bahwa anak perempuan menghargai lingkungan gender tunggal sebagai lebih aman dan lebih santai, dan memperingatkan terhadap "girlification" — adaptasi pada permukaan yang membiarkan relasi kuasa tak tersentuh.
- **Kepekaan model adalah properti model, bukan konstanta.** Dalam [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], lima tutor dari 7B hingga 70B diaudit di sembilan tingkat demografis: Qwen2.5-7B melampaui ambang bias |r| ≥ 0.10 di 7 dari 12 sel domain-kali-dimensi, sementara LLaMA-3.1-8B melampauinya sekali. Pelatihan khusus pedagogi mengurangi sebagian bias dan menambah bias lainnya.
- **Perbaikan satu sumbu dapat membuat sebuah kelompok lebih buruk:** siswa beragam gender yang dilebur ke dalam kategori "Unknown Gender" memiliki tingkat positif benar terendah di bawah setiap metode keadilan, dan tidak ada metode satu sumbu yang memperbaiki perlakuan mereka — variasi label kelompok yang dicatat di atas, di dalam model peringatan dini prediktif alih-alih tutor ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Ras, etnis, dan siswa dari kelompok minoritas

Untaian ini kecil dalam jumlah artikel dan kuat dalam mekanisme, karena buktinya adalah tentang apa yang dilakukan AI *dengan* atribut demografis begitu ia memilikinya.

- **[[personalized-learning|Personalisasi]] adalah vektor bias.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] menunjukkan alat umpan balik tulisan [[llm]] bergeser ke arah pujian yang selaras stereotip dan kritik yang ditahan ketika umpan balik dipersonalisasi dengan ras, bahasa, disabilitas, pencapaian, atau [[motivation]] seorang siswa — pada esai yang identik.
- **Isyarat demografis dapat bersifat implisit.** Audit kontrafaktual di atas menemukan bahwa riwayat percakapan, bukan hanya persona eksplisit, menggeser perilaku penilaian dan umpan balik — hasil [[demographic-signals-llm-student-assessment-2026|192,480 panggilan inferensi]] yang sama, dan alasan mengapa aturan pengungkapan tentang demografi yang *dideklarasikan* tidak memadai.
- **Kesenjangan migrasi dan bahasa dapat mendominasi.** Dalam EduFair-Bench, model 70B memasangkan kesenjangan bahasa dan imigrasi terbesar dengan kesenjangan pedagogi terkecil, sehingga tutor yang tampak kuat secara pedagogis bisa jadi justru yang paling peka terhadap siapa yang tampak seperti siswa itu.
- **Pengecualian epistemik, bukan sekadar galat:** lihat [[genai-minoritized-knowledges-disability|marginalisasi pengetahuan kelompok minoritas]] di atas.

## Status sosial ekonomi, geografi, dan usia

- **Literasi digital, bukan penggunaan AI, adalah mediatornya.** [[ai-divide-ses-personality-primary-education-2026|Wang dan kolega (2026)]] memodelkan data survei dan registri nasional dari 4,497 siswa kelas 6 di Belanda dan menemukan bahwa kaitan antara sifat kepribadian dan kinerja akademik berjalan melalui literasi digital alih-alih intensitas penggunaan AI, dengan perbedaan literasi digital lebih didorong oleh kepribadian daripada status sosial ekonomi — dan keunggulan SES bekerja secara independen dari keterlibatan AI. Pembingkaian klasik yang hanya berfokus pada SES tidak lengkap.
- **Geografi dapat menjadi kendala pengikat.** [[arc-hubs-k12-ai-robotics-rural-2026|Catatan ARC]] tentang pendidikan robotika dan AI [[k-12]] melaporkan bahwa partisipasi FIRST LEGO League di pedesaan turun pada musim jarak jauh 2020 dan tidak pernah pulih sementara partisipasi perkotaan berangsur pulih, dan mengidentifikasi pendampingan teknis lokal yang berkelanjutan — bukan kit atau [[curriculum-design|kurikulum]] — sebagai kendala yang terdistribusi secara geografis.
- **Pembelajar dewasa adalah kasus desain tersendiri,** yang dicakup oleh [[adult-learning|Pembelajaran Dewasa]] dan kerja andragogi basis pengetahuan ini alih-alih oleh studi K-12.
- **Akses tetap menjadi gerbang bagi semua yang lain:** lihat [[digital-divide|Kesenjangan Digital]] dan temuan bahwa [[access-not-enough-ai-tutoring-2026|akses ke tutoring AI tidaklah cukup]] tanpa integrasi [[pedagogy|pedagogis]].

## Latar belakang disipliner

Latar belakang disipliner adalah sumbu diferensial yang belum dibawa peta kelompok-demi-kelompok halaman ini: alat yang sama dapat mendistribusikan manfaatnya secara tidak merata antar bidang alih-alih antar demografi siswa.

- **Sebuah alat dapat melibatkan satu disiplin dan melepaskan disiplin lain.** Dalam kuasi-eksperimen dua pekan dengan 130 mahasiswa pada tim multidisiplin, [[generative-ai|ChatGPT]] menaikkan [[student-engagement|keterlibatan]] fisik bagi mahasiswa STEM dan menurunkannya bagi mahasiswa non-STEM (Q = 9.87, p < .05), dan catatan yang ditulis tanpa ChatGPT mendapat nilai lebih tinggi dalam keragaman dan integrasi gagasan disipliner ([[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu et al. (2026)]]).

## Di mana buktinya hilang

Temuan jujur dari survei ini adalah betapa tipisnya sebagian kelompok. Masing-masing ini adalah kesenjangan nyata dalam basis bukti, bukan kesenjangan di halaman ini.

- **Siswa generasi pertama:** satu studi melaporkan perbedaan penggunaan alih-alih efek. Dalam [[student-ai-inquiry-types-cs2-2026|studi penyelidikan CS2]], siswa generasi lanjutan memperlakukan AI sebagai mitra [[problem-solving]] yang aktif, sementara siswa generasi pertama mengambil peran konfirmatori yang berorientasi validasi dan mengajukan lebih sedikit pertanyaan secara keseluruhan.
- **Siswa generasi pertama: estimasi efek pertama, dan arahnya salah.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] dengan [[rct|uji acak]] atas [[intelligent-tutoring|tutor AI]] yang terintegrasi dalam mata kuliah memasok apa yang kurang dari entri di atas — diferensial terukur alih-alih pola penggunaan. Dalam sampel penuh, efek akses tutor terhadap nilai akhir adalah 2.87 poin (0.28 SD) lebih negatif bagi siswa generasi pertama, yang berarti −5.10 poin (−0.50 SD) bagi mereka berbanding −2.23 poin (−0.22 SD) bagi rekan mereka; diferensialnya lebih besar dalam sampel pencocokan persis (−3.89 poin, −0.35 SD), dan siswa generasi pertama juga kehilangan lebih banyak poin pekerjaan rumah dan tampilan halaman platform. Studi ini tidak melaporkan mekanisme dan presisinya bervariasi menurut hasil, tetapi arahnya berlawanan dengan cerita penyempitan kesenjangan: siswa dengan akses sebelumnya paling sedikit ke [[student-support-and-success|dukungan akademik]] menanggung biaya terukur terbesar.
- **Siswa internasional:** satu studi [[mixed-methods-research|metode campuran]] (survei n = 60, wawancara n = 14) tentang [[international-students-conversational-ai-adaptation|dukungan adaptasi lintas budaya]].
- **Siswa internasional: pola keterlibatan terukur, bukan estimasi efek.** Di antara 270 mahasiswa internasional etnis minoritas di tujuh [[business-education|sekolah bisnis]] Inggris, penggunaan [[generative-ai]] yang dilaporkan berkorelasi positif dengan keempat untaian [[student-engagement|keterlibatan]] — paling kuat keterlibatan agentik (β = 0.429) — dengan kondisi fasilitatif (β = 0.369) sebagai prediktor terkuat niat menggunakan ([[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya et al. (2026)]]).
- **Siswa berbakat dan berprestasi tinggi:** secara efektif belum diteliti sebagai kelompok dalam korpus ini.
- **Pembelajar pengungsi, imigran, dan terlantar:** tidak ada studi.
- **Gender masih dianalisis sebagai biner** dalam sebagian besar karya di atas, dan kategori disabilitas bervariasi antar studi, sehingga perbandingan lintas studi atas kelompok "yang sama" memiliki batas.

- **"Konteks siswa membuat penilai lebih adil."** Sebuah ablasi pada **3,000** esai yang dinilai dua model menemukan kesenjangan label tinggi-rendah sama untuk setiap kelompok yang dapat diujinya, setiap perbedaan dalam **0.045** dari satu tingkat. Pada Qwen label rendah tetap mengambil **0.06 hingga 0.08 poin** lebih banyak dari siswa pembelajar bahasa Inggris, siswa kurang beruntung secara ekonomi, dan siswa yang teridentifikasi disabilitas daripada dari rekan mereka. Tanpa label, kedua model tetap menandai dua kelompok terakhir di bawah rekan mereka pada nilai manusia yang sama. [[porcaro-ai-grader-reliability-2026|Catatan yang bisa salah menggeser nilai, dan menggesernya paling keras pada mereka yang sudah diremehkan]].

## Menggunakan bukti ini tanpa menyesuaikan label kelompok secara berlebihan

- **Perlakukan rata-rata kelompok sebagai hipotesis tentang populasi, jangan pernah sebagai prediksi tentang seseorang.** Setiap klaim diferensial di atas adalah pernyataan distribusional.
- **Tanyakan apakah siswa Anda ada dalam sampel validasi sama sekali** sebelum mempercayai klaim inklusivitas sebuah alat; untaian neurodivergensi dan bahasa sama-sama menunjukkan bahwa representasi dalam pengembangan adalah pengecualian.
- **Utamakan desain yang menyetarakan bila bukti memungkinkan.** Hasil segmentasi video ADHD — semua orang membaik, kesenjangan menutup — adalah tujuan yang lebih pas bagi kelas umum daripada tambahan yang menyasar kelompok.
- **Hati-hati dengan personalisasi yang mengonsumsi atribut demografis.** Temuan [[marked-pedagogies-linguistic-bias-writing-feedback|pedagogi bertanda]] secara langsung menyangkut mekanisme itu, dan berlaku untuk pemeriksaan [[well-being|kesejahteraan]], [[affective-computing|tutor afektif]], dan [[recommender-systems-and-learning-paths|sistem rekomendasi]] yang memprofilkan siswa.
- **Uji secara lokal, pada kelompok yang Anda pedulikan, dengan hasil yang diukur tanpa alat itu.** Lihat [[interpreting-and-applying-aied-research|Menafsirkan dan Menerapkan Penelitian AIEd]] untuk kebiasaan penilaian dan [[research-methods-aied|Metode Penelitian dalam AI di Pendidikan]] untuk desain yang membuat uji lokal dapat dipertahankan.
- **Variabel pengelompokan dengan bukti proses paling langsung bersifat berbasis pengetahuan, bukan demografis.** [[wang-genai-metacognitive-prompting-preconceptions-2026|Wang et al. (2026)]] mencocokkan kelompok pada [[prior-knowledge|pengetahuan awal]] (U = 293.50, p = 0.515) dan tetap menemukan bahwa cara siswa bernalar membentuk apa yang terjadi. Delapan kelompok dengan prakonsepsi berbeda dan enam dengan prakonsepsi serupa mengajukan jenis pertanyaan yang sama, namun AI berperan sebagai hub integrasi dalam kelompok yang beragam dan berada di jalur linear dalam kelompok yang serupa, dengan evaluasi berkelanjutan yang berlawanan. Itu bertumpu pada empat belas kelompok dalam satu tugas 60 menit, jadi perlakukan sebagai hipotesis tentang bagaimana Anda menyusun kelompok alih-alih sebagai aturan.

## Miskonsepsi Umum

- **"Label kelompok menangkap variasi yang penting."** **Label kelompok menyembunyikan variasi di dalamnya**: dalam meta-analisis disabilitas, siswa dengan **disabilitas belajar spesifik, disabilitas intelektual dan perkembangan** serta kategori lain digabung, sehingga rata-rata kelompok tidak menggambarkan satu pun dari mereka.
- **"Analisis subkelompok menjawab pertanyaan efek diferensial."** Analisis itu biasanya **terlalu kecil untuk menjawabnya**: [[ai-tutoring-micro-rct-gcse-science-2026|RCT mikro sains GCSE]] luar biasa eksplisit bahwa kontras **perlakuannya** berdaya untuk efek keseluruhan dan bukan untuk perbedaan subkelompok. Temuan subkelompok yang kurang berdaya adalah hipotesis, bukan hasil.
- **"Efek gabungan sedang memberi tahu Anda apakah kelompok tertentu diuntungkan."** [[zhang-ai-students-disabilities-meta-analysis-2024|29 studi (kuasi-)eksperimen]] digabung menjadi **Hedges' g = 0.588 (95% CI [0.349, 0.826])** di seluruh kategori disabilitas. Intervalnya menggambarkan rata-rata di atas kategori-kategori itu, dan "kelompok mana, kebutuhan mana" adalah analisis terpisah.

## Konsep terkait

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Artikel terkait

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 studi tentang AI untuk siswa penyandang disabilitas: g = 0.588, dan g = 0.269 setelah penyesuaian bias
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPT menguntungkan mahasiswa STEM dan non-STEM secara tidak setara dalam pembelajaran interdisipliner
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — Penggunaan GenAI dan keterlibatan empat untaian di antara mahasiswa internasional etnis minoritas
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 catatan menjadi 40 studi, 15 di antaranya AI generatif
- [[adhd-video-segmentation-computing-education]] — Perubahan desain umum yang membawa partisipan ADHD ke tingkat setara
- [[neurodivergent-computing-students]] — 24 mahasiswa neurodivergen tentang struktur, ambiguitas, dan kolaborasi
- [[genai-minoritized-knowledges-disability]] — Marginalisasi epistemik dalam AI, dengan disabilitas sebagai kasus
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 dengan I² = 84.4% dalam basis bukti L2 yang kecil
- [[structural-silence-underrepresented-language-ai-2026]] — Bengali di bawah 0.5% konten web berbanding 49.5% bahasa Inggris
- [[hadra-ai-detector-accuracy-efl-2026]] — Detektor salah mengklasifikasikan tulisan EFL sementara menilai teks profesional dengan sempurna
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Uji 195 siswa atas panutan berkode perempuan tanpa perbedaan gender
- [[gender-bias-transfer-llm-writing]] — Prompt berbias gender yang berpindah ke esai siswa
- [[all-girls-genai-makerspace-gender-equity-2026]] — Ruang gender tunggal yang dihargai, dengan peringatan terhadap girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Keadilan tutor yang bervariasi menurut model, domain, dan dimensi perilaku
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Umpan balik yang selaras stereotip pada esai yang identik
- [[demographic-signals-llm-student-assessment-2026]] — 192,480 panggilan: persona eksplisit dan riwayat implisit sama-sama menggeser model
- [[student-attention-estimation-fairness-2026]] — Regularisasi keadilan yang tidak tergeneralisasi
- [[ai-divide-ses-personality-primary-education-2026]] — 4,497 siswa: literasi digital, bukan penggunaan AI, yang memediasi kesenjangan
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Partisipasi pedesaan yang tidak pernah pulih, dan pendampingan sebagai kendalanya
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Interaksi subkelompok yang interval kepercayaannya melewati nol
- [[student-ai-inquiry-types-cs2-2026]] — Satu-satunya temuan penggunaan generasi pertama di korpus ini
- [[international-students-conversational-ai-adaptation]] — Satu-satunya studi siswa internasional di korpus ini
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Estimasi efek pertama di korpus ini untuk siswa generasi pertama: akses tutor merugikan mereka 0.50 SD nilai akhir berbanding 0.22 bagi rekan mereka (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: mengevaluasi intervensi keadilan post-hoc dalam sistem peringatan dini yang dikendalikan vendor
- [[wang-genai-metacognitive-prompting-preconceptions-2026]] — Variabel pengelompokan berbasis pengetahuan dengan bukti proses langsung: kelompok yang dicocokkan pada pengetahuan awal tetapi berbeda dalam keragaman prakonsepsi menyerap AI yang sama secara berbeda (Wang et al. 2026)
- [[porcaro-ai-grading-benchmark-2026]] — Melampaui kesepakatan: 22 penilai ber-prompt bertemu probe yang jawaban benarnya diketahui, dan sebagian besar dapat dibujuk naik (Porcaro 2026)
- [[porcaro-ai-grader-reliability-2026]] — Konteks siswa mengubah nilai penilai LLM pada karya yang identik, dan kesepakatan dengan guru tidak mendeteksinya (Porcaro 2026, Paper VI)
