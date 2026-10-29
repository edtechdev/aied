---
title: "Làm thế nào để một sinh viên mô phỏng hành xử như một người học thật?"
created: "2026-10-02T08:36:18-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
updated: "2026-10-29T16:56:07-04:00"
translation_of: faqs/making-simulated-students-behave-like-learners
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

Bạn có một buổi trình diễn vào thứ Năm. Sinh viên mô phỏng trong đó làm sai một bài phân số, nhận một gợi ý, rồi đưa ra đáp án đúng với lời giải thích đúng. Có người trong phòng hỏi vì sao một người học đang gặp khó lại làm như vậy, và bạn không có câu trả lời.

Trước buổi trình diễn tiếp theo, bạn cần nắm chắc chừng này: giao cho một mô hình đóng vai sinh viên tạo ra âm thanh của một người học. Thứ tạo ra hành vi là một ràng buộc về những gì trình mô phỏng biết, cấu trúc trong các lượt trao đổi, và kiểm chứng với hồ sơ từ người học thật. Chỉ 3% nghiên cứu mô phỏng người học kiểm chứng trình mô phỏng của họ sau khi dùng, nên sẽ không ai kiểm tra việc này giúp bạn.

## Tóm tắt

**1.** Ghi ra những người học bạn không mô phỏng, và đặt câu đó ở nơi người dùng của bạn sẽ đọc.

**2.** Kiểm tra trạng thái niềm tin, không kiểm tra câu chữ. Hỏi xem trình mô phỏng nói gì sau một lần sửa.

**3.** Ràng buộc kiến thức một cách có chủ đích: nêu rõ trạng thái nhận thức, hoặc bỏ kiến thức đi.

**4.** Kịch bản hóa tương tác theo từng lượt. Một prompt nhân vật hay hơn không sửa được sự trôi dạt.

**5.** Cho điểm độ trung thực hành vi và độ đáp ứng với hướng dẫn riêng rẽ, đối chiếu với hồ sơ người học thật.

## Quyết định trình mô phỏng đang trả lời câu hỏi nào

Ba công việc bị gộp dưới cụm “sinh viên mô phỏng”, và chúng cần bộ máy khác nhau. Tập dượt cho một giáo viên hay một gia sư cần một người bạn đồng hành hành xử hợp lý dưới áp lực. Kiểm toán cách một AI đối xử với các hồ sơ người học khác nhau cần độ bao phủ các hồ sơ bạn quan tâm. Dự đoán kết quả cho một môn học cần một phân bố người học chứ không phải một cá nhân thuyết phục. Một trình mô phỏng xây cho công việc thứ nhất sẽ làm bạn thất vọng ở công việc thứ ba, và bằng chứng bên dưới liên tục tách chúng ra.

## Nêu tên những người học bạn không bao phủ

Phát hiện hữu ích nhất cho bất cứ ai sắp tin một trình mô phỏng là về độ bao phủ. Mười hai giáo viên dạy kèm cho sinh viên LLM báo cáo ngôn ngữ quá phức tạp, thiếu cảm xúc, sự chú ý không tự nhiên, và những bước nhảy kiến thức không giải thích được, và các mô phỏng chỉ đại diện cho một trong bốn góc phần tư hành vi người học thật ([[llm-student-simulation-teacher-insights|Martynova và cộng sự, 2026]]). Góc phần tư họ bao phủ là góc dễ mô phỏng nhất.

Điều đó quan trọng vì gần như không ai kiểm tra. Chỉ 3% nghiên cứu mô phỏng người học kiểm chứng trình mô phỏng của họ sau khi dùng. Nếu bạn xây một cái và bỏ qua kiểm chứng, bạn ở trong nhóm đa số áp đảo, và bạn cũng là lý do con số thống kê đó vẫn còn đáng trích dẫn.

## Ràng buộc những gì trình mô phỏng biết

Một mô hình có năng lực không dễ giả làm người biết một phần. Nghiên cứu gọi đây là **nghịch lý năng lực**: các mô hình có năng lực rộng được yêu cầu mô phỏng người học chỉ biết một phần tạo ra những mẫu lỗi và động lực học tập không thực tế.

