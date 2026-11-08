---
title: "Thiết kế chương trình"
created: "2026-06-02T10:44:35-04:00"
type: concept
connected_faqs: [incorporating-ai-literacy]
foundations: [ai-literacy, curriculum-design, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
discipline: [stem education]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [intelligent-textbooks, learning-commons]
updated: "2026-11-08T07:46:14-05:00"
translation_of: "concepts/curriculum-design"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Bản dịch máy tự động của trang tiếng Anh này, chưa được người bản ngữ xem xét.*

> **Thiết kế chương trình** — quá trình lập kế hoạch và cấu trúc hóa những gì được dạy xuyên các khóa học, chương trình và thể chế, bao gồm mục tiêu học tập, trình tự nội dung, chiến lược đánh giá và tiến trình kỹ năng. Trong kỷ nguyên AI, thiết kế chương trình phải cân bằng giữa tri thức nền tảng và các năng lực AI đang nổi lên, quyết định không chỉ học sinh học gì mà còn cách họ học để làm việc với và đánh giá phản biện các công cụ AI.

## Những câu hỏi cần cân nhắc

- Thiết kế chương trình hỏi học sinh nên học gì ở cấp chương trình, trong khi thiết kế học tập hỏi như thế nào ở cấp khóa học. Khi AI định hình lại một ngành học, bạn nghĩ tầng nào trong hai tầng này nên thay đổi trước?
- Khi [[generative-ai|AI sinh tạo]] tự động hóa công việc ở mức triển khai, một số người lập luận chương trình phải dịch chuyển về phía thiết kế hệ thống, trừu tượng hóa và [[critical-thinking|đánh giá phản biện]]. Bạn nghĩ học sinh sẽ mất gì nếu các kỹ năng mức thấp bị giảm nhẹ?
- Việc thiết kế lại chương trình trong kỷ nguyên AI thường được định khung như sự cân bằng giữa sự trôi chảy với công cụ và tri thức nền tảng. Bạn đã thấy sự cân bằng đó nghiêng quá xa về một phía ở đâu?
- Khuôn khổ SAIL coi năng lực AI được giàn giáo xuyên các độ tuổi và được thiết kế để giải quyết các 'khoảng cách số' sâu hơn ngoài vấn đề tiếp cận. Việc nhúng năng lực AI xuyên toàn bộ một chương trình khác với việc thêm một khóa học AI duy nhất như thế nào?
- Nếu mọi ngành học giờ đều cần năng lực AI được nhúng bên trong, ai chịu trách nhiệm về thay đổi chương trình — giảng viên, chương trình, hay thể chế — và nhà giáo dục cần gì để thành công trong việc đó?
- Một chương trình là một trình tự kỹ năng xuyên các năm, không chỉ một danh sách chủ đề. Cách nhìn dài hơn đó làm thay đổi thế nào việc liệu một 'đơn vị năng lực AI' có thực sự bám trụ được hay không?

## Giới thiệu

Thiết kế chương trình giải quyết *cái gì* của giáo dục ở cấp chương trình, bổ trợ cho [[learning-design|thiết kế học tập]] giải quyết *như thế nào* ở cấp khóa học. Các bài viết trong cơ sở kiến thức này khám phá cách AI đang định hình lại chương trình xuyên các ngành học — từ kỹ thuật phần mềm đến kiến trúc đến giáo dục xanh — và cách nhà giáo dục đang thiết kế chương trình nhúng năng lực AI mà không hy sinh nền tảng ngành học.

### Các chủ đề nghiên cứu chính

**Thiết kế lại chương trình cho kỷ nguyên AI** là thách thức trung tâm. **[[reshaping-cs-education-genai|Lee và cộng sự]]** tổng hợp các phát hiện từ các hội thảo quốc tế về việc định hình lại [[cs-education|giáo dục khoa học máy tính]] đại học, lập luận rằng khi GenAI tự động hóa lập trình ở mức triển khai, chương trình phải dịch chuyển về phía thiết kế hệ thống, trừu tượng hóa và đánh giá phản biện — trong khi giảm nhẹ các chi tiết triển khai mức thấp. **[[ase-26-agentic-software-engineering-curriculum|Gorsky]]** hình thức hóa Kỹ thuật Phần mềm Tác tử như một ngành học riêng biệt với chương trình 21 mô-đun tập trung vào "sự tiến hóa của ý định" và kỷ luật thực hành cần thiết để quản lý [[agentic-ai|các tác tử AI]]. Cả hai đều kết nối với [[ai-literacy|năng lực AI]] và [[scaffolding|giàn giáo]].

Xem xét sự thay đổi như mang tính hệ thống thay vì bổ sung, [[rewriting-curriculum-genai-pedagogy-2026|Sabani và cộng sự (2026)]] tam giác hóa một [[meta-analysis-systematic-review|tổng quan phạm vi]], lập bản đồ trắc lượng thư mục 209 bản ghi, 36 bài viết, và mười cuộc phỏng vấn lãnh đạo học thuật thành năm bước chuyển — bao gồm việc truyền đạt tri thức nhường chỗ cho phát triển năng lực và thử nghiệm cục bộ nhường chỗ cho quản trị thể chế.

**Lập bản đồ và phân tích chương trình** dùng AI để hiểu chương trình hiện có. **[[ai-assisted-se-curriculum-syllabus-analysis-2026|Geng và cộng sự]]** phân tích 23 đề cương từ các khóa kỹ thuật phần mềm có AI hỗ trợ, xác định các chủ đề chung — [[prompt-engineering|kỹ thuật nhắc]], duyệt mã với AI, [[ethics|cân nhắc đạo đức]] — và rút ra hướng dẫn thiết kế nhấn mạnh việc cân bằng sự trôi chảy với công cụ và tri thức nền tảng. **[[coursegraph-cs-course-comparison-2026|CourseGraph]]** áp dụng các phương pháp tính toán để so sánh cấu trúc khóa học khoa học máy tính giữa các thể chế.

Việc gán trọng số làm thay đổi điều một phân tích chương trình báo cáo: [[genai-curriculum-analytics-mapping-higher-ed-2026|Jayalath và cộng sự (2026)]] để GPT-o3-mini phân bổ 100% trên bảy kỹ năng doanh nghiệp cho mỗi bài trong 48 bài đánh giá, đạt Krippendorff's alpha 0.81 so với trọng số chuyên gia, nhưng sự đồng thuận trở nên âm với các kỹ năng mà phần mô tả không bao giờ nêu tường minh (-0.19).

**Cấu trúc mô-đun sống lâu hơn nội dung hiện tại.** Một mô thức tái diễn ở nơi lĩnh vực đi nhanh hơn chu trình tổng quan: một lõi ổn định gồm [[ai-literacy|năng lực AI]], đánh giá phản biện, phát hiện thiên kiến và [[ethics|đạo đức]], với nội dung công cụ chuyên biệt và sẵn có tại địa phương được gắn như các mô-đun và xem lại sáu đến mười hai tháng một lần ([[bursic-ai-residency-education-curriculum-2026|Bursic và cộng sự (2026)]]). [[medical-education|Giáo dục y khoa]] sau đại học là trường hợp được nêu, nhưng nguyên tắc này tổng quát hóa: chương trình cam kết với những năng lực sống sót qua sự thay thế công cụ và lên lịch cho tầng đặc thù công cụ được thay thế.

**Tích hợp năng lực AI** nhúng các năng lực AI xuyên các ngành học. **[[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]]** cung cấp một khuôn khổ năng lực AI có giàn giáo áp dụng được xuyên mọi độ tuổi và giai đoạn giáo dục, giải quyết [[digital-divide|khoảng cách số]] bậc hai và bậc ba. **[[tracing-genai-literacy-interaction-patterns]]** xem xét năng lực AI phát triển qua các mô thức tương tác như thế nào. **[[hingle-collaborative-ai-literacy-2025]]** khám phá các hướng tiếp cận cộng tác trong phát triển chương trình năng lực AI, kết nối với [[collaborative-learning|học tập cộng tác]].

LearnAI cho thấy một phiên bản nhúng trông như thế nào: một tầng tiếp xúc rộng gồm các bài trình bày ngắn bên trong 18 khóa học hiện có xuyên năm ngành học (293 sinh viên), đi kèm các buổi đồng sáng tạo một-một tự chọn do các gia sư đồng đẳng đại học được đào tạo điều hành, để người học có năng lực khác nhau gặp các nhiệm vụ AI ở đúng mức của mình ([[learnai-just-in-time-ai-cocreation-university-2026|Qu và cộng sự (2026)]]).

Việc tích hợp trên thực tế đi chậm hơn các khuôn khổ. [[critical-media-literacy-education-2026|Santos-Albardía và cộng sự (2025)]] phát hiện chỉ 13.8% sinh viên giáo dục và báo chí được khảo sát nói khóa học của họ đề cập phân tích truyền thông phản biện, so với 97.8% đánh giá nó quan trọng, và các cuộc phỏng vấn chuyên gia của họ truy nguyên khoảng cách này về [[teacher-education|đào tạo giáo viên]] vốn ưu tiên kỹ năng kỹ thuật và giảng dạy hơn giáo dục truyền thông.

Một tổng quan PRISMA 39 nghiên cứu STEAM (2016–2025) phát hiện một sự mất cân bằng song song trong các yếu tố năng lực AI: các triển khai phát triển năng lực kỹ thuật — khái niệm AI nền tảng, [[computational-thinking|tư duy tính toán]], [[statistics-and-data-science-education|năng lực dữ liệu]] — trong khi kém phát triển nhận thức đạo đức, trí tưởng tượng sáng tạo, và việc tạo ra, quản lý và thiết kế với AI, nên việc kiểm toán từng đơn vị dựa trên chúng là phản ứng thực tiễn ([[niri-steam-ai-literacy-review-2026|Niri và cộng sự, 2026]]).

[[student-experience|Tiếng nói học sinh]] là một đầu vào thiết kế khác: 84% trong 166 sinh viên kinh doanh năm cuối muốn GenAI được dạy trong các đơn vị học của họ và 85% coi đó là thiết yếu cho khả năng có việc làm, trong khi chỉ 7% đã học về nó từ trường đại học của mình ([[rook-plumb-genai-curricula-student-insights-2026|Rook & Plumb (2026)]]).

Một tổng quan 42 nghiên cứu về [[ai-education|giáo dục AI]] trước đại học phát hiện chương trình đang dịch chuyển từ nội dung kỹ thuật sang các mô hình dựa trên năng lực được xây trên các khuôn khổ như AI4K12 và Five Big Ideas in AI, với [[ai-literacy|năng lực AI]] được coi là năng lực xuyên chương trình trong khi các công cụ chuẩn hóa để đánh giá nó vẫn vắng mặt ([[caruana-pre-university-ai-education-slr-2026|Caruana và cộng sự (2026)]]).

Giảng viên và nhà tuyển dụng chỉ đồng ý về tầm quan trọng của một trong 26 kỹ năng AI — đặt kỳ vọng thực tế cho công việc tăng cường AI — và chỉ ba trong 26 kỹ năng được một nửa hoặc nhiều hơn giảng viên dạy, bằng chứng của báo cáo về một khoảng trống kỹ năng AI giữa giáo dục đại học và nhà tuyển dụng ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).

