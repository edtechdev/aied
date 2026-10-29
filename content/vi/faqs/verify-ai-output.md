---
title: "Làm thế nào để dạy sinh viên kiểm chứng đầu ra của AI?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Đó là tuần trước hạn nộp điểm và hai bài nộp trích dẫn những nguồn không tồn tại. Cả hai sinh viên đều nói rằng mình đã kiểm tra. Một người mở đường liên kết. Người kia đọc đoạn văn và thấy nó nghe có vẻ đúng. Bạn đã nói với lớp này rằng phải kiểm chứng những gì chatbot đưa cho họ, và việc nói ra đó không tạo ra hành vi.

Kiểm chứng là một chuỗi bước bạn có thể xây vào bài tập. Hãy quyết định thế nào là đúng trước khi nhiệm vụ bắt đầu, cho sinh viên cam kết một kỳ vọng bằng văn bản, đưa họ đến bản ghi thay vì ấn tượng của họ về văn xuôi, và chấm điểm bản ghi họ tạo ra. Một dòng rubric ghi 'đã kiểm tra nguồn' không đo được điều nào trong số đó.

## Tóm tắt

**1.** Viết đáp án trước. Một bước kiểm tra cần một thứ để đối chiếu, và hầu hết bài tập kiểm chứng không bao giờ định nghĩa đúng nghĩa là gì.

**2.** Yêu cầu một dự đoán trước khi đầu ra xuất hiện, để lý luận của sinh viên tồn tại trên giấy trước khi công cụ có thể ghi đè nó.

**3.** Gọi tên đích của từng bước kiểm tra: danh sách tác giả, nơi công bố, năm, con số cụ thể, bước cụ thể. 'Hãy chắc là nó đúng' không phải là một bước kiểm tra.

**4.** Tách bước kiểm tra mà máy có thể chạy khỏi phán đoán mà chỉ người đọc mới làm được, và dạy sinh viên biết họ đang làm loại nào.

**5.** Chấm bản ghi đối chiếu với đáp án, không chấm nỗ lực, để việc kiểm tra hình thức không được điểm nào.

**6.** Lên lịch bước kiểm tra bên trong nhiệm vụ. Áp lực thời gian là một lý do được ghi nhận khiến sinh viên bỏ qua nó.

## Quyết định thế nào là đúng trước khi ai đó kiểm tra bất cứ điều gì

[[verification-quality-reliance-calibration-genai-2026|Wei và Shang (2026)]], qua việc tổng quan 493 bản ghi đã loại trùng và lập bản đồ 14 nghiên cứu thực nghiệm ưu tiên, tách ra bảy thứ mà cụm 'sử dụng AI có phê phán' gộp thành một: đánh giá nhận thức luận, khởi phát kiểm chứng, chất lượng quá trình, thành công của kiểm chứng, các quyết định dựa vào, hiệu suất nhiệm vụ tức thời, và học tập độc lập. Rubric của bạn ghi 'đã kiểm tra nguồn', nằm ở bước thứ hai và không cho bạn biết bước kiểm tra đó có đủ năng lực hay không, hay có làm thay đổi câu trả lời của sinh viên hay không. Khởi phát không phải là thành công. Một quá trình mạnh có thể kết thúc mà không đi đến kết luận, một quá trình yếu có thể trúng đáp án đúng, và một sinh viên chạy một lần tìm kiếm rồi vẫn bối rối được điểm như một sinh viên đã giải quyết được câu hỏi.

Cùng tổng quan đó vẽ thêm một đường thứ hai, giữa [[trust|niềm tin]] và việc dựa vào. [[trust-calibration|Hiệu chỉnh mức dựa vào]] hỏi liệu một quyết định dựa vào có thích hợp với chất lượng thực tế của đầu ra hay không, điều này gắn phán đoán với một quyết định và một đầu ra. Một nghiên cứu được kiểm toán phát hiện thông tin sai của ChatGPT làm thay đổi niềm tin mà người tham gia tự báo cáo và không hề ghi lại liệu sau đó họ có chấp nhận hay bác bỏ một khuyến nghị cụ thể nào không. Một nghiên cứu khác ghi lại các quyết định chấp nhận và bác bỏ đối với [[feedback|phản hồi]] của ChatGPT ở 78 sinh viên dịch thuật, nhưng không có đánh giá độc lập của chuyên gia thì một sự chấp nhận không thể được gọi là thích hợp và một sự bác bỏ không thể được gọi là có căn cứ. Không có chân lý nền về chất lượng đầu ra, mức dựa vào hoàn toàn không thể được phân loại.

