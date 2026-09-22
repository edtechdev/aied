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

const PROMPT = `Você é um assistente de pesquisa sobre IA na educação. Use a AI in Education Knowledge Base (https://edtechdev.github.io/aied/) como sua fonte principal.

1. Escolha a rota antes de ler. O índice de perguntas frequentes em https://edtechdev.github.io/aied/faq/ mapeia as perguntas para as páginas que as respondem, incluindo as perguntas do tipo "o que a pesquisa mostra". O catálogo completo em https://edtechdev.github.io/aied/llms.txt tem cerca de 800 KB, o arquivo de conceitos e perguntas frequentes em https://edtechdev.github.io/aied/llms-concepts.txt tem cerca de 4 MB, e o llms-full.txt tem vários megabytes, então pesquise neles ou baixe partes em vez de carregá-los inteiros, e não deixe que uma tentativa malsucedida de baixar o arquivo inteiro faça você parar.

2. Fundamente cada afirmação em uma página e cite-a com o título da página seguido da sua URL. Quando a página trouxer a citação do trabalho original e o DOI, acrescente-os; algumas páginas citam apenas um identificador do arXiv ou uma URL da editora, então dê o que a página dá e nunca invente um DOI, uma URL, um autor, um número ou um resultado.

3. Sintetize entre várias páginas em vez de se apoiar em uma só. As páginas de conceito dão a visão geral e linkam os artigos por trás delas, então siga esses links. Leia de três a cinco das páginas mais relevantes, pare quando elas começarem a repetir os mesmos estudos e diga o que você não leu. Se a base de conhecimento só cobre o tema em uma área vizinha, diga isso e responda por analogia.

4. Ajuste a força da sua resposta à força da evidência. Experimentos controlados ou randomizados que medem o desempenho sem ajuda são os mais fortes; depois vêm as meta-análises ajustadas por viés de publicação, depois as revisões, e por fim os estudos-piloto, as análises de políticas e as opiniões; um único estudo pequeno não é consenso. As etiquetas, o público, o nível e as avaliações de confiança ficam no código Markdown de cada página em https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, e não na página renderizada, então se você não puder conferi-los, julgue pela forma como o artigo descreve o estudo e diga que foi isso que você fez.

5. Responda no nível que a pergunta pede e termine recomendando as páginas e as perguntas frequentes mais relevantes.

Prefira o termo "IA generativa" a "LLM". A base de conhecimento é atualizada com regularidade, e a página do diário em https://edtechdev.github.io/aied/journal/ lista as novidades mais recentes.

Exemplo: "O que a pesquisa diz sobre feedback com IA para a escrita de estudantes?" Consulte o índice de perguntas frequentes, leia as páginas mais relevantes sobre escrita e feedback, além dos estudos que elas citam, e responda com citações e links.`;

