---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Papan peringkat publik bagi model frontier yang menilai jawaban tulisan tangan asli mahasiswa pada mata kuliah STEM di perguruan tinggi terhadap butir rubrik yang dipilih pengajar."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [automated-assessment, assessment-validity, benchmark]
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

GradeBench mengajukan pertanyaan yang sempit tetapi berguna tentang [[automated-assessment|penilaian otomatis]]: diberikan jawaban tulisan tangan mahasiswa, rubrik pengajar, solusi acuan, dan butir rubrik yang benar-benar dipilih pengajar, apakah model frontier memilih butir yang sama? Label emasnya adalah pilihan rubrik asli dari pengajar dan asisten pengajar (TA) pada ujian dan kuis, bukan keluaran model yang dinilai ulang.

## Apa yang dapat Anda lakukan dengannya

Bacalah papan peringkat sebelum mempercayai klaim akurasi vendor penilaian mana pun, dan bacalah konstruksi tugasnya sebelum mempercayai papan peringkat itu. [[benchmark]] ini memuat 464 tugas yang diambil dari 125 pertanyaan pada 45 mata kuliah [[higher-ed|universitas]] di lebih dari sepuluh institusi, terbatas pada butir ujian dan kuis berjawaban bebas yang ditinjau baris demi baris oleh profesor atau TA, dan condong ke arah kredit parsial — tugas bernilai penuh dan bernilai nol masing-masing dibatasi maksimal 5% karena model menganggapnya mudah.

Papan peringkat saat ini puncaknya masih jauh di bawah kesepakatan antarpenilai manusia: model terbaik mencapai 57.3% kecocokan rubrik persis, dan situs ini memplot akurasi terhadap biaya per 1,000 jawaban, di mana model yang tertinggal 0.8 poin biayanya sekitar seper tujuh kalinya. Sumbu biaya itulah bagian yang berguna secara praktis, karena penilaian adalah operasi bervolume besar.

Untuk instrumen kedua yang dibangun secara independen, lihat [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) dari Learning Design Alliance, yang dikemas sebagai repositori terbuka alih-alih papan peringkat yang dihosting dan dirangkum dalam [[porcaro-ai-grading-benchmark-2026|studi Porcaro]].

## Untuk siapa

Pengajar yang memutuskan apakah akan membiarkan alat penilaian merilis nilai tanpa tinjauan, profesional penilaian yang menulis persyaratan pengadaan, dan peneliti yang membutuhkan target tingkat rubrik alih-alih korelasi penskoran esai.

## Catatan dan peringatan

GradeBench diterbitkan oleh Pensive, platform penilaian AI komersial, sehingga tolok ukur dan produknya berbagi pemilik yang sama; konstruksi tugasnya terdokumentasi dan dapat dipertanggungjawabkan, tetapi perlakukan pembingkaiannya sebagai milik vendor. Tolok ukur ini mencakup ujian STEM dengan rubrik minimal empat butir, yang mengecualikan esai, jawaban singkat, dan unggahan diskusi — format tempat sebagian besar penilaian [[humanities-education|humaniora]] terjadi. Kecocokan rubrik persis adalah metrik yang ketat: dua penilai bisa berbeda pendapat pada satu butir dan sama-sama benar tentang mahasiswa tersebut. Skor-skor ini menggambarkan versi model yang tersedia pada November 2026 dan akan berubah.
