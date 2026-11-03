---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Dialek Markdown terbuka yang mengubah berkas teks biasa menjadi mata kuliah interaktif di peramban, dengan kuis dan kode yang dapat dijalankan, plus asisten multi-agen untuk membangun mata kuliah dengannya."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**LiaScript** adalah dialek Markdown yang diperluas plus interpreter untuknya. Satu berkas teks biasa
menjadi mata kuliah interaktif: dokumen yang sama dapat dibaca sebagai narasi, diputar sebagai slide,
atau dikerjakan sebagai mata kuliah, semuanya di peramban. Tidak ada yang perlu dipasang untuk menulis
atau membacanya.

## Apa yang dapat Anda lakukan dengannya

Kuis hadir dalam bentuk yang diharapkan guru, termasuk pilihan ganda, pertanyaan matriks, masukan teks,
dropdown dan teks rumpang, ditulis langsung dalam Markdown. Blok kode dapat dibuat dapat diedit dan
dijalankan untuk tutorial [[cs-education|pemrograman]], dan sistem makro membungkus pustaka JavaScript
menjadi blok yang dapat dipakai ulang sehingga diagram interaktif tidak memerlukan kode dari setiap
penulis. Mata kuliah dihosting di mana pun penulisnya sudah menyimpan teks, tanpa layanan yang mengikat,
dan semuanya berjalan di sisi klien, sehingga mata kuliah yang sudah dimuat bekerja offline. LiaScript
Exporter mengemasnya sebagai SCORM untuk Moodle, ILIAS, dan [[edtech-platform|sistem manajemen
pembelajaran]] lain.

## Agen pengajar untuk membangun mata kuliah

Proyek ini juga menerbitkan **[agen pengajar](https://github.com/LiaScript/teaching-agent)** untuk menulis
mata kuliah LiaScript, berlisensi Boost Software License 1.0. Empat agen untuk pengajaran, desain visual,
tinjauan pembelajar, dan penerbitan bekerja di sekitar satu berkas proyek yang menyimpan keadaan mata
kuliah, dengan alur kerja yang mendahulukan definisi: tujuan, audiens dan didaktik diselesaikan sebelum
materi apa pun ditulis, dan gerbang validasi menyusul. Sebuah draf dapat ditinjau dari persona pembelajar
bernama untuk memeriksa [[cognitive-offloading|beban kognitif]] dan asumsi pengetahuan awal. Agennya
agnostik editor, menghasilkan konfigurasi untuk Claude Code, Copilot, Codex, Cursor, atau obrolan web dari
satu spesifikasi, dan repositorinya sekaligus menjadi contoh kerja, memuat mata kuliah enam unit tentang
EU NIS2 Directive dan dokumen yang menjelaskan bagaimana mata kuliah itu dihasilkan.

## Catatan dan peringatan

LiaScript gratis, tanpa tingkat berbayar dan tanpa keharusan akun, serta dikembangkan secara terbuka di
bawah BSD-3-Clause, sehingga institusi dapat menghosting sendiri dan memodifikasinya. Fitur Live
Classroom layak ditinjau sebelum Anda mengandalkannya dalam skala besar, karena sinkronisasi waktu nyata
memakai layanan bersama alih-alih rendering lokal murni. Agen pengajarnya masih muda dan sedikit
diadopsi, jadi perlakukan sebagai prototipe yang berfungsi alih-alih produk yang didukung.

## Konsep terkait

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
