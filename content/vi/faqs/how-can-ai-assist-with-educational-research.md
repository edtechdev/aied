---
title: "AI có thể hỗ trợ nghiên cứu giáo dục như thế nào?"
created: "2026-10-05T11:23:36-04:00"
weight: 72
type: faq
connected_faqs: [evaluating-ai-interventions-methods, reporting-interpreting-aied-research, research-gaps-aied, equity-ethics-pedagogical-safety-research]
foundations: [academic-integrity, ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, ai-assisted-educational-research]
assessment: [assessment-validity, educational-measurement]
ethics: [ai-use-disclosure, hallucination-risk, privacy]
research_method: [literature review]
audience: [researchers, instructors]
level: [higher ed]
page_kind: [evaluation]
confidence: medium
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/how-can-ai-assist-with-educational-research
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

Đồng tác giả của bạn muốn có một đoạn trong phần phương pháp về những công cụ AI mà nhóm đã dùng. Hoặc chồng tài liệu cần sàng lọc dài hơn hạn chót cho phép. Hoặc một người phản biện đã hỏi, một cách lịch sự, rằng liệu có người nào đọc bản gỡ băng không, và bạn không chắc câu trả lời trung thực là gì.

Câu trả lời ngắn cho cuộc họp đó: AI có thể đảm nhận việc tìm kiếm, một lượt sàng lọc đầu tiên, việc phân loại sơ bộ khi mã hóa, và việc soạn thảo, và nó không thể gánh trách nhiệm cho những gì dự án kết luận. Hãy quyết định nhiệm vụ nào mở cho nó trước khi dự án bắt đầu, thẩm định đầu ra theo một chuẩn của con người với một người được nêu tên làm người phân xử, và ghi chép đủ để một người ngoài có thể dựng lại chuyện đã xảy ra. Hầu hết các nhóm nhận thấy số giờ dành cho thẩm định và ghi chép là phần việc được thêm vào chứ không phải được bớt đi.

## Tóm tắt

**1.** Viết ra nhiệm vụ nghiên cứu nào được dùng AI và nhiệm vụ nào không, trước khi lượt tìm kiếm đầu tiên chạy. Hãy phân loại theo mức rủi ro chứ không theo công cụ.

**2.** Đặt tự động hóa vào khâu sàng lọc. Giữ việc trích xuất dữ liệu, đối chiếu và tổng hợp ở phía con người.

**3.** Chốt bộ mã và rubric trước khi một lượt tự động chạm vào dữ liệu.

**4.** Quyết định thẩm định nghĩa là gì và ai ký nhận. Sự đồng thuận giữa một mô hình và một người mã hóa là một phép đo tương đồng, không phải một kết quả về chất lượng.

**5.** Thẩm định từng tài liệu tham khảo bằng tay, kiểm tra tác giả trước, mỗi khi AI có chạm vào phần viết.

**6.** Ghi lại prompt, phiên bản mô hình và phiên bản kho ngữ liệu, và dự trù số giờ cho việc đó.

## Quyết định AI được chạm vào đâu trước khi dự án bắt đầu

Quyết định về phạm vi thuộc về tệp dự án chứ không thuộc về trí nhớ của ai đó. Trong [[dai-chan-responsible-genai-research-ai-literacy-2026|nghiên cứu nhóm tập trung của Dai và Chan (2026)]], những nhà nghiên cứu đã suy nghĩ về việc này hiệu chỉnh mức sử dụng theo rủi ro và vị trí trí tuệ trung tâm: dùng nhiều hơn ở những việc thủ tục rủi ro thấp, thận trọng ở nơi đóng góp học thuật là trung tâm. 27 trong số 28 nhà nghiên cứu sau đại học trong nghiên cứu đó đã dùng GenAI ở đâu đó trong quy trình làm việc, gồm cả viết học thuật và dịch, nên với hầu hết các nhóm, câu hỏi là ranh giới nằm ở đâu chứ không phải có ranh giới hay không.

Hãy viết ranh giới đó thành một danh sách kèm phán quyết cho từng nhiệm vụ: tìm kiếm tài liệu, sàng lọc tóm tắt, trích xuất, mã hóa định tính, phân tích thống kê, soạn thảo, định dạng tài liệu tham khảo. Hãy đọc nghiên cứu đó như một bản đồ những gì các nhà nghiên cứu báo cáo là họ đã làm. Đó là một bản ghi từ nhóm tập trung, không phải một kết quả về hiệu quả.

