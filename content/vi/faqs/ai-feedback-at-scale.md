---
title: "Làm thế nào AI có thể giúp tôi đưa ra phản hồi tốt hơn ở quy mô lớn?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T16:56:06-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Đã là tuần thứ sáu. Bạn có một chồng bản nháp, một rubric bạn tin vào, và một nghi ngờ đang lớn dần rằng một phần ba số nhận xét của bạn bị đọc lướt rồi quên. Một đồng nghiệp nhắc rằng giờ có một công cụ nhận xét mọi bản nháp trong vòng một giờ. Cuộc họp khoa cần một câu trả lời: đây là một nâng cấp, hay một cách nhanh hơn để tạo ra văn bản không ai đọc?

Câu trả lời ngắn để nói với đồng nghiệp: phản hồi bằng AI có chỗ đứng ở độ phủ, tính kịp thời và tính nhất quán, trong một dải hẹp. Việc xử lý ngôn ngữ ở mức hiệu đính và những nhận xét vòng đầu có rubric dẫn đường là đáng tự động hóa. Độ phủ là phần rẻ. Trong một thí nghiệm ngẫu nhiên theo cụm với 1,176 sinh viên năm thứ nhất, các thiết kế phản tư và hỗn hợp vượt qua phê bình trực tiếp của AI ở [[transfer-of-learning|khả năng chuyển giao trễ khi không có AI]]. Trong một thí nghiệm viết luận ngẫu nhiên với 70 sinh viên, phản hồi AI được đánh giá cao hơn không tạo ra bản sửa tốt hơn so với phản hồi của một giáo viên giàu kinh nghiệm. Điều sinh viên làm với một nhận xét quyết định kết quả, và [[feedback-literacy|năng lực đọc phản hồi]] tách những sinh viên hưởng lợi khỏi những sinh viên chỉ chép.

## Tóm tắt

**1.** Quyết định điều gì tính là thành công trước khi thí điểm bất cứ thứ gì: chất lượng bản sửa và hiệu suất trễ khi không có trợ giúp, không phải độ trôi chảy của các nhận xét.

**2.** Phân loại nhận xét của chính bạn thành sửa lỗi ở mức ngôn ngữ và phán đoán ở mức nhận định. Chỉ nhóm đầu là ứng viên cho việc tự động hóa.

**3.** Xếp tầng các nguồn. Tự đánh giá trước, phản hồi từ bạn học thứ hai, phê bình của AI thứ ba. Hai nguồn đặt cạnh nhau tạo ra sự tiếp nhận thụ động.

**4.** Đưa rubric của bạn cho mô hình và bắt nó lập luận từng bước. Một chỉ dẫn trống sẽ tạo ra đầu ra chung chung.

**5.** Giữ thông điệp cuối cùng, giọng điệu và mọi thứ trở thành hồ sơ ở phía con người.

**6.** Dự trù số giờ bạn sẽ dùng để xóa và hiệu chỉnh, và so sánh chúng với số giờ bạn đã giải phóng.

## Quyết định điều gì tính là thành công trước khi thí điểm bất cứ thứ gì

Thước đo hấp dẫn là chất lượng của thứ mô hình viết ra. Đó cũng là thước đo gây nhầm lẫn.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia và cộng sự (2026)]] phân ngẫu nhiên 70 sinh viên viết luận tranh luận bằng tiếng Ba Tư vào ba nhóm. Prompt theo chuỗi suy luận tạo ra phản hồi được đánh giá cao hơn đáng kể (M = 12.90) so với prompt không ví dụ (M = 11.25, p = .01) và so với một giáo viên giàu kinh nghiệm (M = 11.20, p = .008). Nhóm dùng chuỗi suy luận không sửa bài luận của mình nhiều hơn đáng kể so với nhóm nhận phản hồi từ giáo viên, nhóm này đạt mức tăng tương đương. Nhận xét tốt hơn, bản sửa như nhau. Nếu tiêu chí thành công của bạn là chất lượng nhận xét, nghiên cứu đó đọc như một thắng lợi. Nếu là điều gì đã thay đổi trong bài luận, thì không.

