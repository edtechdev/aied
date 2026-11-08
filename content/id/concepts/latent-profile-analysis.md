---
title: "Analisis Profil Laten"
created: "2026-09-20T12:39:59-04:00"
type: concept
methods: [quantitative-research, research-methods-aied]
confidence: high
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/latent-profile-analysis"
source_updated: "2026-11-04T16:51:25-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Analisis profil laten (LPA)** — metode berpusat pada orang yang menyortir sampel ke dalam subkelompok yang tidak teramati (profil) ketika setiap kasus dijelaskan oleh beberapa variabel sekaligus. Ia adalah anggota keluarga pemodelan campuran yang menggunakan indikator kontinu; saudaranya, **analisis kelas laten (LCA)**, menerapkan logika yang sama pada indikator kategorikal. Keduanya mengajukan pertanyaan yang berbeda dari model [[quantitative-research|berpusat pada variabel]] yang mendominasi penelitian AI dalam pendidikan: bukan "seberapa besar X memprediksi Y secara rata-rata" melainkan "berapa banyak jenis siswa, [[teacher-role|guru]], atau manajer yang berbeda yang tersembunyi di dalam rata-rata itu." Dalam basis pengetahuan ini metode tersebut menunjukkan bahwa satu alat AI berdampak sangat berbeda di berbagai subkelompok — lima profil kesadaran etis di antara mahasiswa Ghana, enam tipologi kesiapan di antara manajer pendidikan Ukraina, empat profil penerimaan [[generative-ai|AI generatif]] di antara calon guru Taiwan.

## Pertanyaan yang Perlu Dipertimbangkan

- Sebuah studi melaporkan bahwa kenyamanan rata-rata siswa terhadap AI adalah 3.8 dari 5. Apa yang mungkin disembunyikan angka rata-rata itu jika satu kelompok antusias dan kelompok lain diam-diam menolak?
- LPA memodelkan skor kontinu; LCA memodelkan kategori. Jika Anda mengodekan jawaban wawancara sebagai "menyebut [[cognitive-offloading|ketergantungan berlebih]]: ya/tidak," mana yang Anda butuhkan?
- Solusi lima profil melaporkan entropi 0.816; pesaing empat profil memperoleh 0.929 tetapi menggambarkan data dengan lebih sedikit kekayaan. Mana yang akan Anda terbitkan?
- Profil bersifat deskriptif, bukan kausal. Jika profil "Skeptis yang Menolak" menunjukkan kemudahan penggunaan yang tinggi tetapi niat adopsi yang rendah, apa yang didukungnya, dan apa yang tidak?

## Pendahuluan

Sebagian besar bukti AI dalam pendidikan berpusat pada variabel: ia mengestimasi hubungan rata-rata, dan rata-rata mengandaikan homogenitas. Metode berpusat pada orang justru mengambil orang sebagai unit analisis dan bertanya berapa banyak konfigurasi atribut yang berbeda yang ada dalam sampel. LPA termasuk keluarga itu, dan hasilnya di sini adalah bahwa ia mengubah keragaman siswa dari klaim retoris menjadi temuan yang terukur: ketika profil kesadaran etis tersebar dari 26.1 persen hingga 4.5 persen meskipun rerata sampelnya nyaman, diferensiasi berhenti menjadi preferensi desain.

## Apa yang dilakukan metode ini, dan kapan ia menjadi alat yang tepat

LPA mengandaikan bahwa sampel ditarik dari campuran subkelompok, masing-masing dengan rerata dan variansnya sendiri pada indikator. Peneliti menyediakan indikator dan jumlah kelompok; algoritma mengestimasi probabilitas keanggotaan setiap kasus dan menetapkannya berdasarkan probabilitas tertinggi, mengembalikan profil rerata per kelompok, ukuran per profil, dan ringkasan seberapa bersih kasus terpisah. Anggota keluarga mana yang Anda gunakan mengikuti indikatornya, bukan pertanyaan penelitiannya:

- **LCA — indikator kategorikal.** Becker dan rekan mengonversi kategori respons terkode dari jawaban terbuka 1,189 siswa fisika menjadi variabel indikator dan mempertahankan dua kelas: Pengguna Pragmatis (70 persen) dan Non-Pengguna Skeptis (30 persen); karena topik yang tidak disebut dihitung sebagai "tidak ada dukungan," para penulis menandai inflasi nol dalam kerangka data analisis.
- **LPA — indikator kontinu** seperti skor skala dan rerata konstruk. Chen dan rekan memprofilkan 128 calon guru Taiwan pada lima konstruk [[technology-acceptance-model|TAM]]/UTAUT2; Acquah dan rekan memprofilkan 509 mahasiswa Ghana pada tiga dimensi kesadaran etis; Schweder dan rekan memprofilkan 2,464 siswa pada pemenuhan kebutuhan [[motivation|motivasional]].
- **Analisis transisi (profil) laten** memperluas keluarga ini sepanjang waktu, mengestimasi profil per gelombang dan probabilitas berpindah di antaranya. Liang dan rekan melacak motivasi belajar AI 2,086 siswa selama setahun; [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] mengikuti 457 pembelajar bahasa Jepang selama tiga gelombang, dengan profil maladaptif menyusut dari 26.48 menjadi 17.74 persen.