## Đặt tự động hóa ở khâu sàng lọc và giữ tổng hợp trong nhóm

Tổng quan hệ thống là nơi tự động hóa đã tiến xa nhất. Các công cụ như ASReview, SWIFT-Review, Covidence, AIScreenR và MetaMate cắt giảm gánh nặng thủ tục chủ yếu ở khâu sàng lọc tóm tắt, trong khi việc trích xuất dữ liệu, đối chiếu và tổng hợp vẫn thuộc về những người phản biện là con người trong nhóm duy nhất đã báo cáo quy trình của mình ([[scaffolding-systematic-reviews-2026|Wang và cộng sự, 2026]]).

Phần lớn lợi ích đến từ hai quyết định thiết kế. Hãy viết quy tắc quyết định cho những trường hợp vùng xám trước khi bắt đầu sàng lọc, và giữ một hạng mục “có thể” cùng một nhật ký phân xử chung để cùng một loại bản ghi nhận cùng một phán đoán. Không có nhật ký đó, quy tắc của người phản biện thứ hai và quy tắc của người thứ nhất sẽ phân kỳ một cách âm thầm, và danh sách loại trừ không còn tái lập được.

## Chốt bộ mã trước khi mô hình đọc bất cứ thứ gì

[[qualitative-research|Phân tích định tính]] là giai đoạn mà việc diễn giải chính là sản phẩm. Các cấu trúc, rubric mã hóa và dữ liệu huấn luyện là những quyết định của con người chứ không phải đầu ra của mô hình ([[ai-methodologies-science-education-research-2026|Martin và cộng sự, 2026]]), nghĩa là bộ mã phải được chốt trước khi một lượt tự động chạy trên kho ngữ liệu. Lựa chọn thay thế là một sơ đồ mã hóa được viết quanh những gì mô hình tình cờ làm nổi lên, và khi đó các chủ đề mô tả cách đọc dữ liệu của công cụ chứ không phải của bạn.

Việc ủy thác có thể chi tiết hơn nhiều so với kiểu được ăn cả, mất cả. [[agreement-not-quality-llm-coding-verification|Một nghiên cứu thẩm định mù]] phân loại 15 trong 72 mục của bộ mã là thực sự cần chuyên môn của con người, 12 mục phù hợp hơn với một mô hình, và 16 mục phù hợp với việc phân loại dựa trên độ tin cậy. Hãy phân loại các mục của bạn theo cách đó và khoản tiết kiệm công sức sẽ rơi vào nơi an toàn.

## Quyết định thẩm định nghĩa là gì và ai ký nhận

Sự đồng thuận cao giữa một mô hình và một người mã hóa thường được báo cáo như thể nó đã xác lập tính đúng đắn. Không phải vậy. [[agreement-not-quality-llm-coding-verification|Liu và cộng sự (2026)]] cho một chuyên gia độc lập đánh giá 855 bộ mã theo cặp mà không biết nguồn. Sự đồng thuận giữa người và LLM (Jaccard trung bình 0,30) thấp hơn rõ rệt so với đồng thuận giữa người với người (0,52), vậy mà người thẩm định mù lại ưu tiên cách mã hóa của người và của máy ở mức tỉ lệ mà nó không phân biệt được (51,5% so với 48,5%, p = 0,537). Trong một số trường hợp, sự đồng thuận giữa người với người mã hóa một thiên lệch chung mà người thẩm định từ chối để ủng hộ mô hình.

Vì thế bước thẩm định cần một chuẩn vàng không phải là đầu ra của mô hình cũng không phải sự đồng thuận của người mã hóa với đầu ra đó, cộng với một người được nêu tên đã phân xử các bất đồng. Hãy báo cáo cả hai. Một thống kê tương đồng mô tả hai cách đọc khớp nhau đến mức nào, và nó không nói gì về việc một trong hai cách đọc có đúng hay không.

## Tìm nhanh, rồi tự kiểm tra từng nguồn

Tìm kiếm tạo sinh thì tóm tắt, gợi ý, tổng hợp và trò chuyện, điều này làm lung lay cách sắp xếp cũ trong đó hệ thống định vị còn người đọc diễn giải ([[genai-academic-search-workshop|hội thảo về tìm kiếm học thuật với GenAI]]). Hãy coi nó như một công cụ khám phá. Báo cáo hội thảo mang hai lưu ý: năng lực không đồng đều, với các học giả được trích dẫn nhiều được dựng lại với tỉ lệ khoảng gấp đôi so với đồng nghiệp ít được trích dẫn, và một thủ thư mô tả khoảng cách niềm tin trong đó sinh viên tin tìm kiếm tạo sinh quá mức còn giảng viên thì không tin nó.