Hai tín hiệu khác làm một dự án thí điểm đang đi tệ trông đẹp hơn, nên hãy xác định chúng trước. Sự hài lòng của sinh viên là một. Trong dự án thí điểm toàn trường Deakin được [[tubino-adachi-ai-automated-feedback-literacy|Tubino và Adachi (2022)]] báo cáo, điểm đánh giá trung bình tích cực cùng tồn tại với những lỗi do sinh viên chỉ ra, nên một bản khảo sát mặt cười không phải bằng chứng về độ chính xác. Việc sử dụng là tín hiệu kia. Công cụ Deakin là tùy chọn, và mức sử dụng trung bình khoảng 13% sinh viên đại học và 12% học viên sau đại học, dù gần 4,000 sinh viên có quyền truy cập. Những sinh viên chủ động và thành tích cao dùng nó nhiều hơn. Đó là những gì việc làm cho một công cụ sẵn có mang lại.

Thước đo kết quả đứng vững là chất lượng bản sửa cộng với hiệu suất trễ khi không có AI. Nhiều lần nộp lại trong cùng một ngày là một dấu vết dùng được để biết một sinh viên có tham gia hay không. Chúng không phải bằng chứng rằng có điều gì đã được học.

## Phân loại nhận xét của bạn trước khi tự động hóa chúng

Hãy lấy bộ nhận xét gần nhất của bạn và chia làm hai: sửa câu chữ, và nhận định về tư duy. Sự chia tách cho bạn biết điều gì nên tự động hóa, và nó hẹp hơn những gì nhà cung cấp ngụ ý.

Dự án thí điểm Deakin chạy năm 2021, dùng công cụ phản hồi tự động bằng AI của FeedbackFruits trên 29 học phần và gần 4,000 sinh viên. Nó hoạt động trên các đặc trưng văn bản ở mức vi mô: độ dài câu, dấu câu, ngữ pháp, cấu trúc văn bản. Điều đó chống đỡ cho giai đoạn hiệu đính, khi giảng viên đặt các tham số, sinh viên dùng công cụ một cách độc lập, và phản hồi đến kịp để có thể hành động được. Chính sự phân công lao động mở rộng được quy mô, không phải mô hình.

Nhận xét ở mức phán đoán là nơi các kiểu thất bại nằm. [[learner-centered-feedback-ai|Aldino và cộng sự (2026)]] thu thập các vấn đề phía giảng viên từ 21 giáo viên giáo dục đại học: giọng điệu không nhất quán (n = 7), nguy cơ thông tin sai (n = 5) và các vấn đề niềm tin (n = 5). Công sức sửa của họ đổ vào việc xóa những lời khen phóng đại và gợi ý chung chung thay vì thêm nội dung. Danh sách đó là việc rà soát của bạn, và đó là nơi số giờ biến mất.

## Xếp tầng các nguồn thay vì chồng chúng lên nhau

Bằng chứng mạnh nhất về thiết kế đến từ một thí nghiệm thực địa theo chiều dọc, ngẫu nhiên theo cụm, đa điểm: 1,176 sinh viên năm thứ nhất trong 48 nhóm học trên 4 trường đại học và 3 lĩnh vực [[stem-education|khoa học]], được phân ngẫu nhiên ở cấp nhóm vào các điều kiện chỉ có bạn học, GenAI trực tiếp, GenAI phản tư và hỗn hợp ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Điều kiện phản tư yêu cầu tự đánh giá trước khi AI phê bình. Điều kiện hỗn hợp chạy tự đánh giá, rồi phản hồi từ bạn học, rồi phê bình của GenAI. Điều kiện hỗn hợp tạo ra mức tăng chất lượng lập luận cao nhất và lợi thế rõ nhất về việc học khái niệm. Cả phản tư lẫn hỗn hợp đều tạo ra sự tiếp nhận phản hồi mạnh hơn và nhiều [[self-regulated-learning|tự điều chỉnh việc học]] hơn GenAI trực tiếp, và cả hai đều vượt nó ở khả năng chuyển giao trễ khi không có AI. GenAI trực tiếp có nâng chất lượng lập luận tức thời lên trên phản hồi từ bạn học, đó là lợi thế của nó, và nó làm vậy với khả năng chuyển giao yếu hơn.

