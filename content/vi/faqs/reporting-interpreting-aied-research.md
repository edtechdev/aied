---
title: "Thực hành tốt nhất để báo cáo và diễn giải nghiên cứu về AI trong giáo dục là gì?"
created: "2026-09-16T15:05:00-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/reporting-interpreting-aied-research
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

Bản nháp của bạn có một con số nổi bật trong phần tóm tắt, và người bình duyệt vừa hỏi nhóm đối chứng thực sự đã làm gì. Hoặc bạn là người bình duyệt, đang cầm một phân tích tổng hợp có hiệu ứng gộp 0.67 và phần phương pháp dài một trang rưỡi. Hoặc khoa của bạn đang viết hướng dẫn về cách nhân viên nên báo cáo các nghiên cứu AI và muốn điều gì đó cụ thể hơn “tuân theo các chuẩn mực”.

Sáu thiếu sót quyết định phần lớn những trường hợp này: dùng hệ thống AI nào, nó được cấu hình để làm gì, nó đóng vai trò sư phạm nào, con người có thiết kế hay xem xét đầu ra của nó không, thước đo kết quả thực sự nắm bắt điều gì, và các tác giả đã làm gì với thiên lệch, chi phí và hạn chế. “Không thể đánh giá” là phán quyết trung thực khi thiếu những thứ đó, và nó khác với phán quyết “bị bác bỏ”.

## Tóm tắt

**1.** Mô tả AI như một can thiệp, không phải một nhà cung cấp. Mô hình, phiên bản, cấu hình, prompt, vai trò, và ai thiết kế hoặc xem xét đầu ra.

**2.** Nêu lý lẽ sư phạm và phép so sánh chủ động. Tên sản phẩm không phải phương pháp, và cách dạy như cũ không phải đối chứng công bằng.

**3.** Làm cho thước đo khớp với tuyên bố, kể cả việc kết quả có được đo trễ và không có trợ giúp hay không.

**4.** Báo cáo độ bất định mà phân tích thực sự có: hiệu ứng phụ thuộc, phương sai giữa các nghiên cứu, khoảng dự báo, kích thước nhóm con, thiên lệch công bố.

**5.** Kiểm chứng mọi phán đoán tự động, với một chuẩn vàng được nêu tên và một người phân xử được nêu tên.

**6.** Báo cáo các đối trọng: quản trị, chi phí tính toán, việc dùng AI của chính bạn, kết quả rỗng, và chỉ những trích dẫn bạn đã kiểm tra.

## Mô tả AI như một can thiệp mà người khác có thể tái tạo

Đây là phép kiểm mà phần lớn bài nộp trượt. Khung RAISE (*Reporting AI Studies in Education*, Allison 2026) là một danh mục kiểm 30 mục trải mười lĩnh vực chuyên đề, và tuyên bố chẩn đoán của nó rất cụ thể: bài nộp thường bỏ qua việc dùng mô hình nào, nó được cấu hình thế nào, nó đóng vai trò gì, và liệu con người có thiết kế hay xem xét đầu ra của nó không. Người bình duyệt khi đó còn lại với bốn câu hỏi không trả lời được. AI chính xác đang làm gì? Nó có cần thiết không? Điều này có tái lập được không? Các tuyên bố về học tập có đáng tin không?

RAISE đi từ biện minh giáo dục qua đặc tả ở mức API, tương tác người học-AI, khả năng tiếp cận và phù hợp văn hóa, người tham gia và bối cảnh, sự tham gia của con người, thiết kế, đạo đức, minh bạch và khả năng tái lập, đến các hạn chế. Ma trận Đạo đức và Rủi ro đi kèm của nó bao phủ rủi ro đối với [[agency|tính tự chủ]] của người học, [[equity-in-ai-education|công bằng]], [[governance|quản trị]] dữ liệu và tính minh bạch thuật toán. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah và Gašević (2026)]] đưa ra một lựa chọn tinh gọn hơn. TEP-AIED gộp Minh bạch, Đạo đức và Sư phạm thành một cấu trúc phụ thuộc lẫn nhau, cung cấp một bảng hướng dẫn ánh xạ vào bảy phần của bài báo, và yêu cầu tác giả thêm một tiểu mục Phương pháp mang tiêu đề “Transparency, Ethics, and Pedagogy Considerations”. Lý do của họ là thực dụng: RAISE toàn diện và quá chi tiết để dùng thường quy trong thực nghiệm. Việc công bố nằm dưới [[ai-use-disclosure|công bố việc dùng AI]] và là thứ làm cho các tuyên bố về [[privacy|quyền riêng tư]] và [[ethics|đạo đức]] có thể kiểm chứng được.

