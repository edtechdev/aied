---
title: "Những thực hành tốt nhất để phát triển một gia sư AI hiệu quả là gì?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Gia sư của bạn còn ba tuần nữa là tới đợt thí điểm. Phần chat đã chạy được, mô hình giải thích một đạo hàm rất gọn, và buổi demo nội bộ đã được vỗ tay. Rồi một người từ trung tâm giảng dạy hỏi đúng câu mà bản đặc tả của bạn không có ô nào để trả lời: sau một học kỳ với thứ này, sinh viên có giải được một bài toán khi nó không có mặt trong phòng hay không? Thứ bạn có là một danh sách tính năng. Thứ bạn không có là một câu nói rằng người học phải làm được gì một mình khi kết thúc.

Một gia sư là một chính sách bọc quanh [[conversational-ai|chatbot]], và chính sách đó quyết định việc học có xảy ra hay không. Hãy gọi tên công việc nhận thức mà người học phải tự làm, khiến hệ thống buộc phải có nó (một lần thử trước khi được trợ giúp, một thang gợi ý mờ dần, một bước kiểm tra mà mô hình không thể làm giả), và đánh giá khi đã tắt gia sư. Chất lượng mô hình quyết định cuộc trò chuyện cảm thấy tốt đến đâu. Chính sách quyết định sinh viên làm được gì vào tháng Sáu.

## Tóm tắt

**1.** Viết mục tiêu thành một tuyên bố về năng lực thực hiện khi không có trợ giúp, rồi suy ra mọi tính năng từ đó. Nếu một tính năng không truy được về câu đó, nó là tính năng để demo.

**2.** Xây mô hình người học từ bằng chứng bạn ghi lại được, và lưu mỗi chẩn đoán như một giả thuyết kèm giá trị độ tin cậy chứ không phải một sự thật.

**3.** Cố định thang trợ giúp trong mã, với các bậc có tên, và khiến giao diện bắt người học trả một cái giá cho mỗi bước xuống thang.

**4.** Neo nội dung vào tài liệu của chính bạn và giao việc kiểm tra số học, đại số và mã cho các công cụ tất định, thứ không thể bịa ra.

**5.** Kiểm thử các thất bại giảng dạy trên toàn bộ cuộc trò chuyện: rò rỉ đáp án, nịnh bợ, củng cố quan niệm sai, trôi dạt trong giảng dạy.

**6.** Đo bằng một giai đoạn rút bỏ trợ giúp và một bài kiểm tra trì hoãn, không phải bằng điểm hài lòng.

## Viết mục tiêu thành một tuyên bố về năng lực thực hiện khi không có trợ giúp

Ba danh sách, viết ra trước khi bất kỳ ai chọn mô hình:

- Người học nên biết hoặc làm được gì sau đó.
- Công việc nhận thức nào họ phải tự thực hiện.
- Gia sư được phép làm gì thay cho họ.

Tài liệu về [[intelligent-tutoring]] đưa ra điểm rằng hiệu quả phụ thuộc vào thiết kế [[pedagogy|sư phạm]] chứ không chỉ vào năng lực của mô hình, và thất bại thì rất dễ tạo ra một cách vô tình. Một gia sư được tối ưu cho “hoàn thành bài toán” sẽ làm xói mòn một gia sư được tối ưu cho “học cách giải bài toán” trong khi vẫn qua mọi bài kiểm thử chức năng bạn viết, vì cả hai đều tạo ra đáp án cuối cùng đúng. Khác biệt nằm ở việc sinh viên đã làm gì giữa câu hỏi và câu trả lời.

Danh sách thứ hai là chỗ các nhóm phát triển trở nên cụ thể. Lấy một nhãn thành thạo như “thành thạo đạo hàm” và từ chối để nó chỉ có nghĩa là tạo ra đạo hàm đúng. Hãy tách nó thành: nhận ra khi nào một đạo hàm là phù hợp, diễn giải nó như một tốc độ thay đổi tức thời, chọn quy tắc, thực hiện thủ tục, giải thích vì sao lựa chọn đó đúng, kiểm tra tính hợp lý, và áp dụng nó vào một bài toán chưa từng gặp. Mỗi mục trong số đó là một thứ riêng để ghi lại, và mỗi mục ngụ ý một phản hồi khác nhau khi nó còn thiếu. Cách phân rã này cũng là lớp phòng thủ chống lại [[correct-answer-trap-misconceptions|bẫy đáp án đúng]], nơi người học đi tới đáp án đúng bằng lý luận sai lệch và phần phân tích của bạn ghi nhận một thành công. [[correct-answer-trap-ai-tutor|Bắt lấy bẫy đáp án đúng]] và [[zhang-tutormoments-2026|Khi sự trợ giúp không giúp được gì]] đều mô tả các phiên bản của thất bại đó trong môi trường vận hành thật.

## Xây mô hình người học trước cuộc trò chuyện

Mô hình người học giữ hai loại trạng thái: ước lượng theo từng khái niệm (giới hạn: đang phát triển, quy tắc lũy thừa: đã thành thạo, quy tắc tích: đang phát triển, quy tắc chuỗi: chưa thể hiện) và các giả thuyết về quan niệm sai kèm bằng chứng và độ tin cậy phía sau mỗi giả thuyết. Hãy giữ chúng tách rời. Ước lượng khái niệm là thứ dẫn dắt việc chọn độ khó. Giả thuyết là thứ dẫn dắt câu hỏi tiếp theo.