Cơ chế giải thích vì sao trình tự quan trọng hơn công cụ. Phê bình trực tiếp mời gọi sự tiếp nhận thụ động: sinh viên đọc một phán quyết và áp dụng nó. Các thiết kế phản tư và hỗn hợp buộc sinh viên phải diễn giải nhận xét, so sánh nó với các tiêu chí, đánh giá mức liên quan của nó rồi mới sửa. Giá trị giáo dục phụ thuộc ít vào việc có quyền dùng AI hơn là vào việc môi trường phản hồi có giữ được [[agency|quyền tự quyết của người học]] và [[evaluative-judgment|phán đoán đánh giá]] trong lúc sửa hay không.

Phản hồi từ bạn học có chỗ đứng riêng trong trình tự. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen và Yan (2026)]] cho hai lớp tiếng Anh song song (N = 118 sinh viên năm thứ nhất ở Trung Quốc; GenAI n = 56, bạn học n = 62) đi qua ba chu kỳ tự đánh giá trong một học kỳ. Giàn giáo của GenAI cải thiện năng lực đọc phản hồi ở mức nhẹ nhưng có ý nghĩa so với việc bạn học chấm bài (ANCOVA p = 0.049, ηp² = 0.03). Sinh viên nhóm GenAI tinh chỉnh prompt lặp đi lặp lại và kiểm chứng hoặc thách thức đầu ra không chính xác. Sinh viên nhóm bạn học chọn nguồn theo sự tiện lợi xã hội và bị thiên lệch tình bạn làm lệch phán đoán đánh giá của mình. Việc bạn học chấm bài giữ một giá trị riêng cho nhận thức về người đọc, đó là lý do các tác giả đề xuất những thiết kế nhiều giai đoạn với phản hồi ẩn danh từ bạn học thay vì thay thế nó.

Lợi thế của Gu và cộng sự là nhỏ, và họ đọc nó là thật nhưng không tự nó tạo ra chuyển biến. Giàn giáo của giảng viên, hướng dẫn viết prompt và phiếu bài tập làm phần việc hỗ trợ.

## Đưa cho mô hình một rubric, rồi bắt nó cho thấy các bước

Sinh đầu ra theo rubric là phần có thể tự động hóa.

Mức tăng chất lượng của Farrokhnia và cộng sự đến từ một prompt chuỗi suy luận dẫn mô hình qua một phép đánh giá từng bước theo một rubric lập luận, không đến từ một chỉ dẫn trống là hãy cho phản hồi. Gu và cộng sự đưa cho nhóm GenAI của họ ChatGPT-4o với các rubric đã huấn luyện trước và hướng dẫn viết prompt, và chính điều đó làm cho đầu ra có thể kiểm tra được theo các tiêu chí đã nêu. Trong cả hai trường hợp, prompt là nơi các tiêu chí của bạn đi vào hệ thống, và dấu vết lập luận là thứ cho phép bạn thấy mô hình có áp dụng chúng hay không.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson và Yan (2025)]] biến chất lượng prompt thành bản lề của toàn bộ quá trình. Prompt mơ hồ cho ra đầu ra chung chung, vô dụng, và các nhận xét được tạo ra có thể bị ảo giác, thiên lệch hay trùng lặp, điều đó đẩy phán đoán đánh giá trở lại phía người đọc. Việc hiệu chỉnh còn sắc hơn. Trong Farrokhnia và cộng sự, chất lượng phản hồi của GenAI có liên hệ đáng kể với độ mạnh của bản nháp ban đầu của sinh viên, trong khi chất lượng phản hồi của giáo viên thì không. Giáo viên hiệu chỉnh nhất quán hơn. Khối lượng mở rộng được. Việc hiệu chỉnh thì không.