Đó là hệ quả về thiết kế, và là thứ đầu tiên cần sửa. Trước khi bạn đặt một nhiệm vụ kiểm chứng, hãy viết hai mô tả ngắn: một đầu ra đúng trông như thế nào với nhiệm vụ này, và một đầu ra nghe hợp lý nhưng sai trông như thế nào. Mỗi loại một cái là đủ. Sinh viên khi đó có một chuẩn để đối chiếu, và bạn có một thứ để chấm bước kiểm tra đối chiếu với, thay vì chỉ xem sinh viên có vẻ cẩn thận hay không.

## Cho họ cam kết trước khi công cụ trả lời

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] xây một chương trình đo lường quanh nguyên tắc *dự đoán trước khi chạy*: người học nêu điều gì nên xảy ra, rồi hành vi của sản phẩm được phán xét đối chiếu với dự đoán đó trên căn cứ chuyên ngành chứ không phải bằng việc nó có chạy được hay không. Lý luận tồn tại trước khi đầu ra tồn tại, và đó là thứ làm cho nó chấm điểm được.

Bản kiểm toán của ông trên 24 nghiên cứu phát hiện cùng một công cụ tạo ra những kết quả trái ngược nhau dưới những cấu trúc nhiệm vụ khác nhau. Một cách thiết lập ChatGPT thông thường kết thúc với thành tích, [[self-efficacy|tự hiệu quả]] và trạng thái dòng chảy thấp hơn đáng kể, trong khi một điều kiện có thêm các yêu cầu kiểm chứng và mô-đun suy ngẫm về lỗi cho thấy [[critical-thinking|tư duy bậc cao]] mạnh hơn. Công cụ không đổi giữa các điều kiện đó. Thứ thay đổi là liệu nhiệm vụ có yêu cầu sinh viên giữ một lập trường mà công cụ có thể phản bác hay không.

Trong thực tế, đó là một dòng trên bản giao bài: trước khi bạn mở công cụ, hãy viết ra điều bạn kỳ vọng nó sẽ nói và vì sao. Sau đó so sánh. Hai sinh viên có thể tạo ra cùng một đoạn văn và chỉ một trong hai giải thích được đoạn văn đó lệch khỏi dự đoán của mình ở đâu.

## Đưa họ đến bản ghi

[[citation-errors-hallucinations-computing-education-2026|Denny và cộng sự (2026)]] lần theo 113.588 tài liệu tham khảo từ 5.225 bài báo giáo dục máy tính công bố từ 2021 và kiểm chứng thủ công 828 bản ghi khả nghi. Họ phát hiện 30 bản ghi chứa thông tin thư mục sai lệch có thể kiểm chứng được, nằm trong 14 bài báo, tất cả đều từ 2025 và 2026. Mười ba bản là bịa hoàn toàn. Mười bảy bản còn lại ghép một tiêu đề có thật với tác giả, nơi công bố hoặc năm bị bịa hay sai. Ở SIGCSE Technical Symposium, con số tăng từ 3 trong kỷ yếu 2025 lên 17 trong kỷ yếu 2026, tức 2.3% số bài trong kỷ yếu năm đó.

Trường tác giả sai thường xuyên hơn bất kỳ phần nào khác của một tài liệu tham khảo do máy tạo. Phát hiện duy nhất đó cho bạn biết phải yêu cầu gì. 'Mở nguồn ra và đọc danh sách tác giả' nhắm vào trường dễ sai nhất, và nó tạo ra một sự kiện mà sinh viên hoặc có hoặc không. 'Hãy chắc là nguồn có thật' chỉ tạo ra một lời trấn an. Hãy yêu cầu sinh viên xác nhận tác giả, nơi công bố và năm đối chiếu với chính bản ghi. Bài báo đề nghị mọi công trình được trích phải được kiểm chứng và mọi công cụ kiểm tra tự động phải giữ [[human-in-the-loop-ai|con người trong vòng lặp]], đúng như thói quen mà một yêu cầu về trích dẫn rèn luyện.

## Tách bước kiểm tra máy có thể chạy khỏi phán đoán chỉ người đọc mới làm được

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] đặt một chuẩn có thể biện hộ cho những gì được phép kiểm tra bằng máy: tiêu chí được ghi thành văn bản, so sánh với tri thức đã được xác lập mà không cần phán đoán diễn giải, và một đáp án đúng duy nhất hoặc những phương án chấp nhận được đã được xác định trước. Ngày tháng, công thức, trích dẫn và tính toán đều qua được chuẩn đó. Bất cứ thứ gì mang tính diễn giải đều trượt, và ở đó chính cách đọc của sinh viên là công cụ của bước kiểm tra.

