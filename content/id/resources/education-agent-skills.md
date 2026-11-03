---
title: "Education Agent Skills"
created: "2026-09-23T21:05:00-04:00"
type: resource
summary: "Pustaka berisi 165 agent skill yang bersandar pada bukti, mencakup pedagogi, ilmu belajar, kurikulum, dan asesmen, dikemas untuk Claude, Codex, dan Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
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

**Education Agent Skills** adalah pustaka berisi 165 agent skill untuk guru, pemimpin sekolah, dan orang
yang membangun alat pendidikan. Skill-nya dikelompokkan ke dalam dua puluh domain yang mencakup
pedagogi, ilmu belajar, [[curriculum-design|kurikulum]], asesmen, dan regenerasi, dan masing-masing
ditulis untuk dimuat oleh [[agentic-ai|agen]] alih-alih dibaca sebagai dokumen.

## Apa yang dapat Anda lakukan dengannya

Skill dipasang ke Claude Code, Codex, dan Hermes, baik sebagai plugin maupun dengan menyalin foldernya,
sehingga pustaka yang sama bekerja di beberapa permukaan agen. Server MCP hosted mengekspos koleksinya
sebagai alat bagi agen yang tidak dapat memasang skill secara lokal, dan repositorinya menyertakan
registri sekaligus bundel siap pakai sehingga server dapat menyajikan koleksinya tanpa membaca berkas
individual saat penerapan.

Klaim pembeda proyek ini adalah landasannya: skill mengutip bukti yang menjadi dasarnya, dan riwayat
repositori itu sendiri menunjukkan disiplin tersebut ditegakkan alih-alih diklaim, termasuk perbaikan
yang sudah digabungkan yang menghapus atribusi tak terdukung dan mengoreksi deskripsi pengaman teruji
dalam sebuah studi yang dikutip.

## Catatan dan peringatan

Skill pendidikan, dokumentasi, dan materi kurikulumnya berlisensi CC BY-SA 4.0, sehingga penggunaan ulang
dan adaptasi terbuka sementara turunannya harus membawa lisensi yang sama. Dua detail operasional
penting jika Anda menerapkannya. Endpoint MCP hosted memerlukan token alih-alih terbuka untuk siapa pun,
dan karena servernya menyajikan snapshot yang di-commit alih-alih berkas SKILL.md, skill yang Anda
tambahkan tanpa membangun ulang dan meng-commit bundelnya tidak akan muncul di server langsung bahkan
setelah penerapan ulang. Pustaka ini dibangun oleh Gareth Manning, seorang pendidik dan perancang
kurikulum, dan ketentuan lisensinya berlaku khusus untuk konten pendidikannya.

## Konsep terkait

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]], [[educational-development]]
