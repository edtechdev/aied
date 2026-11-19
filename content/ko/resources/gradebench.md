---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "교수가 선택한 루브릭 항목을 기준으로 실제 손글씨 대학 STEM 답안을 채점하는 프런티어 모델들을 위한 공개 리더보드입니다."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*영어 페이지의 자동 번역이며, 아직 원어민의 검수를 받지 않았습니다.*

GradeBench는 [[automated-assessment|자동 평가]]에 대해 좁지만 유용한 질문을 던집니다. 학생의 손글씨 답안, 교수의 루브릭, 참조 풀이, 그리고 교수가 실제로 선택한 루브릭 항목이 주어질 때, 프런티어 모델도 같은 항목을 선택하는가? 골드 라벨은 시험과 퀴즈에서 나온 실제 교수와 조교의 루브릭 선택이지, 재채점된 모델 산출물이 아닙니다.

## 이것으로 할 수 있는 것

어떤 채점 업체의 정확도 주장이든 신뢰하기 전에 리더보드를 읽고, 리더보드를 신뢰하기 전에 과제 구성을 읽으십시오. 이 [[benchmark|벤치마크]]는 열 개 이상의 기관에 걸친 45개 [[higher-ed|대학]] 강좌의 문항 125개에서 뽑은 과제 464개를 담고 있으며, 교수나 조교가 한 줄 한 줄 검토한 서술형 시험·퀴즈 문항으로 한정되고, 부분 점수 쪽으로 치우쳐 있습니다 — 만점 과제와 영점 과제는 모델이 그것들을 쉽게 풀기 때문에 각각 5%로 상한이 묶여 있습니다.

현재 리더보드의 최고점은 인간 일치도에 훨씬 못 미칩니다. 최고 모델은 정확한 루브릭 일치 57.3%에 도달하며, 사이트는 답안 1,000개당 비용 대비 정확도를 그래프로 보여 주는데, 0.8포인트 뒤진 모델의 비용은 약 7분의 1입니다. 채점은 물량 작업이므로 그 비용 축이 실용적으로 유용한 부분입니다.

독립적으로 구축된 두 번째 도구를 보려면 Learning Design Alliance의 [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark)를 참조하십시오. 호스팅 리더보드가 아니라 공개 저장소로 묶여 있으며, [[porcaro-ai-grading-benchmark-2026|Porcaro의 연구]]에 요약되어 있습니다.

## 누구를 위한 것인가

채점 도구가 검토 없이 성적을 내보내도록 허용할지 결정하는 교수자, 조달 요구 사항을 작성하는 평가 전문가, 그리고 에세이 채점 상관이 아니라 루브릭 수준의 표적이 필요한 연구자를 위한 것입니다.

## 참고사항과 유의점

GradeBench는 상업용 AI 채점 플랫폼인 Pensive가 공개하므로, 벤치마크와 제품이 같은 소유자를 공유합니다. 과제 구성은 문서화되어 있고 방어 가능하지만, 프레이밍은 업체의 것으로 취급하십시오. 최소 네 개 항목의 루브릭을 갖춘 STEM 시험을 다루므로, 에세이, 단답형, 토론 게시물은 제외됩니다 — [[humanities-education|인문학]] 채점의 대부분이 이루어지는 형식들입니다. 정확한 루브릭 일치는 엄격한 지표입니다. 두 채점자가 한 항목에서 불일치하면서도 둘 다 학생에 대해 옳을 수 있습니다. 점수는 2026년 11월 이용 가능한 모델 버전을 서술하며 앞으로 움직일 것입니다.

## 연결된 개념

- [[automated-assessment]] — 벤치마크가 측정하는 실천
- [[assessment-validity]] — 리더보드 점수가 대용하는 기준
- [[benchmark]] — 이 도구가 속한 더 넓은 도구 계열