## Giữ lời cuối và hồ sơ ở phía con người

[[becerra-aicofe-feedback-2026|Becerra, Palma và Cobos (2026)]] mô tả AICoFE, hệ thống chạy ba mô hình được tinh chỉnh độc lập (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) trên các điểm rubric và quan sát định tính để tạo ra những nhận xét nháp độc lập. Sau đó giảng viên soạn thông điệp cuối cùng bằng cách chọn câu hoặc đoạn, với một chú giải cho biết mô hình nào đóng góp phần nào. Mô hình soạn nháp. Giảng viên giao, và sản phẩm giao đi được một người đã đọc bản nháp ký tên.

Aldino và cộng sự thấy cùng mô thức hỗ trợ rồi kiểm chứng trong thực hành thông thường. Thành phần học máy thường gắn cờ thiếu “Đạt mục tiêu học tập” nhất (20 trong 21 giáo viên đã bỏ sót nó; 16 chấp nhận cờ đó) và “Quan hệ giáo viên và sinh viên” (14 bỏ sót; 12 chấp nhận). Giáo viên quyết định từng gợi ý bằng phán đoán chuyên môn, và đó chính là điểm của việc đặt họ vào vòng lặp.

Mười hai trong 21 giáo viên của Aldino và cộng sự đã sửa thêm ở mức câu, và mô thức chiếm ưu thế là hiệu chỉnh giọng điệu: hạ bớt lời khen (f = 11), bỏ gợi ý (f = 9), bỏ lời động viên (f = 8). Các sửa đổi tập trung ở chiều quan hệ, đặc biệt là Quan hệ giáo viên và sinh viên (f = 24). Họ đang bảo vệ tính chân thực và giọng chuyên môn, và công việc đó không tự động hóa được.

## Dạy sinh viên cách đọc nhận xét

Năng lực đọc phản hồi là điều kiện tiên quyết, và nó phân bố không đều.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths và Lodge (2026)]] cho 32 sinh viên tâm lý làm một nhiệm vụ viết luận 25 phút có ghi màn hình với quyền truy cập ChatGPT không hạn chế, rồi xem lại bản ghi trong một buổi phỏng vấn kích thích bằng video. Năng lực đọc phản hồi là yếu tố dự báo dương duy nhất có ý nghĩa về điểm bài luận (β = 0.46, p = .017). Tần suất dùng GenAI, [[trust|độ đáng tin của nguồn]] và [[prior-knowledge|kiến thức tiền đề]] không dự báo được hiệu suất, một điểm mà [[feedback-futures-genai|Zhan, Wood, Carless và Yan (2026)]] cũng nêu trong bài xã luận số đặc biệt của họ. Ít hơn một phần ba số sinh viên so sánh đầu ra của AI với một nguồn internet khác. Một nửa bày tỏ việc chủ động tránh AI vì [[academic-integrity|liêm chính học thuật]] hoặc vì họ muốn bài luận là lời của chính mình. Phần lớn yêu cầu phản hồi ở mức nhiệm vụ, loại phản hồi chuyển giao kém sang nhiệm vụ khác.

Những trường hợp cực đoan hiện ra trong cặp người viết IELTS mà Zhan và cộng sự mô tả. Một sinh viên có năng lực thấp viết một prompt mơ hồ, nhận phản hồi chung chung, tin hoặc chép quá mức, và tham gia một cách hời hợt. Một sinh viên có năng lực cao viết một prompt tham chiếu theo tiêu chí, hỏi tiếp, đối chiếu chéo các nguồn và theo dõi các bản sửa. Khác biệt nằm ở hướng dẫn và thói quen, không ở quyền truy cập công cụ.

Nói thẳng với sinh viên rằng nhận xét của mô hình có thể bị ảo giác, thiên lệch hay trùng lặp, và sinh viên là người sở hữu bản sửa. Đóng khung đầu ra như một ý kiến nháp cần được đánh giá chứ không phải một đáp án để chép. Rồi yêu cầu phép so sánh, vì ít hơn một phần ba số sinh viên làm điều đó mà không được nhắc.