Thiết kế hoạt động ML ở K-12 vẫn dừng ở bề mặt: một tổng quan đứng sau khuôn khổ ICE-T phát hiện việc sử dụng vô hình, tương tác nút bấm và triển khai mô hình chiếm gần 60% các hoạt động học có giám sát được mã hóa, việc sáng tạo mở chỉ xuất hiện hai lần, và các góc nhìn kỹ thuật và xã hội cùng xuất hiện ở chỉ khoảng 3% hoạt động ([[icet-ml-education-trust-2026|Haritz và cộng sự, 2026]]).

**Đổi mới chương trình [[discipline-specific-aied|đặc thù ngành học]]** áp dụng thiết kế chương trình cho các lĩnh vực cụ thể. **[[genai-architecture-education]]** khám phá cách AI sinh tạo định hình lại [[pedagogy|sư phạm]] thiết kế kiến trúc. **[[talebzadeh-ai-green-education-2026]]** xem xét tích hợp AI trong chương trình giáo dục xanh. **[[connected-ai-lesson-planning-vietnam]]** và **[[llm-cultural-relevance-k12]]** đề cập [[culturally-relevant-pedagogy|thiết kế chương trình đáp ứng văn hóa]].

**Nhúng AI bên trong ngành học thay vì bên cạnh nó.** Một chương trình AI ba tầng (nhập môn, ứng dụng, nâng cao) gấp [[machine-learning|học máy]] vào các chủ đề kỹ thuật nhiệt hiện có trong một khóa 39.1 giờ thay vì thêm các môn tự chọn khoa học máy tính, tránh gánh nặng thêm cho sinh viên kỹ thuật cơ khí và công bố công khai đề cương, dữ liệu và mã của mình ([[mechanical-engineering-ai-curriculum-2026|Li và cộng sự (2026)]]).

