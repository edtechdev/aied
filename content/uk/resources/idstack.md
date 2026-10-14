---
title: "idstack"
created: "2026-10-13T14:35:00-04:00"
type: resource
summary: "Відкритий набір із одинадцяти навичок Claude Code, які аудитять курс проти бази доказів інструкційного дизайну, позначаючи кожну рекомендацію її рівнем доказовості."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови."
---

*Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови.*

**idstack** — відкрита колекція з одинадцяти навичок для [[learning-design|інструкційного дизайну]], заснованого на доказах, що розповсюджується як плагін Claude Code із супутнім розширенням-боковою панеллю для Chrome. Замість того щоб створювати курс, навички його аудитують: вони класифікують цілі проти переглянутої таксономії Блума, перевіряють конструктивне узгодження між цілями, активностями та оцінюваннями, виявляють проблеми когнітивного навантаження та перевіряють доступність проти WCAG 2.1 AA та Universal Design for Learning. Кожна рекомендація несе рівень доказовості — від T1 для метааналізів і рандомізованих випробувань до T5 для експертних думок. Проєкт стверджує, що його цитати спираються на 108 рецензованих досліджень з одинадцяти дослідницьких доменів; це число є власною заявою проєкту, і його бібліографія опублікована у Markdown, щоб рецензент міг її перевірити.

Курси надходять через з’єднання з Canvas API, файл IMS Common Cartridge, пакет SCORM, PDF-експорт із інструменту авторства або вставлені документи. Спільний маніфест проєкту пам’ятає курс між сесіями, а навичка-конвеєр ланцюжком проводить етапи проєктування, пропускаючи завершену роботу. Огляди звітують проти восьми стандартів Quality Matters і фреймворку Community of Inquiry, розділяючи навчальну, соціальну та когнітивну присутність, а потім ранжують рекомендації за серйозністю.

## Що варто знати перед впровадженням

Для встановлення плагін вимагає Claude Code і оболонку bash; PowerShell і cmd не можуть виконати скрипт установки, а для трендів оцінок рекомендується Python 3. Дані курсу залишаються в папці проєкту на власній машині читача і залишають її лише через інтеграцію, яку викликає користувач, як-от запит до Canvas API. Інференс у режимі реального часу розширення Chrome потребує власного безкоштовного ключа API Google AI Studio читача, хоча режим симуляції демонструє його без такого ключа. Проєкт позначає себе бета-версією на рівні 3.5.1.0 і попереджає про несумісні зміни між другорядними версіями, а опублікований він на обліковому записі GitHub savvides, а не іменованим автором.

## Connected Concepts
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