## Giảng viên hiểu sai gì về điều này

Nhiều nhận xét hơn nghĩa là nhiều phản hồi hơn. Nhận xét rẻ để tạo ra và đắt để hấp thụ, và nút thắt nằm ở phía sinh viên trong vòng lặp. Những nhận xét AI được đánh giá cao hơn của Farrokhnia và cộng sự không tạo ra bản sửa nhiều hơn nhận xét của giáo viên.

Một mô hình tốt hơn sẽ sửa được đầu ra chung chung. Các thất bại của công cụ Deakin là thất bại về phạm vi: đặc trưng ở mức câu, một dải hiệu đính hẹp. Zhan và cộng sự đặt cách sửa ở prompt, ở rubric hay ở con người, không ở một mô hình lớn hơn. Cặp người viết IELTS là minh chứng; cùng một công cụ, thói quen khác nhau, kết quả khác nhau.

Làm cho công cụ sẵn có chính là can thiệp. Mức sử dụng khoảng 13% sinh viên đại học và 12% học viên sau đại học khi công cụ là tùy chọn. Phần còn lại của câu hỏi thiết kế là điều gì xảy ra với 87% còn lại.

Việc tiết kiệm thời gian là tự động. Khi được hỏi công cụ phản hồi AI mang lại gì, 21 giáo viên chỉ hiếm khi nêu việc tiết kiệm thời gian (n = 2). Họ nêu phản tư (n = 14), ngôn ngữ và cấu trúc được cải thiện (n = 11) và việc xác định các thành phần còn thiếu (n = 10) nhiều hơn hẳn. Việc biên tập (f = 32) và việc xóa (f = 27) chiếm ưu thế trong công việc sửa của họ, với việc thêm vào thì hiếm (f = 8). Điều xuất hiện là một bản nháp và một gợi ý chẩn đoán. Điều cũng xuất hiện là công việc rà soát, hiệu chỉnh và kiểm chứng. [[ai-save-instructor-time|Câu hỏi về khối lượng công việc]] là điều hay được hứa hẹn nhất rằng sẽ biến mất, và GenAI phân phối lại công lao động của giảng viên thay vì loại bỏ nó.

Điểm hài lòng cho bạn biết các nhận xét là chính xác. Trong dự án thí điểm Deakin, điểm đánh giá trung bình tích cực cùng tồn tại với những lỗi do sinh viên chỉ ra. Hãy lấy mẫu đầu ra đối chiếu với cách đọc của chính bạn trên cùng những bản nháp đó và ghi lại chỗ mô hình chung chung, sai hay xu nịnh.

## Những gì sẽ quay lại với bạn

**“Phản hồi AI không mang tính cá nhân.”** Thường đúng, và đó là lý do giữ lời cuối cho con người. AICoFE tồn tại vì văn bản chung chung của mô hình không phải thứ sinh viên nên nhận: giảng viên chọn, sửa và ký thông điệp cuối. 21 giáo viên trong Aldino và cộng sự viết lại giọng điệu vì cùng lý do đó. Cá nhân hóa là việc của bạn trong thiết kế này, và mô hình đang làm phần việc chuẩn bị.

**“Sinh viên của tôi dù sao cũng không đọc phản hồi.”** Họ đọc ít hơn chúng ta hy vọng, và bằng chứng nói cách sửa là thiết kế chứ không phải khối lượng. Mức tiếp nhận trong dự án thí điểm Deakin khoảng 13% và 12%. Những nhận xét được đánh giá cao hơn của Farrokhnia và cộng sự không tạo thêm bản sửa. Điều làm thay đổi tình hình là một trình tự buộc phải tham gia, tự đánh giá rồi phản hồi từ bạn học rồi phê bình của AI, cộng với ba chu kỳ sửa trong một học kỳ tạo ra khác biệt đo được về năng lực đọc phản hồi.