Hãy cẩn thận với việc để một [[llm]] tự chẩn đoán một mình. [[benchmark|Đánh giá theo chuẩn]] phát hiện rằng các gia sư LLM có thể nhận ra lý luận đúng rõ ràng trong khi đôi lúc bác bỏ những cách làm hợp lệ khác hoặc chấp nhận lý luận sai. Một mô hình nhận ra trường hợp tốt mà đọc sai trường hợp mơ hồ sẽ thất bại đúng ở những sinh viên cần trợ giúp nhất. Với những miền có hệ quả, kiến trúc trụ được là **chẩn đoán có cấu trúc cộng với đối thoại LLM linh hoạt**, cách sắp xếp mà [[yasir-llm-tutoring-agents-2026|Xác nhận cái đúng, bỏ sót phần còn lại]] mô tả: bộ dò của chính bạn xác lập sinh viên có lẽ đã làm gì, và mô hình viết cuộc trò chuyện quanh phát hiện đó.

Hãy cho chẩn đoán một trình tự rõ ràng mà mô hình không thể bỏ qua: phát hiện, xác minh, phản hồi. Mô hình có thể đề xuất một [[misconceptions|quan niệm sai]] như một giả thuyết, rồi phải xác minh nó với bài làm thực tế của sinh viên hoặc một câu hỏi nhắm trúng trước khi gia sư phản hồi về nó. Không có bước đó, hệ thống bịa ra bằng chứng rồi dạy sinh viên về một lỗi họ không hề mắc, vừa vô ích vừa hơi xúc phạm.

Bằng chứng đáng ghi lại, theo thứ tự hữu ích gần đúng: các lần thử gần đây kèm các bước trung gian, kiến thức đã thể hiện theo từng khái niệm, hành vi tìm trợ giúp (bản thân nó là một tín hiệu về sự tự tin), và độ tự tin tự báo cáo ở nơi bạn thu thập. Hãy điều chỉnh độ khó và mức trợ giúp từ hồ sơ đó, và coi prompt mới nhất của người học là một đầu vào của nó. Một prompt đơn lẻ là một bộ ước lượng tồi về những gì sinh viên biết, và một gia sư phản ứng theo nó sẽ dao động loạn xạ.

## Cố định thang trợ giúp, rồi để giao diện thu phí cho nó

Hãy viết các bậc ra trước khi bạn viết một prompt, vì thang là một quyết định sản phẩm với những trạng thái có tên, và một thiết lập giọng điệu không thể diễn đạt được nó. Một trình tự khả thi:

1. Tự thử một mình.
2. Câu hỏi siêu nhận thức về những gì sinh viên đã thử.
3. Gợi ý mang tính khái niệm.
4. Xác định quy tắc liên quan.
5. Dựng một phần của bài toán.
6. Một bước trung gian đã giải sẵn.
7. Lời giải đã giải sẵn.
8. Sinh viên giải thích lời giải.
9. Sinh viên giải một bài toán tương tự mà không có trợ giúp.

Trợ giúp mờ dần khi năng lực tăng, và đó là cơ chế ở trung tâm của [[scaffolding]]. Nhìn một lời giải đã giải sẵn không chứng minh sự thành thạo, nên bất kỳ phiên nào chạm tới bậc bảy đều còn nợ bạn bậc chín trước khi được tính là hoàn tất.

Bằng chứng nhân quả cho việc dựng thang ngay từ đầu đến từ một thí nghiệm thực địa, trong đó một giao diện GPT không có hàng rào bảo vệ làm tăng kết quả toán khi có trợ giúp và làm giảm kết quả thi khi không có trợ giúp sau đó. Một gia sư biết đưa gợi ý đã loại bỏ phần lớn hình phạt học tập đó ([[generative-ai-guardrails-harm-learning|Generative AI không có hàng rào bảo vệ có thể gây hại cho việc học]]). Ràng buộc là ràng buộc kiến trúc. Cùng một mô hình, với hành vi trợ giúp khác đi, tạo ra kết quả ngược lại trên thước đo quan trọng.

Một thí nghiệm thực địa ngẫu nhiên lớn hơn với hơn 6,000 học sinh trung học cơ sở trên một nền tảng luyện tập dựa trên sự thành thạo cho thấy thang trông thế nào trong nhật ký. Những học sinh được gán vào trợ giúp AI tiến bộ chậm hơn và thử ít câu hỏi hơn, và họ trả lời chính xác hơn. Cơ chế rõ nhất là tính đúng ở lần thử kế tiếp sau một lỗi: cần ít lần thử hơn để quay lại một đáp án đúng. Mô thức đó là một sự chậm lại có ích, và nó là dấu vết mà một thang gợi ý được cho là để lại ([[making-ai-tutoring-productive-mastery-math-2026|Khiến gia sư AI tạo ra sự thành thạo có ích]]).

Cùng nghiên cứu đó cũng đưa ra một cảnh báo về bảng điều khiển của chính bạn. Việc yêu cầu ba đáp án đúng liên tiếp làm tăng mạnh sự thành thạo theo định nghĩa của nền tảng mà không tạo ra lợi ích đo được nào trên một bài kiểm tra trì hoãn một tuần sau đó. Bằng chứng mạnh nhất về bài kiểm tra trì hoãn chỉ xuất hiện ở nơi AI nằm bên trong quy trình thành thạo (hệ số 0.085), không phải ở nơi nó chỉ được cung cấp như một quyền truy cập độc lập. Nếu thước đo thành công của bạn là một bộ đếm chuỗi, bạn sẽ tung ra một hệ thống tối ưu cho chuỗi đó.

