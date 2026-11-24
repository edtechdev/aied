---
title: "Psikologi Perkembangan"
created: "2026-11-12T14:20:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
connected_concepts: [cognitive-psychology, early-childhood-elementary-ai-education, parents-and-families, metacognition, executive-function, self-regulated-learning, scaffolding, cognitive-offloading, well-being, creativity, ai-literacy, longitudinal-research, research-methods-aied]
connected_articles: [guo-ai-literacy-developmental-paces-2026, ai-toys-child-development-2026, clara-developmental-appropriateness-children-stories-2026, niu-genai-children-creative-thinking-cognitive-development-review-2026, vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026, genai-reliance-executive-functioning-2026, horowitz-kraus-children-chatgpt-cognitive-control-2026, adolescent-chatbot-self-disclosure-help-seeking-2026, ai-connectedness-adolescent-mental-health-2026, ai-play-framework-early-childhood-2026, age-tiered-ai-literacy-guidebooks-2026, preservice-early-childhood-genai-magnetism-2026, pergantis-chatbots-executive-functions-systematic-review-2025, sharma-chatgpt-dependency-executive-dysfunction-stress-2026]
updated: "2026-11-24T14:04:29-05:00"
translation_of: "concepts/developmental-psychology"
source_updated: "2026-11-14T08:32:58-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Psikologi perkembangan** — kajian tentang bagaimana kapasitas kognitif, linguistik, sosial, emosional, dan motivasional berubah seiring usia, serta tentang batasan yang diletakkan perubahan itu pada apa yang dapat dilakukan pembelajar dan dukungan apa yang mereka butuhkan. Dalam [[ai-education|AI dalam pendidikan]], ia menyediakan pertanyaan di balik setiap klaim usia: bukan "apakah alat ini bekerja" melainkan "apakah ia bekerja untuk pikiran pada tahap ini, yang sedang melakukan hal khusus ini". Ia menjelaskan mengapa alat [[generative-ai|AI generatif]] yang sama adalah bantuan belajar yang wajar bagi orang berusia 20 tahun dan risiko perkembangan bagi anak berusia 7 tahun, serta menandai di mana klaim semacam itu bertumpu pada hipotesis alih-alih hasil terukur.

## Pertanyaan yang Perlu Dipertimbangkan

- Dua pembelajar menggunakan chatbot yang sama untuk tugas yang sama. Apa yang akan diperiksa psikologi perkembangan sebelum Anda menyebut interaksi itu sesuai: usia saja, atau sesuatu yang lebih spesifik?
- "Sesuai usia" digunakan terus-menerus dalam panduan AI. Bukti apa yang Anda butuhkan sebelum menerima label itu, dan biasanya ia bertumpu pada apa?
- Fungsi eksekutif, [[metacognition|metakognisi]], dan [[self-regulated-learning|regulasi diri]] berkembang tidak merata. Jika sebuah alat mengatur untuk pembelajar, kapasitas manakah yang didukung dan manakah yang tergeser?
- Sebagian besar studi di sini mengukur pembelajar satu kali. Apa yang dapat dikatakan satu pengukuran tentang perkembangan, dan apa yang tidak?
- Bermain adalah medium perkembangan, bukan istirahat dari belajar. Ketika mainan AI mengambil alih narasi, apa yang masih dilatih anak itu?
- Masa remaja dibingkai sebagai jendela risiko sekaligus kesempatan desain. Manakah yang didukung bukti?

## Pendahuluan