Một trường hợp báo chí cho thấy biến thể ưu tiên giá trị: một giàn giáo bộ ba giá trị–quy trình–năng lực đưa sinh viên từ đưa tin chỉ có con người sang công việc tích hợp AI, vậy mà 8 trong 9 (89%) báo cáo tự tin về các quyết định đạo đức trong khi các mục khảo sát về quyền tác giả và thiên kiến gợi ý sự hiểu chỉ ở bề mặt ([[ying-genai-journalism-assessment-2026|Ngu và Weller (2026)]]).

**Các khuôn khổ [[governance|thể chế]]** đề cập thay đổi chương trình ở quy mô lớn. **[[finkelstein-principled-ai-education-2025]]** và **[[finkelstein-principled-ai-education-2025]]** cung cấp các nguyên tắc để tích hợp AI xuyên các chương trình giáo dục. **[[ai-adoption-training-public-sector]]** xem xét các rào cản đối với việc tiếp nhận chương trình AI trong giáo dục khu vực công.

**Sắp trình tự AI xuyên chương trình.** [[refrain-amplify-genai-curriculum-2026|Torres-Sahli và cộng sự]] đề xuất một khuôn khổ "giữ lại, rồi khuếch đại" sắp trình tự AI sinh tạo ở cấp chương trình: giữ lại một công cụ sinh tạo trong khi một năng lực đang hình thành, rồi phục hồi nó để khuếch đại năng lực đó một khi sinh viên có thể điều hướng nó và phán đoán lợi ích của nó. Được điều hành bởi một tiêu chí hình thành-so-với-giảm-tải (liệu một đoạn công việc có xây dựng một năng lực hay chỉ đơn thuần đưa nó qua công cụ), khuôn khổ này liên kết thiết kế chương trình với [[cognitive-offloading|giảm tải nhận thức]], [[self-regulated-learning|học tập tự điều chỉnh]], và [[academic-integrity|liêm chính học thuật]], với các điểm kiểm tra khó làm giả ở mỗi bản lề giữ-lại-rồi-khuếch-đại.

