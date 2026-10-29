---
title: Thiết kế học tập
created: "2026-10-27T17:23:20-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:23:20-04:00"
translation_note: "*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

> **Thiết kế học tập** (còn được gọi là *thiết kế giảng dạy*): quá trình có hệ thống nhằm tạo ra những trải nghiệm học tập hiệu quả thông qua việc phân tích nhu cầu học tập và việc thiết kế, phát triển, triển khai và đánh giá tài liệu cùng các hoạt động giảng dạy. AI đang biến đổi thiết kế học tập bằng cách tự động hóa việc tạo nội dung, cho phép các lộ trình [[adaptive-learning|học tập thích ứng]], hỗ trợ việc lặp lại dựa trên dữ liệu, và tăng cường chứ không thay thế vai trò của nhà thiết kế giảng dạy.

## Những câu hỏi cần cân nhắc

- Hãy nghĩ về một khóa học hoặc bài học mà bạn đã trải nghiệm hoặc đã thiết kế. 'Dạy cái gì' (thiết kế chương trình) kết thúc ở đâu và 'dạy như thế nào' (thiết kế học tập) bắt đầu ở đâu, và hai điều đó đã tương tác với nhau ra sao?
- Một giả định phổ biến là sự thành thạo AI tốt hơn sẽ tự động tạo ra nội dung giáo dục tốt hơn. Trang này phản bác điều đó bằng bằng chứng rằng cấu trúc sư phạm tường minh, chứ không chỉ sự thành thạo AI, mới là thứ quyết định hiệu quả học tập. Bạn đã từng thấy ở đâu một đầu ra ấn tượng nhưng lại không dạy được gì chưa?
- Nếu một công cụ AI có thể tạo ra toàn bộ khóa học từ một prompt, thì những quyết định nào của con người sẽ trở nên quan trọng hơn thay vì bớt quan trọng? Trang này lập luận rằng AI tăng cường chứ không thay thế vai trò của nhà thiết kế giảng dạy. Vai trò được tăng cường đó sẽ trông như thế nào?
- Một số mô hình thiết kế giảng dạy như ADDIE được dùng như những bước tuyến tính cứng nhắc. Nhưng trang này coi chúng như những phương pháp lập kế hoạch lặp lại và linh hoạt. Khi nào thì việc tuân theo một quy trình quá đúng nguyên văn có thể làm hỏng một thiết kế tốt?
- Trang này cho thấy rằng việc nhắc (prompt) có nền tảng sư phạm, ví dụ một khuôn khổ năm bước dựa trên lý thuyết học tập, đã cải thiện đáng kể các kết quả bậc cao. Nếu bạn đang xây một gia sư AI, bạn sẽ mã hóa điều gì vào một lớp thiết kế tường minh để chiến lược giảng dạy của nó vẫn có thể truy vết và tái lập?

## Giới thiệu

Thiết kế học tập bắc cầu giữa các năng lực của AI và phương pháp sư phạm hiệu quả. Ở nơi [[curriculum-design|thiết kế chương trình]] giải quyết *dạy cái gì* ở cấp độ chương trình, thiết kế học tập giải quyết *dạy như thế nào* ở cấp độ khóa học và bài học. Các bài viết trong cơ sở kiến thức này khám phá cả hai: AI như một công cụ cho nhà thiết kế học tập, và các nguyên tắc thiết kế học tập để xây dựng những hệ thống [[intelligent-tutoring|gia sư AI]] hiệu quả.

Công việc thiết kế đó bao gồm những gì trên thực tế lại chính là một câu hỏi thực nghiệm. [[tang-chatbots-learning-design-2026|Tang và cộng sự (2026)]] đã mã hóa 1,378 lượt trao đổi giữa nhà thiết kế và chatbot từ năm nhà thiết kế học tập mới vào nghề làm việc với một chatbot được nhúng trong một công cụ thiết kế, và phát hiện rằng cuộc đối thoại tập trung vào các kết quả học tập dự kiến và cách tiếp cận sư phạm chứ không phải việc tạo nội dung. Các nhà thiết kế quay lại với các kết quả học tập nhiều lần như một bước kiểm tra tính thẳng hàng trong khi chuyển các thành phần chương trình thành những nhiệm vụ cụ thể, và vai trò của trợ lý thay đổi theo từng giai đoạn: từ làm rõ thuật ngữ, đến hỗ trợ thiết kế nhiệm vụ, đến việc chạy một lượt kiểm chứng trước hạn chót. Theo bằng chứng này, hỗ trợ thiết kế ít liên quan đến việc tạo ra tài liệu hơn là giữ cho ý định thiết kế được mạch lạc.

