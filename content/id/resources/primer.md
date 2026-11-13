---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Sistem penulisan sumber terbuka dari Wharton Generative AI Labs yang mengubah wawancara terstruktur dengan seorang pendidik menjadi simulasi pembelajaran adaptif yang dapat dijalankan, lengkap dengan agen mentor, latihan, dan umpan baliknya sendiri."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Primer adalah [[open-source|sistem sumber terbuka]] untuk membangun [[simulation|simulasi]] pendidikan dengan mendeskripsikan sebuah pelajaran kepada AI alih-alih memprogramnya. Pertimbangan pendidik menentukan apa yang diajarkan simulasi: wawancara menggali apa yang diketahui pengajar tentang pelajaran dan siswa, dokumen desain membuat pengetahuan itu dapat ditinjau, dan tidak ada yang dibangun sampai pendidik menyetujuinya.

## Apa yang dapat Anda lakukan dengannya

Wawancara berjalan satu pertanyaan setiap kali: pelajarannya, tingkat dan pengetahuan awal siswa, miskonsepsi umum, pendekatan pengajar, dan bagaimana keberhasilan akan dinilai. Pendidik dapat berbicara atau mengetik, dan dapat mengunggah silabus, rencana pelajaran, atau rubrik. Yang kembali adalah dokumen desain yang mencakup tujuan, alur skenario, karakter, taruhan, dan logika adaptasi, yang direvisi dan disetujui pendidik sebagaimana mereka menyetujui rencana pelajaran. Lima agen kemudian membangunnya: Intake, Design, Casting Director, Image Generation, dan Experience Builder, yang merakit hasilnya untuk satu siswa atau seluruh kelas.

Saat berjalan, tiga agen menghadapi siswa. Seorang mentor mengaktifkan pengetahuan awal dan memunculkan miskonsepsi. Agen latihan memainkan lawan main roleplay atau tutee teachback, di mana siswa menjelaskan sebuah konsep dan merevisi penjelasannya saat ditanya. Agen umpan balik bekerja dari transkrip, membahas momen tertentu dan bagaimana pembelajaran berlanjut di luar skenario. Setiap agen memiliki karakter di dalam dunia dan lapisan instruksional yang melacak tujuan dan mengumpulkan bukti, dan pendidik menerima laporan individual serta agregat.

## Untuk siapa

Pengajar, perancang pembelajaran, dan pengembang fakultas dapat mendeskripsikan pelajaran secara rinci tanpa ingin menulis kode untuknya. Peneliti yang mempelajari kepengarangan dengan pendidik dalam lingkar atau [[agentic-ai|alur kerja multi-agen]] mendapatkan sistem yang berfungsi untuk diperiksa, dan pengembang dapat memperluasnya, karena prompt, templat, daftar periksa, pola orkestrasi, dan kode TypeScript semuanya sumber terbuka.

## Catatan dan peringatan

Para penulis menyebut Primer sebagai prototipe eksperimental, bukan produk kelas yang sudah teruji. Ini belum dievaluasi sebagai intervensi pembelajaran di kelas, dan belum ada yang meninjaunya untuk FERPA, COPPA, hukum privasi siswa negara bagian, atau kebijakan distrik, sehingga institusi yang menggunakannya bersama siswa bertanggung jawab atas tinjauan itu. Perangkat lunaknya berlisensi MIT dan gratis, tetapi menjalankan simulasi membutuhkan akses model, yang berbiaya. Karena agnostik model dan berjalan pada model lokal atau berbobot terbuka, ini dapat diterapkan di tempat yang aturan privasinya lebih ketat. White paper tentang arsitektur dan prompt tertaut dari halaman proyek. Repositori memiliki 98 bintang dan 16 fork saat diperiksa pada November 2026.

## Konsep terkait

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
