---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Server MCP sumber terbuka yang memungkinkan Claude, Cursor, Codex dan agen lain membaca serta bertindak di dalam Canvas LMS — alat untuk siswa, pendidik dan perancang pembelajaran, dengan tindakan tulis dibatasi dan anonimisasi opsional untuk data siswa."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Canvas MCP** adalah server Model Context Protocol sumber terbuka karya Vishal Sachdev yang menghubungkan klien AI ke instans Canvas LMS: agen dapat mendaftar pekerjaan mendatang seorang siswa, membaca tugas dan kiriman sebuah mata kuliah, mengirim pesan ke satu kelas, atau mengaudit sebuah mata kuliah untuk aksesibilitas, semuanya melalui alat yang diekspos server alih-alih scraping layar ad hoc.

## Apa yang dapat Anda lakukan dengannya

Server ini membawa tiga keluarga alat. Alat siswa menjawab "apa yang jatuh tempo minggu ini", "apakah saya sudah mengirim semuanya", "berapa sisa percobaan kuis saya" terhadap endpoint `self` milik Canvas sendiri. Alat pendidik mendaftar dan membuat tugas, membaca kiriman, menilai secara massal, mengirim percakapan dan menarik analitik tugas. Alat perancang pembelajaran mencakup pemeriksaan kualitas mata kuliah dan pemindaian aksesibilitas WCAG. Hingga 128 alat tersedia secara total, meskipun profil bawaan mendaftarkan lebih sedikit dan alat yang dibatasi fitur menaikkan jumlahnya. Di atas alat-alat itu, delapan skill agen mengemas resep multi-langkah — rencana mingguan, pemeriksaan kesehatan mata kuliah pagi hari, pohon keputusan penilaian massal, pipeline tinjauan sejawat, audit mata kuliah pra-semester — yang dapat dipasang ke lebih dari 40 agen melalui `skills.sh`.

## Untuk siapa

Dosen yang menginginkan agen menangani pembacaan dan pengiriman pesan rutin seputar mata kuliah, dan [[institutional-ai-infrastructure|tim institusional]] yang mengevaluasi apa yang sebenarnya dapat dijangkau agen yang terhubung ke LMS. Perancang pembelajaran mendapatkan hal yang paling mendekati tinjauan mata kuliah otomatis di sini. Proyek ini adalah contoh nyata [[agentic-ai|perkakas agentik]] pada tingkat LMS satu institusi alih-alih chatbot generik.

## Catatan dan peringatan

Penyiapannya lokal: Python 3.11 atau lebih baru, token dan URL API Canvas, dan klien MCP, dengan ekstensi yang dapat diklik dua kali untuk Claude Desktop. Server publik yang dihosting telah dihentikan, sehingga penerapan bersama berarti menghosting sendiri di belakang autentikasi institusi sendiri. Alat tulis dibatasi — server HTTP bersifat hanya-baca kecuali alat tulis diizinkan secara eksplisit, penghapusan memerlukan token konfirmasi, dan eksekusi kode berjalan di sandbox yang gagal tertutup. Kontrol privasi bersifat opsional: anonimisasi respons, penyamaran surel dan penyaringan PII harus diaktifkan, dan README berhati-hati bahwa hal itu dapat mendukung kewajiban FERPA tanpa menetapkan kepatuhan, yang bergantung pada penerapan dan penyedia AI. Tidak ada telemetri di server, tetapi Canvas dan klien yang dipilih menyimpan lognya sendiri. Proyek ini berlisensi MIT, aktif dikembangkan, dan panduannya sendiri adalah otoritas atas nama alat dan konfigurasi terkini.
