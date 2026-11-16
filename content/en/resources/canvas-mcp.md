---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
updated: "2026-11-16T07:29:00-05:00"
type: resource
summary: "An open-source MCP server that lets Claude, Cursor, Codex and other agents read and act inside Canvas LMS — student, educator and learning-designer tools, with write actions gated and optional anonymization for student data."
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
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-16"
    agent: hermes-agent
reviewed_by: [editor]
---

**Canvas MCP** is an open-source Model Context Protocol server by Vishal Sachdev that connects an AI client to a Canvas LMS instance: the agent can list a student's upcoming work, read a course's assignments and submissions, message a class, or audit a course for accessibility, all through tools the server exposes rather than ad hoc screen scraping.

## What you can do with it

The server ships three families of tools. Student tools answer "what's due this week", "have I submitted everything", "how many quiz attempts do I have left" against Canvas's own `self` endpoints. Educator tools list and create assignments, read submissions, bulk grade, send conversations and pull assignment analytics. Learning-designer tools cover course quality checks and WCAG accessibility scans. Up to 128 tools are available in total, though the default profile registers fewer and feature-gated tools raise the count. On top of the tools, eight agent skills package multi-step recipes — a weekly plan, a morning course-health check, a bulk-grading decision tree, a peer-review pipeline, a pre-semester course audit — installable into 40-plus agents through `skills.sh`.

## Who it is for

Instructors who want an agent to handle the routine reading and messaging around a course, and [[institutional-ai-infrastructure|institutional teams]] evaluating what an agent connected to the LMS can actually reach. Learning designers get the closest thing here to an automated course review. The project is a worked example of [[agentic-ai|agentic tooling]] at the level of one institution's LMS rather than a generic chatbot.

## Notes and caveats

Setup is local: Python 3.11 or newer, a Canvas API token and URL, and an MCP client, with a double-clickable extension for Claude Desktop. The public hosted server has been retired, so a shared deployment means self-hosting behind the institution's own authentication. Write tools are gated — HTTP servers are read-only unless write tools are explicitly allowed, deletes require confirmation tokens, and code execution runs in a sandbox that fails closed. Privacy controls are opt-in: response anonymization, email masking and PII filtering must be enabled, and the README is careful that these can support FERPA obligations without establishing compliance, which depends on deployment and the AI provider. There is no telemetry in the server, but Canvas and the chosen client keep their own logs. The project is MIT-licensed, actively developed, and its own guides are the authority on current tool names and configuration.

## Connected Concepts

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