Sự trôi dạt có hướng, và nó chỉ đúng vào những người học cần mô phỏng nhất. Đối chiếu với ý tưởng của học sinh lấy từ 49 bài học khoa học theo chuẩn NGSS, sáu mô hình giữ phần lớn ý tưởng trong phạm vi kiến thức kỳ vọng và khoảng hai phần ba ở mức đọc bằng hoặc dưới mức mục tiêu, rồi vượt quá đúng ở chỗ người học trẻ nhất. Ý tưởng ở tiểu học và trung học cơ sở thường vượt phạm vi kiến thức và mức đọc của lớp mục tiêu hơn, và kho ngữ liệu nghiêng về lập luận rộng hơn, từ vựng kỹ thuật nhiều hơn, và ít dấu hiệu không chắc chắn hơn (“có lẽ”, “có vẻ”) so với ý tưởng bài học thật ([[llm-simulating-student-scientific-thinking-2026|Nguyen và Cao, 2026]]).

Hai ghi chú từ nghiên cứu đó. Việc chọn mô hình không phải một chiều, vì một hệ thống khớp sát ý tưởng bài học vẫn có thể đặt chúng cao hơn lớp. Và cách sửa thường mang tính chỉ dẫn: một prompt nêu lại rõ mức lớp đã đưa phần lớn mô hình trở về trong phạm vi.

## Nêu rõ trạng thái, hoặc lấy kiến thức đi

Nếu mô hình biết quá nhiều, bạn có thể nêu trạng thái mà nó nên ở, hoặc trừ đi kiến thức mà nó không nên có.

**Đặt điều kiện theo một trạng thái nhận thức.** Một khung không cần huấn luyện xây nguyên mẫu nhận thức của từng sinh viên từ một [[knowledge-graph|đồ thị tri thức]] và cho điểm các ứng viên tìm kiếm chùm đối chiếu với nó, báo cáo mức cải thiện 100% về độ chính xác mô phỏng ([[simulating-students-diverse-cognitive-levels-2025|Wu và cộng sự, 2025]]). Chất lượng của nó tăng theo mức nhận thức của sinh viên, nên người học yếu hơn vẫn là ca khó hơn, điều này đáng tiếc vì họ thường chính là mục đích. Mô hình hóa động lực nhận thức thay vì một nhân vật tĩnh đi xa hơn: các cập nhật trạng thái dựa trên ICAP của CogEvolution đạt R²LC = 0.92 trong khi tác nhân tĩnh đạt 0.45, và sụt xuống 0.58 khi không có mô-đun ICAP của nó ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang và cộng sự, 2026]]).

**Bỏ kiến thức đi.** Việc ức chế 16 thành phần kiến thức được nhắm tới trong Mistral-7B làm độ chính xác giảm từ khoảng 0.75 ở tỷ lệ quên 10% xuống dưới 0.5 ở 40%, trong khi mô hình gốc giữ gần 0.85. Kiến thức bị ức chế hóa ra có thể phục hồi qua học lại có giám sát và đối thoại có người hướng dẫn ([[simulating-novice-students-machine-unlearning-2026|Song, Guo và Lin, 2026]]). Đây là thứ gần nhất với việc trực tiếp chế tạo một người mới học, và khả năng phục hồi trở thành một điểm cộng nếu bạn muốn trình mô phỏng học trong một phiên.

## Kịch bản hóa các lượt, không phải nhân vật

Độ ổn định của nhân vật hóa ra là một bài toán thiết kế tương tác chứ không phải bài toán chọn mô hình. Kết hợp năm LLM với ba thiết kế prompt và bốn nhân vật có cường độ ADHD, các tương tác có kịch bản neo vào nhiệm vụ loại bỏ được sự trôi dạt hành vi do người quan sát đánh giá, tới 97% so với đối thoại không kịch bản. Không có chỉ dẫn nhân vật rõ ràng, hình đại diện sinh viên mặc định nghiêng về triệu chứng ADHD cao ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase và Leins, 2026]]).

Nếu trình mô phỏng của bạn trôi dạt, hãy xem điều bạn yêu cầu nó làm theo từng lượt trước khi đổi mô hình hay viết lại phần mô tả sinh viên.

## Cho điểm hai thứ, không phải một