Psikologi perkembangan berada di bawah beberapa konsep tetangga tanpa menjadi salah satunya. [[cognitive-psychology|Psikologi kognitif]] menjelaskan mekanismenya (memori kerja, beban, bias, pengambilan kembali) tetapi tidak mengatakan apa pun tentang bagaimana mekanisme itu berubah seiring usia. [[early-childhood-elementary-ai-education|Pendidikan anak usia dini]] adalah halaman jenjang: ia mencakup prasekolah dan sekolah dasar sebagai latar, dan catatan cakupannya menyatakan secara eksplisit bahwa kepeduliannya bersifat khas perkembangan tanpa menyediakan akun perkembangan itu. [[parents-and-families|Orang tua dan keluarga]] mencakup rumah sebagai konteks. Yang tidak dilakukan oleh satupun dari mereka adalah menjadikan perkembangan itu sendiri sebagai bingkai penjelas: alasan sebuah desain yang cocok untuk satu kelompok usia meleset di kelompok lain, dan alasan klaim tentang efek jangka panjang pada pikiran yang sedang berkembang begitu sulit dibuat.

Bingkai itu lebih penting dalam pendidikan AI daripada di kebanyakan bidang, karena alat AI biasanya dievaluasi pada orang dewasa lalu diterapkan ke bawah. Chatbot yang diuji dengan mahasiswa sarjana mencapai anak berusia 12 tahun lewat lisensi sekolah; aplikasi pembuat cerita yang dirancang untuk pembaca awal mencapai ruang kelas; mainan AI masuk ke dalam permainan sebelum ada yang bertanya apa yang dilakukannya pada permainan. Tinjauan terus sampai pada kesimpulan yang sama dari arah berbeda: bukti perkembangannya tipis, mekanismenya masuk akal, dan panduan ditulis mendahului penelitian.

## Tahap dan kapasitas sebagai batasan desain

Penggunaan paling konkret psikologi perkembangan di sini adalah sebagai batasan desain, bukan label pada pembelajar. CLARA, sistem yang dibangun di University of Auckland, menolak memprediksi usia anak secara langsung. Ia menguraikan sebuah cerita menjadi tuntutan kognitif, bahasa, dan sosio-emosional menggunakan taksonomi perkembangan 122 label, lalu mengagregasi label yang teraktivasi menjadi estimasi tahap perkembangan. Pilihan desainnya adalah argumennya: apa yang membuat teks sesuai bukanlah angka, melainkan tuntutan spesifik yang diletakkannya pada kapasitas spesifik.

Sumber bertingkat usia menjadikan poin yang sama dari sisi kurikulum. AI Learning Application Guidebook Taiwan dibangun dalam dua edisi: satu untuk pembelajar berusia 9 hingga 12 tahun dengan aktivitas berperancah, berbasis platform, non-generatif, dan edisi lanjutan untuk 13 hingga 18 tahun dengan aplikasi autentik, penalaran etis, dan penggunaan AI generatif terawasi. Penjenjangan itu perkembangan dalam substansi, bukan hanya kesulitan: edisi yang lebih muda menghindari alat generatif alih-alih menyederhanakannya.

Risiko dalam semua skema semacam itu adalah kelompok-kelompok usia menjadi proksi kasar. Anak berusia lima tahun dan anak berusia lima belas tahun berbeda dalam jauh lebih banyak hal daripada jarak antara dua label usia, dan satu kelompok dapat menampung anak-anak yang kapasitasnya menyebar bertahun-tahun.

## Fungsi eksekutif sebagai konstruk operatif

Di mana bukti menjadi spesifik tentang mekanisme, ia biasanya mendarat pada fungsi eksekutif: proses yang merencanakan, menghambat, berpindah, dan menahan informasi cukup lama untuk digunakan. Pertanyaan perkembangan adalah mana dari proses itu yang didukung alat tertentu, dan apakah dukungan itu bertahan lebih lama daripada alatnya. Pemisahan kompensasi, perancah, dan pengembangan oleh Vasileiou dan rekan adalah pernyataan paling tajam tentang perbedaan itu, dan akun Klarin tentang ketergantungan remaja menamai mode kegagalannya: kapasitas yang tergeser itu masih terbentuk. Konstruk, pengukurannya, dan bukti ketergantungan kini memiliki halamannya sendiri, [[executive-function|fungsi eksekutif]].

## Masa remaja sebagai kasus khusus

