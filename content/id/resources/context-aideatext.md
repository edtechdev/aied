---
title: "conText"
created: "2026-11-12T11:36:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Tutor peramban gratis yang membaca foto buku catatan, PDF, atau teks, lalu menuntun siswa melaluinya secara Sokratik dalam bahasa Inggris atau Spanyol sambil menggambar grafik hidup dari gagasan yang mereka hubungkan saat berbicara."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

conText adalah demonstrasi kecil yang paling bersih dari arah yang banyak dibicarakan [[intelligent-tutoring|tutor AI]] dan jarang diterapkan: model tidak menjawab pertanyaan siswa, ia mengajukan pertanyaan berikutnya, dan gagasan siswa digambar sebagai grafik saat mereka berbicara. Unggah foto halaman buku catatan, PDF, atau teks, dan alat ini pertama-tama mengatakan apa yang ia pahami, lalu memulai dialog [[socratic-method|Sokratik]] lisan. Setiap gagasan yang disebut siswa muncul sebagai simpul dalam [[knowledge-graph|graf pengetahuan]] hidup; sisi muncul saat percakapan menghubungkannya, dan panel melaporkan berapa banyak gagasan yang masih belum terhubung.

## Apa yang dapat Anda lakukan dengannya

Lingkarnya sengaja pendek. Materi masuk (hingga 10 MB, delapan halaman PDF, atau 15.000 karakter teks), tutor membacakannya kembali, dan percakapan berlangsung dengan suara — situs menyatakan tutor tidak menilai dan tidak menulis untuk siswa. Grafik adalah artefak yang membuat sesi itu bernilai setelahnya: ia menunjukkan gagasan mana yang benar-benar dihubungkan siswa dan mana yang tetap lepas, yang jauh lebih spesifik untuk ditinjau daripada transkrip obrolan. Sesi dapat diekspor sebagai berkas XML grafik dan diunggah kembali di hari lain untuk dilanjutkan, dan tombol hapus menghapusnya segera; jika tidak, server membuangnya setelah satu jam.

Kombinasi itu — tutor yang menahan jawaban, ditambah catatan visual penalaran — sepenuhnya berada dalam apa yang coba dicapai [[scaffolding|perancah]] dan refleksi [[metacognition|metakognitif]], dan ia memberi guru sesuatu yang konkret untuk ditanyakan alih-alih esai jadi atau angka yang benar. Bingkai situs itu sendiri adalah bahwa hasil yang benar tidak lagi membuktikan pemahaman setelah AI generatif dapat menghasilkannya, jadi prosesnya harus terlihat.

## Untuk siapa

Mahasiswa yang mengerjakan bacaan atau set soal dan ingin ditanya alih-alih dijawabkan, guru yang menginginkan pemeriksaan berisiko rendah apakah seorang siswa dapat menghubungkan gagasan, dan pengembang fakultas yang mencari contoh konkret bukti proses. Guru memiliki panduan selaras kurikulum dalam bahasa Inggris, Spanyol, Portugis, dan Prancis; alatnya sendiri berjalan dalam bahasa Inggris dan Spanyol, dan video panduannya dalam bahasa Spanyol.

## Catatan dan peringatan

Tidak ada harga atau akun yang dipublikasikan untuk alat yang menghadap siswa, sementara penerapan institusional — cloud, on-premises, atau hibrida — ditawarkan melalui proposal khusus dan pertemuan; perlakukan "gratis" sebagai keadaan demo publik pada November 2026, bukan jaminan. Teks dan gambar dikirim ke layanan terkelola yang ditenagai Claude, dan situs itu sendiri meminta pengguna menghapus nama, jumlah, alamat, dan nama perusahaan sebelum mengunggah, yang mengalihkan beban de-identifikasi kepada orang yang mengunggah alih-alih platform. Sesi menghapus dirinya sendiri setelah satu jam kecuali diekspor. Perusahaan di belakangnya juga memasarkan platform asesmen grafik penalaran yang lebih luas kepada institusi, dan klaimnya tentang membedakan grafik deduktif, induktif, abduktif, dan analogis berasal dari empat teks rujukan — situs menyebutnya demonstrasi, dengan validasi dalam skala besar masih menyusul.

## Konsep terkait

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
