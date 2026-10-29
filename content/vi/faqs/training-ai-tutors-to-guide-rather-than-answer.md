---
title: "Làm sao huấn luyện một gia sư AI để hướng dẫn sinh viên thay vì trả lời họ?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
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

Gia sư của bạn để lộ đáp án. Buổi trình diễn không cho thấy điều đó, vì câu hỏi dễ và sinh viên hợp tác. Nhưng nhật ký của đợt thử nghiệm thì có: sinh viên hỏi hai lần, mô hình nhắc lại phương pháp, rồi giải luôn. Một giáo viên xem một phiên và nói đó chỉ là chatbot với giọng thân thiện. Giờ bạn đang cân nhắc xem có nên dành một phần tư thời gian kỹ thuật cho huấn luyện sau hay phát hành với một system prompt tốt hơn.

Câu trả lời ngắn: việc viết prompt không gỡ được lực kéo về phía trả lời, vì sự hay giúp đỡ chính là thứ mô hình gốc được huấn luyện để tạo ra. Nếu hành vi hướng dẫn là sản phẩm, thì nó phải được huấn luyện, và biến quyết định kết quả là **phần thưởng**. Hãy viết phần thưởng dựa trên một bộ đánh giá chuẩn, đưa lập luận ở cấp từng bước vào dữ liệu huấn luyện, và đánh giá việc huấn luyện bằng bước sư phạm tiếp theo mà mô hình chọn.

## Tóm tắt

**1.** Hãy kiểm tra xem prompt có chịu được áp lực hay không trước khi kết luận rằng viết prompt là đủ. Đồng ý với một sinh viên sai là kiểu thất bại cần tìm.

**2.** Viết phần thưởng như một bản đặc tả hành vi bạn muốn, có loại trừ các mẫu âm khó, rồi kiểm tra xem nó thực sự tối ưu hóa cái gì.

**3.** Huấn luyện trên dấu vết ở cấp từng bước. Một tập dữ liệu gồm cặp câu hỏi và đáp án đúng không thể dạy mô hình nhìn ra chỗ sinh viên sai.

**4.** Ưu tiên học tăng cường hơn bắt chước khi phán đoán là thứ quan trọng, và giữ lại điểm của các giai đoạn trung gian.

**5.** Làm cho phần thưởng đủ dày để có tác dụng trên phần lớn phản hồi, và chạy đánh giá trên toàn bộ cuộc hội thoại.

## Tìm xem prompt có chịu được áp lực hay không

[[prompt-engineering|Việc viết prompt]] và huấn luyện căn chỉnh tổng quát vẫn để lại một lực kéo về phía đồng ý. [[contextual-sycophancy-ai-literacy|Sự nịnh bợ theo ngữ cảnh]] vẫn tồn tại sau cả hai, với lỗi của người học vẫn lan vào lời khuyên của AI.

EduFrameTrap bổ sung chi tiết quan trọng cho một quyết định sản phẩm. Những mô hình chịu được các đòn tấn công chuyển ngữ cảnh vẫn đầu hàng trước áp lực thẩm quyền hoặc áp lực cảm xúc xã hội và giữ lại phản hồi sửa sai, đó là lý do các tác giả của nó lập luận rằng hành vi “tử tế nhưng đúng” nên là một **yêu cầu huấn luyện tường minh** chứ không phải một tùy chọn ([[eduframetrap-llm-sycophancy-educational-safety]]).

Nếu thất bại của gia sư bạn là đồng ý với một câu trả lời sai, thì việc viết prompt để nó không đồng ý là một biện pháp giảm nhẹ. Hãy chạy bài kiểm tra áp lực trước, ghi lại chỗ nó vỡ, và dùng bản ghi đó làm lập luận cho ngân sách huấn luyện.

## Viết phần thưởng trước khi thu thập dữ liệu

Phần thưởng là một bản đặc tả nén về điều bạn muốn, và mô hình sẽ tối ưu hóa đúng những gì bạn thực sự viết ra. Điều đó khiến thiết kế phần thưởng trở thành quyết định đặt trần cho mọi thứ phía sau.

