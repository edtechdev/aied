---
title: "Làm sao để AI hỗ trợ việc học trong môn học của chúng ta tốt hơn?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

Phiếu yêu cầu ghi 'tinh chỉnh mô hình trên tài liệu khóa học của chúng ta'. Ngân sách đã được duyệt, một GPU đã được đặt cho tháng sau, và một nghiên cứu sinh đã được giao việc lắp một bộ dữ liệu. Không ai trong cuộc gọi đã hỏi một prompt đơn giản được bao nhiêu điểm, hay một phép tìm kiếm từ khóa được bao nhiêu điểm, trên cùng những câu hỏi đó.

Hãy hỏi hai câu đó trước. Trong cơ sở kiến thức này, khoảng cách giữa một mô hình tổng quát và một mô hình đủ năng lực cho khóa học phần lớn là vấn đề neo vào tài liệu và viết prompt, và bằng chứng cho thứ tự đó trực tiếp một cách bất thường: một nghiên cứu về trợ lý khóa học phát hiện việc truy xuất, chứ không phải mô hình, là quyết định bậc một, và một mô hình tổng quát không được neo vào tài liệu chỉ đạt điểm *thấp hơn* một đường cơ sở TF-IDF đơn giản.

Việc huấn luyện là có thật và đôi khi cần thiết. Nó là thứ thứ ba hoặc thứ tư nên thử, và công việc dưới đây được sắp thứ tự để bạn biết mình thực sự cần nấc nào trước khi tiêu hết phần tính toán của quý.

## Tóm tắt

**1.** Ghi lại một prompt đơn giản được bao nhiêu điểm, và một phương pháp từ vựng tầm thường được bao nhiêu điểm, trước khi bạn thay đổi bất cứ điều gì. Con số thứ hai là thứ giữ cho bạn trung thực.

**2.** Đặt việc truy xuất trên tài liệu của chính bạn lên trước mô hình. Đây là mức tăng đơn lẻ lớn nhất được báo cáo ở đây so với chi phí, và nó có thể đảo ngược.

**3.** Viết prompt đối chiếu với rubric của bạn và lặp cho đến khi cải thiện dừng lại. Điểm chững là tín hiệu rằng việc huấn luyện có thể thêm được gì đó.

**4.** Thích ứng trọng số bằng [[llm-training-and-fine-tuning|LoRA]] khi mục tiêu ổn định và hẹp: một định dạng, một rubric, một trình độ đọc, một từ vựng chuyên ngành.

**5.** Huấn luyện sau khi vấn đề là hành vi chứ không phải nội dung, và viết phần thưởng đối chiếu với một bộ đánh giá mà bạn kỳ vọng sẽ bị lách.

**6.** Xây bộ huấn luyện ở mức từng bước. Dữ liệu chỉ có đáp án không dạy được một quan niệm sai.

## Có một đường cơ sở bạn thực sự có thể vượt

Trước khi thay đổi bất cứ điều gì, hãy ghi lại một prompt đơn giản trả về gì. Rồi ghi lại một phương pháp tầm thường trả về gì.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Nghiên cứu về trợ lý cơ sở kiến thức khóa học]] đáng đọc chỉ vì điều này. Một LLM cục bộ không truy xuất đạt độ chính xác **52.3%**. Một đường cơ sở TF-IDF, một phương pháp từ vựng đã có từ nhiều thập kỷ, đạt **55.4%**. Mô hình kém hơn phương pháp cổ điển.

Bỏ qua bước này và bạn không thể biết việc tinh chỉnh của mình có giúp ích hay không. Tệ hơn, bạn có thể triển khai một hệ thống mà một phép tìm kiếm từ khóa đánh bại, và chỉ phát hiện ra khi một trợ giảng nhắc đến. Hai con số trên một bảng tính, lấy trong một buổi chiều, bảo vệ phần còn lại của ngân sách.

## Neo mô hình vào tài liệu của chính bạn

