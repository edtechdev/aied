---
title: "RAID 벤치마크 리더보드"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "RAID에서 점수가 매겨진 AI 텍스트 탐지기 공개 리더보드입니다. RAID는 모델, 도메인, 디코딩 설정, 적대적 공격에 대한 강건성을 검증하기 위해 구축된 벤치마크입니다."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

RAID는 [[ai-detection|AI 텍스트 탐지]]에 관한 대부분의 진지한 주장 뒤에 있는 벤치마크이며, 그 리더보드는 탐지기의 공표된 정확도가 모델, 도메인, 디코딩 설정, 의도적 공격의 변경을 견디는지 확인할 곳입니다. 항목은 테스트 세트에서 점수가 매겨지며, 저장소의 제출 절차를 따르는 누구나 제출할 수 있습니다.

## 이것으로 할 수 있는 것

도메인 — 초록, 도서, 뉴스, 시, 레시피, Reddit, 리뷰, 위키 — 별, 디코딩 전략(그리디 또는 샘플링)별, 반복 페널티별, 그리고 공백, 호모글리프, 동의어 치환, 바꿔쓰기, 제로폭 공백, 관사 삭제를 포함한 적대적 공격별로 필터링하십시오. 그런 다음 탐지기를 지표 전반에 걸쳐 비교하십시오. AUROC, 위양성률 5%에서의 TPR, 1%에서의 TPR입니다.

그 필터 집합이 핵심입니다. 집계에서 1.000에 가까운 점수를 받는 탐지기도 텍스트가 바꿔쓰기되거나 출처 모델이 바뀌면 무너질 수 있으며, 리더보드는 기관이 [[academic-integrity|부정행위]] 사건을 그것에 걸기 전에 그 하락을 볼 수 있게 합니다. 1% 위양성 열이 교육에서 가장 중요합니다. 기관 규모에서 1% 오류율은 수백 명의 학생이 잘못 고발당함을 뜻하기 때문입니다.

## 누구를 위한 것인가

탐지 방법을 평가하는 연구자, 탐지기를 참조할 수 있는 정책을 작성하는 관리자, 그리고 강의계획서에 그렇게 말하기 전에 "이것이 탐지될 수 있는가?"에 대한 구체적 답을 원하는 교수자입니다.

## 참고사항과 유의점

이 벤치마크는 부정행위가 아니라 기계 생성 텍스트의 탐지를 측정합니다. 계획, 개요 작성, 수정에 AI를 사용하는 학생은 탐지기가 잡도록 만들어지지 않은 텍스트를 생산하며, [[language-learning|제2언어로 쓰는]] 학생은 리더보드가 보여 줄 수 없는 알려진 위양성 위험입니다. RAID는 학술 팀이 유지하는 연구 산출물입니다. 커버리지는 테스트 세트의 생성 모델을 추적하므로, 벤치마크가 갱신될 때까지 최신 모델은 과소대표될 수 있습니다. 리더보드는 탐지기의 순위를 매기지 공급업체의 데이터 처리 관행의 순위를 매기는 것이 아니며, 높은 AUROC는 학생 과제를 그 서비스에 제출하는 것이 여러분의 관할에서 합법적이거나 윤리적인지에 대해 아무것도 말해 주지 않습니다.