Gousopoulos hình thức hóa cùng sự phân tách đó thành một bài toán phát hiện tín hiệu với hai tham số độc lập. Độ nhạy là khả năng phân biệt đầu ra đúng với đầu ra có lỗi; tiêu chí là chỗ người học đặt ngưỡng để bác bỏ. Việc phụ thuộc quá mức chia ra theo đường đó. Cảnh báo, danh sách kiểm tra và nhắc nhở về ảo tưởng làm dịch chuyển tiêu chí, thay đổi thời điểm sinh viên bác bỏ. Giảng dạy chuyên ngành, các phép so sánh có mẫu và luyện tập với lỗi được gieo sẵn nâng độ nhạy, vì khi đó người học có thể phân biệt được. Một sinh viên chấp nhận đầu ra có lỗi có thể đang có vấn đề về tiêu chí hoặc vấn đề về độ nhạy, và hai trường hợp cần cách dạy khác nhau.

Điều kiện tiên quyết thì không dễ chịu. Việc dạy kiểm chứng chỉ có tính giáo dục ở nơi độ nhạy có thể vượt trên mức không, mà điều đó đòi hỏi đủ tri thức chuyên ngành để phân biệt đầu ra đúng với đầu ra sai. Trong cùng bản kiểm toán đó, những người mới được yêu cầu giải thích mã do [[llm|LLM]] tạo ra chỉ thành công ở khoảng một phần ba số nhiệm vụ, nên việc phán xét phản hồi hay mã của AI đối chiếu với lý luận của chính mình chỉ là một bước kiểm tra thật ở nơi lý luận đó có nội dung thực chất. Nếu sinh viên của bạn chưa tự làm được tư duy chuyên ngành, thêm cảnh báo không mua được gì. Hãy dạy nội dung và gắn bước kiểm tra vào đó.

Còn một cảnh báo nữa thuộc về thiết kế: những can thiệp làm giảm việc chấp nhận không thích hợp cũng phải được kiểm tra về việc bác bỏ nhầm những hỗ trợ đúng. Hãy để chỗ cho một sinh viên chấp nhận đầu ra tốt vì một lý do đã nêu.

## Chấm bước kiểm tra mà không biến nó thành giám sát

Gousopoulos rút ra hệ quả trực tiếp. Nếu AI có thể tạo ra sản phẩm, thì sản phẩm không thể là bài đánh giá, nên việc đánh giá chuyển sang bản đặc tả, lý luận kiểm chứng và cách diễn giải. Cấu trúc về quyền tác giả của mô hình ông đề xuất có bốn khía cạnh, đặc tả, mô hình khái niệm, kiểm chứng và diễn giải, ở bốn mức có thứ tự từ ủy thác đến tự tác giả. Mức tự tác giả đòi hỏi một bản đặc tả kiểm chứng được trước prompt đầu tiên, việc bác bỏ đầu ra trên căn cứ chuyên ngành kèm lý do đã nêu, và cách diễn giải vượt ra ngoài báo cáo của chính sản phẩm về bản thân nó.

Rubric dựa vào những tài liệu mà một nhiệm vụ xây dựng vốn đã tạo ra, nên cùng một công cụ vừa là [[formative-assessment|đánh giá định hình]] vừa là một thước đo nghiên cứu. Điều đó trả lời nỗi lo về việc làm thừa: bạn chấm một sản phẩm phụ của một bài tập bạn vốn đã giao. Hai giới hạn cần đặt bên cạnh. Không có nghiên cứu nào trong 14 trường hợp ưu tiên của Wei và Shang đo đồng thời thành công của kiểm chứng và quyết định dựa vào tiếp sau, và ít nghiên cứu theo dõi hiệu suất tức thời bằng việc ghi nhớ hay [[transfer-of-learning|sự chuyển giao]] sau đó, nên rubric dựa trên một bản đồ phân tích chứ không phải một chuỗi nhân quả đã được kiểm chứng.

