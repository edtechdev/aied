---
title: "LearnHarness"
created: "2026-11-02T05:55:00-05:00"
type: resource
summary: "Aplikasi desktop gratis dan open-source (AGPL-3.0) tempat agen AI mengukur apa yang sudah dipahami pembelajar, merencanakan peta ketergantungan menuju tujuan, mengajar satu langkah penalaran sekaligus, dan menyesuaikan latihan — dengan grafik pengetahuan persisten berisi proposisi dan rantai penalaran yang dibaca sesi berikutnya alih-alih memulai dari awal."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**LearnHarness** adalah aplikasi desktop untuk pembelajaran [[agentic-ai|berbantuan agen]] yang mengatur
pelajaran di sekitar [[prior-knowledge|apa yang sudah dipahami pembelajar]] alih-alih di sekitar daftar
topik. Proyek ini menggambarkan empat gerakan: **mengukur**, menyelidiki gagasan yang menjadi sandaran
tujuan untuk menemukan di mana pemahaman berakhir; **merencanakan**, menurunkan peta ketergantungan
menuju tujuan dan menampilkannya sebagai peta pelajaran; **mengajar**, mengerjakan satu langkah penalaran
sekaligus melalui ritme prediksi–penjelasan–pemeriksaan sehingga kebingungan diperbaiki sebelum apa pun
dibangun di atasnya; dan **berlatih**, aliran soal yang diarahkan pada kesulitan pembelajar sendiri.

## Apa yang dapat Anda lakukan dengannya

Masukan yang menjadi cirinya adalah medan pemikiran: pembelajar menulis atau mendiktekan penalaran dan
ketidakpastiannya alih-alih hanya menjawab, yang oleh proyek ini diperlakukan sebagai cara agen
membayangkan penalaran alih-alih sebagai catatan benar/salah. Alat ini juga dapat meneliti pertanyaan di
latar belakang, menghasilkan penjelasan visual dan membangun demonstrasi interaktif.

Yang terakumulasi adalah [[knowledge-graph|grafik pengetahuan]] berisi proposisi dan rantai penalaran,
yang ditautkan kembali ke sesi sumbernya dan dibaca oleh agen pengajaran dan latihan berikutnya sebagai
konteks; catatan dapat diimpor. Proyek ini menyatakan bahwa grafiknya menyimpan gagasan dan koneksi,
bukan penilaian kemampuan.

## Untuk siapa

Pembelajar mandiri yang menggarap materi sulit, serta dosen atau pengembang yang ingin melihat seperti
apa [[intelligent-tutoring|tutor AI]] agent-native ketika prompt dan keadaannya dapat diperiksa. Proyek
ini berbasis TypeScript, dijalankan dari sumber, dan ujinya didokumentasikan sebagai deterministik, tanpa
panggilan model.

## Catatan dan peringatan

Gratis mencakup perangkat lunaknya, bukan inferensinya: pembelajar membawa kunci penyedia, langganan, CLI
Claude Code lokal atau endpoint apa pun yang kompatibel OpenAI, dan membayar penyedianya tanpa markup;
meteran langsung hanya memperkirakan biaya API yang diketahui. Rekaman, obrolan dan kunci tetap di mesin
sebagai berkas biasa, tetapi proyek ini memperingatkan bahwa penyimpanan lokal bukan berarti pemrosesan
offline, karena permintaan model, dikte opsional dan riset web semuanya menjangkau layanan eksternal.
Pemasang Windows x64 tidak ditandatangani, sehingga Windows akan memperingatkan. Tidak ada studi
efektivitas yang dilaporkan, sehingga argumennya bersandar pada alasan yang dinyatakan alih-alih hasil
terukur; repositorinya memiliki sekitar 4.800 bintang saat diperiksa pada 2 November 2026.

## Konsep terkait

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