Masa remaja mendapat perlakuan sendiri karena kapasitas yang dipertanyakan bersifat sosial sebanyak kognitif. Survei Hu dan rekan atas 2.023 remaja di Amerika Serikat dan Hong Kong mengurutkan mereka menurut apa yang mereka bicarakan kepada chatbot, bukan seberapa banyak: orientasi instrumental terhadap pemecahan masalah dan informasi, orientasi pengungkapan diri yang berpusat pada perasaan dan hubungan, dan kelompok ketiga yang tidak melaporkan keduanya. Pembacaan perkembangan adalah bahwa teknologi yang sama bertemu periode di mana hubungan sebaya dan pekerjaan identitas adalah tugas sentral, sehingga alat yang menawarkan pengungkapan tanpa batas dan tanpa penghakiman bukanlah bantuan belajar yang netral.

Makalah teoretis Fu dan Zhao memperpanjang ini menjadi sebuah konstruk, "keterhubungan kecerdasan buatan", didefinisikan sebagai ikatan yang dipersepsikan yang secara psikologis nyata tetapi tidak simetris secara etis, karena mesin dapat mensimulasikan timbal balik tanpa kapasitas peduli apa pun. Ia tidak melaporkan data, dan ia menyatakan demikian; nilainya adalah peringatan bahwa hubungan yang dirasakan bukan bukti manfaat perkembangan.

## Bermain sebagai medium perkembangan

Literatur mainan AI adalah tempat psikologi perkembangan paling banyak bekerja dan buktinya paling sedikit. Tinjauan Xu, Girouard, dan Shi berargumen bahwa mainan bertenaga AI mendistribusikan ulang agensi dalam bermain: kendali atas narasi, dialog, hubungan, dan informasi bergeser dari anak semata ke interaksi anak-mainan. Redistribusi itu dapat membatasi permainan ketika mainan mengaturnya, atau memungkinkannya ketika mainan merespons sebagai sumber untuk imajinasi dan inkuiri yang dipimpin anak. Apakah ia melakukan satu atau lainnya adalah pertanyaan desain dan interaksi, dan tinjauan itu eksplisit bahwa bukti perkembangannya belum ada.

AI-Play, kerangka tanpa perangkat berbasis bermain untuk pra-K dan taman kanak-kanak, mengambil jalur berlawanan: ia mengajarkan konsep AI melalui bermain tanpa menaruh perangkat di depan anak, dengan argumen bahwa tugas perkembangan pada usia itu adalah representasi dan bermain peran, bukan interaksi dengan sistem.

## Implikasi untuk Praktik

Instruktur dapat membaca profil tuntutan alat, bukan kelompok usia pada kemasannya. Pertanyaan yang layak diajukan adalah kapasitas mana yang dimuat sebuah tugas: berapa banyak teks yang harus dipegang pembelajar dalam pikiran, tingkat baca apa yang diasumsikan antarmuka, berapa banyak kandungan sosial atau emosional yang dibawa interaksi. Alat generatif yang menghasilkan teks lancar mengasumsikan pembaca yang dapat menilainya, dan kapasitas itu tiba lebih lambat daripada membaca lancar.

Pengembang fakultas dan perancang kurikulum dapat meminjam logika penjenjangan dari buku panduan Taiwan. Edisi yang lebih muda menahan aktivitas tetap berperancah dan non-generatif, dan edisi lanjutan mengizinkan penggunaan generatif terawasi dengan penalaran etis terlampir. Perbedaan antar edisi adalah alat mana yang boleh digunakan pembelajar, bukan seberapa sulit lembar kerjanya. Membangun perbedaan itu ke dalam urutan mata kuliah lebih dapat dibela daripada menerapkan satu kebijakan alat di setiap kelompok tahun.

Pemimpin sekolah dan program dapat memperlakukan klaim "sesuai usia" sebagai pertanyaan dengan tiga bagian: kapasitas mana yang dituntut tugas, tahap mana pembelajar berada, dan bukti apa yang menghubungkan keduanya. Studi resepsi dan dokumentasi vendor jarang menjawab yang ketiga.

