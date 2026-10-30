---
title: "Làm sao tôi kiểm tra được liệu câu hỏi trắc nghiệm và đề thi do AI tạo ra có thực sự tốt?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Bạn yêu cầu hai mươi câu hỏi từ ghi chú bài giảng của mình. Chúng trở về kèm đáp án, lời giải thích, nhãn độ khó và các hạng mục trong thang phân loại Bloom, trong một tài liệu được định dạng trông như đã hoàn thiện. Tên bạn sắp được ghi lên đó.

Câu trả lời ngắn để nói với đồng nghiệp: câu hỏi được tạo ra là ứng viên, không phải một bài đánh giá. Hãy tự giải từng câu, kiểm tra xem câu hỏi đòi hỏi sinh viên thực sự làm gì, và tìm hiểu cách sinh viên phản hồi với nó trước khi nó được tính điểm. Trong hai nghiên cứu lớn nhất của cơ sở tri thức này, tín hiệu đáng chú ý không phải là việc tạo câu hỏi có hiệu quả, mà là chỗ nó thất bại. Việc tạo lặp đi lặp lại bên trong một quy trình chuyên biệt cho học phần đã tạo ra những đề trắc nghiệm dùng được trên 71 lớp đại học ([[assessing-quality-ai-generated-exams-field-2025|Isley và cộng sự, 2025]]). Trong một cuộc kiểm toán khoa học dữ liệu trên 311 câu hỏi đã đưa vào sử dụng, các nhãn độ khó của mô hình bám gần như hoàn hảo vào các mức Bloom mà nó đã tạo ra cùng lúc (Spearman ρ = 0.90) trong khi bám vào điểm số sinh viên thực sự đạt ở mức ρ = 0.06 ([[student-llm-use-ai-question-difficulty-data-science-2026|An và Wang, 2026]]). Nhãn đó là một mô tả về prompt, không phải một phép đo câu hỏi.

## Phiên bản ngắn

**1.** Viết ra kết quả học tập và bằng chứng mà một câu trả lời đạt yêu cầu sẽ cung cấp, trước khi bạn tạo ra bất cứ thứ gì.

**2.** Lập một bản đồ đề để bạn thấy được tập câu hỏi lấy mẫu những kết quả nào và với tần suất bao nhiêu.

**3.** Tự giải mọi câu hỏi trước khi tin vào đáp án, và đọc lời giải thích như một khẳng định cần được kiểm tra.

**4.** Hỏi xem sinh viên phải làm gì để trả lời câu hỏi. Một câu nói “phân tích” mà chỉ đòi ghi nhớ thì vẫn là câu hỏi ghi nhớ.

**5.** Coi nhãn độ khó là siêu dữ liệu của prompt, không phải một phép đo tâm trắc.

**6.** Chạy thử các câu hỏi và xem chúng vận hành ra sao, rồi sửa những câu yếu.

## Bắt đầu từ việc học mà bạn muốn có bằng chứng

Việc tạo câu hỏi đủ rẻ để định dạng đầu ra âm thầm trở thành bản đặc tả. Nếu ghi chú của bạn tạo ra những câu trắc nghiệm gọn gàng, bạn sẽ kết thúc bằng việc đo xem sinh viên có chọn được giữa những phát biểu nghe hợp lý hay không, bất kể đề cương tuyên bố kết quả gì.

Hãy nêu kết quả trước, rồi bằng chứng mà một câu trả lời đạt yêu cầu sẽ cung cấp, rồi kiến thức mà sinh viên được kỳ vọng mang theo. Bao gồm học liệu của học phần, những hiểu lầm bạn dự đoán, mọi công cụ được phép và định dạng trả lời. Nếu bạn muốn sinh viên diễn giải bằng chứng, câu hỏi phải đòi hỏi việc diễn giải, và chỉ thêm từ đó vào một câu hỏi định nghĩa thì không làm được điều ấy. Một tình huống dài vẫn có thể trả lời được nhờ một cụm từ quen thuộc làm lộ đáp án.