Thêm [[rag|sinh văn bản có truy xuất tăng cường]] trên tài liệu khóa học, không tinh chỉnh gì cả, đã nâng chính hệ thống đó từ 52.3% lên **66.6%**. Mức tăng đó đến từ một chỉ mục, và nó đi kèm một tính chất mà một lần huấn luyện không có: khi tài liệu của bạn thay đổi, bạn đánh chỉ mục lại.

Hai kết quả khác chỉ về cùng hướng. Một tổng quan PRISMA trên 23 nghiên cứu thực nghiệm về việc tùy biến AI cho [[writing-education|dạy viết]] phát hiện **viết prompt chiếm ưu thế (N = 13), vượt trên tinh chỉnh (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Ở nơi một cơ sở kiến thức phải luôn cập nhật, truy xuất là đòn bẩy duy nhất vẫn cập nhật mà không phải chạy lại một lần huấn luyện.

Truy xuất cũng có một hình thức sư phạm. Neo một mô hình vào các ví dụ đã làm và rubric của chính bạn là cách nó ở lại bên trong [[scaffolding|giàn giáo]] bạn đã thiết kế, trả lời ở mức bạn đặt ra thay vì trôi sang những lời khuyên chung chung. Sự trôi đó là phàn nàn phổ biến nhất về các gia sư đóng gói sẵn, và nó là vấn đề truy xuất thường xuyên hơn là vấn đề trọng số.

## Viết prompt đối chiếu với rubric của bạn, và để ý điểm chững

Viết prompt không phải là việc sơ bộ bạn làm trong lúc chờ GPU. Hai kết quả cho thấy riêng nó đạt được gì:

- **Viết prompt theo rubric, được cùng tinh chỉnh lặp đi lặp lại, đã nâng mức đồng thuận giữa LLM và người trên bài thiết kế của sinh viên từ 54.75% lên 81.25%** (Cronbach's Alpha từ 0.393 lên 0.798), hoàn toàn không tinh chỉnh ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Một prompt tùy biến dựa trên tài liệu đã gợi ra các [[misconceptions|quan niệm sai]] toán học mục tiêu ở mức hiện diện **0.98**, so với **0.40** ở một prompt rộng ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Tín hiệu thực tiễn là **điểm chững**. Trong nghiên cứu tạo câu hỏi, việc tinh chỉnh prompt lặp đi lặp lại ngừng cải thiện, và việc tinh chỉnh GPT-4.1 *trên chính prompt đã tối ưu* sau đó thêm phần lợi ích còn lại ([[gpt-item-generation-l2-listening-2026]]). Một điểm chững sau khi đã làm việc prompt thật là bằng chứng rằng việc huấn luyện còn chỗ để thêm gì đó. Với tay tới việc huấn luyện trước khi chạm một điểm chững là đoán mò, và đoán mò tốn một tháng.

Hãy để ý kết quả tạo câu hỏi ngụ ý gì về thứ tự. Việc tinh chỉnh được xây trên prompt đã tối ưu, nên công việc prompt không bị lãng phí khi nhóm cuối cùng huấn luyện. Nấc rẻ cũng chính là bản đặc tả cho nấc đắt.

## Thích ứng trọng số khi mục tiêu ổn định và hẹp

Việc thích ứng có lời khi bạn cần mô hình giữ một tính chất một cách đáng tin: một trình độ đọc, một định dạng đầu ra, một lĩnh vực mà nó thiếu. Kết quả lặp lại là **nhắm đúng mục tiêu thắng quy mô**.

- Ba mô hình **8B** được tinh chỉnh trên một chương trình đọc cho trẻ em do chuyên gia thiết kế vượt qua GPT-4o zero-shot và Llama 3.3 70B trên các thước đo liên quan đến độ khó, với các vấn đề an toàn không đáng kể. Các tác giả gọi đây là **khả năng kiểm soát thay vì quy mô** ([[llm-children-reading-story-generation]]).
- Một bộ dữ liệu chỉ dẫn **24.795 ví dụ** được neo vào Hệ tri thức Ấn Độ tạo ra một bản tinh chỉnh **7B** đạt **6.39** trên một hội đồng đánh giá bên ngoài gồm năm giám khảo, trong khoảng **0.15** so với một mô hình tham chiếu tổng quát mạnh, với chi phí triển khai chỉ bằng một phần nhỏ. Cùng mô hình nền đó đạt **gần bằng không trên các chiều đặc thù lĩnh vực** khi không tinh chỉnh ([[iks-instruct-dataset-indian-knowledge]]). Khoảng cách giữa giỏi nói chung và giỏi ở đây chính là toàn bộ lý lẽ cho việc thích ứng lĩnh vực.
- Một bộ chuyển đổi [[llm-training-and-fine-tuning|LoRA]] duy nhất được huấn luyện trên khoảng **3.900** ví dụ đã chấm điểm được gộp lại đưa năm mô hình mở nhỏ (4B đến 30B) lên ngang bằng hoặc tốt hơn một người chấm trên hai kỳ thi khoa học máy tính ([[llm-graders-computer-science-exams-2026]]). Một bộ chuyển đổi, một bộ dữ liệu, nhiều mô hình nền: đó là hình dạng triển khai mà một nhóm nhỏ có thể vận hành.

Từ *ổn định* trong tiêu đề mang sức nặng. Định dạng, rubric, trình độ đọc và từ vựng chuyên ngành là những mục tiêu ổn định. Văn xuôi đậm phán đoán không có mục tiêu như vậy, và đó là nơi việc thích ứng thất bại, như hai phần tiếp theo cho thấy.

## Thay đổi hành vi khi câu trả lời là vấn đề

Thích ứng dạy mô hình *cần tạo ra cái gì*. Huấn luyện sau dạy nó *cần hành xử thế nào*. Với việc gia sư, sự phân biệt đó chính là toàn bộ vấn đề: các mô hình tổng quát được huấn luyện sau trên sở thích của con người về tính hữu ích, nghĩa là trả lời ngay, còn việc dạy học đòi hỏi phải giữ lại câu trả lời.

Những kết quả giáo dục mạnh nhất trong cơ sở dữ liệu này nằm ở đây. Mô hình phần thưởng của EduQwen ưu tiên rõ ràng **việc hướng dẫn thay vì trả lời trực tiếp**, và quy trình ba giai đoạn của nó đạt **96.52%** trên bộ đánh giá CDPK so với **90.55%** của Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Trình mô phỏng viết của SWIM đi từ viết prompt dựa trên rubric (QWK tốt nhất **0.577**) sang tinh chỉnh có giám sát (**0.474 ± 0.023**) rồi sang học tăng cường (**0.618 ± 0.005**) trên mọi đặc điểm và mọi prompt ([[swim-student-writing-simulation-2026]]).

Hãy đọc các con số của SWIM cẩn thận, vì bước giữa đi lùi. Tinh chỉnh có giám sát trên các bản mẫu làm trình mô phỏng tệ hơn chính prompt mà nó bắt đầu, và chỉ tín hiệu phần thưởng mới lấy lại được phần mất và sau đó vượt đường cơ sở. Nếu kế hoạch của bạn dừng ở tinh chỉnh có giám sát, kế hoạch đó có thể là một đường vòng.

## Giám sát ở mức từng bước

Một phát hiện ở đây dễ bị bỏ qua và tốn kém nếu bỏ qua: **chất lượng giám sát thắng số lượng giám sát**. Các mô hình được tinh chỉnh theo chỉ dẫn chỉ học được các quan niệm sai về đại số khi được huấn luyện trên **các vết giải ở mức từng bước**. Khi chỉ huấn luyện trên đáp án cuối, độ chính xác vẫn **dưới 30% ở mọi kích thước dữ liệu** ([[misconception-acquisition-dynamics-llms-2026]]).

Nếu các ví dụ huấn luyện của bạn là những cặp câu hỏi và đáp án đúng, bạn đang huấn luyện sai thứ, và thêm ví dụ sẽ không sửa được. Thứ bạn cần là phần việc trung gian: chỗ rẽ sai, bước mà sinh viên đi lệch, phần chỉnh sửa. Thu thập nó là một bài toán kỹ thuật dữ liệu có một ràng buộc sư phạm, và nó thường có nghĩa là ghi lại các phiên làm việc thay vì thu thập đáp án.

## Nơi việc thích ứng lặng lẽ thất bại

Đây là phần mà sự hào hứng bỏ qua.

**Văn bản đậm phán đoán.** Trong WrAFT, cùng một dự án tinh chỉnh thành công cho việc *chấm điểm* bài luận (QWK 0.84) lại tạo ra đầu ra bị cắt cụt và không phân tích được khi tinh chỉnh cho việc *phản hồi*, trong khi viết prompt trực tiếp cho Claude 3.7 tạo ra phản hồi được giáo viên đánh giá tốt nhất ([[wraft-automated-writing-evaluation-argumentative-2026]]). Tinh chỉnh dạy mô hình đạt một con điểm, và chấm điểm là thứ duy nhất nó học được.

**Chuyển giao giữa các mô hình.** Quy mô không phải là yếu tố dự báo đáng tin cho hiệu suất về sau dưới việc thích ứng LoRA, và **cùng siêu tham số tạo ra hành vi khác nhau về chất giữa các kiến trúc** ([[aiawe-automated-writing-evaluation]]). Một công thức hiệu quả trên một mô hình không phải là một công thức.

**Kiến trúc quan trọng hơn số tham số.** Tinh chỉnh ba mô hình văn bản thành hình ảnh mở trên 1.000 hình ảnh kỹ thuật hạt nhân có chú thích cải thiện đáng kể Stable Diffusion XL, mang lại lợi ích hạn chế cho SD-v3.5-Medium, và **không tạo ra cải thiện nào đo được với Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Vấn đề là kiểm chứng.** Một GPT-4 tiên tiến chưa được huấn luyện tạo ra khoảng **35%** gợi ý quá chung chung, sai hoặc để lộ đáp án khi soạn phản hồi gia sư, và các bước kiểm tra chất lượng tự động của chính nó không đồng ý với phán đoán của con người ([[reddig-maclellan-personalized-feedback-llm-2026]]). Đó là vấn đề lọc, và LoRA sẽ không giải quyết được.

Mẫu hình chung ở cả bốn trường hợp: thích ứng đưa một mô hình một cách đáng tin về phía một mục tiêu bạn có thể đặc tả và chấm điểm. Nó không thêm phán đoán, và một quy trình thiếu bước kiểm tra vẫn sẽ xuất ra đầu ra tồi.

## Lập ngân sách cho việc thích ứng một cách trung thực

Với nấc thích ứng, ngưỡng yêu cầu thấp hơn hầu hết các nhóm tưởng: **vài trăm đến vài nghìn ví dụ và một GPU**. LoRA huấn luyện một số nhỏ tham số được thêm vào và giữ nguyên trọng số nền, nên nhiều mô hình có thể được phục vụ từ một bộ chuyển đổi.

Hạng là một sự đánh đổi chứ không phải một núm vặn để tối đa hóa. Lợi ích trên mỗi triệu tham số của bộ chuyển đổi giảm đơn điệu khi hạng tăng, và việc căn chỉnh ở cấp khóa học là một quyết định về quy mô và hạng chứ không phải một nâng cấp miễn phí ([[lora-finetuned-control-systems-course-qa-2026]]).

Việc bạn thích ứng những lớp nào cũng là một lựa chọn thực sự. Việc chỉ cập nhật **bốn lớp Transformer cuối** của một bộ phân tích diễn ngôn dựa trên BERT tốt hơn cả việc chỉ thích ứng lớp trên cùng và tinh chỉnh toàn chiều sâu ([[bert-discourse-english-teaching-2026]]). Ba cấu hình, ba kết quả khác nhau, và cấu hình rẻ nhất thắng.

Chi phí dễ bị đánh giá thấp là việc đánh giá, và nó lớn hơn hóa đơn tính toán. Xem [[checking-whether-educational-ai-works|Làm sao chúng ta biết một AI giáo dục đang hoạt động đúng, chứ không chỉ cho điểm tốt?]]

## Hiệu chỉnh điều bạn kỳ vọng

Việc chọn mô hình và chọn prompt cùng nhau chỉ giải thích khoảng **15%** sự lệch giữa LLM và thành quả học tập của sinh viên, và trong nghiên cứu đó, các tập hợp cân trọng số theo bộ đánh giá và bỏ phiếu nhất trí làm mức căn chỉnh *tệ hơn* ([[educational-llm-alignment]]). Dữ liệu tiền huấn luyện là đòn bẩy chi phối cách một mô hình hành xử, và đó là đòn bẩy duy nhất bạn không thể kéo.

Không điều nào trong số đó phản đối công việc ở trên. Nó phản đối việc kỳ vọng một lần tinh chỉnh sửa được một vấn đề thiết kế. Nếu vấn đề là gia sư của bạn trả lời quá sẵn sàng, huấn luyện có thể xử lý được. Nếu vấn đề là người học của bạn không tương tác với nó, huấn luyện sẽ không, và con số 15% nói rằng tiền nên được tiêu ở chỗ khác.

## Các nhóm hiểu sai gì

Tinh chỉnh là cách bạn dạy mô hình khóa học của mình. Truy xuất trên tài liệu của chính bạn đưa cùng hệ thống đó từ 52.3% lên 66.6% mà không huấn luyện gì cả, và một prompt được tinh chỉnh đối chiếu với rubric đưa mức đồng thuận từ 54.75% lên 81.25%. Huấn luyện dạy hành vi và định dạng đáng tin hơn nhiều so với việc dạy nội dung.

Một mô hình nền lớn hơn loại bỏ nhu cầu về tất cả những thứ này. Một mô hình 8B được tinh chỉnh trên một chương trình đọc cho trẻ em đánh bại GPT-4o zero-shot và Llama 3.3 70B trên các thước đo độ khó, và một bản tinh chỉnh 7B nằm trong khoảng 0.15 của một tham chiếu tổng quát mạnh với chi phí triển khai chỉ bằng một phần nhỏ. Quy mô và độ phù hợp là hai trục khác nhau, và chỉ một trong hai được bán theo token.

Nhiều dữ liệu hơn sẽ sửa một bộ huấn luyện được xây sai. Giám sát chỉ có đáp án để độ chính xác dưới 30% ở mọi kích thước dữ liệu trong nghiên cứu về quan niệm sai. Quy mô không sửa được một mục tiêu đang thiếu thông tin mà mô hình cần.

Một công thức hiệu quả trên một mô hình sẽ hiệu quả trên mô hình tiếp theo. Cùng siêu tham số tạo ra hành vi khác nhau về chất giữa các kiến trúc, và cùng một phương pháp tinh chỉnh cải thiện đáng kể một mô hình hình ảnh và không làm được gì đo được với mô hình khác. Hãy chạy lại công thức trên mô hình nền của bạn, nếu không là bạn đang đoán.

Tinh chỉnh có giám sát là bước giữa an toàn trước khi học tăng cường. Trong SWIM, giai đoạn có giám sát đạt 0.474 so với 0.577 của prompt mà nó thay thế, và chỉ tín hiệu phần thưởng mới lấy lại được. Bước giữa có thể tốn của bạn một tháng và một sự thụt lùi.

## Những gì sẽ quay lại với bạn

**'Ngân sách đã được duyệt cho việc tinh chỉnh, nên cứ tinh chỉnh đi.'** Hãy dành một tuần cho đường cơ sở và chỉ mục trước. Nếu truy xuất làm con số thay đổi, việc tinh chỉnh là một quyết định về sau được đưa ra với thông tin tốt hơn, và bạn sẽ có một lập luận mạnh hơn cho nó hoặc một lý do tốt để trả lại GPU.

**'Vấn đề của chúng tôi là sinh viên không dùng nó.'** Huấn luyện thay đổi thứ mô hình tạo ra. Con số 15% mô tả việc chọn mô hình và chọn prompt giải thích được bao nhiêu trong sự lệch với thành quả học tập, và mức độ tương tác nằm ngoài đó. Hãy đo chỗ sinh viên bỏ cuộc trước khi bạn mua tính toán.

**'Chúng tôi không thể gửi bài của sinh viên đến API của nhà cung cấp.'** Kết quả LoRA mạnh nhất ở đây đến từ các mô hình mở trong khoảng 4B đến 30B, và một bộ chuyển đổi duy nhất phục vụ nhiều mô hình trong số đó. Hình dạng triển khai đó khả dụng với một nhóm có một GPU và không có thỏa thuận xử lý dữ liệu.

**'Viết prompt là mẹo vặt; công việc thật là huấn luyện.'** Tổng quan trên 23 nghiên cứu về dạy viết phát hiện viết prompt là cách tiếp cận chiếm ưu thế và tinh chỉnh đứng sau, còn mức tăng lớn nhất được báo cáo trên trang này đến từ một chỉ mục. Cả tổng quan và nghiên cứu về trợ lý khóa học đều sắp các nấc đó theo mức tăng đo được.

**'Chúng tôi đã thử viết prompt và nó chững lại, nên cần huấn luyện.'** Đó là cách đọc đúng, và là trường hợp duy nhất mà việc leo thang được biện minh. Hãy đưa prompt đã tối ưu vào lần tinh chỉnh như nhóm tạo câu hỏi đã làm, và kỳ vọng mức tăng nhỏ hơn công việc prompt.

**'Tài liệu khóa học của chúng tôi không nhất quán, nên truy xuất sẽ trả về rác.'** Đúng, và truy xuất thừa hưởng chất lượng của kho ngữ liệu. Làm sạch kho ngữ liệu rẻ hơn huấn luyện một mô hình để lách nó, và mức tăng từ 52.3% lên 66.6% được đo trên tài liệu khóa học thông thường chứ không phải một tập đã được tuyển chọn.

## Việc cần làm trong tuần này

**1.** Chạy một đường cơ sở chỉ có prompt và một đường cơ sở từ khóa trên 50 câu hỏi thật từ khóa học của bạn, và ghi cả hai con số xuống.

**2.** Trỏ truy xuất vào những tài liệu bạn đã có và chạy lại cùng 50 câu hỏi đó, để mức tăng được đo so với đường cơ sở của chính bạn.

**3.** Đưa rubric vào prompt hệ thống và lặp trong một tuần. Dừng khi hai vòng không thêm gì.

**4.** Kiểm toán bộ huấn luyện của bạn để tìm các vết ở mức từng bước. Nếu nó là những cặp câu hỏi và đáp án, bộ dữ liệu chưa sẵn sàng.

**5.** Viết ra tính chất duy nhất bạn cần được giữ một cách đáng tin, và quyết định xem đó là hành vi hay nội dung. Quyết định đó chọn nấc.

## Đi tiếp từ đây

[[training-ai-tutors-to-guide-rather-than-answer|Làm sao huấn luyện một gia sư AI hướng dẫn sinh viên thay vì trả lời họ?]] bao quát nửa phần huấn luyện sau một cách chi tiết. [[checking-whether-educational-ai-works|Làm sao chúng ta biết một AI giáo dục đang hoạt động đúng?]] bao quát cách nhận ra liệu bất cứ điều nào ở trên có hiệu quả. [[developing-ai-tutor|Thực hành tốt nhất để phát triển một gia sư AI hiệu quả là gì?]] là phía thiết kế tương tác của cùng mục tiêu đó, và [[designing-educational-ai-software|Thực hành tốt nhất để thiết kế phần mềm AI giáo dục là gì?]] bao quát hệ thống xung quanh. Trang khái niệm đầy đủ là [[llm-training-and-fine-tuning|huấn luyện và tinh chỉnh LLM]].
