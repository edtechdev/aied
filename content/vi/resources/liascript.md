---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Phương ngữ Markdown mở biến một tệp văn bản thuần thành khóa học tương tác trong trình duyệt, có trắc nghiệm và mã chạy được, kèm một trợ lý đa tác tử để dựng khóa học."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

**LiaScript** là một phương ngữ Markdown mở rộng cùng một trình thông dịch cho nó. Một tệp văn bản thuần trở thành một khóa học tương tác: cùng tài liệu đó có thể được đọc như một bài tường thuật, trình chiếu như slide, hoặc làm qua như một khóa học, tất cả trong trình duyệt. Không cần cài gì để viết hay để đọc.

## Bạn có thể làm gì với nó

Trắc nghiệm có đủ những dạng mà giáo viên mong đợi, gồm trắc nghiệm một đáp án, câu hỏi ma trận, nhập văn bản, danh sách thả xuống và điền vào chỗ trống, viết trực tiếp bằng Markdown. Các khối mã có thể được làm cho sửa được và chạy được cho các bài hướng dẫn [[cs-education|lập trình]], và một hệ thống macro bọc các thư viện JavaScript thành những khối tái dùng được để sơ đồ tương tác không cần mã từ từng tác giả. Một khóa học được lưu trữ ở bất cứ đâu tác giả vốn đã giữ văn bản, không bị khóa vào một dịch vụ nào, và mọi thứ chạy phía máy khách, nên một khóa học đã tải vẫn hoạt động ngoại tuyến. LiaScript Exporter đóng gói một khóa thành SCORM cho Moodle, ILIAS và các [[edtech-platform|hệ thống quản lý học tập]] khác.

## Tác tử giảng dạy để dựng khóa học

Dự án cũng công bố một **[tác tử giảng dạy](https://github.com/LiaScript/teaching-agent)** để soạn các khóa học LiaScript, cấp phép theo Boost Software License 1.0. Bốn tác tử cho giảng dạy, thiết kế trực quan, rà soát người học và xuất bản làm việc quanh một tệp dự án duy nhất giữ trạng thái khóa học, với quy trình định nghĩa trước: mục tiêu, độc giả và phương pháp dạy được chốt trước khi viết bất kỳ học liệu nào, và các cổng kiểm tra theo sau. Một bản nháp có thể được rà soát từ một persona người học có tên để kiểm tra [[cognitive-offloading|tải nhận thức]] và kiến thức nền được giả định. Tác tử không phụ thuộc trình soạn thảo, tạo cấu hình cho Claude Code, Copilot, Codex, Cursor hoặc một khung chat web từ một đặc tả duy nhất, và kho mã đồng thời là một ví dụ hoàn chỉnh, chứa một khóa học sáu đơn vị về Chỉ thị NIS2 của EU và một tài liệu mô tả cách nó được tạo ra.

## Ghi chú và lưu ý

LiaScript miễn phí, không có gói trả phí và không cần tài khoản, và được phát triển công khai theo BSD-3-Clause, nên các cơ sở giáo dục có thể tự vận hành và sửa đổi nó. Tính năng Lớp học Trực tiếp đáng được xem xét trước khi bạn dựa vào nó ở quy mô lớn, vì việc đồng bộ thời gian thực dùng một dịch vụ chia sẻ chứ không phải hiển thị thuần cục bộ. Tác tử giảng dạy còn non và ít được dùng, nên hãy coi nó là một nguyên mẫu đang hoạt động chứ không phải một sản phẩm được hỗ trợ.

## Khái niệm liên quan

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]