StudentSim đòi hỏi hai thuộc tính phải cùng đứng vững: **độ trung thực hành vi**, tức mức trình mô phỏng khớp với phản hồi của chính một sinh viên, và **độ đáp ứng với hướng dẫn**, tức mức nó cập nhật một cách đáng tin cậy về phía mà hướng dẫn của gia sư dẫn tới. Bộ đánh giá của nó đưa các kho ngữ liệu người học công khai (cờ vua, viết tiếng Anh như ngôn ngữ thứ hai, toán) thành một giao thức cho từng sinh viên, trên đó bất kỳ trình mô phỏng nào cũng được khớp và cho điểm trên hồ sơ giữ lại. Theo dõi trạng thái theo lĩnh vực tỏ ra yếu ở độ đáp ứng, và nhập vai LLM chỉ bằng prompt tỏ ra yếu ở độ trung thực ([[studentsim-llm-student-simulators|Yang và cộng sự, 2026]]). Một trình mô phỏng có thể qua một bài kiểm tra và trượt bài kia, nên hãy báo cáo cả hai.

Như một chứng minh khái niệm, một StudentSim đóng băng được dùng làm phần thưởng trong một vòng [[reinforcement-learning|học tăng cường]] cho gia sư cờ vua tạo ra những gia sư được chuyên gia đánh giá là chính xác hơn, dẫn dắt tốt hơn và cá nhân hóa hơn so với những gia sư huấn luyện với phần thưởng từ trình mô phỏng LLM tiên tiến hoặc không có học tăng cường. Một trình mô phỏng tốt có thể vừa là tín hiệu huấn luyện vừa là phép đo.

Độ trung thực ở mức hành động có giới hạn riêng. Các trình mô phỏng sinh viên tái tạo hành động quan sát được mà không có lập luận ẩn phía sau, và [[inside-llm-student-simulator-reasoning-2026|INSIDE]] tinh chỉnh mô hình để tạo một đoạn đối thoại nội tâm trước mỗi hành động, đạt mức khớp cao nhất giữa lập luận được tạo và các chỉnh sửa mã thật là 51.8% ở bài toán quen và 57.9% ở bài toán chưa gặp, mà không mất độ trung thực hành động (Niousha và cộng sự, 2026). Nếu bạn quan tâm vì sao sinh viên mô phỏng của bạn làm một việc gì đó, khớp hành động là không đủ.

## Kiểm chứng với người học thật và báo cáo mức nền

Hai so sánh cho thấy kiểm chứng tốn gì.

Đánh giá chín phương pháp mô phỏng theo bảy chỉ số dựa trên tham chiếu trên 382 đoạn đối thoại giữ lại từ kho ngữ liệu công khai lớn nhất các đối thoại toán thật giữa sinh viên và gia sư, phương pháp prompt kém hơn tinh chỉnh ở hành động đối thoại (0.4998 so với 0.6840), ROUGE-L (0.1648 so với 0.3212) và độ tương đồng cosine (0.5460 so với 0.7390). Phương pháp tốt nhất được thử, tối ưu hóa sở thích trên một mô hình 8B, chỉ vượt tinh chỉnh có giám sát một cách không đáng kể và kém hơn ở lỗi, và một đánh giá của con người với ba gia sư tái tạo lại thứ hạng đó ([[simulated-students-tutoring-dialogues-2026|Scarlatos và cộng sự, 2026]]). Đỉnh của cái thang này nằm gần mức giữa, nên mức nền bạn báo cáo quyết định con số của chính bạn trông ấn tượng đến đâu.

SWIM là so sánh rõ nhất giữa prompt, tinh chỉnh và học tăng cường, vì nó cho điểm từng bài luận được tạo đối chiếu với một hồ sơ đặc điểm mục tiêu thay vì đánh giá theo cảm nhận. Prompt có neo theo thang đánh giá chỉ cho quyền kiểm soát hạn chế ngay cả với các mô hình độc quyền mạnh, với QWK đặc điểm trung bình tốt nhất là 0.577 (Claude Sonnet) và 0.422 (GPT-5.4), và gần bằng không với một mô hình mở 7B. Tinh chỉnh có giám sát trên các cặp bài luận và điểm thật đạt 0.474 ± 0.023 cho mô hình 7B đó. GRPO với phần thưởng dẫn xuất từ chấm bài luận tự động đạt 0.618 ± 0.005, với mức tăng vẫn giữ trên hai người chấm độc lập mà chính sách chưa bao giờ huấn luyện đối chiếu ([[swim-student-writing-simulation-2026]]).