Pengelompokan biasa ([[machine-learning|k-means]] dan hierarkis) mengejar niat berpusat pada orang yang sama tetapi mempartisi kasus berdasarkan jarak geometris alih-alih mengestimasi model probabilitas. Gunakan LPA atau LCA ketika pertanyaannya menyangkut subkelompok — apakah "si siswa" adalah fiksi pada tingkat agregasi sampel Anda, dan apakah subkelompok berbeda dalam bentuk maupun dalam level. Jangan menggunakannya ketika Anda membutuhkan efek perlakuan rata-rata: solusi lima profil di dalam [[rct|uji acak]] sebuah [[intelligent-tutoring|tutor adaptif]] memprediksi perbedaan pascates (partial η² = .27) tetapi tidak menemukan interaksi kondisi × profil (ps ≥ .198).

## Bagaimana korpus menggunakannya

Tiga penggunaan berulang.

- **Menetapkan heterogenitas sebelum merancang untuknya.** Survei Kremen dan rekan atas 395 manajer pendidikan Ukraina menggunakan LCA berpusat pada orang untuk menunjukkan bahwa "si manajer" adalah fiksi: enam tipologi membentang dari Terkendala Kompetensi (25.6 persen, mau tetapi kurang terampil) hingga Skeptis tanpa Hambatan (kesiapan tertinggi namun 74 persen tidak memercayai AI), dan para penulis membacanya sebagai mandat untuk pelatihan yang terdiferensiasi.

- **Keselarasan lintas sistem sebagai pemeriksaan stabilitas.** [[teachers-ai-belief-profiles-talis-2024-2026|Fang dan Jin (2026)]] mempertahankan empat profil keyakinan dari 40,680 guru di 49 sistem pendidikan (Tak Berbeda 6.13% hingga Dukungan Terukur 56.29%), dan mengubah acuan keselarasan menyisakan kesepakatan klasifikasi sebesar 99.62% — sementara kegunaan mengurutkan profil secara identik di semua 49 sistem dan risiko tidak.
- **Memulihkan subkelompok yang disembunyikan agregat.** Acquah dan rekan mempertahankan lima profil kesadaran etis dari Sangat Tinggi Menyeluruh (26.1 persen) hingga Kesadaran Etis Rendah (4.5 persen, kebajikan 2.06), sebaran yang membentang dari sedikit di atas seperempat sampel hingga di bawah sepersepuluh. Chen dan rekan menemukan bahwa Skeptis yang Menolak melaporkan kemudahan penggunaan yang dirasakan tinggi tetapi niat perilaku yang sangat rendah — demonstrasi paling jelas dalam korpus bahwa paradoks kemudahan-penggunaan/niat tidak terlihat oleh model tingkat rerata.
- **Memprofilkan kalibrasi alih-alih level.** Studi literasi AI guru menerapkan LPA pada kesesuaian antara [[self-report-measures|laporan diri]] dan ukuran objektif, menghasilkan enam profil: estimasi berlebih, estimasi kurang, keselarasan, dan kelompok rendah/rendah yang terkonsentrasi pada guru tanpa pengalaman [[ai-literacy|literasi AI]] sebelumnya. Di sini profil menggambarkan pola lintas instrumen, bukan pita skor.

