---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Aplikasi web untuk membangun tugas AI langkah demi langkah, tempat dosen menetapkan peran model dan gerbang pada penggunaan oleh mahasiswa, serta identitas mahasiswa dijauhkan dari konteks model."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Pembangun tugas terintegrasi AI, dibuat oleh Joseph Slade di Oregon State University dan dioperasikan oleh AI Education Labs, Inc. Premisnya adalah bahwa alternatif untuk chatbot tanpa aturan bukanlah larangan melainkan struktur: dosen menentukan langkah-langkah yang dilalui mahasiswa, memutuskan peran apa yang dimainkan model di setiap langkah, dan menetapkan sejauh mana mahasiswa boleh bersandar padanya. Tugas kemudian diterbitkan sebagai tautan untuk bergabung alih-alih dibagikan sebagai dokumen prompt.

## Apa yang dapat Anda lakukan dengannya

- **Tetapkan peran model per tugas.** Pembangun ini menawarkan preset tutor, penanya Sokratik, pemberi umpan balik, dan asisten riset, plus prompt khusus, sehingga asisten berperilaku sesuai yang dibutuhkan tugas.
- **Pasang gerbang di antara langkah.** Sebuah langkah dapat mengharuskan mahasiswa menjelaskan penalarannya sebelum maju, dan bantuan AI dapat dibatasi per langkah — antarmuka menampilkan jumlah sisa alih-alih akses tanpa batas.
- **Pilih permukaan kerja.** Mahasiswa menulis di halaman dokumen dengan komentar di margin, dengan tata letak chat dan notebook tersedia di tempat yang lebih cocok untuk tugas daripada halaman.
- **Terbitkan dan amati penalaran, bukan hanya keluaran.** Tautan untuk bergabung mendaftarkan mahasiswa, kemajuan tersimpan seiring mereka mengerjakan, dan dosen dapat membaca transkrip setiap mahasiswa serta mengekspornya sebagai CSV atau Markdown.
- **Buat draf dengan AI, lalu sempurnakan.** Penyiapan dapat dimulai dari beberapa pertanyaan, tugas yang sudah ada yang diunggah, atau tugas sebelumnya, dengan asisten di sisi dosen yang mengisi draf pertama.

Contoh yang diterbitkan menunjukkan rentang yang dimaksudkan: tugas fisika tentang bukti dan kesaksian, latihan biologi yang mendiagnosis kesalahan penalaran dalam penjelasan seorang intern AI, dan tugas psikologi yang memeriksa apakah sebuah berita menggambarkan desain suatu studi.

## Untuk siapa

Dosen di pendidikan tinggi yang ingin [[learning-design|desain pembelajaran]] memikul kebijakan AI — yaitu, yang lebih memilih membatasi bagaimana model dapat digunakan di dalam tugas daripada mengawasi apakah model itu digunakan. Gerbang dan pengaturan peran adalah ekspresi [[guardrails|pagar pengaman]] pada waktu desain, dan aplikasi ini ditujukan untuk tugas perkuliahan, bukan untuk penerapan chat institusional.

## Catatan dan peringatan

- **Tahap pilot.** Ketentuan menyatakan bahwa layanan saat ini diberikan tanpa biaya untuk pilot dan bahwa paket berbayar dapat diperkenalkan dengan pemberitahuan, serta bahwa fitur dapat berubah atau ditarik. Tidak ada halaman harga publik; Anda baru mencapai harga setelah masuk.
- **Klaim privasi bersifat arsitektural, dan layak dibaca saksama.** Setiap mahasiswa mendapat pengenal sesi acak per tugas, pemetaan dari akun mahasiswa ke sesi tetap berada di server Repertoire, dan model menerima sesi anonim, konteks tugas, dan tulisan mahasiswa. Peringatannya ada dalam kebijakan itu sendiri: teks yang diketik mahasiswa yang mengidentifikasi dirinya dikirim seperti teks lainnya, dan dosen pengampu dapat membaca transkrip.
- **Inferensi pihak ketiga.** Balasan dihasilkan melalui API Claude dari Anthropic dengan API OpenAI sebagai cadangan, di bawah ketentuan komersial yang menurut kebijakan mengecualikan pelatihan pada masukan dan keluaran API per September 2026. Institusi sebaiknya mengonfirmasi hal itu melalui perjanjiannya sendiri, bukan melalui halaman web.
- **Ini bukan penilai.** Kebijakan dan ketentuan sama-sama menggambarkan penilaian asisten seperti "tujuan tercapai" sebagai bantuan bagi dosen; nilai dan keputusan akademik tetap pada dosen dan institusi, dan keputusan tentang [[ai-use-disclosure|pengungkapan penggunaan AI]] kepada mahasiswa diserahkan kepada dosen.
- **Dihosting di AS.** Data berada di Google Cloud Firestore dengan hosting Vercel, dan kebijakan membahas kewajiban FERPA di tempat layanan menangani catatan pendidikan; pengguna di luar Amerika Serikat diberi tahu bahwa data mereka diproses di sana.
