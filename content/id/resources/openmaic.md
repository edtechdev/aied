---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Rilis open-source MAIC: kelas multi-agen yang mengubah topik atau dokumen menjadi slide, kuis, simulasi interaktif dan aktivitas berbasis proyek, disampaikan oleh guru dan teman sekelas AI."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
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

**OpenMAIC** adalah rilis open-source dari kelas multi-agen MAIC yang dijelaskan dalam
[[intelligent-tutoring|studi MAIC]]: deskripsikan sebuah topik atau lampirkan materi Anda sendiri dan alat
ini menghasilkan pelajaran lengkap — slide, kuis, simulasi HTML interaktif dan aktivitas berbasis proyek —
lalu menyampaikannya melalui guru AI dan teman sekelas AI yang berbicara, menggambar di papan tulis dan
ikut berdiskusi. Ini adalah kode di balik kelas yang dapat dijalankan alih-alih hanya dibaca.

## Apa yang dapat Anda lakukan dengannya

Generasi satu klik menghasilkan pelajaran dalam hitungan menit dari sebuah prompt atau dokumen, audio atau
video yang diunggah. Lapisan multi-agen menambahkan diskusi kelas yang dapat diikuti atau dipanggil
pembelajar, debat meja bundar antar persona dengan ilustrasi papan tulis, dan tanya jawab bebas di mana
guru menjawab dengan slide atau diagram. Sesi mendukung dek slide, kuis, simulasi interaktif dan PBL, serta
diekspor sebagai `.pptx` yang dapat diedit atau `.html` interaktif. Versi 1.0.0 (Agustus 2026) menambahkan
agent workbench: ruang kerja yang mengutamakan obrolan yang merencanakan dan merevisi seluruh mata kuliah,
sesi tahan lama berbasis server yang dapat Anda batalkan, lanjutkan atau arahkan, dan 24 skill bawaan yang
mencakup slide, kuis, interaktif, gambar, video dan suara. Paket `SKILL.md` memungkinkan harness agen
membangun kelas dari aplikasi pesan.

## Untuk siapa

Dosen dan tim mata kuliah yang menginginkan materi hasil generasi yang masih dapat mereka edit, perancang
pembelajaran yang membuat prototipe aktivitas multi-agen, dan pengembang yang membutuhkan kelas yang dapat
dihosting sendiri alih-alih produk hosted. Sekolah dapat menerapkannya di Vercel atau dengan Docker, dan
proyek ini menyediakan demo hosted di open.maic.chat.

## Catatan

Berlisensi MIT, dengan panduan pengguna bahasa Inggris dan Mandarin serta komunitas aktif di Discord dan
Feishu. Alat ini netral model: Anda menyediakan setidaknya satu kunci penyedia LLM, dan komponen lokal
opsional (Lemonade untuk model lokal, FunASR untuk pengenalan suara) memungkinkan Anda menjalankan lebih
banyak tumpukan secara offline — jadi “gratis” menggambarkan perangkat lunaknya, bukan tagihan
inferensinya. Makalah di baliknya muncul di *Journal of Computer Science and Technology* (2026, DOI
10.1007/s11390-025-6000-0), dan repositorinya memiliki lebih dari 38.000 bintang pada September 2026.

## Konsep terkait

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