Biện minh giáo dục đứng đầu trong RAISE vì AI không phải công cụ trung tính. Giá trị phụ thuộc vào sự căn chỉnh giữa vấn đề học tập, một lý lẽ lý thuyết, và ánh xạ từ mục tiêu sang thước đo kết quả. [[oneill-presumed-effective-meta-analysis-2026|O'Neill (2026)]] phát hiện tất cả trừ hai trong 14 phân tích tổng hợp được kiểm toán định nghĩa can thiệp như một công cụ, ChatGPT hoặc GenAI hoặc “AI” nói chung. Tên sản phẩm không phải [[pedagogy|sư phạm]]. Coi việc tiếp xúc với ChatGPT là một can thiệp chung cũng giống như phân tích tổng hợp hiệu ứng của “giấy”.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich và cộng sự (2025)]] đưa lập luận tương tự cho các nghiên cứu gốc. Kiểm toán một tập con các so sánh đằng sau một phân tích tổng hợp nổi bật, họ thấy chỉ 21% có can thiệp được định nghĩa rõ, một nhóm đối chứng và một thước đo học tập hợp lệ. Độ lớn hiệu ứng được báo cáo (g = 0.7) cũng vượt mức của các [[intelligent-tutoring|hệ gia sư thông minh]] được xây dựng chuyên biệt (0.66), và khoảng cách đó là dấu hiệu cảnh báo: một can thiệp vượt qua gia sư chuyên biệt có lẽ là một bó những thứ khác nhau mang một nhãn.

Phép thử là một câu hỏi: một người đọc có năng lực có thể tái tạo can thiệp của bạn chỉ từ phần phương pháp và nhận được cùng một thứ không?

## Quyết định thước đo cho phép bạn tuyên bố gì

Trong kiểm toán bằng chứng của O'Neill trên 46 nghiên cứu gốc được chọn ngẫu nhiên, 28 (61%) có vấn đề về hiệu lực. Lệch biến phụ thuộc là phổ biến nhất (n = 15), tiếp theo là lệch biến độc lập (n = 11), vấn đề thiết kế thực nghiệm (n = 7), vấn đề trích xuất dữ liệu (n = 6), thiếu nhóm đối chứng (n = 6) và phân nhóm không ngẫu nhiên (n = 6). Kết quả đa chiều thường được gộp như thể thay thế được cho nhau, với điểm thi, chất lượng bài tập về nhà, [[motivation|động lực]], [[self-efficacy|tự hiệu quả]], thái độ và [[student-engagement|mức độ tham gia]] bị gộp vào một con số “thành tích học tập”.

Hai thói quen báo cáo ngăn điều đó. Nêu rõ công cụ đo lường cấu trúc nào và rằng nó đã được kiểm định hiệu lực cho nhóm dân số đó; [[self-report-measures|thước đo tự báo cáo]] cho thấy nơi các thước đo dựa trên nhận thức lệch khỏi hành vi, và [[assessment-validity|hiệu lực đánh giá]] bao phủ hiệu lực cấu trúc. Rồi báo cáo một kết quả không phụ thuộc vào niềm tin của người học về sự trợ giúp. Hiệu suất nhiệm vụ tức thời khi có trợ giúp không phải [[learning-gains|mức tăng học tập]], và [[cognitive-offloading|giảm tải nhận thức]] là cơ chế phân tách hai thứ đó một cách hợp lý nhất. [[verification-quality-reliance-calibration-genai-2026|bài tổng quan ngắn 2026 trên 493 bản ghi và 14 nghiên cứu ưu tiên]] phát hiện không nghiên cứu nào đo đồng thời thành công của việc kiểm chứng và quyết định phụ thuộc tiếp theo so với một chuẩn chất lượng đầu ra được phân xử độc lập, và ít nghiên cứu nhìn xa hơn hiệu suất tức thời tới việc ghi nhớ trễ hay [[transfer-of-learning|chuyển giao]].

Nêu rõ giới hạn trong phần thảo luận. Một nghiên cứu đo bài kiểm tra ngắn được làm khi công cụ mở có thể chống đỡ tuyên bố về hiệu suất có trợ giúp. Nó không thể chống đỡ tuyên bố về điều sinh viên đã học, và câu đó chỉ tốn một dòng.

## Báo cáo độ bất định mà phân tích của bạn thực sự có

Với các tổng hợp, hãy báo cáo cách xử lý hiệu ứng phụ thuộc, phương sai giữa các nghiên cứu, khoảng dự báo và đánh giá thiên lệch công bố. Chỉ I² thì không đủ. O'Neill thấy độ không đồng nhất được báo cáo là nghiêm trọng ở mọi nơi nó được đưa ra, từ 77.2% đến 94.4% trên 13 phân tích tổng hợp với 12 trên 80%, và không bao giờ được giải quyết: không phân tích điều tiết nào đạt kích thước nhóm con tối thiểu mười nghiên cứu. Mười hai phân tích tổng hợp coi các độ lớn hiệu ứng phụ thuộc từ cùng một nghiên cứu là độc lập, điều này thổi phồng bằng chứng bề ngoài. Chỉ bốn báo cáo phương sai giữa các nghiên cứu (τ²) và chỉ hai báo cáo khoảng dự báo, và cả hai khoảng đều chứa số không. Thiên lệch công bố không được đánh giá hợp lệ ở bất kỳ đâu trong tập này.

Các con số không đồng nhất cần mô hình đi kèm, vì I² phụ thuộc độ chính xác. [[limitations-in-aied-research|Hạn chế trong nghiên cứu AIEd]] ghi lại một tổng hợp ở I² = 82.98% dưới mô hình hiệu ứng cố định và 15.75% dưới hiệu ứng ngẫu nhiên. Một người đọc chỉ được cho con số đầu tiên không thể biết tập nghiên cứu không nhất quán đến đâu. Hãy báo cáo τ² và khoảng dự báo bên cạnh, cũng là quy ước mà [[meta-analysis-systematic-review|tài liệu tổng quan]] yêu cầu.

Rồi hãy chiết khấu con số nổi bật của chính bạn. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš và cộng sự (2026)]] gộp 1,840 độ lớn hiệu ứng từ 67 phân tích tổng hợp và phát hiện rằng khi mô hình hóa thiên lệch công bố, hiệu ứng trung bình giảm còn khoảng một phần ba trung vị đã công bố (SMD = 0.196 so với 0.67), với khoảng dự báo từ -1.521 đến +1.908. Khoảng đó trải từ tác hại đáng kể đến lợi ích đáng kể cho một nghiên cứu mới giả định. Đó là con số hữu ích nhất trong bài và cũng là con số dễ bị bỏ khỏi phần tóm tắt nhất.