Staf pendukung dan keluarga dapat mengawasi apa yang dilakukan mainan AI pada bermain. Perhatikan siapa yang menyediakan cerita. Ketika mainan menentukan plot, anak mengikutinya; ketika mainan menjawab ide anak, anak yang memimpin. Perbedaan itu terlihat dalam beberapa menit pengamatan, dan pada usia ini ia lebih penting daripada cakupan isi mainan.

## Di mana buktinya tipis

Tiga batasan berulang di seluruh studi yang ditinjau di sini.

Yang pertama adalah desain. Sebagian besar studi adalah survei potong lintang atau eksperimen kecil, diukur satu kali. Mereka dapat menunjukkan bahwa kelompok usia berbeda; mereka tidak dapat menunjukkan bahwa AI mengubah trajektori perkembangan. Tinjauan cakupan Niu dan rekan atas AI generatif dan pemikiran kreatif anak menyaring 6.401 catatan dan mempertahankan 24 sumber bukti, basis kecil untuk klaim besar, dan tinjauan itu melaporkannya demikian. Tinjauan integratif atas 118 studi literasi AI K-12 tidak menemukan studi yang mengikuti siswa yang sama lintas jenjang sekolah, sehingga progresi empat pita itu adalah penataan yang disimpulkan dari kohort berbeda alih-alih trajektori yang diamati siapa pun ([[guo-ai-literacy-developmental-paces-2026|Guo et al., 2026]]).

Yang kedua adalah atribusi. Keuntungan belajar yang diukur dengan alat hadir mungkin merupakan kinerja terbantu alih-alih perubahan kapabilitas, dan itu perbedaan yang sama yang memisahkan perancah dari pengembangan.

Yang ketiga adalah waktu. Perkembangan terbentang selama bertahun-tahun, dan alat berubah lebih cepat dari itu. Panduan berbasis usia Compass Collaborative menjadikannya eksplisit: ia menyebut entri-entrinya hipotesis yang dibangun dengan penalaran abduktif dari ilmu perkembangan mapan plus penelitian AI awal, dan mengatakan bukti mapan mungkin butuh satu dekade.

## Masalah pengukuran di balik "sesuai usia"

Dokumen kebijakan dan pengadaan menggunakan "sesuai usia" seolah-olah ia sifat produk. Dalam penelitian, ia relasi antara alat, kapasitas, dan tugas. Pendekatan taksonomi CLARA adalah satu upaya menjadikan relasi itu operasional; penjenjangan buku panduan adalah upaya lain. Keduanya tidak menyelesaikan pertanyaan yang lebih sulit tentang siapa yang menentukan kecukupan, dan tinjauan yang meneliti sumber bertingkat usia mengevaluasi resepsi (831 partisipan dalam studi Wang, Chuang, dan Wu) alih-alih hasil perkembangan.

## Miskonsepsi Umum

- **"Sesuai usia berarti satu label usia."** CLARA memperkirakan tahap dari tuntutan yang diletakkan teks pada kapasitas spesifik, dan dua edisi buku panduan berbeda pada alat yang mereka izinkan, bukan hanya tingkat baca.
- **"Psikologi perkembangan hanya tentang anak kecil."** Masa remaja dan dewasa juga periode perkembangan; literatur ketergantungan dan pengungkapan diri justru tentang remaja karena kapasitas itu masih terbentuk.
- **"Jika dua kelompok usia berbeda, perkembangan menjelaskannya."** Perbedaan usia potong lintang mencampuradukkan kohort, kurikulum, akses perangkat, dan konteks. Hanya desain yang mengikuti siswa yang sama yang dapat memisahkan perubahan dari perbedaan.
- **"Alat yang mendukung kinerja sedang mengembangkan kapasitas."** Kompensasi, perancah, dan pengembangan adalah fungsi berbeda; hanya yang terakhir diharapkan bertahan setelah alat dicabut.
- **"Mainan AI adalah bahan bermain yang netral."** Argumen redistribusi agensi mengatakan sebaliknya: responsivitas mainan membentuk siapa yang sedang berimajinasi.
