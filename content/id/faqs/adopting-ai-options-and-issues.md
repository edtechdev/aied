---
title: "Apa Saja Opsi dan Persoalan yang Perlu Dipertimbangkan Saat Mengadopsi Alat AI?"
created: "2026-11-12T11:30:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-12T17:10:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Seorang ketua departemen memegang tiga penawaran harga untuk platform [[intelligent-tutoring|tutor AI]] dan tenggat hari Jumat. Seorang [[teacher-role|guru]] ingin memakai alat gratis yang sudah dipakai separuh staf. Seorang CIO ditanya apakah institusi sebaiknya menjalankan modelnya sendiri dan tidak dapat mengatakan berapa biayanya.

Ketiganya adalah pertanyaan yang sama pada tiga ketinggian. Pilihannya lebih sedikit daripada yang disiratkan daftar vendor, dan persoalannya bertahan lebih lama daripada produk mana pun.

Pilihan itu harus sesuai dengan keputusan yang ada di depan Anda. Individu memutuskan apa yang dimasukkan ke dalam alat. Institusi memutuskan siapa yang boleh memakai model mana, atas data apa, dengan biaya berapa, dan siapa yang menjawab ketika ada yang salah. Sebagian besar keputusan adopsi yang buruk berasal dari menjawab pertanyaan institusional dengan alat individual.

## Versi singkat

Lima aturan mencakup sebagian besar hal ini. Tetapkan dulu batas data, karena semua hal lain dapat dinegosiasikan ulang dan hal itu tidak. Pilih bentuk terkecil yang cocok: alat gratis atau yang dialihdayakan untuk uji coba, platform terkelola ketika Anda membutuhkan kendali data tanpa GPU, gateway ketika Anda membutuhkan kuota dan perutean, dan inferensi milik sendiri hanya ketika tiga opsi lain gagal. Bandingkan harga per kursi dan harga terukur dengan angka Anda sendiri, karena sebagian besar pemakaian biasanya berasal dari sedikit pengguna berat. Buat jalur yang disahkan lebih cepat daripada jalur yang tidak disetujui, karena EDUCAUSE menemukan 94% staf dan dosen memakai AI untuk pekerjaan, 54% mengetahui kebijakannya, dan 56% memakai alat yang tidak disediakan institusi. Lalu putuskan sejak awal bukti apa yang akan membuat Anda berhenti, karena adopsi tanpa uji keluar akan menjadi permanen secara default.

## Pada tingkat individu

Seorang pengajar atau mahasiswa membuat keputusan data sebelum keputusan pengajaran. Nama mahasiswa, rincian IEP, catatan disipliner, dan penelitian yang belum terbit menciptakan tanggung jawab hukum, jadi redaksi dulu dan periksa apakah alat itu masih menjalankan tugasnya. Lalu baca ketentuannya: retensi, pelatihan atas masukan Anda, dan subprosesor biasanya berada di dokumen yang tidak dibuka siapa pun, dan jika jawabannya tidak ditemukan dalam lima menit, anggap tidak diketahui.

Ketahui apa yang dilakukan alat itu dengan baik. Teks yang dihasilkan paling kuat dalam menyusun draf, menyusun ulang, dan meringkas, serta paling lemah dalam aritmetika, sitasi, dan apa pun yang membutuhkan fakta terkini. Ketahui juga biayanya bagi Anda. Tingkat gratis itu gratis karena pemakaiannya adalah produknya atau karena tingkat itu akan berubah, dan keduanya adalah alasan untuk mengingat jalan keluar.

Dua pertanyaan tersisa. Siapa lagi yang terdampak, karena alat yang membentuk ulang sebuah mata kuliah adalah keputusan bagi mahasiswa di dalamnya. Dan apakah hal itu diizinkan: baca kebijakannya sekali jika ada, dan jika tidak ada, bukti [[shadow-ai]] menunjukkan bahwa Anda sebenarnya sudah membuat kebijakan secara default.

Heuristik blak-blakan: pakai alat yang disahkan ketika itu terjangkau, dan ketika tidak, tuliskan apa yang Anda lakukan dan mengapa. Catatan itulah yang melindungi Anda jika pertimbangan itu dipertanyakan kemudian.

## Pada tingkat institusi

Institusi membeli layanan, aliran data, kewajiban dukungan, dan komitmen politik dalam satu pembelian. Enam bentuk menyusun menu yang sebenarnya, dan sebagian besar institusi berada di dua atau tiga di antaranya tanpa menyadarinya.

Titik awal termudah adalah alat dialihdayakan yang gratis. AI Tutor Pro dari Contact North tidak memerlukan akun, dan Playlab memungkinkan pendidik membangun aplikasi yang berlandaskan [[curriculum-design|kurikulum]] mereka sendiri sementara vendor mengelola modelnya. Keduanya baik untuk uji coba dan buruk sebagai penyelesaian: tidak ada jejak audit, tidak ada kendali kuota, dan ketentuan yang dapat berubah.