Đòn bẩy cho các giai đoạn cao nhất không phải nhiều bài học hơn: trên 89 dự án capstone được tài trợ, việc tiến từ [[career-development-and-readiness|Mức Sẵn sàng Lực lượng Lao động]] 6 lên 7 bị chặn bởi trải nghiệm nhúng trong ngành — các chương trình hợp tác và các dự án Manufacturing Extension Partnership — nên bằng cấp cần học tập tích hợp công việc thay vì thêm một môn tự chọn kỹ thuật ([[workforce-readiness-smart-manufacturing-wrl-2026|Smith và cộng sự (2026)]]).

Một hệ quả ở cấp chương trình của năng lực mô hình là thiết kế kháng AI hết hạn. Các nhà giáo dục tin học mô tả việc hiệu chỉnh bài tập theo điều các mô hình chưa làm được và chứng kiến sự hiệu chỉnh đó hết giá trị — các bài toán của một giảng viên an ninh mạng đòi hỏi [[problem-solving|giải quyết vấn đề]] thực sự bảy hoặc tám tháng trước đó và sau đó chỉ đơn giản được giải — với một người điều phối ước tính thời hạn sử dụng khoảng một học kỳ. Phát hiện cấu trúc của hội thảo là gần như mọi thích ứng đều do một giảng viên cá nhân thực hiện trong một khóa học duy nhất, không có sự phối hợp thể chế mà một phản ứng chương trình bền vững sẽ đòi hỏi ([[computing-assessment-genai-workshop-report-2026|Akbar và cộng sự, 2026]]).