Bản đồ đề là một bảng đối chiếu kết quả với câu hỏi, và giá trị của nó là phơi ra các lỗ hổng trước khi sinh viên phơi ra chúng. Nó cũng làm cho sự đánh đổi trở nên hữu hình: mỗi câu bạn tạo từ phần học liệu dễ nhất là một câu bạn không dành cho kết quả mà bạn quan tâm nhất.

## Xem xét từng câu hỏi trên sáu chiều

Bắt đầu từ đáp án. Nó có biện minh được trước nội dung học phần có thẩm quyền không, và lời giải thích có đứng vững khi bạn kiểm tra độc lập không? Đáp án và lời giải thích thường đến từ cùng một bước sai, nên kiểm tra cái này không kiểm tra cái kia.

Rồi hỏi xem việc trả lời câu hỏi thực sự đòi hỏi sinh viên làm gì giữa lúc đọc và lúc chọn. Đây là chỗ câu hỏi được tạo ra thất bại thường xuyên nhất, và cũng là chỗ nhãn kém đáng tin nhất.

Tiếp theo kiểm tra sự ăn khớp: việc trả lời có cung cấp bằng chứng cho kết quả dự định, hay cho một thứ gì đó lân cận và dễ đánh giá hơn?

Hãy đọc phần diễn đạt như một sinh viên sẽ đọc. Thông tin cần thiết có hiện diện không, và sự mơ hồ không liên quan đến cấu trúc bạn muốn đo đã được loại bỏ chưa?

Xem các lựa chọn và quy tắc chấm điểm cùng nhau. Các phương án nhiễu có hợp lý và khác biệt với nhau và với đáp án không, và đáp án có công nhận những câu trả lời thay thế hợp lý mà rubric của bạn sẽ cho điểm không?

Cuối cùng, hỏi xem câu hỏi loại trừ ai. Khối lượng đọc, bối cảnh văn hóa, hình ảnh và định dạng có thể áp những đòi hỏi không liên quan đến kết quả. Với một sinh viên đa ngôn ngữ hay khuyết tật, một câu hỏi thưởng cho việc đọc nhanh đang đo một thứ bạn không định đo, và [[differential-effects-across-learner-groups|hiệu suất theo nhóm]] là nơi điều đó hiện ra.

Một mô hình thứ hai có thể giúp bạn phát hiện vấn đề, và sự đồng thuận giữa hai mô hình không phải kiểm chứng độc lập về tính đúng đắn. Chúng chia sẻ dữ liệu huấn luyện và các kiểu thất bại. Hãy tự giải câu hỏi, rồi để một người có năng lực xem những câu sẽ được tính điểm.

## Đừng để nhãn độ khó quyết định

Tài liệu về [[automated-question-generation|tạo câu hỏi]] hữu ích hơn ở chỗ nói về sự thất bại của các nhãn so với chỗ nói về thành công của việc tạo câu hỏi. [[student-llm-use-ai-question-difficulty-data-science-2026|An và Wang (2026)]] xem xét 378 câu hỏi do tác giả viết trong các học phần khoa học dữ liệu, trong đó 311 câu đã được đưa vào sử dụng với 54 sinh viên qua 7,888 lượt trả lời. Các nhãn dễ, trung bình và khó của mô hình tương quan với các mức Bloom do chính nó tạo ra cùng lúc ở mức ρ = 0.90 và với độ khó thực nghiệm của câu hỏi ở mức ρ = 0.06. Khoảng 70% số câu đã đưa vào sử dụng được mọi sinh viên trả lời đúng, điều này khiến gần như không còn biến thiên nào để một nhãn độ khó bám vào, ngay cả về nguyên tắc.

Hai bài học rút ra. Thứ nhất, độ khó là thuộc tính của tương tác giữa một câu hỏi và một tập người học, nên không nhãn nào được tạo trước khi dùng câu hỏi có thể được tin như một giá trị đã đo. Thứ hai, một ngân hàng câu hỏi mà ai cũng trả lời đúng không phải một bài đánh giá dễ, nó là một bài đánh giá vô dụng: nó gần như không mang thông tin về việc ai biết gì.

