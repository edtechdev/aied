---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
updated: "2026-09-24T05:08:48-04:00"
type: resource
summary: "교수설계 증거 기반에 비추어 강좌를 감사하는 열한 개 Claude Code 스킬의 오픈소스 모음으로, 모든 권고에 증거 등급을 태그합니다."
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-11"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

**idstack**은 증거 기반 [[learning-design|교수설계]]를 위한 열한 개 스킬의 오픈소스 모음으로, 동반 Chrome 사이드 패널 확장 프로그램과 함께 Claude Code 플러그인으로 배포됩니다. 이 스킬들은 강좌를 초안 작성하는 대신 감사합니다: 수정된 Bloom의 분류에 비추어 학습목표를 분류하고, 학습목표·활동·평가 간의 구성적 정렬을 점검하고, 인지 부하 문제를 표시하며, WCAG 2.1 AA와 Universal Design for Learning에 비추어 접근성을 검토합니다. 모든 권고에는 메타분석과 무작위 통제 시험의 T1부터 전문가 의견의 T5에 이르기까지의 증거 등급이 부여됩니다. 프로젝트는 인용이 열한 개 연구 영역에 걸친 동료 검토 논문 108편에 기반한다고 밝히며, 그 수치는 프로젝트 자신의 주장이고, 서지 목록은 Markdown으로 공개되어 검토자가 확인할 수 있습니다.

강좌는 Canvas API 연결, IMS Common Cartridge 파일, SCORM 패키지, 저작 도구의 PDF 내보내기, 또는 붙여넣은 문서를 통해 입력됩니다. 공유 프로젝트 매니페스트가 세션 간에 강좌를 기억하고, 파이프라인 스킬이 완료된 작업을 건너뛰면서 설계 단계를 연결합니다. 검토는 교수 존재, 사회적 존재, 인지적 존재를 구분하는 Community of Inquiry 틀과 Quality Matters의 여덟 개 기준에 대해 보고하고, 권고를 심각도에 따라 순위를 매깁니다.

## 채택하기 전에 알아야 할 것

이 플러그인은 설치에 Claude Code와 bash 셸이 필요합니다. PowerShell과 cmd는 설정 스크립트를 실행할 수 없으며, 점수 추이에는 Python 3을 권장합니다. 강좌 데이터는 독자 자신의 기기에 있는 프로젝트 폴더에 남아 있으며, 사용자가 호출하는 Canvas API 호출과 같은 통합을 통해서만 나갑니다. Chrome 확장의 실시간 추론에는 독자 자신의 무료 Google AI Studio API 키가 필요하지만, 시뮬레이션 모드는 키 없이도 시연할 수 있습니다. 프로젝트는 버전 3.5.1.0에서 스스로를 베타로 표시하며 마이너 버전 간 호환성이 깨지는 변경을 경고하고, 명명된 저자가 아니라 savvides GitHub 계정으로 발행됩니다.

## 연결된 개념

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