## Nói tuyên bố đi được bao xa

Công bằng và phạm vi thất bại theo cùng cách: một hiệu ứng lớn nhưng mang nghĩa ít hơn vẻ ngoài. Mười một trong 14 phân tích tổng hợp được kiểm toán không đặt ranh giới dân số, nên “sinh viên” trải từ trẻ em đến học viên y khoa. Một môn học, một cơ sở, một ngành hay một quốc gia không cho phép một tuyên bố tổng quát, và kết quả cho một công cụ hiếm khi chuyển sang công cụ khác.

Ba cách giải thích chiếm phần lớn các hiệu ứng lớn, và mỗi cách đều có thể báo cáo. Tính mới là một. Thêm thời gian làm bài là cách khác. Cách thứ ba là điều kiện so sánh nhận được cách dạy như cũ thay vì một đối chứng chủ động. Hãy báo cáo nhóm đối chứng thực sự đã làm gì, mỗi nhánh dành bao nhiêu thời gian, và công cụ mới đến đâu. Cũng nêu ranh giới dân số, vì hiệu ứng khác nhau giữa các nhóm người học và một ranh giới không được nêu là thứ để một con số gộp đứng thay cho tất cả; [[differential-effects-across-learner-groups|Hiệu ứng khác biệt giữa các nhóm người học]] trình bày sự biến thiên đó.

Coi công cụ là một mục tiêu di động. Các hệ thống độc quyền thay đổi không báo trước, nên một phát hiện bị ràng buộc vào một phiên bản mô hình, và [[benchmark|điểm chuẩn]] gây phấn khích ở một bản phát hành có thể không giữ được ở bản sau. Phiên bản và ngày truy cập thuộc về phần phương pháp vì lý do đó, không chỉ vì khả năng tái lập.

