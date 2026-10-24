---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
updated: "2026-10-24T05:33:18-04:00"
type: resource
summary: "A free browser tool that runs a written, timed version of an oral code defense for every student in a programming course, proposing scores with quoted evidence for the instructor to approve."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-10-24"
    agent: hermes-agent
reviewed_by: [editor]
---
Code Viva runs a written, timed version of an [[oral-assessment|viva]] for every student in a programming
course, about fifteen to twenty minutes each, without an instructor in the room. It reads a student's
submitted code and commit history, writes four to six questions about that student's own functions, names
and commits, and gives each student a personal link to answer from.

## What you can do with it

Submissions come from a Gradescope export, a Canvas download zip, a folder-per-student zip, or GitHub
Classroom with a read token. The instructor sets session length, question count and deadline, marks
extended time at 1.25x to 3x, and reads, edits or replaces the generated questions before sending links.
Questions cover recursion base cases, edge guards, data structure choices, opaque variable names, scale
and tracing, sentences from the assignment spec, and commit patterns such as one bulk or late-night
commit. Answers return as a response code, and the review screen shows each transcript beside a proposed
0 to 3 score with the sentences it rests on, plus a flag queue ordered by how much a conversation is
warranted. Results export to CSV, and eleven demo courses let a reader try the whole loop on invented
data.

## Who it is for

Instructors of programming courses who want evidence that a student can explain their own code, and who
would rather talk to a short list of students than to all of them; the commit questions make it a form of
[[process-oriented-assessment]].

## Notes and caveats

Everything runs in the browser: the course sits in local storage with a JSON export, questions travel in
the part of a link browsers do not send to servers, and answers come back only as codes students choose
to send, so no student data reaches a third party. The question generator is rule-based rather than
model-driven. By the tool's own account its code reader is heuristic, so unusual formatting or macros can
hide a function, and a score can reward knowing the vocabulary rather than understanding the code, which
is why scores are proposals an instructor approves and why it advises keeping the stakes low. No license
and no source repository are published, and because links carry the questions they run to a few
kilobytes, long enough to wrap in a learning management message box.

## Connected Concepts

- [[oral-assessment]]
- [[process-oriented-assessment]]
- [[academic-integrity]]