Ma sát trong giao diện thuộc cùng một lượt thiết kế. Gợi ý không giới hạn sau một nút bấm nhìn thấy được biến cả thang thành một lối tắt, và việc xin gợi ý quá sớm với đọc lướt qua có liên hệ với [[learning-gains|kết quả học tập]] thấp hơn. Thay `[Hint][Hint][Hint][Show Answer]` bằng hai câu hỏi “bạn đã thử gì?” và “phần nào đang chặn bạn?” (chọn quy tắc, dựng phương trình, làm đại số, hiểu khái niệm) chỉ tốn một màn hình và đưa sinh viên tới đúng bậc họ cần. Nó cũng cho bạn dữ liệu nhật ký để biết bậc nào họ thường bỏ qua.

## Giao những phần kiểm tra được cho một bộ kiểm tra

Hãy neo việc sinh nội dung vào tài liệu đã được giảng viên phê duyệt: các mục trong sách giáo trình, ghi chú môn học, ví dụ đã giải, thuật ngữ, phương pháp được duyệt, ký hiệu, quy định bài tập, chính sách, và các nguồn [[curriculum-design|chương trình]]. Sinh văn bản tăng cường truy hồi trên kho tài liệu đó làm giảm [[hallucination-risk|nguy cơ bịa đặt]] chứ không loại bỏ nó, như [[rag]] trình bày. Hãy hiển thị trích dẫn hoặc nguồn gốc trong giao diện ở nơi sinh viên có thể kiểm tra một khẳng định, vì trích dẫn là thứ khiến việc neo tài liệu có thể kiểm toán về sau.

Việc neo tài liệu còn làm một việc mà các thước đo độ chính xác bỏ sót. Một môn học có những phương pháp được duyệt, và một gia sư đưa vào một kỹ thuật hợp lệ về mặt toán học mà môn học không dùng đã dạy sinh viên một thứ họ sẽ bị trừ điểm vì nó. Truy hồi từ lớp môn học là cách gia sư ở lại trong tập phương pháp.

Với những miền có đáp án kiểm tra được một cách hình thức, hãy thêm các công cụ tất định: máy tính, hệ thống toán học ký hiệu, thực thi mã, đồ thị tri thức, bộ kiểm tra dựa trên quy tắc, và các bộ giải [[discipline-specific-aied|chuyên biệt theo ngành]]. Phần quan trọng là cách phân công lao động. LLM xử lý việc giải thích và đối thoại. Cỗ máy ký hiệu xác minh tương đương đại số, đạo hàm, tích phân, nghiệm phương trình, điểm tới hạn và các xấp xỉ số. Một bước trung gian sai mà bộ xác minh bắt được trở thành một khoảnh khắc giảng dạy. Một bước trung gian sai mà không gì bắt được trở thành một quan niệm sai mà sinh viên mang vào phòng thi.

## Buộc người học phải hành động trên phản hồi

Phản hồi nói “Đúng”, “Sai” hay “Làm tốt lắm” là một sự kiện chấm điểm khoác giao diện của việc dạy. Cơ sở kiến thức coi [[feedback]] là một vòng cung cấp và tiếp nhận: phản hồi hỗ trợ việc học khi sinh viên hiểu nó và hành động theo nó, và nửa sau chính là nửa mà các hệ thống thường bỏ qua. Hãy xây gia sư để nó gọi tên bước lý luận liên quan, nói điều gì cần xem lại, đưa ra một hành động tiếp theo cụ thể, và yêu cầu người học dự đoán hoặc giải thích trước khi phản hồi được hé lộ.

Trình tự mang điều đó là người học trước, AI sau, người học lại. Sinh viên tạo ra, chọn, biện minh, đánh giá hoặc phản tư; gia sư phản hồi; sinh viên làm gì đó với phản hồi. Hãy thiết kế cấu trúc lượt để điều này không phải là tùy chọn. Một hệ thống nơi mô hình có thể tạo ra ba đoạn văn để trả lời một câu hỏi dạy sinh viên cách hỏi và cách đọc.

Mục tiêu dài hạn là sự nội hóa. Người học nên kết thúc bằng việc tự vận hành cách đặt câu hỏi và các chiến lược [[problem-solving|giải quyết vấn đề]] của gia sư, đó là lập luận về [[agency|quyền tự chủ]] và là lý do thang có một bậc trên cùng nơi gia sư im lặng.

## Thiết kế cho những gì xảy ra ở lượt thứ bốn mươi

An toàn sư phạm là một bộ kiểm thử riêng, khác với an toàn chatbot thông thường, và hầu hết các nhóm chỉ tung ra với bộ thứ hai. Độc hại và khả năng chống jailbreak không nói gì với bạn về việc liệu gia sư có đưa đáp án cho một sinh viên hỏi hai lần, đồng ý với một phương pháp sai vì sinh viên nghe có vẻ tự tin, trôi ra khỏi tập phương pháp của môn học qua một phiên dài, hay đẩy người học vào [[cognitive-offloading|giảm tải nhận thức]]. [[ai-sycophancy|Nịnh bợ]] là thứ lọt qua trước tiên, vì sự đồng ý đọc lên như lòng tốt và dữ liệu sở thích của bạn thưởng cho nó.

Hãy kiểm thử rò rỉ đáp án, củng cố quan niệm sai, đồng ý quá mức, độ khó không phù hợp, giảm tải, đối xử thiên lệch, mất quyền tự chủ của người học, trôi dạt trong giảng dạy, và sự quá tự tin trong những lời giải thích sai. Hãy chạy các bài kiểm thử trên những cuộc trò chuyện kéo dài, không phải từng lượt, vì các thất bại sư phạm tích lũy: mười lượt đầu có thể là mẫu mực và lượt thứ mười một có thể phá hỏng cả phiên. Một gia sư nên vừa tử tế vừa đúng cùng lúc, kể cả khi người học khăng khăng một quan niệm sai. [[pedagogical-safety]] và [[hazra-safetutors-pedagogical-safety-2026|An toàn gia sư AI và các tổn hại sư phạm]] trình bày hệ phân loại thất bại.

