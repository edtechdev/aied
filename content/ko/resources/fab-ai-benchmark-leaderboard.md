---
title: "Fab AI 벤치마크 리더보드"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "저소득·중소득 국가를 대상으로 하는 교육 벤치마크의 모델 리더보드로, 교수법, 기초 문해력, SEND, 시각 수학, 다국어 성능을 다루며 가격과 공개 가중치 열을 제공합니다."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [benchmark, digital-divide, equity-in-ai-education]
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

Fab AI는 이 벤치마크가 대상으로 삼는 [[global-south|저소득·중소득 국가]]처럼 예산, 대역폭, 언어 커버리지가 제약된 곳에서 중요한 교육 과제로 모델을 평가하며, 그 결과를 논문이 아니라 정렬 가능한 리더보드로 공개합니다. 핵심 표는 SEND, 시각 수학, 시각적 추론과 나란히 교수법 벤치마크 점수를 매기며, 다중언어 교수법, 기초 문해력, 소리 내어 읽기 평가를 위한 별도 탭이 있습니다.

## 이것으로 할 수 있는 것

약 300개 모델을 현재 90%대 초반에서 21%까지 분포하는 교수법 점수로 비교한 뒤, 교육부가 실제로 저울질해야 하는 것 — 백만 토큰당 가격, 매개변수 수, 공개 가중치, 출시일 — 으로 정렬하십시오. 하단의 분포가 유용한 부분입니다. 2B 미만 공개 모델은 교수법 벤치마크에서 21%와 43% 사이에 놓이는 반면 프론티어 모델은 90%대 초반에 놓여, "이것을 저렴한 하드웨어에서 오프라인으로 돌릴 수 있는가"를 추측이 아니라 정량화된 트레이드오프로 바꿉니다.

[[multilingual-learning|다중언어]] 교수법 탭이 이 페이지를 북마크할 이유입니다. 대부분의 교육 벤치마크는 영어 전용이며, 모델의 교수법이 번역을 견디는지는 다중언어 체제의 교육부가 답을 얻어야 할 바로 그 질문입니다. 데이터는 CSV로 내려받을 수 있어 비교를 로컬에서 다시 실행할 수 있습니다.

## 누구를 위한 것인가

국가 시스템을 위해 모델을 고르는 정책입안자와 조달 팀, AI 지원 교육의 [[digital-divide|접근 격차]]를 연구하는 연구자, 그리고 영어 시험이 아닌 교수법 목표가 필요한 개발자입니다.

## 참고사항과 유의점

리더보드는 벤치마크 자체의 과제로 모델을 측정합니다. 높은 교수법 점수는 그 문항들에 대한 증거이지 교실에 대한 증거가 아닙니다. 가격 열은 입력과 출력 토큰 가격을 3:1 비율로 섞은 것으로, 이는 모델링 선택이지 특정 배포의 실제 비용이 아닙니다. 언어와 로컬 호스팅 모델의 커버리지는 새 모델이 나타남에 따라 움직이며, 소형 모델의 하위 점수는 능력만큼이나 과제 형식을 부분적으로 반영합니다. Fab AI의 틀 짓기는 명시적으로 저소득·중소득 국가를 향하므로, 벤치마크의 문항 집합은 그 맥락을 반영하며 일반 교육 순위로 읽혀서는 안 됩니다. 출시일을 확인하십시오. 여러 항목이 현재 모델 세대보다 앞섭니다.
