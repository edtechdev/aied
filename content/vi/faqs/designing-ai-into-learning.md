---
title: "Nên thiết kế AI vào trải nghiệm học tập như thế nào?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
audience: [instructional designers, instructors]
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Đề cương học phần có một dòng ghi “hoạt động AI” mà không ai nói được nó thay thế hoạt động nào. Hoặc một giảng viên đã yêu cầu thêm chatbot vào một khóa học vốn đang chạy tốt, và việc của bạn là đặt nó vào mà không làm hỏng phần đã khiến khóa học ấy chạy tốt.

Hãy bắt đầu từ mục tiêu học tập và từ hoạt động tạo ra mục tiêu đó. Cùng một mô hình có thể là giàn giáo, một người bạn đồng hành theo [[socratic-method|phương pháp Socratic]], một người đọc bản nháp, một [[simulation|mô phỏng]], hay một cỗ máy trả lời, và bạn nhận được cái nào là do thiết kế chứ không do mô hình. Hãy gọi tên chế độ bạn đang xây, đặt nỗ lực của người học trước khi bất kỳ trợ giúp nào xuất hiện, và giữ ít nhất một lối đi qua khóa học mà chạy được mà không cần công cụ.

## Tóm tắt

**1.** Viết câu nói rõ người học làm được gì sau đó mà không cần công cụ, rồi kiểm tra mọi tính năng AI dựa trên câu đó.

**2.** Sắp xếp chuỗi tương tác: người học thử, AI hỗ trợ, người học đánh giá hoặc sửa, người học thể hiện.

**3.** Gọi tên chế độ trên thang ICAP. Bỏ qua và giàn giáo có thể là cùng một công cụ ở các bậc khác nhau.

**4.** Đặt AI vào chỗ chuỗi khóa học vốn đã dự định một hoạt động cụ thể, không phải ở cuối như một phần thưởng thêm.

**5.** Giữ công cụ lại trong khi một năng lực đang hình thành, rồi trả nó về ở một điểm kiểm tra mà sinh viên không thể làm giả.

## Quyết định người học làm gì khi không có công cụ

Khái niệm [[pedagogy|Sư phạm và các chiến lược dạy học]] trong cơ sở tri thức cung cấp phép thử: cấu hình này có giữ được hoạt động tạo ra việc học như dự định không? Hãy trả lời trên giấy, trước khi bất kỳ ai chọn một tính năng.

[[finkelstein-principled-ai-education-2025|Khung giáo dục AI có nguyên tắc]] nêu quy tắc chung: công nghệ nên tăng cường thay vì thay thế những năng lực con người mà giáo dục định phát triển. Viết thành phép thử cho một học phần, điều đó có nghĩa là gọi tên năng lực, gọi tên hoạt động xây năng lực ấy, và hỏi xem AI nằm bên trong hoạt động đó hay bên cạnh nó.

## Đặt nỗ lực trước sự trợ giúp

Mẫu mặc định chịu được tiếp xúc với một lớp học thật: **người học thử, AI hỗ trợ, người học đánh giá hoặc sửa, người học thể hiện sự hiểu biết.**

Trong thực tế, điều đó có nghĩa là yêu cầu một dự đoán hoặc một lời giải ban đầu trước khi bất kỳ trợ giúp nào xuất hiện, và ưu tiên câu hỏi, gợi ý, ví dụ, phản biện và [[feedback|phản hồi]] hơn là hoàn thành ngay. Hãy giữ [[productive-failure|thất bại có ích]] ở những chỗ nó phục vụ việc học. Yêu cầu kiểm chứng các khẳng định có hệ quả, đưa vào phần giải thích và [[learning-by-teaching|dạy lại]], và giảm dần hỗ trợ khi năng lực lớn lên. Giữ một số việc không có AI để người học tự cân được mình làm được gì khi làm một mình.

Bản tổng hợp [[reducing-ai-misuse|Giảm lạm dụng AI]] khuyến nghị đúng hình dạng đó: một chuỗi nghĩ trước, AI sau, phản tư, với những điểm kiểm tra đánh giá có chủ đích.

## Gọi tên chế độ bạn đang thiết kế

