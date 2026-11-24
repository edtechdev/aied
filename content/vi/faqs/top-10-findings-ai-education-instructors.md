---
title: "10 phát hiện hàng đầu từ nghiên cứu AI trong giáo dục mà giảng viên nên biết là gì?"
created: "2026-08-24T09:42:00-04:00"
updated: "2026-11-14T18:10:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Mười nghiên cứu này liên quan trực tiếp đến những quyết định giảng viên phải đưa ra: giao bài gì, đánh giá thế nào, mua công cụ nào, xây dựng chúng ra sao, và làm sao biết việc học đã diễn ra. Mỗi mục nêu nghiên cứu, kết quả và thực hành mà nó thay đổi.

## Mười nghiên cứu

**1. Chỉ cần cho dùng chatbot thông thường đã làm điểm thi giảm 17% ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Gần 1,000 học sinh trung học ở Thổ Nhĩ Kỳ, trong khoảng 50 lớp, đã học ba buổi toán trên cùng một nội dung. Một nhóm có cửa sổ chat GPT-4 thông thường trong lúc luyện tập. Một nhóm có gia sư xây trên cùng mô hình với [[guardrails|rào chắn]] do giáo viên viết: gợi ý thay cho đáp án, kèm lời giải đúng và các lỗi thường gặp nhúng trong prompt. Nhóm đối chứng không có AI. Mỗi buổi kết thúc bằng [[summative-assessment|bài thi đóng sách]] với các bài toán tương tự, khi công cụ đã bị lấy đi.

Nhóm chat thông thường đạt điểm cao hơn đối chứng 48% trong lúc luyện tập và thấp hơn đối chứng 17% ở bài thi. Những học sinh chưa từng chạm vào AI làm tốt hơn họ. Nhóm có rào chắn tăng 127% khi luyện tập và hòa ở bài thi. Tác hại biến mất, và không có lợi thế học tập nào xuất hiện thay vào đó. Nhật ký chat giải thích sự phân đôi: nhóm không có rào chắn xin đáp án rồi dừng lại, còn nhóm có rào chắn thử giải, xin gợi ý và tiến bộ ngay trong buổi đầu.

Với giảng viên, “cho phép dùng AI” không phải là một chính sách. Giao diện quyết định công cụ trở thành kênh gợi ý hay cỗ máy đáp án, và một chatbot phổ thông mặc định nghiêng về cái thứ hai. Một cửa sổ chat để mở trong lúc luyện tập khiến những sinh viên dựa vào nó nhiều nhất phải trả giá.

Quản trị viên có thể đặt kết quả này đối chiếu với lập luận mua sắm rằng một mô hình mạnh hơn sẽ sửa được sư phạm. Mô hình ở hai nhánh hoàn toàn giống nhau.

Xem thêm: [[training-ai-tutors-to-guide-rather-than-answer|Huấn luyện gia sư để hướng dẫn thay vì cho đáp án]]

**2. Một gia sư xây trên chính sư phạm của môn học vượt lớp học chủ động, trong ít thời gian hơn ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2 là môn vật lý nhập môn của Harvard dành cho sinh viên ngành khoa học sự sống. Mùa thu 2023, 194 sinh viên trong một thử nghiệm chéo học hai bài hai lần, một lần ở lớp [[active-learning|học chủ động]] của môn học và một lần qua gia sư xây cho môn học, với bài kiểm tra trước và sau quanh mỗi phiên bản.

Sinh viên học được nhiều hơn với gia sư. Trung vị bài kiểm tra sau là 4.5 so với 3.5, trung vị [[learning-gains|mức tiến bộ học tập]] cao hơn gấp đôi so với lớp, và ước lượng phân vị của hiệu ứng chạy từ 0.73 đến 1.3 độ lệch chuẩn. Họ dành trung vị 49 phút với gia sư so với khoảng 60 phút trên lớp, và 83% đánh giá lời giải thích của nó ngang bằng hoặc tốt hơn giảng viên. Điểm gắn kết và động lực tăng. Mức hứng thú và tư duy phát triển không khác biệt.

Kết quả dựa trên thiết kế. Gia sư thực hiện đúng những động tác như lớp học: ví dụ đã giải, gợi ý theo bậc, câu hỏi tự giải thích, trình tự bám theo nghiên cứu về cách học vật lý. So sánh là với học chủ động, không phải bài giảng, nên phản đối quen thuộc rằng bất cứ thứ gì cũng tốt hơn bài giảng không áp dụng ở đây.