Phân tích học tập và AI sinh tạo hỗ trợ những phần khác nhau của thiết kế: qua 11 nhóm thảo luận tại một trường đại học Australia, diễn ngôn về phân tích cùng xuất hiện nhiều nhất với bối cảnh và việc giải quyết vấn đề ở cấp khóa học (0.32), trong khi diễn ngôn về GenAI tập trung vào thiết kế đánh giá (0.26) và thiết kế cho sự tự quyết của người học (0.15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen và cộng sự (2026)]]).

### Các chủ đề nghiên cứu chính

**Tạo nội dung có hỗ trợ AI** là ứng dụng biến đổi trực tiếp nhất. **[[curriculum-as-code-instructional-design-2026|Chương trình như mã]]** trình bày một kiến trúc sáu giai đoạn tích hợp AI sinh tạo với LaTeX và Python để tự động hóa việc tạo tài liệu [[stem-education|STEM]], được kiểm chứng qua 8 mô-đun và 28 bối cảnh dự án với điểm chất lượng từ sinh viên là 8.5-9.9/10. **[[instructional-agents-multi-agent-course-gen|Các tác tử giảng dạy]]** dùng một khuôn khổ đa tác tử được cấu trúc quanh mô hình ADDIE, với các tác tử theo vai trò (giảng viên, nhà thiết kế giảng dạy, điều phối viên khóa học) phối hợp để tạo ra tài liệu khóa học hoàn chỉnh. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** cung cấp một quy trình có cấu trúc để [[video-education|tạo video]] [[pedagogy|sư phạm]] thích ứng dựa trên ngữ liệu khóa học, cho thấy rằng cấu trúc sư phạm tường minh, chứ không chỉ sự thành thạo AI, là điều thiết yếu để tạo nội dung giáo dục. Các nền tảng [[generative-ai|AI sinh tạo]] cũng có thể thể hiện các nguyên tắc thiết kế học tập trong nội dung mà chúng tạo ra: [[ai-modeling-problem-generation-platform-2026|một nền tảng được hỗ trợ bởi AI để tạo các bài toán mô hình hóa]] đã kết hợp các nguyên tắc thiết kế đã được xác lập với [[prompt-engineering|tạo sinh tăng cường truy hồi]], phát triển theo cách tiếp cận ADDIE để tạo ra những nhiệm vụ và khuyến nghị có nền tảng sư phạm mà các công cụ tạo nội dung thông thường không có. Tuy nhiên, lợi ích của việc tạo nội dung và bài học có hỗ trợ AI như vậy lại được trung gian hóa bởi chuyên môn của chính giáo viên: [[choi-teacher-ai-interaction-lesson-design-2026|Choi và cộng sự (2026)]] phát hiện rằng những giáo viên có kinh nghiệm điều chỉnh một cách phản biện các ý tưởng bài học do AI tạo ra cho phù hợp với học sinh và bối cảnh (nhắc lại và triển khai thêm trên đầu ra), trong khi người mới thường chấp nhận trực tiếp các gợi ý của AI. Do đó giá trị sư phạm của các công cụ nội dung AI phụ thuộc vào kinh nghiệm và sự thành thạo AI của giáo viên, chứ không chỉ vào công cụ. Một tổng quan hệ thống về [[wang-teacher-ai-co-design-review-2026|việc giáo viên và AI cùng thiết kế các nhiệm vụ học tập]] (Wang, Liu & Islam 2026) xác nhận mô thức này ở quy mô 28 nghiên cứu (2015-2025): GenAI chủ yếu được dùng để lập kế hoạch bài học, tạo prompt và khơi ý tưởng sáng tạo, và chế độ cộng tác chủ đạo là AI như trợ lý hoặc công cụ tạo nội dung chứ không phải một người cùng thiết kế đầy đủ hơn, với hiệu quả, khả năng đáp ứng, [[creativity|sáng tạo]] và [[equity-in-ai-education|công bằng]] lặp lại như những lợi ích tiềm năng. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] làm sắc nét phát hiện về chuyên môn giáo viên đối với thiết kế hoạt động nhóm: những giáo viên có kinh nghiệm tạo ra những kiến trúc vai trò phong phú hơn, cộng hưởng hơn và thẳng hàng với ZPD tốt hơn trong các hoạt động hợp tác do AI thiết kế so với người mới, bất kể mức độ quen thuộc với AI, qua đó định khung "năng lực prompt sư phạm" như đòn bẩy biến đầu ra của AI thành [[collaborative-learning|học tập nhóm phân hóa]] hiệu quả.

