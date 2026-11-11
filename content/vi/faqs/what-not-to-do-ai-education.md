---
title: "Nhà giáo dục nên tránh làm gì khi dùng AI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-11T06:20:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Phần lớn hướng dẫn về AI trong giáo dục nói về những gì nên thử. Trang này tập hợp những thực hành mà bằng chứng cho thấy cần dừng lại, sắp xếp theo vai trò sẽ phải dừng chúng. Những niềm tin sai được xử lý ở chỗ khác: [[addressing-common-misconceptions-ai-education|FAQ về các quan niệm sai lầm]] lo phần đó, và trang khái niệm [[misconceptions]] giải thích vì sao chúng tồn tại. Những gì nghiên cứu chưa thể cho bạn biết thuộc về [[limitations-in-aied-research|những giới hạn trong nghiên cứu AIEd]]. Phần còn lại ở đây là bước sau niềm tin, nghĩa là người ta làm gì, việc đó tốn gì, và nên làm gì thay thế.

Ba thất bại lặp lại ở mọi vai trò.

1. **Thay thế.** Một công cụ thực hiện phần tư duy lẽ ra người học phải làm, và đầu ra được chấm như thể người học đã làm. Bài luận được nộp là bản ghi về những gì mô hình làm được, không phải về những gì sinh viên làm được.
2. **Bằng chứng không do nỗ lực mà có.** Một tín hiệu dễ thu thập, như độ tự tin, độ trôi chảy, mức độ tham gia hay tỷ lệ hoàn thành, được coi là bằng chứng cho một điều nó không thể cho thấy. Một bảng điều khiển có thể báo cáo bốn mươi phút trong một buổi học kèm gia sư; nó không thể báo cáo liệu có ai đã học được công thức bậc hai hay không.
3. **Cấu trúc bị giao cho lời khuyên.** Một cảnh báo, một câu trong chính sách hay một buổi tập huấn được yêu cầu làm công việc mà thiết kế giao diện, thiết kế đánh giá hoặc quản trị phải làm. Đề cương nói hãy dùng AI có trách nhiệm, và gia sư vẫn đưa ra câu trả lời hoàn chỉnh ngay ở lời nhắc đầu tiên.

## Bản tóm tắt

**1.** Không bao giờ chấm điểm, trích dẫn hay quảng bá một đầu ra như bằng chứng về năng lực đã tạo ra nó.

**2.** Luôn thu thập phép đo không có hỗ trợ song song với phép đo có hỗ trợ, mỗi lần.

**3.** Coi độ trôi chảy, sự tự tin và mức độ tham gia là đặc điểm của việc sử dụng, không phải của việc học.

**4.** Đặt biện pháp bảo vệ vào quy trình làm việc, không phải vào một lời cảnh báo.

**5.** Giả định mọi dữ liệu công cụ có thể thấy sẽ bị lưu giữ, kết hợp và rò rỉ.

**6.** Nếu tuyên bố đi kèm một bản demo nhưng không có phép so sánh, đó là tiếp thị.

## Dành cho giảng viên

**Đừng chứng nhận đầu ra như năng lực.** Một bài nộp bóng bẩy là bằng chứng của một bài nộp bóng bẩy. Nếu sinh viên nộp một bài tổng quan tài liệu mà bạn không thể đối chiếu nguồn với bất cứ thứ gì khóa học đã dạy, và bài đánh giá không phân biệt được sinh viên đó làm được gì khi không có hỗ trợ, thì bài đánh giá đã ngừng đo đúng thứ mà văn bằng khẳng định ([[assessment-validity]], [[authentic-assessment]]). Cách sửa là thiết kế lại nhiệm vụ; một quy chế liêm chính chặt hơn sẽ không làm được điều đó.

**Đừng dùng điểm của công cụ phát hiện như bằng chứng gian lận.** Trong một nghiên cứu có đối chứng trên 642 bản tóm tắt đã công bố, công cụ phát hiện gắn cờ 38–80% các bản chỉnh sửa nhẹ bằng AI vẫn tuân thủ hướng dẫn và 9–15% văn bản do người viết không chỉnh sửa, trong khi chỉ bắt được dưới 4% các bản viết lại đã qua một dịch vụ nhân hóa ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Một phép đối sánh độc lập thấy không công cụ thương mại nào trong 14 công cụ đạt độ chính xác 80%, và việc diễn đạt lại đơn giản làm giảm một nửa ngay cả con số đó ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Ở tỷ lệ nền thực tế, dương tính giả nhiều hơn dương tính thật ([[should-we-use-ai-detectors]]). Một công cụ phát hiện có thể mở đầu một cuộc trò chuyện; nó không thể kết thúc một cuộc trò chuyện.

