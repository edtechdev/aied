---
title: "Amplify GenAI"
created: "2026-11-12T11:34:00-05:00"
updated: "2026-11-12T11:34:00-05:00"
type: resource
summary: "Platform AI generatif perusahaan berlisensi MIT dari Vanderbilt, yang diterapkan di akun AWS institusi sendiri: asisten khusus atas dokumen lokal, jawaban yang diperkaya retrieval, berbagi di seluruh organisasi, dan akuntansi biaya hingga ke pesan individual."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
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

Amplify GenAI adalah taruhan yang berlawanan dengan lisensi kampus untuk asisten komersial: institusi menjalankan platform itu sendiri, di dalam akun Amazon Web Services-nya sendiri, dan membayar apa yang dipakainya. Vanderbilt membangunnya untuk komunitasnya sendiri, merilisnya di bawah MIT dalam tiga repositori, dan kini menawarkannya kepada organisasi lain sebagai alternatif kontrak perusahaan per kursi — dengan argumen bahwa bagian yang mahal seharusnya adalah modelnya, bukan jumlah kursi.

## Apa yang dapat Anda lakukan dengannya

Pengguna membangun asisten khusus dengan mengunggah dokumen atau menghubungkan sumber data, dan asisten menjawab dengan [[rag|retrieval-augmented generation]] atas materi itu alih-alih hanya dari pelatihan umum. Asisten dapat dibagikan di seluruh organisasi, dirangkai dalam satu percakapan, dan diberi templat prompt; platform ini juga menghasilkan berkas PowerPoint dan Word, diagram, dan visualisasi. Administrator mendapatkan apa yang dibutuhkan layanan bersama: akuntansi biaya hingga tingkat pesan, batas per pengguna, folder dan ruang kerja, serta SSO, semuanya dalam penerapan yang dikendalikan institusi.

Keputusan desain yang paling penting bagi sebuah [[higher-ed|perguruan tinggi]] adalah model akuntansinya. Vanderbilt melaporkan bahwa dengan 1.300 pengguna uji coba, biaya per pengguna sekitar \$3 per bulan termasuk AWS, dan separuh pengguna itu mengonsumsi kurang dari \$1 per bulan untuk token — angka yang universitas sajikan sebagai studi kasus, bukan tolok ukur yang diaudit. Penagihan berbasis pemakaian memberi imbalan pada kampus tempat minoritas pengguna melakukan sebagian besar pekerjaan, yang merupakan bentuk normal adopsi AI, dan membuat pertanyaan kantor keuangan ("berapa biaya per mahasiswa?") dapat dijawab dari log alih-alih dari kontrak.

## Untuk siapa

IT pusat dan kantor CIO yang sudah menjalankan beban kerja di AWS dan menginginkan alternatif yang didukung komunitas bagi asisten perusahaan komersial; dosen yang membutuhkan asisten yang berlandaskan materi kuliah tanpa mengirimkannya ke produk konsumen vendor; dan institusi yang menginginkan satu tempat untuk melihat apa yang dilakukan orang dengan model. Karena diterapkan ke akun institusi sendiri, pertanyaan residensi data dijawab oleh penerapannya, bukan oleh janji vendor.

## Catatan dan peringatan

Gratis untuk dilisensikan, tidak gratis untuk dijalankan: institusi membayar AWS dan penyedia model. Pilihan model berjalan melalui Amazon Bedrock (Anthropic, Mistral) atau OpenAI dan Microsoft Azure, dan menjalankan model lokal Anda sendiri tidak diimplementasikan. Proyek ini menyatakan dengan jelas bahwa mereka tidak dapat mendukung penerapan individual dan merujuk organisasi ke mitra komersial — jadi biaya realistisnya mencakup staf atau kontraktor. Ini adalah penerapan tiga repositori (frontend, backend, infrastruktur) dengan puluhan bintang, bukan ribuan, dan perbandingan biaya di atas adalah pengalaman Vanderbilt sendiri, bukan studi terkontrol. Institusi yang lebih suka menyimpan inferensi pada perangkat keras milik sendiri harus melihat [MindRouter](/aied/resources/mindrouter/) dan membaca keduanya bersama: Amplify adalah lapisan aplikasi di atas model vendor, MindRouter adalah gateway di atas GPU Anda sendiri.

## Konsep terkait

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
