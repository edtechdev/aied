---
title: "Tipe Soal Teks AI Moodle"
created: "2026-11-12T11:40:00-05:00"
updated: "2026-11-12T11:40:00-05:00"
type: resource
summary: "Tipe soal Moodle sumber terbuka (GPL v3) yang menilai jawaban teks bebas dengan model bahasa besar terhadap prompt per soal dan skema penilaian opsional, menggunakan OpenAI, Azure, atau model Ollama yang dihosting sendiri dan menampilkan umpan balik AI kepada penilai manusia."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Sebagian besar integrasi kuis AI mengirim setiap jawaban ke panggilan penilaian tetap. Tipe soal Moodle ini melakukan sebaliknya: pengajar menulis rubriknya. Setiap soal membawa **prompt** yang memberi tahu model cara mengevaluasi respons dan **skema penilaian** opsional yang menjelaskan bagaimana nilai diberikan, sehingga butir "tulis satu kalimat dalam bentuk lampau" dapat menetapkan sepuluh nilai untuk nol kesalahan, nol untuk tata bahasa rusak, dan satu nilai dikurangi per kesalahan ejaan. Model mengembalikan nilai dan [[feedback|umpan balik]], dan pengajar dapat melihat umpan balik itu di samping respons saat menilai dengan tangan.

## Apa yang dapat Anda lakukan dengannya

Tambahkan soal AIText ke kuis Moodle mana pun, tulis prompt dan skema penilaian, dan uji prompt dengan **penguji prompt** AJAX di formulir penyuntingan alih-alih berputar melalui upaya pratinjau. Penilaian berjalan melalui dua perilaku soal pendamping (langsung dan tertunda) yang harus dipasang bersama tipe soal, yang menjaga penilaian AI terisolasi dari perilaku inti Moodle; upaya yang ada yang menggunakan perilaku `interactivecountback` warisan bermigrasi saat pemutakhiran. Jika model tidak dapat dijangkau, penilaian menurun alih-alih menimbulkan galat, sehingga upaya tidak hilang. Karena soal ini adalah tipe kuis bawaan, hasilnya masuk ke buku nilai seperti butir lain — yang dibutuhkan tim mata kuliah sebelum dapat memperlakukan [[automated-assessment|penilaian otomatis]] sebagai uji coba alih-alih demo.

Desainnya juga menempatkan rubrik di tempat [[ai-feedback-quality|kualitas umpan balik]] diputuskan: dalam prompt, yang ditulis pengajar, alih-alih dalam default vendor. Itu adalah penggunaan alat yang jujur — kriteria yang dapat Anda periksa dan revisi — meskipun itu juga berarti plafon kualitasnya adalah rubrik, dan prompt yang kabur menghasilkan penilaian yang kabur. Institusi menjangkaunya untuk pemeriksaan sering dan berisiko rendah yang menjadi landasan [[formative-assessment|asesmen formatif]], sementara tanpa itu seorang manusia harus membaca empat puluh jawaban singkat dalam satu malam.

## Untuk siapa

Administrator dan pengembang Moodle yang sudah menjalankan situs, pengajar yang menginginkan penilaian AI tanpa platform terpisah atau lisensi komersial, dan peneliti yang membutuhkan pipeline penilaian yang dapat dikendalikan untuk diteliti. Ini membutuhkan Moodle 4.5 atau lebih baru dan akses API ke model — baik OpenAI atau Azure melalui subsistem AI Moodle, atau instans Ollama yang dihosting sendiri melalui Local AI Manager, yang menjaga teks siswa di infrastruktur lokal. Plugin ini dikelola oleh Marcus Green, ada di pasar plugin Moodle, dan memiliki 33 bintang dan 36 fork saat halaman ini diverifikasi.

## Catatan dan peringatan

Sumber terbuka di bawah GPL v3 atau lebih baru, tetapi gratis tidak berarti gratis untuk dijalankan: seseorang membayar API model, dan kualitas penilaian bergantung pada pilihan model dan desain prompt. Jawaban teks bebas meninggalkan server Moodle ketika penyedia jarak jauh digunakan, jadi perjanjian data institusi mengatur apa yang boleh dikirim; jalur Ollama yang dihosting sendiri ada untuk situs yang tidak dapat mengirim pekerjaan siswa ke luar. Repositori menyatakan tidak ada studi akurasi atau kesepakatan yang diterbitkan, jadi plugin tidak boleh diadopsi dengan asumsi bahwa penilaian LLM setara dengan penilaian manusia — [[assessment-validity|validitas]] harus ditetapkan secara lokal terhadap skor manusia sebelum nilai apa pun berbobot. Perilaku pendamping adalah dependensi keras: memasang tipe soal saja membuat soal tidak dapat dinilai.

## Konsep terkait

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
