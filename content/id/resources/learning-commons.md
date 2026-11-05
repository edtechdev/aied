---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Infrastruktur AI terbuka dari inisiatif pendidikan Mark Zuckerberg dan Priscilla Chan: sebuah knowledge graph tentang standar, kurikulum, dan data ilmu pembelajaran, evaluator untuk menilai keluaran LLM, serta keterampilan agen yang agnostik model untuk alur kerja guru."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Learning Commons** adalah inisiatif pendidikan Mark Zuckerberg dan Priscilla Chan, diluncurkan pada 2025 untuk membawa kerja ilmu pembelajaran Chan Zuckerberg Initiative ke dalam infrastruktur yang sebenarnya menjadi fondasi produk edtech. Argumennya bersifat infrastruktural, bukan pedagogis: riset sudah ada, standar akademik sudah ada, dan kurikulum berkualitas tinggi sudah ada, tetapi semuanya berada dalam sistem terpisah, sehingga pengembang membangun di atas apa pun yang paling mudah dijangkau. Organisasi ini menerbitkan tiga alat terbuka di GitHub — sebuah Knowledge Graph, sekumpulan Evaluators, dan [[agentic-ai|Agent Skills]] — serta mengoperasikan platform yang menambahkan Curriculum Sync untuk memuat kurikulum ke dalam [[edtech-platform|sistem manajemen pembelajaran]].

## Apa yang bisa Anda lakukan dengannya

**Knowledge Graph** memodelkan standar akademik, kurikulum, dan riset ilmu pembelajaran sebagai entitas dan relasi di bawah satu skema bersama, sehingga sebuah alat dapat menyelaraskan konten yang dihasilkan dengan sebuah standar tanpa membangun pipeline data sendiri. **Evaluators** mengukur atribut [[llm|keluaran LLM]] melalui lensa ilmu pembelajaran — kompleksitas teks, [[feedback]], keselarasan dengan standar akademik, dan keterampilan yang tahan lama — dan disertai SDK Python serta TypeScript, yang diterbitkan di npm dan PyPI, untuk menilai konten yang dihasilkan atau membandingkan kandidat model. **Agent Skills** mengemas instruksi, referensi, dan rambu pengaman untuk alur kerja guru yang umum dalam format terbuka yang agnostik model: pemeriksaan pemahaman, diferensiasi pelajaran berjenjang, rencana pelajaran selaras standar, dan persiapan pelajaran. Dalam praktiknya, graph-lah yang membuat dua alat lainnya kredibel: keselarasan konten adalah klaimnya, dan graph adalah rujukan yang dipakai untuk mengujinya.

## Untuk siapa

Pengembang yang membangun fitur AI ke dalam produk [[curriculum-design|kurikulum]] dan asesmen, serta tim kurikulum atau standar yang memasok data yang menjadi acuan produk tersebut. Pengajar dapat menggunakan keterampilan agen itu sendiri, tetapi pembingkaian repositori ini adalah infrastruktur bagi orang-orang yang merilis alat.

## Catatan dan peringatan

Terbuka dalam hal [[open-source|sumber]] tidak membuat datanya terbuka. Kode Knowledge Graph berlisensi MIT, sementara setiap dataset membawa label aksesnya sendiri — Open, Open + Gated, atau Gated — dan konten Gated secara eksplisit tidak dicakup lisensi terbuka yang dikutip repositori, jadi periksa katalog dataset sebelum mengasumsikan hak penggunaan ulang. Kode evaluator berlisensi MIT dan konten prompt-nya CC BY 4.0, tetapi korpus beranotasi CLEAR dan PERSUADE 2.0 yang digunakannya berlisensi CC BY-NC-SA 4.0. Platform dan dataset di baliknya memerlukan akun. Aktivitas repositori per pembacaan 2026-11-04: 167 bintang untuk Knowledge Graph, 88 untuk Evaluators, 41 untuk Agent Skills. Inisiatif ini didanai oleh CZI, dan pembingkaian masalahnya adalah milik pendananya sendiri.

## Konsep terkait

- [[curriculum-design]] — graph ini ada untuk menyelaraskan konten yang dihasilkan dengan standar dan kurikulum
- [[open-source]] — kode MIT dan Apache-2.0 dengan lisensi data per dataset
- [[educational-nlp]] — evaluator adalah lapisan pengukuran teks di atas keluaran LLM
- [[agentic-ai]] — keterampilan yang mengemas alur kerja agar dapat dijalankan oleh model
- [[edtech-platform]] — Curriculum Sync memuat kurikulum ke dalam sistem manajemen pembelajaran
- [[llm]] — sasaran evaluasi dan konsumen keterampilan tersebut