Cuộc thử nghiệm Aila đưa ra một con số về thời gian lập kế hoạch cho mô thức đó. Giáo viên ở các trường tiểu học được phân bố ngẫu nhiên của cuộc thử nghiệm này dành 2.51 giờ mỗi tuần để chuẩn bị bài học với công cụ, so với 3.32 giờ khi không có công cụ, nhưng giáo viên ở mức trung vị chỉ lập kế hoạch từ đầu cho 21% đến 40% số bài học, đúng là trường hợp mà một công cụ làm từ đầu nhắm tới ([[roy-aila-lesson-planning-teacher-choices-2026|Roy và cộng sự, 2026]]).

Chỗ mà tài liệu được tạo sinh còn thiếu là sự phù hợp với chương trình: bảy giáo viên toán đánh giá các bài toán thất bại sinh lợi do AI tạo ra gần bằng các bài toán do con người tạo về chất lượng tổng thể (M = 17.19 so với 17.43 trên 25) nhưng thấp hơn về mức độ thẳng hàng với chương trình (M = 2.57 so với 3.29), nên các bài toán được tạo sinh vẫn cần được biên tập về độ dài, trình độ đọc và hình ảnh minh họa ([[rhaimi-productivemath-2025|Rhaimi và cộng sự (2025)]]).

**Gia sư AI có nền tảng sư phạm** áp dụng các nguyên tắc thiết kế giảng dạy vào việc thiết kế hệ thống AI. **[[didactical-teacher-assistant-dimensional-modeling|Brisson và cộng sự]]** đã xây dựng một trợ lý giáo viên dựa trên [[llm]] theo hướng didactic, trong đó chiến lược gia sư được mã hóa trong một lớp bên ngoài tường minh, khiến việc chọn nội dung và cấu trúc didactic có thể truy vết và tái lập, trực tiếp giải quyết những lo ngại về tính mờ đục trong [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou và cộng sự]]** đã chứng minh rằng một khuôn khổ [[prompt-engineering|nhắc]] năm bước dựa trên Lý thuyết [[learning-theories|học tập]] sinh tạo đã cải thiện đáng kể các kết quả nhận thức bậc cao, cho thấy rằng hướng dẫn giảng dạy, chứ không chỉ việc tiếp cận AI, quyết định hiệu quả học tập. Cả hai đều kết nối với [[scaffolding|giàn giáo]] và [[intelligent-tutoring|gia sư thông minh]].

**Các khuôn khổ và đánh giá** cung cấp những cách tiếp cận có cấu trúc. **[[bridging-instructional-design-framework-math]]** và **[[cotal-formative-assessment-scoring-2026|CoTAL]]** minh họa các nguyên tắc thiết kế [[human-in-the-loop-ai|AI có người trong vòng lặp]]. **[[genai-mindtool-generative-learning]]** định vị AI như một "công cụ tư duy", một đối tác nhận thức mở rộng chứ không thay thế tư duy của người học, áp dụng trực tiếp lý thuyết thiết kế giảng dạy vào việc tích hợp AI. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** áp dụng các nguyên tắc Thiết kế phổ quát cho học tập để tạo ra một đối tác tư duy AI dễ tiếp cận cho nhà giáo dục, kết nối thiết kế giảng dạy với [[inclusive-learning|học tập hòa nhập]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Kích hoạt - Điều tra - Phản tư) là một khuôn khổ cấu trúc nhiệm vụ cho việc sử dụng AI được kích hoạt về mặt nhận thức, giới hạn phần đóng góp của AI để việc dự đoán, diễn giải và đánh giá vẫn thuộc về người học, một bản chuyển thể dành riêng cho AI của các chu trình điều tra dựa trên [[self-regulated-learning|học tập tự điều chỉnh]], Lý thuyết tải nhận thức và [[human-ai-collaboration|hợp tác người-AI]]. Bổ sung cho các khuôn khổ thiết kế này, [[dohn-boundary-object-classifying-genai-learning-activities-2026|phân loại của Dohn và cộng sự (2026)]] đưa ra một *sự phân loại* chứ không phải một phương pháp thiết kế: sáu hạng mục (Mục tiêu học tập, Nội dung, Định dạng biểu đạt, [[student-engagement|Sự tham gia]] tri thức luận, Thiết kế xã hội, Sản phẩm) cho phép các nhà thiết kế và [[research-methods-aied|nhà nghiên cứu]] mô tả, so sánh và hình dung các hoạt động học tập với GenAI bằng cách làm rõ vì sao, cái gì, như thế nào, với cái gì và với ai người học tham gia cùng GenAI, được xây dựng như một đối tượng biên thông qua đối thoại hậu số. Các khuôn khổ lớp học thông minh mở rộng điều này sang [[teacher-education|đào tạo giáo viên]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao và Wang (2026)]] đề xuất một khuôn khổ ba chiều cho giáo dục thông minh (hiệu quả học tập, công nghệ thông tin và truyền thông (ICT), và tổ chức lớp học) và hiện thực hóa nó trong một khóa học thạc sĩ giáo dục [[math-education|toán]] tích hợp [[automated-assessment|chấm điểm tự động]], các khuyến nghị cá nhân hóa và [[ai-feedback-quality|phản hồi đa AI]] qua các giai đoạn trước, trong và sau giờ học. Một thử nghiệm bán thực nghiệm cho thấy những tiến bộ có ý nghĩa thống kê về khả năng của sinh viên trong việc hình thành các mục tiêu giảng dạy chính xác, có nền tảng nghề nghiệp, tạo ra **Mô hình D-T-E** có thể chuyển giao (Nhu cầu ngành học - Trao quyền công nghệ - Vòng lặp đánh giá), một hướng dẫn [[discipline-specific-aied|đặc thù ngành học]] cho [[educational-development|nhà đào tạo giáo viên]] đang đưa các khái niệm giáo dục thông minh vào thực tiễn thiết kế giảng dạy.