**Căn chỉnh toàn khóa học khi AI sinh tạo được cho phép.** Một lần thiết kế lại năm 2026 cho một khóa [[physics-education|vật lý]] hạt nhân và hạt cơ bản nhập môn ([[ai-particle-physics-education-redesign-2026|Mikhasenko và cộng sự]]) tích hợp ba loại hoạt động với vai trò riêng — bài giảng cho khái niệm và ký hiệu, bài hướng dẫn cho thực hành giải tích chuẩn, và bài tập về nhà như một thành phần "dạng nghiên cứu" khám phá gồm các bài toán đa phương pháp khó bất thường. Sự ma sát được báo cáo (một điều kiện tiên quyết lập trình không được công bố, không đủ thời gian để hiểu thay vì chỉ lấy câu trả lời, và sự lệch pha giữa bài giảng, bài hướng dẫn, bài tập về nhà và [[summative-assessment|kỳ thi]]) cho thấy việc cho phép AI sinh tạo buộc phải làm công việc căn chỉnh chương trình xuyên toàn khóa học thay vì thay đổi một loại bài tập; cấu trúc được khuyến nghị của họ giữ công việc khám phá được phép dùng AI như các nhiệm vụ nâng cao có điểm thưởng trong khi bài thi viết không có hỗ trợ quyết định điểm.

**Độ sâu căn chỉnh, không phải tần suất sử dụng, phân tách các mô thức tích hợp.** Trên 17 trường hợp mô-đun kinh doanh, sáu trường hợp nhúng GenAI một cách hệ thống xuyên giảng dạy, học tập và đánh giá (kiến tạo), chín trường hợp làm không nhất quán (pha trộn) và hai trường hợp lẻ tẻ (tùy hứng); các trường hợp kiến tạo báo cáo kết quả mạnh nhất về sự tham gia, năng lực và tính liên quan với chương trình ([[zhou-constructive-alignment-genai-business-2026|Zhou và cộng sự (2026)]]).

**Lời khuyên căn chỉnh kiến tạo dưới sự soi xét phản biện.** Ở nơi các nguồn trên báo cáo về căn chỉnh trong thực tiễn, [[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes và cộng sự (2026)]] đọc chính hướng dẫn đó như một diễn ngôn. [[qualitative-research|Phân tích diễn ngôn phản biện]] của họ trên 14 tài liệu xám xuất bản từ tháng 11 năm 2022 đến tháng 4 năm 2025 — phần lớn là các trang thể chế và các chương từ [[educational-development|đơn vị học tập và giảng dạy]] có vị thế trung tâm — phát hiện căn chỉnh kiến tạo được trình bày như một vấn đề hiệu quả: AI sinh tạo là "một cách hiệu quả và tiết kiệm để soạn rubric" có thể "hợp lý hóa quy trình", được nhân cách hóa như "một chuyên gia giáo dục và trợ lý", một "đối tác tập dượt" hay một "trợ lý thông minh trong thiết kế giảng dạy", trong khi nhân viên học thuật chỉ cung cấp "chuyên môn về nội dung môn học" và công cụ đảm nhận "phần việc nặng nhọc của việc phát triển mục tiêu học tập, tổ chức nội dung khóa học ... và căn chỉnh các thành phần khóa học". Các công thức prompt sao chép-dán và mẫu đánh số định khung CA như một sản phẩm có thể chuẩn hóa, tạo ra ba chế độ thất bại: tính trình diễn (căn chỉnh chỉ trông như đã căn chỉnh), sự xóa bỏ bối cảnh định cảnh và phản biện, và CA nông đánh đồng căn chỉnh với chiều kiến tạo. Cách khắc phục của họ sắp trình tự lại quy trình thiết kế chương trình — nhà giáo dục phải hiểu CA đủ để điều hướng, đánh giá và bác bỏ đầu ra AI trước khi ủy thác bất kỳ phần nào của nó — và ràng buộc bất kỳ công cụ nào vào một tác tử [[rag|tăng cường truy xuất]] của thể chế được đặt nền trên chính sách, rubric và thuộc tính tốt nghiệp tại địa phương, với một vai trò "gia sư ngưỡng" mở rộng thay vì thay thế quan hệ với [[educational-development|nhà phát triển]].

