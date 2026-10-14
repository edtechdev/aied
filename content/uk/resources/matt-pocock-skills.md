---
title: "Skills for Real Engineers"
created: "2026-10-13T21:46:00-04:00"
type: resource
summary: "Відкритий набір Матта Покока з невеликих складаних навичок агентів, зокрема навичка викладання на кілька сеансів, навичка безжального допитування та поради щодо написання документів, за якими агент може рухатися."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
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
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови."
---

*Автоматичний переклад цієї англійської сторінки, не перевірений носієм мови.*

**Skills for Real Engineers** — опублікований Маттом Пококом каталог навичок агентів: невеликі складані файли інструкцій, які встановлюються в Claude Code, Codex або інший агент і написані так, щоб їх адаптували, а не приймали цілком. Більшість набору слугує програмній роботі, але кілька навичок є освітніми інструментами, створеними для викладання та допитування, а не для коду.

Найясніший приклад — `teach`, яка працює протягом кількох сеансів і розглядає робочий каталог як простір викладання зі станом, тож прогрес здобувача та відкриті питання зберігаються між розмовами замість того, щоб починатися спочатку щоразу. `grill-me` і лежачий в її основі примітив `grilling` безжально допитують користувача про план, доки не буде розв’язано кожну гілку, — це [[socratic-method|сократичне допитування]] як багаторазова процедура, а не розмовний настрій. `wait-what` реагує в ту ж мить, коли повідомлення не дійшло, переказуючи його простою мовою з відсутнім контекстом — хід, який кожен викладач впізнає, спостерігаючи, як пояснення вперше не спрацювало. `writing-for-agents` висвітлює, як писати документи, за якими може йти [[prompt-engineering|агент]], що тепер є практичною формою написання інструкцій для матеріалу курсу з [[pedagogical-agent|ШІ]]. `to-questionnaire` перетворює рішення на анкету для того, хто може на нього відповісти, `handoff` ущільнює розмову в документ, з якого інший агент може продовжити, а `wizard` генерує інтерактивний покроковий огляд для кроків, які може виконати лише людина.

## Що варто знати перед засвоєнням

Усе є [[open-source|відкритим кодом]] під ліцензією MIT і вільно для використання як відправна точка для локальної [[ai-literacy|ШІ-грамотності]] або [[self-directed-learning|самостійного навчання]]. Засвоєння є масовим і швидким: приблизно 270 000 зірок і 23 000 форків станом на вересень 2026 року, з найновішим комітом 18 вересня 2026 року. Застереження — це охоплення. Навички припускають [[human-ai-collaboration|інженерний]] робочий контекст, вони згруповані в групи інженерних, продуктивних, застарілих та незавершених навичок, тож деякі записи явно незакінчені або відкладені, а README водночас слугує формою підписки на розсилку. Розглядайте навички викладання та допитування як переносиму частину і будьте готові переписати будь-яку з них, перш ніж поставите її перед студентами.

## Пов’язані поняття
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