Người phát triển đội ngũ giảng viên có ở đây lập luận mạnh nhất hiện có rằng thiết kế gia sư là công việc chương trình dạy học, không phải mua sắm. Với các đội sản phẩm, mức chuẩn rất cụ thể: ngang bằng một lớp học chủ động, trong ít thời gian hơn, dùng đúng những động tác giảng dạy đó.

Xem thêm: [[developing-ai-tutor|Thực hành tốt nhất để phát triển một gia sư AI]]

**3. Gia sư AI ngang bằng gia sư người có chuyên môn ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench gộp 2,469 phiên gia sư với 2,383 người lớn ôn thi GRE, dùng 13 gia sư AI xây trên 12 mô hình, gia sư người trực tiếp và một nhóm đối chứng video. Kết quả là mức tiến bộ học tập trên các câu hỏi Định lượng và Ngôn ngữ.

Gia sư AI gộp lại tương đương về thống kê với gia sư người có chuyên môn, trong phạm vi một phần tư độ lệch chuẩn, và cả hai vượt đối chứng khoảng sáu điểm phần trăm: 6.86 ở Định lượng và 5.47 ở Ngôn ngữ, tức khoảng một rưỡi đến hai đáp án đúng thêm mỗi phần. Gia sư AI bị đánh giá yếu hơn ở việc lập kế hoạch bài học và tạo bài tập, những việc gia sư người làm tốt hơn.

Với quản trị viên, phép tính nhân sự thay đổi với việc ôn thi được xác định rõ. Khi một gia sư có giấy phép ngang bằng gia sư người trong phạm vi một phần tư độ lệch chuẩn, quyết định là về chi phí và độ phủ, và hiệu quả không còn là câu hỏi. Nhà nghiên cứu sẽ ghi nhận ranh giới: tương đương không phải vượt trội, và một bài thi chuẩn hóa là kết quả dễ nhất để máy ngang bằng.

Người phát triển đội ngũ giảng viên có thể nhìn vào chỗ gia sư người giữ được lợi thế: chẩn đoán người học cần gì tiếp theo, và xây dựng trình tự nối tiếp từ đó.

Xem thêm: [[intelligent-tutoring|Gia sư thông minh]]

**4. Ba ngày sau, ghi chép đánh bại việc hỏi chatbot ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes và đồng nghiệp chạy một thử nghiệm đăng ký trước ở bảy trường trung học Anh. 405 học sinh lớp 10 học hai trong ba điều kiện trên một đoạn văn lịch sử: một chatbot có thể trả lời câu hỏi về đoạn đó, ghi chép, hoặc cả hai. Ba ngày sau, họ làm bài thi đóng sách về ghi nhớ nguyên văn, đọc hiểu và [[retrieval-spacing-interleaving|nhớ lại tự do]].

Ghi chép đánh bại chatbot trên cả ba thước đo, khoảng nửa độ lệch chuẩn ở ghi nhớ và gần bốn phần mười ở đọc hiểu. Ghi chép cộng chatbot đánh bại chatbot đơn thuần ở hai trong ba và không làm gì cho nhớ lại tự do, còn ghi chép đơn thuần mạnh hơn tổ hợp. Ở điều kiện kết hợp, khoảng một phần tư học sinh chép đầu ra của chatbot vào vở. Học sinh vẫn đánh giá chatbot dễ hơn, hữu ích hơn và thú vị hơn việc viết.

Giảng viên có ở đây bằng chứng trực tiếp rằng một trợ lý đọc có thể thay thế việc đọc. Nếu mục đích của bài tập là hiểu một văn bản, [[writing-education|việc viết chính là việc hiểu]], và một công cụ trả lời câu hỏi về đoạn văn sẽ lấy đi phần luyện tập. Hãy giữ việc ghi chép. Nếu bạn cho phép chatbot, hãy yêu cầu thứ nó không thể cung cấp: một so sánh, một thách thức với văn bản, hoặc một bản tóm tắt viết sau khi đóng công cụ.

Xem thêm: [[ai-support-reading-comprehension|AI hỗ trợ đọc hiểu]]

**5. Thời gian học giảm 27%, và ghi nhớ giảm theo ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

Bảng dữ liệu mười năm từ nền tảng ALEKS, bao gồm 3.2 triệu tương tác học tập và 12.2 triệu thời gian phản hồi bài đánh giá xếp lớp, cho thấy học sinh đã làm gì sau khi ChatGPT xuất hiện. Thiết kế so sánh các dạng bài có thể dán vào chatbot (bài toán đố dạng văn bản) với các dạng đòi hỏi thao tác đồ thị bên trong nền tảng, trong cùng một chương trình.