**Tạo các nhiệm vụ mô hình hóa căn chỉnh với chương trình.** Các nền tảng có AI có thể giải quyết việc giáo viên thiếu thời gian và nguồn lực để thiết kế các nhiệm vụ [[math-education|mô hình hóa toán học]] chất lượng cao bằng cách tạo ra các bài toán căn chỉnh với chương trình và các khuyến nghị sư phạm được đặt nền trên các nguyên tắc thiết kế và tạo sinh [[rag|tăng cường truy xuất]] — một hướng tiếp cận được minh họa với biến thiên trực tiếp trong toán trung học ([[ai-modeling-problem-generation-platform-2026]]). Chính các bài đọc khóa học giờ cũng là một mục tiêu tạo sinh: Sidorkin (2026) thay thế một giáo trình thương mại bằng các bài đọc do AI tạo hằng tuần trong một khóa sau đại học về lãnh đạo giáo dục, và dù sinh viên đánh giá chúng hữu ích và 75 phần trăm đồng ý họ học được nhiều hơn so với một khóa tương đương, 4,487 trang nhật ký chỉ mang trích dẫn trong văn bản kiểu APA trên khoảng 0.80 phần trăm số trang và ghép một cơ sở hay hệ thống được nêu tên với các khẳng định chính sách quả quyết trên khoảng 1.03 phần trăm số trang mà không có nguồn kiểm chứng được. Bài học về tài liệu chương trình là coi các bài đọc được tạo ra như sản xuất nháp dưới sự duyệt của giảng viên, dự trù cho lao động thiết kế prompt và kiểm chứng của giảng viên, và tuyển chọn các nguồn đã kiểm định vào trợ lý thay vì để chất lượng nguồn cho sinh viên suy ra từ bối cảnh.

