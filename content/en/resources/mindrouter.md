---
title: "MindRouter"
created: "2026-11-12T11:10:00-05:00"
updated: "2026-11-12T18:05:00-05:00"
type: resource
summary: "An Apache-2.0 inference gateway from the University of Idaho that fronts a campus cluster of vLLM and Ollama GPU nodes behind one OpenAI-compatible API, adding fair-share scheduling, per-user token quotas, SSO, audit logging and live GPU and energy monitoring."
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
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

Most campus AI discussions start with which model to buy and stop before the harder question: where it runs, who meters it, and who can see the logs. MindRouter is an answer to that second question. It is a self-hosted gateway that sits in front of a heterogeneous cluster of [[llm|LLM]] servers — vLLM and Ollama nodes on GPUs the institution owns — and exposes one API that speaks the OpenAI, Anthropic and Ollama dialects, translating between them so existing client code keeps working.

## What you can do with it

Point a tool at the gateway instead of at a vendor endpoint. Behind it, MindRouter handles the parts a shared deployment needs: fair-share scheduling with weighted deficit round robin, per-user token and request quotas, role-based access with optional SSO through Azure AD/Entra, Google, any OIDC provider or SAML 2.0, and full audit logging of prompts, responses and artifacts. A GPU sidecar agent reports per-node utilization, memory, temperature and power, so an administrator can see energy cost per request and drain a backend gracefully when maintenance is due. It covers more than chat — embeddings, vision, image and video generation, text-to-speech and speech-to-text, document OCR — and ships MCP servers and agent skills for coding assistants.

The reason a college would care is the one the project names: [[institutional-ai-infrastructure|institutional AI sovereignty]]. Prompts and documents stay on infrastructure the institution operates rather than passing through a third-party cloud, which is easier to defend to a faculty senate or a [[privacy|privacy]] office than a data processing agreement with a vendor. Whether that argument holds depends on whether the institution has the GPUs, the power and the staff — the gateway makes local hosting manageable, not cheap.

## Who it is for

Research computing and central IT groups with existing GPU capacity, teaching and learning centers that want a single place to meter faculty and student use, and administrators weighing hosted enterprise platforms against running inference themselves. It is a Docker Compose deployment with documented SSO configuration and custom branding, and it is maintained at the University of Idaho, where the author presented it at PEARC '26; the project has 22 stars and 3 forks as of November 2026.

## Notes and caveats

Free and open source under Apache-2.0, but the cost moves rather than disappears: hardware, electricity, and the staff time to run a cluster. The software is young by infrastructure standards — three contributors, a single originating institution, and releases numbered in the hundreds of tags — so a college should pilot it beside an existing service rather than as the only path to a model. Published evaluation of the scheduling and quota behavior under real campus load is not in the repository; the PEARC paper is the place to look for the authors' own account.

## Connected Concepts

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