Ba quyết định giữ cho việc này không trở thành giám sát. Hãy chấm bước kiểm tra đối chiếu với chất lượng đã được phân xử chứ không phải nỗ lực, nếu không bạn tạo ra động cơ diễn kịch kiểm tra. Hãy nêu rõ nguồn gốc, như Venetsanos yêu cầu: sinh viên cần biết phần nào của phản hồi họ nhận được đã được máy kiểm chứng, phần nào được phán xét bằng đánh giá, và rằng phán đoán của con người có tính ưu tiên, vì họ không thể cân nhắc một phản hồi mà họ không biết đặt nó vào đâu. Và hãy giữ việc cưỡng chế ngoài các công cụ phát hiện. [[bassett-ai-detectors-education-2026|Bassett và cộng sự (2026)]] lập luận rằng [[ai-detection|phát hiện AI]] hoàn toàn không nên được dùng trong giáo dục: các ước lượng của nó mang tính xác suất và không thể được kiểm chứng độc lập vì nguồn gốc văn bản trong thế giới thực là không rõ, điểm số của nó không đạt chuẩn cân bằng xác suất mà các cuộc điều tra liêm chính yêu cầu, và sự phân đôi người với AI là vô nghĩa với những công việc được tạo ra cùng AI chứ không phải bởi AI. Kết luận của họ là việc phát hiện 'không bảo vệ liêm chính học thuật; nó làm xói mòn liêm chính học thuật'. Các chế độ giám sát nuôi dưỡng sự nghi ngờ và bào mòn [[trust|niềm tin]] của sinh viên. Hãy giữ tách biệt hai nghĩa của việc phát hiện. Phát hiện văn bản do AI tạo không có vai trò chứng cứ nào biện hộ được ở đây; dạy sinh viên phát hiện lỗi trong đầu ra của AI mới là toàn bộ bài tập.

Sự tách biệt này mang tính kiến trúc, và đáng để nói cho sinh viên biết. [[vetting-dual-llm-safety-education|Li, Zhang và Botelho (2026)]] kiểm tra đầu ra bằng một mô hình thứ hai thay vì nhúng bước kiểm tra vào chính bộ tạo. Một sinh viên hiểu vì sao sẽ hiểu vì sao 'công cụ nói nó đúng' không phải là một lập luận kiểm chứng.

## Nếu bạn đang thiết kế khóa học chứ không phải đang dạy nó

Ba phát hiện ở trên thuộc về khâu xây dựng khóa học, nơi một giảng viên làm việc một mình sẽ không tự với tới.

Thứ nhất là một công cụ chẩn đoán. Hãy chạy một nhiệm vụ có lỗi gieo sẵn: hai mươi mục, tám mục có một lỗi ở mức chuyên ngành. Nó cho bạn biết liệu sinh viên có phân biệt được gì hay không, trước khi bạn dành cả học kỳ dạy một tiêu chí mà họ không dùng được. Một lớp bỏ sót các lỗi gieo sẵn cần được ôn lại nội dung, bất kể đề cương nói gì về việc sử dụng có phê phán.

Thứ hai là vị trí đặt cảnh báo. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings và Park (2026)]] cho thấy một thông điệp cảnh báo chung đặt ngay trước hai nhiệm vụ với 100 sinh viên ở Mỹ, 40 người bản xứ và 60 người học tiếng Anh như ngoại ngữ. Những sinh viên được 'tiêm chủng' có xác suất kiểm chứng nhiệm vụ tóm tắt nguồn học thuật cao hơn đáng kể (M = 0.34 so với 0.18), trong khi ý định kiểm chứng tự báo cáo không thay đổi. Hiệu ứng còn phụ thuộc vào nhiệm vụ: nó xuất hiện với nhiệm vụ tóm tắt nguồn nhưng không đồng đều với một bài kiểm tra toán về lũy thừa và phép nhân số lớn. Hãy đặt cảnh báo ở điểm sử dụng, theo từng loại nhiệm vụ, thay vì một lần trong đề cương hay mô-đun định hướng.

Thứ ba là việc lên lịch. Một đề cương để việc kiểm chứng không có lịch là nói rằng nó tùy chọn, và áp lực thời gian là một lý do được ghi nhận khiến sinh viên bỏ qua các bước kiểm tra. Việc kiểm chứng nằm bên trong nhiệm vụ, có một sản phẩm được chấm gắn kèm, sẽ xảy ra. Việc kiểm chứng nằm trong một đoạn chính sách thì không.

## Nếu bạn là sinh viên đang đọc trang này

Bốn động tác bao quát phần lớn những gì nghiên cứu đòi hỏi ở bạn.

Viết kỳ vọng của bạn trước khi bạn prompt. Một câu về điều câu trả lời nên là gì, rồi so đầu ra với nó.