## Đặt kiến trúc dữ liệu vào cùng một bản thiết kế

Chỉ thu thập dữ liệu người học cần thiết về mặt sư phạm, và có thể nói vì sao mỗi trường tồn tại. Ở nơi bạn giữ bộ nhớ lâu dài hoặc một [[student-modeling|mô hình người học]], hãy làm cho mục đích của nó hiển hiện với người học, cho họ quyền kiểm soát phù hợp với nó, bảo vệ thông tin nhạy cảm, xác định thời hạn lưu giữ, và chuyển các quyết định có hệ quả cho một giảng viên hoặc một điểm kiểm soát [[human-in-the-loop-ai|con người]] khác. Một mô hình người học âm thầm tích lũy một ước lượng độ tự tin mà sinh viên không bao giờ nhìn thấy vừa là một vấn đề bảo vệ dữ liệu vừa là một vấn đề sư phạm.

Hãy kiểm toán hành vi theo nền tảng ngôn ngữ, mức năng lực, bối cảnh văn hóa, nhu cầu [[accessibility|khả năng tiếp cận]], và mức [[prior-knowledge|kiến thức nền]] cùng kinh nghiệm AI. Hiệu suất khác biệt trên cùng một mục tiêu là một lỗi có một sinh viên gắn vào nó, và nó sẽ không xuất hiện trong con số độ chính xác tổng hợp của bạn.

Một quyết định về khả năng tiếp cận xứng đáng có một dòng riêng: đừng biến việc [[prompt-engineering|viết prompt]] tinh vi thành điều kiện tiên quyết cho việc giảng dạy tốt. Nếu gia sư chỉ dạy tốt khi sinh viên viết một prompt cẩn thận, bạn đã xây một hệ thống tạo lợi thế cho những sinh viên vốn đã biết cách nói chuyện với mô hình. Gia sư nên giúp người học hình thành những câu hỏi có ích, đó cũng là một kỹ năng [[metacognition|siêu nhận thức]] đáng có.

## Đo lường khoảng rút bỏ trợ giúp

Các thước đo trong phiên sẽ không nói cho bạn biết thứ đó có hiệu quả hay không. Độ chính xác của câu trả lời, độ dài cuộc trò chuyện, sở thích của sinh viên, sự hài lòng, mức hoàn thành nhiệm vụ và [[student-engagement|sự tham gia]] đều tăng ở những hệ thống không dạy được gì, vì sinh viên thích được trợ giúp và trợ giúp thì dễ đo. Hãy đánh giá năng lực thực hiện khi không có trợ giúp, sự ghi nhớ trì hoãn, chuyển giao sang bài toán mới, việc sửa quan niệm sai, tính độc lập của người học, mức tiếp nhận phản hồi, và [[differential-effects-across-learner-groups|tác động khác biệt giữa các nhóm người học]]. [[ai-ed-evaluation]] có các phương pháp, và [[ai-tutor-behavioral-evaluation|Trục đánh giá còn thiếu]] lập luận rằng hành vi chính là đối tượng cần đo.

Hai nghiên cứu làm sắc nét quy tắc chống lại [[self-report-measures|tự báo cáo]] và các chân trời ngắn. Một thí điểm với 38 sinh viên lập trình mới học phát hiện một liên hệ mạnh giữa việc dùng [[generative-ai|AI sinh tạo]] và việc học *được cảm nhận* (rs=0.802, p<0.001), trong khi các chỉ báo về tiến bộ tự chủ không có hỗ trợ của giảng viên lại đạt điểm thấp nhất. Các tác giả gọi khoảng cách đó là ảo tưởng về năng lực và món nợ nhận thức, và đó đúng là khoảng cách mà một thước đo hài lòng thưởng cho ([[genai-cognitive-tutor-programming-2026|Generative AI như một gia sư nhận thức không chính thức]]).

Sâu hơn nữa, phần lớn việc đánh giá dừng lại ở thời điểm trợ giúp kết thúc. [[cognitive-washout-ai-skill-decay-2026|Động học rửa trôi nhận thức]] gọi tên khoảng thời gian sau khi rút bỏ trợ giúp mà không ai đo, và hình thức hóa bốn kết cục: bật lại đàn hồi, bình nguyên một phần, giàn giáo tiềm ẩn, và phục hồi vượt mức. Đường cong rửa trôi của nó mang một hằng số thời gian phục hồi, một số hạng mức độ đầy đủ của phục hồi, và một chỉ số trễ so sánh nỗ lực học lại với nỗ lực ban đầu. Vì khả năng đảo ngược quyết định mức độ nghiêm trọng, khung này lập luận rằng việc luyện tập không có trợ giúp theo lịch nên được định liều theo đường cong phục hồi thay vì bị tranh luận như một vấn đề nguyên tắc. Kế hoạch đánh giá của bạn cần một giai đoạn rút bỏ trợ giúp cũng như một bài kiểm tra ngay sau đó, và [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|bằng chứng ngẫu nhiên rằng trợ giúp ngắn làm giảm năng lực thực hiện khi không có trợ giúp về sau]] là lý do để lên lịch nó sớm.

## Cho giáo viên một thứ để sửa

Trước khi triển khai, hãy để các nhà giáo dục thử nghiệm với những hồ sơ người học thực tế, những quan niệm sai phổ biến, các trường hợp biên, những prompt đối kháng, những phản hồi mơ hồ, và những cuộc trò chuyện gia sư dài. Hãy ghi lại các thất bại sư phạm và đưa chúng trở lại vào prompt hệ thống, chính sách gia sư, nguồn tri thức, [[guardrails|hàng rào bảo vệ]], quy tắc mô hình người học và việc chọn mô hình. Một phản hồi trôi chảy vẫn có thể sai về mặt sư phạm, và giáo viên là người đánh giá duy nhất nhìn ra được điều đó.

