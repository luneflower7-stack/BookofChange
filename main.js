import { buildGuideHTML, getGuideLocale } from "./guide-content.mjs";

// --- (0) Internationalization Data ---
const i18n = {
    ko: {
        title: "🐶 주역천재 멍선생 🐶",
        subtitle: "당신의 고민을 사랑스러운 강아지와 함께 주역으로 풀어보세요.",
        labelConcern: "어떤 게 궁금해? 멍멍이 친구들이 알려줄게! ✨",
        placeholder: "여기에 고민을 구체적으로 적어주면 강아지 친구들이 도와줄 거야...",
        startButton: "🐾 운세 시작하기 🐾",
        divinationGuide: (count) => `나무통을 흔들어서 효(爻)를 하나씩 뽑아보자! (${count}/6)`,
        analyzing: "강아지가 우주의 기운을 모아 네 고민을 분석 중이야... 🐾",
        dogBreedLabel: "당신에게 운세를 전달해주는 강아지 : ",
        retryButton: "다시 해보기 🌸",
        disclaimer: "※ 주역 운세는 참고용일 뿐이야! 너무 맹신하지 말고 재미로만 봐줘~ 💖",
        alertEmptyConcern: "어떤 게 궁금해? 고민을 먼저 적어줘! ✨",
        qPrefix: "Q. ",
        empathy: "네 고민을 가만히 들여다보니 그동안 얼마나 마음을 썼을지 충분히 느껴져서 내 마음도 뭉클해지네. 혼자서 해결책을 찾으려 애썼을 네 예쁜 마음을 꼭 안아주고 싶어. 이제 주역의 지혜를 빌려 같이 길을 찾아보자.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `네가 뽑은 운세는 하괘 **${lower}**와 상괘 **${upper}**이 만난 조합이야. ${lowerDesc}의 기운 위에 ${upperDesc}의 흐름이 더해진 아주 특별한 상황이지.`,
        defaultHexName: "신비로운 괘",
        navHome: "홈",
        navGuide: "64괘 해설",
        navAbout: "소개",
        navPrivacy: "개인정보처리방침",
        navContact: "문의",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "64괘를 한눈에 읽는 해설 라이브러리",
        guidePreviewDescription: "홈 화면의 운세 체험과 별도로, 각 괘의 핵심 의미와 현실적인 조언을 정리한 긴 읽을거리 화면을 제공합니다.",
        openGuideButton: "64괘 해설 보러 가기",
        visitorLabel: "방문자",
        visitorLoading: "불러오는 중...",
        aboutTitle: "주역천재 멍선생 소개",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">주역이란 무엇인가?</h3>
                        <p>주역(周易, I Ching)은 동양에서 가장 오래된 경전 중 하나로, '변화의 서'라고도 불립니다. 삼라만상의 변화 원리를 64개의 괘(卦)로 설명하며, 수천 년 동안 철학, 정치, 윤리의 지침서가 되어왔습니다. 주역은 단순히 미래를 점치는 도구를 넘어, 현재의 상황을 통찰하고 올바른 선택을 내릴 수 있도록 돕는 지혜의 보고입니다.</p>
                        <p>본 서비스는 이러한 고전의 지혜를 현대적인 알고리즘과 따뜻한 강아지 캐릭터의 조언을 통해 재해석하여 제공합니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">서비스 안내</h3>
                        <p><strong>주역천재 멍선생</strong>은 사용자가 직접 입력한 고민을 바탕으로 주역의 상징과 흐름을 현대적인 언어로 풀어 설명하는 해석형 콘텐츠 서비스입니다. 단순히 결과만 보여주는 운세 버튼이 아니라, 질문을 정리하고 현재 상황을 돌아보며 스스로 판단의 실마리를 찾도록 돕는 것을 목표로 합니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">이용 방법</h3>
                        <ol class="feature-list">
                            <li>현재 가장 고민되는 상황을 구체적으로 적어 주세요.</li>
                            <li>효를 하나씩 뽑으며 질문에 집중하는 시간을 가집니다.</li>
                            <li>결과가 나오면 괘의 이름, 상징, 조언을 읽고 자신의 상황과 비교해 보세요.</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">이 사이트가 제공하는 읽을거리</h2>
                        <p><strong>주역천재 멍선생</strong>은 사용자가 자신의 고민을 정리하고 주역의 지혜를 통해 현재를 돌아볼 수 있도록 돕는 해석형 콘텐츠 서비스입니다. 우리는 전통적인 64괘의 의미를 현대적 감각으로 재해석하여 깊이 있는 읽을거리를 제공합니다.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">콘텐츠 운영 원칙</h3>
                        <p>자극적인 단정보다는 성찰과 해석 중심의 문장으로 구성됩니다. 특히 건강, 법률, 투자와 같은 전문적인 판단이 필요한 분야는 현실적인 정보와 함께 참고할 것을 권장하며, 균형 잡힌 시각을 유지합니다.</p>
                    </article>
                </div>
        `,
        privacyTitle: "개인정보처리방침",
        privacyContent: `
                <p><strong>1. 개인정보의 수집 및 이용 목적</strong><br>
                본 서비스는 점괘 생성을 위해 입력된 '고민 내용'만을 일시적으로 사용하며, 서버에 영구적으로 저장하거나 개인을 식별하지 않습니다.</p>
                <p><strong>2. 쿠키 및 광고</strong><br>
                구글 애드센스 광고를 게재하며, 맞춤형 광고 제공을 위해 쿠키를 활용할 수 있습니다.</p>
        `,
        contactTitle: "문의하기",
        contactContent: `
                <p>서비스 이용 중 궁금한 점이나 제안 사항이 있으시면 아래 이메일로 연락주세요.</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>여러분의 소중한 피드백은 멍선생이 더 똑똑해지는 데 큰 힘이 됩니다!</p>
        `,
        backHome: "🐾 홈으로 돌아가기 🐾",
        footerCopy: "&copy; 2026 주역천재 멍선생. All rights reserved.",
        footerNote: "이 사이트의 핵심 목적은 사용자가 주역 해석 콘텐츠를 읽고 자신의 고민을 정리해 보는 경험을 제공하는 것입니다.",
        trigrams: {
            "111": { name: "하늘(天)", desc: "강건하고 창조적인 에너지" },
            "000": { name: "땅(地)", desc: "포용하고 수용하는 안정감" },
            "100": { name: "우레(雷)", desc: "새로운 시작과 강력한 움직임" },
            "011": { name: "바람(風)", desc: "유연하고 스며드는 영향력" },
            "010": { name: "물(水)", desc: "험난함 속에서 흐르는 지혜" },
            "101": { name: "불(火)", desc: "명확한 판단과 화려한 결실" },
            "001": { name: "산(山)", desc: "멈추어 내실을 기하는 무게감" },
            "110": { name: "연못(澤)", desc: "기쁨과 소통의 화합" }
        }
    },
    en: {
        title: "🐶 Master Meng: I Ching Genius 🐶",
        subtitle: "Unlock your future with adorable dogs through ancient wisdom.",
        labelConcern: "What's on your mind? Doggy friends will help! ✨",
        placeholder: "Tell your concerns here, your dog friends will guide you...",
        startButton: "🐾 Start My Fortune 🐾",
        divinationGuide: (count) => `Shake the box and draw a line! (${count}/6)`,
        analyzing: "The dog is gathering cosmic energy to analyze your concern... 🐾",
        dogBreedLabel: "The dog delivering your fortune: ",
        retryButton: "Try Again 🌸",
        disclaimer: "※ For entertainment only! Use the wisdom as a friendly guide~ 💖",
        alertEmptyConcern: "What are you curious about? Share your concern first! ✨",
        qPrefix: "Q. ",
        empathy: "I can feel how much you've been thinking about this. Your beautiful heart deserves to be understood. Let's look for answers together using the I Ching.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Your fortune is a mix of **${lower}** below and **${upper}** above. It represents ${upperDesc} flowing over ${lowerDesc}.`,
        defaultHexName: "Mystical Hexagram",
        navHome: "Home",
        navGuide: "64 Hexagrams",
        navAbout: "About",
        navPrivacy: "Privacy",
        navContact: "Contact",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "A practical library for all 64 hexagrams",
        guidePreviewDescription: "Beyond the fortune interaction on the home screen, this site includes a long-form reading page that explains each hexagram in plain language.",
        openGuideButton: "Open the 64-hexagram guide",
        visitorLabel: "Visitors",
        visitorLoading: "Loading...",
        aboutTitle: "About Master Meng: I Ching Genius",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">What is I Ching?</h3>
                        <p>The I Ching (Book of Changes) is one of the oldest ancient Chinese texts, serving as a guide for philosophy, politics, and ethics for thousands of years. It describes the changing principles of the universe through 64 hexagrams. Beyond a simple divination tool, it is a treasury of wisdom that helps people gain insight into their current situation and make better choices.</p>
                        <p>Our service reinterprets this classical wisdom through modern AI algorithms and adorable dog characters who deliver the message to you.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Service Guide</h3>
                        <p><strong>Master Meng: I Ching Genius</strong> is an interpretive content service that explains the symbols and flow of the I Ching in modern language. Our goal is to help users organize their questions and reflect on their life situation with a calm mind.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">How to Use</h3>
                        <ol class="feature-list">
                            <li>Describe your current concern specifically.</li>
                            <li>Take a moment to focus while drawing each line.</li>
                            <li>Read the result and compare the wisdom with your reality.</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Reading Materials on This Site</h2>
                        <p><strong>Master Meng: I Ching Genius</strong> is designed to provide substantial reading materials about the I Ching and help visitors reflect on their thoughts. We reinterpret the traditional 64 hexagrams for a modern audience.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Editorial Principles</h3>
                        <p>We favor reflective and interpretive language over sensational predictions. For topics requiring professional advice (health, law, finance), we encourage users to consult real-world facts alongside our content.</p>
                    </article>
                </div>
        `,
        privacyTitle: "Privacy Policy",
        privacyContent: `
                <p><strong>1. Purpose</strong><br>
                We use the 'concern text' only temporarily to generate the result. We do not store personally identifiable information.</p>
                <p><strong>2. Cookies & Ads</strong><br>
                We use Google AdSense and cookies to provide a better experience and relevant ads.</p>
        `,
        contactTitle: "Contact Us",
        contactContent: `
                <p>If you have any questions or suggestions, please contact us via email.</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>Your feedback helps Master Meng become even smarter!</p>
        `,
        backHome: "🐾 Back to Home 🐾",
        footerCopy: "&copy; 2026 Master Meng: I Ching Genius. All rights reserved.",
        footerNote: "The main purpose of this site is to help visitors read I Ching interpretations and organize their thoughts with care.",
        trigrams: {
            "111": { name: "Heaven", desc: "strong and creative energy" },
            "000": { name: "Earth", desc: "stability that accepts everything" },
            "100": { name: "Thunder", desc: "new beginnings and movement" },
            "011": { name: "Wind", desc: "flexible and soft influence" },
            "010": { name: "Water", desc: "wisdom flowing through hardship" },
            "101": { name: "Fire", desc: "clear judgment and bright results" },
            "001": { name: "Mountain", desc: "inner strength and stillness" },
            "110": { name: "Lake", desc: "harmony of joy and communication" }
        }
    },
    ja: {
        title: "周易の天才 メン先生 🐶",
        subtitle: "あなたの悩みを可愛いわんちゃんと一緒に周易で解決しましょう。",
        labelConcern: "悩みごとは何？わんちゃんたちが教えてあげる！ ✨",
        placeholder: "ここに悩みを具体的に書くと、わんちゃんたちが助けてくれるよ...",
        startButton: "🐾 占いを開始する 🐾",
        divinationGuide: (count) => `木箱を振って、爻（こう）を一つずつ引いてみよう！ (${count}/6)`,
        analyzing: "わんちゃんが宇宙の気運を集めて、あなたの悩みを分析中だよ... 🐾",
        dogBreedLabel: "あなたに運勢を届けてくれるわんちゃん：",
        retryButton: "もう一度やる 🌸",
        disclaimer: "※ 周易占いは参考用です。あまり盲信せず、楽しんで見てね〜 💖",
        alertEmptyConcern: "悩みごとは何？まずは悩みを書いてね！ ✨",
        qPrefix: "Q. ",
        empathy: "あなたの悩みをじっと見つめていると、これまでどれほど心を砕いてきたかが伝わってきて、私も胸が熱くなります。さあ、周易の知恵を借りて、一緒に道を探してみましょう。",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `あなたが引いた運勢は、下卦の**${lower}**と上卦の**${upper}**が合わさった組み合わせだよ。`,
        defaultHexName: "神秘的な卦",
        navHome: "ホーム",
        navGuide: "64卦ガイド",
        navAbout: "紹介",
        navPrivacy: "プライバシー",
        navContact: "お問い合わせ",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "64卦をまとめて読める解説ライブラリ",
        guidePreviewDescription: "ホームの占い体験とは別に、各卦の意味と現実的な助言を整理した長文コンテンツ画面を用意しています。",
        openGuideButton: "64卦ガイドを見る",
        visitorLabel: "訪問者",
        visitorLoading: "読み込み中...",
        aboutTitle: "周易の天才 メン先生について",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">周易とは何ですか？</h3>
                        <p>周易（I Ching）は、東洋で最も古い経典の一つで、「変化の書」とも呼ばれています。森羅万象の変化の原理を64の卦で説明し、数千年にわたり哲学、政治、倫理の指針となってきました。周易は単なる占い道具を超え、現在の状況を洞察し、正しい選択を下すのを助ける知恵の宝庫です。</p>
                        <p>当サービスでは、この古典の知恵を現代的なアルゴリズムと親しみやすいわんちゃんキャラクターを通じて再解釈し、提供しています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">サービス案内</h3>
                        <p><strong>周易の天才 メン先生</strong>は、利用者が入力した悩みをもとに、周易の象徴と流れを現代的な言葉で解きほぐして伝える解釈型コンテンツサービスです。結果だけを見せる占いボタンではなく、問いを整理し、今の状況を見つめ直し、自分で判断の糸口を見つける手助けを目指しています。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">利用方法</h3>
                        <ol class="feature-list">
                            <li>今いちばん気になっている状況を、具体的に書いてください。</li>
                            <li>爻を一つずつ引きながら、質問に集中する時間を持ちます。</li>
                            <li>結果が表示されたら、卦の名前、象徴、助言を今の自分の状況と照らし合わせてみてください。</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">このサイトが提供する読み物</h2>
                        <p><strong>周易の天才 メン先生</strong>は、利用者が悩みを整理し、周易の知혜を通じて現在を振り返ることができるように設計された解釈型コンテンツサービスです. 私たちは伝統的な64卦の意味を現代的な感覚で再解釈し、深みのある読み物を提供します。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">コンテンツ運営原則</h3>
                        <p>刺激的な断定よりも、内省と解釈を重視した文章で構成されています。健康、法律、投資のように慎重な判断が必要な領域では、現実の情報とあわせて考えることを推奨し、均衡の取れた視点を維持します。</p>
                    </article>
                </div>
        `,
        privacyTitle: "プライバシーポリシー",
        privacyContent: `
                <p><strong>1. 個人情報の収集および利用目的</strong><br>
                本サービスは、点卦生成のために入力された「悩み内容」のみを一時的に使用し、サーバーに永久に保存したり個人を特定したりすることはありません。</p>
                <p><strong>2. クッキーおよび広告</strong><br>
                Googleアドセンス広告を掲載しており、パーソナライズ広告の提供のためにクッキーを活用することがあります。</p>
        `,
        contactTitle: "お問い合わせ",
        contactContent: `
                <p>サービス利用に関するご質問やご提案がございましたら、以下のメールアドレスまでご連絡ください。</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>皆様からの貴重なフィードバックは、メン先生がより賢くなるための大きな力になります！</p>
        `,
        backHome: "🐾 ホームへ戻る 🐾",
        footerCopy: "&copy; 2026 周易の天才 メン先生. All rights reserved.",
        footerNote: "このサイトの主な目的は、周易の解釈を読みながら自分の考えを整理する体験を提供することです。",
        trigrams: {
            "111": { name: "天", desc: "剛健で創造的なエネルギー" },
            "000": { name: "地", desc: "包容し受容する安定感" },
            "100": { name: "雷", desc: "新しい始まりと強力な動き" },
            "011": { name: "風", desc: "柔軟で浸透する影響力" },
            "010": { name: "水", desc: "困難の中で流れる知恵" },
            "101": { name: "火", desc: "明快な判断と華やかな結実" },
            "001": { name: "山", desc: "止まって内実を期する重厚感" },
            "110": { name: "沢", desc: "喜びと疎通の和合" }
        }
    },
    zh: {
        title: "孟老师，周易奇才 🐶",
        subtitle: "让可爱的狗狗陪你一起用周易化解烦恼。",
        labelConcern: "有什么烦恼吗？狗狗朋友们来告诉你！ ✨",
        placeholder: "在这里具体写下你的烦恼，狗狗朋友们会帮你的...",
        startButton: "🐾 开始占卜 🐾",
        divinationGuide: (count) => `晃动木桶，逐一抽取爻位吧！ (${count}/6)`,
        analyzing: "狗狗正在聚集宇宙的灵气，为你分析烦恼... 🐾",
        dogBreedLabel: "为你传递运势的狗狗：",
        retryButton: "再试一次 🌸",
        disclaimer: "※ 周易占卜仅供参考！请不要过度迷信，仅供娱乐哦~ 💖",
        alertEmptyConcern: "有什么好奇的吗？先写下你的烦恼吧！ ✨",
        qPrefix: "问. ",
        empathy: "静静地看着你的烦恼，我能感受到你这段时间付出了多少心血。现在，让我们借助周易的智慧，一起寻找出路吧。",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `你抽到的运势是下卦 **${lower}** 和上卦 **${upper}** 的组合。`,
        defaultHexName: "神秘的卦象",
        navHome: "首页",
        navGuide: "64卦解读",
        navAbout: "关于",
        navPrivacy: "隐私",
        navContact: "联系我们",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "一次读懂64卦的内容库",
        guidePreviewDescription: "除了首页的占卜互动外，网站还提供一整页长篇内容，用现代语言解释每一卦的重点与建议。",
        openGuideButton: "查看64卦解读",
        visitorLabel: "访客",
        visitorLoading: "加载中...",
        aboutTitle: "关于孟老师，周易奇才",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">什么是周易？</h3>
                        <p>周易（I Ching）是东方最古老的经典之一，也被称为“变化之书”。它用64个卦象解释了宇宙万物的变化原理，数千年来一直是哲学、政治和伦理的指南。周易不仅仅是一个占卜工具，更是一个智慧宝库，帮助人们洞察现状并做出正确的选择。</p>
                        <p>本服务通过现代算法和可爱的狗狗角色重新诠释了这一经典智慧。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">服务说明</h3>
                        <p><strong>孟老师，周易奇才</strong>是一项解读型内容服务，根据用户输入的烦恼，用现代语言解释周易的象征与变化。我们的目标是帮助用户整理问题，反思现状，并找到判断的线索，而不仅仅是显示占卜结果。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">使用方法</h3>
                        <ol class="feature-list">
                            <li>请具体写下您当前最在意的情况。</li>
                            <li>逐一抽取爻位，并在这个过程中集中注意力。</li>
                            <li>结果出现后，请结合卦名、象征和建议，对照您的现实情况。</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">本网站提供的阅读内容</h2>
                        <p><strong>孟老师，周易奇才</strong>旨在帮助用户整理思绪，并通过周易的智慧反思当下。我们为现代观众重新诠释了传统的64卦，提供深度阅读内容。</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">内容运营原则</h3>
                        <p>本网站内容更重视反思与解读，而非刺激性的断言。对于健康、法律、投资等专业领域，我们建议参考实际信息，保持平衡的视角。</p>
                    </article>
                </div>
        `,
        privacyTitle: "隐私政策",
        privacyContent: `
                <p><strong>1. 个人信息收集及利用目的</strong><br>
                本服务仅临时使用为生成占卜结果而输入的“烦恼内容”，不会在服务器上永久存储或识别个人身份。</p>
                <p><strong>2. Cookie 及广告</strong><br>
                本服务展示 Google AdSense 广告，并可能利用 Cookie 提供个性化广告。</p>
        `,
        contactTitle: "联系我们",
        contactContent: `
                <p>如果您在利用服务过程中有任何疑问或建议，请通过以下电子邮件与我们联系。</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>您的宝贵反馈将成为孟老师变得更聪明的巨大动力！</p>
        `,
        backHome: "🐾 返回首页 🐾",
        footerCopy: "&copy; 2026 孟老师，周易奇才. All rights reserved.",
        footerNote: "本网站的主要目的，是帮助访客阅读周易解读内容并认真整理自己的想法。",
        trigrams: {
            "111": { name: "天", desc: "刚健且富有创造力的能量" },
            "000": { name: "地", desc: "包容与接纳的稳定感" },
            "100": { name: "雷", desc: "新的开始和强有力的行动" },
            "011": { name: "风", desc: "柔和且具有渗透力的影响力" },
            "010": { name: "水", desc: "在艰难险阻中流动的智慧" },
            "101": { name: "火", desc: "明确的判断和灿烂的成果" },
            "001": { name: "山", desc: "静止以充实内力的沉稳感" },
            "110": { name: "泽", desc: "喜悦与沟通的和谐" }
        }
    },
    fr: {
        title: "Maître Meng, prodige du Yi Jing 🐶",
        subtitle: "Éclaire tes préoccupations avec l'aide de chiens adorables et de la sagesse du Yi Jing.",
        labelConcern: "Qu'est-ce qui t'inquiète ? Les toutous vont t'aider ! ✨",
        placeholder: "Écris ici ta préoccupation en détail, tes compagnons canins vont te guider...",
        startButton: "🐾 Commencer la divination 🐾",
        divinationGuide: (count) => `Secoue la boîte et tire une ligne ! (${count}/6)`,
        analyzing: "Le chien rassemble l'énergie de l'univers pour analyser ta préoccupation... 🐾",
        dogBreedLabel: "Le chien qui t'apporte ce message : ",
        retryButton: "Réessayer 🌸",
        disclaimer: "※ Lecture à titre récréatif uniquement. Prends cette sagesse comme un guide bienveillant~ 💖",
        alertEmptyConcern: "Qu'est-ce que te préoccupe ? Écris d'abord ton souci ! ✨",
        qPrefix: "Q. ",
        empathy: "En regardant ton inquiétude, je sens combien tu y as pensé avec sincérité. Ton cœur mérite d'être compris avec douceur. Appuyons-nous sur la sagesse du Yi Jing pour chercher une voie ensemble.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Le tirage unit le trigramme inférieur **${lower}** et le trigramme supérieur **${upper}**. Il montre ${upperDesc} qui se déploie au-dessus de ${lowerDesc}.`,
        defaultHexName: "Hexagramme mystérieux",
        navHome: "Accueil",
        navGuide: "64 hexagrammes",
        navAbout: "À propos",
        navPrivacy: "Confidentialité",
        navContact: "Contactez-nous",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "Une bibliothèque claire des 64 hexagrammes",
        guidePreviewDescription: "En plus de l'expérience interactive de la page d'accueil, le site propose une longue page de lecture qui explique chaque hexagramme dans un langage simple.",
        openGuideButton: "Ouvrir le guide des 64 hexagrammes",
        visitorLabel: "Visiteurs",
        visitorLoading: "Chargement...",
        aboutTitle: "À propos de Maître Meng, prodige du Yi Jing",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Qu'est-ce que le Yi Jing ?</h3>
                        <p>Le Yi Jing (Livre des Changements) est l'un des textes les plus anciens de l'Orient, également appelé "Livre des Transformations". Il explique les principes de changement de toutes choses à travers 64 hexagrammes et sert de guide philosophique, politique et éthique depuis des millénaires. Au-delà d'un simple outil de divination, c'est un trésor de sagesse qui aide à comprendre la situation actuelle et à faire les bons choix.</p>
                        <p>Notre service réinterprète cette sagesse classique à travers des algorithmes modernes et d'adorables personnages canins.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Guide du service</h3>
                        <p><strong>Maître Meng, prodige du Yi Jing</strong> est un service de contenu interprétatif qui explique les symboles et les flux du Yi Jing dans un langage moderne basé sur les préoccupations des utilisateurs. Notre objectif est d'aider les utilisateurs à organiser leurs questions et à réfléchir sur leur situation actuelle.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Mode d'emploi</h3>
                        <ol class="feature-list">
                            <li>Décrivez précisément votre situation actuelle.</li>
                            <li>Prenez le temps de vous concentrer en tirant chaque ligne.</li>
                            <li>Lisez le résultat et comparez la sagesse avec votre réalité.</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Contenus de lecture proposés</h2>
                        <p><strong>Maître Meng, prodige du Yi Jing</strong> est conçu pour aider les visiteurs à mettre de l'ordre dans leurs pensées grâce à la sagesse du Yi Jing. Nous réinterprétons les 64 hexagrammes pour un public moderne.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principes éditoriaux</h3>
                        <p>Nous privilégions le langage réfléchi et interprétatif aux prédictions sensationnalistes. Pour les sujets demandant un avis professionnel (santé, droit, finance), nous encourageons les utilisateurs à consulter des experts réels.</p>
                    </article>
                </div>
        `,
        privacyTitle: "Politique de confidentialité",
        privacyContent: `
                <p><strong>1. Finalité</strong><br>
                Ce service utilise le contenu des préoccupations uniquement de manière temporaire pour générer le résultat. Nous ne stockons pas d'informations d'identification personnelle.</p>
                <p><strong>2. Cookies et publicité</strong><br>
                Nous utilisons Google AdSense et des cookies pour offrir une meilleure expérience et des publicités pertinentes.</p>
        `,
        contactTitle: "Contactez-nous",
        contactContent: `
                <p>Si vous avez des questions ou des suggestions concernant l'utilisation du service, veuillez nous contacter par e-mail ci-dessous.</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>Vos précieux commentaires aident Maître Meng à devenir encore plus intelligent !</p>
        `,
        backHome: "🐾 Retour à l'accueil 🐾",
        footerCopy: "&copy; 2026 Maître Meng, prodige du Yi Jing. All rights reserved.",
        footerNote: "L'objectif principal de ce site est d'aider les visiteurs à lire des interprétations du Yi Jing et à mettre leurs pensées en ordre.",
        trigrams: {
            "111": { name: "Ciel", desc: "une énergie forte et créatrice" },
            "000": { name: "Terre", desc: "une stabilité accueillante et réceptive" },
            "100": { name: "Tonnerre", desc: "un nouvel élan et un mouvement puissant" },
            "011": { name: "Vent", desc: "une influence souple qui s'infiltre partout" },
            "010": { name: "Eau", desc: "une sagesse qui continue de couler dans l'épreuve" },
            "101": { name: "Feu", desc: "une lucidité nette et un rayonnement visible" },
            "001": { name: "Montagne", desc: "une force intérieure calme et concentrée" },
            "110": { name: "Lac", desc: "une harmonie faite de joie et d'échange" }
        }
    },
    de: {
        title: "Meister Meng, das Genie des I Ging 🐶",
        subtitle: "Lass deine Sorgen mit niedlichen Hunden und der Weisheit des I Ging deuten.",
        labelConcern: "Was beschäftigt dich? Die Hunde helfen dir weiter! ✨",
        placeholder: "Schreib hier dein Anliegen möglichst genau auf, deine Hundefreunde begleiten dich...",
        startButton: "🐾 Deutung starten 🐾",
        divinationGuide: (count) => `Schüttle die Box und ziehe eine Linie! (${count}/6)`,
        analyzing: "Der Hund sammelt kosmische Energie und deutet gerade dein Anliegen... 🐾",
        dogBreedLabel: "Der Hund, der dir die Botschaft bringt: ",
        retryButton: "Noch einmal 🌸",
        disclaimer: "※ Nur zur Unterhaltung gedacht. Nimm die Weisheit als sanfte Orientierung~ 💖",
        alertEmptyConcern: "Was möchtest du wissen? Schreib zuerst dein Anliegen auf! ✨",
        qPrefix: "F. ",
        empathy: "Ich spüre, wie intensiv du dich mit diesem Thema beschäftigt hast. Dein aufrichtiges Herz verdient eine ruhige und freundliche Antwort. Schauen wir gemeinsam mit der Weisheit des I Ging auf deinen Weg.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Dein Zeichen verbindet das untere Trigramm **${lower}** mit dem oberen Trigramm **${upper}**. Es zeigt ${upperDesc}, das sich über ${lowerDesc} entfaltet.`,
        defaultHexName: "Geheimnisvolles Hexagramm",
        navHome: "Start",
        navGuide: "64 Hexagramme",
        navAbout: "Über uns",
        navPrivacy: "Datenschutz",
        navContact: "Kontakt",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "Eine gut lesbare Bibliothek zu allen 64 Hexagrammen",
        guidePreviewDescription: "Zusätzlich zur Deutung auf der Startseite gibt es eine ausführliche Leseseite, die jedes Hexagramm in klarer moderner Sprache erklärt.",
        openGuideButton: "64-Hexagramm-Guide öffnen",
        visitorLabel: "Besucher",
        visitorLoading: "Laden...",
        aboutTitle: "Über Meister Meng, das Genie des I Ging",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">Was ist das I Ging?</h3>
                        <p>Das I Ging (Buch der Wandlungen) ist einer der ältesten Texte des Ostens, auch bekannt als "Buch der Veränderungen". Es erklärt die Prinzipien des Wandels aller Dinge durch 64 Hexagramme und dient seit Jahrtausenden als Leitfaden für Philosophie, Politik und Ethik. Über ein bloßes Wahrsagewerkzeug hinaus ist es ein Schatz an Weisheit, der hilft, die gegenwärtige Situation zu verstehen und richtige Entscheidungen zu treffen.</p>
                        <p>Unser Service interpretiert diese klassische Weisheit durch moderne Algorithmen und liebenswerte Hundebegleiter neu.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Service-Leitfaden</h3>
                        <p><strong>Meister Meng, das Genie des I Ging</strong> ist ein interpretierender Inhaltsdienst, der die Symbole und Bewegungen des I Ging in moderner Sprache erklärt. Unser Ziel ist es, Nutzern zu helfen, ihre Fragen zu ordnen und über ihre Lebenssituation nachzudenken.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">So wird es genutzt</h3>
                        <ol class="feature-list">
                            <li>Beschreiben Sie Ihr Anliegen möglichst konkret.</li>
                            <li>Konzentrieren Sie sich, während Sie die Linien einzeln ziehen.</li>
                            <li>Vergleichen Sie das Ergebnis und die Hinweise mit Ihrer aktuellen Lage.</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Inhalte auf dieser Seite</h2>
                        <p><strong>Meister Meng, das Genie des I Ging</strong> hilft Besuchern, ihre Gedanken mit der Weisheit des I Ging zu ordnen. Wir interpretieren die traditionellen 64 Hexagramme für ein modernes Publikum neu.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Redaktionelle Grundsätze</h3>
                        <p>Wir setzen auf Reflexion und Deutung statt auf sensationelle Vorhersagen. Bei Fachthemen (Gesundheit, Recht, Finanzen) empfehlen wir, reale Experten zu Rate zu ziehen.</p>
                    </article>
                </div>
        `,
        privacyTitle: "Datenschutz",
        privacyContent: `
                <p><strong>1. Zweck</strong><br>
                Wir verwenden den Text des Anliegens nur vorübergehend, um das Ergebnis zu generieren. Wir speichern keine personenbezogenen Daten.</p>
                <p><strong>2. Cookies & Werbung</strong><br>
                Wir nutzen Google AdSense und Cookies, um ein besseres Erlebnis und relevante Werbung zu bieten.</p>
        `,
        contactTitle: "Kontakt",
        contactContent: `
                <p>Wenn Sie Fragen oder Anregungen zur Nutzung des Dienstes haben, kontaktieren Sie uns bitte unter der unten angegebenen E-Mail-Adresse.</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>Ihr wertvolles Feedback hilft Meister Meng, noch schlauer zu werden!</p>
        `,
        backHome: "🐾 Zurück zur Startseite 🐾",
        footerCopy: "&copy; 2026 Meister Meng, das Genie des I Ging. All rights reserved.",
        footerNote: "Der Hauptzweck dieser Seite ist es, Besuchern beim Lesen von I-Ging-Deutungen und beim Ordnen ihrer Gedanken zu helfen.",
        trigrams: {
            "111": { name: "Himmel", desc: "eine starke und schöpferische Energie" },
            "000": { name: "Erde", desc: "eine aufnehmende und tragende Stabilität" },
            "100": { name: "Donner", desc: "ein neuer Anfang und kraftvolle movement" },
            "011": { name: "Wind", desc: "ein sanfter Einfluss, der sich ausbreitet" },
            "010": { name: "Wasser", desc: "Weisheit, die selbst durch Schwierigkeiten weiterfließt" },
            "101": { name: "Feuer", desc: "klare Einsicht und leuchtende Ergebnisse" },
            "001": { name: "Berg", desc: "innere Ruhe und gefestigte Kraft" },
            "110": { name: "See", desc: "freudige Harmonie und lebendige Verbindung" }
        }
    },
    es: {
        title: "Maestro Meng: genio del I Ching 🐶",
        subtitle: "Explora tus inquietudes con perritos adorables y la sabiduría ancestral del I Ching.",
        labelConcern: "¿Qué te preocupa? ¡Los perritos te van a orientar! ✨",
        placeholder: "Escribe aquí tu preocupación con detalle y tus amigos perrunos te acompañarán...",
        startButton: "🐾 Empezar la lectura 🐾",
        divinationGuide: (count) => `Sacude la caja y saca una línea. (${count}/6)`,
        analyzing: "El perrito está reuniendo energía cósmica para analizar tu preocupación... 🐾",
        dogBreedLabel: "El perro que te trae este mensaje: ",
        retryButton: "Intentarlo de nuevo 🌸",
        disclaimer: "※ Solo para disfrutarlo como orientación amable. No lo tomes como algo absoluto~ 💖",
        alertEmptyConcern: "¿Qué te inquieta? Primero escribe tu preocupación. ✨",
        qPrefix: "P. ",
        empathy: "Puedo sentir cuánto has pensado en este tema y cuánta sinceridad hay en tu corazón. Mereces una respuesta cálida y clara. Vamos a mirar tu camino junto a la sabiduría del I Ching.",
        interactionTemplate: (lower, upper, lowerDesc, upperDesc) => `Tu lectura une el trigrama inferior **${lower}** con el trigrama superior **${upper}**. Muestra ${upperDesc} desplegándose sobre ${lowerDesc}.`,
        defaultHexName: "Hexagramma misterioso",
        navHome: "Inicio",
        navGuide: "64 hexagramas",
        navAbout: "Información",
        navPrivacy: "Privacidad",
        navContact: "Contáctanos",
        guidePreviewEyebrow: "I Ching Library",
        guidePreviewTitle: "Una biblioteca clara de los 64 hexagramas",
        guidePreviewDescription: "Además de la experiencia interactiva de la portada, el sitio ofrece una página extensa que explica cada hexagrama en lenguaje actual.",
        openGuideButton: "Abrir la guía de los 64 hexagramas",
        visitorLabel: "Visitantes",
        visitorLoading: "Cargando...",
        aboutTitle: "Sobre Maestro Meng: genio del I Ching",
        aboutContent: `
                <section class="content-grid">
                    <article class="content-panel">
                        <h3 class="section-title">¿Qué es el I Ching?</h3>
                        <p>El I Ching (Libro de los Cambios) es uno de los textos más antiguos de Oriente, también conocido como el "Libro de las Mutaciones". Explica los principios del cambio de todas las cosas a través de 64 hexagramas y ha servido como guía filosófica, política y ética durante milenios. Más allá de una simple herramienta de adivinación, es un tesoro de sabiduría que ayuda a comprender la situación actual y a tomar las decisiones correctas.</p>
                        <p>Nuestro servicio reinterpreta esta sabiduría clásica a través de algoritmos modernos y entrañables personajes caninos.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Guía del servicio</h3>
                        <p><strong>Maestro Meng: genio del I Ching</strong> es un servicio de contenido interpretativo que explica los símbolos y flujos del I Ching en un lenguaje moderno. Nuestro objetivo es ayudar a los usuarios a organizar sus preguntas y reflexionar sobre su situación con calma.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Cómo usarlo</h3>
                        <ol class="feature-list">
                            <li>Describa su situación actual con la mayor precisión posible.</li>
                            <li>Tómese un momento para concentrarse mientras dibuja cada línea.</li>
                            <li>Lea el resultado y compare la sabiduría con su realidad.</li>
                        </ol>
                    </article>
                </section>
        `,
        publisherContent: `
                <div class="content-grid">
                    <article class="content-panel">
                        <h2 id="publisher-content-title" class="section-title">Materiales de lectura</h2>
                        <p><strong>Maestro Meng: genio del I Ching</strong> está diseñado para ayudar a los visitantes a ordenar sus pensamientos. Reinterpretamos los 64 hexagramas tradicionales para una audiencia moderna.</p>
                    </article>
                    <article class="content-panel">
                        <h3 class="section-title">Principios editoriales</h3>
                        <p>Preferimos el lenguaje reflexivo a las predicciones sensacionalistas. Para temas profesionales (salud, leyes, finanzas), animamos a consultar fuentes expertas reales.</p>
                    </article>
                </div>
        `,
        privacyTitle: "Privacidad",
        privacyContent: `
                <p><strong>1. Finalidad</strong><br>
                Usamos el texto de la preocupación solo de forma temporal para generar el resultado. No almacenamos información de identificación personal.</p>
                <p><strong>2. Cookies y publicidad</strong><br>
                Usamos Google AdSense y cookies para ofrecer una mejor experiencia y anuncios relevantes.</p>
        `,
        contactTitle: "Contáctanos",
        contactContent: `
                <p>Si tiene alguna pregunta o sugerencia sobre el uso del servicio, contáctenos a través del siguiente correo electrónico.</p>
                <p><strong>Email:</strong> support@bookofchange-71fed.web.app</p>
                <p>¡Sus valiosos comentarios ayudan al Maestro Meng a ser aún más inteligente!</p>
        `,
        backHome: "🐾 Volver al inicio 🐾",
        footerCopy: "&copy; 2026 Maestro Meng: genio del I Ching. All rights reserved.",
        footerNote: "La finalidad principal de este sitio es ayudar a los visitantes a leer interpretaciones del I Ching y ordenar sus pensamientos con calma.",
        trigrams: {
            "111": { name: "Cielo", desc: "una energía fuerte y creadora" },
            "000": { name: "Tierra", desc: "una estabilidad receptiva que acoge" },
            "100": { name: "Trueno", desc: "un nuevo comienzo y un movement poderoso" },
            "011": { name: "Viento", desc: "una influencia flexible que se extiende con suavidad" },
            "010": { name: "Agua", desc: "sabiduría que sigue fluyendo incluso en la dificultad" },
            "101": { name: "Fuego", desc: "claridad de juicio y resultados luminosos" },
            "001": { name: "Montaña", desc: "quietud con fuerza interior" },
            "110": { name: "Lago", desc: "armonía nacida de la alegría y la comunicación" }
        }
    }
};

const dogBreeds = [
    "골든 리트리버", "보더 콜리", "시바견", "푸들", "웰시 코기", "비글", "닥스훈트", "요크셔 테리어",
    "말티즈", "포메라니안", "치와와", "시추", "비숑 프리제", "진돗개", "퍼그", "불독",
    "허스키", "말라뮤트", "사모예드", "도베르만", "셰퍼드", "래브라도", "그레이하운드", "달마시안",
    "코커 스패니얼", "파피용", "불 테리어", "슈나우저", "복서", "로트와일러", "마스티프", "보르조이",
    "아키타견", "차우차우", "페키니즈", "살루키", "휘핏", "바셋 하운드", "그레이트 데인", "세인트 버나드",
    "올드 쉽독", "울프하운드", "뉴펀들랜드", "와이마라너", "리지백", "샤르페이", "바센지", "잭 러셀",
    "캐벌리어", "미니어처 핀셔", "티베탄 마스티프", "아프간 하운드", "블러드하운드", "벨기에 셰퍼드", "아이리시 세터", "화이트 테리어",
    "보스턴 테리어", "프렌치 불독", "스코티시 테리어", "베들링턴", "웰시 테리어", "엘크하운드", "잉글리시 세터", "비즐라"
];

const dogBreedsEn = [
    "Golden Retriever", "Border Collie", "Shiba Inu", "Poodle", "Welsh Corgi", "Beagle", "Dachshund", "Yorkshire Terrier",
    "Maltese", "Pomeranian", "Chihuahua", "Shih Tzu", "Bichon Frise", "Jindo Dog", "Pug", "Bulldog",
    "Husky", "Alaskan Malamute", "Samoyed", "Doberman", "German Shepherd", "Labrador Retriever", "Greyhound", "Dalmatian",
    "Cocker Spaniel", "Papillon", "Bull Terrier", "Schnauzer", "Boxer", "Rottweiler", "Mastiff", "Borzoi",
    "Akita", "Chow Chow", "Pekingese", "Saluki", "Whippet", "Basset Hound", "Great Dane", "St. Bernard",
    "Old English Sheepdog", "Irish Wolfhound", "Newfoundland", "Weimaraner", "Rhodesian Ridgeback", "Shar Pei", "Basenji", "Jack Russell Terrier",
    "Cavalier King Charles Spaniel", "Miniature Pinscher", "Tibetan Mastiff", "Afghan Hound", "Bloodhound", "Belgian Shepherd", "Irish Setter", "West Highland White Terrier",
    "Boston Terrier", "French Bulldog", "Scottish Terrier", "Bedlington Terrier", "Welsh Terrier", "Norwegian Elkhound", "English Setter", "Vizsla"
];

const hexagramNames = {
    "111111": "중천건", "000000": "중지곤", "100010": "수뢰진", "010001": "산수몽",
    "111010": "수천수", "010111": "천수송", "000010": "지수사", "010000": "수지비",
    "111011": "풍천소축", "110111": "천택리", "111000": "지천태", "000111": "천지비",
    "111101": "천화동인", "101111": "화천대유", "001000": "지산겸", "000100": "뇌지예",
    "100110": "택뢰수", "011001": "산풍고", "110000": "지택임", "000011": "풍지관",
    "100101": "화뢰서합", "101001": "산화비", "000001": "산지박", "100000": "지뢰복",
    "111100": "천뢰무망", "001111": "산천대축", "100001": "산뢰이", "011110": "택풍대과",
    "010010": "중수감", "101101": "중화리", "011000": "택산함", "000110": "뇌풍항",
    "001111": "천산둔", "111100": "뇌천대장", "000101": "화지진", "101000": "지화명이",
    "101011": "풍화가인", "110101": "화택규", "001010": "수산건", "010100": "뇌수해",
    "110001": "산택손", "100011": "풍뢰익", "111110": "택천쾌", "011111": "천풍구",
    "000110": "택지췌", "011000": "지풍승", "010110": "택수곤", "011010": "수풍정",
    "101110": "택화혁", "011101": "화풍정", "100100": "중뢰진", "001001": "중산간",
    "001011": "풍산점", "110100": "뇌택귀매", "101100": "뇌화풍", "001101": "산화려",
    "011011": "중풍손", "110110": "중택태", "011010": "풍수환", "010110": "수택절",
    "110011": "풍택중부", "001100": "뇌산소과", "010101": "수화기제", "101010": "화수미제"
};

const hexagramNamesEn = {
    "111111": "The Creative", "000000": "The Receptive", "100010": "Difficulty at the Beginning", "010001": "Youthful Folly",
    "111010": "Waiting", "010111": "Conflict", "000010": "The Army", "010000": "Holding Together",
    "111011": "Small Taming", "110111": "Treading", "111000": "Peace", "000111": "Standstill",
    "111101": "Fellowship", "101111": "Great Possession", "001000": "Modesty", "000100": "Enthusiasm",
    "100110": "Following", "011001": "Work on the Decayed", "110000": "Approach", "000011": "Contemplation",
    "100101": "Biting Through", "101001": "Grace", "000001": "Splitting Apart", "100000": "Return",
    "111100": "Innocence", "001111": "Great Taming", "100001": "Providing Nourishment", "011110": "Preponderance of the Great",
    "010010": "The Abysmal", "101101": "The Clinging", "011000": "Influence", "000110": "Duration",
    "001111": "Retreat", "111100": "Power of the Great", "000101": "Progress", "101000": "Darkening of the Light",
    "101011": "The Family", "110101": "Opposition", "001010": "Obstruction", "010100": "Deliverance",
    "110001": "Decrease", "100011": "Increase", "111110": "Breakthrough", "011111": "Coming to Meet",
    "000110": "Gathering Together", "011000": "Pushing Upward", "010110": "Oppression", "011010": "The Well",
    "101110": "Revolution", "011101": "The Cauldron", "100100": "The Arousing", "001001": "Keeping Still",
    "001011": "Development", "110100": "The Marrying Maiden", "101100": "Abundance", "001101": "The Wanderer",
    "011011": "The Gentle", "110110": "The Joyous", "011010": "Dispersion", "010110": "Limitation",
    "110011": "Inner Truth", "001100": "Preponderance of the Small", "010101": "After Completion", "101010": "Before Completion"
};

// --- (1) State & UI Logic ---
let currentLang = 'ko';
let drawnLines = [];
let userConcern = "";
let visitorCount = null;
let visitorCountState = 'loading';

const VISITOR_COUNTER_STORAGE_KEY = 'paw-iching-visitor-counted-v1';
const VISITOR_COUNTER_URL = 'https://us-central1-bookofchange-71fed.cloudfunctions.net/getVisitorCount';
const ADSENSE_CLIENT_ID = 'ca-pub-3074209859520017';

// Select elements
let titleEl, subtitleEl, labelConcernEl, concernInputEl, startButtonEl, retryButtonEl, disclaimerTextEl, footerCopyEl;
let footerNoteEl;
let navHomeEl, navGuideEl, navAboutEl, navPrivacyEl, navContactEl, aboutTitleEl, privacyTitleEl, contactTitleEl, guideTitleEl, aboutContentEl, privacyContentEl, contactContentEl, publisherContentEl, guideContentEl;
let visitorCounterEl, visitorCounterLabelEl, visitorCounterValueEl;
let backHomeButtons;
let guidePreviewEyebrowEl, guidePreviewTitleEl, guidePreviewDescriptionEl, openGuideButtonEl;

function hasPublisherContent() {
    const mainContainer = document.getElementById('main-container');
    const homeView = document.getElementById('home-view');
    if (!mainContainer || !homeView) return false;

    const combinedText = (mainContainer.innerText || '').replace(/\s+/g, ' ').trim();
    return combinedText.length >= 300 && homeView.querySelector('#publisher-content');
}

function loadAdSenseScriptIfEligible() {
    if (!hasPublisherContent()) {
        console.warn('AdSense deferred because publisher content was not detected.');
        return;
    }

    if (document.querySelector('script[data-adsense-loader="true"]')) return;

    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.crossOrigin = 'anonymous';
    adScript.dataset.adsenseLoader = 'true';
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    document.head.appendChild(adScript);
}

function updateUI() {
    console.log("Updating UI for:", currentLang);
    const t = i18n[currentLang];
    if (!t) return;

    document.documentElement.lang = currentLang;
    document.title = t.title;

    if (titleEl) titleEl.textContent = t.title;
    if (subtitleEl) subtitleEl.textContent = t.subtitle;
    if (labelConcernEl) labelConcernEl.textContent = t.labelConcern;
    if (concernInputEl) concernInputEl.placeholder = t.placeholder;
    if (startButtonEl) startButtonEl.textContent = t.startButton;
    if (retryButtonEl) retryButtonEl.textContent = t.retryButton;
    if (disclaimerTextEl) disclaimerTextEl.textContent = t.disclaimer;
    if (footerCopyEl) footerCopyEl.innerHTML = t.footerCopy;
    if (footerNoteEl && t.footerNote) footerNoteEl.textContent = t.footerNote;

    if (navHomeEl) navHomeEl.textContent = t.navHome;
    if (navGuideEl) navGuideEl.textContent = t.navGuide;
    if (navAboutEl) navAboutEl.textContent = t.navAbout;
    if (navPrivacyEl) navPrivacyEl.textContent = t.navPrivacy;
    if (navContactEl) navContactEl.textContent = t.navContact;
    if (guidePreviewEyebrowEl) guidePreviewEyebrowEl.textContent = t.guidePreviewEyebrow;
    if (guidePreviewTitleEl) guidePreviewTitleEl.textContent = t.guidePreviewTitle;
    if (guidePreviewDescriptionEl) guidePreviewDescriptionEl.textContent = t.guidePreviewDescription;
    if (openGuideButtonEl) openGuideButtonEl.textContent = t.openGuideButton;
    if (aboutTitleEl) aboutTitleEl.textContent = t.aboutTitle;
    if (privacyTitleEl) privacyTitleEl.textContent = t.privacyTitle;
    if (contactTitleEl) contactTitleEl.textContent = t.contactTitle;
    if (guideTitleEl) guideTitleEl.textContent = getGuideLocale(currentLang).title;
    if (aboutContentEl) aboutContentEl.innerHTML = t.aboutContent;
    if (publisherContentEl && t.publisherContent) publisherContentEl.innerHTML = t.publisherContent;
    if (guideContentEl) guideContentEl.innerHTML = buildGuideHTML(currentLang);
    if (privacyContentEl) privacyContentEl.innerHTML = t.privacyContent;
    if (contactContentEl) contactContentEl.innerHTML = t.contactContent;

    // Update Footer Navigation Text
    document.querySelectorAll('.footer-nav-home').forEach(el => el.textContent = t.navHome);
    document.querySelectorAll('.footer-nav-guide').forEach(el => el.textContent = t.navGuide);
    document.querySelectorAll('.footer-nav-about').forEach(el => el.textContent = t.navAbout);
    document.querySelectorAll('.footer-nav-privacy').forEach(el => el.textContent = t.navPrivacy);
    document.querySelectorAll('.footer-nav-contact').forEach(el => el.textContent = t.navContact);

    updateVisitorCounterUI();
    backHomeButtons.forEach(btn => btn.textContent = t.backHome);

    const divinationView = document.getElementById('divination-view');
    if (divinationView && !divinationView.classList.contains('hidden')) {
        const countDisplay = document.getElementById('divination-guide');
        if (countDisplay) countDisplay.textContent = t.divinationGuide(drawnLines.length);
    }
}

function showView(viewId) {
    console.log("Showing view:", viewId);
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
    window.scrollTo(0, 0);
}
function formatVisitorCount(value) {
    if (!Number.isFinite(value)) return '--';
    return new Intl.NumberFormat(currentLang).format(value);
}

function updateVisitorCounterUI() {
    const t = i18n[currentLang];
    if (!t || !visitorCounterLabelEl || !visitorCounterValueEl || !visitorCounterEl) return;

    visitorCounterLabelEl.textContent = t.visitorLabel;
    visitorCounterValueEl.textContent = visitorCountState === 'ready'
        ? formatVisitorCount(visitorCount)
        : visitorCountState === 'loading'
            ? t.visitorLoading
            : '--';
    visitorCounterEl.setAttribute('aria-label', t.visitorLabel + ' ' + visitorCounterValueEl.textContent);
}

async function syncVisitorCount() {
    let shouldIncrement = false;

    try {
        shouldIncrement = localStorage.getItem(VISITOR_COUNTER_STORAGE_KEY) !== '1';
    } catch (error) {
        console.warn('localStorage unavailable for visitor counter:', error);
        shouldIncrement = true;
    }

    try {
        const requestUrl = new URL(VISITOR_COUNTER_URL);
        if (shouldIncrement) requestUrl.searchParams.set('increment', '1');

        const res = await fetch(requestUrl.toString(), { method: 'GET' });

        if (!res.ok) throw new Error('Visitor counter request failed with ' + res.status);

        const data = await res.json();
        const nextCount = Number(data.count);
        if (!Number.isFinite(nextCount)) {
            throw new Error('Visitor counter returned an invalid count');
        }

        visitorCount = nextCount;
        visitorCountState = 'ready';
        updateVisitorCounterUI();

        if (shouldIncrement) {
            try {
                localStorage.setItem(VISITOR_COUNTER_STORAGE_KEY, '1');
            } catch (error) {
                console.warn('Unable to persist visitor counter state:', error);
            }
        }
    } catch (error) {
        console.error('Visitor counter error:', error);
        visitorCount = null;
        visitorCountState = 'error';
        updateVisitorCounterUI();
    }
}

// Initial setup after DOM load
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Initializing...");

    // Map elements
    titleEl = document.getElementById('title');
    subtitleEl = document.getElementById('subtitle');
    labelConcernEl = document.getElementById('label-concern');
    concernInputEl = document.getElementById('concern-input');
    startButtonEl = document.getElementById('start-button');
    retryButtonEl = document.getElementById('retry-button');
    disclaimerTextEl = document.getElementById('disclaimer-text');
    footerCopyEl = document.getElementById('footer-copy');
    footerNoteEl = document.getElementById('footer-note');

    navHomeEl = document.getElementById('nav-home');
    navGuideEl = document.getElementById('nav-guide');
    navAboutEl = document.getElementById('nav-about');
    navPrivacyEl = document.getElementById('nav-privacy');
    navContactEl = document.getElementById('nav-contact');
    guideTitleEl = document.getElementById('guide-title');
    aboutTitleEl = document.getElementById('about-title');
    privacyTitleEl = document.getElementById('privacy-title');
    contactTitleEl = document.getElementById('contact-title');
    aboutContentEl = document.getElementById('about-content');
    publisherContentEl = document.getElementById('publisher-content');
    guideContentEl = document.getElementById('guide-content');
    privacyContentEl = document.getElementById('privacy-content');
    contactContentEl = document.getElementById('contact-content');
    visitorCounterEl = document.getElementById('visitor-counter');
    visitorCounterLabelEl = document.getElementById('visitor-counter-label');
    visitorCounterValueEl = document.getElementById('visitor-counter-value');
    guidePreviewEyebrowEl = document.getElementById('guide-preview-eyebrow');
    guidePreviewTitleEl = document.getElementById('guide-preview-title');
    guidePreviewDescriptionEl = document.getElementById('guide-preview-description');
    openGuideButtonEl = document.getElementById('open-guide-button');
    backHomeButtons = document.querySelectorAll('.back-home-button');

    // Browser language detection
    const userLang = navigator.language.split('-')[0];
    if (i18n[userLang]) {
        currentLang = userLang;
        const langSelect = document.getElementById('lang-select');
        if (langSelect) langSelect.value = userLang;
    }

    updateVisitorCounterUI();

    // Language Switcher
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            console.log("Language changed to:", currentLang);
            updateUI();
        });
    } else {
        console.error("lang-select not found!");
    }

    // Navigation
    if (navHomeEl) navHomeEl.addEventListener('click', (e) => { e.preventDefault(); showView('home-view'); });
    if (navGuideEl) navGuideEl.addEventListener('click', (e) => { e.preventDefault(); showView('guide-view'); });
    if (navAboutEl) navAboutEl.addEventListener('click', (e) => { e.preventDefault(); showView('about-view'); });
    if (navPrivacyEl) navPrivacyEl.addEventListener('click', (e) => { e.preventDefault(); showView('privacy-view'); });
    if (navContactEl) navContactEl.addEventListener('click', (e) => { e.preventDefault(); showView('contact-view'); });
    if (openGuideButtonEl) openGuideButtonEl.addEventListener('click', () => showView('guide-view'));
    
    // Footer Navigation
    document.querySelectorAll('.footer-nav-home').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView('home-view'); }));
    document.querySelectorAll('.footer-nav-guide').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView('guide-view'); }));
    document.querySelectorAll('.footer-nav-about').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView('about-view'); }));
    document.querySelectorAll('.footer-nav-privacy').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView('privacy-view'); }));
    document.querySelectorAll('.footer-nav-contact').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); showView('contact-view'); }));
    
    backHomeButtons.forEach(btn => btn.addEventListener('click', () => showView('home-view')));

    // Fortune Logic
    if (startButtonEl) {
        startButtonEl.addEventListener('click', () => {
            userConcern = concernInputEl.value.trim();
            if (!userConcern) { alert(i18n[currentLang].alertEmptyConcern); return; }
            document.getElementById('input-view').classList.add('hidden');
            document.getElementById('divination-view').classList.remove('hidden');
            drawnLines = [];
            document.getElementById('drawn-lines-container').innerHTML = "";
            document.getElementById('divination-guide').textContent = i18n[currentLang].divinationGuide(0);
        });
    }

    const divBox = document.getElementById('divination-sticks-container');
    if (divBox) {
        divBox.addEventListener('click', () => {
            if (drawnLines.length >= 6) return;
            const popStick = document.querySelector('.popping-stick');
            popStick.classList.remove('pop-anim'); void popStick.offsetWidth; popStick.classList.add('pop-anim');
            
            const line = Math.random() > 0.5 ? 1 : 0;
            drawnLines.push(line);
            
            setTimeout(() => {
                const lineEl = document.createElement('div');
                lineEl.className = `yao-line ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
                document.getElementById('drawn-lines-container').appendChild(lineEl);
                document.getElementById('divination-guide').textContent = i18n[currentLang].divinationGuide(drawnLines.length);
                if (drawnLines.length === 6) setTimeout(showResult, 1000);
            }, 400);
        });
    }

    if (retryButtonEl) {
        retryButtonEl.addEventListener('click', () => {
            document.getElementById('fortune-result').classList.add('hidden');
            document.getElementById('input-view').classList.remove('hidden');
            concernInputEl.value = "";
        });
    }

    updateUI();
    syncVisitorCount();
    window.requestAnimationFrame(loadAdSenseScriptIfEligible);
});