Thời gian trên các bài dễ bị AI xử lý giảm 2.8% mỗi quý ở sinh viên đại học, 26.9% qua mười một quý. Học sinh trung học phổ thông giảm 31.3%, trung học cơ sở 9.0%, và học sinh lớp năm không có thay đổi đo được. Mức giảm biến mất hoàn toàn dưới [[remote-proctoring|giám sát thi]], và đây là phép thử quyết định: khi không có công cụ, sinh viên dành đúng lượng thời gian cũ. Các câu hỏi ghi nhớ có giám sát cho thấy mức giảm tích lũy 25% về khả năng trả lời đúng.

Độ dốc theo tuổi là tín hiệu thiết kế cho các đội sản phẩm. Thời gian luyện tập là biến số dịch chuyển, và nó dịch chuyển mạnh nhất ở nơi dễ giao việc nhất. Với giảng viên, thời gian trên nhiệm vụ là cảnh báo sớm rẻ tiền: một nhóm hoàn thành đúng những bài đó nhanh hơn nhiều có lẽ không học cùng một thứ.

Xem thêm: [[reducing-over-reliance|Giảm phụ thuộc quá mức vào AI]]

**6. Điểm bài tập về nhà tăng 18% trong khi bài thi đóng sách giảm 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

26,811 học sinh lớp 7 đến 12 ở Trung Quốc, theo dõi 30 tháng, với AI sinh tạo được áp dụng ở các thời điểm khác nhau giữa các nhóm. Điểm bài tập về nhà tăng 18% và thời gian hoàn thành giảm 30%, từ 64 xuống 45 phút. Bài thi đóng sách hàng tháng giảm 20% so với trung bình cơ sở trong vòng sáu tháng, và các kỳ thi tuyển sinh có hệ số cao giảm 18% đến 24% sau khoảng hai năm.

Thời điểm cho thấy cơ chế. Khoảng 81% người dùng AI hoàn thành bài tập nhanh hơn học sinh không dùng AI nhanh nhất và sau đó làm bài thi kém. Thiểu số giữ thời gian làm bài tương đương người không dùng học tốt như mọi người. Tổn thất lớn nhất ở khoa học xã hội, rồi STEM, rồi ngôn ngữ, và lớn hơn ở học sinh có thành tích cao.

Hoàn thành bài tập về nhà là thước đo thay thế tồi cho thành tích, và khoảng cách xuất hiện trong vòng sáu tháng, rất lâu trước khi kết quả thi tuyển sinh thay đổi. Giảng viên có thể hành động sớm hơn: giữ bằng chứng được chấm điểm ở dạng đóng sách, và coi bài làm ở nhà là phần luyện tập mà thời gian hoàn thành có thể nhìn thấy.

Xem thêm: [[checking-whether-educational-ai-works|Kiểm tra xem AI giáo dục có hiệu quả không]]

**7. Mọi gia sư được thử đều thất bại về sư phạm, và thất bại nặng hơn qua một cuộc trò chuyện ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors thử 11 gia sư, từ các mô hình trọng số mở 3.8B đến 72B cộng GPT-5-mini, ở toán, vật lý và hóa học, đối chiếu với một phân loại gồm 11 chiều và 48 rủi ro phụ rút từ [[learning-theories|khoa học học tập]]. Các nhóm thất bại của nó mang tính sư phạm: tiết lộ đáp án quá mức, củng cố hiểu sai, và từ bỏ [[scaffolding|giàn giáo]]. Mỗi loại trông có vẻ hữu ích ngay lúc đó, vì học sinh nhận được đáp án đúng nhanh chóng.

Mọi mô hình đều cho thấy tác hại sư phạm rộng. Mô hình lớn hơn không an toàn hơn một cách đáng tin, và mức hữu ích chung chỉ tương quan yếu với an toàn sư phạm. Tỷ lệ tác hại tăng từ 17.7% ở trao đổi một lượt lên 77.8% ở các cuộc trò chuyện năm đến tám lượt.

Đánh giá một lượt không phải bằng chứng về một gia sư an toàn, và các đội sản phẩm nên thiết kế việc kiểm thử dựa trên điều đó. Một mô hình vượt qua kiểm tra hữu ích và an toàn một lần có thể thất bại ở phần lớn một cuộc trò chuyện thật. Quản trị viên mua gia sư cần ba câu trả lời: nó có giữ lại lời giải không, nó có dò hiểu sai không, và nó có trụ được qua một phiên không. Một buổi trình diễn của nhà cung cấp với một lượt trao đổi không cung cấp câu nào trong ba câu đó.

Xem thêm: [[pedagogical-safety|An toàn sư phạm]]