Trường hợp tích cực hẹp hơn những tuyên bố của nhà cung cấp và đáng được biết chính xác. [[assessing-quality-ai-generated-exams-field-2025|Isley và cộng sự (2025)]] tạo ra các đề trắc nghiệm mười câu cho 71 lớp đại học, khoảng 1,200 sinh viên, bằng một vòng lặp tạo, đánh giá và sửa từng câu dựa trên học liệu do chính giảng viên từng học phần cung cấp, rồi đối chuẩn các câu hỏi với đề do người viết. Đó là một quy trình có người xem xét bên trong, chạy cho từng học phần, không phải một prompt duy nhất trên nội dung chung chung. Bằng chứng ủng hộ quy trình trong những điều kiện đó, và nó không mở rộng sang bất cứ thứ gì cùng mô hình ấy tạo ra từ một bản ghi chú dán vào chưa biên tập.

## Chạy một chu trình tạo, xem xét, chạy thử, sửa

Hãy tạo theo một bản đồ đề, và yêu cầu nêu kết quả dự định, đáp án, một lời giải ngắn gọn và hiểu lầm mà mỗi phương án nhiễu định bắt. Các chú thích làm cho thiết kế có thể xem xét được. Chúng không phải bằng chứng rằng thiết kế đó vững.

Sửa trước khi tích lũy. Hãy xóa những khẳng định không có căn cứ, câu hỏi trùng lặp, manh mối vô tình trong phần dẫn, nhiều đáp án cùng biện minh được và độ phức tạp không liên quan đến cấu trúc cần đo, và ghi lại những gì bạn đã thay đổi, vì mô thức của các sửa chữa cho bạn biết nên sửa phần nào của prompt.

Chạy thử ở nơi việc chạy thử là tương xứng. Bài luyện tập ít hệ trọng, hoặc một lần chạy thử được quản lý bên trong bài đánh giá, cho bạn dữ liệu trả lời. Hãy nói với sinh viên cách báo một câu hỏi mơ hồ hay sai, và đọc những báo cáo đó, vì chúng là tín hiệu lỗi giàu thông tin nhất của bạn.

Rồi xem các câu hỏi vận hành ra sao: tỷ lệ trả lời đúng, phương án nhiễu nào hút câu trả lời, và việc thành công ở câu hỏi đó có đi kèm hiệu suất ở phần còn lại của bài đánh giá hay không. Một câu mà sinh viên mạnh làm sai và sinh viên yếu làm đúng là một khuyết điểm chứ không phải một câu hỏi khó. Trong một lớp nhỏ, những thống kê này không ổn định, nên hãy kết hợp chúng với việc xem xét nội dung và lời giải thích của sinh viên thay vì coi một tỷ lệ phần trăm là phán quyết.

Hãy sửa, và giữ hồ sơ: phiên bản đã duyệt, kết quả mà nó phục vụ, đáp án, lý lẽ, ghi chú xem xét và lịch sử sử dụng. Với những ngân hàng câu hỏi lớn hoặc hệ trọng, đây là chỗ các chuyên gia đánh giá và những phương pháp tâm trắc phù hợp thuộc về, và chuyên môn [[educational-measurement|đo lường]] không phải thứ một lần đọc cẩn thận có thể thay thế.

## Điều này trông như thế nào trong một học phần

Trong một học phần nhập môn xã hội học, kết quả có thể là phân biệt một lời giải thích cấu trúc với một lời giải thích cá nhân. Một câu hỏi yếu yêu cầu sinh viên định nghĩa “cấu trúc”, điều này đo việc nhận diện từ vựng. Một ứng viên mạnh hơn đưa ra một tình huống ngắn về một gia đình và một quyết định việc làm, rồi hỏi lời giải thích nào xác định đúng nhất một ràng buộc cấu trúc, với các phương án nhiễu đại diện cho những cách diễn giải hợp lý nhưng khác nhau.

Giảng viên kiểm tra rằng tình huống thực sự ủng hộ đáp án, rằng không có hai lựa chọn nào diễn đạt cùng một ý, và rằng việc trả lời không phụ thuộc vào thuật ngữ mà học phần chưa từng giới thiệu. Một câu hỏi tiếp nối một dòng, “chi tiết nào ủng hộ lựa chọn của bạn?”, làm hiện ra lập luận mà lựa chọn đã chọn che giấu. Cách điều chỉnh này chưa được kiểm nghiệm như một dạng câu hỏi, và giá trị của nó hẹp hơn: những câu hỏi xem xét ở trên có thể được trả lời trước khi một câu hỏi được đưa vào sử dụng, và một đáp án tồi có thể được sửa trước khi sinh viên nhìn thấy nó.