**Thiết kế để với tới.** Khuôn khổ bảy đòn bẩy của Halani hỏi rằng trong mỗi bối cảnh khóa học, những đòn bẩy nào vẫn còn vận hành khi sinh viên ở một mình với AI; những động thái cấu trúc như thay đổi điều mà điểm số chứng nhận, hay những nhiệm vụ không thể hoàn thành nếu không có tư duy, với tới xa hơn việc nói với sinh viên rằng quy trình là quan trọng ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Ràng buộc công cụ để bảo vệ tư duy.** Một thiết kế viết lập luận kéo dài chín tuần đã sắp xếp các chatbot do giáo viên giới hạn, chỉ đặt câu hỏi và từ chối tạo văn xuôi cho học sinh, và bốn học sinh trung học đã chuyển từ những người tiêu thụ AI thụ động thành những người đánh giá biết phản biện đầu ra của AI; chính sự ràng buộc có chiến lược, chứ không phải khả năng sinh tạo không giới hạn, mới đi cùng với các tiến bộ ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Nhắc theo rubric như một đòn bẩy thiết kế.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar và cộng sự (2026)]] đã chứng minh rằng rubric vận hành như một giao diện trung gian giữa ý định sư phạm của con người và suy luận của máy: coi các tiêu chí đánh giá như những sản phẩm thiết kế có thể sửa đổi, thay vì những công cụ cố định, và cùng tinh chỉnh lặp đi lặp lại chúng với LLM đã nâng mức đồng thuận giữa LLM và con người về công việc thiết kế của sinh viên từ 54.75% lên 81.25%. Những rubric được thiết kế cho LLM phải cân bằng giữa độ chính xác và tính linh hoạt: quá mơ hồ sẽ mời gọi sự diễn giải tự do, quá cứng nhắc sẽ biến mô hình thành công cụ khớp mẫu; và việc nhắc có nhận thức về vai trò (giảng viên, người đánh giá đồng đẳng, người đánh giá đề xuất tài trợ) tạo ra những phản hồi đánh giá khác biệt. Điều này định vị việc thiết kế rubric như một thực hành thiết kế học tập cụ thể để định hình hành vi đánh giá của AI, trong đó sự giám sát của con người trong vòng lặp vẫn là điều thiết yếu.

**Các tác tử AI cho thiết kế giảng dạy** mở rộng lĩnh vực sang [[agentic-ai|AI tác tử]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** là chuẩn đánh giá được chuẩn hóa đầu tiên, có nền tảng lý thuyết, để đánh giá các tác tử thiết kế giảng dạy dựa trên LLM; Ma trận bối cảnh gồm 25,795 kịch bản của nó (51 biến bối cảnh × 33 bước con của ISD từ ADDIE) cho thấy các tác tử dựa trên những khuôn khổ ISD cổ điển (ADDIE, Dick & Carey, ISD mẫu nhanh) vượt trội hơn các tác tử không có lý thuyết, qua đó xác nhận bằng thực nghiệm rằng thiết kế giảng dạy là một ngành có cấu trúc chứ không phải một nhiệm vụ nhắc chung chung. Các tác tử không chỉ là những *người xây dựng* thiết kế mà còn là những *nhà phê bình* thiết kế: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]] dùng một tác tử web tự trị duy nhất điều hướng một bài học trực tuyến nhiều bước như một học sinh để đánh giá một thiết kế học tập *trước khi* người học thật tham gia; phần mô tả của nó về trải nghiệm của sinh viên dự báo được nơi người mới sẽ bỏ học và đưa ra phản hồi thiết kế có thể hành động, vượt trội hơn mọi đường cơ sở và thậm chí vượt trội hơn một nhóm sinh viên được mô phỏng trên một khóa CS1 toàn cầu. Điều này định vị việc đánh giá bằng tác tử trước khi triển khai như một bổ sung chi phí thấp cho việc lặp thiết kế của con người. **[[wang-multi-agent-systems-learning-designers-2025]]** và **[[instructional-agents-multi-agent-course-gen|Các tác tử giảng dạy]]** khám phá các khuôn khổ đa tác tử điều phối các tác tử theo vai trò quanh các mô hình thiết kế giảng dạy, trong khi **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** xem xét cách giáo viên và các tác tử cùng áp dụng tri thức công nghệ-sư phạm-nội dung. Công trình này kết nối thiết kế giảng dạy với [[benchmark|việc đối chuẩn]], [[ai-ed-evaluation|đánh giá giáo dục AI]], và việc thiết kế [[curriculum-design|chương trình]] ở quy mô lớn.