Thẩm định tài liệu tham khảo là nơi điều này trở thành không thể thương lượng, và các thất bại tập trung ở trường tác giả, trường mang công lao. [[citation-errors-hallucinations-computing-education-2026|Denny và cộng sự (2026)]] kiểm toán 723.930 công bố và 15.872.533 tài liệu tham khảo và xác minh 30 tài liệu tham khảo bịa trên 14 bài báo giáo dục máy tính, tất cả từ 2025 và 2026. 17 trong 30 là dạng lai: một tiêu đề thật gắn với tác giả bịa hoặc sai. Số lượng được xác minh tại một hội nghị chuyên ngành tăng từ 3 năm 2025 lên 17 năm 2026, tức trong 2,3% các bài trong kỷ yếu năm đó. Tổng số của họ là một giới hạn dưới có chủ đích, và các công cụ kiểm tra tự động thừa hưởng những khiếm khuyết của siêu dữ liệu mà chúng coi là chuẩn vàng. Hãy kiểm tra tác giả trước.

## Coi điểm số tự động là một giả thuyết cần kiểm định

Các hàm đo lường tự động có thể trông chính xác và có khả năng dự báo trong khi vẫn mờ đục. [[ai-methodologies-science-education-research-2026|Martin và cộng sự]] đặt điều này trong khuôn khổ vấn đề đo lường nomic của Chang: đo một đại lượng đòi hỏi một định luật liên hệ nó với một thứ quan sát được, và định luật đó không thể kiểm định nếu chưa biết đại lượng. Các hàm đo lường do AI tạo ra nảy sinh từ dữ liệu huấn luyện và tối ưu hóa chứ không từ nhà nghiên cứu, nên công việc về khả năng giải thích là quan trọng để cho thấy một mô hình có theo dõi sự hiểu ngữ nghĩa hay chỉ theo dõi từ khóa.

Thất bại thì cụ thể. Trong [[zhang-platform-scores-miss-ai-teaching-agents-2026|một đánh giá tám tác tử giảng dạy AI]], tác tử được điểm của chính nền tảng xếp thứ ba lại xếp cuối trên một rubric đã được chuyên gia thẩm định. Bất đồng giữa người và máy mang tính hệ thống chứ không ngẫu nhiên, và việc cụ thể hóa rubric thường quan trọng hơn tay nghề viết prompt ([[machines-misread-pedagogical-quality|Tseng và cộng sự, 2026]]). Trước khi một điểm số tự động trở thành công cụ đo của bạn, hãy thẩm định nó với một phép đo gắn với năng lực bạn định nghiên cứu. Về chính các phép đo, xem [[evaluating-ai-interventions-methods|phương pháp đánh giá các can thiệp AI]].

## Viết phần phương pháp để người ngoài có thể kiểm toán

Việc áp dụng đã chạy trước việc báo cáo. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta và Lin (2026)]] phân tích 888 bài về tự động hóa tổng quan: từ 2023, 38,0% các bài về phần mềm và sản phẩm không báo cáo đánh giá nào cả, so với 9,3% ở các bài về LLM, và quyền truy cập mô hình áp đảo là độc quyền (84,1%). Một đánh giá tổng thể thuận lợi cũng không hàm ý phù hợp để ủy thác, vì 52% trong 118 bài về LLM chỉ báo cáo kết quả tích cực vẫn nêu một mối lo rằng quy trình làm việc dưới chuẩn mà vai trò của nó đòi hỏi. Khung PRISMA-LLM của họ tách việc công bố cách triển khai khỏi đánh giá nhạy cảm với hệ quả, và coi năm cấp độ của nó là các bậc công bố thông tin chứ không phải các bậc rủi ro.