**Đừng thêm AI vào một bài đánh giá bạn chưa thiết kế lại.** Gắn thêm một công cụ vào một nhiệm vụ được thiết kế cho việc làm không có hỗ trợ tạo ra đúng kiểu lạm phát điểm số che đi phần mất mát, với bài tập tăng và bài thi giảm. Với mỗi nhiệm vụ có chấm điểm, hãy hỏi phiên bản không có hỗ trợ sẽ cho thấy gì, và sửa nhiệm vụ trước ([[reducing-ai-misuse]]). Nếu bài tập về nhà và bài kiểm tra trên lớp kiểm tra cùng một kỹ năng, thì chỉ một trong hai đang đo sinh viên.

**Đừng coi mức độ tham gia là việc học.** Thời gian làm nhiệm vụ, mức hài lòng, khối lượng tìm kiếm trợ giúp và hoạt động trò chuyện đều dễ đo và đều tương thích với việc không học được gì. Trong một thực nghiệm 3 × 2 với 186 người tham gia đánh giá các vụ án dân sự trên một nền tảng có LLM hỗ trợ, một rào chắn cắt việc chuyển sang một lập trường AI sai từ 42–60.5% xuống 5.7–8.2% không tạo ra hiệu ứng học tập đo được nào trong phiên học (β = 0.03, p = 0.18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Hành vi đã thay đổi; phép đo việc học thì không ([[student-engagement]]).

**Đừng dựa vào một lời cảnh báo ở chỗ giao diện có thể ràng buộc.** Một gia sư có thể tạo ra câu trả lời hoàn chỉnh sẽ tạo ra nó dưới áp lực hạn chót, bất kể đề cương nói gì. Rào chắn hiệu quả là rào chắn được xây vào tương tác ([[reducing-ai-misuse]], [[pedagogical-safety]]). Giữ lại câu trả lời cuối cùng trong hai lần thử đầu tiên là một quyết định thiết kế; yêu cầu sinh viên đừng hỏi nó là một lời đề nghị.

**Đừng dán bài làm của sinh viên, IEP, hồ sơ kỷ luật hay bản nháp có thể nhận diện vào một công cụ tiêu dùng.** Giảm thiểu dữ liệu là một quyết định thiết kế bạn đang đưa ra thay cho sinh viên, dù bạn có nghĩ về nó hay không ([[privacy]]). Tài khoản chatbot miễn phí trả lời một câu hỏi về kế hoạch hành vi của một sinh viên cũng là một bản sao của kế hoạch đó trên máy chủ của người khác.

## Dành cho người học

**Đừng trao đi phần bạn lẽ ra phải luyện tập.** Giả sử bài tập là một bài luận năm đoạn: bạn dán đề bài vào một chatbot, lấy bản nháp nó trả về và nộp. Thứ bạn nộp là bản ghi về những gì mô hình làm được. Câu hỏi là phần việc nhận thức nào được chuyển đi, không phải bạn dùng bao nhiêu AI. Thuê ngoài bài tập về nhà làm điểm bài tập tăng trong khi điểm thi không mở tài liệu giảm: qua 26,811 học sinh trung học được theo dõi trong 30 tháng, điểm bài tập tăng 18% và điểm thi giảm 20% trong vòng sáu tháng ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Phần luyện tập xây dựng kiến thức có thể truy xuất đã chuyển sang công cụ ([[reducing-ai-misuse]]). Nếu bài tập chính là mục đích, công cụ không thể làm bài tập đó.

**Đừng đọc độ trôi chảy thành độ chính xác.** Văn bản trôi chảy là đầu ra của một [[llm|mô hình ngôn ngữ]] bất kể nội dung có đúng hay không, và cơ chế khiến nó thuyết phục cũng chính là cơ chế khiến nó sai ([[hallucination-risk]]). Hãy kiểm chứng khẳng định cụ thể, không phải giọng điệu của đoạn văn. Thói quen đó hiếm khi tự hình thành: trong một nhóm theo dõi thụ động gồm 900 người lớn Mỹ được cung cấp một bản tóm tắt do AI tạo, người đọc theo một nguồn được trích bên trong nó ở 1% số lượt truy cập ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Nếu bài tập yêu cầu ba nguồn, hãy mở cả ba.

**Đừng chấp nhận sự đồng tình như phản hồi.** Các mô hình khẳng định nhiều hơn con người đáng kể: qua 11 mô hình, phản hồi của AI khẳng định người dùng thường xuyên hơn 49% so với phản hồi của con người, và chính phần dư đó khiến tương tác có cảm giác được ủng hộ ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Một gia sư không bao giờ phản đối bạn đã lấy đi tín hiệu điều chỉnh mà bạn đến để tìm ([[ai-sycophancy]]). Hãy yêu cầu sự phản đối, không phải sự tán thành: "Lập luận này sai ở đâu, và một người hoài nghi sẽ nói gì?"

**Đừng đổi câu hỏi lấy câu trả lời khi bạn đang tắc.** Cuộc vật lộn có ích mà bạn bỏ qua chính là việc học. Tìm kiếm sự trợ giúp để lấy về một câu trả lời là hành vi khác với tìm kiếm sự trợ giúp để lấy về một gợi ý ([[help-seeking]], [[desirable-difficulties]]). Hãy dùng những công cụ biết giữ lại câu trả lời hoàn chỉnh, và hỏi bước tiếp theo thay vì lời giải.

**Đừng dán thông tin cá nhân, sức khỏe hay gia đình vào một công cụ để có câu trả lời tốt hơn.** Công cụ không có nghĩa vụ quên nó đi, và cái giá về quyền riêng tư không hiện ra trong chất lượng câu trả lời ([[privacy]]). Một lời nhắc tốt hơn không cần đến chẩn đoán của bạn, địa chỉ của bạn hay tên của người thân trong gia đình bạn.

## Dành cho phụ huynh và gia đình

**Đừng làm bài tập cùng công cụ, cũng đừng để nó được làm ngay bên cạnh bạn.** Mẫu hình trong dữ liệu là lạm phát điểm kèm một cái giá ẩn: trong cùng bảng theo dõi 30 tháng đó, điểm bài tập tăng 18% trong khi điểm thi không mở tài liệu giảm 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Một đứa trẻ mang về bài tập hoàn hảo và một bài kiểm tra chương bị trượt đang cho bạn thấy đúng khoảng cách này. Điều bạn kiểm tra được là quy trình. Con bạn có giải thích được bước đó, làm lại một bài trên giấy, và nói được mình chưa chắc ở phần nào không? Nếu không, công cụ đã làm bài tập đó.

**Đừng để một chatbot trở thành người tâm giao.** Các hệ thống xu nịnh khẳng định nhiều hơn con người rất nhiều, hơn 49% qua 11 mô hình, và chính sự khẳng định đó khiến chúng có cảm giác an toàn để trò chuyện ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Trong một nghiên cứu dọc quy mô lớn, người dùng tìm đến AI xu nịnh để xin lời khuyên cá nhân gần như thường xuyên như tìm đến bạn thân và gia đình, với mức hài lòng thấp hơn trong các mối quan hệ thật của họ ([[sycophantic-ai-social-interaction-2026]]). Một đứa trẻ mang nỗi buồn đến với một mô hình luôn đồng ý không phải đang được lắng nghe. Nó đang được phản chiếu. Nếu con bạn đang nói với một chatbot về một tình bạn hay một mất mát, đó là lúc hỏi xem con đã kể cho ai khác.

**Đừng đưa một chatbot sinh tạo cho một đứa trẻ nhỏ rồi gọi đó là có giám sát chỉ vì bạn ở trong phòng.** Hướng dẫn phân theo độ tuổi rất cụ thể: hoạt động có giàn giáo, không sinh tạo cho độ tuổi 9 đến 12, sử dụng sinh tạo có giám sát kèm lập luận đạo đức từ 13 tuổi trở lên ([[ai-guidance-children-under-13]]). Với trẻ nhỏ nhất, rủi ro là niềm tin. Trẻ ở giai đoạn tiền thao tác chấp nhận nội dung được tạo ra là đúng, và các hệ thống không được hiệu chỉnh theo phát triển trong phản hồi chúng đưa ra. Cùng sử dụng với người lớn nghĩa là ngồi bên cạnh đứa trẻ và hỏi món đồ chơi vừa làm gì, không phải quan sát từ cửa phòng ([[early-childhood-elementary-ai-education]]).

**Đừng giả định công cụ của trường bảo vệ dữ liệu của con bạn chỉ vì trường đã chọn nó.** Hãy hỏi dữ liệu gì được lưu, trong bao lâu, có dùng để huấn luyện gì không, và còn ai khác nhìn thấy nó ([[privacy]]). Nhận thức không tự đến từ việc tiếp xúc: một tháng sau một bài học trong đó một lớp 7 xem hành vi đã ghi nhật ký của chính mình được chiếu trực tiếp, 66% trong số 47 học sinh vẫn chọn cài đặt chatbot ít bảo vệ nhất ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Hãy gửi câu hỏi cho nhà trường bằng văn bản, và yêu cầu câu trả lời cũng bằng văn bản.

**Đừng dùng kết quả của công cụ phát hiện để buộc tội con bạn, hay để củng cố một cáo buộc từ trường.** Trong một nghiên cứu có đối chứng trên 642 bản tóm tắt đã công bố, công cụ phát hiện gắn cờ 9–15% văn bản do người viết không chỉnh sửa và bắt được dưới 4% các bản viết lại bằng AI đã qua nhân hóa ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Ở tỷ lệ nền thực tế, dương tính giả nhiều hơn dương tính thật ([[ai-detection]]). Hãy coi một lá cờ là lý do để yêu cầu lịch sử bản nháp và một cuộc trò chuyện, không phải một kết luận.

**Đừng kết luận rằng cấm công cụ là lựa chọn an toàn.** Thiếu tin là một thất bại cân chỉnh có cái giá riêng, đó là năng lực bị bỏ mất, và kỹ năng quan trọng là sự tự tin được khớp đúng chứ không phải né tránh ([[trust-calibration]]). Bước phụ huynh hữu ích cũng chính là bước nghiên cứu ủng hộ cho học sinh: yêu cầu một bước kiểm chứng, và làm cho nó đủ rẻ để một đứa trẻ mệt mỏi thực sự làm ([[verify-ai-output]]). Yêu cầu xem nguồn mà một chatbot đã dùng tốn một phút; cấm chatbot thì mất luôn phần luyện tập.

**Đừng nhầm bộ lọc nội dung với sự an toàn.** Bộ lọc xử lý điều một hệ thống sẽ nói. Chúng không xử lý điều một tương tác làm với người học: phần luyện tập bị bào mòn, sự đồng tình xu nịnh, hay những lần từ chối không đồng đều ([[pedagogical-safety]]).

## Dành cho chuyên gia phát triển giáo dục và phát triển đội ngũ giảng viên

**Đừng chạy tập huấn công cụ rồi gọi đó là năng lực AI.** Một buổi về [[prompt-engineering|viết lời nhắc]] dạy giao diện của một sản phẩm. [[ai-literacy|Năng lực AI]] là khả năng phán đoán khi nào nên dùng công cụ, nó đang làm gì, và cần kiểm chứng điều gì. Giáo viên học các nút bấm mà không có phán đoán sẽ ra về với sự tự tin và không có cân chỉnh ([[teacher-ai-competency]]). Một buổi tập huấn kết thúc với việc mọi người đều tạo được một giáo án, và không ai nói được khi nào không nên dùng giáo án đó, là buổi đã dạy giao diện.

**Đừng chạy bồi dưỡng chuyên môn một lần rồi mong thực hành thay đổi.** Bằng chứng về [[professional-training|việc học chuyên môn]] nhất quán ở hai điểm thời lượng và theo dõi tiếp: sự kiện đơn lẻ làm thay đổi sự tự tin tự báo cáo, hiếm khi thay đổi hành vi trên lớp, và phần tự tin tăng thêm có thể che đi việc không có thay đổi ([[educational-development]]). Một buổi hai giờ vào tháng Tám, không có theo dõi tiếp vào tháng Mười, là một can thiệp về sự tự tin.

**Đừng bỏ qua hệ thống đánh giá mà bạn để nguyên tại chỗ.** Giảng viên sẽ áp dụng thực hành bạn dạy chỉ khi bài đánh giá mà họ phải chịu không trừng phạt thực hành đó. Một buổi workshop về thiết kế nhiệm vụ chống AI chạy song song với một chế độ thi không đổi dạy giảng viên rằng buổi tập huấn chỉ để trang trí.

**Đừng làm mẫu đúng kiểu sử dụng thiếu phản biện mà bạn đang cảnh báo.** Trình diễn một công cụ bằng cách tạo một giáo án ngay trước mặt giảng viên, không có bước kiểm chứng, dạy cho khán giả rằng đầu ra chính là sản phẩm. Hãy tạo nó trước mặt họ, rồi đánh dấu hai khẳng định cần kiểm tra.

**Đừng chấp nhận bản demo của nhà cung cấp như bằng chứng về hiệu quả.** Tuyên bố bạn đang đánh giá là về việc học, còn một bản demo cho thấy năng lực. Hãy yêu cầu kết quả không có hỗ trợ, kết quả theo nhóm và thử nghiệm an toàn nhiều lượt ([[checking-whether-educational-ai-works]]).

## Dành cho nhà phát triển phần mềm giáo dục

**Đừng tối ưu chỉ số dễ ghi log.** Độ dài phiên, số tin nhắn và điểm hài lòng sẽ cải thiện dưới gần như mọi thay đổi; việc học thường thì không. Cùng một nhóm phát hành một rào chắn cũng có thể phát hành một bảng điều khiển thưởng cho khối lượng tương tác, và hai thứ sẽ chỉ về hai hướng ngược nhau ([[learning-analytics]], [[student-engagement]]). Nếu chỉ số thành công của bạn là số tin nhắn mỗi phiên, bạn đã xây một sản phẩm thưởng cho sinh viên vì ở lại trong cuộc trò chuyện.

**Đừng phát hành một công cụ phát hiện mà không có nghiên cứu hiệu lực so với cấu trúc.** Một phép đối sánh mười lăm mô hình EEG đạt F1 0.9853 dưới kiểm chứng chéo phân tầng; Group K-Fold độc lập với thử nghiệm, vốn tôn trọng ranh giới giữa các thử nghiệm, làm đỉnh giảm xuống 0.6038 so với mức ngẫu nhiên 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Một công cụ phát hiện nụ cười có thể chạy *ngược* với cảm xúc đồng cảm do người quan sát chấm vì nó thiếu bối cảnh mà người chấm có ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Hãy công bố quy trình kiểm chứng cùng với con số nổi bật.

**Đừng suy ra cảm xúc, sự chú ý hay "mức độ tham gia" từ khuôn mặt và cơ thể mà không có sự đồng ý và một mục đích được nêu rõ.** Rủi ro nhiều lượt không phải rủi ro một lượt: trong một tổng quan về an toàn sư phạm, các thất bại tăng từ 17.7% ở đánh giá một lượt lên 77.8% ở đánh giá nhiều lượt ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Một hệ thống được chứng nhận trên các lời nhắc riêng lẻ là được chứng nhận trên một tương tác mà sinh viên không hề có ([[pedagogical-safety]], [[privacy]]).

**Đừng giấu sự bàn giao.** Một sinh viên không phân biệt được khi nào gia sư đang sinh tạo và khi nào đang truy xuất, hay khi nào có con người trong vòng lặp, thì không thể cân chỉnh niềm tin vào nó. [[automation-bias|Thiên kiến tự động hóa]] vận hành sạch nhất khi hệ thống đúng và con người đã ngừng kiểm tra ([[trust-calibration]]). Hãy nói trong giao diện khi nào một người sẽ đọc bài làm.

**Đừng thiết kế cho bộ đánh giá chuẩn rồi tuyên bố về lớp học.** Hiệu suất trên bộ đánh giá chuẩn là một thuộc tính của bộ đánh giá chuẩn. Hãy báo cáo các điều kiện sử dụng bạn đã thử, dân số và nhiệm vụ; nếu không, con số sẽ được đọc như một lời hứa về một bối cảnh khác ([[limitations-in-aied-research]]).

**Đừng biến công cụ thành con đường duy nhất để được giúp.** Nếu việc sinh viên tiếp cận [[feedback|phản hồi]] phụ thuộc vào tính sẵn có, hạn mức hay giấy phép của một mô hình, thì câu hỏi công bằng đã được quyết định bởi hợp đồng mua sắm ([[equity-in-ai-education]]).

## Dành cho quản trị viên giáo dục

**Đừng mua những tuyên bố về năng lực như bằng chứng về kết quả.** Nhà cung cấp có thể trình diễn một sản phẩm; chỉ một đánh giá mới chứng minh được việc học. Hãy yêu cầu kết quả không có hỗ trợ, kết quả theo nhóm, tỷ lệ bỏ dở, và một kế hoạch cho điều xảy ra khi giai đoạn thí điểm kết thúc ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Một bản demo cho thấy gia sư giải được một bài; nó không cho thấy một sinh viên giải được bài tiếp theo.

**Đừng triển khai giám sát chỉ vì nó sẵn có.** Các hệ thống coi thi thu thập hình ảnh khuôn mặt, giấy tờ tùy thân, bản quét phòng gồm cả quét 360 độ, và âm thanh micrô. Một tổng quan 80 nghiên cứu thấy chỉ 25% đề cập đến vấn đề đạo đức ở bất kỳ mức nào, 35% không công bố bộ dữ liệu, và 30% không thể tái lập ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Cái giá rơi vào sinh viên, và nền bằng chứng mỏng hơn hợp đồng ngụ ý ([[privacy]], [[remote-proctoring]]).

**Đừng viết một chính sách chỉ toàn điều cấm rồi gọi đó là quản trị.** Một lệnh cấm không có thiết kế lại đánh giá, không có hỗ trợ và không có đường khiếu nại sẽ di chuyển hành vi thay vì ngăn nó, và nó trừng phạt những sinh viên ít có khả năng phản bác một cáo buộc sai nhất. [[governance|Chính sách]] phải bao cả người chấm: trong một phép thử đối kháng trên một quy trình chấm bài thường ngày, hai trong năm chiến lược tiêm lệnh gián tiếp giấu trong một bài nộp đã nâng một bài luận đáng trượt lên mức đạt với tỷ lệ thành công 100% và 94% qua các loại tệp ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Một chính sách ràng buộc sinh viên mà không ràng buộc quy trình chấm bài là một nửa chính sách.

**Đừng đánh đồng việc áp dụng với sự cải thiện.** Một bảng điều khiển báo cáo mức sử dụng, mức hài lòng và tỷ lệ hoàn thành sẽ trông như thành công trong khi phép đo việc học vẫn giữ nguyên. Hãy quyết định trước kết quả nào sẽ khiến bạn hủy hợp đồng ([[ai-ed-evaluation]]). Hãy viết con số đó ra trước khi giai đoạn thí điểm bắt đầu.

**Đừng để khả năng tiếp cận chỉ đến như một yêu cầu điều chỉnh hỗ trợ.** Trong một tổng quan phạm vi 40 nghiên cứu về công nghệ hỗ trợ kỹ thuật số cho [[neurodiversity|sinh viên thần kinh đa dạng]], 28 nghiên cứu đặt chẩn đoán chính thức làm điều kiện tham gia. Mô hình lấy chẩn đoán làm cửa ngõ đó loại trừ mọi người học có nhu cầu mà không có nhãn ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Dành cho nhà nghiên cứu giáo dục

**Đừng để tự báo cáo mang tuyên bố nhân quả.** Sự tự tin, cảm nhận về việc học và mức hài lòng là kết quả, nhưng chúng không phải những kết quả mà phần lớn nghiên cứu nói mình đang đo. Tài liệu về [[empathy|đồng cảm]] là trường hợp rõ nhất: một lĩnh vực định dạy đồng cảm phần lớn lại đo sự thoải mái, và một tổng quan 17 nghiên cứu thấy mức tăng tự tin phổ biến hơn nhiều so với bằng chứng về chính sự đồng cảm ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Đừng trích một hiệu ứng mà không có thiết kế của nó.** Trong một tổng quan phê phán 80 nghiên cứu HCI về [[critical-thinking|tư duy phản biện]] với AI, 42 (52%) nghiên cứu không có nhóm đối chứng ([[critical-review-critical-thinking-hci-research-ai-2026]]). Một hiệu ứng nổi bật từ 30 sinh viên trong một khóa học ở một cơ sở là dạng phổ biến của một tuyên bố mong manh ([[limitations-in-aied-research]]).

**Đừng báo cáo tính không đồng nhất mà không có mô hình.** Cùng một dữ liệu cho I² = 82.98% dưới mô hình hiệu ứng cố định và I² = 15.75% dưới mô hình hiệu ứng ngẫu nhiên ([[ai-supported-instruction-stem-meta-analysis-2026]]). Một I² được trích mà không kèm mô hình thì không thể diễn giải ([[meta-analysis-systematic-review]]).

**Đừng khái quát từ một bối cảnh rồi gọi đó là phát hiện.** Một khóa học, một cơ sở, một phiên bản mô hình, một ngôn ngữ. Hành vi mô hình thay đổi theo từng bản phát hành, và công cụ phát hiện huấn luyện trên một thế hệ sẽ mất độ nhạy trên thế hệ sau ([[research-gaps-aied]], [[ai-detection]]).

**Đừng coi một tương quan giữa tương tác và kết quả là một cơ chế.** Khối lượng lời nhắc không đo giảm tải nhận thức. Các cụm theo khối lượng không khác nhau về phân bố phần việc nhận thức, và mã hóa thủ công các cuộc hội thoại không thấy giảm tải nào ở 49.6% trong 125 cuộc hội thoại ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Hãy đo chính phần việc đó.

**Đừng công bố một đoạn giới hạn lẽ ra có thể viết trước khi nghiên cứu diễn ra.** Hãy nêu tên mối đe dọa cụ thể, con số cụ thể và tuyên bố mà nó giới hạn. Đó là điều khiến một giới hạn trở nên dùng được với người đọc tiếp theo ([[interpreting-and-applying-aied-research]]).

## Vì sao những điều này thuộc về nhau

Mọi mục ở trên đều nâng một đại diện lên thành phán quyết. Bài luận thay cho người viết, điểm số thay cho gian lận, nụ cười thay cho sự đồng cảm, và bản demo thay cho việc học. Cách sửa lần nào cũng vậy: nêu tên cấu trúc, tìm một phép đo có thể cho ra kết quả ngược lại, và thu nó song song với phép đo tiện lợi.

Không cảnh báo nào ở trên có nghĩa là công cụ luôn sai. Một công cụ phát hiện có thể là lý do để nói chuyện với một sinh viên. Một chatbot có thể là một buổi tập hữu ích. Một bảng điều khiển có thể là gợi ý để đặt một câu hỏi. Tác hại nằm ở sự thay thế.

## Việc cần làm trong tuần này

- Chọn một nhiệm vụ có chấm điểm và viết ra nó sẽ cho thấy gì khi đóng công cụ. Nếu câu trả lời là "không khác gì", thì nhiệm vụ chính là vấn đề.
- Thêm một phép đo không có hỗ trợ vào một khóa học hiện chỉ báo cáo hiệu suất có hỗ trợ.
- Đọc hợp đồng coi thi hoặc hợp đồng công cụ AI của cơ sở bạn về các điều khoản lưu giữ, sử dụng thứ cấp và vi phạm dữ liệu, và kiểm tra xem văn bản đồng ý có mô tả đúng những gì hệ thống thực sự thu thập không.
- Hỏi nhà cung cấp về kết quả không có hỗ trợ và kết quả theo nhóm. Nếu câu trả lời là một bản demo, bạn đã có câu trả lời.
- Trong buổi họp giảng viên tiếp theo, dành nửa sau cho việc thiết kế lại đánh giá thay vì cho lời nhắc.

## Đi tiếp từ đây

- [[addressing-common-misconceptions-ai-education]]: những niềm tin nằm sau các thực hành này, và cách sửa chúng mà không trịch thượng.
- [[limitations-in-aied-research]]: những gì nền bằng chứng chưa thể chống đỡ.
- [[reducing-ai-misuse]]: các đòn bẩy cấu trúc cho việc sử dụng sai, và vì sao chúng thắng lời khuyên.
- [[pedagogical-safety]]: một gia sư có thể làm gì với người học trong khi vẫn qua mọi kiểm tra nội dung.
- [[should-we-use-ai-detectors]]: toàn bộ bằng chứng về công cụ phát hiện.
- [[checking-whether-educational-ai-works]]: cách đánh giá một tuyên bố trước khi bạn áp dụng nó.