### Kết nối với các khái niệm liên quan

Thiết kế học tập là ngành bắc cầu của [[ai-education|AI trong giáo dục]]: nó kết nối [[curriculum-design|thiết kế chương trình]] (dạy cái gì) với [[scaffolding|giàn giáo]] (hỗ trợ người học như thế nào), [[educational-development|phát triển giáo dục]] (chuẩn bị cho nhà giáo dục như thế nào), và [[generative-ai|AI sinh tạo]] (chính các công cụ). Nó gắn chặt với [[teacher-role|vai trò giáo viên]] bởi vì các công cụ AI định hình lại việc mà nhà thiết kế học tập và giáo viên làm, và với [[ai-literacy|năng lực AI]] bởi vì việc tích hợp AI hiệu quả đòi hỏi nhà giáo dục hiểu các năng lực và giới hạn của AI. Công việc thiết kế cuối cùng quy về một *thứ tự hoạt động*: [[pedagogical-patterns|các mô hình sư phạm]] lập danh mục những thứ tự động tác đã được kiểm nghiệm, để nhà thiết kế có thể quyết định AI thuộc về chỗ nào trong một bài học thay vì chỉ quyết định đưa gì vào. [[learning-sciences|Các ngành khoa học về học tập]] là lĩnh vực nghiên cứu đứng sau những nguyên tắc này: ở nơi trang này bao quát thực tiễn nghề nghiệp của việc tạo ra các trải nghiệm học tập, các ngành khoa học về học tập nghiên cứu thực tiễn đó và những thiết kế của nó bằng thực nghiệm, rồi tạo ra các nguyên tắc nhận thức, động lực và xã hội mà thiết kế học tập sau đó hiện thực hóa.

### Thiết kế học tập quyết định kết quả học tập như thế nào

Thiết kế học tập là đòn bẩy quyết định liệu AI có tạo ra [[learning-gains|kết quả học tập]] hay chỉ là hiệu năng được AI thổi phồng. Bằng chứng của cơ sở kiến thức nhất quán về điểm này: **cùng một công cụ AI tạo ra những tiến bộ lớn hay tổn hại ròng tùy vào cách trải nghiệm học tập được thiết kế quanh nó.** [[instructional-guidance-genai-learning|Hou và cộng sự]] cho thấy một khuôn khổ nhắc năm bước có nền tảng lý thuyết học tập cải thiện đáng kể các kết quả nhận thức bậc cao, trong khi chỉ tiếp cận AI thì không; các khuôn khổ [[genai-mindtool-generative-learning|công cụ tư duy]] và [[airis-cognitively-activated-ai-physics-2026|AIRIS]] bảo toàn công việc nhận thức của người học để tạo ra những tiến bộ bền vững (chứ không phải hiệu quả nhiệm vụ). Những lựa chọn thiết kế bảo vệ [[learning-gains|kết quả học tập]] - giàn giáo đòi hỏi một lần thử của sinh viên, [[formative-assessment|đánh giá định hình]] với các thước đo kết quả không có hỗ trợ, và cấu trúc sư phạm giữ cho người học là chủ thể hành động - phản chiếu phát hiện của lĩnh vực (xem [[learning-gains]]) rằng AI là một lợi ích mạnh khi nó huấn luyện và là một tổn hại khi nó trả lời thay. Ngược lại, những bài học tích hợp AI được thiết kế kém sẽ rơi vào [[cognitive-offloading|khoảng cách hiệu năng-học tập]], nơi thành công bề ngoài che giấu việc không có học tập.

### Hướng dẫn thực tiễn cho nhà thiết kế và nhà phát triển