[[teacher-intervention-k12-ai-based-instruction-2026|Tổng quan hệ thống của Lee về 29 nghiên cứu K-12]] mô tả việc giám sát đó gồm những gì và nó đứt ở đâu. Can thiệp của [[teacher-role|giáo viên]] là một chu trình bốn pha lặp lại: giám sát, phán đoán, can thiệp và điều phối. Các cảnh báo AI, [[visualization|bảng điều khiển]] và điểm số tự động “không tự động dẫn tới hành động sư phạm”. Chiến lược giáo viên mạnh nhất mà tổng quan tìm thấy là chuyển dịch sư phạm: chọn, sửa, bổ sung, tóm tắt hoặc xóa phản hồi của chatbot thay vì chuyển thẳng nó đi.

Hai cảnh báo thiết kế đi theo sau, và cả hai đều ngược với lộ trình thông thường. Nhiều thông tin AI hơn không phải là tốt hơn: những hệ thống liên tục phát ra chẩn đoán làm giáo viên quá tải và kéo sự chú ý khỏi quan sát của chính họ. Hãy ưu tiên thứ đáng hành động, làm cho nó diễn giải được, và đưa ra khuyến nghị ở dạng mà giáo viên có thể chấp nhận, sửa, hoãn hoặc bác bỏ. Nhiều hỗ trợ cho giáo viên hơn cũng không phải là tốt hơn: việc trì hoãn can thiệp để sinh viên làm việc độc lập tự nó là chuyên môn. Các điều kiện cấu trúc, nghĩa là thời gian xem dữ liệu, sĩ số lớp, và khả năng tiếp cận tận nơi những nhóm cần trợ giúp, là một phần của can thiệp chứ không phải hậu cần nền. Một bảng điều khiển được xây cho một giáo viên không có tiết trống sẽ không được mở ra.

## Trường hợp một: một gia sư giải tích, nơi việc xác minh rẻ

Một gia sư giải tích cho học kỳ đầu đại học nên nâng cao thứ sinh viên có thể tự giải và tự giải thích sau khi nó bị rút đi, chứ không phải tối đa hóa số bài hoàn thành đúng. Dạy kèm toán đặc biệt dễ bị giàn giáo quá mức, dùng gợi ý quá sớm, và chẩn đoán sai lý luận của sinh viên, và cả ba đều hiện ra trong nhật ký của bạn nếu bạn chịu nhìn ([[math-education]]).

**Neo tài liệu và xác minh.** Một bản dựng sáu lớp: tài liệu môn học và chính sách của giảng viên, rồi một lớp truy hồi, rồi một cỗ máy bài toán và mô hình người học song song với một bộ xác minh ký hiệu và một cỗ máy chẩn đoán, rồi một lớp chính sách sư phạm, rồi việc sinh đối thoại, rồi sinh viên, rồi quay lại mô hình người học. Bộ xác minh là lý do thiết kế này khả thi. Nó quyết định một biểu thức có tương đương không, một đạo hàm có đúng không, một tích phân có được tính đúng không, một điểm tới hạn có được tìm ra không, và nó làm việc đó mà không hỏi ý kiến mô hình.

**Một lượt tương tác.** Với việc lấy đạo hàm $f(x)=(x^2+1)\sin x$, một chatbot thông thường sẽ lộ ra đáp án. Một gia sư định hướng học tập suy luận bên trong rằng sinh viên đã lấy đạo hàm cả hai thành phần nhưng nhân các kết quả với nhau, một [[misconceptions|quan niệm sai]] khả dĩ kiểu quy tắc tích thành $f'g'$, và hỏi một câu hỏi chẩn đoán trước: quy tắc nào áp dụng khi hai hàm được nhân với nhau? Rồi sinh viên viết quy tắc tích dưới dạng ký hiệu, đặt $u$ và $v$, và chỉ sau đó gia sư mới xác minh biểu thức cuối cùng. Hãy để ý bao nhiêu phần của việc dạy kèm đã diễn ra trước khi bất kỳ đoạn văn nào của mô hình chạm tới sinh viên.

**Nhiều cách biểu diễn.** Hãy nối các thủ tục ký hiệu với công thức, với đồ thị, với bảng, với một cách diễn giải bằng lời, và với một bối cảnh tốc độ thay đổi vật lý. Sự trôi chảy thủ tục và sự hiểu khái niệm trông giống hệt nhau trên một tờ đáp án đúng và tách ra ở bài toán chuyển giao.

**Bảng điều khiển.** Hãy hiển thị bằng chứng tổng hợp thay cho những phán đoán mờ đục: “quy tắc tích, 62% thành thạo đã được chứng minh; các mô thức phổ biến, 18% bỏ sót một số hạng, 11% nhân các đạo hàm”. Các chẩn đoán cá nhân được gửi đi như những giả thuyết kèm bằng chứng hỗ trợ, và đó cũng là thứ khiến chúng có thể được giáo viên xem xét ([[explainable-ai|khả năng giải thích]] quan trọng với giáo viên hơn là với sinh viên ở đây).

**Kế hoạch đánh giá.** Năng lực thực hiện khi có gia sư, năng lực thực hiện trên các bài toán tương tự khi không có nó, sự ghi nhớ trì hoãn, chuyển giao sang bài toán chưa quen, chất lượng giải thích khái niệm, việc sửa quan niệm sai, việc [[help-seeking|tìm trợ giúp]] phù hợp so với quá sớm, rò rỉ đáp án, tỷ lệ dương tính giả và âm tính giả của chẩn đoán, và các kết cục khác biệt. Phép so sánh quyết định dự án là giữa có trợ giúp và về sau không có trợ giúp. Một sinh viên đi từ 60% lên 95% khi có gia sư và vẫn ở 60% khi làm một mình thì chưa được dạy kèm gì cả.

