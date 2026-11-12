---
title: "MindRouter"
created: "2026-11-12T11:38:00-05:00"
updated: "2026-11-12T11:38:00-05:00"
type: resource
summary: "Gateway inference Apache-2.0 dari University of Idaho yang menempatkan kluster kampus node GPU vLLM dan Ollama di belakang satu API kompatibel OpenAI, menambahkan penjadwalan fair-share, kuota token per pengguna, SSO, pencatatan audit, dan pemantauan GPU serta energi secara langsung."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

Sebagian besar diskusi AI kampus dimulai dengan model mana yang harus dibeli dan berhenti sebelum pertanyaan yang lebih sulit: di mana ia berjalan, siapa yang mengukurnya, dan siapa yang dapat melihat log. MindRouter adalah jawaban untuk pertanyaan kedua itu. Ia adalah gateway yang dihosting sendiri yang berada di depan kluster heterogen server [[llm|LLM]] — node vLLM dan Ollama pada GPU milik institusi — dan mengekspos satu API yang berbicara dalam dialek OpenAI, Anthropic, dan Ollama, menerjemahkan di antaranya sehingga kode klien yang ada tetap berfungsi.

## Apa yang dapat Anda lakukan dengannya

Arahkan alat ke gateway alih-alih ke endpoint vendor. Di belakangnya, MindRouter menangani bagian yang dibutuhkan penerapan bersama: penjadwalan fair-share dengan weighted deficit round robin, kuota token dan permintaan per pengguna, akses berbasis peran dengan SSO opsional melalui Azure AD/Entra, Google, penyedia OIDC mana pun, atau SAML 2.0, dan pencatatan audit penuh atas prompt, respons, dan artefak. Agen sidecar GPU melaporkan utilisasi, memori, suhu, dan daya per node, sehingga administrator dapat melihat biaya energi per permintaan dan menghentikan backend secara bertahap ketika pemeliharaan jatuh tempo. Ia mencakup lebih dari sekadar obrolan — embedding, visi, pembuatan gambar dan video, text-to-speech dan speech-to-text, OCR dokumen — dan menyertakan server MCP serta keterampilan agen untuk asisten pengkodean.

Alasan sebuah perguruan tinggi peduli adalah yang disebut proyek itu: [[institutional-ai-infrastructure|kedaulatan AI institusional]]. Prompt dan dokumen tetap berada di infrastruktur yang dioperasikan institusi alih-alih melewati cloud pihak ketiga, yang lebih mudah dipertahankan kepada senat fakultas atau kantor [[privacy|privasi]] daripada perjanjian pemrosesan data dengan vendor. Apakah argumen itu bertahan bergantung pada apakah institusi memiliki GPU, daya, dan staf — gateway membuat hosting lokal dapat dikelola, bukan murah.

## Untuk siapa

Komputasi riset dan kelompok IT pusat dengan kapasitas GPU yang ada, pusat pengajaran dan pembelajaran yang menginginkan satu tempat untuk mengukur pemakaian dosen dan mahasiswa, dan administrator yang menimbang platform perusahaan terkelola versus menjalankan inferensi sendiri. Ini adalah penerapan Docker Compose dengan konfigurasi SSO terdokumentasi dan branding khusus, dan dipelihara di University of Idaho, tempat penulisnya mempresentasikannya di PEARC '26; proyek ini memiliki 22 bintang dan 3 fork per November 2026.

## Catatan dan peringatan

Gratis dan sumber terbuka di bawah Apache-2.0, tetapi biayanya berpindah, bukan hilang: perangkat keras, listrik, dan waktu staf untuk menjalankan kluster. Perangkat lunaknya masih muda menurut standar infrastruktur — tiga kontributor, satu institusi asal, dan rilis bernomor dalam ratusan tag — jadi sebuah perguruan tinggi harus mengujinya di samping layanan yang ada, bukan sebagai satu-satunya jalur ke model. Evaluasi terbit tentang perilaku penjadwalan dan kuota di bawah beban kampus nyata tidak ada di repositori; makalah PEARC adalah tempat untuk mencari catatan penulisnya sendiri.

## Konsep terkait

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