Đối với nhà thiết kế giảng dạy, nhà phát triển khóa học và kỹ sư xây dựng các trải nghiệm học tập có hỗ trợ AI, các phát hiện của cơ sở kiến thức chuyển thành thực tiễn có thể hành động. Có một ranh giới đáng được nêu trước chính các thực hành: thiết kế học tập như trang này mô tả là việc thiết kế một khóa học cho một nhóm người học đã biết, trong khi những nguyên tắc tương tự được nướng vào một sản phẩm mà nhiều khóa học, do những người mà nhà thiết kế sẽ không bao giờ gặp giảng dạy, sẽ dùng lại là công việc của [[educational-technology-developers|nhà phát triển công nghệ giáo dục]], nơi các thiết lập mặc định, khả năng cấu hình và tài liệu mang trọng lượng sư phạm:

**Đặt việc tạo sinh của AI trên một mô hình giảng dạy có cấu trúc.** Nội dung AI chỉ tốt bằng cấu trúc sư phạm đứng sau nó: cấu trúc tường minh, chứ không phải sự thành thạo AI, quyết định chất lượng. Hãy thiết kế quanh một mô hình được công nhận (ADDIE, Dick & Carey, mẫu nhanh) và mã hóa các quyết định sư phạm một cách tường minh thay vì trông chờ mô hình suy ra chúng.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Áp dụng một khuôn khổ cấp nguyên tắc bên cạnh một mô hình giảng dạy.** Một mô hình cấp khóa học cấu trúc một thiết kế; một khuôn khổ được công bố đặt ra các tiêu chí mà nhiều thiết kế phải thỏa mãn. Một ví dụ đáng đọc trọn vẹn là *Powerful Learning with Emerging Technology* của Digital Promise, tổ chức hướng dẫn của nó dưới ba nguyên tắc (Dựa trên bằng chứng, Lấy người học làm trung tâm, Xây dựng kỹ năng), mỗi nguyên tắc được triển khai thành các thực hành và chiến lược, và gắn [[privacy|quyền riêng tư]], [[explainable-ai|khả năng giải thích]] và tính công bằng vào những thực hành cụ thể như những nghĩa vụ an toàn chứ không phải những thứ thêm vào tùy chọn.([[powerful-learning-with-emerging-technology-2025]])
**Khớp cấu hình AI với nhiệm vụ, không khớp với độ tinh vi.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] phân biệt bốn lớp (prompt, bối cảnh, khung vận hành, vòng lặp được kiểm chứng) và áp dụng nguyên tắc lớp tối thiểu đủ: dùng cấu hình ít phức tạp nhất có khả năng tạo ra một kết quả kiểm chứng được, vì việc điều phối thêm mang theo chi phí về phối hợp, kiểm chứng, quyền riêng tư và sự hiểu.

**Dùng các quy trình đa tác tử theo vai trò để sản xuất nội dung.** Thay vì một prompt chung chung, hãy điều phối các tác tử hoặc vai trò riêng biệt (giảng viên, nhà thiết kế giảng dạy, điều phối viên khóa học) phối hợp qua một quy trình được định nghĩa; điều này phản chiếu cách các nhóm khóa học thật làm việc và tạo ra tài liệu đầy đủ hơn so với một prompt duy nhất.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Cung cấp hướng dẫn giảng dạy, không chỉ tiếp cận AI.** Dù người học tương tác trực tiếp với AI hay với tài liệu do AI tạo ra, hướng dẫn dựa trên lý thuyết học tập (ví dụ một [[scaffolding|giàn giáo]] nhắc theo từng bước dựa trên các nguyên tắc học tập sinh tạo) mới tạo ra kết quả bậc cao; chỉ tiếp cận thì không. Hãy thiết kế hoạt động học tập quanh cách tâm trí học, và coi AI như một "công cụ tư duy" nhận thức mở rộng tư duy thay vì thay thế nó.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Mô hình hóa sự quên, và lên lịch ôn tập ở nơi sự phân rã nặng nhất.** G4L biểu diễn sự phân rã tri thức bằng một đường cong quên của Ebbinghaus được điều khiển bởi thời gian trôi qua và số lần lặp, và ưu tiên những đơn vị dễ bị phân rã nhất thay vì phục vụ lại bất cứ thứ gì vừa được chấm điểm gần nhất ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin và cộng sự (2026) bổ sung một động thái vận hành để quyết định nơi AI đi vào: tách một hoạt động thành những thành phần tốt nhất nên làm độc lập và những thành phần tốt nhất nên ghép với AI, giữ phán đoán của nhà giáo dục ở trung tâm của việc phân tách ([[fowlin-operationalizing-learning-principles-ai|Fowlin và cộng sự (2026)]]).

