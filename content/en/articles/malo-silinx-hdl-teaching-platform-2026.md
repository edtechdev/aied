---
title: "Silinx: An Open, Browser-Based HDL Design Platform for Teaching Digital Systems on FPGA Boards"
created: "2026-11-11T09:13:14-05:00"
updated: "2026-11-11T09:14:54-05:00"
type: article
evidence_context: educational
published: 2026-11-09
page_kind: [framework]
research_method: [system development]
discipline: [cs education, engineering education]
level: [higher ed, undergraduate]
audience: [instructors, educational technology developers, software developers]
sources: ['raw/papers/malo-silinx-hdl-teaching-platform-2026.md']
source_url: "https://arxiv.org/abs/2611.11741"
source_depth: full text
confidence: high
technology: [open-source]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: drafting
    date: "2026-11-11"
    agent: hermes-agent
verified: [citation, numbers, links]
---

> **Synthesis:** Digital systems courses keep teaching on FPGA boards whose vendor toolchain stopped being maintained in 2013: the Basys2, Nexys2, Nexys3 and Atlys need Xilinx ISE 14.7, which does not run on macOS or natively on Apple silicon and installs awkwardly on current Windows and Linux. Malo's answer is Silinx, a free AGPL-3.0 platform that keeps ISE's Project Navigator workflow but runs entirely in a browser — VHDL, Verilog and C/C++ through an HLS flow, plus schematic, ASM-chart, state-diagram, Karnaugh-map and Petri-net entry that generate HDL. Designs are checked with beginner-facing explanations, simulated, run on an emulated board, built with Yosys and nextpnr compiled to WebAssembly, and programmed over WebUSB. On 45 open-source designs built by both flows it used 15% fewer slices than ISE at the area goal and 21% fewer at the speed goal, with bitstreams byte-identical to ISE's. The paper is a technical validation of a teaching tool built on [[open-source|open-source]] components, not a study of learning with it.

## Key Findings

1. **The problem is a discontinued toolchain, not a lack of hardware.** Boards built on Spartan-3E and Spartan-6 parts require ISE 14.7, discontinued since 2013 and unsupported on macOS and Apple silicon.
2. **The replacement runs with nothing to install.** Synthesis, placement, routing, bitstream generation and board programming all execute in the browser for the supported boards, with other families reachable through a local ISE server.
3. **Silinx's bitstreams match the vendor tool.** Designs routed on the measured Spartan-3E device descriptions pass ISE's design rule check and produce byte-identical bitstreams.
4. **The open flow was smaller and often faster than ISE.** Over 45 designs built by both, geometric means were 15% fewer slices and 16% fewer LUTs at the area goal, and 21% fewer slices and 21% fewer LUTs at the speed goal.
5. **It accepted HDL the vendor synthesis tool rejected.** XST could not read 15 of the 67 designs in the test corpus — system functions such as $clog2, VHDL-2008 constructs, non-work [[libraries]] — and rejected 7 more over pin constraints, all of which Silinx built.
6. **Language coverage is the pedagogic point.** Because current textbook and online-example idioms build, course material does not have to be rewritten to match a legacy tool's dialect.
7. **The tool itself was written with an AI coding agent.** The author states that [[agentic-ai|Claude Code]] sessions wrote the code, tests and documentation while he set direction, filed issues and reviewed, and that the comparison has been run since mid-October 2026.

## What the platform replaces

Introductory [[cs-education|digital systems courses]] teach combinational logic, state machines and their description in an HDL, and end with a circuit running on a real board. That last step is where the toolchain bites: a student on a modern laptop faces a multi-gigabyte installer for software the vendor abandoned a decade ago, and lab time goes into installation rather than design.

Silinx keeps the workflow instructors already know — the ISE 14.x Project Navigator — so existing lab guides and habits still apply, and moves the implementation underneath into the browser. A module can be written directly, generated from a drawing, or written in C/C++ through an HLS path compatible with AMD's Vitis HLS that passes all 73 of its introductory examples. The [[open-source|open-source]] toolchain is Yosys and nextpnr compiled to WebAssembly, with Silinx's own device data, timing model and bitstream writer for the Spartan-3E and Spartan-6 families, built by black-box observation of ISE's documented outputs, plus the existing iCE40 tools for Lattice boards.

## How the technical claim was tested

The validation is an equivalence test rather than a learning study. ISE serves as the oracle: for the same placed and routed design, Silinx's bitstream must be byte-identical and must pass ISE's design rule check. A corpus of 67 open-source designs — CPUs such as T80 and PicoRV32, peripherals, cryptographic cores, floating-point units and standard benchmark suites — was built by both flows on the same chip at three optimization goals.

At the speed goal Silinx used 21% fewer logic LUTs and 21% fewer slices in geometric mean, and at the area goal 16% fewer LUTs and 15% fewer slices; flip-flop counts were close to parity. Critical path came out 14% shorter at the area goal and 8% shorter at the speed goal, but 12% longer at the fast goal, where the paper is explicit that its result is below ISE's and that the remaining gap lies in routing. Build times were 80% and 84% shorter at the area and fast goals and 11% shorter at the speed goal, on different machines and therefore indicative only.

## Why a zero-install tool matters for teaching

A browser tool changes the logistics of a lab more than its [[benchmark|benchmarks]] do. Students can work on a tablet or a borrowed laptop, an instructor can hand out a link instead of an installer, and a course can keep using boards the department already owns rather than replacing hardware because the vendor's software aged out. The paper's limitations section is direct that these are design arguments, not measured effects: Silinx is used in the author's courses, and a study of its classroom use and its effect on student learning is future work.

## What this means for practice

- **Instructors:** Price the toolchain, not just the board. A board that needs a 2013 installer costs lab time on every new laptop; a browser-based flow removes that recurring cost.
- **Instructors:** Check that your HDL idioms build before rewriting course material. The vendor tool could not read 15 of the 67 designs here and rejected 7 more over pin constraints, the kind of papercut that turns into a lab worksheet rewrite.
- **Educational technology developers:** Treat byte-identical output against the incumbent as the acceptance test. Equivalence with the tool instructors already trust is what makes substitution low-risk.
- **Administrators:** Depreciation schedules should include software support. Keeping existing FPGA boards usable for a decade longer is a capital-avoidance argument that competes with buying new boards.

## Limitations

- The paper reports technical validation only; there is no classroom study, no student outcome and no comparison of learning with Silinx against learning with ISE.
- The quality comparison covers the Spartan-3E family only, and the shipped device descriptions are still the ones computed from an ISE report rather than the measured dies.
- At the fast optimization goal Silinx's critical path was 12% longer than ISE's, and at the speed goal the remaining gap lies in routing.
- Build-time comparisons ran on different machines with Silinx in WebAssembly, so the run-time figures are indicative rather than controlled.
- Boards outside the supported families still need a local ISE 14.7 installation through Silinx's server, so the zero-install claim is scoped to Spartan-3E, Spartan-6 and iCE40 teaching boards.

## Citation

Maló, P. (2026). [*Silinx: An Open, Browser-Based HDL Design Platform for Teaching Digital Systems on FPGA Boards*](https://arxiv.org/abs/2611.11741). arXiv:2611.11741.
