---
title: "Service-Oriented Architecture for an On-Premises AI Gateway Without an On-Premises Cloud"
created: "2026-11-12T13:10:00-05:00"
updated: "2026-11-12T13:10:00-05:00"
type: article
evidence_context: educational
sources: ['raw/papers/rahaman-soa-on-prem-ai-gateway-2026.md']
confidence: high
page_kind: [evaluation]
research_method: [system development]
discipline: [information technology]
level: [higher ed]
audience: [administrators, educational technology developers]
foundations: [human-ai-collaboration]
technology: [llm, generative-ai, open-source]
methods: [ai-ed-evaluation]
ethics: [privacy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-12"
    agent: hermes-agent
source_depth: full text
---

> **Synthesis:** Production [[llm|LLM]] services are usually described as a service-oriented architecture on Kubernetes or OpenShift, an assumption that excludes high performance computing centers allocating GPUs through a batch scheduler. Georgia Tech's Partnership for an Advanced Computing Environment built SPIN, a fully on-premises AI gateway running LiteLLM and PostgreSQL as a Podman pod on a CPU-only virtual machine, with vLLM and Triton inference servers running as Apptainer jobs under Slurm and rescheduled every 5 minutes by scrontab. Clients see one OpenAI-compatible endpoint and never learn an inference server's hostname, port, or key, so the serving tier can change beneath them. In load tests against a mock engine, an 8-vCPU VM reached 76% of the ideal aggregate response rate and a bare metal host reached 98% in the reported table. The contribution is an architectural recipe for [[institutional-ai-infrastructure|institutional AI infrastructure]] that avoids sequestering GPU nodes into a private cloud.

## Key Findings

1. **A gateway decouples clients from inference placement.** Because requests name a model rather than a server, an inference server's hostname, port, and API key can be updated in the LiteLLM database without any change to client code.
2. **Quadlet supplies high availability without a container platform.** LiteLLM and PostgreSQL run as a Podman pod defined as a systemd unit, gaining dependency ordering, startup behavior, recovery, and monitoring while integrating with existing non-containerized systemd services.
3. **Scrontab keeps batch-scheduled servers alive.** A 12-hour walltime job resubmitted on a 5-minute interval with `--dependency=singleton` restarts inference automatically, at a cost of 5–10 minutes of observed downtime per restart depending on model size.
4. **The proxy host, not the GPU, was the first capacity limit.** At 1000 concurrent requests per second against a mock engine, a 4-vCPU VM reached 42% and an 8-vCPU VM 76% of the ideal aggregate response rate (424.04 and 757.88 responses per second).
5. **Bare metal removed most of the remaining gap.** The same configuration without the VM layer reached 82% with 4 workers and 98% with 8 workers; the 8-worker host sustained 981.85 responses per second at a 300 ms median, against 1300 ms on the 8-vCPU VM.
6. **Image generation needed an adapter the gateway did not provide.** LiteLLM lacks native Triton support for image generation and expects base64 responses, so a FastAPI layer translates OpenAI `/v1/images/generations` requests into Triton tensors and back into base64 PNG.
7. **State IT policy removed whole model families.** Georgia Technology Authority policy prohibits DeepSeek and Qwen on state-owned IT resources, shaping the initial catalog toward Llama, InternVL, Granite embeddings, and Stable Diffusion XL.

## The gateway is the deployment problem

Publicly-funded HPC centers already run the GPUs and employ the staff for production-scale LLM service. What they often lack is the layer above the hardware: the "well-lit path" follows a service-oriented architecture of containerized services on Kubernetes or OpenShift, while HPC sites allocate GPUs through Slurm or PBS and provision virtual machines through a variety of platforms. Deploying an LLM service there becomes a problem of deploying a service-oriented architecture on non-cloud infrastructure.

An AI gateway is the narrow waist that makes this tractable. It is a relatively lightweight server offering one API endpoint in front of multiple inference servers, carrying the operational furniture a multi-user service needs: usage tracking, rate limiting, budgeting, key provisioning, and role-based access control. OpenAI API conformance admits the existing ecosystem of clients rather than requiring every user to learn a bespoke interface. The goal was that users could build their own frontends instead of depending on one sanctioned chat window.

## Split the architecture at the API boundary

SPIN, the Service for Persistent INference, separates control from serving. LiteLLM and PostgreSQL run on a CPU-only virtual machine; vLLM and Triton run on GPU nodes inside Slurm. Everything is free and open-source software with established industry use, an [[open-source|open-source]] bet that keeps the design reproducible elsewhere and avoids platform-vendor licensing.

LiteLLM authenticates users by API key, provisions keys per user and per team, and configures rate limits, pricing, and budgets at global, user, and team levels. PostgreSQL holds accounts and usage, exposed through LiteLLM's REST API. Deployment uses a Podman pod described by Quadlet units, so gateway and database run as one systemd unit, with mounted configuration, TLS certificates and database storage. The shipped unit runs LiteLLM with `--num_workers 8`.

vLLM supplies text inference. It is an Apache 2.0 engine built for multi-user throughput through PagedAttention and batched requests, and its OpenAI-compatible endpoint keeps the integration shallow. Triton covers modalities vLLM does not, including image output, at the cost of a custom NVIDIA license and its own adapter. Both run through Apptainer inside Slurm jobs.

The payoff is indirection. A request names a model and points at LiteLLM's stable hostname, port, and key. The inference server's host, port, and key are resolved from the database at request time, so replacing a backend is a database update invisible to clients.

## Keeping inference alive with scrontab

Batch schedulers are built to end jobs, the opposite of what a persistent service needs. The answer is not to exempt inference from the scheduler but to make resubmission continuous. A scrontab entry attempts submission every 5 minutes, and `--dependency=singleton` ensures a running instance suppresses a duplicate. If the job died from node failure, a fatal server error, or maintenance, the next interval restarts it without an [[administrator]].

Each job runs vLLM as an Apptainer instance, discovers an open port, generates a random API key, and then calls LiteLLM to add or update the model's `api_base` and `api_key`, creating the entry when absent and patching it when present.

Restarts cost availability. With a 12-hour walltime, a new job must queue and the model must load every 12 hours, producing the observed 5–10 minutes of downtime. A per-GPU reservation reduces requeue time and network-stored caches reduce load time. The alternative — sequestering a node outside the scheduler — is what the design avoids: at up to 8-way GPU density, removing a node from the general pool can be an unacceptable loss of capacity.

## Load testing the proxy tier

The team asked a narrow question: can a virtual machine host LiteLLM and PostgreSQL with acceptable overhead, or is bare metal justified? They followed LiteLLM's Locust workflow, sending 1000 concurrent requests per second at the gateway with a mock inference engine isolating the proxy and database from model compute. All hosts had 16G RAM; VMs ran on Intel Xeon Gold 6254 CPUs, bare metal on Intel Xeon 6530P.

| Host | Workers | Median (ms) | Aggregate (resp/s) | % ideal |
|---|---|---|---|---|
| VM, 4 vCPUs | 4 | 2300 | 424.04 | 42% |
| VM, 8 vCPUs | 8 | 1300 | 757.88 | 76% |
| Bare metal | 4 | 910 | 822.42 | 82% |
| Bare metal | 8 | 300 | 981.85 | 98% |

The 8-vCPU VM was judged acceptable for an initial deployment at 76% of ideal, with bare metal the documented escape hatch if proxying becomes an unacceptable bottleneck. The authors describe bare metal as achieving 96% in the text while their table reports 98%, a discrepancy worth noting rather than resolving silently. The gap between 4 and 8 workers on identical hardware is as informative as the VM-to-metal gap: worker count and host class interact, so neither alone predicts capacity. Because the engine was mocked, these numbers bound gateway overhead, not end-to-end latency.

## Image generation and the limits of conformance

Triton serves Stable Diffusion XL through a stack that converts PyTorch models to ONNX and builds TensorRT engines for specific batch sizes and dimensions, so kernel fusion and precision calibration beat native framework execution.

The seam is instructive. LiteLLM has no native Triton support for image generation and requires base64 responses, while Triton returns raw tensors. A FastAPI adapter exposes `/v1/images/generations` and `/v1/models`, constructs input tensors, calls `tritonclient.http`, and post-processes tensors into base64 PNG. Triton's multiprocessing client and dynamic batching handle concurrency, and built-in metrics expose latency, queue time, GPU memory utilization, and throughput. API conformance at the edge did not mean feature parity underneath; someone had to write and maintain the translation.

## Policy narrows the catalog

Model selection was constrained before it was technical. The Georgia Technology Authority prohibits DeepSeek and Qwen on state-owned IT resources, so those families were unavailable regardless of benchmark performance — a [[governance|governance]] constraint preceding any quality argument. The initial catalog reflected pilot use cases: Llama-3.1-70B-Instruct-AWQ-INT4 for text, InternVL3_5-14B-Instruct for image and video understanding, granite-embedding-278m-multilingual for embeddings, and Stable Diffusion XL for image generation.

Pilots included the Human-Augmented [[learning-analytics|Analytics]] Group, which supports research experience for online master's students in [[cs-education|computer science]]. One project built a Model Context Protocol tool that evaluates wildlife field-camera video, marking a video positive if any run detects a bird; SPIN's image/video-to-text model identifies the bird. The Open Source Program Office adapted training tutorials to SPIN.

## What this means for practice

- **Administrators.** Budget for the proxy tier as a first-class service. An 8-vCPU VM at 76% of ideal is a defensible pilot start, but plan the bare metal path before demand arrives.
- **Platform engineers.** Make the model name the stable contract and script every host, port, and key change into the gateway database. Set walltime with restart cost in mind: a 12-hour limit buys 5–10 minutes of downtime twice a day.
- **Educational technology developers.** Assume the OpenAI surface will not cover every modality. Image generation needed a dedicated adapter, and that adapter is now part of the operational surface area.
- **Policy and security staff.** Check institutional IT policy before benchmarking. Prohibited-vendor lists can remove whole model families and invalidate a comparison already run.

## Limitations

- Load tests used a mock inference engine, so they characterize LiteLLM and PostgreSQL overhead rather than end-to-end latency, model throughput, or time to first token.
- No concurrent-user study of real inference is reported; aggregate response rate is measured against an idealized target rather than a classroom or research workload.
- The text states bare metal achieved 96% of the ideal aggregate response rate while Table 1 reports 98%, and the paper does not reconcile the figures.
- The 5–10 minute downtime figure is operational observation during pilot service, not a controlled measurement across model sizes, cache states, and queue conditions.
- SPIN was deployed under limited availability to pilot groups, and the use cases are described rather than evaluated for learning, research productivity, or cost outcomes.
- The implementation is specific to one site's Slurm cluster and VMware vCenter provisioning, and its catalog is shaped by Georgia state IT policy, so transfer to PBS sites or other jurisdictions is argued rather than demonstrated.

## Citation

Rahaman, R., Liu, F., Shah, P., Suda, K., Guidry, M., Weiner, M. D., Young, J., & Metts, A. (2026). [*Service-Oriented Architecture for an On-Premises AI Gateway Without an On-Premises Cloud*](https://doi.org/10.1145/3785462.3815802). In *Practice and Experience in Advanced Research Computing (PEARC '26)*. ACM. https://doi.org/10.1145/3785462.3815802