Profil kemudian berfungsi sebagai variabel independen: disiplin membentuk keanggotaan di antara calon guru (Cramér's V = 0.532, mahasiswa STEM terkonsentrasi di Perintis Teknologi), dan keanggotaan memprediksi [[self-efficacy]], kelelahan, dan [[anxiety-and-stress|kecemasan AI]] di kemudian hari di bagian lain korpus.

## Memilih jumlah profil

Tidak ada satu statistik pun yang memilih solusinya; korpus memperlakukan retensi sebagai pertimbangan yang dibuat dari beberapa kriteria sekaligus.

- **Kriteria informasi (BIC, AIC).** Lebih rendah biasanya lebih baik, tetapi penurunan monoton menandakan masalah alih-alih pemenang. Dalam studi manajer Ukraina BIC turun secara monoton di sepanjang rentang dua hingga enam kelas tanpa minimum yang jelas, dan para penulis menyebut solusi enam kelas mereka eksploratif berdasarkan bukti itu.
- **Entropi.** Ringkasan kepastian klasifikasi, makin dekat ke 1 berarti penempatan makin bersih. Chen dan rekan melaporkan 0.985 untuk empat profil; Acquah dan rekan melaporkan 0.816 untuk lima profil dibandingkan 0.929 untuk empat, dan mereka sendiri menyarankan konsolidasi demi pengelompokan yang lebih stabil.
- **[[explainable-ai|Keterjelasan]] dan ukuran profil.** Studi pemrofilan kepercayaan pada AI mempertahankan tiga klaster meskipun indeks Calinski–Harabasz lebih menyukai dua, karena tiga klaster dapat ditafsirkan, dan ia mencatat bahwa koefisien siluet 0.288 menandakan pemisahan yang lemah atau berbatas. Chen dan rekan memperingatkan bahwa profil terkecil mereka (14.06 persen dari 128 kasus) mungkin tidak stabil, dan profil terkecil studi Ghana hanya memuat 23 siswa, yang para penulisnya usulkan untuk digabungkan.
- **Stabilitas di bawah resampling.** Stabilitas bootstrap adalah pemeriksaan jujur tentang apakah profil akan berulang pada sampel baru: rerata adjusted Rand index adalah 0.385 untuk solusi enam kelas Ukraina tetapi 0.989 di seluruh 100 inisialisasi acak dalam studi kepercayaan pada AI — desain nominal yang sama, bobot evidensial yang sangat berbeda.
- **Uji rasio kemungkinan bootstrap (BLRT)** dan uji Lo–Mendell–Rubin adalah pendamping standar BIC dan entropi dalam literatur pemodelan campuran yang lebih luas, tetapi studi profil dalam basis pengetahuan ini tidak melaporkannya. Ketika sebuah halaman hanya melaporkan BIC dan entropi, perlakukan jumlah kelas sebagai sementara.


- **Pemeriksaan rasio kemungkinan yang justru dilewatkan korpus ini.** [[ai-attitude-latent-profiles-career-development-2026|Song dkk. (2026)]] mempertahankan empat profil (entropi 0.824) dari 379 mahasiswa bisnis dan melaporkan keputusan Lo–Mendell–Rubin: signifikan pada empat (p = 0.035) dan tidak signifikan pada lima (p = 0.376).
- **Retensi yang dipertahankan dengan solusi pesaing dan uji rasio kemungkinan.** [[suria-martinez-academic-self-efficacy-motor-disabilities-2026|Suriá-Martínez dkk. (2026)]] melaporkan bahwa solusi empat profil lebih cocok untuk 102 siswa tetapi tidak meningkat secara signifikan dan meninggalkan kelas terkecil pada 12.7 persen, sehingga mereka mempertahankan tiga profil (entropi .89) alih-alih model yang lebih baik secara numerik. Melaporkan solusi yang kalah dan apa yang mendiskualifikasinya adalah yang membuat jumlah kelas yang dipertahankan menjadi pertimbangan yang dapat diperiksa pembaca, dan ukuran penggunaan AI 12 butir yang dirancang khusus untuk studi itu — divalidasi pada sampel terpisah berisi 85 yang disebut para penulis sebagai pendahuluan — menandai batas lain dari buktinya.

Laporkan perbandingannya, bukan hanya pemenangnya: halaman yang menyatakan "kami mempertahankan lima profil" tanpa solusi pesaing, nilai entropi, dan ukuran profil terkecil tidak memberi pembaca cara untuk menilai pilihannya.

## Membaca dan melaporkan hasil, dan di mana hal itu keliru

Bacalah sebuah profil dari bentuknya sekaligus levelnya. Dalam studi Ghana profil-profil berbeda dalam konfigurasi otonomi, kebajikan, dan keadilan — pasangan terbesar memadukan otonomi yang kuat dengan kebajikan yang lebih rendah — sehingga dua profil dapat berada pada level keseluruhan yang serupa dan tetap menuntut pengajaran yang berbeda.

Empat kehati-hatian, masing-masing dinyatakan dalam halaman sumbernya:

1. **Profil bersifat deskriptif.** Mereka menyatakan siapa yang ada dalam sampel, bukan mengapa, dan desain potong lintang tidak dapat menunjukkan stabilitas atau pergerakan (studi calon guru, Ghana, dan fisika). Hanya analisis longitudinal — studi transisi selama setahun dan tiga gelombang Wu — yang mendukung klaim tentang pergerakan, dan bahkan di sana pergerakan adalah asosiasi, bukan efek intervensi.
2. **Keanggotaan diestimasi, bukan diamati.** Kasus ditetapkan berdasarkan probabilitas posterior tertinggi, sehingga individu di dekat batas diklasifikasikan dengan ketidakpastian nyata; entropi rendah dan nilai siluet yang lemah berarti batas-batasnya harus dibaca sebagai lunak.
3. **Pilihan indikator menentukan jawabannya.** Profil sepenuhnya bergantung pada variabel mana yang masuk ke model, sehingga heterogenitas yang tidak pernah diukur oleh studi adalah heterogenitas yang tidak dapat ditemukannya — studi Ghana hanya mengumpulkan jenis kelamin di antara latar belakang dan karena itu tidak dapat mengatakan apa yang memprediksi keanggotaan.
4. **Heterogenitas yang terdeteksi bukan kausalitas yang terdeteksi.** Nol profil × kondisi dalam uji tutor adalah pengingatnya: memprofilkan luaran di dalam uji bukanlah uji moderasi perlakuan.

## Implikasi bagi AI dalam pendidikan

1. **Ukur heterogenitas sebelum merekomendasikan intervensi.** Profil dalam korpus ini berulang kali menempatkan seperempat atau lebih sampel di bawah rata-rata utama; rancanglah untuk profil yang ada alih-alih untuk reratanya.
2. **Utamakan metode berpusat pada orang ketika keluarannya adalah diferensiasi.** Studi calon guru dan manajer sama-sama menyajikan pergeseran itu sebagai kontribusi metodologis mereka, karena prediktor rata-rata tidak dapat mengungkap konfigurasi yang membenarkan dukungan terdiferensiasi.
3. **Laporkan bukti retensi secara lengkap.** Terbitkan perbandingan BIC/AIC, entropi, ukuran profil, dan pemeriksaan stabilitas, dan nyatakan terus terang ketika jumlah kelas bersifat eksploratif.
4. **Perlakukan profil sebagai diagnostik, bukan label.** Profil adalah konstruk penelitian dengan batas yang diestimasi, sehingga alat yang menetapkan individu ke kategori bernama membawa kehati-hatian instrumen [[educational-measurement|pengukuran]] mana pun — dan [[differential-effects-across-learner-groups|efek diferensial antarkelompok siswa]] menuntut pengawasan yang sama dengan analisis subkelompok mana pun.

## Miskonsepsi Umum

- **"Analisis profil laten menemukan kelompok yang memang ada."** LPA mengubah keragaman siswa dari klaim retoris menjadi temuan yang terukur, dan profil adalah **model atas sebuah kontinum yang dibagi pada batas-batas terpilih**, bukan jenis alami. Jumlah profil adalah keputusan analitis.
- **"Anggota keluarga variabel laten mana pun sama saja."** Yang mana yang Anda gunakan **mengikuti indikatornya**: **LCA untuk indikator kategorikal**, LPA untuk indikator kontinu. Memilih metode lebih dulu dan indikator kemudian membuat hasilnya menjadi artefak dari pilihan itu.
- **"Profil dapat dibandingkan lintas studi."** Chen dan rekan memprofilkan **128 calon guru Taiwan** pada lima konstruk [[technology-acceptance-model|TAM]]/UTAUT2, sementara Acquah dan rekan memprofilkan **509 mahasiswa Ghana**. Indikator yang berbeda pada populasi yang berbeda tidak menghasilkan label profil yang sebanding.

## Konsep terkait

- [[quantitative-research]]
- [[mixed-methods-research]]
- [[research-methods-aied]]
- [[machine-learning]]
- [[learning-analytics]]
- [[student-modeling]]
- [[educational-measurement]]
- [[self-report-measures]]
- [[differential-effects-across-learner-groups]]
- [[technology-acceptance-model]]

## Artikel terkait
- [[ai-attitude-latent-profiles-career-development-2026]] — Bukti retensi Lo–Mendell–Rubin untuk empat profil sikap AI pada 379 mahasiswa bisnis

- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Analisis transisi profil laten tiga gelombang atas adaptasi psikologis
- [[liang-ai-learning-motivation-sdt-2026]] — Analisis transisi laten atas tiga profil motivasi selama satu tahun
- [[trust-in-ai-psychological-profiles-ml-2026]] — Profil k-means; ketidaksepakatan siluet vs. Calinski–Harabasz; ARI 0.989
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Pengelompokan hierarkis dan k-means menjadi empat persona adopsi GenAI

- [[teachers-ai-belief-profiles-talis-2024-2026]] — Empat profil keyakinan AI guru dari 40,680 guru di 49 sistem, dengan stabilitas keselarasan