## Kiểm chứng các phán đoán tự động

[[ai-ed-evaluation|Đánh giá AIED]] ngày càng giao việc chấm điểm cho mô hình, điều làm cho quy trình kiểm chứng trở thành một phần của kết quả chứ không phải phụ lục. Báo cáo của Khan Academy về các chỉ số [[intelligent-tutoring|gia sư AI]] của mình nói rằng mức độ tham gia nhận thức được chấm bởi một giám khảo [[llm]] được hiệu chuẩn với các chuyên gia sư phạm là người ở F1 0.83, và các biến động chỉ số đến từ hơn 40 thực nghiệm trực tiếp trong năm tháng chứ không phải đánh giá ngoại tuyến ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi và cộng sự 2026]]). [[machines-misread-pedagogical-quality|Tseng và cộng sự (2026)]] cho thấy bất đồng giữa người và máy về chất lượng [[formative-assessment|câu hỏi tiền kiểm]] là có hệ thống chứ không ngẫu nhiên, và việc cụ thể hóa rubric quan trọng hơn kiểu prompt đặt lý lẽ lên trước.

Khớp với người mã hóa là một chuyện khác với chất lượng, và báo cáo nó như thể là chất lượng là một mục tiêu của người bình duyệt. [[agreement-not-quality-llm-coding-verification|Liu và cộng sự (2026)]] cho một chuyên gia độc lập đánh giá 855 cặp bộ mã mà không biết nguồn gốc. Mức khớp người-LLM đạt Jaccard trung bình 0.30 so với 0.52 cho mức khớp người-người, trong khi người kiểm chứng mù ưu tiên mã hóa của người và của máy với tỉ lệ không phân biệt được (51.5% so với 48.5%, p = 0.537). Hãy báo cáo mục tiêu hiệu chuẩn, chuẩn vàng, và ai phân xử bất đồng. Ba mục đó là thứ cho người đọc biết điểm tự động có thể mang bao nhiêu trọng lượng.

## Công bố chi phí và việc dùng AI của chính bạn

Một tổng quan tất cả bài hội nghị AIED 2025 tìm thấy mô thức dùng LLM mà không công bố: phần lớn dự án dùng LLM, và chỉ một vài dự án, đếm trên đầu ngón tay, báo cáo mức tiêu thụ tài nguyên hay dấu chân carbon. Bài đó cung cấp một phương pháp mã nguồn mở với công cụ đo cho phần cứng cục bộ và đám mây, cùng công thức ước tính chi phí tính toán của các mô hình tiên tiến có số tham số không được công bố. Lập luận của nó là không báo cáo những chi phí này tự nó là một quan ngại đạo đức. Quản trị dữ liệu, sự đồng thuận, khả năng tiếp cận và phù hợp văn hóa thuộc cùng đoạn đó (các mục RAISE; [[universal-design-for-learning|thiết kế phổ quát cho học tập]], [[accessibility|khả năng tiếp cận]]). [[equity-ethics-pedagogical-safety-research]] mang phần xử lý đầy đủ hơn.

Việc bạn dùng AI trong quá trình nghiên cứu cần cùng sự công bố. [[prisma-llm-ai-assisted-systematic-reviews-2026|Phân tích PRISMA-LLM của Zabaleta và Lin]] trên 888 bài về tự động hóa tổng quan cho thấy việc báo cáo này không đồng đều đến đâu. Từ 2023, 38.0% bài về phần mềm và sản phẩm không báo cáo đánh giá nào, so với 9.3% bài về LLM. Độ phong phú báo cáo trung bình là 6.3 cho bài về LLM và 3.3 cho bài về phần mềm và sản phẩm. 84.1% việc dùng LLM dựa vào hệ thống độc quyền hoặc được lưu trữ, chỉ 4.9% là trọng số mở. Khung của họ tách công bố việc triển khai khỏi đánh giá nhạy cảm với hậu quả qua năm bậc công bố, một mẫu khả thi để mô tả công cụ đã làm gì bên trong một tổng quan.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai và Chan (2026)]] thêm bức tranh phía tác giả. Trong 28 nhà nghiên cứu sau đại học, 27 người dùng GenAI xuyên suốt phát ý tưởng, tổng quan tài liệu, giải thích, xử lý dữ liệu, lập trình, [[writing-education|viết học thuật]], biên tập và dịch. Họ hiệu chỉnh việc dùng theo mức hệ trọng và chuẩn mực ngành. Chính sách của cơ sở họ đề cập việc dạy và đánh giá chứ không phải thực hành nghiên cứu, điều để quyết định báo cáo lại cho tác giả.