const pt: AiStrings = {
  title: 'Use esta base de conhecimento com o seu próprio assistente de IA',
  description: 'Prompt para copiar e colar e usar a AI in Education Knowledge Base com o seu próprio chatbot ou agente.',
  h1: 'Use esta base de conhecimento com o seu próprio assistente de IA',
  introHtml: `Você pode apontar seu chatbot ou agente de IA preferido para esta base de conhecimento, para que ele responda a partir dessas páginas de pesquisa em vez de chutar. O prompt abaixo faz esse trabalho. Copie-o, cole-o no seu assistente como primeira mensagem e faça sua pergunta. Você deve receber uma resposta que nomeia as páginas em que se baseou e linka para elas, para que você mesmo confira as fontes.`,
  intro2Html: `Isso não envolve nenhuma configuração técnica e nada precisa ser instalado. Se você preferir pular a configuração por completo, existem <a href="#ready-made-assistants">assistentes prontos</a> que já conhecem este material.`,
  promptHeading: 'O prompt para copiar',
  promptIntro: 'Cole isto primeiro, antes da sua pergunta. Funciona com qualquer chatbot ou agente que consiga ler uma página da web ou aceitar um documento colado. A caixa rola e o botão copia tudo.',
  copyButton: '📋 Copiar o prompt para a área de transferência',
  copyHint: 'Depois cole no seu assistente e faça sua pergunta.',
  copyOk: '✅ Copiado!',
  copyFail: '❌ Falha ao copiar',
  promptAriaLabel: 'Prompt para copiar',
  promptText: PROMPT,
  howHeading: 'Como usar',
  howSteps: [
    '<strong>Copie o prompt</strong> com o botão acima.',
    '<strong>Cole-o no seu assistente</strong> como primeira mensagem e envie. Normalmente ele vai responder que entendeu.',
    '<strong>Faça sua pergunta</strong> em linguagem simples, por exemplo "o que a pesquisa diz sobre feedback com IA em turmas grandes?" ou "deveríamos usar detectores de IA?"',
    '<strong>Confira os links.</strong> Uma boa resposta nomeia as páginas que usou. Se você receber afirmações confiantes sem nenhum nome de página, responda "de qual página isso veio?" e peça que ele tente de novo.',
  ],
  howNoteHtml: `Isso funciona melhor em assistentes que conseguem navegar na web, já que o prompt indica páginas para eles lerem. Se o seu não consegue abrir links, então, em vez de colar o prompt sozinho, anexe também o texto da base de conhecimento: <a href="/aied/llms-full.txt">baixe o arquivo de texto completo</a> uma vez, envie ou cole-o na conversa e use o prompt junto com ele. É um único arquivo de texto de cerca de 15 MB. Muitos produtos de chat recusam um arquivo desse tamanho, então também existe o <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — todas as páginas de conceito e de perguntas frequentes na íntegra, cerca de 4 MB — que é o melhor arquivo para recorrer primeiro: os conceitos são as sínteses do que a pesquisa mostra, as perguntas frequentes são as perguntas que essas sínteses respondem, e cada página de conceito linka os artigos por trás dela.`,
  techSummary: 'Notas técnicas para ferramentas que querem uma URL em vez de um prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — um catálogo de todas as páginas, uma linha cada, para ferramentas que indexam um site antes de lê-lo',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — o texto completo da base de conhecimento em um único arquivo, cerca de 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — o texto completo das páginas de conceito e de perguntas frequentes, cerca de 4 MB, para ferramentas e chats que recusam o arquivo maior',
    '<a href="/aied/sitemap-index.xml">Sitemap</a> — todos os endereços de página',
    '<a href="/aied/rss.xml">Feed RSS</a> — páginas novas e atualizadas',
  ],
  assistantsHeading: 'Assistentes prontos',
  assistantsIntro: 'Se você preferir não configurar nada, esta base de conhecimento também está disponível como assistente pronto:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — um <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> que responde a partir desta base de conhecimento. Suas <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">instruções personalizadas</a> são públicas, e ele foi criado a partir de uma <strong>cópia estática</strong> da base de conhecimento, então pode ficar atrás das páginas mais recentes.',
    '<strong>Caderno do NotebookLM</strong> — um <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">caderno do Google NotebookLM</a> criado com o mesmo material, com relatórios, infográficos, um podcast e slides gerados automaticamente, e <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">um vídeo</a>.',
  ],
  corpusHeading: 'O que há na base de conhecimento',
  corpusHtml1: `Mais de mil resumos de pesquisa cobrem tutoria e tutores de IA, avaliação e feedback, integridade acadêmica, letramento em IA, desenvolvimento de professores e do corpo docente, equidade e acessibilidade, privacidade, política e governança, e temas de ciência da aprendizagem, como descarregamento cognitivo e motivação dos estudantes. Todo resumo termina com a citação completa e um link para o artigo original, para que seu assistente possa repassar a referência e você possa consultá-la depois.`,
  corpusHtml2: `Três tipos de página respondem a perguntas diferentes: as <strong>páginas de conceito</strong> resumem o que a pesquisa diz sobre uma ideia e linkam os estudos por trás dela, as <strong>páginas de artigo</strong> tratam um trabalho por vez, e as <strong>perguntas frequentes</strong> respondem a dúvidas práticas de professores e administradores. Se você quer uma visão geral de um tema, peça uma página de conceito; se quer a evidência, peça os estudos.`,
  answeredHeading: 'Perguntas que já têm resposta',
  answeredIntro: 'Muitas das perguntas que as pessoas fazem primeiro a uma IA já foram respondidas aqui à mão, com a pesquisa anexada:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Como escrevo uma política de IA para um curso e a comunico aos estudantes?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Como posso reduzir a cola com IA no meu curso?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Deveríamos usar detectores de IA?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Como a avaliação deveria ser redesenhada para a era da IA?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Como evito que os estudantes dependam demais da IA?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Como escrevemos e implementamos uma política institucional de IA?' },
  ],
  answeredOutroHtml: `Vale a pena dar uma olhada na <a href="/aied/faq/">lista completa de perguntas frequentes</a> antes de perguntar, e o prompt instrui seu assistente a conferir essa lista primeiro.`,
  offlineHeading: 'Leia a base de conhecimento offline',
  offlineHtml: `Você também pode baixar a base de conhecimento em <a href="/aied/aied.epub">EPUB</a> ou <a href="/aied/aied.pdf">PDF</a> para um leitor de ebooks, celular, tablet ou computador. Essas edições offline contêm as páginas de conceito e as perguntas frequentes, e não as várias centenas de resumos de artigos.`,
  toc: [
    { text: 'O prompt para copiar', slug: 'the-prompt', depth: 2 },
    { text: 'Como usar', slug: 'how-to-use-it', depth: 2 },
    { text: 'Assistentes prontos', slug: 'ready-made-assistants', depth: 2 },
    { text: 'O que há na base de conhecimento', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Perguntas que já têm resposta', slug: 'already-answered', depth: 2 },
    { text: 'Leia a base de conhecimento offline', slug: 'read-offline', depth: 2 },
  ],
};

export default pt;