**Lập kế hoạch bài học có AI hỗ trợ ở tầng chương-trình-vào-lớp-học.** Ở điểm mà một chương trình trở thành một bài học được dạy, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo và Tahir (2025)]] so sánh bằng thực nghiệm các kế hoạch do giáo viên tạo với các kế hoạch có ChatGPT hỗ trợ trong [[stem-education|STEAM]] [[arts-design-and-media-education|giáo dục nghệ thuật]] cho trẻ em, phát hiện các kế hoạch có AI hỗ trợ được sáu giáo sư chuyên gia đánh giá cao hơn đáng kể (trung vị 20.5 so với 17.6, p = .002, hiệu ứng lớn). Họ cho thấy lợi ích phụ thuộc vào cách giáo viên ủy thác: phương pháp được khuyến nghị lấp đầy các khoảng trống nội dung trong một bài học do chính mình phác thảo (bảo tồn [[agency|quyền tự chủ]] thiết kế của giáo viên) thay vì ủy thác toàn bộ kế hoạch. Họ cũng đóng góp một mẫu prompt Role–Instructions–End Goal cho việc tạo sinh có thể tái lập và được kiểm soát chất lượng — bằng chứng rằng lập kế hoạch bài học bằng AI mạnh nhất khi được nhúng bên trong, chứ không thay thế, các quyết định chương trình của giáo viên. Trong giáo dục khoa học, thẩm định của chuyên gia đạt một phán quyết song song về thiết kế nền tảng: [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli và Yildirim (2026)]] để mười một chuyên gia [[science-education|giáo dục khoa học]] đánh giá ChatGPT-4 và một công cụ hướng tới giáo dục (Teacher's Buddy) trên các kế hoạch lớp sáu căn chỉnh với chương trình sửa đổi của Thổ Nhĩ Kỳ và mô hình Học tập [[design-based-research|Dựa trên Thiết kế]] của Engineering. Nền tảng hướng tới giáo dục đạt điểm cao hơn trên cả tám tiêu chí chất lượng — bao gồm các giai đoạn đậm phản hồi và căn chỉnh chương trình — bằng chứng rằng nhúng cấu trúc sư phạm vào một AI tạo ra đầu ra căn chỉnh tốt hơn. Vậy mà một số chuyên gia vẫn ưa kế hoạch đa dụng vì nhấn mạnh cảm xúc-xã hội mạnh hơn của nó, và 7 trong 11 đánh giá các kế hoạch là "dùng được sau khi sửa" thay vì dùng được trực tiếp. Việc chọn nền tảng và cách định khung prompt, không chỉ bản thân AI, định hình mức độ các kế hoạch được tạo ra căn chỉnh với chuẩn chương trình và các mô hình quy trình.

Cấu trúc, không phải cách diễn đạt prompt, là điều làm cho việc soạn thảo bằng AI trở nên đáng tin trong sản xuất: quy trình Curriculum-as-Code của [[curriculum-as-code-instructional-design-2026|Paiva (2026)]] cắt tỉa ngữ cảnh mạnh tay và tạo tài liệu từng phần một trên 28 bối cảnh dự án, điều này cắt thời gian chuẩn bị của giảng viên từ khoảng tám xuống hai giờ mỗi bài giảng và không để lại [[hallucination-risk|ảo giác]] khái niệm hay toán học nào cho [[human-in-the-loop-ai|con người duyệt lại]] bắt được.

### Kết nối với các khái niệm liên quan

Thiết kế chương trình kết nối trực tiếp với [[learning-design|thiết kế học tập]] — chương trình định nghĩa cái gì, giảng dạy định nghĩa như thế nào. Nó kết nối với [[ai-literacy|năng lực AI]] bởi việc nhúng năng lực AI là một thách thức chương trình chính, với [[teacher-role|vai trò giáo viên]] và [[educational-development|phát triển giáo dục]] bởi thay đổi chương trình đòi hỏi chuẩn bị cho nhà giáo dục, và với [[scaffolding|giàn giáo]] bởi chương trình được thiết kế tốt giàn giáo sự phát triển kỹ năng xuyên các khóa học và các năm. Các kết nối [[higher-ed|giáo dục đại học]] và [[k-12]] phản chiếu tính liên quan của thiết kế chương trình xuyên các cấp giáo dục.

**Chọn một khuôn khổ năng lực AI nghĩa là chọn một từ vựng chưa ai đối chiếu chéo.** Trong một tổng quan phạm vi 50 khuôn khổ K-12, [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026|Kharbach và cộng sự (2026)]] phát hiện các định nghĩa năng lực hội tụ về các chiều nhận thức, cảm xúc, hành vi, đạo đức và xã hội trong khi các nhãn và cấu trúc không khớp. Chỉ khuôn khổ ABCE tiến gần một truyền thống đo lường chung, được kiểm chứng xuyên Hồng Kông, Thượng Hải và Đài Loan, và tiến trình xuyên các dải lớp được đề xuất nhiều lần mà không được kiểm chứng ở đâu.

## Những hiểu lầm phổ biến

- **"Một [[llm]] có thể lập bản đồ một chương trình khi đã được kiểm chứng với độ tin cậy cao."** GPT-o3-mini phân bổ **100% trên bảy kỹ năng doanh nghiệp cho mỗi bài trong 48 bài đánh giá**, đạt **Krippendorff's alpha 0.81** so với trọng số chuyên gia — và **sự đồng thuận** vỡ ra ở những kỹ năng cụ thể. Độ tin cậy tổng thể cao với sự đồng thuận không đồng đều là mô thức cần kiểm tra trước khi tin vào bản đồ đó.
- **"Nhúng năng lực AI nghĩa là thêm một khóa học."** LearnAI cho thấy hình thức nhúng: một **tầng tiếp xúc rộng gồm các bài trình bày ngắn bên trong 18 khóa học hiện có xuyên năm ngành học (293 sinh viên)**. Sự tiếp xúc được phân tán khắp chương trình thay vì gom vào một đơn vị.
- **"Sinh viên đến đã có khả năng đánh giá truyền thông một cách phản biện."** Chỉ **13.8% sinh viên giáo dục và báo chí được khảo sát** nói khóa học của họ đề cập phân tích truyền thông phản biện, so với **97.8% đánh giá nó quan trọng**. Khoảng cách giữa việc coi trọng một kỹ năng và việc được dạy nó chính là khe mở của chương trình.