## Trường hợp hai: một huấn luyện viên viết, nơi giai đoạn quyết định quyền hạn

Viết không có một đáp án đúng duy nhất, nên việc xác minh là phán đoán và công việc thiết kế chuyển sang việc chia giai đoạn. Cơ sở kiến thức định khung viết như một quá trình nhận thức, xã hội và tu từ, nghĩa là một hệ thống viết bằng AI có thể hỗ trợ việc học và cũng có thể loại bỏ đúng cái tư duy mà bài tập tồn tại để phát triển ([[writing-education]], [[coach-not-crutch-ai-writing]]).

**Một mô hình năng lực.** Hãy theo dõi lập luận (độ cụ thể của luận đề, sự khớp giữa khẳng định và bằng chứng, phản lập luận), tổ chức (trọng tâm đoạn văn, tiến trình logic, chuyển ý), bằng chứng (độ liên quan của nguồn, cách tích hợp, cách diễn giải), sửa bài (sửa ở cấp toàn bài và cấp câu, đánh giá phản hồi) và văn phong (sự rõ ràng, ngữ pháp, giọng điệu). Mỗi mục trở thành một tín hiệu riêng trong mô hình người học, và đó là thứ khiến phản hồi có mục tiêu trở nên khả thi.

**Neo huấn luyện viên vào bài tập.** Hãy truy hồi đề bài, rubric của giảng viên, tài liệu đọc của môn, yêu cầu trích dẫn, quy ước thể loại, ví dụ của giảng viên, và chính sách sử dụng AI, để phản hồi có thể nói “rubric của giảng viên bạn yêu cầu nối mỗi khẳng định chính với bằng chứng từ ít nhất hai tài liệu đọc của môn” thay vì bịa ra những kỳ vọng chung chung. Lời khuyên chung chung là thất bại mặc định của một công cụ viết không được neo tài liệu, và sinh viên nhận ra điều đó trong vòng hai phiên.

**Đặt quyền hạn theo từng giai đoạn.** Việc AI tham gia ở các giai đoạn khác nhau ảnh hưởng tới cảm nhận về quyền sở hữu theo cách khác nhau. Hỗ trợ lập dàn ý làm giảm quyền sở hữu ít hơn hỗ trợ viết nháp, và việc AI tạo bản nháp tạo ra mức giảm lớn nhất ([[ai-writing-support-stage-ownership-2026|Từ lập dàn ý tới sửa bài]]). Phát hiện đó chuyển thẳng thành một bảng quyền hạn. Ở giai đoạn lập dàn ý, huấn luyện viên đặt câu hỏi, so sánh các lập trường, thách thức các giả định và phê bình dàn ý, và không tạo ra lập luận. Ở giai đoạn viết nháp, người học viết văn bản trước và huấn luyện viên phát triển nó chứ không tiếp quản. Ở giai đoạn sửa bài, huấn luyện viên chẩn đoán và dừng ở đó: khẳng định chưa rõ, bằng chứng còn thiếu, bằng chứng không ủng hộ khẳng định, vấn đề tổ chức, bản nháp đối chiếu với rubric. Ở giai đoạn biên tập, sau khi sửa bài, nó xử lý ngữ pháp, dấu câu, sự súc tích và định dạng trích dẫn.

**Một lượt tương tác đã làm sẵn.** Với một bài luận về việc bắt buộc các [[online-teaching-and-learning|khóa học trực tuyến]], một hệ thống chung chung sẽ viết lại đoạn văn của sinh viên thành văn xuôi bóng bẩy và làm luôn phần việc trí tuệ. Một huấn luyện viên nói điều gì đang tốt, gọi tên vấn đề chính (đoạn văn đưa ra lý do nhưng không bao giờ giải thích vì sao chúng biện minh cho một yêu cầu bắt buộc toàn trường), đặt một câu hỏi để sửa bài, và yêu cầu sinh viên hoàn thành một câu bằng lời của chính họ. Lập luận vẫn ở đúng chỗ của nó.

**Phản hồi có ưu tiên.** Một điểm mạnh cần giữ, một vấn đề có tác động lớn, một câu hỏi đòi hỏi phán đoán của người viết, một mục tiêu sửa bài cụ thể. Không phải bốn mươi lời nhận xét. Một sinh viên nhận bốn mươi lời nhận xét sẽ phân loại chúng theo độ dài, và việc phân loại đó chẳng liên quan gì tới điều quan trọng.

**Để sinh viên tự phán đoán phản hồi.** [[feedback-literacy|Hiểu biết về phản hồi]] là một mục tiêu học tập theo đúng nghĩa của nó. Hãy định kỳ hỏi người học có đồng ý với một gợi ý không và vì sao, và để họ bác bỏ nó. Kết quả là [[evaluative-judgment|phán đoán đánh giá]] chứ không phải sự tuân thủ, và đó cũng là lớp phòng thủ duy nhất chống lại một huấn luyện viên tự tin một cách sai lệch.

**Giữ giọng điệu.** Hãy phân biệt lỗi, vấn đề rõ ràng, lựa chọn tu từ và sở thích văn phong, và để yên hai mục cuối. Một huấn luyện viên “sửa” các lựa chọn tu từ sẽ làm văn bản đồng nhất hóa về phía văn phong mà mô hình ưa thích, và nó gây thiệt hại nhiều nhất cho những người viết [[multilingual-learning|đa ngôn ngữ]] và những truyền thống tu từ không chuẩn mực ([[ai-feedback-quality|chất lượng phản hồi AI]] là phiên bản tổng quát của vấn đề này).