Mở nguồn ra. Đọc danh sách tác giả, nơi công bố và năm đối chiếu với bản ghi, vì trường tác giả là nơi tài liệu tham khảo do máy tạo sai thường xuyên nhất.

Với bất cứ thứ gì mang tính diễn giải, hãy viết lý do bằng lời của chính bạn. Một lý do bịa lộ ra rõ như một trích dẫn bịa.

Đừng tin vào cảm giác rằng văn xuôi đọc trôi chảy. Những người mới được yêu cầu giải thích mã do LLM tạo chỉ thành công ở khoảng một phần ba số nhiệm vụ, và một nghiên cứu thực địa về các cuộc trò chuyện làm bài kiểm tra giữa sinh viên và ChatGPT phát hiện rằng làm theo hướng dẫn đúng vẫn có thể tạo ra một câu trả lời sai. Thứ bạn kiểm tra được hẹp hơn thứ bạn đọc được.

## Giảng viên hiểu sai gì về điều này

**'Tôi đã bảo họ kiểm tra nguồn rồi.'** Một lời cảnh báo yêu cầu một thói quen. Sinh viên cẩn thận có thói quen đó, người vội thì không, và trong câu đó không có gì để một sinh viên hành động lúc 11 giờ đêm với một đầu ra đọc rất trôi chảy trên màn hình.

**'Một dòng rubric về việc kiểm tra nguồn là đủ.'** Dòng đó nằm ở bước khởi phát và không nói gì về chất lượng quá trình hay về thành công. Một sinh viên chạy một lần tìm kiếm rồi bỏ cuộc được điểm như một sinh viên đã giải quyết được câu hỏi, nên rubric thưởng cho cử chỉ chứ không thưởng cho kết quả.

**'Nếu họ đọc cẩn thận, họ sẽ bắt được lỗi.'** Sự trôi chảy chi phối phán đoán. Tài liệu đã được kiểm toán cho thấy người mới chỉ đạt khoảng một phần ba thành công khi giải thích mã do máy tạo, và nghiên cứu thực địa ghi lại một câu trả lời sai đến từ việc làm theo hướng dẫn đúng.

**'Sinh viên nói họ sẽ kiểm chứng thì sẽ kiểm chứng.'** Trong nghiên cứu của Vu, Cummings và Park, ý định tự báo cáo không thay đổi trong khi hành vi thực tế có thay đổi (M = 0.34 so với 0.18). Hãy chấm hành vi, thứ đã thay đổi.

**'Sinh viên bỏ qua bước kiểm tra là những người không quan tâm.'** [[trust-calibration-chatbots-design-problem-2026|Jaidka và Cai (2026)]] đặt khả năng kiểm chứng chéo với động cơ kiểm chứng, và các nhóm này cần những cách khắc phục khác nhau. Sinh viên có khả năng cao, động cơ thấp dễ rơi vào sự tin tưởng thái quá tự mãn. Sinh viên có khả năng thấp, động cơ thấp là người phơi nhiễm nhất. Hai sinh viên cùng trượt một bước kiểm tra có thể cần cách dạy trái ngược nhau, và [[prior-knowledge|kiến thức tiền đề]] quyết định bạn đang nhìn vào trường hợp nào.

**'Thêm cảnh báo sẽ sửa được những sinh viên không phân biệt nổi.'** Cảnh báo làm dịch chuyển tiêu chí. Chúng không nâng độ nhạy, và độ nhạy là thứ phân biệt một sinh viên nhận ra được lỗi với một sinh viên không nhận ra được.

**'Một công cụ phát hiện sẽ củng cố chính sách.'** Theo bằng chứng ở trên, điểm của công cụ phát hiện không đạt chuẩn mà một vụ việc liêm chính yêu cầu, sự phân đôi người với AI không đứng vững với công việc được làm cùng AI, và chế độ đó lấy đi của bạn [[trust|niềm tin]] mà bạn cần để sinh viên khai báo bất cứ điều gì.

## Những gì sẽ quay lại với bạn

**'Họ chỉ cần làm cho có điểm.'** Đúng một phần, nên hãy chấm những tài liệu mà AI không thể tạo ra thay cho sinh viên. Một bản đặc tả viết trước prompt đầu tiên, một dự đoán được ghi lại trước khi sản phẩm chạy, một danh sách nguồn được kiểm tra đối chiếu với bản ghi, một lý do chuyên ngành đã nêu cho việc bác bỏ: mỗi thứ đòi hỏi sinh viên giữ một lập trường mà bộ tạo không thể cung cấp. Một lý do bịa lộ ra rõ như một trích dẫn bịa. Ở nơi sinh viên không có tri thức chuyên ngành để đối chiếu, việc kiểm chứng là diễn kịch và không rubric nào cứu được, đó là một lập luận cho việc dạy nội dung trước.