Với sinh viên tự tạo câu hỏi luyện tập, quy tắc tương tự áp dụng ở mức của họ: thử làm câu hỏi, đối chiếu lời giải thích với nguồn của học phần, và mang những ca không thể giải quyết tới người biết môn học. [[study-with-ai|Việc luyện tập]] huấn luyện sinh viên chấp nhận đáp án được tạo ra mà không phê phán là dạy thói quen sai.

## Những gì sẽ quay lại với bạn

**“Nó đã đưa ra một đáp án và một lời giải thích.”** Cả hai có thể cùng lặp lại một lỗi, và lời giải thích tạo ra sự tự tin chính vì nó trôi chảy. Hãy kiểm chứng lập luận với học liệu của bạn, không phải với chính lời nhắc lại của nó.

**“Đây chỉ là câu hỏi luyện tập.”** Luyện tập dạy những hiểu lầm khi đáp án sai không được sửa, và sinh viên tập dượt lỗi cũng dễ như tập dượt đáp án đúng. Mức độ hệ trọng thấp hơn làm thay đổi mức xem xét tương xứng. Chúng không làm thay đổi việc độ chính xác có quan trọng hay không.

**“Sinh viên thích bài kiểm tra này.”** Sự thích thú là bằng chứng về trải nghiệm. Một bài kiểm tra dễ mà ai cũng làm xong thoải mái thì cảm giác tốt và đo được rất ít, và cuộc kiểm toán khoa học dữ liệu phát hiện rằng mức phổ biến của các câu hỏi không đi kèm bất kỳ tín hiệu độ khó dùng được nào.

**“Rubric hay các thẻ Bloom cho thấy nó chạm tới kết quả.”** Nhãn Bloom do chính bước tạo câu hỏi cung cấp là bằng chứng kém độc lập nhất hiện có. ρ = 0.90 so với nhãn và ρ = 0.06 so với hiệu suất sinh viên chính là diện mạo của điều đó khi được đo.

## Việc cần làm trong tuần này

**1.** Chọn một kết quả và viết ra bằng chứng mà một câu trả lời đạt yêu cầu sẽ cung cấp. Rồi tạo năm câu hỏi theo kết quả đó, yêu cầu đáp án, lời giải và hiểu lầm dự định đằng sau mỗi phương án nhiễu.

**2.** Giải cả năm câu mà không nhìn đáp án, và ghi lại những câu mà bạn và mô hình bất đồng.

**3.** Nhờ một đồng nghiệp xem xét hai ứng viên mạnh nhất về sự ăn khớp và tính mơ hồ, rồi xóa bất cứ thứ gì mà cả hai bạn không biện minh được.

**4.** Chạy thử những câu còn lại với một câu hỏi tiếp nối ngắn, hỏi sinh viên chi tiết nào ủng hộ lựa chọn của họ.

**5.** Ghi lại những gì bạn đã thay đổi và vì sao, để lô sau bắt đầu từ một prompt tốt hơn chứ không phải prompt cũ.

## Đi tiếp từ đây

[[automated-question-generation]] là trang khái niệm về các phương pháp tạo câu hỏi và chất lượng đo được của chúng, còn [[educational-measurement]] bao quát phân tích câu hỏi, độ tin cậy và những phép tâm trắc mà một lần chạy thử chỉ mới chạm tới. Cả hai nằm dưới [[assessment-validity|tính hợp lệ của đánh giá]], chuẩn mực mà toàn bộ chu trình đang phục vụ.

Phía phán đoán của cùng vấn đề thuộc về [[ai-grading-fairness-reliability|chấm bài bằng AI]], vì một câu hỏi tốt bị chấm tồi không tốt hơn một câu hỏi tồi được chấm tốt. Về câu hỏi rộng hơn là một điểm số nên đại diện cho điều gì khi sinh viên có thể dùng AI, xem [[redesign-assessment-ai-era|thiết kế lại đánh giá trong kỷ nguyên AI]].
