---
title: "Tôi có thể dùng AI để chấm bài của sinh viên một cách công bằng và đáng tin cậy không?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Bạn có một rubric mình tin vào, số bài nộp nhiều hơn số giờ, và một công cụ trả về một điểm số cùng vài đoạn văn đầy tự tin trong khoảng thời gian đọc xong một bài luận. Bạn thử nó trên những bài mình đã chấm. Một nửa số điểm có vẻ đúng. Một điểm rộng rãi lạ thường, một điểm khắt khe lạ thường, và bạn chưa thể nói đó là do công cụ hay do bài luận.

Câu trả lời ngắn để nói với đồng nghiệp: chấm bài bằng AI có chỗ đứng như một trợ lý được giám sát hoặc một người đọc thứ hai, trên những nhiệm vụ mà bạn đã đối chiếu nó với bài bạn từng chấm. Sự đồng thuận không chuyển giao được giữa các loại hình đánh giá. Trong một kỳ thi dược có mười sáu sinh viên, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat và cộng sự (2026)]] tìm thấy mức đồng thuận gần như hoàn hảo ở các dạng câu hỏi khách quan và mức đồng thuận không đáng tin ở các câu trả lời mở. Trên ba trường đại học Anh, [[opraise-automated-marking-ai-assessment-2026|dự án OpRaise]] tìm thấy người chấm AI và người chấm người đồng thuận về dải điểm bằng cấp trong khoảng 35% đến 65% số lần tùy trường, với điểm bị nén về giữa. Một lời biện luận trôi chảy không phải bằng chứng rằng tiêu chí của bạn đã được áp dụng. Việc kết quả có [[assessment-validity|hợp lệ cho quyết định của bạn]] hay không là một câu hỏi cục bộ bạn phải tự trả lời, và [[human-in-the-loop-ai|một con người vẫn chịu trách nhiệm]] cho bất cứ thứ gì trở thành điểm được ghi nhận.

## Phiên bản ngắn

**1.** Gọi tên vai trò trước khi bạn chạy bất cứ thứ gì: trợ lý phản hồi, người đọc thứ hai, hay người chấm chính. Chúng cần lượng bằng chứng khác nhau.

**2.** Bắt đầu từ vai trò ít hệ trọng nhất mà vẫn giải quyết được vấn đề thật của bạn. Nếu một đáp án tất định làm được việc đó, LLM chỉ thêm rủi ro chứ không thêm giá trị.

**3.** Hiệu chỉnh trên những bài bạn đã chấm, gồm cả bài mạnh, bài yếu, bài sát ranh giới và bài có cấu trúc bất thường. Những ví dụ tiện tay không chứng minh được gì.

**4.** Giữ tập hiệu chỉnh và tập kiểm tra tách biệt, nếu không bạn đang đo xem mình đã tinh chỉnh công cụ khớp với những bài quen thuộc tốt đến đâu.

**5.** Báo cáo mức đồng thuận chính xác, chênh lệch điểm và hướng thiên lệch, không phải một hệ số tương quan. Kiểm tra riêng các ranh giới đạt/không đạt.

**6.** Nói với sinh viên công cụ đóng vai trò gì, ai quyết định điểm, và làm sao để xin xem xét lại.

## Quyết định điều AI được phép làm

Ba cách sắp xếp đều được gọi là “chấm bài bằng AI” và chúng mang những nghĩa vụ khác nhau.

Một **trợ lý phản hồi** soạn nhận xét hoặc gắn cờ những chỗ có thể thiếu để bạn chấp nhận, viết lại hay bỏ đi. Rủi ro chỉ giới hạn ở chất lượng nhận xét, và bạn đọc mọi thứ trước khi nó đến tay sinh viên. Một **người đọc thứ hai** đề xuất điểm theo tiêu chí hoặc gắn cờ những chỗ bất đồng để định hình việc chấm của chính bạn. Lỗi của nó phải hữu ích chứ không chỉ là sai: một cờ khiến bạn quay lại một bài nộp mà lẽ ra bạn đã chấm qua loa thì đáng giữ. Một **người chấm chính** tạo ra những điểm số trở thành điểm được ghi nhận. Đó là cách sắp xếp mà bằng chứng trong cơ sở tri thức này không ủng hộ ngoài những trường hợp hẹp, đã được kiểm chứng tại chỗ.

