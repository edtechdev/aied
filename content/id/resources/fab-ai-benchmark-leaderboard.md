---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Papan peringkat model untuk tolok ukur pendidikan yang menyasar negara berpendapatan rendah dan menengah, mencakup pedagogi, literasi dasar, SEND, matematika visual, dan kinerja multibahasa, dengan kolom harga dan bobot terbuka."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Fab AI mengevaluasi model pada tugas-tugas pendidikan yang penting di tempat anggaran, bandwidth, dan cakupan bahasa terbatas, yaitu di [[global-south|negara berpendapatan rendah dan menengah]] yang menjadi sasaran tolok ukur ini, dan menerbitkan hasilnya sebagai papan peringkat yang dapat diurutkan alih-alih makalah. Tabel intinya memberi skor pada tolok ukur pedagogi bersama SEND, matematika visual, dan penalaran visual, dengan tab terpisah untuk pedagogi multibahasa, literasi dasar, dan penilaian membaca nyaring.

## Apa yang dapat Anda lakukan dengannya

Bandingkan sekitar 300 model pada skor pedagogi yang saat ini berkisar dari awal sembilan puluhan turun hingga 21%, lalu urutkan berdasarkan apa yang benar-benar harus ditimbang kementerian pendidikan: harga per juta token, jumlah parameter, bobot terbuka, dan tanggal rilis. Sebaran di bagian bawah adalah bagian yang berguna. Model terbuka sub-2B berada di antara 21% dan 43% pada tolok ukur pedagogi sementara model frontier berada di awal sembilan puluhan, yang mengubah "bisakah kami menjalankan ini secara offline di perangkat keras murah" menjadi trade-off yang terkuantifikasi alih-alih tebakan.

Tab pedagogi [[multilingual-learning|multibahasa]] adalah alasan untuk menandai halaman ini. Sebagian besar tolok ukur pendidikan hanya berbahasa Inggris, dan pertanyaan apakah pedagogi suatu model bertahan setelah diterjemahkan adalah persis pertanyaan yang perlu dijawab oleh kementerian dalam sistem multibahasa. Datanya dapat diunduh sebagai CSV, sehingga perbandingan dapat dijalankan ulang secara lokal.

## Untuk siapa

Pembuat kebijakan dan tim pengadaan yang memilih model untuk sistem nasional, peneliti yang mempelajari [[digital-divide|kesenjangan akses]] dalam pendidikan yang didukung AI, dan pengembang yang membutuhkan target pedagogi yang bukan ujian berbahasa Inggris.

## Catatan dan peringatan

Papan peringkat mengukur model pada tugas-tugas tolok ukur itu sendiri: skor pedagogi tinggi adalah bukti tentang butir-butir tersebut, bukan tentang kelas. Kolom harga mencampurkan harga token input dan output pada rasio 3:1, yang merupakan pilihan pemodelan dan bukan biaya penerapan tertentu mana pun. Cakupan bahasa dan model yang dihosting secara lokal bergerak seiring munculnya model baru, dan skor rendah untuk model kecil sebagian mencerminkan format tugas sama banyaknya dengan kemampuan. Pembingkaian Fab AI secara eksplisit tentang negara berpendapatan rendah dan menengah, sehingga kumpulan butir tolok ukur mencerminkan konteks tersebut dan tidak boleh dibaca sebagai peringkat pendidikan umum. Periksa tanggal rilis: beberapa entri lebih tua dari generasi model saat ini.

## Konsep terkait

- [[benchmark]] — kelas instrumen lebih luas tempat tolok ukur ini berada
- [[digital-divide]] — kendala yang hendak dibuat terlihat oleh kolom harga dan bobot terbuka
- [[equity-in-ai-education]] — pertanyaan kebijakan yang diinformasikan oleh papan peringkat ini