Phiên bản thực dụng: nêu tên hệ thống và phiên bản của nó, các prompt, phiên bản kho ngữ liệu, điều gì con người đã kiểm tra, và nó thất bại ở đâu. Hãy giữ nhật ký prompt và phản hồi, vì một danh sách chủ đề do máy tạo trông trôi chảy và hiển nhiên rất lâu trước khi công việc làm bằng chứng của nó bắt đầu ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Hãy dự trù cả số giờ. [[persistent-ai-agents-academic-research|Một nghiên cứu trường hợp 115 ngày với một nhà nghiên cứu duy nhất]] về một tác tử nghiên cứu thường trú phát hiện mẫu mạnh nhất là mở rộng năng lực chứ không phải thay thế lao động đã được chứng minh: khi bộ nhớ và các thủ tục tích lũy, phạm vi công việc được ủy thác lớn lên trong khi phần đóng góp của con người không hề thu nhỏ.

## Thực hiện nghiên cứu của người thực hành với cùng quy tắc ở quy mô nhỏ hơn

Nếu bạn là một giảng viên đang nghiên cứu khóa học của chính mình, bạn đang làm việc trong sợi mỏng nhất của kho ngữ liệu. [[ai-assisted-educational-research|Nghiên cứu giáo dục có AI hỗ trợ]] nêu điều này như một khoảng trống chứ không phải một phát hiện: nghiên cứu của người thực hành có AI hỗ trợ có khả năng phổ biến rộng và gần như không được ghi chép, và bằng chứng về tự động hóa tổng quan cùng trắc lượng thư mục không giải quyết được việc một giảng viên nên nghiên cứu việc dạy của chính mình như thế nào.

Điều chuyển được sang là một tập hợp các khuynh hướng:

Hãy dùng AI ở nơi bối cảnh địa phương của bạn không phải là biến số. Tìm kiếm tài liệu của ngành bạn, gỡ băng và tóm tắt các bản ghi của chính bạn, và soạn công cụ đo hoặc ngôn ngữ đồng thuận đều thuộc nhóm này.

Hãy giữ các động tác diễn giải. Điều gì được tính là một chủ đề, bình luận của một sinh viên nghĩa là gì, và bằng chứng trong lớp của bạn biện minh cho điều gì là việc của bạn, và bài viết phải nói rõ động tác nào do mô hình thực hiện và động tác nào do bạn thực hiện ([[chain-behind-claim-warrantability-2026|Holster, 2026]]).

Hãy định trước các tiêu chí và giữ chúng hiển thị. Một nghiên cứu nhỏ tại chỗ không thể sửa được nếu một cấu trúc được định nghĩa sau khi dữ liệu đã đến.

Hãy báo cáo vai trò của AI, việc thẩm định bạn đã làm, và những giới hạn của một thiết kế chỉ có một khóa học và một nhà nghiên cứu. Một bản ghi quy trình không phải một kết quả về hiệu quả.

Hãy coi việc mô phỏng một nhóm người học là một lựa chọn nâng cao chứ không phải mặc định. Người học được mô phỏng có xu hướng chỉ bao phủ góc phần tư dễ nhất của hành vi sinh viên thật và hiếm khi được thẩm định sau khi dùng ([[simulating-students|mô phỏng sinh viên]]). Hãy đọc [[making-simulated-students-behave-like-learners|làm cho sinh viên mô phỏng hành xử như người học]] trước khi bạn tin vào phán quyết của một bộ mô phỏng.

## Nhà nghiên cứu hiểu sai gì về điều này

Đồng thuận với một người mã hóa nghĩa là cách mã hóa đúng. Đồng thuận giữa người và LLM trong nghiên cứu mù là 0,30 Jaccard so với 0,52 giữa người với người, và người thẩm định mù không phân biệt được hai nguồn mã hóa ở mức 51,5% so với 48,5%. Đồng thuận ghi lại rằng hai người đọc đã hội tụ, kể cả khi họ hội tụ vào cùng một thiên lệch.

Một công cụ kiểm tra tài liệu tham khảo thay thế được việc kiểm tra tài liệu tham khảo. 30 tài liệu tham khảo bịa trong kiểm toán của Denny gồm 17 trường hợp lai, nơi tiêu đề là thật còn tác giả thì không, đúng là trường hợp mà một công cụ kiểm tra được huấn luyện trên siêu dữ liệu xử lý kém nhất, vì chính siêu dữ liệu là thứ sai.

Một đánh giá thuận lợi khiến một quy trình phù hợp với vai trò của bạn. Trong 118 bài về LLM chỉ báo cáo kết quả tích cực, 52% vẫn nêu một mối lo rằng quy trình làm việc dưới chuẩn mà vai trò của nó đòi hỏi. Hãy đọc độ sâu của đánh giá so với công việc bạn giao cho nó.