Hãy chọn nấc thấp nhất giải quyết được ràng buộc thực tế của bạn. Nếu khối lượng chấm của bạn đến từ việc đối chiếu một đáp án cố định, việc chấm tất định thông thường minh bạch và kiểm toán được hơn một mô hình ngôn ngữ, và nghiên cứu dược cho thấy lợi thế của LLM trên các câu hỏi khách quan phần nào là hệ quả của việc được đưa sẵn đáp án đúng trong lúc chấm. Hãy để dành mô hình cho những bài cần diễn giải, rồi kiểm tra phần diễn giải đó.

[[automated-assessment|Đánh giá tự động]] bao quát bộ máy rộng hơn của việc chấm điểm, duyệt điểm và tạo phản hồi. Trang này là câu hỏi về phán đoán nằm bên dưới bộ máy đó.

## Bằng chứng thực sự cho thấy gì

Sự đồng thuận phụ thuộc vào dạng câu hỏi. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat và cộng sự (2026)]] chấm một kỳ thi dược đa dạng hình thức do 16 sinh viên hoàn thành và báo cáo mức tương hợp với điểm của giảng viên từ 0.935 đến 1.000 cho các câu trắc nghiệm một đáp án, chọn tất cả đáp án đúng và điền vào chỗ trống. Mức đồng thuận trên các câu trả lời mở chủ quan là không đáng tin. Hai chi tiết quan trọng hơn con số tiêu đề. Đáp án đúng được cung cấp trong lúc chấm, điều này làm đẹp kết quả ở các câu khách quan, và việc thêm rubric không cải thiện đồng thuận một cách nhất quán, điều này bào mòn giả định phổ biến rằng một rubric tốt biến LLM thành một người chấm ổn định. Mười sáu sinh viên không đủ để đưa ra khẳng định về học phần của bạn. Sự biến thiên bên trong một kỳ thi mới là phát hiện chuyển giao được: một hệ thống xử lý tốt phần trắc nghiệm của bạn không nói gì về những bài luận của bạn.

Đồng thuận theo dải điểm ở mức trung bình và không đều. [[opraise-automated-marking-ai-assessment-2026|Báo cáo OpRaise]] xem xét những bài luận tâm lý đại học đích thực và tìm thấy mức đồng thuận giữa người chấm AI và người chấm người về dải điểm bằng cấp của Anh là 63% ở Cambridge, 53% ở Nottingham và 35% ở Manchester Metropolitan. Điểm bị nén về giữa, với hai đuôi được chấm kém chính xác nhất: một bài luận được người chấm cho 75 bị mọi hệ thống AI chấm thấp hơn vài điểm, và một bài được cho 50 bị chấm cao hơn vài điểm. Sự nén đó là kiểu thất bại cần để ý, vì nó làm hại đúng những sinh viên ở đỉnh và đáy phân bố của bạn trong khi để phần giữa trông vẫn ổn. Đây là một báo cáo dự án chứ không phải một thử nghiệm bình duyệt, và nó là cảnh báo hữu ích nhất trong toàn bộ cơ sở bằng chứng.

Điểm của chính bạn là một tham chiếu không hoàn hảo. Giảng viên bất đồng với nhau, và điểm trước đây của bạn trên một bài luận tương tự là một phán đoán, không phải chân lý nền. Đồng thuận với một người chấm xác lập tính nhất quán với người chấm đó, điều không giống với tính công bằng. Ở đâu mức độ hệ trọng biện minh cho điều đó, hãy dùng một người đọc thứ hai có năng lực để phân xử những ca khó, và coi sự bất đồng giữa AI và một người chấm người là lời nhắc đọc lại bài chứ không phải phán quyết bên nào đúng.

Tính nhất quán và phán đoán vững vàng tách rời nhau. Một mô hình có thể trả về những điểm gần như y hệt khi chạy lại trong khi áp dụng tiêu chí của bạn một cách tồi, vì tính lặp lại đo sự ổn định, không đo tính hợp lệ. Hai đuôi của OpRaise cho thấy mô thức: hệ thống ổn định và sai ở đúng những bài luận quan trọng nhất.