## Công bố kết quả rỗng, và kiểm tra mọi trích dẫn

[[citation-errors-hallucinations-computing-education-2026|Denny và cộng sự (2026)]] xác minh 30 tài liệu tham khảo bịa đặt trong 14 bài, với số lượng ở một hội thảo kỹ thuật tăng từ 3 năm 2025 lên 17 năm 2026, tức 2.3% bài trong kỷ yếu năm đó. Soạn thảo có LLM hỗ trợ làm cho một trích dẫn bịa đặt nghe hợp lý trở nên rẻ để tạo ra, nên việc kiểm tra phải xảy ra trước khi nộp chứ không phải sau khi được nhận.

Các đối trọng trong kiểm toán đó quan trọng khi bạn trích nó. Phần lớn tài liệu bị gắn cờ là vô hại: 229 là lệch siêu dữ liệu ACM nơi PDF vẫn đúng, và 188 là biến thể thư mục hợp lệ. Số bịa đặt là một giới hạn dưới có chủ ý, và phần đa số vô hại không phải sai số làm tròn. Hãy xác minh mọi mục bạn không thể tự kiểm tra.

Báo cáo các phát hiện rỗng và phủ định là nửa còn lại của một nền bằng chứng trung thực. Bartoš và cộng sự tìm thấy bằng chứng mạnh về kết quả rỗng bị kìm lại (mọi kiểm định Egger p < .0001) và độ không đồng nhất cực đoan (τ = 0.869), không có nhóm con theo kết quả, lĩnh vực, cấp độ hay vai trò AI nào cho thấy lợi ích nhất quán. Họ cũng không thấy khác biệt giữa các nghiên cứu công bố trước và sau tháng 1 năm 2023, điều làm suy yếu tuyên bố rằng các công cụ tạo sinh hiện đại đặc biệt tạo ra lợi ích.

## Nhà nghiên cứu hiểu sai gì về điều này

**“Độ lớn hiệu ứng là thuộc tính của phương thức.”** Không có hiệu ứng của AI trong giáo dục để báo cáo. Tất cả trừ hai phân tích tổng hợp được kiểm toán định nghĩa can thiệp bằng tên công cụ, chỉ 21% so sánh được kiểm toán có can thiệp được định nghĩa, một đối chứng và một thước đo hợp lệ, và con số gộp g = 0.7 nằm trên mức gia sư thông minh chuyên biệt 0.66. Một độ lớn hiệu ứng thuộc về một thiết kế, một dân số và một lần đo.

**“Trung bình gộp là điều sẽ xảy ra với sinh viên của tôi.”** Trung bình mô tả tập nghiên cứu, và không có gì trong đó cố định bất kỳ lớp học nào. Trung bình đã điều chỉnh thiên lệch là SMD = 0.196 và khoảng dự báo của nó chạy từ -1.521 đến +1.908. Độ không đồng nhất được báo cáo nằm trên 80% ở 12 trong 13 phân tích tổng hợp, và không nhóm con nào trong nhóm lớn hơn cho thấy lợi ích nhất quán. Một thay đổi ở cấp sinh viên không thể nhận diện từ cả hai con số.

**“Kết quả rỗng nghĩa là công cụ không hiệu quả.”** Kết quả rỗng là một tuyên bố về một thiết kế ở một độ chính xác nhất định, và việc không phát hiện được hiệu ứng trong một nghiên cứu là sự thật về nghiên cứu đó. SMD = 0.196 đã điều chỉnh thiên lệch đến từ một tài liệu trong đó mọi kiểm định Egger đều có ý nghĩa, nên cách đọc bảo vệ được cho tập nghiên cứu là một trung bình nhỏ và bất định. Không nhóm con theo kết quả, lĩnh vực, cấp độ hay vai trò AI nào trong nhóm lớn hơn cho thấy lợi ích nhất quán. Vấn đề được ghi nhận trong tài liệu này là sự kìm lại.