**8. Các vụ vi phạm dựa trên bằng chứng mỏng hơn những gì cáo buộc gợi ý ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz và đồng nghiệp mã hóa mọi vụ vi phạm liên quan AI sinh tạo tại một trường đại học Australia trong ba năm: 1,162 vụ với 1,855 mục bằng chứng, mỗi mục được đánh giá về độ liên quan, độ tin cậy và sức mạnh suy luận.

Cáo buộc liên quan AI sinh tạo tăng từ 11.9% số vụ vi phạm năm 2023 lên 36.9% năm 2025, trong khi tổng số vụ không đổi. 58 vụ, 5% tổng số vụ AI sinh tạo, chỉ dựa trên lời khẳng định, không có mục bằng chứng nào. Đầu ra của công cụ phát hiện hiếm và yếu: báo cáo Turnitin hoặc báo cáo tương đồng không có sức mạnh suy luận ở 73 mục, và đầu ra GPTZero độc lập có độ tin cậy thấp ở 69 mục. Bằng chứng mạnh nhất đến từ cuộc điều tra chứ không phải cáo buộc, với lời thừa nhận qua phỏng vấn trực tiếp ở 410 mục đạt 97.2% mạnh. [[hallucination-risk|Tài liệu tham khảo bịa đặt]] là thay đổi cấu trúc lớn nhất, 22.3% số mục, tăng từ 10.4% năm 2023 lên 30.0% năm 2025.

Với quản trị viên, bài học là về thủ tục. Một vụ dựa trên điểm của công cụ phát hiện sẽ không trụ được khi bị kháng nghị, và một cuộc điều tra bắt đầu từ công cụ thay vì từ phỏng vấn tạo ra hồ sơ yếu. Giảng viên có thể hành động trên thứ lặp đi lặp lại: tài liệu tham khảo bịa đặt là phổ biến, và kiểm tra tài liệu tham khảo thì rẻ.

Xem thêm: [[should-we-use-ai-detectors|Dùng công cụ phát hiện AI]]

**9. Sự tự tin của giáo viên về hiểu biết AI của mình gần như không khớp với kỹ năng được đo ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 giáo viên K-12 hoàn thành một khảo sát tự báo cáo về hiểu biết AI và một thước đo hiệu suất khách quan xây trên cùng khung: Khái niệm, Sử dụng, Đánh giá và Đạo đức. Tương quan giữa hai thứ chạy từ 0.07 đến 0.24.

Phân tích hồ sơ tiềm ẩn tìm ra sáu nhóm. 43 giáo viên tự đánh giá mình luôn cao trong khi điểm thấp hơn trên thước đo khách quan. 59 cho thấy điều ngược lại. Phần còn lại tập trung gần trung bình hoặc tách theo kinh nghiệm trước đó với AI.

Với người phát triển đội ngũ giảng viên, [[self-assessment|tự đánh giá]] không phải là phân tích nhu cầu. Một khảo sát hỏi giáo viên họ tự tin đến đâu sẽ cấp vốn thừa cho người tự tin và phục vụ thiếu người ít nói, và những nhóm đó không phải nhóm có năng lực và nhóm đang chật vật. Các nhiệm vụ hiệu suất ngắn tách họ ra. Nhà nghiên cứu nên coi tương quan thấp là cảnh báo về đo lường: bất kỳ nghiên cứu nào về [[ai-literacy|hiểu biết AI]] xây trên [[self-report-measures|tự báo cáo]] là đang đo sự tự tin.

Xem thêm: [[faculty-development-ai|Phát triển đội ngũ giảng viên thay đổi thực hành]]

**10. Chấm điểm bằng AI trừng phạt học sinh viết kém hơn ([[ai-scoring-language-bias-physics|Feser and Tschisgale, 2026]]).**

116 bài giải thích vật lý của học sinh trung học được 9 cách tiếp cận học máy và 2 cách tiếp cận mô hình ngôn ngữ lớn chấm, rồi so với điểm của chuyên gia người. Mức đồng thuận với chuyên gia chạy từ 67.2% đến 78.4%, nghe có vẻ chấp nhận được cho đến khi tách các lỗi ra.

Mọi cách tiếp cận đều đánh giá thấp hiểu biết khái niệm với các bài giải thích có chất lượng ngôn ngữ thấp hơn. Thiên lệch chỉ chạy một chiều: bài viết mạnh không bị thổi phồng. Mô thức này phản chiếu điều đã được báo cáo về chính giáo viên vật lý, cho thấy khó khăn nằm ở việc suy ra hiểu biết từ văn xuôi, với người cũng như với mô hình.