## Kiểm chứng thủ tục trước khi nó chạm vào một điểm số

Hãy làm việc này trên những bài nộp đã được chấm trước đó, được bảo vệ phù hợp, trải khắp các kiểu trả lời bạn thực sự nhận được: mạnh, yếu, sát ranh giới, chưa hoàn chỉnh, cấu trúc bất thường, và đáp án đúng được diễn đạt theo một cách xa lạ.

**1. Nêu rõ tiêu chí và đòi hỏi bằng chứng.** Đưa cho mô hình đề bài, rubric, quy tắc chấm điểm và ví dụ về cách những đáp án thay thế hợp lý vẫn được điểm. Yêu cầu những lời biện luận ngắn gọn ở mức tiêu chí, gắn với những đoạn văn xác định được. Rồi tự bạn đối chiếu những lời biện luận đó với bài nộp.

**2. Tách hiệu chỉnh khỏi đánh giá.** Tinh chỉnh trên một tập, kiểm tra trên tập khác. Không có sự tách biệt đó, bạn không phân biệt được một thủ tục đã được kiểm chứng với một thủ tục chỉ khớp tốt.

**3. Đo những quyết định quan trọng.** Ghi lại mức đồng thuận chính xác, độ lớn và hướng của chênh lệch điểm, và việc mô hình có hệ thống cho điểm cao hơn hay thấp hơn không. Xem xét riêng ranh giới đạt/không đạt và những ranh giới hệ trọng khác. Một hệ số tương quan cao có thể nằm trên một dịch chuyển hệ thống.

**4. Kiểm tra tính lặp lại và hành vi theo nhóm.** Chạy lại một tập con trong cùng thiết lập. Tìm lỗi ở mức tiêu chí và tìm những trường hợp ngôn ngữ, định dạng hay phong cách hợp lý bị nhầm là hiểu biết yếu hơn. Số lượng nhỏ trong mỗi nhóm chỉ ủng hộ sự thận trọng, không ủng hộ một khẳng định về công bằng.

**5. Viết ra quy tắc chuyển tuyến.** Quyết định những ca nào luôn được chấm bởi người và cách giải quyết bất đồng. Đừng để mức tự tin mô hình tự khai quyết định; mức tự tin cần được kiểm chứng với các lỗi quan sát được trước khi nó có sức nặng.

**6. Bảo vệ quy trình làm việc.** Dùng một môi trường đã được phê duyệt, giảm thiểu thông tin nhận dạng, và giữ rubric cùng hướng dẫn tách khỏi nội dung bài nộp. Sự tách biệt đó làm việc thao túng khó giấu hơn. Nó không làm cho việc đó trở nên bất khả.

**7. Ghi lại điều gì sẽ vô hiệu hóa phép kiểm tra.** Lưu mô hình và phiên bản, prompt, rubric và các thiết lập. Một bản cập nhật mô hình hay một lần sửa rubric là lý do để lặp lại các phép kiểm tra đại diện thay vì giả định sự liên tục.

## Làm cho cách sắp xếp hiển hiện với sinh viên

Sinh viên có quyền biết công cụ đóng vai trò gì, ai quyết định, và làm sao để phản đối một kết quả. Công bố mơ hồ tạo ra nghi ngờ; công bố cụ thể tạo ra một quan hệ khả thi. Đại loại như: “Một công cụ AI đã được phê duyệt có thể soạn nhận xét theo rubric trên bản nháp của bạn. Tôi xem xét mọi nhận xét và quyết định điểm của bạn. Hãy liên hệ với tôi nếu một nhận xét mô tả sai bài làm của bạn.” Rồi hãy làm cho điều đó thành sự thật.

Hai hướng thất bại cần được chú ý riêng. Trừ điểm quá mức là điều sinh viên báo lại, và chúng chiếm ưu thế trong các đơn phúc khảo. Điểm cho không xứng đáng là điều không ai nhắc tới và âm thầm làm hỏng hồ sơ. Hãy lấy mẫu cho cả hai, và tính cả số giờ kiểm chứng của bạn khi đánh giá xem quy trình đó có tiết kiệm được gì cho bạn không.