[[thermomix-genai-education-analogy-2026|Phép loại suy cỗ máy nhà bếp của Rummel, Nachtigall và Panadero]] đặt lại câu hỏi, từ chỗ người học có dùng [[generative-ai|AI sinh tạo]] hay không sang chỗ việc dùng đó định hình họ trở thành ai. Ánh xạ lên [[icap-framework|ICAP]] và [[samr-model|SAMR]], nó cho ta một cái thang. Giao trọn một bài tập cho AI mà không sửa gì và không có [[critical-thinking|tương tác phê phán]] là thay thế thụ động, và nó có nguy cơ gây [[cognitive-offloading|mất kỹ năng và phụ thuộc quá mức]]. [[prompt-engineering|Tinh chỉnh prompt]] và kiểm tra chéo đầu ra đòi hỏi [[prior-knowledge|kiến thức nền]] và [[self-regulated-learning|tự điều chỉnh việc học]], tức là chủ động hoặc gia tăng. Dùng AI để động não, lập dàn ý và đánh giá công việc gốc là kiến tạo hoặc sửa đổi. AI như một đối tác đối thoại thật để cùng kiến tạo và phản hồi thích ứng là tương tác hoặc định nghĩa lại.

Hàm ý rất trực tiếp. Cùng một công cụ là lối vòng ở bậc này và là [[scaffolding|giàn giáo]] ở bậc kế, nên tài liệu thiết kế phải gọi tên chế độ dự định.

## Đặt nó vào chỗ chuỗi dự định có một hoạt động

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec và Horvat]] phân tích chuỗi hoạt động dạy và học theo kế hoạch gồm 29.064 hoạt động trên 554 khóa học và thấy một ngữ pháp thiết kế rõ rệt. Các hoạt động kiểu tiếp nhận là điểm vào phổ biến nhất và là loại đơn lẻ lớn nhất, trên 20%. Loại hình học tập đi theo mức Bloom dự định, với tiếp nhận giảm từ khoảng 50% ở mức 1 xuống khoảng 20% ở mức 6, còn sản xuất tăng lên trên 20% ở mức 5 và 6. Chuyển tiếp mạnh nhất trong dữ liệu là từ đánh giá sang thảo luận, ở 0.332.

Hai bài học rút ra cho thiết kế AI. Đặt công cụ vào chỗ chuỗi dự định có một loại hoạt động. Và vì phản hồi đi kèm với [[collaborative-learning|hợp tác]], [[group-work|làm việc nhóm]] và sự hiện diện của [[teacher-role|giảng viên]], nên các cấu trúc đồng đẳng và đồng bộ là nơi hỗ trợ AI nên cắm vào, chứ không phải nơi nó nên thay thế.

## Quyết định giữ lại gì, và trả lại khi nào

[[refrain-amplify-genai-curriculum-2026|Khung “giữ lại, rồi khuếch đại” của Torres-Sahli và các cộng sự]] đưa việc này lên cấp chương trình. Giữ một công cụ tạo sinh lại trong khi một năng lực đang hình thành, rồi trả nó về khi sinh viên có thể điều khiển nó, đánh giá được thứ nó trả về, và chịu trách nhiệm về nó, với một điểm kiểm tra khó làm giả ở mỗi bản lề.

Các thiết bị được điều chỉnh bởi một tiêu chí hình thành so với [[cognitive-offloading|giảm tải nhận thức]]: được phép ở nơi chúng hỗ trợ công việc có gắng sức, bị loại ở nơi chúng rút cạn sự chú ý. Điều đó biến các quyết định về giảm tải thành một câu hỏi về [[curriculum-design|chương trình]] và [[governance|quản trị]], đến trước thiết kế cấp khóa học chứ không phải sau.

## Kiểm tra xem sự ăn khớp có thật

[[mcinnes-salvaging-constructive-alignment-genai-2026|Phân tích diễn ngôn của McInnes và các cộng sự]] trên 14 văn bản hướng dẫn giáo dục đại học cảnh báo rằng lời khuyên đóng khung theo hiệu suất, như dùng AI sinh tạo để soạn chuẩn đầu ra, rubric và đề cương khóa học, tạo ra [[assessment|sự ăn khớp]] trông có vẻ ăn khớp trong khi bỏ bê nửa kiến tạo. Chuẩn đầu ra, hoạt động và đánh giá được tạo ra như những hạng mục rời rạc thay vì phụ thuộc lẫn nhau.

