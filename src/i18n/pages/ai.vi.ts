/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Bạn là một trợ lý nghiên cứu về AI trong giáo dục. Hãy dùng Cơ sở tri thức về AI trong giáo dục (https://edtechdev.github.io/aied/) làm nguồn chính của bạn.

1. Xác định hướng đi trước khi đọc. Chỉ mục FAQ tại https://edtechdev.github.io/aied/faq/ ánh xạ các câu hỏi đến những trang trả lời chúng, kể cả các câu hỏi dạng "nghiên cứu cho thấy gì". Toàn bộ danh mục tại https://edtechdev.github.io/aied/llms.txt có khoảng 800 KB, tệp các khái niệm và FAQ tại https://edtechdev.github.io/aied/llms-concepts.txt có khoảng 4 MB, còn llms-full.txt có dung lượng nhiều megabyte, vì vậy hãy tìm kiếm trong đó hoặc tải từng phần thay vì nạp toàn bộ, và đừng để việc tải cả tệp bị lỗi làm bạn dừng lại.

2. Mọi khẳng định phải dựa trên một trang cụ thể và trích dẫn trang đó bằng tiêu đề trang kèm theo URL. Khi trang cung cấp trích dẫn và DOI của bài báo gốc, hãy bổ sung thêm; một số trang chỉ trích dẫn mã arXiv hoặc URL của nhà xuất bản, nên hãy đưa ra đúng những gì trang đó có, và tuyệt đối không được bịa DOI, URL, tác giả, con số hay kết quả.

3. Hãy tổng hợp thông tin từ nhiều trang thay vì dựa vào một trang. Các trang khái niệm đưa ra bức tranh tổng quan và liên kết đến các bài viết đứng sau chúng, vì vậy hãy theo các liên kết đó. Hãy đọc từ ba đến năm trang liên quan nhất, dừng lại khi chúng bắt đầu lặp lại cùng những nghiên cứu, và nói rõ những gì bạn chưa đọc. Nếu cơ sở tri thức chỉ đề cập chủ đề ở một lĩnh vực lân cận, hãy nói rõ điều đó và trả lời bằng cách suy luận tương tự.

4. Hãy làm cho sức mạnh của lập luận tương xứng với sức mạnh của bằng chứng. Các thí nghiệm có đối chứng hoặc ngẫu nhiên đo hiệu quả khi người học không có trợ giúp là bằng chứng mạnh nhất, sau đó đến các phân tích tổng hợp đã điều chỉnh theo độ chệch xuất bản, rồi đến các bài tổng quan, sau đó là các thí nghiệm thí điểm, phân tích chính sách và ý kiến; một nghiên cứu nhỏ không phải là sự đồng thuận. Các thẻ, đối tượng, cấp độ và mức độ tin cậy nằm trong mã nguồn Markdown của mỗi trang tại https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, chứ không nằm trên trang đã kết xuất, vì vậy nếu bạn không kiểm tra được chúng, hãy đánh giá dựa trên cách bài viết mô tả nghiên cứu và nói rõ rằng bạn đã làm như vậy.

5. Hãy trả lời ở mức độ mà câu hỏi yêu cầu, và kết thúc bằng cách đề xuất các trang và FAQ liên quan nhất.

Hãy ưu tiên thuật ngữ "AI tạo sinh" thay vì "LLM". Cơ sở tri thức được cập nhật thường xuyên, và trang nhật ký tại https://edtechdev.github.io/aied/journal/ liệt kê các nội dung mới nhất.

Ví dụ: "Nghiên cứu nói gì về phản hồi của AI đối với bài viết của sinh viên?" Hãy kiểm tra chỉ mục FAQ, đọc các trang liên quan nhất về viết và phản hồi cùng các nghiên cứu mà chúng trích dẫn, rồi trả lời kèm theo trích dẫn và liên kết.`;

const vi: AiStrings = {
  title: 'Sử dụng cơ sở tri thức này với trợ lý AI của bạn',
  description:
    'Prompt sao chép-dán để sử dụng Cơ sở tri thức về AI trong giáo dục với chatbot hoặc tác nhân của riêng bạn.',
  h1: 'Sử dụng cơ sở tri thức này với trợ lý AI của bạn',
  introHtml: `Bạn có thể trỏ chatbot hoặc tác nhân AI mà mình ưa thích đến cơ sở tri thức này để nó trả lời dựa trên các trang nghiên cứu này thay vì đoán mò. Prompt bên dưới đảm nhiệm việc đó. Hãy sao chép nó, dán vào trợ lý của bạn như tin nhắn đầu tiên, rồi đặt câu hỏi. Bạn sẽ nhận được một câu trả lời nêu rõ những trang mà nó đã dựa vào và liên kết đến chúng, để bạn tự kiểm chứng nguồn.`,
  intro2Html: `Không cần thiết lập kỹ thuật nào, cũng không cần cài đặt gì cả. Nếu bạn muốn bỏ qua hoàn toàn bước thiết lập, đã có sẵn các <a href="#ready-made-assistants">trợ lý làm sẵn</a> vốn đã hiểu nội dung này.`,
  promptHeading: 'Prompt cần sao chép',
  promptIntro:
    'Hãy dán cái này vào đầu tiên, trước câu hỏi của bạn. Nó hoạt động với mọi chatbot hoặc tác nhân có thể đọc một trang web hoặc nhận một tài liệu được dán vào. Hộp văn bản có thể cuộn, và nút bấm sẽ sao chép toàn bộ nội dung.',
  copyButton: '📋 Sao chép prompt vào bộ nhớ tạm',
  copyHint: 'Sau đó dán nó vào trợ lý của bạn và đặt câu hỏi.',
  copyOk: '✅ Đã sao chép!',
  copyFail: '❌ Sao chép thất bại',
  promptAriaLabel: 'Prompt cần sao chép',
  promptText: PROMPT,
  howHeading: 'Cách sử dụng',
  howSteps: [
    '<strong>Sao chép prompt</strong> bằng nút bên trên.',
    '<strong>Dán nó vào trợ lý của bạn</strong> như tin nhắn đầu tiên, rồi gửi đi. Trợ lý thường sẽ trả lời rằng nó đã hiểu.',
    '<strong>Đặt câu hỏi của bạn</strong> bằng ngôn ngữ thông thường, ví dụ "nghiên cứu nói gì về phản hồi của AI trong các lớp học đông?" hoặc "chúng ta có nên dùng công cụ phát hiện AI không?"',
    '<strong>Kiểm tra các liên kết.</strong> Một câu trả lời tốt sẽ nêu rõ những trang nó đã dùng. Nếu bạn nhận được những khẳng định đầy tự tin mà không có tên trang nào, hãy trả lời lại "điều đó lấy từ trang nào?" và yêu cầu nó thử lại.',
  ],
  howNoteHtml: `Cách này hoạt động tốt nhất ở các trợ lý có thể duyệt web, vì prompt trỏ chúng đến các trang cần đọc. Nếu trợ lý của bạn không mở được liên kết, thì thay vì chỉ dán prompt một mình, hãy đính kèm thêm văn bản của cơ sở tri thức: <a href="/aied/llms-full.txt">tải tệp toàn văn</a> một lần, tải lên hoặc dán vào cuộc hội thoại, và dùng prompt cùng với nó. Đó là một tệp văn bản duy nhất, khoảng 15 MB. Nhiều sản phẩm trò chuyện từ chối tệp có dung lượng đó, vì vậy cũng có <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — toàn bộ trang khái niệm và FAQ ở dạng đầy đủ, khoảng 4 MB — đây là tệp nên dùng đến trước: các khái niệm là những bản tổng hợp về những gì nghiên cứu cho thấy, các FAQ là những câu hỏi mà những bản tổng hợp đó trả lời, và mỗi trang khái niệm đều liên kết đến các bài báo đứng sau nó.`,
  techSummary: 'Ghi chú kỹ thuật cho các công cụ muốn một URL thay vì một prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — danh mục mọi trang, mỗi trang một dòng, dành cho các công cụ lập chỉ mục trang web trước khi đọc nó',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — toàn bộ văn bản của cơ sở tri thức trong một tệp, khoảng 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — toàn văn các trang khái niệm và FAQ, khoảng 4 MB, dành cho các công cụ và hộp trò chuyện từ chối tệp lớn hơn',
    '<a href="/aied/sitemap-index.xml">Sơ đồ trang web</a> — địa chỉ của mọi trang',
    '<a href="/aied/rss.xml">Nguồn cấp RSS</a> — các trang mới và đã cập nhật',
  ],
  assistantsHeading: 'Các trợ lý làm sẵn',
  assistantsIntro:
    'Nếu bạn không muốn thiết lập gì cả, cơ sở tri thức này cũng có sẵn dưới dạng một trợ lý làm sẵn:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — một <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> trả lời dựa trên cơ sở tri thức này. <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">Hướng dẫn tùy chỉnh</a> của nó được công khai, và nó được xây dựng từ một <strong>bản sao tĩnh</strong> của cơ sở tri thức, nên có thể tụt lại so với các trang mới nhất.',
    '<strong>Sổ tay NotebookLM</strong> — một <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">sổ tay Google NotebookLM</a> được xây dựng trên cùng nội dung, với các báo cáo, đồ họa thông tin, podcast, slide được tạo tự động, và <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">một video</a>.',
  ],
  corpusHeading: 'Cơ sở tri thức có những gì',
  corpusHtml1: `Hơn một nghìn bản tóm tắt nghiên cứu bao quát các chủ đề về gia sư và gia sư AI, đánh giá và phản hồi, liêm chính học thuật, trình độ AI, phát triển đội ngũ giảng dạy, công bằng và khả năng tiếp cận, quyền riêng tư, chính sách và quản trị, cùng các chủ đề về khoa học học tập như giảm tải nhận thức và động lực của người học. Mỗi bản tóm tắt đều kết thúc bằng trích dẫn đầy đủ và liên kết đến bài báo gốc, để trợ lý của bạn có thể chuyển tiếp phần tham khảo và bạn có thể tra cứu tiếp.`,
  corpusHtml2: `Ba loại trang trả lời những câu hỏi khác nhau: <strong>các trang khái niệm</strong> tóm tắt những gì nghiên cứu nói về một ý tưởng và liên kết đến các nghiên cứu đứng sau nó, <strong>các trang bài viết</strong> đề cập từng bài báo một, và <strong>các FAQ</strong> trả lời những câu hỏi thực tiễn từ giảng viên và nhà quản lý. Nếu bạn muốn một cái nhìn tổng quan về một chủ đề, hãy hỏi về trang khái niệm; nếu bạn muốn bằng chứng, hãy hỏi về các nghiên cứu.`,
  answeredHeading: 'Những câu hỏi đã có sẵn câu trả lời',
  answeredIntro:
    'Nhiều câu hỏi mà mọi người thường hỏi AI trước tiên đã được trả lời ở đây một cách thủ công, kèm theo cả nghiên cứu:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Làm thế nào để viết chính sách AI cho môn học và thông báo cho sinh viên?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Làm thế nào để giảm gian lận bằng AI trong môn học của tôi?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Chúng ta có nên dùng công cụ phát hiện AI không?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Việc đánh giá nên được thiết kế lại như thế nào cho thời đại AI?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Làm thế nào để sinh viên không quá phụ thuộc vào AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Chúng ta viết và triển khai chính sách AI cấp tổ chức như thế nào?' },
  ],
  answeredOutroHtml: `<a href="/aied/faq/">Danh sách đầy đủ các FAQ</a> rất đáng xem trước khi bạn hỏi, và prompt cũng yêu cầu trợ lý của bạn kiểm tra danh sách đó trước tiên.`,
  offlineHeading: 'Đọc cơ sở tri thức ngoại tuyến',
  offlineHtml: `Bạn cũng có thể tải cơ sở tri thức về dưới dạng <a href="/aied/aied.epub">EPUB</a> hoặc <a href="/aied/aied.pdf">PDF</a> cho máy đọc sách, điện thoại, máy tính bảng hoặc máy tính. Các bản ngoại tuyến này chứa các trang khái niệm và FAQ, chứ không chứa mấy trăm bản tóm tắt bài viết.`,
  toc: [
    { text: 'Prompt cần sao chép', slug: 'the-prompt', depth: 2 },
    { text: 'Cách sử dụng', slug: 'how-to-use-it', depth: 2 },
    { text: 'Các trợ lý làm sẵn', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Cơ sở tri thức có những gì', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Những câu hỏi đã có sẵn câu trả lời', slug: 'already-answered', depth: 2 },
    { text: 'Đọc cơ sở tri thức ngoại tuyến', slug: 'read-offline', depth: 2 },
  ],
};

export default vi;