Mô hình phần thưởng của EduQwen **ưu tiên phản hồi hướng dẫn hơn đáp án trực tiếp**, với việc khai thác mẫu âm khó để loại các câu hỏi mà mô hình gốc đã giải được, và các lượt rollout được kéo dài từ 5 lên 8 bước để bắt được những quyết định sư phạm nhiều bước. Quy trình ba giai đoạn của nó, RL ban đầu rồi SFT tổng hợp rồi một vòng RL cuối, đạt **96.52%** trên bộ đánh giá chuẩn CDPK so với **90.55%** của Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Hai điều suy ra từ đó. Hãy lường trước rằng phần thưởng sẽ bị lách, vì nó đặc tả ít hơn điều bạn muốn, nên hãy viết nó dựa trên một bộ đánh giá chuẩn chứ không dựa trên cảm tính. Và hãy giữ các con số trung gian: riêng giai đoạn RL đầu đã đạt 94.13%, SFT trên 40,000 phản hồi tự sinh đưa lên 96.20%, và vòng cuối thêm phần nhỏ còn lại. Phần lớn mức tăng đến sớm, điều hữu ích khi có ai hỏi liệu giai đoạn cuối có đáng chi phí của nó.

## Làm cho phần thưởng có tác dụng đủ thường xuyên để dạy được

Một phần thưởng khớp chính xác là quá thưa khi thứ bạn quan tâm có nhiều chiều. Trình mô phỏng viết của SWIM cho thấy tiến trình này rõ ràng: viết prompt dựa trên rubric đạt QWK trung bình tốt nhất cho từng đặc trưng là **0.577** với Claude Sonnet và **0.422** với GPT-5.4, gần bằng không với một mô hình mở 7B; tinh chỉnh có giám sát đạt **0.474 ± 0.023** cho mô hình 7B đó; GRPO với một phần thưởng độ chính xác dày và được chuẩn hóa theo đặc trưng đạt **0.618 ± 0.005** trên mọi đặc trưng và mọi prompt ([[swim-student-writing-simulation-2026]]).

Thiết kế phần thưởng tạo ra khoảng cách đó. Một tín hiệu dày được chuẩn hóa theo đặc trưng thắng khớp chính xác trong bối cảnh nhiều đặc trưng, và nếu phần thưởng của bạn chỉ có tác dụng trên một phản hồi hoàn hảo thì phần lớn tín hiệu huấn luyện của bạn là im lặng.

## Đặt lập luận vào trong các ví dụ

Phát hiện dễ hành động nhất trong lĩnh vực này liên quan tới việc dữ liệu huấn luyện phải chứa gì. Các mô hình đã tinh chỉnh theo chỉ dẫn chỉ học được những hiểu sai về đại số khi được huấn luyện trên **dấu vết lời giải ở cấp từng bước**. Khi chỉ huấn luyện trên đáp án cuối, độ chính xác vẫn **dưới 30% ở mọi kích thước dữ liệu** ([[misconception-acquisition-dynamics-llms-2026]]).

Hai chi tiết từ nghiên cứu đó quan trọng với bất kỳ ai xây một trong hai phía của một gia sư. Vai sinh viên tổng quát hóa quá mức lỗi đã học cho tới khi các ví dụ đúng được trộn vào với tỉ lệ thấp tới **một phần tư**. Vai gia sư không cho thấy cái giá đó, giữ độ chính xác đúng trong khoảng **93% đến 98%** qua mười hiểu sai được huấn luyện đồng thời.

Một tập dữ liệu gồm các cặp câu hỏi và đáp án đúng không thể dạy mô hình nhận ra chỗ sinh viên sai. Nếu bạn huấn luyện một gia sư để chẩn đoán, thì các ví dụ cần có lập luận.

## Chọn tín hiệu huấn luyện khớp với phán đoán