async function generateFortune(userConcern, guaInfo) {
    const functionUrl = "https://generatefortune-zx5bjhhklq-uc.a.run.app";
    try {
        const res = await fetch(functionUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userConcern, guaInfo, lang: currentLang })
        });
        const data = await res.json();
        return data.result;
    } catch (e) {
        console.error("🔥 Error:", e);
        return null;
    }
}

async function showResult() {
    const t = i18n[currentLang];
    document.getElementById('divination-view').classList.add('hidden');
    document.getElementById('fortune-result').classList.remove('hidden');
    const interpretationEl = document.getElementById('hexagram-interpretation');
    interpretationEl.innerHTML = `<p style="text-align:center;">${t.analyzing}</p>`;

    const hexKey = drawnLines.join('');
    const lowerKey = hexKey.substring(0, 3);
    const upperKey = hexKey.substring(3, 6);
    
    let hexName = hexagramNames[hexKey] || t.defaultHexName;
    if (currentLang !== 'ko') { hexName = hexagramNamesEn[hexKey] || hexName; }

    const breedIdx = parseInt(hexKey, 2) % 64;
    let breedName = dogBreeds[breedIdx];
    if (currentLang !== 'ko') { breedName = dogBreedsEn[breedIdx] || breedName; }

    document.getElementById('dog-pixel-art-container').innerHTML = generateAnimatedDogSVG(breedIdx);
    document.getElementById('dog-breed-name').textContent = `${t.dogBreedLabel}${breedName}`;
    document.getElementById('hexagram-name').textContent = hexName;
    document.getElementById('user-concern-display').textContent = `${t.qPrefix}"${userConcern}"`;

    const miniYaoContainer = document.getElementById('hexagram-shape-display');
    miniYaoContainer.innerHTML = "";
    drawnLines.forEach(line => {
        const miniYao = document.createElement('div');
        miniYao.className = `mini-yao ${line === 1 ? 'yao-yang' : 'yao-yin'}`;
        miniYaoContainer.appendChild(miniYao);
    });

    const finalAdvice = await generateFortune(userConcern, { name: hexName });
    
    const trigrams = t.trigrams;
    const interaction = t.interactionTemplate(trigrams[lowerKey].name, trigrams[upperKey].name, trigrams[lowerKey].desc, trigrams[upperKey].desc);

    interpretationEl.innerHTML = `
        <p>${t.empathy}</p>
        <hr style="border: 0; border-top: 1px solid #ffe5ec; margin: 20px 0;">
        <p>${interaction}</p>
        <p>${(finalAdvice || t.fallbackAdvice || (currentLang === 'ko' ? "조금만 더 인내심을 갖고 때를 기다려봐." : "Be patient.")).replace(/\n/g, '<br>')}</p>
    `;
}