Prompt cũng tạo ra một quần thể lý tưởng hóa chứ không phải một quần thể thực tế: điểm tổng thể chuẩn hóa trung bình 0.74 so với 0.58 của sinh viên thật, và độ dài trung vị 304 từ so với 167. Các mô hình được huấn luyện khôi phục được phân bố điểm và độ dài của con người mà không cần giám sát độ dài. Một thứ vẫn khó: hình thức yếu năng lực thật. Các mô hình được huấn luyện khôi phục được cú pháp nhưng viết quá ít lỗi chính tả và ngữ pháp, trong khi prompt mô phỏng sự yếu kém bằng cách làm hỏng bề mặt, rắc lỗi chính tả lên những đoạn văn vốn đã thành thạo.

Độ chân thực bề mặt là một bài kiểm tra yếu ở cả hai chiều. Trong một nghiên cứu mù, các chuyên gia gán nhãn phân loại sai 164 trong 196 (83.7%) bài nộp Java do LLM tạo là do người viết, vì các lỗi không phân biệt được về chức năng với lỗi thật, và mức khớp với lỗi thật sau đó giảm khi độ khó bài toán tăng ([[simulating-students-java-programming-errors-llms|Keramati và cộng sự, 2026]]). Trên bảy mô hình từ 4B đến 120B tham số, các trình mô phỏng chuyển sang đáp án đúng với tỷ lệ gần như đồng đều bất kể nhận phản hồi nào, nên độ giống nhau của đầu ra không nói gì về trạng thái niềm tin phía sau. Huấn luyện theo **Selective Flip Score** nâng độ trung thực lên tới +0.56 ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar và Sachan, 2026]]).

## Kiểm tra xem một bản mô tả có đủ không

Trước khi bạn xây một nhóm, hãy kiểm tra phương án rẻ hơn. Để đánh giá một trải nghiệm học trực tuyến trước khi sinh viên tham gia, dự đoán bỏ học và hoàn thành, và đưa phản hồi thiết kế, một tác nhân web “mô tả” duy nhất đi qua bài học và tạo ra một bản mô tả phong phú về trải nghiệm đó vượt trội hơn việc mô phỏng trực tiếp một quần thể sinh viên.

Các sinh viên mô phỏng trong so sánh đó cho thấy phạm vi hành vi ít hơn nhiều so với người học thật: trên 100 tác nhân với năm bài học thử, chúng tái tạo chỉ khoảng 4% các đường đi mà sinh viên thật đã đi, trong khi tốn nhiều tính toán hơn đáng kể. Quy trình mô tả rồi dự đoán đạt dự đoán phân bố bỏ học tốt nhất trên một môn CS1 toàn cầu quy mô lớn, với JSD trung bình 0.060 ([[ai-web-agents-lesson-design-2025|Wang, Mitchell và Piech, 2025]]).

Ranh giới nó vạch ra là thực dụng. Mô phỏng một phân bố sinh viên có thể là không cần thiết, hoặc phản tác dụng, khi mục tiêu là dự đoán kết quả hay phê bình thiết kế. Mô phỏng xứng đáng với chi phí khi việc bao phủ sự khác biệt thật của người học là quan trọng, chẳng hạn kiểm toán cách một AI đối xử với các hồ sơ đa dạng hoặc cho một giáo viên thứ để tập dượt.

## Nhà phát triển hiểu sai gì về điều này

Độ chân thực bề mặt là mục tiêu. Tỷ lệ phân loại sai 83.7% với mã do máy viết và việc đổi đáp án gần như đồng đều trên bảy mô hình đều nói rằng một người chấm đọc đầu ra không thấy được thuộc tính bạn đang khẳng định. Hãy kiểm tra phản ứng với một lần sửa thay vào đó.

Một prompt nhân vật hay hơn sửa được sự trôi dạt. Các lượt có kịch bản neo vào nhiệm vụ cắt được sự trôi dạt do người quan sát đánh giá tới 97% trên năm mô hình và ba thiết kế prompt. Thiết kế của các lượt đã làm việc đó.

Một mô hình nền mạnh hơn lấp được khoảng cách năng lực. Một mô hình độc quyền mạnh đạt 0.422 về QWK đặc điểm khi dùng prompt trong khi một mô hình 7B được tinh chỉnh đạt 0.474, và cùng so sánh sáu mô hình đó vượt quá xa nhất ở các mức lớp trẻ nhất. Việc chọn mô hình đánh đổi chiều trung thực này lấy chiều trung thực khác.