Nhân viên đánh giá và đội sản phẩm cần báo cáo tỷ lệ đánh giá thấp theo chất lượng ngôn ngữ, không chỉ mức đồng thuận tổng thể với chuyên gia, vì con số trung bình che giấu nhóm bị tổn hại. Với những người chấm [[multilingual-learning|người học đa ngữ]], hãy chuyển các câu trả lời có chất lượng ngôn ngữ thấp sang [[human-in-the-loop-ai|con người xem xét]] hoặc thiết kế nhiệm vụ không phụ thuộc văn xuôi.

Xem thêm: [[ai-grading-fairness-reliability|Chấm điểm AI công bằng và đáng tin cậy]]

## Mười nghiên cứu có gì chung

Ba nghiên cứu đo hai thứ cùng lúc: học sinh tạo ra gì với công cụ, và làm được gì khi không có nó. Bastani, Rismanchian và Strömberg đều thấy hai thứ tách ra, và chỉ thước đo không có trợ giúp mới hành xử như việc học. Bốn nghiên cứu xoay quanh một lựa chọn thiết kế chứ không phải mô hình: rào chắn ở Bastani, sư phạm nhúng trong gia sư Kestin, việc viết mà Kreijkes giữ trong nhiệm vụ, và bối cảnh nhiều lượt mà SafeTutors thử. Ba nghiên cứu xem xét hệ thống quanh công cụ, nghĩa là bằng chứng dùng trong các vụ vi phạm, cách đo năng lực giáo viên, và các giả định ngôn ngữ trong [[automated-assessment|chấm điểm tự động]]. StudentBench thiết lập tương đương trên một bài thi chuẩn hóa, kết quả duy nhất mà máy dễ ngang bằng người nhất. Bastani xuất hiện ở hai nhóm vì nó cung cấp cả khoảng cách lẫn cách sửa thiết kế.

Còn lại ba câu hỏi đáng mang vào bất kỳ quyết định nào về môn học hay sản phẩm. Học sinh phải làm được gì khi không có công cụ? Hoạt động yêu cầu họ làm gì trong khi công cụ mở? Bằng chứng nào sẽ cho thấy khác biệt sau một tháng?

## Chỗ bằng chứng còn mỏng

Các nghiên cứu này chia sẻ [[limitations-in-aied-research|những hạn chế của nghiên cứu AIEd]] nói chung. Hai trong số lớn nhất diễn ra ở Thổ Nhĩ Kỳ và Trung Quốc, ba ở Hoa Kỳ, một ở Anh, một ở Australia, và nghiên cứu chấm điểm ở Đức. Một là bộ đánh giá chuẩn của các mô hình thương mại chứ không phải nghiên cứu thực địa. Toán trung học chiếm ưu thế, tiếp theo là vật lý và tin học. Rất ít nghiên cứu xem xét [[humanities-education|viết trong khoa học nhân văn]] ở quy mô lớn, giáo dục nghề nghiệp, hay học sinh khuyết tật.

Chỉ bảng dữ liệu Trung Quốc và bảng ALEKS quan sát sinh viên hơn hai năm sau khi áp dụng, và các tác giả Trung Quốc lập luận rằng nghiên cứu ngắn hơn đánh giá thấp một cách hệ thống mức phạt dài hạn. Sáu trong số các kết quả này là bản in trước hoặc bài làm việc chưa hoàn tất bình duyệt: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang và Feser. Các nghiên cứu Bastani, Kestin, Kreijkes và Munoz được công bố trên tạp chí bình duyệt.

Kết quả rỗng và âm là hiếm trong tài liệu này, nên bản ghi đã công bố có lẽ phóng đại tần suất AI giúp ích. Những nghiên cứu này là hướng dẫn hiện tốt nhất về mười quyết định, và không nghiên cứu nào trong số đó khép lại một câu hỏi.

## Đi tiếp từ đâu

[[does-ai-help-students-learn|AI có giúp học sinh học không?]] là bản đánh giá bằng chứng rộng hơn đứng sau những tuyên bố này. [[redesign-assessment-ai-era|Nên thiết kế lại đánh giá thế nào cho thời đại AI?]] đi xa hơn ở nửa phần đánh giá. Với các vụ liêm chính, [[reduce-ai-cheating|Làm sao giảm gian lận AI?]] bao quát bằng chứng quy trình và chính sách. Với các phát hiện về phát triển chuyên môn, [[faculty-ai-competencies|Giảng viên cần những năng lực AI nào?]] là trang đồng hành, còn [[addressing-common-misconceptions-ai-education|Làm sao ứng phó những hiểu lầm phổ biến về AI trong giáo dục?]] xử lý những phản đối bạn có thể nghe từ đồng nghiệp.
