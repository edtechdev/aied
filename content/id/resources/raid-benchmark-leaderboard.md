---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Papan peringkat publik detektor teks AI yang dinilai pada RAID, tolok ukur yang dibangun untuk menguji ketahanan terhadap model, domain, pengaturan decoding, dan serangan adversarial."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

RAID adalah tolok ukur di balik sebagian besar klaim serius tentang [[ai-detection|deteksi teks AI]], dan papan peringkatnya adalah tempat untuk memeriksa apakah akurasi yang dipublikasikan suatu detektor bertahan terhadap perubahan model, domain, pengaturan decoding, atau serangan yang disengaja. Entri dinilai pada set uji dan dapat diajukan oleh siapa pun yang mengikuti proses pengajuan repositori.

## Apa yang dapat Anda lakukan dengannya

Saring berdasarkan domain — abstrak, buku, berita, puisi, resep, Reddit, ulasan, wiki — berdasarkan strategi decoding (greedy atau sampling), berdasarkan penalti pengulangan, dan berdasarkan serangan adversarial, termasuk spasi putih, homoglyph, penggantian sinonim, parafrasa, spasi lebar nol, dan penghapusan kata sandang. Lalu bandingkan suatu detektor lintas metrik: AUROC, TPR pada tingkat positif palsu 5%, dan TPR pada 1%.

Kumpulan filter itulah intinya. Detektor yang skornya mendekati 1.000 secara agregat bisa jatuh begitu teks diparafrasakan atau model sumbernya berubah, dan papan peringkat memungkinkan Anda melihat kejatuhan itu sebelum institusi mempertaruhkan kasus [[academic-integrity|kecurangan]] padanya. Kolom positif palsu 1% paling penting dalam pendidikan, karena pada skala institusi tingkat kesalahan 1% berarti ratusan mahasiswa yang dituduh secara keliru.

## Untuk siapa

Peneliti yang mengevaluasi metode deteksi, administrator yang menulis kebijakan yang mungkin merujuk pada detektor, dan pengajar yang menginginkan jawaban konkret atas "bisakah ini dideteksi?" sebelum mengatakannya dalam silabus.

## Catatan dan peringatan

Tolok ukur ini mengukur deteksi teks yang dihasilkan mesin, bukan kecurangan: mahasiswa yang menggunakan AI untuk merencanakan, membuat kerangka, atau merevisi menghasilkan teks yang tidak dirancang untuk ditangkap oleh detektor, dan mahasiswa yang [[language-learning|menulis dalam bahasa kedua]] adalah risiko positif palsu yang diketahui dan tidak dapat ditunjukkan oleh papan peringkat. RAID adalah artefak penelitian yang dipelihara oleh tim akademik; cakupannya mengikuti model generator dalam set ujinya, sehingga model yang lebih baru mungkin kurang terwakili sampai tolok ukur diperbarui. Papan peringkat memberi peringkat detektor, bukan praktik penanganan data vendornya, dan AUROC tinggi tidak mengatakan apa-apa tentang apakah menyerahkan pekerjaan mahasiswa ke layanan tersebut sah atau etis di yurisdiksi Anda.