Tinh chỉnh có giám sát dạy mô hình bắt chước các minh họa của bạn. Thế là đủ cho định dạng và không đủ cho phán đoán. LearnLM nói rõ phát hiện này: **RL hiệu quả hơn đáng kể so với chỉ dùng SFT trong việc tuân theo các chỉ dẫn sư phạm tinh tế trong những cuộc hội thoại dài** ([[learnlm-improving-gemini-learning]]).

Cách đóng khung theo điều kiện chỉ dẫn của nó cho phép nhà phát triển và giáo viên chỉ định hành vi gia sư mà không phải cam kết một định nghĩa duy nhất về sư phạm, và việc huấn luyện đồng thời trộn nó vào các giai đoạn huấn luyện sau của Gemini. Các chuyên gia thích nó hơn GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) và Gemini 1.5 Pro gốc (**+13%**).

Cách đọc thực tế: nếu thất bại của bạn là sai giọng điệu hoặc thiếu định dạng, SFT là con đường rẻ. Nếu thất bại của bạn là chọn sai bước sư phạm ở lượt thứ mười hai, thì tín hiệu phải thưởng cho chính lựa chọn đó.

## Gán nhãn cho mỗi ví dụ theo hành vi nó dạy

Nếu phần giám sát phải chứa lập luận, thì cách gán nhãn là một quyết định về chương trình học. Một nghiên cứu về nhãn giám sát thấy rằng việc gán cho mỗi ví dụ huấn luyện một hành vi đích, trong số năng lực môn học, bám sát chương trình, lập luận chẩn đoán và giàn giáo, đã nâng điểm ở mọi kích thước mô hình được thử, với mức tăng lớn nhất ở giàn giáo và ở việc sử dụng lịch sử của người học. Chẩn đoán trạng thái kiến thức vẫn là hành vi yếu nhất ở **54.04%** ([[omniedu-open-educational-foundation-models-2026]]). Chẩn đoán là mục khó nhất trong danh sách đó, nên hãy dự trù cho nó.

Chọn dữ liệu là một bài toán huấn luyện riêng. Edu-QuRating chuyển thể việc chưng cất sở thích sang việc tuyển chọn dữ liệu giáo dục, thay một điểm số duy nhất kiểu “cái này có tính giáo dục không?” bằng **20 chiều rubric** bao quát độ chính xác thực tế, cấu trúc sư phạm và mức phù hợp với trình độ ([[garrod-edu-qurating-educational-data-curation-2026]]). Nếu bạn đang lắp một tập dữ liệu từ văn bản trên web, bộ lọc đó quyết định mô hình của bạn học cách nghe như thế nào.

## Chọn canh bạc dữ liệu bạn đủ sức

Hai canh bạc ngược nhau định nghĩa không gian này, và việc bạn chọn cái nào phụ thuộc vào thứ bạn đã có.

Khi dữ liệu của bạn khan hiếm, huấn luyện sau theo điều kiện chỉ dẫn mang hành vi. LearnLM dùng các chỉ dẫn ở cấp hệ thống để giáo viên và nhà phát triển chỉ định hành vi gia sư, và dựa vào huấn luyện đồng thời thay vì một tập lớn bản ghi gia sư.

Khi bạn có dữ liệu tương tác thật, tinh chỉnh trên đó sẽ thắng. TeachLM đặt cược rằng [[prompt-engineering|viết prompt]] chỉ là giải pháp tạm và nguyên liệu khan hiếm là tương tác thật giữa người học và gia sư. Được huấn luyện trên **100,000 giờ** các phiên một-một với việc ẩn danh hóa nghiêm ngặt, nó nhân đôi thời gian sinh viên nói, cải thiện phong cách đặt câu hỏi, và tăng số lượt đối thoại thêm **50%** ([[teachlm-post-training-llms-education]]).