**Làm cho nội dung có thể truy vết và có thể xem xét.** Hãy để một nhà thiết kế con người xem xét và sửa đầu ra của AI trước khi nó đến với người học, và cấu trúc việc tạo sinh của AI sao cho lý lẽ sư phạm (vì sao nội dung này, theo thứ tự này) có thể kiểm tra được; điều này giải quyết cả chất lượng lẫn những lo ngại về tính mờ đục làm xói mòn [[trust|niềm tin]] vào giảng dạy được tạo sinh.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Xem xét phương tiện do AI tạo ra ở giai đoạn kịch bản, không phải sau khi tổng hợp.** PedaCo đặt việc xem xét của nhà giáo dục lên kịch bản, nơi các lỗi sư phạm còn rẻ để sửa, trước khi bất cứ thứ gì được kết xuất; điểm tính hợp lệ giảng dạy tăng từ 3.07 lên 3.86, trong khi lớp tự động sau tổng hợp chỉ cải thiện hai trong năm chiều ([[ai-video-dual-gatekeeping-2026|Kim, Baek và Kwak (2026)]]).

**Thiết kế cho [[accessibility|khả năng tiếp cận]] ngay từ đầu.** Hãy áp dụng các nguyên tắc [[universal-design-for-learning|thiết kế phổ quát cho học tập]] khi xây dựng công cụ AI và tài liệu do AI tạo ra để chúng phục vụ người học đa dạng, thay vì trang bị thêm khả năng tiếp cận sau khi đã làm xong.([[ludia-udl-ai-thought-partner-2026]])

**Lập kế hoạch cho phương tiện truyền tải.** Thiết kế giảng dạy cho [[online-teaching-and-learning|dạy và học trực tuyến]] không phải là một bản dịch trung tính của thiết kế trực tiếp; phương tiện thay đổi điều gì là khả thi đối với giàn giáo, đánh giá và tương tác, và AI nhân lên cả các cơ hội ([[personalized-learning|cá nhân hóa]] có thể mở rộng, hỗ trợ luôn sẵn) lẫn các rủi ro ([[academic-integrity|liêm chính]], [[cognitive-offloading|giảm tải nhận thức]]) mà nhà thiết kế phải lập kế hoạch. Hãy thiết kế lớp vỏ sư phạm của AI một cách có chủ đích trong bối cảnh trực tuyến cũng như trong bối cảnh trực tiếp.

**Đánh giá dựa trên một chuẩn, không dựa trên cảm giác.** Nếu bạn đang xây một tác tử thiết kế giảng dạy, hãy đánh giá nó dựa trên một chuẩn được chuẩn hóa, có nền tảng lý thuyết (ví dụ [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) để bạn có thể đo xem việc dựa trên một khuôn khổ ISD thực sự có cải thiện đầu ra so với một LLM chung chung hay không.([[jeon-isd-agent-bench-2026]])

- **AI đang định hình lại thực tiễn thiết kế giảng dạy.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]] [[meta-analysis-systematic-review|tổng quan hệ thống]] 28 nghiên cứu (2020-2025) và phát hiện AI hỗ trợ nhà thiết kế trong việc tạo nội dung, làm mẫu và cá nhân hóa, và được quan niệm như một đồng nghiệp/người cộng tác/đối tác chứ không chỉ là một công cụ, dù sự thẳng hàng sư phạm và mức độ sẵn sàng của người thực hành vẫn là những thách thức.

- **Hoạt động được ghi nhận tập trung vào một giai đoạn của chu trình.** Trong một tổng quan 78 nghiên cứu về thiết kế giảng dạy có hỗ trợ AI, hoạt động ở giai đoạn Thiết kế xuất hiện trong **74 trên 78 nghiên cứu (95%)** và Phát triển trong 44 (56%), trong khi Phân tích chỉ đạt 11 (14%), Đánh giá 10 (13%) và Triển khai 7 (9%), và **không nghiên cứu nào xem xét sự hỗ trợ của AI trên toàn bộ chu trình ADDIE**. Chu trình là một khát vọng mà nền tảng bằng chứng chưa bao phủ, điều quan trọng với bất cứ ai đang được chào bán "phát triển khóa học bằng AI" như một năng lực từ đầu đến cuối ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou & Kameas, 2026]]).
- **Ba vai trò của AI, phân bố theo thứ bậc.** Việc sử dụng *sinh tạo*, tức AI tạo nội dung thiết kế theo chỉ đạo của nhà giáo dục, chiếm ưu thế ở **96% số nghiên cứu**; việc sử dụng *giàn giáo*, nơi AI cấu trúc lập luận của chính nhà thiết kế, xuất hiện trong 35%; việc sử dụng *đánh giá*, nơi AI đánh giá chất lượng sản phẩm, trong 21%. Lĩnh vực đang dùng AI áp đảo để làm ra đồ vật thay vì để chất vấn các quyết định thiết kế của chính mình, đúng là điều ngược lại với cấu hình người bạn phản biện mà bản tổng quan này chỉ ra là có triển vọng về mặt giáo dục.

