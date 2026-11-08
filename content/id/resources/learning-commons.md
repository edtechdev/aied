---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Infrastruktur AI terbuka untuk produk pendidikan: knowledge graph tentang standar dan kurikulum, evaluator untuk menilai keluaran LLM, keterampilan agen yang agnostik model untuk alur kerja guru, dan Curriculum Sync untuk memuat kurikulum ke dalam sistem manajemen pembelajaran."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Learning Commons** menerbitkan tiga alat terbuka untuk menambahkan fitur AI di atas konten kurikulum yang nyata — sebuah **[[knowledge-graph|Knowledge Graph]]** tentang standar akademik, kurikulum, dan riset ilmu pembelajaran, pustaka **Evaluators** untuk menilai teks yang dihasilkan, dan **[[agentic-ai|Agent Skills]]** yang agnostik model untuk alur kerja guru yang umum — serta menjalankan platform yang menambahkan Curriculum Sync untuk memuat kurikulum ke dalam [[edtech-platform|sistem manajemen pembelajaran]].

## Apa yang bisa Anda lakukan dengannya

**Selaraskan konten yang dihasilkan dengan sebuah standar.** Knowledge Graph memodelkan standar, [[curriculum-design|kurikulum]], dan riset sebagai entitas dan relasi di bawah satu skema bersama. Sebuah produk dapat mencari standar yang harus menjadi sasaran suatu item, menelusuri relasi prasyarat, atau mendasarkan konten tutor pada kurikulum yang seharusnya diajarkan, tanpa membangun dan merawat pipeline data sendiri.

**Nilai keluaran yang dihasilkan sebelum dilihat siswa.** **Evaluators** mengukur atribut [[llm|keluaran LLM]] — kompleksitas teks, [[feedback]], keselarasan dengan standar, dan keterampilan yang tahan lama — dan tersedia sebagai SDK Python dan TypeScript di npm dan PyPI. Dalam praktiknya alat ini berfungsi sebagai pemeriksaan regresi ketika prompt atau model berubah, sebagai perbandingan antar kandidat model, atau sebagai penyaring pada item dan penjelasan yang dihasilkan.

**Kemas alur kerja guru.** **Agent Skills** mengemas instruksi, referensi, dan rambu pengaman dalam format terbuka yang agnostik model: pemeriksaan pemahaman, diferensiasi pelajaran berjenjang, rencana pelajaran selaras standar, dan persiapan pelajaran. Semuanya dapat dimasukkan ke dalam kerangka kerja agen atau dibaca sebagai templat kerja tentang seberapa banyak struktur yang dibutuhkan alur kerja kelas yang andal.

**Pindahkan kurikulum ke sistem manajemen pembelajaran.** Curriculum Sync adalah langkah platform yang mengubah peta standar menjadi sesuatu yang benar-benar dapat dipakai sebuah kursus di LMS.

## Untuk siapa

Pengembang yang membangun fitur AI ke dalam produk kurikulum dan [[assessment|asesmen]], serta tim kurikulum atau standar yang memasok data yang menjadi acuan produk tersebut. [[teacher-role|Pengajar]] dapat menggunakan Agent Skills sendiri, tetapi pembingkaian repositori ini adalah infrastruktur bagi orang-orang yang merilis alat.

## Catatan dan peringatan

Terbuka dalam hal [[open-source|sumber]] tidak membuat datanya terbuka. Kode Knowledge Graph dan Evaluator berlisensi MIT dan Agent Skills Apache-2.0, sementara setiap dataset membawa label aksesnya sendiri — Open, Open + Gated, atau Gated — dan konten Gated tidak dicakup lisensi terbuka yang dikutip repositori, jadi periksa katalog dataset sebelum mengasumsikan hak penggunaan ulang. Konten prompt Evaluator berlisensi CC BY 4.0, tetapi korpus beranotasi CLEAR dan PERSUADE 2.0 yang digunakannya berlisensi CC BY-NC-SA 4.0. Platform dan dataset di baliknya memerlukan akun.

## Konsep terkait

- [[curriculum-design]] — graph ini ada untuk menyelaraskan konten yang dihasilkan dengan standar dan kurikulum
- [[open-source]] — kode MIT dan Apache-2.0 dengan lisensi data per dataset
- [[educational-nlp]] — evaluator adalah lapisan pengukuran teks di atas keluaran LLM
- [[agentic-ai]] — keterampilan yang mengemas alur kerja agar dapat dijalankan oleh model
- [[edtech-platform]] — Curriculum Sync memuat kurikulum ke dalam sistem manajemen pembelajaran
- [[llm]] — sasaran evaluasi dan konsumen keterampilan tersebut
