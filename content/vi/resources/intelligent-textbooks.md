---
title: "Sách giáo trình thông minh"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Hướng dẫn mã nguồn mở của Dan McCreary về cách xây sách giáo trình thông minh: sách trực tuyến có tìm kiếm, điều hướng, bảng thuật ngữ, trắc nghiệm, đồ thị khái niệm và mô phỏng, dựng bằng MkDocs Material và AI tạo sinh."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Trang **Sách giáo trình thông minh** là hướng dẫn từng bước của Dan McCreary về việc xây *sách giáo trình thông minh* — những cuốn sách trực tuyến vượt qua PDF tĩnh bằng cách thêm tìm kiếm, điều hướng trang, bảng thuật ngữ, mục lục, quản lý trắc nghiệm, công thức được hiển thị, bản xem trước cho mạng xã hội, kiểm tra liên kết, và một **đồ thị khái niệm** dễ trực quan hóa hiển thị toàn bộ khái niệm trong một học phần cùng các phụ thuộc giữa chúng. Hướng dẫn lập luận rằng nhiều học phần hiện nay có thể hưởng lợi từ những cuốn sách trực tuyến chất lượng cao với các tính năng đó, và trình bày cách xây chúng bằng hệ thống dựng [MkDocs](http://mkdocs.com/) ghép với giao diện Material và AI tạo sinh để tạo và duy trì nội dung.

Bước đi định hình là cuốn sách được *soạn bằng Markdown và tạo ra bởi AI*, một trường hợp cụ thể của mẫu [[vibe-coding|soạn thảo có AI hỗ trợ]] áp dụng cho [[curriculum-design|nội dung học phần]]: thay vì tự tay duy trì một trang lớn, bạn mô tả học phần và để AI tạo sinh sản xuất và duy trì các trang, còn chuỗi công cụ lo phần điều hướng, tìm kiếm và đồ thị khái niệm. Một thư viện [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) đồng hành tuyên bố tự động hóa hơn 90% công việc cần để dựng một cuốn sách cấp 2 từ một bản mô tả học phần.

## Một tài nguyên hệ quả: MicroSims

Tài nguyên đồng hành tự nhiên của hướng dẫn này là thư viện **MicroSims** của McCreary tại <https://dmccreary.github.io/microsims/> (mã nguồn: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), nơi cung cấp các mô phỏng tương tác mà một cuốn sách giáo trình thông minh nhúng vào. Một *MicroSim* (mô phỏng vi mô) là một mô phỏng tương tác đơn giản được tạo bằng AI để giúp giáo viên giải thích một khái niệm, và nó có thể được nhúng vào một cuốn sách giáo trình thông minh hoặc bất kỳ trang nào chấp nhận `iframe`. MicroSims khác biệt ở ba điểm: **tạo có AI hỗ trợ** (các mẫu thiết kế được chuẩn hóa biến một mô tả bằng ngôn ngữ tự nhiên về một mô phỏng thành một tài sản chia sẻ được), **nhúng phổ quát** (một phần tử `iframe` HTML duy nhất đặt nó vào bất kỳ trang nào), và **mã trong suốt, sửa được** (không có hộp đen — một cú nhấp mở mô phỏng trong trình soạn thảo web, và một giấy phép Creative Commons cho phép hầu hết giáo viên dùng chúng mà không tốn phí giấy phép). Thuật ngữ này do Valerie Lockhart đặt năm 2023 sau khi bà thấy giáo viên và sinh viên có thể dựng mô phỏng bằng thư viện JavaScript p5.js với ít hoặc không cần đào tạo.

Dự án cũng công bố một JSON Schema cho siêu dữ liệu MicroSim để các công cụ AI có thể tạo các mô tả tìm kiếm được, với một sổ đăng ký MicroSim theo khía cạnh nằm trong lộ trình. Một bài báo nghiên cứu mô tả khung này — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — có trên arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Các mô phỏng mẫu gồm Bóng Nảy, Chuyển động Ném xiên, Hài âm Dây, Trò chơi Sự sống của Conway, Công thức Euler, và một biểu đồ lợi suất thị trường chứng khoán, mỗi cái chạy trực tiếp trên trang.

## Dành cho ai

Giảng viên và nhà thiết kế giảng dạy muốn xây hoặc duy trì một cuốn sách giáo trình cho học phần, đặc biệt trong giáo dục đại học và đào tạo chuyên môn, cùng những người phát triển đội ngũ giảng viên và bất kỳ ai dùng AI tạo sinh để soạn nội dung giáo dục. Nó phù hợp với nhà giáo dục thoải mái với quy trình Markdown-và-Git (hoặc sẵn lòng học nó) và muốn AI lo phần kỹ thuật của trang — tìm kiếm, điều hướng, đồ thị khái niệm — để họ tập trung vào sư phạm.

## Ghi chú và lưu ý

Đây là hướng dẫn của người thực hành cùng chuỗi công cụ, không phải một nghiên cứu đã bình duyệt — nó trình bày một quy trình và lý lẽ giáo dục của chính nó (“sách giáo trình thông minh dẫn sinh viên qua các khái niệm trên hành trình tìm kiếm tri thức”) chứ không phải bằng chứng về kết quả học tập. Bài báo nghiên cứu MicroSim là thứ gần nhất với nền tảng thực nghiệm, và nó được tự công bố trên arXiv. Cả hai dự án đều mã nguồn mở (kho sách giáo trình thông minh báo giấy phép MIT và 38 sao; MicroSims báo một giấy phép Creative Commons và 13 sao) và được duy trì tích cực. Đồ thị khái niệm và cấu trúc lấy bảng thuật ngữ làm đầu thực sự hữu ích cho việc khám phá, nhưng hướng dẫn giả định một quy trình soạn thảo khá kỹ thuật — MkDocs, Git và công cụ AI tạo sinh — điều có thể là rào cản với một số giảng viên. Tính đến thời điểm thu thập, sổ đăng ký MicroSim vẫn chỉ nằm trong lộ trình, nên việc tìm một mô phỏng cụ thể đã có phụ thuộc vào tìm kiếm và điều hướng của chính trang.

## Khái niệm liên quan

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