Một con đường rẻ hơn là chưng cất. Pedagogy-R1, ở 1.5B và 7B, được tinh chỉnh theo chỉ dẫn trên các đầu ra đã qua lọc sư phạm, chưng cất từ một giáo viên QwQ-32B, đi kèm cách nhắc Chuỗi Sư phạm ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Huấn luyện đúng quyết định mà sinh viên gặp tiếp theo

Huấn luyện sau không nhất thiết chỉ định hình điều mô hình nói. TACT huấn luyện sau một gia sư trên một hệ phân loại 13 chiến lược cộng với một hệ phân loại nước đi của sinh viên theo hai trục và giành được **20.30 điểm** so với mô hình nền Qwen3.5-4B của nó, với một bộ đánh giá chuẩn chẩn đoán **giữ lại các nhãn trạng thái người học** vốn có trong lúc huấn luyện để mô hình phải suy ra trạng thái từ cuộc đối thoại ([[tact-pedagogically-adaptive-esl-tutoring]]).

Cùng logic đó chạy qua việc căn chỉnh cho [[special-education|giáo dục đặc biệt]] ([[special-r1-rl-special-education]]) và qua công trình RL theo heuristic, vốn căn chỉnh mô hình thành những người dẫn dắt kiểu Socrates thay vì những người trả lời ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Một nền tảng đi xa hơn và huấn luyện chính chính sách chứ không phải văn bản: một tác nhân học tăng cường chọn bài luyện tập tiếp theo, nên điều người học làm tiếp theo do mô hình đã huấn luyện quyết định ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Trường hợp cuối đó là phép thử xem bạn đã thiết kế một gia sư hay một máy sinh văn bản. Nếu đầu ra duy nhất của mô hình là văn xuôi, thì sư phạm nằm trong mã điều phối của bạn. Nếu mô hình chọn nhiệm vụ tiếp theo, thì sư phạm nằm trong trọng số.

## Kiểm tra ở độ dài một cuộc hội thoại

Huấn luyện không làm cho một mô hình an toàn qua một cuộc hội thoại dài. SafeTutors cho thấy ngay cả những mô hình sư phạm chuyên biệt cũng suy giảm qua đối thoại kéo dài và có thể gây tổn hại kiểu để lộ đáp án quá mức ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|An toàn sư phạm]] phải được đo ở độ dài một cuộc hội thoại, gồm cả những lượt mà sinh viên sai, kiên quyết hoặc gây sức ép.

## Những gì đội huấn luyện hiểu sai

Viết prompt nhiều hơn rồi sẽ đủ. Sự nịnh bợ vẫn tồn tại sau khi viết prompt và căn chỉnh, và áp lực thẩm quyền mở lại hành vi mà một bài kiểm tra chuyển ngữ cảnh đã đóng lại. Bản ghi từ chính bài kiểm tra áp lực của bạn là bằng chứng cho điều này trong sản phẩm của bạn.

Con số trên bảng xếp hạng là kết quả. 96.52% trên CDPK mô tả hiệu suất trên các nhiệm vụ sư phạm của một bộ đánh giá chuẩn. Sinh viên của bạn gặp chương trình của bạn, ký hiệu của bạn, và một sinh viên đã tắc hai mươi phút.

Nhiều dữ liệu hơn là câu trả lời khi dấu vết còn mỏng. Đáp án cuối ở mọi kích thước dữ liệu vẫn giữ độ chính xác về hiểu sai dưới 30%. Thứ làm thay đổi kết quả là lập luận ở cấp từng bước trong các ví dụ; kích thước tập dữ liệu không bao giờ làm nó nhúc nhích.

Vai sinh viên là phần khó, nên huấn luyện nó sau cùng. Vai sinh viên tổng quát hóa quá mức các lỗi đã học cho tới khi các ví dụ đúng xuất hiện với tỉ lệ một phần tư. Vai gia sư giữ được 93% đến 98% trong cùng điều kiện, điều gợi ý rằng gia sư là nửa dễ huấn luyện hơn và trình mô phỏng là thứ cần kiểm tra.

