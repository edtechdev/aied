---
title: "Claw-ED"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Asisten pengajar AI local-first yang mengubah kurikulum Anda sendiri menjadi draf pelajaran, materi siswa, dan slide yang dapat diedit, memakai model pilihan Anda."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Claw-ED** adalah asisten pengajar local-first yang menyusun draf pelajaran dari materi kurikulum
Anda sendiri. Guru mengimpor sumbernya, meminta sebuah pelajaran, lalu menerima draf yang dapat diedit
beserta materi untuk siswa dan slide, dihasilkan dengan model apa pun yang dipilih guru alih-alih satu
vendor tetap.

## Apa yang dapat Anda lakukan dengannya

Alur kerjanya berjalan dari impor melalui draf, tinjauan, dan ekspor, dan draf diperlakukan sebagai
titik awal yang diedit guru alih-alih bahan ajar jadi. Pekerjaan pelajaran diantrekan dan dapat
dipulihkan, sehingga generasi panjang yang gagal dapat dilanjutkan alih-alih diulang dari awal, dan
artefak yang dihasilkan dapat diunduh. Alat ini juga mengekspos perangkatnya ke [[agentic-ai|agen]]
melalui server MCP dan dapat terhubung ke Google Drive, sehingga sekolah dapat menyambungkannya ke
penyimpanan dan penjadwalan yang sudah ada.

Proyek ini sengaja agnostik model. Dokumentasinya memaparkan model Ollama lokal, rute OpenRouter yang
hemat biaya, dan opsi hosted berdampingan, dan panduan modelnya diberi tanggal, yang memperjelas bahwa
rekomendasinya adalah titik awal berbasis katalog alih-alih penilaian kualitas oleh guru.

## Catatan dan peringatan

Perangkat lunaknya gratis dan [[open-source|open source]] di bawah lisensi MIT untuk kode aslinya,
meskipun komponen pihak ketiga mempertahankan ketentuannya sendiri, dan menjalankannya berarti
membayar inferensi model Anda sendiri jika Anda memakai model hosted. Proyek ini menyebut dirinya beta
yang ditinjau guru dan menyatakan terus terang di README-nya bahwa lolos CI tidak menetapkan kualitas
pengajaran pada model langsung, yang merupakan cara tepat membaca rangkaian uji hijau di bidang ini: CI
memverifikasi perangkat lunaknya, bukan [[pedagogy|pedagoginya]]. Proyek ini dikelola MacxLabs dan
menerima contoh pelajaran yang ditinjau guru sebagai kontribusi.

## Konsep terkait
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
