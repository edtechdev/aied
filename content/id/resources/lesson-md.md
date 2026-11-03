---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Format teks biasa terbuka untuk pelajaran eLearning berbasis blok, plus agent skill yang menulis pelajaran, asesmen dan bundel mata kuliah utuh dalam format itu."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
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

**LESSON.md** adalah format terbuka untuk konten eLearning berbasis blok: berkas Markdown dengan
frontmatter YAML dan direktif `:::` untuk teks, gambar dan cek pengetahuan, yang dapat dibaca orang dan
diurai alat apa pun. Format ini ada karena konten mata kuliah biasanya terkunci di dalam satu alat
authoring, dan karena [[llm|model bahasa besar]] hanya dapat membantu pelajaran yang benar-benar dapat
mereka baca.

## Apa yang dapat Anda lakukan dengannya
Tulis pelajaran di editor teks apa pun dan impor ke alat apa pun yang mendukung formatnya, tanpa salin
tempel dan pemformatan ulang. Bagian interaktif — cek pengetahuan pilihan ganda dengan batas percobaan
dan umpan balik per jawaban — dinyatakan sebagai properti sederhana alih-alih GUI. `ASSESSMENT.md`
pendamping di akar bundel menjadi [[assessment|asesmen]] berskor mata kuliahnya. Proyek ini juga
menyertakan skill `lesson-md` yang mengajari Claude, Codex atau [[agentic-ai|agen]] lain formatnya,
sehingga mendeskripsikan mata kuliah dalam bahasa biasa menghasilkan pelajaran, asesmen dan bundel
lengkap.

## Untuk siapa
Perancang pembelajaran dan pembuat mata kuliah yang ingin kontennya bertahan saat alat berganti, vendor
eLearning yang menginginkan format impor dan ekspor yang sudah dipahami penggunanya, dan siapa pun yang
membangun penulisan berbantuan AI di atas format yang dapat dibaca. Kontributornya termasuk Dan Bashaw
dari LXD Integral, dan formatnya memiliki changelog publik sampai v1.8.

## Konsep terkait

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