Điểm kiểm tra cuối là kết quả. Giai đoạn RL đầu đạt 94.13% và SFT đưa lên 96.20%, nên phần lớn chuyển động đã xảy ra trước vòng cuối. Hãy giữ điểm của từng giai đoạn; chúng cho biết giai đoạn nào giành được mức tăng và giai đoạn nào bạn có thể cắt lần sau.

## Những gì sẽ quay lại với bạn

**“Chúng tôi không đủ tiền cho RL.”** Vậy hãy bắt đầu bằng những phần không tốn gì: dấu vết ở cấp từng bước trong dữ liệu của bạn, một nhãn hành vi đích cho mỗi ví dụ, và một phần thưởng bạn đã viết thành lời trước khi viết thành mã. So sánh của SWIM cho thấy chỉ SFT đã đưa một mô hình 7B lên 0.474, đó là một mức tăng thật và vẫn còn kém 0.618.

**“Mô hình của nhà cung cấp chúng tôi vốn đã từ chối đưa đáp án.”** Huấn luyện sau của nhà cung cấp tối ưu hóa sự hay giúp đỡ, và việc từ chối trả lời không phải là thứ điểm số về sự hay giúp đỡ thưởng cho. Hãy kiểm tra hành vi đó trong chính các cuộc hội thoại của bạn; câu trả lời nằm trong bản ghi, không nằm trong thẻ mô hình.

**“Chưng cất đưa chúng tôi đi được phần lớn chặng đường.”** Pedagogy-R1 là một bản chưng cất 1.5B và 7B và nó là một điểm khởi đầu hợp lý. Thứ nó thừa hưởng là sư phạm của giáo viên, gồm cả những gì giáo viên đó làm sai, và bạn sẽ cần một bộ đánh giá chuẩn để xem phần nào đã chuyển sang.

**“Kiểm tra hội thoại dài quá tốn kém để chạy thường xuyên.”** Hãy chạy nó một lần mỗi khi mô hình thay đổi, với một kịch bản cố định và một tập lượt đối kháng cố định, rồi so sánh các bản ghi. Chi phí nằm ở việc viết kịch bản lần đầu.

**“Giáo viên nói nó có cảm giác như một chatbot.”** Đó là một báo cáo về hình dạng của cuộc hội thoại, và hình dạng cuộc hội thoại là một chính sách. Hãy đếm xem bao nhiêu lượt trôi qua trước khi mô hình trao một bước cho sinh viên.

## Việc cần làm trong tuần này

**1.** Chạy bài kiểm tra áp lực: câu trả lời sai, sinh viên khăng khăng, sinh viên dẫn thẩm quyền, sinh viên đòi đáp án. Lưu bản ghi lại.

**2.** Viết phần thưởng của bạn thành ba câu tiếng Việt, rồi kiểm tra xem mã của bạn có đo đúng ba điều đó không.

**3.** Rà một mẫu các ví dụ huấn luyện của bạn để tìm lập luận ở cấp từng bước. Báo cáo tỉ lệ có chứa một bước sai và chẩn đoán về bước đó.

**4.** Thêm một nhãn hành vi đích cho mỗi ví dụ, bắt đầu bằng giàn giáo, và ghi lại phân bố.

**5.** Đưa điểm của các giai đoạn trung gian vào thẻ mô hình, bên cạnh điểm cuối.

## Đi tiếp từ đây

[[making-ai-better-at-supporting-learning|Làm sao để AI hỗ trợ việc học trong chính bộ môn của chúng ta tốt hơn?]] hỏi liệu huấn luyện có phải là đòn bẩy đúng hay không, và [[developing-ai-tutor]] trình bày phần đối ứng về thiết kế tương tác, vốn tạo ra cùng hành vi hướng dẫn bằng giàn giáo và những bậc gợi ý thay vì bằng gradient. [[checking-whether-educational-ai-works]] trình bày cách đo xem hành vi có thực sự thay đổi hay không, và [[llm-training-and-fine-tuning]] là trang khái niệm đứng sau tất cả những điều này.
