---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Un server MCP open-source care le permite lui Claude, Cursor, Codex și altor agenți să citească și să acționeze în Canvas LMS — instrumente pentru studenți, educatori și designeri ai învățării, cu acțiunile de scriere condiționate și anonimizare opțională a datelor studenților."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Canvas MCP** este un server open-source Model Context Protocol al lui Vishal Sachdev care conectează un client IA la o instanță Canvas LMS: agentul poate lista munca viitoare a unui student, citi temele și trimiterile unui curs, trimite un mesaj unei clase sau audita un curs pentru accesibilitate, toate prin instrumentele pe care serverul le expune, nu prin extragere ad-hoc de date de pe ecran.

## Ce poți face cu el

Serverul livrează trei familii de instrumente. Instrumentele pentru studenți răspund la „ce este de predat săptămâna asta”, „am trimis tot” și „câte încercări la quiz mai am” pe endpoint-urile `self` ale Canvas. Instrumentele pentru educatori listează și creează teme, citesc trimiterile, notează în bloc, trimit conversații și extrag analitice de teme. Instrumentele pentru designerii învățării acoperă verificări de calitate a cursului și scanări de accesibilitate WCAG. Sunt disponibile în total până la 128 de instrumente, deși profilul implicit înregistrează mai puține, iar instrumentele condiționate de anumite funcții ridică numărul. Peste instrumente, opt competențe de agent împachetează rețete în mai mulți pași — un plan săptămânal, o verificare matinală a sănătății cursului, un arbore decizional de notare în bloc, o conductă de revizuire între colegi, un audit de curs înainte de semestru — instalabile în peste 40 de agenți prin `skills.sh`.

## Pentru cine este

Instructori care vor ca un agent să se ocupe de citirea și mesageria de rutină din jurul unui curs, și [[institutional-ai-infrastructure|echipe instituționale]] care evaluează ce poate ajunge de fapt un agent conectat la LMS. Designerii învățării primesc aici cel mai apropiat lucru de o recenzie automată de curs. Proiectul este un exemplu lucrat de [[agentic-ai|instrumente agentice]] la nivelul LMS-ului unei singure instituții, nu un chatbot generic.

## Note și precauții

Configurarea este locală: Python 3.11 sau mai nou, un token și un URL de API Canvas, precum și un client MCP, cu o extensie care se deschide prin dublu-clic pentru Claude Desktop. Serverul public găzduit a fost retras, așa că o implementare partajată înseamnă auto-găzduire în spatele autentificării proprii a instituției. Instrumentele de scriere sunt condiționate — serverele HTTP sunt doar-citire dacă instrumentele de scriere nu sunt permise explicit, ștergerile cer tokenuri de confirmare, iar execuția de cod rulează într-un sandbox care eșuează închis. Controalele de confidențialitate sunt opt-in: anonimizarea răspunsurilor, mascarea e-mailurilor și filtrarea PII trebuie activate, iar README-ul este atent că acestea pot sprijini obligațiile FERPA fără a stabili conformitatea, care depinde de implementare și de furnizorul IA. Nu există telemetrie în server, dar Canvas și clientul ales își păstrează propriile loguri. Proiectul este licențiat MIT, dezvoltat activ, iar ghidurile sale sunt autoritatea pentru numele actuale ale instrumentelor și pentru configurare.

## Concepte conexe

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