**Học từ các lần sửa bài.** Hãy lưu lịch sử sửa bài chứ không chỉ lưu bài luận cuối cùng. Một mô thức lặp lại kiểu “bằng chứng được đưa vào nhưng không được diễn giải” mà tiến bộ qua ba bài luận là tín hiệu hữu ích nhất mà một hệ thống viết có thể có, và nó miễn phí.

**Đánh giá.** Chất lượng bài viết có AI hỗ trợ và bài viết về sau không có hỗ trợ, khả năng tìm ra điểm yếu trong bài viết chưa quen, chất lượng sửa bài, mức tiếp nhận phản hồi, khả năng giải thích các lần sửa, quyền sở hữu, sự phụ thuộc vào văn xuôi của AI, việc giữ giọng điệu, thiên lệch giữa các phương ngữ và những người viết đa ngôn ngữ, sự khớp với phán đoán của giảng viên, và chuyển giao trì hoãn. Thiết kế trả lời câu hỏi đó có ba nhánh: viết độc lập, AI tạo văn bản, và một huấn luyện viên. Sau đó cả ba nhóm đều viết một bài luận mới không có AI. Nếu nhóm có AI tạo văn bản thắng trong thực hành và thua khi không có nó, hệ thống đã cải thiện năng lực thực hiện chứ không phải việc học. Các mô thức ở cấp lớp từ bảng điều khiển (41% cần hỗ trợ về việc nối khẳng định với bằng chứng) là một tín hiệu [[formative-assessment|đánh giá hình thành]] cho giảng viên.

## So sánh hai bản dựng

| Câu hỏi thiết kế | Gia sư giải tích | Huấn luyện viên viết |
|---|---|---|
| Đối tượng học tập chính | Các khái niệm toán học và giải quyết vấn đề | Lập luận và quá trình viết |
| Xác minh | Thường kiểm tra được một cách khách quan | Thường cần phán đoán theo ngữ cảnh |
| Công cụ tất định | Cỗ máy toán ký hiệu, máy tính | Kiểm tra ngữ pháp, trích dẫn, rubric |
| Vai trò chính của AI | Chẩn đoán và giàn giáo lý luận | Chẩn đoán và giàn giáo việc sửa bài |
| Rủi ro chính | Trao luôn lời giải | Viết văn bản thay cho người học |
| Hành động của người học quan trọng nhất | Giải và giải thích | Viết nháp, đánh giá và sửa bài |
| Mô hình người học | Khái niệm, thủ tục, quan niệm sai | Lập luận, bằng chứng, tổ chức, sửa bài |
| Hàng rào bảo vệ then chốt | Thử trước khi được lời giải | Văn xuôi của sinh viên trước khi AI viết lại |
| Bài kiểm tra chuyển giao | Bài toán giải tích mới không có AI | Nhiệm vụ viết mới không có AI |
| Tiêu chí thành công | Lý luận toán học độc lập | Viết độc lập và phán đoán đánh giá |

Cả hai hệ thống dùng cùng một tập [[ai-technologies|công nghệ AI]] và thể hiện những chính sách sư phạm khác nhau, vì các ngành đòi hỏi những kiểu tư duy khác nhau. Quy tắc tổng quát hóa là xác định hoạt động nhận thức tạo ra việc học và thiết kế AI để hỗ trợ hoạt động đó mà không thực hiện nó thay. Quy tắc đó đứng trên bất kỳ mô hình, prompt, khung tác tử hay giao diện cụ thể nào.

## Các nhóm phát triển hiểu sai điều gì

Sư phạm nằm trong prompt hệ thống, nên một prompt cẩn thận là một thiết kế sư phạm. Một prompt là một lớp của một chính sách, mà chính sách đó còn gồm việc bạn thu bằng chứng nào, giao diện đưa ra bậc nào, bộ xác minh kiểm tra cái gì, và bảng điều khiển hiển thị cái gì. Một prompt viết tốt đặt trên một mô hình người học không lưu gì sẽ tạo ra một gia sư trôi chảy không có ký ức về sinh viên, và thang sẽ khởi động lại mỗi phiên.

Một mô hình tốt hơn sẽ sửa được chẩn đoán. Kết quả đánh giá theo chuẩn ở trên phát hiện các gia sư LLM nhận ra lý luận đúng trong khi bác bỏ những cách làm hợp lệ và chấp nhận những cách làm sai, và đó là một mô thức lỗi mà quy mô không sửa được một cách rõ ràng. Chẩn đoán có cấu trúc tồn tại vì phán đoán của mô hình là phần bạn không thể kiểm toán.

Sự hài lòng và mức hoàn thành chứng minh thiết kế hiệu quả. Chúng chứng minh sinh viên đã được trợ giúp. Thí điểm với 38 sinh viên lập trình phát hiện việc học được cảm nhận liên hệ mạnh với mức sử dụng trong khi tiến bộ tự chủ đạt điểm thấp nhất, và nghiên cứu về sự thành thạo phát hiện một yêu cầu chuỗi làm tăng sự thành thạo trên nền tảng mà không có lợi ích nào trên bài kiểm tra trì hoãn. Hãy đưa thước đo rút bỏ trợ giúp vào thí điểm, nếu không bạn sẽ học sai bài học một cách hiệu quả.

Truy hồi làm cho các câu trả lời đáng tin. Nó làm giảm [[hallucination-risk|nguy cơ bịa đặt]] và để nguyên phần còn lại của bề mặt thất bại: một đoạn được truy hồi có thể bị đọc sai, một kỹ thuật hợp lệ có thể sai với môn học, và mô hình vẫn có thể tự tin sai về một bước nó tự suy ra. Truy hồi là một sàn, không phải một trần.