Kiểm chứng nghĩa là một đồng nghiệp đọc bản ghi và thấy nó nghe có vẻ đúng. Kết quả Java cho thấy phán đoán đó đi được bao xa. Kiểm chứng nghĩa là hồ sơ giữ lại từ người học thật và một mức nền bạn gọi được tên.

Mô phỏng một quần thể là phương án kỹ lưỡng. Trên 100 tác nhân, các mô phỏng bao phủ khoảng 4% các đường đi mà sinh viên thật đã đi, với chi phí tính toán cao hơn đáng kể so với tác nhân mô tả.

## Những gì sẽ quay lại với bạn

**“Giáo viên không phân biệt được trình mô phỏng của chúng tôi với một sinh viên.”** Trong nghiên cứu Java mù, các chuyên gia gán nhãn phân loại sai 83.7% bài nộp do máy tạo là do người viết. Điều đó đo người gán nhãn, và nó để trạng thái niềm tin không được xem xét.

**“Tinh chỉnh nằm ngoài phạm vi của nhóm chúng tôi.”** Vậy hãy giới hạn khẳng định vào những gì prompt đỡ được, và nói như vậy. Prompt đặt trần 0.577 cho mô hình mạnh nhất được thử và gần bằng không cho một mô hình mở 7B, và nó tạo ra một phân bố điểm lý tưởng hóa.

**“Chúng tôi không có quyền truy cập dữ liệu người học thật.”** Giao thức của StudentSim được xây từ các kho ngữ liệu người học công khai về cờ vua, viết bằng ngôn ngữ thứ hai và toán. Dữ liệu công khai giới hạn những gì bạn khẳng định được về quần thể của chính mình, và nó cho bạn một mức nền, thứ mà phần lớn báo cáo bỏ qua.

**“GRPO vượt tinh chỉnh có giám sát, nên chúng ta nên huấn luyện bằng học tăng cường.”** Nó đã vượt, với 0.618 so với 0.474. Hình thức yếu năng lực vẫn khó trong cả hai trường hợp, với quá ít lỗi chính tả và ngữ pháp, và trong một bộ đánh giá riêng, tối ưu hóa sở thích chỉ vượt tinh chỉnh một cách không đáng kể và thua ở lỗi. Hãy kiểm tra trường hợp dùng của bạn phụ thuộc vào thuộc tính nào.

**“Người học yếu nhất là một phần nhỏ người dùng của chúng tôi.”** Họ là ca khó nhất với mọi phương pháp trên trang này, và phát hiện về độ bao phủ nói rằng các mô phỏng tập trung ở góc phần tư dễ nhất. Nếu trình mô phỏng của bạn sẽ được dùng để rút ra kết luận về sinh viên đang gặp khó, khoảng trống đó thuộc về phần báo cáo.

## Việc cần làm trong tuần này

**1.** Viết câu về độ bao phủ: trình mô phỏng này không đại diện cho những người học nào. Đặt nó vào README và ghi chú buổi trình diễn.

**2.** Thêm một phép thử vào bộ kiểm thử của bạn, sửa trình mô phỏng và kiểm tra xem nó có giữ nguyên cái sai hay không.

**3.** Thay đoạn chat nhân vật tự do trong một luồng bằng các lượt neo vào nhiệm vụ, và so sánh mức trôi dạt.

**4.** Cho điểm một trình mô phỏng hiện có đối chiếu với hồ sơ thật giữ lại trên cả độ trung thực và độ đáp ứng, và báo cáo hai con số riêng rẽ.

**5.** Chạy phép kiểm tra tác nhân mô tả trên đúng câu hỏi bạn thật sự cần trả lời trước khi cấp kinh phí cho một nhóm.

## Đi tiếp từ đây

[[simulating-students|sinh viên mô phỏng]] là trang khái niệm đầy đủ. [[checking-whether-educational-ai-works|kiểm tra xem AI giáo dục có hiệu quả không]] bao quát việc đánh giá các hệ thống mà bạn kiểm thử đối chiếu với một trình mô phỏng, và [[making-ai-better-at-supporting-learning|làm cho AI hỗ trợ việc học tốt hơn]] bao quát các phương pháp huấn luyện phía sau những kết quả tinh chỉnh ở đây. [[addressing-common-misconceptions-ai-education|giải quyết những hiểu lầm phổ biến về AI trong giáo dục]] tiếp nhận câu hỏi liệu sinh viên mô phỏng có thể thay cho người học thật trong nghiên cứu hay không.