Tay nghề viết prompt là đòn bẩy chính về chất lượng. Việc cụ thể hóa rubric thường quan trọng hơn tay nghề viết prompt trong sự đồng thuận giữa người và máy, và đánh giá tám tác tử xếp cùng một hệ thống ở vị trí thứ ba và vị trí cuối tùy theo rubric của ai được áp dụng.

AI lấy bớt công việc khỏi dự án. Nghiên cứu trường hợp 115 ngày phát hiện phạm vi được ủy thác lớn lên khi bộ nhớ của tác tử tích lũy. Thẩm định, phân xử và ghi chép là những giờ tăng theo đó.

## Những gì sẽ quay lại với bạn

**“Đồng tác giả của tôi vốn đã làm thế này và chưa ai phàn nàn.”** Không ai phàn nàn không phải một phát hiện về tính hợp lệ. Câu hỏi về công bố thông tin tách biệt với câu hỏi về chất lượng, và con số 38,0% cho các bài về phần mềm không được đánh giá cho thấy sự im lặng của ngành là phổ biến.

**“Hai mô hình đồng ý với nhau, nên cách mã hóa đã ổn.”** Hai mô hình chia sẻ dữ liệu huấn luyện thì chia sẻ cả lỗi của chúng. Người thẩm định mù trong nghiên cứu của Liu ưu tiên cách mã hóa của máy ở mức 48,5%, và điều khiến con số đó diễn giải được là một giám khảo độc lập, không phải bản thân sự đồng thuận.

**“Chúng tôi không thể kiểm toán một mô hình độc quyền, nên không có gì để báo cáo.”** PRISMA-LLM yêu cầu công bố cách triển khai như một bậc tách biệt với độ sâu đánh giá. Hệ thống, phiên bản, prompt, điều con người đã kiểm tra, và nơi nó thất bại đều có thể báo cáo được với một mô hình đóng.

**“Hội đồng đạo đức sẽ không bao giờ chấp thuận việc này.”** Quyền truy cập mô hình là độc quyền ở 84,1% các bài được xem xét, nghĩa là văn bản của sinh viên thường rời khỏi tổ chức của bạn. Hãy chỉ thu thập những gì mục đích giáo dục cần, kiểm tra xem dữ liệu người học có huấn luyện mô hình của nhà cung cấp hay không, và ưu tiên dữ liệu cục bộ hoặc dữ liệu tổng hợp ở nơi độ nhạy cảm cao. [[equity-ethics-pedagogical-safety-research|công bằng, đạo đức và an toàn sư phạm trong nghiên cứu]] bao quát đầy đủ các nghĩa vụ này.

**“Việc này sẽ chậm hơn làm bằng tay.”** Với một dự án nhỏ thì thường đúng là vậy. Lập luận ủng hộ nó dựa trên phạm vi ở quy mô lớn, và lập luận chống lại việc nói quá nó cũng dựa trên chính bản ghi 115 ngày đó.

## Việc cần làm trong tuần này

**1.** Viết danh sách nhiệm vụ kèm một phán quyết bên cạnh từng mục, và đặt nó ở nơi cả nhóm nhìn thấy.

**2.** Thêm các quy tắc quyết định cho vùng xám và nhật ký phân xử vào quy trình sàng lọc của bạn trước khi lô tiếp theo bắt đầu.

**3.** Chọn một đầu ra tự động bạn vốn đã dựa vào và thẩm định nó với phán đoán của con người trên một mẫu bạn chưa từng xem.

**4.** Đọc lại bản thảo cuối cùng bạn đã nộp và kiểm tra từng tên tác giả trong danh sách tài liệu tham khảo bằng tay.

**5.** Thêm một dòng “AI đã thất bại ở đâu” vào mẫu phương pháp của bạn, để thói quen công bố thông tin được viết ra một lần.

## Đi tiếp từ đây

Các câu hỏi đi kèm là [[evaluating-ai-interventions-methods|cách đo một can thiệp]], [[reporting-interpreting-aied-research|báo cáo về hệ thống và về việc dùng AI của chính bạn]], và [[research-gaps-aied|những nơi tài liệu còn mỏng]]. [[equity-ethics-pedagogical-safety-research|công bằng, đạo đức và an toàn sư phạm trong nghiên cứu]] bao quát dữ liệu sinh viên, và [[ai-assisted-educational-research|nghiên cứu giáo dục có AI hỗ trợ]] là trang khái niệm đầy đủ đứng sau trang này.
