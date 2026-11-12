---
title: "Amplify GenAI"
created: "2026-11-12T11:20:00-05:00"
updated: "2026-11-12T18:05:00-05:00"
type: resource
summary: "Vanderbilt's MIT-licensed enterprise generative AI platform, deployed in an institution's own AWS account: custom assistants over local documents, retrieval-augmented answers, sharing across the organization, and cost accounting down to the individual message."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
reviewed_by: [editor]
---

Amplify GenAI is the opposite bet from a campus-wide license to a commercial assistant: the institution runs the platform itself, inside its own Amazon Web Services account, and pays for what it uses. Vanderbilt built it for its own community, released it under MIT across three repositories, and now offers it to other organizations as an alternative to per-seat enterprise contracts — the argument being that the expensive part should be the models, not the seat count.

## What you can do with it

Users build custom assistants by uploading documents or connecting data sources, and the assistants answer with [[rag|retrieval-augmented generation]] over that material rather than from general training alone. Assistants can be shared across the organization, chained into one conversation, and given prompt templates; the platform also produces PowerPoint and Word files, diagrams and visualizations. Administrators get what a shared service needs: cost accounting down to the message level, per-user limits, folders and workspaces, and SSO, all in a deployment the institution controls.

The design decision that matters most for a [[higher-ed|college]] is the accounting model. Vanderbilt reports that with 1,300 pilot users, its cost per user was about \$3 per month including AWS, and that half of those users consumed less than \$1 per month in tokens — figures the university presents as a case study, not an audited benchmark. Usage-based billing rewards a campus where a minority of users do most of the work, which is the normal shape of AI adoption, and it makes the finance office's question ("what does this cost per student?") answerable from logs rather than from a contract.

## Who it is for

Central IT and CIO offices that already run workloads in AWS and want a supported-by-the-community alternative to a commercial enterprise assistant; faculty who need assistants grounded in course material without sending it to a vendor's consumer product; and institutions that want a single place to see what people are doing with models. Because it deploys into the institution's own account, the data-residency question is answered by the deployment rather than by a vendor's promise.

## Notes and caveats

Free to license, not free to run: the institution pays AWS and the model providers. Model choice runs through Amazon Bedrock (Anthropic, Mistral) or OpenAI and Microsoft Azure, and running your own local models is not implemented. The project states plainly that it cannot support individual deployments and refers organizations to commercial partners — so the realistic cost includes staff or a contractor. It is a three-repository deployment (frontend, backend, infrastructure) with tens of stars rather than thousands, and the cost comparison above is Vanderbilt's own experience rather than a controlled study. Institutions that would rather keep inference on hardware they own should look at [MindRouter](/aied/resources/mindrouter/) and read the two together: Amplify is an application layer over vendor models, MindRouter is a gateway over your own GPUs.

## Connected Concepts

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