**“Đây không phải thứ sinh viên trả tiền để nhận.”** Vậy hãy giữ để AI không trở thành tiếng nói duy nhất họ nghe từ bạn. Phiên bản có thể biện minh cho sinh viên nhiều khoảnh khắc phản hồi hơn trong khi bạn dùng số giờ của mình cho những phần đòi hỏi phán đoán nhiều: lời cuối, việc hiệu chỉnh, những nhận xét mang thẩm quyền của bạn. Điều sinh viên mất khi triển khai cẩu thả là sự mạch lạc giữa tiêu chí, nhận xét và kết quả. Hãy nêu rõ tính bổ trợ qua trình tự, so sánh, biên tập và quản trị, và phản đối ấy mất sức nặng. Để hai nguồn cạnh nhau thì nó không mất.

**“Tôi không có thời gian rà soát mọi thứ mô hình viết.”** Vậy đừng rà soát mọi thứ. Hãy tự động hóa dải mà lỗi rẻ để bắt, tức việc ngôn ngữ ở mức câu, và lấy mẫu đầu ra ở mức phán đoán đối chiếu với những bản nháp bạn đã chấm. Các con số của Aldino cho bạn biết cần tìm gì: giọng điệu, thông tin sai, lời khen phóng đại, trùng lặp.

## Việc cần làm trong tuần này

**1.** Phân loại bộ nhận xét gần nhất của chính bạn thành sửa lỗi ở mức ngôn ngữ và nhận định ở mức phán đoán, và đếm từng đống.

**2.** Viết prompt từng bước, tham chiếu rubric mà bạn sẽ đưa cho một mô hình, và thử nó trên ba bản nháp bạn đã chấm.

**3.** Lấy mẫu đầu ra đối chiếu với nhận xét của chính bạn và ghi lại chỗ mô hình chung chung, sai hay xu nịnh.

**4.** Xếp một bài tập thành tự đánh giá, rồi phản hồi từ bạn học, rồi phê bình của AI, và nói với sinh viên rằng AI là một ý kiến nháp mà họ được kỳ vọng thách thức.

**5.** Yêu cầu một phép so sánh với một nguồn thứ hai hoặc với các tiêu chí, vì ít hơn một phần ba số sinh viên làm điều này mà không được nhắc.

**6.** Ghi lại bao nhiêu phần của phản hồi cuối đến từ mô hình và bạn đã thay đổi bao nhiêu. Việc theo dõi tuyển chọn của AICoFE là mẫu cho hồ sơ đó.

**7.** Theo dõi sự tách biệt giữa chuyên gia và người mới. Giảng viên có hơn năm năm kinh nghiệm báo cáo nhiều vấn đề với đầu ra của công cụ hơn các đồng nghiệp ít kinh nghiệm, những người đánh giá cao phần giàn giáo. Nếu đồng nghiệp giàu kinh nghiệm của bạn thấy nhiều thất bại hơn bạn, đó là thông tin về việc hiệu chỉnh của chính bạn.

## Đi tiếp từ đây

[[feedback|Phản hồi]] là khái niệm bao trùm cho toàn bộ hệ thống: việc cung cấp, vòng lặp, sự tiếp nhận và bối cảnh đánh giá. [[ai-feedback-quality|Chất lượng phản hồi của AI]] bao quát điều gì làm cho các nhận xét được tạo ra trở nên chính xác, hữu ích, kịp thời và vững về sư phạm, và trang này là phần giữa thực hành, về việc những tổ hợp nào của các phần đó tạo ra phản hồi tốt hơn ở quy mô lớn.

Những câu hỏi về việc một điểm số nên có nghĩa gì khi đã có AI, gồm việc thay thế cấu trúc, bằng chứng về quá trình đã được xác thực và các quy tắc liêm chính, thuộc về [[redesign-assessment-ai-era|thiết kế lại đánh giá trong kỷ nguyên AI]] và [[assessment-validity|giá trị của đánh giá]] chứ không thuộc trang này. Với trường hợp đặc biệt của việc dạy viết, xem [[writing-instruction-ai-best-practices|những thực hành tốt nhất cho việc dạy viết trong bối cảnh AI]].