Cách chữa của họ là sắp xếp lại trình tự. Nhà giáo dục cần hiểu sự ăn khớp kiến tạo đủ để chỉ dẫn, chất vấn và từ chối đầu ra của AI trước khi giao phó bất kỳ phần nào, vì chấp nhận một bề mặt có vẻ hợp lý chính là thất bại đánh giá mà giảng viên vẫn cảnh báo sinh viên. Ở nơi dùng AI, họ lập luận cho những hệ thống bị giới hạn bởi thể chế, [[rag|tăng cường truy xuất]], được cấu hình quanh chính sách và chuẩn chất lượng tại chỗ thay vì các mặc định chung huấn luyện trên internet.

## Những gì nhà thiết kế giảng dạy hiểu sai

Thêm AI vào được tính là can thiệp. Thứ làm thay đổi việc học là hoạt động người học thực hiện, và AI chỉ là một phần của bối cảnh cho hoạt động đó. Một gợi ý đặt đúng chỗ và một câu trả lời đặt đúng chỗ có thể chạy trên cùng một mô hình và tạo ra kết quả học tập trái ngược.

Viết giấy phép là phần việc thiết kế. Một giấy phép đặt ra điều được phép. Nó không đặt ra trình tự, chế độ, hay điểm kiểm tra, và ba thứ đó quyết định hoạt động có sống sót hay không.

Hiệu suất là mục tiêu của việc thiết kế lại. Soạn chuẩn đầu ra và rubric bằng một mô hình thì nhanh, và phân tích 14 văn bản thấy kết quả có thể trông ăn khớp trong khi các phần thôi hỗ trợ lẫn nhau.

## Những gì sẽ quay lại với bạn

**“Sinh viên kiểu gì cũng dùng nó, nên thiết kế quanh nó là ngây thơ.”** Họ sẽ dùng, và đó chính là lý do để chỉ định chế độ và dạy nó. Một học phần gọi tên chế độ cho sinh viên một thứ để tuân theo.

**“Chúng tôi không có thời gian sắp xếp lại cả một khóa học.”** Vậy thì sắp xếp lại một học phần và một bài đánh giá. Bản lề giữ lại rồi khuếch đại là một điểm kiểm tra, và chuỗi nghĩ trước là ba chỉ dẫn trên một tờ phát tay.

**“Tính năng AI của chúng tôi đã có rào chắn.”** Rào chắn hạn chế điều mô hình nói. Chúng không quyết định người học có thử trước hay không, hỗ trợ có giảm dần hay không, hay có lối đi không AI hay không. Đó là những quyết định thiết kế trong khóa học của bạn, không phải cài đặt trong sản phẩm.

## Việc cần làm trong tuần này

**1.** Viết câu về hiệu suất không có trợ giúp cho học phần và đặt nó lên trên danh sách hoạt động.

**2.** Đánh dấu chế độ ICAP dự định bên cạnh mọi hoạt động AI trong đề cương.

**3.** Chuyển một hoạt động AI để người học thử bài toán trước.

**4.** Chọn một lối đi không AI qua học phần và ghi nhãn nó cho sinh viên.

**5.** Gọi tên một bản lề nơi công cụ bị giữ lại, và điểm kiểm tra trả nó về.

## Đi tiếp từ đây

[[learning-design|Thiết kế giảng dạy]], [[active-learning|Học tập chủ động]] và [[scaffolding|giàn giáo]] mang từ vựng thiết kế. Về các mặc định ở cấp tương tác quyết định một hoạt động được thiết kế có giữ được việc học hay không, xem [[reduce-ai-cheating|giảm gian lận với AI]] và [[redesign-assessment-ai-era|thiết kế lại đánh giá thời AI]]. [[designing-educational-ai-software|Thiết kế phần mềm giáo dục AI]] nói về cách cùng những nguyên tắc đó ràng buộc chính phần mềm, còn [[developing-ai-tutor|Xây dựng gia sư AI]] chuyển chúng thành kiến trúc của một gia sư.