Qua được bộ kiểm thử an toàn nghĩa là nó an toàn cho sinh viên. Kiểm thử an toàn thông thường bao phủ độc hại và jailbreak. Những thất bại sư phạm quan trọng ở đây, rò rỉ đáp án, nịnh bợ và trôi dạt, thì vô hình với nó, và chúng tích lũy qua một cuộc trò chuyện chứ không xuất hiện trong một lượt.

Sự tham gia là mục tiêu. Độ dài cuộc trò chuyện và số phiên là những thước đo rẻ nhất để gắn thiết bị đo, và đó là lý do chúng được nâng lên thành mục tiêu. Lập luận của [[scaffolding]] nói rằng phiên lý tưởng trở nên ngắn hơn khi sinh viên tiến bộ, nên một sự gia tăng trong mức tham gia cũng có khả năng là một triệu chứng.

## Những gì sẽ quay lại với bạn

**“Chúng tôi tung ra trong sáu tuần và đây là khối lượng của một quý.”** Phần lớn kiến trúc thì rẻ. Một cổng lượt thử, một thang đã cấu hình, truy hồi trên ghi chú bạn đã có, và một lược đồ nhật ký có trường rút bỏ trợ giúp là công việc của vài ngày. Những hạng mục đắt tiền (mô hình người học, bộ xác minh, bảng điều khiển) có thể bắt đầu sau một cờ tính năng cho một môn học, và thí điểm có nhiều thông tin hơn khi những phần rẻ đã xong.

**“Sinh viên thích nó và mức hoàn thành đã tăng.”** Cả hai sự thật đều tương thích với một hệ thống trả lời câu hỏi tốt mà không dạy được gì. Nghiên cứu với 6,000 sinh viên phát hiện tiến bộ chậm hơn và ít câu hỏi được thử hơn đi kèm với độ chính xác tốt hơn, nên mức hoàn thành giảm cũng không tự động là tin xấu. Hãy báo cáo năng lực thực hiện khi không có trợ giúp bên cạnh các con số về mức tham gia và để hai thứ đó bất đồng công khai.

**“Chúng tôi không chạy được một thử nghiệm ngẫu nhiên.”** Bạn có thể chạy một phép so sánh trong cùng một sinh viên mà không cần thử nghiệm: cùng một mục tiêu, có trợ giúp trong chương, được kiểm tra không có trợ giúp hai tuần sau đó, với điểm có trợ giúp được báo cáo bên cạnh. Thiết kế đó trả lời câu hỏi sản phẩm và không cần nhóm đối chứng. Điều nó không thể nói cho bạn là phản thực tế cho những sinh viên chưa bao giờ dùng gia sư.

**“Mô hình là API của nhà cung cấp, nên hành vi trợ giúp nằm ngoài tầm tay chúng tôi.”** Các bậc nằm trong lớp điều phối của bạn, và kết quả của thí nghiệm hàng rào bảo vệ đến từ việc thay đổi thứ gia sư được phép nói, không phải từ việc đổi mô hình. Hãy dự kiến rằng quá trình hậu huấn luyện của nhà cung cấp sẽ kéo về phía trả lời ngay lập tức, vì sự hữu ích là thứ nó được tinh chỉnh cho, và hãy đặt sự tiết chế vào mã của chính bạn.

**“Giáo viên sẽ không dùng thêm một bảng điều khiển nữa.”** Họ sẽ không dùng một bảng liên tục phát ra chẩn đoán, thứ mà tổng quan K-12 phát hiện là kéo sự chú ý khỏi quan sát của chính họ. Hãy cho họ một số ít tín hiệu diễn giải được, một cách chấp nhận hoặc bác bỏ từng khuyến nghị, và thời gian trong tuần để nhìn vào chúng.

**“Chúng tôi không có chuyên gia ngành trong biên chế.”** Vậy thì gia sư sẽ dạy phương pháp chung và ký hiệu của môn học sẽ trôi dạt trong một học kỳ. Một chuyên gia môn học hai ngày ở giai đoạn thiết kế, viết danh sách quan niệm sai và danh sách phương pháp được duyệt, là hạng mục rẻ nhất trong dự án và là hạng mục các nhóm cắt trước tiên.

## Việc cần làm trong tuần này

**1.** Viết câu về năng lực thực hiện khi không có trợ giúp cho thí điểm và đặt nó vào bản đặc tả, phía trên danh sách tính năng.

**2.** Thêm một cổng lượt thử và ghi lại nó. Ghi lại việc sinh viên có thử trước gợi ý đầu tiên hay không, và họ đã tới bậc nào.

**3.** Thay nút gợi ý bằng câu hỏi về điểm chặn, và ghi câu trả lời như một hạng mục.

**4.** Lên lịch một bài kiểm tra không có trợ giúp hai tuần sau chương và đưa nó vào lịch kèm một người chịu trách nhiệm.

**5.** Đặt hai ngày với một giáo viên bộ môn để viết danh sách quan niệm sai và danh sách phương pháp được duyệt.

## Đi tiếp từ đây

[[designing-educational-ai-software]] trình bày các quy tắc ở cấp phần mềm mà một gia sư phải thỏa, và [[designing-ai-into-learning]] trình bày chỗ gia sư nằm trong một chuỗi môn học. [[evaluating-ai-interventions-methods]] và [[checking-whether-educational-ai-works]] xử lý việc thứ đó có hiệu quả hay không. Nếu vấn đề của bạn là mô hình trả lời quá sẵn sàng, [[making-ai-better-at-supporting-learning]] và [[training-ai-tutors-to-guide-rather-than-answer]] đi qua phía huấn luyện của cùng câu hỏi đó.
