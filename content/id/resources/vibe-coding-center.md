---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Panduan lapangan pendidik untuk membangun situs pendidikan statis dengan asisten pengkodean AI: empat berkas instruksi Markdown untuk desain, keamanan, privasi siswa dan perbaikan, plus pustaka keterampilan siap agen dan bundel yang dapat diunduh."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-24"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-24T09:45:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**The Vibe-Coding Center** adalah panduan lapangan gratis Miguel Guhlin bagi guru yang ingin [[vibe-coding|vibe coding]] situs pendidikan statis kecil dengan asisten pengkodean AI — tiket keluar, kuis, portofolio kelas — tanpa ikut menerbitkan kunci API yang terbuka atau data siswa.

## Apa yang dapat Anda lakukan dengannya

Empat berkas instruksi membawa panduannya: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md`, `securevcc.md`, dan panduan keempat yang lebih baru, Vibe-Code Rescue, untuk menstabilkan proyek yang terus rusak. Unduh keempatnya ke akar proyek beserta `PROJECT_BRIEF.md` lengkap yang mencatat apa yang Anda bangun dan siapa yang dilayani, lalu minta asisten membaca dan menerapkan keempatnya; panduannya eksplisit bahwa kehadiran bukanlah aktivasi, jadi berkasnya harus disebutkan dalam permintaan. Panduan yang dapat dibaca menjelaskan masing-masing, termasuk penelusuran empat pemeriksaan sebelum Anda membagikan: kumpulkan lebih sedikit data siswa, periksa kunci API yang terbuka, sesuaikan desain sebuah alat dengan tugas belajarnya, dan reproduksi serta perbaiki bug sebelum mempercayai perbaikannya.

Di samping panduan-panduan itu ada pustaka 25 keterampilan yang dapat dipakai ulang mencakup alur kerja belajar, menulis, bukti dan pengembangan aplikasi, masing-masing disediakan sebagai Markdown dengan prompt penyiapan dan prompt pemakaian, serta sketsa konsep dan ilustrasi hero yang menyarankan alih-alih menyediakan aplikasi jadi. Setiap keterampilan juga dapat dibuat di dalam sebuah proyek sebagai agent skill. Bundel lengkap memuat empat panduan utama, 29 berkas keterampilan siap agen dengan menghitung panduan-panduan itu sendiri, berkas referensi dan provenans SecureVCC, contoh penunjuk untuk AGENTS.md dan CLAUDE.md, karya hero dan kedua penjelas visual, serta sumber situs dengan skrip tinjauan sumber dan pembangunan ulang. Manifes SHA-256 disertakan di samping unduhan, dan membaca tidak memerlukan akun.

Halaman [contoh EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) pendamping menunjukkan hasilnya sebagai alat statis yang berfungsi alih-alih tangkapan layar: generator tiket keluar yang menulis pertanyaan pada level Taksonomi SOLO pilihan, portofolio siswa yang merupakan satu berkas HTML di GitHub Pages, dan pustaka sumber pengembangan profesional yang dapat dicari, semuanya berjalan di sisi klien tanpa login LMS.

## Untuk siapa

Guru dan [[learning-design|perancang pembelajaran]] di K-12 dan pendidikan tinggi yang dapat mendeskripsikan alat yang mereka inginkan dan bersedia memeriksa apa yang dihasilkan asisten. Ini juga cocok untuk departemen yang menginginkan satu daftar periksa bersama sebelum siapa pun menerbitkan alat yang menghadap siswa, dan untuk dosen yang mengajarkan [[ai-literacy|literasi AI]] melalui pembangunan alih-alih kritik.

## Catatan dan peringatan

Pusat ini adalah panduan, bukan produk kepatuhan: situs tidak membuat klaim kesesuaian untuk target WCAG 2.2 AA-nya sendiri, menjawab "apakah penggunaan berkas ini membuat situs saya patuh?" dengan tidak, dan menyatakan bahwa tinjauan engineering tidak menggantikan otorisasi sekolah atau tinjauan hukum. Rak keamanannya menunjuk ke axe-core, Gitleaks, ZAP dan Playwright; itu adalah rujukan alih-alih perangkat lunak yang dibundel, dan yang invasif dimaksudkan untuk target sekali pakai atau yang diotorisasi secara eksplisit. Membaca tidak memerlukan akun. Membangun ulang halaman HTML memerlukan Python dan `markdown-it-py`, yang merupakan dependensi build dan bukan dependensi pengunjung. Repositori berlisensi MIT, sementara karya seni pihak ketiga dan proyek yang ditautkan mempertahankan ketentuannya sendiri, didokumentasikan dalam `CREDITS.md`.