Membeli kursi pada penyewa komersial, entah [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot, atau Google Gemini for Education, membawa pengadaan cepat, SSO, dan konsol admin, sekaligus menyerahkan pilihan model dan retensi kepada vendor.

Platform yang Anda kelola sendiri menjaga data tetap lebih dekat. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) diterapkan ke akun AWS Anda sendiri, dan uji coba Vanderbilt melaporkan sekitar \$3 per pengguna per bulan pada 1.300 pengguna, separuhnya di bawah \$1 untuk token. Itu membeli kendali data tanpa GPU.

Gateway di atas penyedia campuran menempatkan satu pintu depan di hadapan beberapa penyedia. Ia membawa kuota, SSO, pencatatan log, dan perutean regional; Fontys menjalankan satu untuk 300 pengguna dengan batas bulanan \$500 yang tidak pernah terlampaui, dan [MindRouter](/aied/resources/mindrouter/) menambahkan penjadwalan berbobot peran serta pengukuran energi.

Inferensi milik sendiri adalah bentuk termahal dan paling mandiri. Dua layanan Purdue mencapai lebih dari 1000 pengguna pada 10+ model [[open-source]] dengan perangkat keras sekitar \$100.000, sebelum biaya staf. Ia menjawab regulator tanpa meminta izin vendor.

Bentuk terakhir adalah AI di dalam alat yang sudah Anda jalankan: tipe soal Moodle, mitra AI platform diskusi, alat umpan balik esai. Beban angkatnya rendah dan perubahannya per mata kuliah, dengan sedikit yang dipelajari di pusat.

## Persoalan yang tidak hilang

[[privacy|Perlindungan data]] ada di urutan pertama. Yang penting adalah catatan mana yang sekarang ada dan sebelumnya tidak, di mana catatan itu berada, dan siapa yang dapat mengambilnya. Alat yang menerima daftar kelas telah menciptakan catatan institusional apa pun yang dikatakan kontrak.

Identitas dan akses menyusul. Apa pun yang dipakai dalam skala besar membutuhkan SSO, akses berbasis peran, dan offboarding, dan alat yang tidak dapat mencabut akses karyawan yang pergi meninggalkan akun yang tetap aktif berisi data Anda.

Biaya bergantung pada bagaimana harga dihitung. Harga per kursi memberi imbalan pada jumlah orang dan harga terukur memberi imbalan pada pemakaian. Karena sebagian kecil pengguna biasanya menghasilkan sebagian besar token, harga per kursi tampak murah sampai pengguna berat pindah ke tempat lain.

Pengukuran biasanya menjadi bagian yang hilang. EDUCAUSE menemukan 92% memiliki strategi AI terkait pekerjaan dan 13% mengukur laba atas investasi. Jika Anda tidak dapat mengatakan apa yang digantikan alat itu, Anda tidak dapat mempertahankan perpanjangannya.

[[equity-in-ai-education|Keadilan]] dan aksesibilitas semestinya ada dalam pengadaan, bukan dalam perbaikan belakangan. Alat yang menuntut koneksi cepat, tingkat berbayar, atau kefasihan bahasa Inggris menyebarkan manfaatnya secara tidak merata.

[[academic-integrity|Integritas akademik]] mengubah apa yang diukur oleh asesmen. Ketika sebuah alat dapat menyelesaikan tugas, tugas itulah yang perlu direvisi.

Kepegawaian dan ketergantungan pada vendor sama pentingnya dengan harga. Setiap bentuk di atas kecuali yang gratis membutuhkan pemilik, dan kegagalan yang biasa adalah membeli bentuk keempat atau kelima lalu mengisinya dengan siapa pun yang sudah sibuk. Tanyakan apa yang terjadi saat perpanjangan, saat perubahan harga, dan saat sebuah model dihentikan; bentuk gateway ada supaya jawabannya adalah perubahan perutean, bukan migrasi.

## Seperti apa tahun pertama yang baik

Pilih dua atau tiga ukuran sebelum apa pun diluncurkan: siapa yang memakainya, untuk apa, berapa biayanya per pengguna aktif, dan apa yang berubah dalam pekerjaan. Uji coba yang tidak dapat menghasilkan angka-angka itu adalah demo dengan anggaran.

Periksa kondisi batasnya pada saat yang sama. Jika alat itu menyentuh catatan mahasiswa, apakah aliran datanya sesuai dengan yang Anda sampaikan kepada kantor privasi? Jika pemakaian tidak terukur, apakah itu karena alatnya tidak dapat melapor atau karena tidak ada yang menanyakannya?

Jaga jalur yang disahkan tetap pendek. Angka EDUCAUSE menunjukkan orang melewati tata kelola karena jalur yang disetujui memakan waktu lebih lama daripada tugasnya. Gateway dengan kartu model dan akses pada hari yang sama adalah instrumen tata kelola sekaligus kemudahan TI.

## Kesalahan umum

Membeli platform sebelum menamai masalahnya menghasilkan statistik pemakaian dan hampir tidak ada lagi. Memperlakukan gratis sebagai strategi berhasil untuk uji coba dan gagal sebagai infrastruktur. Model lokal mengubah siapa yang dapat dipanggil dengan panggilan pengadilan; ia tidak memutuskan apakah prompt disimpan. Mengukur kepuasan alih-alih efek mengubah "guru menyukainya" menjadi temuan yang bukan demikian. Dan kebijakan yang diterbitkan tanpa jalur yang dapat dijalankan menggambarkan preferensi, bukan aturan.