## Những gì sẽ quay lại với bạn

**“Con người cũng thiên lệch.”** Đúng là vậy, và đó là lý do phép so sánh cần những tiêu chí tường minh chứ không lấy điểm của một người chấm làm chuẩn. Sự chênh lệch giữa các trường trong OpRaise là lập luận ở đây: nếu người chấm người ở ba trường đại học tạo ra mức đồng thuận theo dải điểm khác nhau đến thế với cùng những hệ thống, thì tham chiếu con người là một phần phải được nêu rõ, chứ không phải một thước đo cố định.

**“Rubric làm cho nó khách quan.”** Rubric làm cho kỳ vọng trở nên tường minh. Việc áp dụng nó vẫn là diễn giải, và nghiên cứu dược phát hiện rằng đưa rubric vào không cải thiện đồng thuận một cách nhất quán. Điều rubric mang lại là một chuẩn có thể kiểm tra cho các lời biện luận, không phải bảo đảm cho các điểm số.

**“Vậy tôi sẽ phải kiểm tra mọi thứ, và thế thì mất hết ý nghĩa.”** Với một số nhiệm vụ đó là kết luận đúng, và câu trả lời là thu hẹp phạm vi công việc. Soạn nhận xét từ chính ghi chú chấm điểm của bạn để phán đoán lại ở phía bạn và bỏ đi phần gõ phím. Những cờ của người đọc thứ hai trên các bài sát ranh giới dồn sự chú ý của bạn vào đúng chỗ nó làm thay đổi kết quả.

**“Đồng nghiệp của tôi đã thử và nó chạy tốt.”** Hãy hỏi họ đã đo cái gì. Trong tài liệu này, điểm đánh giá tích cực thường xuyên cùng tồn tại với lỗi, và một đồng nghiệp đọc vài đầu ra hợp lý thì đã chạy một cuộc trình diễn, không phải một phép kiểm chứng. Câu hỏi là thủ tục của họ sẽ làm gì với những bài luận mà bạn sẽ để ý cuối cùng.

## Việc cần làm trong tuần này

**1.** Chọn một bài đánh giá và viết ra vai trò duy nhất mà AI sẽ đóng. Viết ra bằng chứng nào sẽ cho phép bạn nâng nó lên một nấc.

**2.** Chạy nó trên năm bài nộp bạn đã chấm, chọn để có một bài mạnh, một bài yếu, một bài sát ranh giới và một bài có cấu trúc bất thường nhưng hợp lý.

**3.** Ghi lại mọi bất đồng kèm bài làm và tiêu chí, và gọi tên những lỗi bạn coi là không thể chấp nhận chứ không chỉ là sai.

**4.** Kiểm tra xem chênh lệch điểm có chạy theo một hướng nhất quán không, và kiểm tra riêng ranh giới đạt/không đạt của bạn.

**5.** Soạn đoạn công bố dành cho sinh viên và đường đi để xin xem xét lại, rồi so sánh thời gian kiểm chứng của bạn với thời gian chấm mà bạn đã tránh được.

## Đi tiếp từ đây

[[assessment-validity|Tính hợp lệ của đánh giá]] là khái niệm quyết định những câu hỏi này: liệu bằng chứng có ủng hộ suy luận bạn muốn đưa ra hay không. [[automated-assessment]] bao quát công nghệ và hiệu suất đo được của nó qua các hình thức, còn [[ai-feedback-at-scale]] xử lý vấn đề lân cận là những nhận xét được tạo ra và việc sinh viên có hành động theo chúng hay không.

Về việc một điểm số nên đại diện cho điều gì khi sinh viên đã dùng AI, gồm cả việc thay thế cấu trúc và bằng chứng quá trình đã được xác thực, xem [[redesign-assessment-ai-era|thiết kế lại đánh giá trong kỷ nguyên AI]]. Về việc phát hiện có thể thay thế cho một thiết kế nhiệm vụ có thể biện minh hay không, xem [[should-we-use-ai-detectors|việc có nên dùng công cụ phát hiện AI]]. Về câu hỏi đánh giá nằm bên dưới tất cả, xem [[checking-whether-educational-ai-works|kiểm tra xem một hệ thống AI giáo dục có hiệu quả không]].