## Khái niệm liên quan
- [[pedagogical-partnerships]] — Quan hệ đối tác sư phạm
- [[business-education]]
- [[learning-design]]
- [[ai-literacy]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[higher-ed]]
- [[k-12]]
- [[stem-education]]
- [[cs-education]]
- [[generative-ai]]
- [[agentic-ai]]
- [[metacognition]]
- [[prompt-engineering]]
- [[collaborative-learning]]
- [[pedagogy]] — Ôm trùm: các phương pháp sư phạm và chiến lược giảng dạy trong giáo dục AI
- [[recommender-systems-and-learning-paths]]

## Bài viết liên quan
- [[genai-curriculum-analytics-mapping-higher-ed-2026]] — Lập bản đồ kỹ năng có trọng số, được chuyên gia kiểm chứng cho kiểm định
- [[mcinnes-salvaging-constructive-alignment-genai-2026]] — Phân tích diễn ngôn phản biện về hướng dẫn dùng GenAI cho căn chỉnh kiến tạo (McInnes và cộng sự 2026)
- [[icet-ml-education-trust-2026]] — Đề cập niềm tin vào các hệ thống AI qua giáo dục: một góc nhìn didactic
- [[refrain-amplify-genai-curriculum-2026]] — Khuôn khổ chương trình giữ-lại-rồi-khuếch-đại để sắp trình tự GenAI (Torres-Sahli và cộng sự 2026)
- [[mechanical-engineering-ai-curriculum-2026]] — Chương trình giáo dục AI theo dự án trong kỹ thuật nhiệt
- [[ying-genai-journalism-assessment-2026]]
- [[rook-plumb-genai-curricula-student-insights-2026]]
- [[zhou-constructive-alignment-genai-business-2026]]
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — Khuôn khổ Mức Sẵn sàng Lực lượng Lao động cho sản xuất thông minh trong kỷ nguyên AI
- [[rewriting-curriculum-genai-pedagogy-2026]] — Viết lại chương trình: thay đổi sư phạm do GenAI dẫn dắt
- [[critical-media-literacy-education-2026]]
- [[reshaping-cs-education-genai]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[ai-assisted-se-curriculum-syllabus-analysis-2026]]
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]]
- [[curriculum-as-code-instructional-design-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[finkelstein-principled-ai-education-2025]]
- [[hingle-collaborative-ai-literacy-2025]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Khuôn khổ Kỹ năng AI: 26 kỹ năng có thể đánh giá để lập bản đồ chương trình
- [[learnai-just-in-time-ai-cocreation-university-2026]] — LearnAI: đồng sáng tạo AI đúng lúc xuyên các ngành học
- [[ai-video-dual-gatekeeping-2026]] — Khi nói không tạo ra video tốt hơn: kiểm soát kép cho việc tạo nội dung AI có nền tảng sư phạm
- [[niri-steam-ai-literacy-review-2026]] — Giáo dục STEAM cho năng lực AI: tổng quan hệ thống
- [[caruana-pre-university-ai-education-slr-2026]] — Chuẩn bị cho người học và giáo viên một tương lai do AI dẫn dắt: tổng quan hệ thống về giáo dục AI trước đại học (Caruana và cộng sự 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Nền tảng có AI tạo ra các bài toán mô hình hóa toán học (ADDIE, RAG)
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[ai-particle-physics-education-redesign-2026]] — AI trong giáo dục vật lý hạt: các vấn đề nghiên cứu và kỹ năng nền tảng
- [[computing-assessment-genai-workshop-report-2026]] — AI có thể làm bài tập về nhà của bạn. Giờ thì sao? Báo cáo từ một hội thảo trực tuyến về đánh giá tin học trong kỷ nguyên AI sinh tạo
- [[kharbach-k12-ai-literacy-frameworks-scoping-review-2026]] - các khuôn khổ năng lực hội tụ về năm chiều mà không có từ vựng chung hay đối chiếu chéo
- [[bursic-ai-residency-education-curriculum-2026]] — Các rào cản đối với việc tích hợp AI vào chương trình nội trú: phỏng vấn định tính với mười hai lãnh đạo y khoa