**“Một nghiên cứu là đủ để ngã ngũ.”** Tỉ lệ cơ sở nói ngược lại. 61% nghiên cứu gốc đã kiểm định có vấn đề hiệu lực, một môn học hay một cơ sở không cho phép một tuyên bố tổng quát, và một hệ thống độc quyền là mục tiêu di động bị ràng buộc vào một phiên bản mô hình. Một nghiên cứu là một điểm dữ liệu có thiết kế kèm theo.

**“Khớp cao với người mã hóa nghĩa là mô hình đang chấm đúng thứ.”** Mức khớp người-LLM là 0.30 so với 0.52 cho người-người, và người kiểm chứng mù không phân biệt được hai bộ mã ở 51.5% so với 48.5%. Khớp đo tính nhất quán với một người mã hóa, còn chất lượng là câu hỏi riêng cần một chuẩn vàng và một người phân xử.

## Những phản đối bạn sẽ gặp

**“Người bình duyệt muốn tính mới, không muốn chi tiết phương pháp.”** Các tạp chí đang đi hướng ngược lại. RAISE và TEP-AIED cho biên tập viên một cấu trúc để yêu cầu, và tiểu mục Phương pháp của TEP-AIED là điểm vào ít ma sát. Chi tiết phương pháp là thứ biến một bài không thể đánh giá thành một bài có thể trích dẫn.

**“Chúng tôi không có chỗ.”** Năm bậc công bố là mức báo cáo chứ không phải mức rủi ro, nên độ sâu đánh giá có thể chỉ là một hai câu. Phiên bản, prompt và vai trò vừa một đoạn ngắn. Chi phí và quản trị vừa một câu trong phần hạn chế.

**“Ai cũng báo cáo thế này.”** Các con số nói rằng chuẩn mực chính là vấn đề: 61% nghiên cứu gốc đã kiểm định có vấn đề hiệu lực, 12 trong 13 phân tích tổng hợp trên 80% không đồng nhất, 38.0% bài về phần mềm và sản phẩm không có đánh giá.

**“Công cụ của chúng tôi là độc quyền, nên chúng tôi không thể báo cáo mô hình.”** Hãy báo cáo phiên bản, ngày truy cập, cấu hình, các prompt bạn đã cung cấp, vai trò và rào chắn. Nếu nhà cung cấp không nói, ràng buộc đó thuộc về phần hạn chế như một giới hạn của tuyên bố.

**“Báo cáo kết quả rỗng sẽ gây hại cho chúng tôi.”** Kết quả rỗng bị kìm lại là cơ chế được ghi nhận đằng sau trung bình đã điều chỉnh thiên lệch SMD = 0.196. Công bố chúng là thứ giữ cho kết quả tích cực của bạn còn đọc được.

## Việc cần làm trong tuần này

**1.** Đọc phần tóm tắt đối chiếu với phần phương pháp và xóa mọi tuyên bố mà phương pháp không chống đỡ được. Một câu về giới hạn của thước đo thường đủ.

**2.** Thêm đoạn đặc tả: mô hình, phiên bản, ngày truy cập, cấu hình, prompt, vai trò, và ai thiết kế hoặc xem xét đầu ra.

**3.** Kéo τ², khoảng dự báo và đánh giá thiên lệch công bố từ phụ lục vào phần kết quả, hoặc nói rõ là bạn không tính chúng.

**4.** Viết ranh giới dân số và điều kiện đối chứng vào tuyên bố thiết kế, gồm việc mỗi nhánh dành bao nhiêu thời gian.

**5.** Xác minh mọi tài liệu tham khảo bạn chưa tự đọc, và kiểm trường tác giả trước.

## Đi tiếp từ đây

[[research-methods-aied|Phương pháp nghiên cứu trong AI giáo dục]] bao phủ các lựa chọn thiết kế nằm dưới những quyết định báo cáo này, và [[limitations-in-aied-research|Hạn chế trong nghiên cứu AIEd]] là danh mục các kiểu thất bại kèm con số. [[interpreting-and-applying-aied-research|Diễn giải và áp dụng nghiên cứu AIEd]] là phía người đọc của cùng vấn đề, [[does-ai-help-students-learn|bằng chứng về học tập bền vững]] là thứ phần lớn các thước đo này cố vươn tới, [[evaluating-ai-interventions-methods]] bao phủ các thước đo và thiết kế so sánh, và [[checking-whether-educational-ai-works]] là phiên bản ngắn hơn của câu hỏi. Với những khoảng trống mà tài liệu này chưa lấp, xem [[research-gaps-aied]].