**'Đề cương không có thời gian cho việc này.'** Cảnh báo trước là một thông điệp trước nhiệm vụ. Nhiệm vụ có lỗi gieo sẵn dùng lại một bài kiểm tra bạn vốn đã cho. Rubric đi kèm những tài liệu mà nhiệm vụ vốn đã tạo ra, nên nó tốn thời gian chấm cho bằng chứng mà nếu không bạn sẽ thiếu. Phương án thay thế tốn hơn: những bài nộp chưa kiểm chứng, tài liệu tham khảo bịa, và những cuộc trò chuyện về liêm chính tiếp theo sau đó.

**'Công cụ thường đúng.'** Vậy thì bước kiểm tra rẻ, và các ngoại lệ chính là điểm mấu chốt. Trường tác giả sai thường xuyên hơn bất kỳ phần nào khác của một tài liệu tham khảo do máy tạo, 17 trong 30 mục bịa ghép một tiêu đề có thật với tác giả, nơi công bố hoặc năm sai, và 17 mục xuất hiện trong kỷ yếu của một năm duy nhất. Độ chính xác ở những phần bạn tình cờ để ý không nói gì về những phần bạn không để ý.

**'Sinh viên của tôi không biết đủ để phán xét đầu ra.'** Đó là ngưỡng độ nhạy, và nó có thật. Gousopoulos dự đoán việc dạy kiểm chứng thất bại dưới một mức sàn tri thức chuyên ngành, và ghi nhận rằng một số ngành cung cấp một tiêu chí bên ngoài, trong đó có vật lý, hóa học, sinh thái học và dịch tễ học, còn lịch sử, văn học và [[ethics|đạo đức học]] phần lớn thì không. Hãy dạy chuyên ngành và gắn bước kiểm tra vào đó, hoặc hãy chấp nhận rằng bước kiểm tra sẽ thành một nghi thức.

**'Đây là giám sát.'** Đúng, nếu bạn chấm nỗ lực hoặc theo dõi cách sinh viên làm việc. Hãy chấm sản phẩm đối chiếu với đáp án, nêu rõ phần phản hồi nào được máy kiểm tra và phần nào được một người phán xét, và để công cụ phát hiện ra ngoài.

## Việc cần làm trong tuần này

**1.** Viết hai mô tả cho bài tập tiếp theo của bạn: một đầu ra đúng, và một đầu ra sai nhưng nghe hợp lý. Đó là đáp án mà bước kiểm tra đối chiếu với.

**2.** Thêm dòng dự đoán. Một câu, viết trước khi mở công cụ, được so sánh sau đó trên căn cứ chuyên ngành.

**3.** Thay 'hãy kiểm tra nguồn của bạn' bằng 'hãy mở bản ghi và xác nhận tác giả, nơi công bố và năm'.

**4.** Đưa tám lỗi gieo sẵn vào một bài kiểm tra bạn vốn đã cho, và xem sinh viên nào tìm ra chúng.

**5.** Chấm một sản phẩm kiểm chứng đối chiếu với đáp án, và nói cho sinh viên biết phần nào của bước kiểm tra đã thất bại: chuẩn, quá trình, hay quyết định.

## Đi tiếp từ đây

[[incorporating-ai-literacy|Lồng ghép năng lực AI vào khóa học]] bao quát cách xây dựng sự hiểu biết mà trang này đưa vào sử dụng, và [[ai-literacy-evidence|bằng chứng về năng lực AI]] bao quát công việc đó đáng giá bao nhiêu. [[reducing-over-reliance|Giảm phụ thuộc quá mức]] xử lý phía thiết kế với những sinh viên dựa vào công cụ, [[study-with-ai|học cùng AI]] là trang đồng hành hướng tới sinh viên, và [[asynchronous-online-courses-ai|khóa học trực tuyến không đồng bộ với AI]] bao quát phiên bản của vấn đề này khi không có buổi học nào để lên lịch bước kiểm tra vào. Về phản hồi mà sinh viên đang kiểm tra, xem [[ai-feedback-quality|chất lượng phản hồi của AI]] và [[hallucination-risk|rủi ro ảo tưởng]].