function generateAnimatedDogSVG(idx) {
    const palette = [
        { main: "#F5D6A7", shadow: "#D7B891", light: "#FFF0D1" },
        { main: "#E67E22", shadow: "#D35400", light: "#EB984E" },
        { main: "#D2B48C", shadow: "#A68D60", light: "#E5D3B3" },
        { main: "#795548", shadow: "#5D4037", light: "#8D6E63" },
        { main: "#555555", shadow: "#333333", light: "#777777" },
        { main: "#FFFFFF", shadow: "#E0E0E0", light: "#FFFFFF" }
    ];
    const c = palette[idx % palette.length];
    const tailWag = (0.3 + (idx % 4) * 0.15) + "s";

    return `<svg width="256" height="256" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" shape-rendering="pixelated">
        <style>
            @keyframes wag { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(15deg); } }
            @keyframes breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.03); } }
            @keyframes blink { 0%, 90%, 100% { opacity: 1; } 95% { opacity: 0; } }
            .dog-body { transform-origin: bottom; animation: breathe 2.5s infinite ease-in-out; }
            .dog-tail { transform-origin: 18px 18px; animation: wag ${tailWag} infinite ease-in-out; }
            .dog-eyes { animation: blink 4s infinite; }
        </style>
        <g class="dog-body">
            <rect x="18" y="15" width="3" height="3" fill="${c.shadow}" class="dog-tail" />
            <rect x="6" y="12" width="12" height="8" fill="${c.main}" />
            <rect x="6" y="18" width="12" height="2" fill="${c.shadow}" />
            <rect x="7" y="12" width="8" height="1" fill="${c.light}" />
            <rect x="5" y="5" width="10" height="8" fill="${c.main}" />
            <rect x="13" y="5" width="2" height="8" fill="${c.shadow}" />
            <rect x="6" y="5" width="7" height="1" fill="${c.light}" />
            <rect x="4" y="4" width="3" height="4" fill="${c.shadow}" />
            <rect x="13" y="4" width="3" height="4" fill="${c.shadow}" />
            <g class="dog-eyes"><rect x="7" y="8" width="1" height="1" fill="#000" /><rect x="11" y="8" width="1" height="1" fill="#000" /></g>
            <rect x="9" y="10" width="2" height="1" fill="#000" />
            <rect x="6" y="10" width="1" height="1" fill="#FFB6C1" opacity="0.6" /><rect x="13" y="10" width="1" height="1" fill="#FFB6C1" opacity="0.6" />
            <rect x="7" y="20" width="2" height="2" fill="${c.shadow}" /><rect x="15" y="20" width="2" height="2" fill="${c.shadow}" />
        </g>
    </svg>`;
}
