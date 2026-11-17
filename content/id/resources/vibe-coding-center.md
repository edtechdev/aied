---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Panduan lapangan pendidik untuk membangun situs pendidikan statis dengan asisten pengkodean AI: tiga berkas instruksi Markdown untuk desain, keamanan dan privasi siswa, dengan panduan yang dapat dibaca dan bundel yang dapat diunduh."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**The Vibe-Coding Center** adalah panduan lapangan gratis Miguel Guhlin bagi guru yang ingin [[vibe-coding|vibe coding]] situs pendidikan statis kecil dengan asisten pengkodean AI — tiket keluar, kuis, portofolio kelas — tanpa ikut menerbitkan kunci API yang terbuka atau data siswa.

## Apa yang dapat Anda lakukan dengannya

Tiga berkas instruksi membawa panduannya: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` dan `securevcc.md`. Unduh ketiganya ke akar proyek, lengkapi templat ringkas proyek, lalu minta asisten membaca dan menerapkan ketiganya; panduannya eksplisit bahwa kehadiran bukanlah aktivasi, jadi berkasnya harus disebutkan dalam permintaan. Panduan yang dapat dibaca menjelaskan masing-masing, termasuk penelusuran "Tiga Pemeriksaan Esensial Sebelum Anda Membagikan": kumpulkan lebih sedikit data siswa, periksa kunci API yang terbuka, dan sesuaikan desain sebuah alat dengan tugas belajarnya. Bundel lengkap menambahkan situs itu sendiri, paket prompt, tinjauan peluncuran dan skrip pembangunan ulang, dengan manifes SHA-256 untuk unduhannya.

Halaman [contoh EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) pendamping menunjukkan hasilnya sebagai alat statis yang berfungsi alih-alih tangkapan layar: generator tiket keluar yang menulis pertanyaan pada level Taksonomi SOLO pilihan, portofolio siswa yang merupakan satu berkas HTML di GitHub Pages, dan pustaka sumber pengembangan profesional yang dapat dicari, semuanya berjalan di sisi klien tanpa login LMS.

## Untuk siapa

Guru dan [[learning-design|perancang pembelajaran]] di K-12 dan pendidikan tinggi yang dapat mendeskripsikan alat yang mereka inginkan dan bersedia memeriksa apa yang dihasilkan asisten. Ini juga cocok untuk departemen yang menginginkan satu daftar periksa bersama sebelum siapa pun menerbitkan alat yang menghadap siswa, dan untuk dosen yang mengajarkan [[ai-literacy|literasi AI]] melalui pembangunan alih-alih kritik.

## Catatan dan peringatan

Pusat ini adalah panduan, bukan produk kepatuhan: situs tidak membuat klaim kesesuaian untuk target WCAG 2.2 AA-nya sendiri, menjawab "apakah penggunaan berkas ini membuat situs saya patuh?" dengan tidak, dan menyatakan bahwa tinjauan engineering tidak menggantikan otorisasi sekolah atau tinjauan hukum. Rak keamanannya menunjuk ke axe-core, Gitleaks, ZAP dan Playwright; itu adalah rujukan alih-alih perangkat lunak yang dibundel, dan yang invasif dimaksudkan untuk target sekali pakai atau yang diotorisasi secara eksplisit. Membaca tidak memerlukan akun. Membangun ulang halaman HTML memerlukan Python dan `markdown-it-py`, yang merupakan dependensi build dan bukan dependensi pengunjung. Repositori berlisensi MIT, sementara karya seni pihak ketiga dan proyek yang ditautkan mempertahankan ketentuannya sendiri, didokumentasikan dalam `CREDITS.md`.

## Konsep terkait

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