## Những hiểu lầm phổ biến

- **"Lập kế hoạch bài học bằng AI trả lại thời gian cho giáo viên."** Thời gian lập kế hoạch có giảm, từ 3.32 giờ mỗi tuần xuống 2.51 giờ với công cụ, nhưng **giáo viên ở mức trung vị chỉ lập kế hoạch từ đầu cho 21% đến 40% số bài học**. Thời gian được tiết kiệm và việc lập kế hoạch không trở nên kỹ lưỡng hơn đáng kể; phần tiết kiệm được tích lũy lại thay vì được tái đầu tư.
- **"Đồng thiết kế với AI đã có bằng chứng vững chắc."** Một tổng quan hệ thống về [[wang-teacher-ai-co-design-review-2026|việc giáo viên và AI cùng thiết kế các nhiệm vụ học tập]] **xác nhận mô thức này ở quy mô 28 nghiên cứu**, điều mô tả một thực hành nhất quán chứ không chứng minh các kết quả vượt trội.
- **"Rubric là một đầu vào cố định."** Rubric vận hành như một **giao diện trung gian giữa ý định sư phạm của con người và suy luận của máy**: chính việc coi các tiêu chí đánh giá là **có thể sửa đổi** mới cho phép công cụ mang ý định của nhà giáo dục. Một rubric cố định chuyển cách định khung mặc định của máy vào việc đánh giá.
## Khái niệm liên quan

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - Đối tác sư phạm
- [[online-teaching-and-learning]] - Dạy và học trực tuyến
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - Trang ôm trùm: các phương pháp sư phạm và chiến lược giảng dạy trong giáo dục AI
- [[stakeholders]] - Trang ôm trùm: con người và các đối tượng trong giáo dục AI (người học, giáo viên, nhà thiết kế, nhà quản lý, nhà hoạch định chính sách)

## Bài viết liên quan

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Một khoản tiết kiệm thời gian lập kế hoạch được đo lường, đi kèm phát hiện rằng giáo viên chỉ lập kế hoạch từ đầu cho 21% đến 40% số bài học
- [[powerful-learning-with-emerging-technology-2025]] — Học tập mạnh mẽ với công nghệ mới nổi
- [[claassen-learning-analytics-genai-learning-design-2026]] — Phân tích học tập và GenAI trong việc ra quyết định thiết kế học tập
- [[tang-chatbots-learning-design-2026]] — Sử dụng chatbot trong thiết kế học tập: nhà thiết kế dừng lại ở kết quả học tập và sư phạm thay vì tạo nội dung (Tang và cộng sự 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Các mô thức tương tác giữa giáo viên và AI trong thiết kế bài học theo kinh nghiệm và mức thành thạo AI (Choi và cộng sự 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI trong giáo dục đại học: sự tham gia và vai trò trung gian của các phương pháp giảng dạy
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Phân loại (đối tượng biên) để phân loại các hoạt động học tập với GenAI
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — Tác tử web AI: tác tử web tự trị đánh giá các thiết kế bài học và dự báo việc sinh viên bỏ học trước khi sinh viên tham gia (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: một khuôn khổ cho việc tăng cường AI được kích hoạt về mặt nhận thức trong vật lý
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Thiết kế để với tới: bảy đòn bẩy và sinh viên một mình với AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Khi nói không tạo ra video tốt hơn: kiểm soát kép cho việc tạo nội dung AI có nền tảng sư phạm
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI hỗ trợ thiết kế bài toán thất bại sinh lợi
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI và thực tiễn thiết kế giảng dạy: một tổng quan hệ thống (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Gia sư thông minh dựa trên đồ thị cho các lĩnh vực động (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Làm cho AI trở nên khó chịu có chủ đích: sự ràng buộc trong viết có hỗ trợ AI (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Mô hình lớp học thông minh và vòng lặp D-T-E cải thiện năng lực thiết kế giảng dạy trong chương trình thạc sĩ giáo dục toán (Zhu và cộng sự 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Nền tảng được hỗ trợ bởi AI tạo các bài toán mô hình hóa (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Giáo viên và AI cùng thiết kế các nhiệm vụ học tập: xu hướng và góc nhìn (Wang và cộng sự 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Kiến trúc các vai trò trong các hoạt động nhóm phân hóa do AI thiết kế (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM như những tác tử của thiết kế sư phạm lặp lại
